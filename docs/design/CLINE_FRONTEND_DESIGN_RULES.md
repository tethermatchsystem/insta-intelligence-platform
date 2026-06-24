# Insta Intelligence Platform — Cline Frontend Design, Architecture & Agent Rules

**Target repo path:** `C:\Projects\insta`  
**This file path inside repo:** `docs/design/CLINE_FRONTEND_DESIGN_RULES.md`  
**Project:** Insta Intelligence Platform  
**Role for Cline:** Senior staff frontend engineer + product designer + architecture guardian  
**Last updated purpose:** Use this as the standing frontend/design instruction file for all Cline batches.

---

## 0. How Cline must use this file

Before starting any frontend/design task, read and follow this file as the project’s design and architecture contract.

For every task:
1. Understand the current route/component architecture before editing.
2. Prefer shared components over one-off page-specific styles.
3. Improve visible UI quality without breaking existing routes.
4. Preserve compliance-first product positioning.
5. Keep changes controlled, reviewable, and build-validated.
6. Stop after validation and report exact files changed.

Do not treat this file as permission to rewrite the app in one giant pass. This file defines the quality standard and constraints.

---

## 1. Product identity

Insta Intelligence Platform is a compliance-first Instagram intelligence SaaS for:
- brands
- marketing agencies
- creator teams
- social media analysts
- growth teams
- executive marketing leadership

It should feel like a premium 2026 enterprise SaaS platform, closer to:
- Salesforce-level information architecture
- Monday/Zapier-style operational clarity
- Linear/Vercel-style polish
- enterprise analytics dashboard quality
- modern admin/governance product UX

It is **not**:
- a spy tool
- a scraper
- a fake-login automation tool
- a private-account tracker
- a hidden surveillance product
- an anti-bot bypass product
- a product that claims private Instagram data is live or officially available

---

## 2. Official-first compliance model

All product copy and UI states must reflect this source model.

Approved/official-first sources:
- Instagram Graph API
- Meta Marketing API
- Meta Ad Library API
- webhooks for owned/connected accounts
- licensed provider adapters only where required
- user-uploaded or customer-owned data where legally permitted
- internally generated analytics from approved data

Never imply:
- private Instagram account access
- live scraping
- fake login automation
- story viewer tracking
- hidden identity-level surveillance
- bypassing rate limits or anti-bot systems
- unofficial access presented as official

Risky identity-level features must be clearly marked as:
- restricted
- placeholder-only
- disabled by default
- licensed-provider-only
- official-source-only
- requires owned account, explicit permission, or approved provider coverage

Safe UI phrases:
- `Preview only`
- `Mock workflow`
- `No live provider action`
- `Requires official source connection`
- `Disabled until approved provider access exists`
- `Licensed-provider-only`
- `Official-source required`
- `Placeholder-only`
- `Compliance gated`
- `Owned or connected accounts only`

Avoid unsafe phrases:
- `Track anyone`
- `Spy`
- `Private profile data`
- `Bypass Instagram`
- `Hidden monitoring`
- `Scrape followers`
- `Login as user`
- `View private activity`
- `Secret tracking`

---

## 3. Current technical architecture

The project is a monorepo.

Known structure:
```text
C:\Projects\insta
├─ apps/
│  └─ web/                 # Next.js frontend
├─ backend/                # Rust backend scaffold
├─ docs/                   # architecture/product/design docs
├─ pnpm-workspace.yaml
├─ pnpm-lock.yaml
└─ package.json
```

Current frontend:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components installed under `apps/web/src/components/ui`
- Radix-based shadcn primitives
- Lucide icons
- Recharts available for charts
- TanStack Table available for advanced tables
- Motion available for small animations
- mock/static UI only for now

Backend future:
- Rust API
- PostgreSQL for transactional app data
- ClickHouse later for analytics/event-scale data
- provider adapter layer for Meta APIs and licensed providers
- secure token storage/encryption
- audit logs
- roles/permissions
- billing state via provider tokens, not stored card details

