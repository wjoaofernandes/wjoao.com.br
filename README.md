# WJoao Life OS

Personal dashboard platform hosted from GitHub with Notion as the primary source of truth.

## Architecture

Public frontend
GitHub Pages builds a static Astro site from this repository.

Private data
Private values are never committed to GitHub and are never embedded in the static HTML. Browser pages request protected JSON from the Cloudflare Worker under `/api/*`.

Data source
Notion stores mutable data such as tasks, nutrition, training sessions and weekly check ins.

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

Training and Health are mapped to existing Notion data sources that currently need to be restored from the Notion trash before production use.

Finance currently has a Notion hub but no structured ledger data source discovered during the initial inventory.

Goals currently derive from the existing life areas, projects and tasks structure rather than a duplicate goals database.

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

Cloudflare Access should be configured before exposing normal `/api/*` routes.

The Notion webhook route is intentionally handled before the application authentication check because Notion must be able to reach it. It must still be protected by Notion webhook signature validation.

## Data source mapping

The non secret Notion data source IDs are documented in `worker/wrangler.example.jsonc`.

Never commit tokens, API keys, Cloudflare credentials or exported private dashboard data.

## Deployment

The GitHub workflow validates pull requests and deploys the Astro build to GitHub Pages after changes reach `main`.

Cloudflare Worker deployment will be enabled after the Cloudflare account connection, KV namespace and route are configured.

## Security invariants

1. No private Notion values in Git history.
2. No Notion token in frontend JavaScript.
3. No private JSON artifacts in `public/`.
4. Private API responses use `Cache-Control: private, no-store` at the browser edge.
5. Webhook signatures are verified before cache invalidation.
6. Public statistics, when added, must be explicitly sanitized and aggregated.
