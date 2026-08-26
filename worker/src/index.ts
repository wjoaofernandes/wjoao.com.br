type KVLike = {
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { expirationTtl?: number }): Promise<void>;
  delete(key: string): Promise<void>;
};

type Env = {
  NOTION_ACCESS_TOKEN?: string;
  NOTION_TASKS_DATA_SOURCE_ID?: string;
  NOTION_NUTRITION_DATA_SOURCE_ID?: string;
  NOTION_FINANCE_DATA_SOURCE_ID?: string;
  NOTION_HEALTH_DATA_SOURCE_ID?: string;
  NOTION_TRAINING_DATA_SOURCE_ID?: string;
  NOTION_GOALS_DATA_SOURCE_ID?: string;
  NOTION_WEBHOOK_VERIFICATION_TOKEN?: string;
  NOTION_VERSION?: string;
  TIMEZONE?: string;
  REQUIRE_ACCESS?: string;
  ALLOWED_EMAIL?: string;
  LIFE_CACHE?: KVLike;
};

type NotionPage = {
  id: string;
  url?: string;
  created_time?: string;
  last_edited_time?: string;
  properties?: Record<string, any>;
};

const API_PREFIX = '/api';
const CACHE_TTL = 300;
const WEBHOOK_TOKEN_KEY = 'notion:webhook:verification_token';
const CACHE_KEYS = ['tasks:v1', 'nutrition:v1', 'dashboard:v1'];

const json = (data: unknown, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'private, no-store',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'no-referrer'
  }
});

function accessAllowed(request: Request, env: Env) {
  if (env.REQUIRE_ACCESS !== 'true') return true;
  const jwt = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!jwt) return false;
  if (!env.ALLOWED_EMAIL) return true;
  const email = request.headers.get('Cf-Access-Authenticated-User-Email');
  return email?.toLowerCase() === env.ALLOWED_EMAIL.toLowerCase();
}

function textValue(property: any) {
  const parts = property?.title ?? property?.rich_text ?? [];
  return parts.map((part: any) => part?.plain_text ?? '').join('');
}

function selectValue(property: any) {
  return property?.select?.name ?? property?.status?.name ?? null;
}

function numberValue(property: any) {
  return typeof property?.number === 'number' ? property.number : 0;
}

function dateValue(property: any) {
  return property?.date?.start ?? null;
}

function dateInTimeZone(timeZone: string, date = new Date()) {
  const parts = new Intl.DateTimeFormat('en', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).formatToParts(date);
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  return `${value('year')}-${value('month')}-${value('day')}`;
}

