# CLINE MASTER PROMPT — Insta Intelligence Platform

You are Cline working inside VSCode on Windows.

The user wants to build an enterprise-grade SaaS application for digital marketing agencies and individual professional users. The app is an Instagram intelligence and analytics platform inspired by products like Dolphin Radar, Snoopreport, Modash, HypeAuditor, SocialBlade, Brand24, and other social intelligence tools.

This must be architected like a very large serious SaaS product: Salesforce / Monday.com / Zapier level thinking, but implemented as a clean scaffold first.

## Critical product direction

Build this as a legitimate Instagram intelligence platform for:

1. Digital marketing agencies.
2. Brands.
3. Creators.
4. Businesses.
5. Professional users.
6. Connected Instagram professional accounts.
7. Public professional account research where available through official APIs or legally licensed providers.

Do not build illegal, abusive, or unauthorized tracking features. Do not create scraping evasion, anti-bot bypass, fake login automation, credential stuffing, private-account access, or hidden surveillance workflows.

The app may include modules named around public intelligence, recent follows, recent unfollows, likes, comments, engagement, ads, and activity timelines, but these modules must be implemented as clean interfaces, mock adapters, official API adapters, or licensed-provider adapters. Do not implement unauthorized Instagram scraping.

## Main goal of this first Cline task

Create a new project folder with a deep enterprise directory structure and enough starter files so future Cline tasks can build each module separately.

This first task is NOT to build the entire app fully. It is to scaffold the project properly with:

- Monorepo architecture.
- Frontend app.
- Rust backend services.
- Shared packages.
- Database migrations.
- Event contracts.
- Compliance layer.
- Provider adapter layer.
- Dashboard page structure.
- Data table structure.
- Analytics module structure.
- Clear README files in important directories.
- Placeholder code that compiles where practical.
- TODO markers for future focused tasks.

The project name should be:

`insta-intelligence-platform`

Use this root path if possible:

`C:\Projects\insta-intelligence-platform`

If this path does not exist, create it.

---

# 1. Technology stack

Use a modern enterprise stack.

## Frontend

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style component architecture
- TanStack Query
- TanStack Table
- Zustand or Jotai for lightweight UI state
- Recharts or ECharts for charts
- Zod for runtime validation
- React Hook Form for forms

Frontend app name:

`apps/web`

## Backend

Use Rust for backend services.

Recommended Rust stack:

- Rust stable
- Tokio
- Axum
- Tower
- Serde
- SQLx
- UUID
- Chrono or time
- Tracing
- OpenTelemetry-ready structure
- Thiserror / anyhow

Backend service names:

- `services/api-gateway`
- `services/ingestion-worker`
- `services/analytics-worker`
- `services/provider-gateway`
- `services/compliance-service`
- `services/export-service`
- `services/alert-service`

Do not overbuild runtime logic in the first pass. Create clean skeletons with modules, routes, domain folders, tests placeholders, and README files.

## Databases and infrastructure

Architect for:

- PostgreSQL for OLTP data.
- ClickHouse for analytics/event data.
- Redis for cache/rate limits.
- Redpanda or Kafka for event streaming.
- S3-compatible object storage for raw payloads, exports, and backfills.
- OpenTelemetry for observability.
- Docker Compose for local development.
- Kubernetes manifests later.
- OpenTofu/Terraform-style IaC later.

For this first scaffold, create:

- `infra/docker-compose.yml`
- `infra/postgres`
- `infra/clickhouse`
- `infra/redis`
- `infra/redpanda`
- `infra/opentelemetry`
- `infra/kubernetes`
- `infra/opentofu`

Use placeholders where full infra is too large.

---

# 2. Product modules

Create folders and starter files for these main product modules.

## Core dashboard modules

1. Overview dashboard
2. Account intelligence dashboard
3. Activity timeline
4. Recent posts
5. Comments intelligence
6. Likes intelligence
7. Followers and following intelligence
8. Recent follows
9. Recent unfollows
10. Engagement analytics
11. Ads intelligence
12. Competitor benchmarking
13. Creator discovery
14. Hashtag monitoring
15. Mentions monitoring
16. Brand monitoring
17. Alerts and anomaly detection
18. Exports
19. Reports
20. Billing
21. Teams and workspaces
22. Roles and permissions
23. Audit logs
24. Compliance center
25. Data sources and provider settings

