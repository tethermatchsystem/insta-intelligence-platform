# CLINE_PROJECT_RULES.md

Permanent rules for this project.

Project root:
C:\Projects\insta

Product:
insta-intelligence-platform

## Golden rule

Never build the whole platform in one task.

Every Cline task must be one small batch only:

- one page
- one component group
- one backend route group
- one database migration group
- one provider adapter
- one bug fix
- one verification pass

If the task needs more than 20 files changed, split it into smaller batches.

## Compliance rules

This is an official-first Instagram intelligence SaaS.

Do not implement:

- Instagram scraping
- anti-bot bypass
- fake login automation
- credential automation
- private account access
- hidden surveillance
- stalker-style arbitrary personal tracking

Allowed:

- official Meta API adapters
- connected professional account analytics
- Business Discovery where allowed
- hashtag/public content APIs where allowed
- Meta Marketing API
- Meta Ad Library API
- licensed compliant provider adapters
- mock providers
- manual CSV import

Sensitive features must be gated through:

packages/policy/src/feature_policy.ts

## Feature classifications

Use:

- official_safe
- official_safe_limited
- consented_only
- licensed_provider_only
- restricted
- disabled_by_default

Examples:

- connected account insights = official_safe
- owned comments = official_safe
- Business Discovery metrics = official_safe_limited
- arbitrary public recent follows = licensed_provider_only
- arbitrary public recent unfollows = licensed_provider_only
- arbitrary user like history = restricted
- arbitrary outbound engagement graph = restricted
- private account data = disabled_by_default
- scraping with evasion = disabled_by_default

## Task ID system

Use this naming system in every future prompt:

APP-WEB / DOM-ACCOUNT / PAGE-ACCOUNTS-LIST / Batch 1A
APP-WEB / DOM-ACTIVITY / PAGE-ACCOUNT-TIMELINE / Batch 1E
SVC-API / DOM-ACCOUNT / ROUTES-ACCOUNTS / Batch 3A
PKG-POLICY / DOM-COMPLY / FEATURE-GATES / Batch 9A

Do not use vague names like test2, final, stuff, newpage.

## Frontend page rule

Every app page should have:

- page header
- short description
- KPI cards
- filter/search area
- chart or timeline card
- enterprise data table
- empty/loading/error state where relevant
- provider/compliance notice where relevant

## Backend service rule

Each Rust service should keep this shape:

src/
  main.rs
  bootstrap.rs
  state.rs
  errors.rs
  routes/
  handlers/
  application/
  domain/
  infrastructure/
  telemetry/
  health/
tests/
README.md

## Data model rule

Separate:

- entities
- snapshots
- events
- jobs
- providers
- audit/compliance records

Default storage:

- PostgreSQL = canonical business state
- ClickHouse = analytics/events
- Redis = cache/rate limits/freshness locks
- object storage = raw payloads/exports/backfills

## Provider adapter rule

Every provider adapter must include:

- provider ID
- data source type
- compliance classification
- freshness level
- rate-limit strategy
- confidence score
- provenance metadata
- error mapping
- mock/test layer

## Future prompt template

Every future Cline task must follow:

TASK ID:
[area / domain / feature / batch]

SCOPE:
Build only one thing.

ALLOWED FILES/FOLDERS:
List exact files or folders.

DO NOT TOUCH:
List protected files or folders.

REQUIREMENTS:
Small checklist only.

VALIDATION:
Smallest useful test/build command.

OUTPUT:
Summarize exact files changed and stop.

## Anti-stuck rule

If Cline is stuck for more than 5 minutes:

1. Cancel.
2. Ask for status only.
3. Ask for exact files changed.
4. Restart with a smaller task.

Preferred workflow:

Batch 0A, 0B, 0C...
Batch 1A, 1B, 1C...

Never move to next batch until the previous batch is reviewed and committed.

---

# ROOT FOLDER LOCK — VERY IMPORTANT

The only valid project root is:

C:\Projects\insta

Cline must never create another nested root folder such as:

C:\Projects\insta\insta-intelligence-platform
C:\Projects\insta\app
C:\Projects\insta\project
C:\Projects\insta\new-project

All project folders must live directly under:

C:\Projects\insta

Correct:

C:\Projects\insta\apps
C:\Projects\insta\backend
C:\Projects\insta\packages
C:\Projects\insta\database
C:\Projects\insta\infra
C:\Projects\insta\docs

Wrong:

C:\Projects\insta\insta-intelligence-platform\apps
C:\Projects\insta\insta-intelligence-platform\backend

Before every task, Cline must verify the working directory with:

pwd

or PowerShell:

Get-Location

If the current path is not:

C:\Projects\insta

Cline must stop and ask the user before creating or editing files.

Do not create a new project folder unless the user explicitly says:
"create a new separate project folder".

For this project, always work inside the existing repository root.


---

# LONG-RUNNING COMMAND RULE — VERY IMPORTANT

Cline must not run long-running watch/dev/server commands unless the user explicitly asks.

Long-running commands include:

- pnpm dev
- pnpm --filter web dev
- npm run dev
- next dev
- cargo watch
- docker compose up
- docker compose logs -f
- any command that starts a server and keeps running

These commands do not finish by design. They keep the app alive.

For validation, prefer short commands:

- pnpm --filter web build
- pnpm --filter web lint
- pnpm --filter web typecheck
- cargo check
- cargo test
- cargo run -p api-gateway only if the user explicitly asks to start backend server

If Cline needs the dev server, Cline must ask the user:

"Please run `pnpm --filter web dev` manually in a terminal and send me the browser/server error."

Cline should edit files, inspect files, and run short validation commands only.

If a long-running command is accidentally started, Cline should not wait forever. It should report:

"The dev server is running. Please use Proceed While Running or stop the terminal manually."

## Validation rule

For frontend route/build fixes, use:

pnpm --filter web build

Do not use:

pnpm --filter web dev

unless the user explicitly asks to preview locally.

## Manual preview rule

The user will manually run:

pnpm --filter web dev

and open:

http://localhost:3000

Then the user will send a screenshot or error.

