# Alpha 4 Product Module Differentiation and Redesign Plan

Task: `APP-WEB / DOM-DESIGN / PRODUCT-MODULE-DIFFERENTIATION-PLAN / ALPHA-4A`

Scope: documentation-only planning for ALPHA-4 visual/product redesign work. This plan defines how each module should have a distinct product role, UI pattern, table/list style, backend story, preview-only boundary, and compliance posture before any source redesign begins.

Inputs reviewed for this plan:

- `docs/qa/ALPHA_V1_RELEASE_CANDIDATE_AUDIT.md`
- `docs/qa/ALPHA_1_QA_READINESS_REPORT.md`
- `docs/design/CLINE_FRONTEND_DESIGN_RULES.md`
- `apps/web/src/lib/navigation.ts`
- `CLINE_PROJECT_RULES.md`
- `.clinerules`

Constraints:

- No source files are edited in ALPHA-4A.
- No backend, provider, OAuth, billing, export, download, search, database, scraping, private-access, hidden-surveillance, anti-bot, or live-data behavior is added.
- ALPHA-4 redesign work should happen only in later medium-sized batches with `pnpm --filter web build` validation.

## Product Architecture Goal

Alpha V1 is route-complete and compliance-safe, but ALPHA-4 should make the product feel less template-driven. Every module should answer a different product question, use a different composition pattern, and explain a future backend/provider function without pretending that function exists in Alpha.

The redesign goal is not to make pages unrelated. The goal is a coherent enterprise product where each module has a recognizable job:

- **Overview pages** should feel like command centers.
- **Account intelligence pages** should feel like account dossiers, queues, libraries, maps, or analytics workbenches depending on purpose.
- **Signal pages** should feel like planning, triage, or rule-review surfaces, not live monitoring tools.
- **Operations pages** should feel like package, provider, billing, and governance control rooms with disabled preview boundaries.
- **Public/auth pages** should feel like trust-building entry surfaces, not live activation flows.

## Module Differentiation Matrix

### Public / Marketing Modules

| Module | Product role | Main user question | Unique widget/card ideas | Unique table/list style | Future real backend/provider function | Alpha preview-only boundary | Compliance/safety risk level | Design direction so it does not look copy-paste |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Public product story and safe Alpha entry point | What is this platform, and is it official-source safe? | Trust posture stack, Alpha demo path, private-beta readiness rail, compliance-first use-case cards | Narrative feature path cards rather than a data table | Marketing CMS, analytics-safe page events, approved lead routing | No live Instagram data, no provider activation, no request submission | Low | Cinematic hero plus editorial proof panels and a visible compliance spine |
| Pricing | Private-beta packaging and buyer expectation setting | Which preview package fits my team, and what is not billable yet? | Plan cards, usage/quota preview, provider-cost caveat, billing-backend checklist | Plan comparison matrix with disabled upgrade states | Billing service, payment processor tokens, subscription records, invoice records | Billing preview only; no card collection, upgrade, invoice generation, or subscription write | Medium | Calculator/ledger layout with plan economics and disabled activation states |
| About | Trust, positioning, and product philosophy | Why should agencies/brands trust this product? | Mission cards, official-source principles, compliance promise, future operating model | Values/timeline list instead of operational table | Marketing CMS, legal/policy copy workflow, customer proof library | No live capability claims; no provider/data activation | Low | Editorial company page with large trust statements and compliance principles |
| Contact | Private-beta request-access placeholder | How would I request access when private beta opens? | Request path steps, readiness checklist, approved-source requirements, concierge handoff card | Request-stage tracker with disabled submission state | CRM/email routing, request-access API, audit record for onboarding requests | No form submission, email sending, CRM write, provider connection, or backend action | Medium | Guided concierge/checklist layout rather than a generic contact form |

### Auth Modules