Important: for features like recent follows, recent unfollows, likes history, and outbound activity, create the UI/module/service contracts, but clearly mark them as requiring official API support or licensed provider adapters. Do not implement unauthorized scraping.

---

# 3. Data source architecture

Create a provider adapter system.

Provider types:

- `meta_official_api`
- `meta_instagram_login`
- `meta_facebook_login`
- `meta_business_discovery`
- `meta_hashtag_search`
- `meta_webhooks`
- `meta_marketing_api`
- `meta_ad_library`
- `licensed_public_data_provider`
- `manual_csv_import`
- `mock_provider`

Each provider adapter must have:

- Interface/trait.
- Config schema.
- Source provenance.
- Confidence scoring.
- Rate limit strategy.
- Freshness strategy.
- Error mapping.
- Compliance flags.
- Test placeholder.

Do not include real secrets. Use `.env.example`.

---

# 4. Compliance and safety requirements

The codebase must include compliance design from day one.

Create folders/files for:

- Data deletion requests.
- Takedown/suppression lists.
- Retention policies.
- Source provenance.
- Audit logs.
- Abuse detection.
- Jurisdiction gating.
- Terms enforcement.
- Workspace-level permissions.
- Export review.
- Sensitive feature flags.

Create a central policy file:

`packages/policy/src/feature_policy.ts`

This file should classify features:

- `official_safe`
- `consented_only`
- `licensed_provider_only`
- `restricted`
- `disabled_by_default`

Mark these features as `licensed_provider_only` or `restricted`, not normal official-safe:

- arbitrary public account recent follows
- arbitrary public account recent unfollows
- arbitrary user like history
- arbitrary user outbound comments
- arbitrary user outbound engagement graph

The frontend should show a placeholder warning in those module pages:

“This module requires an approved official API or licensed compliant data provider. Unauthorized scraping is not implemented.”

---

# 5. Frontend page structure

Create this Next.js route structure under `apps/web/src/app`.

Use route groups where helpful.

Required routes:

```text
apps/web/src/app/
  (marketing)/
    page.tsx
    pricing/page.tsx
    agencies/page.tsx
    creators/page.tsx
    compliance/page.tsx
  (auth)/
    login/page.tsx
    signup/page.tsx
    forgot-password/page.tsx
  (app)/
    layout.tsx
    dashboard/page.tsx
    accounts/page.tsx
    accounts/[accountId]/page.tsx
    accounts/[accountId]/overview/page.tsx
    accounts/[accountId]/timeline/page.tsx
    accounts/[accountId]/posts/page.tsx
    accounts/[accountId]/comments/page.tsx
    accounts/[accountId]/likes/page.tsx
    accounts/[accountId]/followers/page.tsx
    accounts/[accountId]/following/page.tsx
    accounts/[accountId]/recent-follows/page.tsx
    accounts/[accountId]/recent-unfollows/page.tsx
    accounts/[accountId]/engagement/page.tsx
    accounts/[accountId]/ads/page.tsx
    competitors/page.tsx
    creators/page.tsx
    hashtags/page.tsx
    mentions/page.tsx
    brand-monitoring/page.tsx
    alerts/page.tsx
    reports/page.tsx
    exports/page.tsx
    data-sources/page.tsx
    billing/page.tsx
    settings/page.tsx
    settings/workspace/page.tsx
    settings/team/page.tsx
    settings/roles/page.tsx
    settings/audit-logs/page.tsx
    settings/compliance/page.tsx
```

Create placeholder pages with strong UI structure, not blank pages.

Each dashboard page should include:

- Page header.
- Filter bar.
- KPI cards.
- Placeholder chart card.
- Placeholder enterprise data table.
- Empty state.
- Compliance/provider note if needed.

---

# 6. Frontend component architecture

Create folders:

```text
apps/web/src/components/
  app-shell/
  navigation/
  command-menu/
  dashboards/
  account-intelligence/
  activity-timeline/
  posts/
  comments/
  likes/
  followers/
  following/
  ads/
  competitors/
  creators/
  hashtags/
  mentions/
  brand-monitoring/
  alerts/
  reports/
  exports/
  billing/
  settings/
  compliance/
  data-tables/
  charts/
  kpi-cards/
  filters/
  forms/
  empty-states/
  loading-states/
  error-states/
  feature-gates/
  provider-badges/
  audit/
  ui/
```