Current app is mostly mock frontend. Do not pretend real backend features exist.

---

## 4. Non-negotiable workflow rules

Use:
```powershell
pnpm
```

Do not use:
```powershell
npm
```

Cline must **not** run:
```powershell
Get-Location
pwd
pnpm --filter web dev
```

Build validation command:
```powershell
pnpm --filter web build
```

Local dev server is for the user only:
```powershell
pnpm --filter web dev
```

Do not run broad destructive commands:
```powershell
git restore .
git clean -fd
rm -rf
```

If local dev changes this file, restore only this file before commit:
```powershell
git restore -- "apps/web/next-env.d.ts"
```

Do not create nested project roots such as:
```text
C:\Projects\insta\insta-intelligence-platform
```

---

## 5. Approved frontend stack

### 5.1 shadcn/ui

Use shadcn/ui for reusable UI primitives:
- Button
- Badge
- Card
- Alert
- Table
- Tabs
- Dialog
- Dropdown Menu
- Tooltip
- Popover
- Select
- Input
- Textarea
- Skeleton
- Separator
- Sheet
- Avatar

Rules:
- Use shadcn components for new reusable primitives where it improves quality.
- Do not convert the whole app in one batch.
- Do not create a second design system.
- Keep the app’s existing enterprise analytics tone.
- Wrap shadcn components inside project-specific components when needed.
- Keep styling centralized and consistent.

### 5.2 Radix UI

Use Radix behavior through shadcn components for:
- dialogs
- dropdowns
- popovers
- tooltips
- tabs
- selects
- sheets

Rules:
- Use accessible primitives instead of fragile custom JS.
- Keep keyboard/focus behavior accessible.
- Use `TooltipProvider` where tooltips require it.
- Do not add Radix Themes unless explicitly approved.

### 5.3 Lucide React

Use Lucide for:
- navigation icons
- KPI card icons
- compliance badges
- empty states
- source/freshness/confidence indicators
- lightweight action icons

Rules:
- Use one icon style consistently.
- Prefer simple outline icons.
- Do not spam icons.
- Avoid mixing other icon libraries.

### 5.4 TanStack Table

Use TanStack Table when table logic becomes advanced:
- sorting
- filtering
- pagination
- row selection
- column visibility
- future server-side table state

Rules:
- Use headless logic only.
- Keep our own visual design.
- Do not make generic-looking tables.
- Do not add unnecessary table state to simple static tables.
- Start with shared wrappers.

### 5.5 Recharts

Use Recharts for analytics charts:
- line charts
- area charts
- bar charts
- composed charts
- trend panels
- source breakdown charts

Rules:
- Build reusable chart wrappers.
- Use responsive containers.
- Label mock data clearly.
- Avoid heavy animation.
- Do not imply fake chart data is live.

### 5.6 Motion

Use Motion only for subtle premium polish:
- card fade-ins
- route section transitions
- hover microinteractions
- modal transitions
- empty-state polish

Rules:
- Use sparingly.
- Respect reduced-motion accessibility.
- No heavy layout animation by default.
- Do not animate everything.

### 5.7 class-variance-authority / clsx / tailwind-merge

Use these for scalable variants:
- buttons
- badges
- status pills
- cards
- alerts
- feature gates
- source labels

Recommended variant names:
```text
default
secondary
outline
ghost
destructive
success
warning
restricted
providerOnly
mockOnly
officialSource
compliance
```

---

## 6. Design quality bar

Every page/component should feel:
- premium
- modern
- calm
- enterprise-ready
- trustworthy
- data-dense but readable
- responsive
- fast
- compliance-safe
- aligned and consistent

Avoid:
- random colors
- noisy gradients
- inconsistent shadows
- inconsistent border radius
- cheap-looking cards
- unclear CTAs
- fake-live buttons
- tiny unreadable text
- tables overflowing mobile
- duplicate one-off styles
- unclear mock/live status
- messy spacing
- pages that look unrelated to each other