| Module | Product role | Main user question | Unique widget/card ideas | Unique table/list style | Future real backend/provider function | Alpha preview-only boundary | Compliance/safety risk level | Design direction so it does not look copy-paste |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Login | Preview of sign-in posture | What will secure access feel like later? | Access boundary card, role/session preview, official-source reminder | Security checklist list; no user table | Auth service, session cookies, role lookup, audit login event | No real sign-in, session, provider lookup, or credential automation | Medium | Security gateway layout with strong trust badges and disabled auth action |
| Signup | Workspace access request and account creation preview | What will workspace creation require later? | Workspace readiness checklist, approval stages, policy gate reminder | Approval-stage list instead of account creation table | Tenant creation, user provisioning, email verification, onboarding audit | No account creation, workspace write, email, billing, or provider activation | Medium | Onboarding wizard preview with clear approval gates and disabled controls |
| Forgot password | Password reset safety preview | How will account recovery work later? | Recovery boundary notice, email-token lifecycle preview, support fallback card | Recovery step list with disabled send state | Password reset token service, email delivery, audit event | No reset email, token, session mutation, or account lookup | Low | Calm recovery card with minimal fields and explicit no-send Alpha copy |

### Core App and Account Modules

| Module | Product role | Main user question | Unique widget/card ideas | Unique table/list style | Future real backend/provider function | Alpha preview-only boundary | Compliance/safety risk level | Design direction so it does not look copy-paste |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dashboard | Workspace overview | What needs executive attention across this workspace? | Command summary, readiness radar, risk/compliance strip, cross-module signal cards | Executive priority feed with grouped states | Aggregated analytics service, alert summary API, provider freshness rollups | Static mock metrics; no live sync, query, or backend job | Low | Executive command center with asymmetric KPI/risk/priority layout |
| Accounts hub | Account intelligence hub | Which owned/approved accounts are ready for review? | Account readiness cards, source approval lanes, connection-state preview, demo-account entry | CRM-style account roster with readiness badges | Account service, official account connection, OAuth/token storage, provider status | Demo account preview only; no account connection or source activation | Medium | Portfolio pipeline layout with account cards plus readiness roster |
| Account overview | Account dossier | What is the current profile-level story for this account? | Account identity header, source/freshness bundle, account health snapshot, tab journey map | Dossier sections with quick-link tiles | Account profile API, insight snapshots, source provenance, audit records | Static demo account only; no live profile fetch or account write | Medium | Dossier/profile layout distinct from dashboard and accounts hub |
| Timeline | Account activity timeline | What happened in this account preview over time? | Chronological rail, event-type clusters, freshness markers, source checkpoints | Vertical timeline grouped by event category | Event ingestion service, webhook events, job history, audit event stream | Static activity preview; no ingestion, webhook, refresh, or live job | Medium | Timeline-first layout with left rail and event evidence cards |
| Posts | Content/media library | Which content assets are worth reviewing? | Media grid, post performance chips, content format filters, asset quality cards | Visual media library with table fallback | Instagram Graph media insights, content snapshots, object storage metadata | Mock media only; no content ingestion, download, or live metrics | Medium | Gallery/library layout with visual asset cards, not a generic KPI/table page |
| Comments | Moderation/sentiment review | Which comments need review or response planning? | Moderation queue, sentiment/risk lanes, response guidance card, owned-comment boundary | Inbox/queue list with triage status | Owned comment ingestion, moderation workflow, sentiment service, audit trail | Mock owned-comment review only; no response send, moderation action, or live monitoring | Medium | Triage inbox layout with queue states and sentiment lanes |
| Followers | Audience composition | What does the audience mix look like? | Segment atlas, geography/language cards, quality and composition panels, readiness filters | Segment table grouped by audience attributes | Audience insight snapshots for connected/approved sources, aggregation jobs | Mock composition only; no follower tracking or identity-level monitoring | Medium | Audience analytics atlas with composition grids and segment cards |
| Following | Relationship map | What public/approved entities does this account relate to? | Relationship map, category clusters, relevance cards, market/brand adjacency panels | Entity relationship list grouped by category | Approved public-entity relationship snapshots, provider-reviewed enrichment | Mock relationship map only; no arbitrary identity surveillance | High | Network/map-inspired layout rather than follower-style composition panels |
| Likes | Affinity preview | What content themes might this account or audience care about? | Affinity cluster cards, topic/format intent tiles, restricted-source warning | Topic cluster list with confidence labels | Policy-gated affinity modeling from approved/owned/licensed data | Restricted placeholder; no user like-history collection or identity tracking | High / Restricted | Cluster/affinity board with stronger gate treatment and no live row affordances |
| Recent follows | Restricted change-log placeholder | What would a compliant new-relationship change log require? | Locked change-log vault, license requirement card, approval checklist, risk banner | Disabled evidence ledger with masked rows | Licensed-provider-only change detection with policy gates and audit evidence | Disabled Alpha placeholder; no recent follow tracking or live change detection | High / Licensed-provider-only | Vault/approval layout with masked records and gated workflow states |
| Recent unfollows | Restricted churn/change-log placeholder | What would compliant relationship-loss analysis require? | Churn gate card, lost-relationship placeholder, retention-readiness checklist | Disabled churn/change ledger with masked records | Licensed-provider-only churn detection, policy review, audit evidence | Disabled Alpha placeholder; no unfollow tracking or identity-level monitoring | High / Licensed-provider-only | Churn/risk review layout distinct from recent-follows acquisition framing |
| Engagement | Analytics/trends | Which engagement patterns are improving or weakening? | Trend cockpit, metric correlation cards, benchmark deltas, anomaly preview | Trend table grouped by metric and period | Analytics rollup service, time-series store, ClickHouse-backed events | Mock trend analytics only; no live sync or real-time monitoring | Medium | Chart-first analytics cockpit with trend panels and comparison controls disabled |
| Ads | Ad/creative intelligence | Which ad or creative signals should be reviewed? | Creative gallery, spend/placement placeholders, Ad Library gate, campaign readiness cards | Creative/campaign table with source approval badges | Meta Marketing API, Meta Ad Library ingestion, creative asset metadata | Mock ad intelligence only; no ad monitoring, spend fetch, or download | Medium | Creative intelligence gallery with ad cards and source approval panels |