Important table components:

```text
apps/web/src/components/data-tables/
  enterprise-data-table.tsx
  data-table-toolbar.tsx
  data-table-column-header.tsx
  data-table-pagination.tsx
  data-table-view-options.tsx
  data-table-faceted-filter.tsx
  account-table.tsx
  activity-events-table.tsx
  posts-table.tsx
  comments-table.tsx
  followers-table.tsx
  following-table.tsx
  ads-table.tsx
  competitors-table.tsx
  creators-table.tsx
  alerts-table.tsx
  exports-table.tsx
```

Use TanStack Table patterns.

---

# 7. Backend Rust workspace structure

Create a Rust workspace:

```text
backend/
  Cargo.toml
  crates/
    core/
    config/
    observability/
    auth/
    tenancy/
    policy/
    database/
    events/
    providers/
    meta-api/
    analytics/
    compliance/
    billing/
    exports/
    alerts/
    search/
    testing/
  services/
    api-gateway/
    ingestion-worker/
    analytics-worker/
    provider-gateway/
    compliance-service/
    export-service/
    alert-service/
```

Each service should have:

```text
src/
  main.rs
  bootstrap.rs
  routes/
  handlers/
  application/
  domain/
  infrastructure/
  telemetry/
  health/
  errors.rs
  state.rs
tests/
README.md
```

Each crate should have:

```text
src/
  lib.rs
README.md
```

The first scaffold should compile as much as possible, but it is acceptable to leave TODO stubs if setting up the entire Rust workspace would be too large for one task.

---

# 8. Backend domain model folders

Create deep domain folders in `backend/crates/core/src/domain`.

```text
domain/
  accounts/
    instagram_account.rs
    account_snapshot.rs
    account_status.rs
    account_type.rs
    account_identity.rs
  media/
    media_item.rs
    media_metrics.rs
    media_type.rs
    media_snapshot.rs
  interactions/
    interaction_event.rs
    interaction_type.rs
    inbound_interaction.rs
    outbound_interaction.rs
    confidence_score.rs
  follows/
    follow_edge.rs
    follow_edge_event.rs
    follow_snapshot.rs
    recent_follow.rs
    recent_unfollow.rs
  comments/
    comment.rs
    comment_author.rs
    comment_thread.rs
    comment_metrics.rs
  likes/
    like_event.rs
    like_snapshot.rs
    like_visibility.rs
  ads/
    ad_creative.rs
    ad_archive_item.rs
    ad_platform.rs
    ad_snapshot.rs
  competitors/
    competitor_set.rs
    benchmark.rs
    benchmark_metric.rs
  creators/
    creator_profile.rs
    creator_score.rs
    creator_audience.rs
  hashtags/
    hashtag.rs
    hashtag_snapshot.rs
    hashtag_media.rs
  mentions/
    mention.rs
    mention_context.rs
  alerts/
    alert_rule.rs
    alert_event.rs
    anomaly.rs
  reports/
    report.rs
    report_section.rs
    scheduled_report.rs
  workspaces/
    workspace.rs
    workspace_member.rs
    workspace_role.rs
  compliance/
    data_subject_request.rs
    deletion_request.rs
    suppression_entry.rs
    retention_policy.rs
    source_provenance.rs
```

---

# 9. Event contracts

Create event contracts in:

```text
packages/events/
  src/
    account-events.ts
    media-events.ts
    interaction-events.ts
    follow-events.ts
    comment-events.ts
    like-events.ts
    ad-events.ts
    provider-events.ts
    compliance-events.ts
    alert-events.ts
    export-events.ts
  schemas/
    account.profile.discovered.v1.json
    account.snapshot.captured.v1.json
    media.discovered.v1.json
    media.metrics.captured.v1.json
    interaction.observed.v1.json
    follow.edge.added.v1.json
    follow.edge.removed.v1.json
    comment.observed.v1.json
    like.observed.v1.json
    ad.archive.item.discovered.v1.json
    provider.job.completed.v1.json
    compliance.deletion.requested.v1.json
```

Add README explaining versioned event contracts.

---