---

## 7. Visual system rules

### 7.1 Layout rhythm

Use this SaaS page rhythm wherever practical:
1. Page header
2. Short product/context summary
3. KPI / status row
4. Main content grid
5. Table/chart/card surface
6. Compliance/source/freshness note where relevant

### 7.2 Spacing

Maintain consistent spacing:
- page outer padding
- header-to-content gap
- card padding
- grid gaps
- table row density
- badge spacing
- button groups
- mobile stacking gaps

Do not create random spacing per page.

### 7.3 Cards

Cards should usually have:
- consistent border
- consistent radius
- subtle background
- good inner padding
- clear title
- optional subtitle/description
- clear status badges where needed
- no oversized decorative elements

### 7.4 Badges

Badges should communicate:
- source
- state
- freshness
- risk
- confidence
- compliance gate
- mock/live boundary

Examples:
```text
Official API
Mock data
No live query
Restricted
Provider-only
Freshness: static preview
Confidence: modeled
Disabled by default
```

### 7.5 Buttons and CTAs

Buttons must not pretend to perform real backend actions.

For mock actions, use safe labels:
- `Preview workflow`
- `Open preview`
- `View mock report`
- `Review placeholder`
- `Configure later`
- `Requires provider connection`

Avoid live-sounding labels unless real backend exists:
- `Send now`
- `Export now`
- `Charge card`
- `Sync live data`
- `Connect account`
- `Delete user`

If a button is not wired to backend, label it safely or make it visually disabled.

---

## 8. Responsive rules

Desktop should look excellent, but mobile must not break.

Required responsive behavior:
- grids stack cleanly
- tables use horizontal scroll or mobile-friendly cards
- action bars wrap
- top bar does not overflow
- cards do not become too narrow
- text truncates where appropriate
- mobile nav does not cover content
- sticky/bottom nav areas include safe padding
- charts do not overflow

Do not remove important enterprise desktop density just to make mobile easier. Use responsive layout patterns.

---

## 9. Deep architecture principles

Think like a large product architecture team.

### 9.1 Layering

Frontend should be layered:

```text
routes/pages
  use
domain page components
  use
shared product components
  use
ui primitives
  use
tokens/utilities
```

Do not put everything directly inside route files.

### 9.2 Suggested frontend folders

Prefer clear domain separation:

```text
apps/web/src/
├─ app/                         # routes only
├─ components/
│  ├─ app-shell/
│  ├─ navigation/
│  ├─ dashboards/
│  ├─ accounts/
│  ├─ settings/
│  ├─ auth/
│  ├─ charts/
│  ├─ data-tables/
│  ├─ empty-states/
│  ├─ feature-gates/
│  ├─ system-states/
│  ├─ compliance/
│  ├─ ui/                       # shadcn/ui primitives
│  └─ shared/
├─ lib/
│  ├─ mock-data/
│  ├─ navigation.ts
│  ├─ utils.ts
│  ├─ formatters/
│  ├─ constants/
│  └─ types/
└─ styles/
```

### 9.3 Future backend/domain architecture

When backend work begins, prefer domain modules:

```text
backend/
├─ crates/
│  ├─ api/
│  ├─ auth/
│  ├─ accounts/
│  ├─ providers/
│  ├─ analytics/
│  ├─ alerts/
│  ├─ reports/
│  ├─ billing/
│  ├─ audit/
│  └─ common/
```

Future API layers:
```text
HTTP route
  -> request validation
  -> auth/session/permissions
  -> service/use-case
  -> repository/provider adapter
  -> database/external API
  -> response DTO
```

Frontend must be ready for this, but must not fake it today.

---

## 10. Data/model thinking

For every page, ask:
- What entity does this page represent?
- What decisions should the user make here?
- What source produced the data?
- Is data official, licensed, mock, modeled, or restricted?
- Is the data fresh or static?
- Is confidence known?
- What role/permission would control this feature later?
- What backend table/API would power this later?