function nextDate(date: string) {
  const value = new Date(`${date}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return value.toISOString().slice(0, 10);
}

async function queryNotion(env: Env, dataSourceId: string, body: Record<string, unknown> = {}) {
  if (!env.NOTION_ACCESS_TOKEN) throw new Error('NOTION_ACCESS_TOKEN is not configured');
  const response = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.NOTION_ACCESS_TOKEN}`,
      'content-type': 'application/json',
      'notion-version': env.NOTION_VERSION ?? '2026-03-11'
    },
    body: JSON.stringify(body)
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Notion query failed with ${response.status}: ${detail.slice(0, 400)}`);
  }
  return response.json() as Promise<any>;
}

async function allPages(env: Env, dataSourceId: string, body: Record<string, any> = {}) {
  const rows: NotionPage[] = [];
  let cursor: string | undefined;
  do {
    const payload = { ...body, page_size: 100, ...(cursor ? { start_cursor: cursor } : {}) };
    const response = await queryNotion(env, dataSourceId, payload);
    rows.push(...(response.results ?? []));
    cursor = response.has_more ? response.next_cursor : undefined;
    if (rows.length >= 2000) break;
  } while (cursor);
  return rows;
}

async function cached<T>(env: Env, key: string, loader: () => Promise<T>, ttl = CACHE_TTL): Promise<T> {
  if (env.LIFE_CACHE) {
    const hit = await env.LIFE_CACHE.get(key);
    if (hit) return JSON.parse(hit) as T;
  }
  const value = await loader();
  if (env.LIFE_CACHE) await env.LIFE_CACHE.put(key, JSON.stringify(value), { expirationTtl: ttl });
  return value;
}

async function tasksPayload(env: Env) {
  return cached(env, 'tasks:v1', async () => {
    const dataSourceId = env.NOTION_TASKS_DATA_SOURCE_ID;
    if (!dataSourceId) return { configured: false, metrics: [], items: [], message: 'Tasks data source is not configured' };
    const pages = await allPages(env, dataSourceId);
    const now = new Date();
    const month = now.toISOString().slice(0, 7);
    const items = pages.map((page) => {
      const properties = page.properties ?? {};
      return {
        id: page.id,
        title: textValue(properties['Tarefa']),
        status: selectValue(properties['Status']),
        priority: selectValue(properties['Prioridade']),
        due: dateValue(properties['Prazo']),
        plannedStart: dateValue(properties['Início planejado']),
        completedAt: dateValue(properties['Concluído em']),
        confidential: properties['Confidencial']?.checkbox === true,
        editedAt: page.last_edited_time ?? null
      };
    });
    const isClosed = (status: string | null) => status === 'Concluída' || status === 'Cancelada';
    const open = items.filter((item) => !isClosed(item.status)).length;
    const doing = items.filter((item) => item.status === 'Em andamento').length;
    const late = items.filter((item) => item.due && new Date(item.due) < now && !isClosed(item.status)).length;
    const completedMonth = items.filter((item) => item.status === 'Concluída' && item.completedAt?.startsWith(month)).length;
    const upcoming = items
      .filter((item) => !isClosed(item.status))
      .sort((a, b) => (a.due ?? '9999').localeCompare(b.due ?? '9999'))
      .slice(0, 20);
    return {
      configured: true,
      updatedAt: new Date().toISOString(),
      metrics: [
        { label: 'Abertas', value: String(open), detail: 'Notion' },
        { label: 'Em andamento', value: String(doing), detail: 'Notion' },
        { label: 'Atrasadas', value: String(late), detail: 'Prazo vencido' },
        { label: 'Concluídas no mês', value: String(completedMonth), detail: month }
      ],
      items: upcoming
    };
  });
}

async function nutritionPayload(env: Env) {
  return cached(env, 'nutrition:v1', async () => {
    const dataSourceId = env.NOTION_NUTRITION_DATA_SOURCE_ID;
    if (!dataSourceId) return { configured: false, metrics: [], items: [], message: 'Nutrition data source is not configured' };
    const timeZone = env.TIMEZONE ?? 'Europe/Lisbon';
    const today = dateInTimeZone(timeZone);
    const tomorrow = nextDate(today);
    const pages = await allPages(env, dataSourceId, {
      filter: {
        and: [
          { property: 'Data e hora', date: { on_or_after: today } },
          { property: 'Data e hora', date: { before: tomorrow } }
        ]
      },
      sorts: [{ property: 'Data e hora', direction: 'ascending' }]
    });
    const items = pages.map((page) => {
      const properties = page.properties ?? {};
      return {
        id: page.id,
        record: textValue(properties['Registro']),
        meal: selectValue(properties['Refeição']),
        dateTime: dateValue(properties['Data e hora']),
        calories: numberValue(properties['Calorias']),
        protein: numberValue(properties['Proteína (g)']),
        carbs: numberValue(properties['Carboidratos (g)']),
        fat: numberValue(properties['Gordura (g)']),
        fiber: numberValue(properties['Fibra (g)']),
        estimated: properties['Estimado']?.checkbox === true
      };
    });
    const sum = (field: keyof typeof items[number]) => items.reduce((total, item) => total + (Number(item[field]) || 0), 0);
    const meals = new Set(items.map((item) => item.meal).filter(Boolean)).size;
    return {
      configured: true,
      updatedAt: new Date().toISOString(),
      day: today,
      metrics: [
        { label: 'Calorias', value: Math.round(sum('calories')).toLocaleString('pt-BR'), detail: 'Hoje' },
        { label: 'Proteína', value: `${Math.round(sum('protein'))} g`, detail: 'Hoje' },
        { label: 'Carboidratos', value: `${Math.round(sum('carbs'))} g`, detail: 'Hoje' },
        { label: 'Refeições', value: String(meals), detail: `${items.length} registros` }
      ],
      totals: {
        calories: sum('calories'),
        protein: sum('protein'),
        carbs: sum('carbs'),
        fat: sum('fat'),
        fiber: sum('fiber')
      },
      items
    };
  });
}

async function genericPayload(env: Env, section: 'finance' | 'health' | 'training' | 'goals') {
  const key = `NOTION_${section.toUpperCase()}_DATA_SOURCE_ID` as keyof Env;
  const configured = Boolean(env[key]);
  return {
    configured,
    updatedAt: new Date().toISOString(),
    metrics: [],
    items: [],
    message: configured ? 'Data source mapping is ready for implementation' : `${section} data source is not configured yet`
  };
}

async function dashboardPayload(env: Env) {
  return cached(env, 'dashboard:v1', async () => {
    const [tasks, nutrition] = await Promise.all([tasksPayload(env), nutritionPayload(env)]);
    return {
      updatedAt: new Date().toISOString(),
      modules: { tasks, nutrition }
    };
  }, 180);
}

function constantTimeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return mismatch === 0;
}

async function webhookSignature(token: string, rawBody: string) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(token),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(rawBody));
  const hex = Array.from(new Uint8Array(signature)).map((value) => value.toString(16).padStart(2, '0')).join('');
  return `sha256=${hex}`;
}

async function webhookToken(env: Env) {
  return env.NOTION_WEBHOOK_VERIFICATION_TOKEN ?? await env.LIFE_CACHE?.get(WEBHOOK_TOKEN_KEY) ?? null;
}

async function invalidateCaches(env: Env) {
  if (!env.LIFE_CACHE) return;
  await Promise.all(CACHE_KEYS.map((key) => env.LIFE_CACHE!.delete(key)));
}

async function handleNotionWebhook(request: Request, env: Env) {
  const rawBody = await request.text();
  let body: any;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return json({ error: 'invalid_json' }, 400);
  }

  if (body?.verification_token) {
    if (env.LIFE_CACHE) await env.LIFE_CACHE.put(WEBHOOK_TOKEN_KEY, String(body.verification_token));
    return json({ ok: true, verificationStored: Boolean(env.LIFE_CACHE) });
  }

  const token = await webhookToken(env);
  const received = request.headers.get('X-Notion-Signature');
  if (!token || !received) return json({ error: 'webhook_not_verified' }, 401);
  const expected = await webhookSignature(token, rawBody);
  if (!constantTimeEqual(received, expected)) return json({ error: 'invalid_signature' }, 401);

  await invalidateCaches(env);
  return json({ ok: true, accepted: true, eventType: body?.type ?? null }, 202);
}

async function route(request: Request, env: Env) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/+$/, '') || '/';

  if (request.method === 'POST' && path === `${API_PREFIX}/webhooks/notion`) {
    return handleNotionWebhook(request, env);
  }

  if (!accessAllowed(request, env)) return json({ error: 'unauthorized' }, 401);

  if (request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405);
  if (path === `${API_PREFIX}/healthz`) return json({ ok: true, service: 'wjoao-life-os-api', time: new Date().toISOString() });
  if (path === `${API_PREFIX}/tasks`) return json(await tasksPayload(env));
  if (path === `${API_PREFIX}/nutrition`) return json(await nutritionPayload(env));
  if (path === `${API_PREFIX}/finance`) return json(await genericPayload(env, 'finance'));
  if (path === `${API_PREFIX}/health`) return json(await genericPayload(env, 'health'));
  if (path === `${API_PREFIX}/training`) return json(await genericPayload(env, 'training'));
  if (path === `${API_PREFIX}/goals`) return json(await genericPayload(env, 'goals'));
  if (path === `${API_PREFIX}/dashboard`) return json(await dashboardPayload(env));
  if (path === `${API_PREFIX}/admin/notion-webhook-token`) {
    const token = await webhookToken(env);
    return json({ configured: Boolean(token), verificationToken: token });
  }
  return json({ error: 'not_found' }, 404);
}

export default {
  async fetch(request: Request, env: Env) {
    try {
      return await route(request, env);
    } catch (error) {
      console.error(error);
      return json({ error: 'internal_error', message: error instanceof Error ? error.message : 'Unexpected error' }, 500);
    }
  },

  async scheduled(_controller: ScheduledController, env: Env, ctx: ExecutionContext) {
    ctx.waitUntil(Promise.allSettled([
      tasksPayload(env),
      nutritionPayload(env),
      dashboardPayload(env)
    ]).then(() => undefined));
  }
};