### Discovery, Signals, Operations, and Governance Modules

| Module | Product role | Main user question | Unique widget/card ideas | Unique table/list style | Future real backend/provider function | Alpha preview-only boundary | Compliance/safety risk level | Design direction so it does not look copy-paste |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Creators | Creator discovery/shortlist | Which potential creators should be reviewed later? | Shortlist board, fit score cards, brand-safety readiness, outreach-readiness panel | Candidate shortlist/Kanban list | Approved creator search provider, audience-quality scoring, CRM handoff | Mock shortlist only; no real creator search or outreach | Medium | Recruiting pipeline layout with candidate cards and evaluation lanes |
| Competitors | Benchmark peer sets | How do selected peers compare at a high level? | Peer-set scorecard, gap cards, cadence comparison, benchmark health panel | Benchmark matrix grouped by peer set | Public/approved benchmark ingestion, competitor profile snapshots | Mock benchmark only; no competitor monitoring job or scraping | Medium | Competitive scorecard layout with comparison matrix and gap panels |
| Hashtags | Topic/hashtag planning | Which topics or hashtags are useful for planning? | Topic cluster map, campaign-fit cards, velocity preview, source-readiness gate | Topic planner list with campaign tags | Official/public hashtag APIs where allowed, approved provider topic signals | Mock topic signals only; no live hashtag search or monitoring | Medium | Planning board with topic clusters, not a monitoring dashboard |
| Mentions | Brand-safety triage | Which owned/public mentions would need review? | Mention risk lanes, sentiment triage, response-readiness card, public/owned source gate | Triage inbox grouped by risk/opportunity | Owned/public mention ingestion, approved monitoring provider, response workflow | Mock mention triage only; no live listening, private DM access, or response send | Medium | Brand-safety queue layout with risk lanes and response planning cards |
| Alerts | Mock rules/triage | Which alert rules might be configured later? | Rule cards, severity matrix, disabled delivery channels, triage playbooks | Rule list with disabled trigger/delivery states | Alert rules engine, notification routing, queue and audit events | Preview-only rules; no alert delivery, trigger evaluation, or backend job | Medium | Rule-builder preview with disabled delivery rail and playbook states |
| Reports | Report library/planning | Which stakeholder reports should exist? | Report templates, approval state, schedule preview, narrative sections | Report library table grouped by audience/use case | Report generation jobs, scheduling, object storage, delivery audit | Preview-only; no report generation, scheduling, file creation, or delivery | Medium | Publishing library layout with template cards and approval workflow preview |
| Exports | Export package preview | What data packages would be exportable later? | Package manifest, file-format cards, compliance evidence bundle, retention notice | Export manifest/job table with disabled download states | Export jobs, object storage, signed downloads, audit records | Preview-only; no export file, package generation, or download | Medium | Package-builder/manifest layout distinct from report library |
| Data Sources | Provider readiness | Which official or approved sources are ready later? | Source registry, approval checklist, rate-limit/freshness cards, provenance panel | Provider registry with readiness and confidence columns | Provider adapters, OAuth, token vault, rate-limit and provenance services | Preview-only registry; no provider connection, token storage, or OAuth | Medium | Integration readiness control room with source cards and approval timeline |
| Billing | Subscription/payment placeholder | What would plan, usage, and invoice state look like later? | Plan ledger, quota meters, invoice preview, payment processor gate | Billing ledger/invoice list with disabled actions | Billing backend, payment processor tokens, usage metering, invoice service | Billing preview only; no payment method, subscription write, invoice download | Medium | Finance ledger layout with quota meters and disabled payment states |
| Settings | Governance/admin placeholder | Where will admins manage workspace controls later? | Admin index cards, governance readiness, policy shortcuts, pending setup rail | Settings category list rather than data table | Settings API, workspace persistence, role-aware admin surface | Static settings preview; no saved changes or backend action | Low | Admin landing page with grouped governance cards and setup rail |
| Workspace settings | Workspace governance placeholder | What workspace identity and defaults will be managed later? | Workspace profile preview, data-retention defaults, source policy reminders | Form-preview sections with disabled save states | Workspace settings persistence, tenant metadata, audit writes | No saved settings, workspace switch, or backend write | Low | Structured admin form preview with side summary and disabled saves |
| Team settings | Team management placeholder | Who will have access later? | Member roster cards, invite-disabled panel, access lifecycle states | Team roster with role/status chips | User invites, membership service, email delivery, audit events | No invites, user changes, email, or session mutation | Medium | People-management roster with lifecycle states and invite gate |
| Roles settings | Permission model placeholder | What can each role do later? | Permission matrix, role cards, policy-gate overlays, restricted capability tags | Role-permission matrix | RBAC service, permission checks, policy enforcement, audit events | No role edits, permission changes, or backend enforcement | Medium | Matrix-first layout with role cards and policy badges |
| Audit logs | Governance evidence ledger | What evidence will admins review later? | Evidence timeline, actor/action/source cards, retention notice, immutable-log concept | Audit ledger grouped by event type and actor | Audit event writes, immutable retention, exportable evidence packages | Mock log only; no real audit write, download, or backend event stream | Medium | Evidence ledger/timeline layout with forensic detail styling |
| Compliance settings | Policy and source-gate preview | Which features are allowed, restricted, or disabled? | Policy matrix, classification cards, approval workflow, sensitive-feature gates | Feature-policy matrix by classification and source | `packages/policy/src/feature_policy.ts`, backend enforcement, provider approval workflow | Policy preview only; no enforcement change or provider enablement | High | Compliance command center with classification matrix and approval path |