Do not remove repeated metrics only because they repeat. A metric can appear on many pages if it supports different decisions.

Flag duplication only when:
- the metric is misleading for that page
- the data source is impossible or unsafe
- the same UI is copied when a shared component should exist
- the wording creates compliance risk
- two routes serve the same product purpose without reason

---

## 11. Cline “multi-agent” working mode

Cline may not literally have multiple autonomous agents available. When a task is complex, simulate a multi-agent team using separate passes.

For every medium/large batch, use these internal specialist passes:

### Agent 1 — Product Architect
Checks:
- route purpose
- page hierarchy
- user decision flow
- feature duplication
- future backend mapping

### Agent 2 — UI/UX Designer
Checks:
- visual hierarchy
- spacing
- alignment
- responsive behavior
- premium SaaS quality
- clarity of CTAs

### Agent 3 — Frontend Engineer
Checks:
- component structure
- TypeScript quality
- reuse vs duplication
- server/client component boundary
- imports and build safety

### Agent 4 — Data/Analytics Architect
Checks:
- table/chart logic
- metric meaning
- source/freshness/confidence labels
- future API/database mapping

### Agent 5 — Compliance & Trust Reviewer
Checks:
- no scraping implication
- no private access implication
- risky features properly gated
- official-source language
- mock/live boundaries clear

### Agent 6 — QA/Performance Reviewer
Checks:
- build passes
- mobile does not overflow
- no unnecessary dependencies
- no huge rewrites
- no broken routes
- no fake live actions

For final response, summarize the outcome from these passes. Do not expose irrelevant internal scratch notes.

---

## 12. Batch size rules

The user prefers controlled medium-sized batches when Cline is stable.

Good batch size:
- 2–3 related areas
- shared components first
- clear validation
- exact file list
- no giant rewrite

Avoid:
- 70 tiny single-widget batches
- one huge all-app rewrite
- changing backend + frontend + package files in one uncontrolled task
- installing many packages without approval
- refactoring routes mid-sequence unless asked

---

## 13. Component adoption strategy

Do not rewrite all pages to shadcn at once.

Adopt in stages:

### Stage 1 — UI primitives
Use shadcn:
- Button
- Badge
- Card
- Alert
- Skeleton
- Separator
- Tooltip
- Avatar
- Input
- Select

### Stage 2 — shared product components
Upgrade:
- system states
- empty states
- feature gates
- chart cards
- table shells
- page scaffold
- top bar
- sidebar
- KPI cards

### Stage 3 — data surfaces
Introduce:
- Recharts wrappers
- TanStack table wrappers
- filter bars
- table toolbars
- column visibility mock controls

### Stage 4 — interaction surfaces
Upgrade:
- dialogs
- sheets
- dropdowns
- popovers
- settings forms
- report/export previews

### Stage 5 — performance and QA
Audit:
- bundle impact
- client component usage
- repeated imports
- layout shift
- mobile behavior
- accessibility

---

## 14. Page quality checklist

Before finishing a page, verify:

### Product
- Does the page have a clear purpose?
- Is the main user decision obvious?
- Are risky features gated?
- Does the copy feel official-first?

### UI
- Is the header strong?
- Are cards aligned?
- Are badges consistent?
- Are empty states premium?
- Are tables readable?
- Does mobile stack correctly?

### Data
- Are mock/live boundaries clear?
- Is source/freshness/confidence visible where needed?
- Are metrics meaningful?
- Are charts labeled correctly?

### Engineering
- Is code reusable?
- Are imports clean?
- Is TypeScript safe?
- Are components in the correct folder?
- Did build pass?

---

## 15. Route and feature map guidance

Important private app routes should feel connected:

```text
/dashboard
/accounts
/accounts/[accountId]
/accounts/[accountId]/timeline
/accounts/[accountId]/posts
/accounts/[accountId]/comments
/accounts/[accountId]/followers
/accounts/[accountId]/following
/accounts/[accountId]/engagement
/accounts/[accountId]/ads
/creators
/competitors
/hashtags
/mentions
/alerts
/reports
/exports
/data-sources
/settings
/settings/workspace
/settings/team
/settings/roles
/settings/audit-logs
/settings/compliance
/billing
```

Auth routes:
```text
/login
/signup
/forgot-password
```

Marketing routes may exist separately and should not conflict with private app routes.

Known route conflict rule:
- marketing `/compliance` is separate
- private app compliance is `/settings/compliance`

---

## 16. Future backend-ready frontend patterns

When adding mock UI, design it so real backend can replace mock data later.

Prefer:
```text
mock-data file
  -> typed data object
  -> shared component props
  -> route/page composition
```

Avoid:
```text
hardcoded giant JSX arrays inside route files
```

Use TypeScript types for:
- account
- post
- comment
- follower/following surface
- ad creative
- creator
- competitor
- hashtag
- mention
- alert
- report
- export job
- data source
- audit log
- role
- user/team member
- compliance policy

Future API design should be able to map cleanly to the UI.

---

## 17. Security and privacy future rules

When backend/auth work begins:

Passwords:
- hash only
- never store plain text

Tokens:
- encrypt provider OAuth/API tokens
- never expose tokens to frontend
- never log secrets

Sessions:
- secure cookies
- server-side session table or safe auth provider
- role/permission checks

Billing:
- store payment processor IDs/tokens only
- never store card details

Audit:
- log sensitive admin actions
- log provider connection actions
- log report/export events
- log role/permission changes

Frontend must not imply these are live before implemented.

---

## 18. Accessibility rules

Use accessible components and semantics:
- proper headings
- keyboard focus states
- aria labels for icon-only buttons
- readable contrast
- proper dialog focus behavior
- accessible table headers
- reduced-motion support for animation
- visible focus rings

Do not remove accessibility to make visuals cleaner.

---

## 19. Performance rules

Keep the app fast.

Use:
- server components by default
- client components only for interaction
- small wrappers for charts/tables
- dynamic imports for heavy non-critical components
- reusable components
- minimal animation

Avoid:
- unnecessary client-side state
- giant data blobs in client components
- multiple UI kits
- multiple icon libraries
- huge animation usage
- large chart libraries beyond approved Recharts
- refactoring everything into client components

---

## 20. Reporting format after every Cline task

At the end of every task, Cline must stop and report:

1. Exact files changed.
2. What improved.
3. Routes/pages affected.
4. Validation result.
5. Whether any package/dependency files changed.
6. Confirmation that no backend/live integrations/scraping/private-access behavior was added.
7. If relevant, what to visually review.

Do not continue into another batch without user approval.

---

## 21. Visual review links to include after page changes

When relevant, include clickable localhost paths for the user:

```text
http://localhost:3000/dashboard
http://localhost:3000/accounts
http://localhost:3000/accounts/demo-account
http://localhost:3000/accounts/demo-account/posts
http://localhost:3000/accounts/demo-account/followers
http://localhost:3000/reports
http://localhost:3000/exports
http://localhost:3000/data-sources
http://localhost:3000/settings
http://localhost:3000/settings/workspace
http://localhost:3000/settings/team
http://localhost:3000/settings/roles
http://localhost:3000/settings/audit-logs
http://localhost:3000/settings/compliance
http://localhost:3000/billing
http://localhost:3000/login
http://localhost:3000/signup
http://localhost:3000/forgot-password
```

---

## 22. Highest-level instruction

Build this like a serious enterprise product.

Every change should make the platform:
- more coherent
- more scalable
- more premium
- more aligned
- more compliance-safe
- easier to connect to real backend later
- easier for agencies and brands to understand
- easier for analysts to trust

When in doubt:
1. preserve architecture
2. improve shared components
3. keep copy compliance-safe
4. validate build
5. stop and report
