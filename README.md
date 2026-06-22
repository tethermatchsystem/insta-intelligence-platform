# Insta Intelligence Platform

Enterprise Instagram intelligence platform scaffold for agencies, brands, creators, businesses, and connected Instagram professional accounts.

## Product stance

- Official-first and compliance-first.
- No scraping implementation.
- No anti-bot bypass.
- No private account access.
- No fake login automation.
- High-risk public intelligence features are gated as `licensed_provider_only`, `restricted`, or `disabled_by_default`.

## Batch 0 contents

- `apps/web` — Next.js App Router scaffold with enterprise dashboard placeholders.
- `backend` — Rust workspace skeleton with mock API gateway routes.
- `packages` — shared packages, event contracts, schemas, and feature policy.
- `database` — PostgreSQL and ClickHouse migration folders.
- `api/openapi` — public/internal API placeholders.
- `infra` — Docker Compose and infrastructure placeholders.
- `docs` — product, architecture, compliance, feature map, and roadmap docs.

## Run frontend

```bash
cd insta-intelligence-platform
npm install
npm run dev --workspace apps/web
```

## Run backend

```bash
cd insta-intelligence-platform/backend
cargo run -p api-gateway
```

The backend exposes mock-only routes at `http://127.0.0.1:8080`.