## A. Current Similarity Risk Map

These are the main areas that may still feel visually or functionally too similar if ALPHA-4 redesign work continues with the same page scaffold pattern.

| Similarity risk | Why it matters | Risk level | Differentiation target |
| --- | --- | --- | --- |
| Posts / Comments / Ads hero and card similarity | All are account content surfaces, but they answer different questions: media library, moderation queue, and creative intelligence. | High | Posts should become a visual library; Comments a triage inbox; Ads a creative/campaign gallery. |
| Reports / Exports operational similarity | Both are output surfaces and can look like identical job tables. | High | Reports should feel like a publishing library; Exports should feel like a package manifest and compliance bundle builder. |
| Settings subpage similarity | Workspace, Team, Roles, Audit Logs, and Compliance can collapse into repeated admin cards. | High | Use distinct patterns: forms, roster, matrix, evidence ledger, and policy command center. |
| Followers / Following structure similarity | Both audience pages can look like the same table with different labels. | High | Followers should be audience composition; Following should be relationship/network mapping. |
| Likes / Recent follows / Recent unfollows restricted placeholder similarity | Restricted identity-level placeholders can become repetitive warning pages. | High | Likes should be affinity clusters; recent follows should be a gated acquisition/change vault; recent unfollows should be a churn/loss evidence review. |
| Hashtags / Mentions / Alerts signal similarity | Signal pages can appear as generic monitoring dashboards, which creates fake-live risk. | Medium | Hashtags should be planning; Mentions should be brand-safety triage; Alerts should be disabled rules/playbooks. |
| Creators / Competitors discovery similarity | Both can become simple entity tables. | Medium | Creators should be a shortlist/recruiting pipeline; Competitors should be a peer-set benchmark matrix. |
| Dashboard / Account overview / Accounts hub overview similarity | All are summary surfaces and can overuse KPI rows. | Medium | Dashboard is executive command; Accounts hub is portfolio pipeline; Account overview is an account dossier. |
| Public marketing page shell similarity | Home, Pricing, About, and Contact share a polished public shell. | Medium | Each needs a different story shape: narrative, pricing ledger, editorial trust, request-access concierge. |
| Auth page shell similarity | Login, Signup, and Forgot Password share an auth shell. | Low | Keep shared security shell but vary the inner workflow: access gate, onboarding approval, recovery lifecycle. |
| Data Sources / Billing operational card similarity | Both are operations/governance pages with status cards and tables. | Medium | Data Sources should feel like integration readiness; Billing should feel like finance ledger and quota management. |