# 10. Database migrations

Create:

```text
database/
  postgres/
    migrations/
      000001_create_tenants.sql
      000002_create_users_and_memberships.sql
      000003_create_instagram_accounts.sql
      000004_create_account_snapshots.sql
      000005_create_media_items.sql
      000006_create_media_metric_snapshots.sql
      000007_create_interaction_events.sql
      000008_create_collection_jobs.sql
      000009_create_provider_connections.sql
      000010_create_audit_logs.sql
      000011_create_compliance_tables.sql
      000012_create_alert_tables.sql
      000013_create_export_tables.sql
    seeds/
      dev_seed.sql
    README.md
  clickhouse/
    migrations/
      000001_create_analytics_events.sql
      000002_create_daily_account_metrics_mv.sql
      000003_create_media_rollups_mv.sql
      000004_create_ad_archive_tables.sql
    README.md
```

Use the SQL schema from this prompt as guidance.

Main PostgreSQL tables:

- tenants
- users
- tenant_memberships
- instagram_accounts
- account_snapshots
- media_items
- media_metric_snapshots
- interaction_events
- collection_jobs
- provider_connections
- audit_logs
- data_subject_requests
- suppression_entries
- retention_policies
- alert_rules
- alert_events
- exports

---

# 11. API design

Create OpenAPI structure:

```text
api/
  openapi/
    public-api.v1.yaml
    internal-api.v1.yaml
  postman/
  examples/
```

Required endpoint groups:

```text
/v1/tenants
/v1/workspaces
/v1/accounts
/v1/accounts/{accountId}/overview
/v1/accounts/{accountId}/timeline
/v1/accounts/{accountId}/media
/v1/accounts/{accountId}/comments
/v1/accounts/{accountId}/likes
/v1/accounts/{accountId}/followers
/v1/accounts/{accountId}/following
/v1/accounts/{accountId}/recent-follows
/v1/accounts/{accountId}/recent-unfollows
/v1/accounts/{accountId}/engagement
/v1/accounts/{accountId}/ads
/v1/competitors
/v1/creators
/v1/hashtags
/v1/mentions
/v1/brand-monitoring
/v1/alerts
/v1/reports
/v1/exports
/v1/data-sources
/v1/compliance
/v1/audit-logs
/v1/webhooks/meta/instagram
/v1/webhooks/providers/{providerName}
```

Use realistic placeholder schemas.

---

# 12. UI/UX quality standard

The UI should feel like a premium 2026 SaaS dashboard:

- Clean sidebar.
- Top command/search bar.
- Workspace switcher.
- Account selector.
- Time range picker.
- KPI cards.
- Data tables with filters.
- Timeline cards.
- Chart cards.
- Provider freshness badges.
- Confidence badges.
- Compliance badges.
- Empty states.
- Loading skeletons.
- Error boundaries.
- Responsive layout.

Design language:

- Enterprise clean.
- Slightly futuristic.
- Very readable.
- High density, but not messy.
- Built for analysts who need many filters and tables.
- Use neutral base colors and one accent variable.
- Do not hardcode brand final colors yet; use tokens.

---

# 13. Documentation files to create

Create these docs:

```text
docs/
  00-product-vision.md
  01-architecture-overview.md
  02-data-source-strategy.md
  03-compliance-and-privacy.md
  04-feature-map.md
  05-dashboard-spec.md
  06-data-model.md
  07-api-design.md
  08-event-architecture.md
  09-provider-adapter-contract.md
  10-local-development.md
  11-deployment-plan.md
  12-future-roadmap.md
```

Each doc should have meaningful content, not just a title.

---

# 14. Folder tree target

Create this top-level structure:

```text
insta-intelligence-platform/
  README.md
  .gitignore
  .env.example
  package.json
  pnpm-workspace.yaml
  turbo.json
  apps/
    web/
  backend/
    Cargo.toml
    crates/
    services/
  packages/
    ui/
    config/
    eslint-config/
    typescript-config/
    api-client/
    schemas/
    events/
    policy/
    feature-flags/
    analytics/
    test-utils/
  database/
    postgres/
    clickhouse/
  api/
    openapi/
    postman/
    examples/
  infra/
    docker/
    postgres/
    clickhouse/
    redis/
    redpanda/
    opentelemetry/
    kubernetes/
    opentofu/
  docs/
  scripts/
    dev/
    db/
    codegen/
    lint/
    ci/
  tools/
    generators/
    validators/
  .github/
    workflows/
```

