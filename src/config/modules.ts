export type LifeModule = {
  slug: string;
  label: string;
  icon: string;
  description: string;
  visibility: 'private' | 'public';
  source: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
};

export const privateModules: LifeModule[] = [
  {
    slug: 'tasks',
    label: 'Tasks & Agenda',
    icon: '✓',
    description: 'Tarefas, prioridades, prazos, agenda planejada, adiamentos e execução.',
    visibility: 'private',
    source: 'Notion · Tarefas e Agenda',
    metrics: [
      { label: 'Abertas', value: '—', detail: 'Conectará ao Notion' },
      { label: 'Em andamento', value: '—', detail: 'Conectará ao Notion' },
      { label: 'Atrasadas', value: '—', detail: 'Calculado pela API' },
      { label: 'Concluídas no mês', value: '—', detail: 'Calculado pela API' }
    ]
  },
  {
    slug: 'finance',
    label: 'Finanças',
    icon: '€',
    description: 'Fluxo financeiro, patrimônio, contas, investimentos e visão consolidada.',
    visibility: 'private',
    source: 'Notion · Finanças & Patrimônio',
    metrics: [
      { label: 'Patrimônio', value: '—', detail: 'Fonte financeira a mapear' },
      { label: 'Entradas', value: '—', detail: 'Mês atual' },
      { label: 'Saídas', value: '—', detail: 'Mês atual' },
      { label: 'Investido', value: '—', detail: 'Mês atual' }
    ]
  },
  {
    slug: 'health',
    label: 'Saúde',
    icon: '♥',
    description: 'Indicadores corporais, evolução, hábitos, recuperação e registros de saúde.',
    visibility: 'private',
    source: 'Notion · Saúde & Fitness',
    metrics: [
      { label: 'Peso', value: '—', detail: 'Último registro' },
      { label: 'Meta', value: '—', detail: 'Meta ativa' },
      { label: 'Sono', value: '—', detail: 'Média semanal' },
      { label: 'Consistência', value: '—', detail: '30 dias' }
    ]
  },
  {
    slug: 'training',
    label: 'Treino',
    icon: '◆',
    description: 'Sessões, volume, frequência, progressão de carga e recordes pessoais.',
    visibility: 'private',
    source: 'Notion · Saúde & Fitness',
    metrics: [
      { label: 'Sessões', value: '—', detail: 'Semana atual' },
      { label: 'Volume', value: '—', detail: 'Semana atual' },
      { label: 'PRs', value: '—', detail: 'Últimos 30 dias' },
      { label: 'Aderência', value: '—', detail: 'Plano atual' }
    ]
  },
  {
    slug: 'nutrition',
    label: 'Nutrição',
    icon: '◉',
    description: 'Calorias, proteína, refeições, alimentos e padrões nutricionais.',
    visibility: 'private',
    source: 'Notion · Nutrição',
    metrics: [
      { label: 'Calorias', value: '—', detail: 'Hoje' },
      { label: 'Proteína', value: '—', detail: 'Hoje' },
      { label: 'Refeições', value: '—', detail: 'Hoje' },
      { label: 'Aderência', value: '—', detail: '7 dias' }
    ]
  },
  {
    slug: 'goals',
    label: 'Metas',
    icon: '◎',
    description: 'Metas anuais, objetivos de vida e progresso consolidado por área.',
    visibility: 'private',
    source: 'Notion · Áreas da Vida',
    metrics: [
      { label: 'Ativas', value: '—', detail: 'Metas atuais' },
      { label: 'No prazo', value: '—', detail: 'Situação atual' },
      { label: 'Concluídas', value: '—', detail: 'Ano atual' },
      { label: 'Progresso', value: '—', detail: 'Média geral' }
    ]
  }
];

export const publicModules = [
  { slug: '/', label: 'Início', icon: '⌂' },
  { slug: '/about', label: 'Sobre', icon: '○' },
  { slug: '/projects', label: 'Projetos', icon: '◇' }
];

export function getModule(slug: string) {
  return privateModules.find((module) => module.slug === slug);
}
