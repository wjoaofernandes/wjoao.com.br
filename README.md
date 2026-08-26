# WJoao Life OS

Personal dashboard platform hosted from GitHub with Notion as the primary source of truth.

## Architecture

Public frontend
GitHub Pages builds a static Astro site from this repository.

Private data
Private values are never committed to GitHub and are never embedded in the static HTML. Browser pages request protected JSON from the Cloudflare Worker under `/api/*`.

Data source
Notion stores mutable data for tasks, projects, nutrition and finances. Health and Training will receive new v2 data sources rather than restoring the legacy sources from the Notion trash.

Sync
Notion webhooks invalidate private cache after changes. A scheduled Worker run reconciles important dashboards hourly.

Authentication
Cloudflare Access protects the private application and API. The Notion API token is stored only as a Cloudflare secret.

## Current modules

* Tasks and Agenda
* Finance
* Health
* Training
* Nutrition
* Goals

Tasks and Nutrition are mapped to active Notion data sources.

Finance is mapped to three structured Notion sources created under the existing Finance and Assets hub: Financial Accounts, Financial Transactions and Assets. No financial values are seeded by the application.

Goals derives from the existing Project Planning data source rather than creating a duplicate goals database.

Health and Training remain visible as product modules, but their legacy Notion data source IDs are intentionally not part of the production configuration. New v2 schemas will be designed later and connected only after validation.

## Repository structure

```text
src/
  components/
  config/
  layouts/
  pages/
  styles/
public/
worker/
.github/workflows/
```

## Frontend

```bash
npm install
npm run dev
npm run build
```

The production site is configured for `https://wjoao.com.br`.

## Worker

The Worker source lives in `worker/`.

Required production secret:

```text
NOTION_ACCESS_TOKEN
```

Cloudflare Access must protect the private application and normal `/api/*` routes before private data is enabled in production.

The Notion webhook route is intentionally handled before the application authentication check because Notion must be able to reach it. It is separately protected by Notion webhook signature validation.

## Data source mapping

The non secret Notion data source IDs are documented in `worker/wrangler.example.jsonc`.

Never commit tokens, API keys, Cloudflare credentials or exported private dashboard data.

Finance remains multi currency by design. EUR, BRL and USD values are kept in separate buckets until an explicit exchange rate layer is introduced. The application does not silently add different currencies together.

## Notion connection policy

Production should use an internal Notion connection named `WJoao Life OS`.

Phase 1 should grant only Read content and content access to the exact pages and databases required by the dashboard. Update content and Insert content should remain disabled until the write workflows in the private UI are implemented and tested.

No user information, comments or workspace wide content access is required for the current dashboard.

## Cloudflare routing

Because GitHub Pages remains the existing origin for `wjoao.com.br`, the API Worker should run on a Worker Route for `wjoao.com.br/api/*` rather than taking over the whole hostname as a Worker Custom Domain.

Cloudflare Access should protect `/app/*` and normal `/api/*` requests. The Notion webhook endpoint must remain reachable by Notion and rely on its independent signature verification policy.

## Deployment

The GitHub workflow validates both the Astro frontend and the Cloudflare Worker on pull requests. After changes reach `main`, the same workflow publishes the frontend to GitHub Pages.

Cloudflare Worker deployment will be enabled after the Cloudflare account connection, KV namespace, Access application and route are configured.

## Security invariants

1. No private Notion values in Git history.
2. No Notion token in frontend JavaScript.
3. No private JSON artifacts in `public/`.
4. Private API responses use `Cache-Control: private, no-store` at the browser edge.
5. Webhook signatures are verified before cache invalidation.
6. Public statistics, when added, must be explicitly sanitized and aggregated.
7. Multi currency totals are not combined without an explicit exchange rate source.
8. Legacy Health and Training data source IDs are not part of production configuration.