---

# 15. Initial code requirements

Implement the following minimal starter code:

## Frontend

- A working Next.js app shell.
- Sidebar navigation.
- Dashboard page.
- Account detail layout.
- One reusable `EnterpriseDataTable` placeholder.
- One reusable `KpiCard`.
- One reusable `FeatureGateNotice`.
- One reusable `ProviderBadge`.
- One reusable `ConfidenceBadge`.
- Mock data for accounts and activity events.
- Pages must render without requiring real backend.

## Backend

- Rust API gateway with:
  - `/health`
  - `/ready`
  - `/v1/accounts`
  - `/v1/accounts/:account_id/timeline`
  - `/v1/data-sources`
  - `/v1/compliance/feature-policy`
- Return mock JSON for now.
- Add clear TODOs for database integration.

## Database

- Add migrations with realistic SQL.
- Do not require DB connection to run frontend.

## Docker

- Add Docker Compose with postgres, redis, clickhouse, redpanda placeholders.
- Keep it usable but simple.

---

# 16. Important implementation style

Follow these rules:

1. Make small, focused changes.
2. Do not create one giant messy file.
3. Each domain should have its own folder.
4. Each page should have its own folder.
5. Each service should have clear layers:
   - route/handler
   - application
   - domain
   - infrastructure
6. Add README files in important folders so future Cline sessions understand the architecture.
7. Use TODO comments where future implementation is required.
8. Do not add real API keys.
9. Do not implement scraping.
10. Do not implement anti-bot evasion.
11. Do not implement credential automation.
12. Do not store or process private data in examples.
13. Keep all sample data fake.

---

# 17. Feature policy matrix

Create this matrix in docs and in code.

| Feature | Status | Data source |
|---|---|---|
| Connected account profile analytics | official_safe | Meta official API |
| Connected account media insights | official_safe | Meta official API |
| Owned comments and mentions | official_safe | Meta webhooks/API |
| Owned DMs | consented_only | Meta messaging API |
| Public professional account basic metrics | official_safe | Business Discovery |
| Hashtag monitoring | official_safe | Public Content Access / hashtag API |
| Owned ad reporting | official_safe | Meta Marketing API |
| Public ad archive search | official_safe_limited | Meta Ad Library API |
| Competitor benchmarking | official_safe_limited | Business Discovery / licensed provider |
| Creator discovery | official_safe_limited | Creator Marketplace / licensed provider |
| Arbitrary public account recent follows | licensed_provider_only | Licensed compliant provider only |
| Arbitrary public account recent unfollows | licensed_provider_only | Licensed compliant provider only |
| Arbitrary user like history | restricted | Do not implement without approved source |
| Arbitrary outbound engagement graph | restricted | Do not implement without approved source |
| Private account data | disabled_by_default | Not supported |
| Scraping with evasion | disabled_by_default | Not supported |

---

# 18. Suggested first-batch output from Cline

After completing this task, Cline should summarize:

1. Exact folder created.
2. Exact files created.
3. How to run frontend.
4. How to run backend.
5. What is mocked.
6. What is real.
7. What future batch should build next.

Do not try to finish the entire enterprise app in one response.

---

# 19. Future batches after scaffold

After this scaffold, future Cline tasks should be small batches:

## Batch 1
Frontend app shell, sidebar, dashboard layout, mock pages.

## Batch 2
Enterprise data tables and filters.

## Batch 3
Rust API gateway mock endpoints.

## Batch 4
PostgreSQL migrations and SQLx setup.

## Batch 5
Provider adapter contracts.

## Batch 6
Meta official API connector skeleton.

## Batch 7
ClickHouse analytics schema and rollups.

## Batch 8
Alerts and anomaly detection skeleton.

## Batch 9
Compliance center and feature policy enforcement.

## Batch 10
Reports and exports.

Do not combine all batches unless the user explicitly asks.

---

# 20. Start now

Create the project scaffold now in:

`C:\Projects\insta-intelligence-platform`

Use the architecture and file tree above.

When finished, show a concise summary and wait for the next user instruction.