## B. ALPHA-4 Redesign Batch Plan

Each ALPHA-4 redesign batch should be medium-sized, route-focused, and build-validated. Each batch must preserve mock/static Alpha boundaries, use no backend/provider/live behavior, and avoid package/config changes unless explicitly approved.

| Batch | Topic and routes/pages | Main redesign objective | Approximate max file scope | Required validation | Safety guardrails |
| --- | --- | --- | --- | --- | --- |
| ALPHA-4B | Account content differentiation: `/accounts/demo-account/posts`, `/accounts/demo-account/comments`, `/accounts/demo-account/engagement`, `/accounts/demo-account/ads` | Split content/media library, moderation queue, analytics cockpit, and ad creative intelligence into visibly different page patterns. | 6-10 files | `pnpm --filter web build` plus touched-file `git diff --check` | No ingestion, moderation action, ad monitoring, export/download, provider activation, or live metrics. |
| ALPHA-4C | Audience and affinity differentiation: `/accounts/demo-account/followers`, `/accounts/demo-account/following`, `/accounts/demo-account/likes` | Make followers an audience composition atlas, following a relationship map, and likes an affinity cluster preview. | 6-10 files | `pnpm --filter web build` plus touched-file `git diff --check` | No follower tracking, like-history collection, identity-level monitoring, scraping, or private-account access. |
| ALPHA-4D | Account dossier and restricted change-log differentiation: `/accounts/demo-account`, `/accounts/demo-account/overview`, `/accounts/demo-account/timeline`, `/accounts/demo-account/recent-follows`, `/accounts/demo-account/recent-unfollows` | Strengthen the account dossier and timeline while making recent follows/unfollows feel like gated evidence/change-log placeholders. | 6-10 files; split if it exceeds scope | `pnpm --filter web build` plus touched-file `git diff --check` | No live change detection, webhooks, identity tracking, licensed-provider execution, or backend jobs. |
| ALPHA-4E | Output and operations differentiation: `/reports`, `/exports`, `/data-sources`, `/billing` | Separate publishing library, export manifest, provider readiness, and finance ledger patterns. | 6-10 files | `pnpm --filter web build` plus touched-file `git diff --check` | No report generation, file creation, download, OAuth, provider activation, payment, invoice, or subscription behavior. |
| ALPHA-4F | Governance admin differentiation: `/settings`, `/settings/workspace`, `/settings/team`, `/settings/roles` | Make settings an admin hub, workspace a form-preview surface, team a roster lifecycle page, and roles a permission matrix. | 6-10 files | `pnpm --filter web build` plus touched-file `git diff --check` | No saved settings, invites, role edits, permission changes, backend writes, or session changes. |

Recommended follow-on batches after ALPHA-4F if more redesign passes are approved:

- `ALPHA-4G`: Audit logs and compliance settings evidence/policy redesign.
- `ALPHA-4H`: Creators, competitors, hashtags, mentions, and alerts signal/discovery differentiation, split if needed.
- `ALPHA-4I`: Public marketing and auth polish after private app module differentiation is accepted.

## C. Design System Rules for ALPHA-4

1. **One module, one recognizable layout archetype.** Do not reuse the same header/KPI/table stack without a module-specific structure.
2. **Different fake workflow states per module.** A report template state, export manifest state, moderation queue state, and provider readiness state should not look interchangeable.
3. **Keep Alpha boundaries visible.** Every page that implies future backend/provider work must clearly state preview-only, mock-only, static, disabled, or deferred status.
4. **Disabled controls must not look active.** If a control does not perform a real action, style and label it as disabled or preview-only.
5. **No live/scraping/private-access claims.** Never imply scraping, private account access, hidden surveillance, fake login automation, anti-bot bypass, live identity tracking, or unofficial access.
6. **Future features must be marked placeholder/deferred.** Real OAuth, billing, reports, exports, alert delivery, source connections, saved settings, and backend writes remain future work.
7. **Table/list style must match the domain.** Use media grids, inbox queues, ledgers, matrices, timelines, shortlists, provider registries, and evidence logs where appropriate instead of generic tables everywhere.
8. **Badges should communicate source, freshness, confidence, and risk.** Use labels such as `Mock data`, `No live query`, `Official-source required`, `Provider approval required`, `Restricted`, and `Disabled in Alpha`.
9. **Use shared primitives without forcing identical pages.** Shared cards, badges, tables, and shells are good; repeated page composition is the risk.
10. **Preserve responsive and accessibility quality.** ALPHA-4 visual differentiation must not break mobile stacking, focus states, contrast, headings, or table readability.
11. **Backend-ready, not backend-fake.** Mock UI should map cleanly to future data models and provider APIs but must not pretend those integrations exist today.
12. **Keep each batch reviewable.** Limit redesign batches to one topic, 2-4 related routes/pages where possible, around 6-10 files max, and one build validation pass.

## D. Final Recommendation

Start ALPHA-4B with **account content pages**: `/accounts/demo-account/posts`, `/accounts/demo-account/comments`, `/accounts/demo-account/engagement`, and `/accounts/demo-account/ads`.

Reasoning:

- These pages are central to the demo account story and are likely to be visited in every Alpha walkthrough.
- They have the clearest current similarity risk: content/media, moderation, analytics, and ad intelligence can look like the same page if they share a generic hero/KPI/table rhythm.
- They can be differentiated without backend behavior: media library, triage inbox, chart cockpit, and creative gallery patterns are frontend-only visual changes.
- They are compliance-sensitive enough to benefit from clearer official-source and preview-only boundaries, but not so broad that the batch needs to touch the whole app shell.

Do not start ALPHA-4B with reports/exports, settings/governance, or public marketing polish unless the demo priority changes. Those areas are important, but account content pages will most improve the perceived product depth of the Alpha V1 app with a controlled 4-route batch.

## Validation Status

Validation completed for this docs-only ALPHA-4A batch:

- `pnpm --filter web build` passed.
- `git diff --check -- docs/design/ALPHA_4_PRODUCT_MODULE_DIFFERENTIATION_PLAN.md docs/qa/ALPHA_1_QA_READINESS_REPORT.md` completed with only the existing line-ending normalization warning for `docs/qa/ALPHA_1_QA_READINESS_REPORT.md` and no whitespace errors reported.