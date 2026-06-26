# Alpha 1 QA Readiness Report

Task: `APP-WEB / DOM-ALPHA-QA / ROUTE-NAV-COPY-LAUNCH-READINESS-AUDIT / ALPHA-1`

## Routes checked

- App routes: `/dashboard`, `/accounts`, `/accounts/demo-account`, `/accounts/demo-account/timeline`, `/accounts/demo-account/posts`, `/accounts/demo-account/comments`, `/accounts/demo-account/followers`, `/accounts/demo-account/following`, `/accounts/demo-account/engagement`, `/accounts/demo-account/ads`, `/accounts/demo-account/recent-follows`, `/accounts/demo-account/recent-unfollows`, `/accounts/demo-account/likes`, `/creators`, `/competitors`, `/hashtags`, `/mentions`, `/alerts`, `/reports`, `/exports`, `/data-sources`, `/settings`, `/settings/workspace`, `/settings/team`, `/settings/roles`, `/settings/audit-logs`, `/settings/compliance`, `/billing`.
- Auth routes: `/login`, `/signup`, `/forgot-password`.
- Route files exist for the requested alpha paths. Final render/build validation is `pnpm --filter web build`.

## Issues fixed

- Account overview quick links pointed at `/accounts/demo/...` instead of the requested `/accounts/demo-account/...` demo route family.
- Gated account routes for recent follows, recent unfollows, and likes existed but were not reachable from the account overview section navigation.
- The account list CTA was a non-navigating button; it now opens the demo account preview route.
- Auth buttons used live-sounding labels for sign-in/reset/create flows; labels now clearly frame them as mock preview workflows.
- Risky account placeholder route copy now explicitly says licensed-provider-only or restricted and avoids implying live identity-level access.

## Issues intentionally deferred

- Top-level sidebar intentionally remains limited to major product domains; adding every account subroute there would add noise for alpha.
- Account rows remain mostly static table rows; deeper row-level navigation and selection states can wait until the account list interaction batch.
- Auth forms remain static, editable frontend fields. Real authentication, validation, sessions, password reset delivery, and tenant creation are private-beta/backend work.
- Billing, reports, exports, settings, alerts, and data-source actions remain mock-only previews with no backend writes.

## Alpha demo flow recommendation

1. Start at `/login` to show the mock-only auth boundary.
2. Open `/dashboard` for the executive overview and compliance posture.
3. Go to `/accounts`, then use **Open demo account preview** to enter `/accounts/demo-account`.
4. Walk through account tabs: timeline, posts, comments, followers, following, engagement, ads.
5. Briefly open recent follows, recent unfollows, and likes to show restricted/licensed-provider-only gating.
6. Review `/data-sources`, `/settings/compliance`, `/reports`, `/exports`, and `/billing` to explain official-source readiness, governance, output packaging, and mock billing boundaries.

## Remaining blockers before private beta

- Real auth/session handling and role enforcement are not implemented.
- No provider connection flow, token storage, rate-limit handling, or backend policy enforcement exists yet.
- No real reports, exports, billing actions, alerts, or audit records are generated.
- Route-level smoke tests or Playwright coverage would be useful before private beta.
- Sensitive features still require implementation through `packages/policy/src/feature_policy.ts` and approved provider/source gates.

## Mock-only and compliance confirmation

This alpha frontend remains mock-only and compliance-first. No backend/live integrations, scraping, fake login automation, private account access, hidden surveillance, credential automation, anti-bot bypass, real auth, real billing, real reports, or real exports were added.

## ALPHA-2A Account Demo Mock Action Safety

- Pages reviewed: `/accounts`, `/accounts/demo-account`, `/accounts/demo-account/recent-follows`, `/accounts/demo-account/recent-unfollows`, and `/accounts/demo-account/likes`.
- Copy/label changes made: clarified the `/accounts` CTA context as a demo account preview, changed demo overview freshness/provider/job/activity labels to mock/static Alpha preview language, and strengthened risky route descriptions with Licensed-provider-only, Restricted, Disabled in Alpha, not available from normal official API access, and no private account access or hidden surveillance language.
- Remaining deferred private-beta/provider items: real official source connection UX, provider adapter review, policy-backed enforcement through `packages/policy/src/feature_policy.ts`, route smoke tests, and any licensed provider workflows for restricted identity-level features.

## ALPHA-2B Auth and Billing Mock Safety

- Pages reviewed: `/login`, `/signup`, `/forgot-password`, and `/billing`.
- Live-sounding labels corrected: auth headings, helper links, password/reset helper text, workspace creation language, and billing route framing now explicitly say Alpha/mock/static preview where needed.
- Billing safety copy added: `/billing` now includes a route-level billing preview notice stating plan comparison is preview-only, usage limits are demo-only, invoices are preview-only, upgrades require a future billing backend, and no payment method is collected in Alpha.
- Remaining private-beta backend items: real authentication, sessions, password reset email/token delivery, tenant/workspace creation, billing service routes, payment processor integration, subscription changes, invoice records, and audit-backed billing history.

## ALPHA-2C Data Sources and Compliance Mock Safety

- Pages reviewed: `/data-sources` and `/settings/compliance`.
- Source/provider wording corrected: `/data-sources` now frames the source registry as preview/mock-only, names the allowed strategy as Instagram Graph API, Meta Marketing API, Meta Ad Library API, owned/connected account webhooks, and licensed-provider adapters, and states real connections require private-beta backend plus official source approval.
- Compliance enforcement wording corrected: `/settings/compliance` now includes a route-level governance preview notice stating policy preview, Alpha demo copy only, requires backend enforcement, and audit enforcement planned for private beta.
- Remaining private-beta/backend items: real provider connection flows, official source approval workflow, OAuth/token storage, provider adapter execution, backend policy enforcement, audit event writes, retention jobs, role-backed compliance decisions, and licensed-provider review workflows.

## ALPHA-2D Reports and Exports Mock Safety

- Pages reviewed: `/reports` and `/exports`.
- Live-sounding report/export wording corrected: report generation, scheduled delivery, ready/scheduled statuses, export readiness, file format packages, delivery/download placeholders, and recommended actions now use Alpha preview/mock-only language.
- Remaining private-beta/backend items: real report generation, report scheduling, export jobs, file creation/downloads, delivery integrations, object storage, audit event writes, official source connections, licensed-provider workflows, and backend-enforced policy gates.

## ALPHA-2E Dashboard and Alerts Mock Safety

- Pages reviewed: `/dashboard` and `/alerts`.
- Live-sounding dashboard/alert wording corrected: dashboard title, helper text, KPI labels, provider activity, collection job status, anomaly highlights, mock intelligence events, alert title/profile copy, alert KPI labels, freshness/status/priority labels, mock alert rule descriptions, and recommended actions now emphasize Alpha preview/mock-only state.
- Remaining private-beta/backend items: official source connection UX, provider adapters, alert backend/rules engine, private-beta monitoring service, live notification delivery, workflow queues, audit records, policy enforcement through `packages/policy/src/feature_policy.ts`, and licensed-provider review workflows.

## ALPHA-2F Creators and Competitors Mock Safety

- Pages reviewed: `/creators` and `/competitors`.
- Live-sounding creator/competitor wording corrected: creator discovery, fit/scoring, freshness, outreach, creator source, competitor intelligence, benchmark tracking, monitoring, public ad, and recommended-action labels now emphasize Alpha preview/mock-only state.
- Remaining private-beta/backend/provider items: official source connection UX, compliant licensed/private-beta provider service review, backend provider adapters, provenance/freshness/confidence enforcement, policy gates through `packages/policy/src/feature_policy.ts`, and any future live creator discovery or competitor monitoring workflows.

## ALPHA-2G Hashtags and Mentions Mock Safety

- Pages reviewed: `/hashtags` and `/mentions`.
- Live-sounding hashtag/mention wording corrected: hashtag intelligence/tracking, trend/freshness/status labels, hashtag source/recommendation copy, mention monitoring/listening, sentiment/freshness/status labels, mention source/recommendation copy, and table helper text now emphasize Alpha preview/mock-only state.
- Remaining private-beta/backend/provider items: official source connection UX, compliant licensed/private-beta monitoring service review, backend provider adapters, provenance/freshness/confidence enforcement, policy gates through `packages/policy/src/feature_policy.ts`, and any future live hashtag tracking or mention listening workflows.

## ALPHA-2H Account Timeline Posts and Comments Mock Safety

- Pages reviewed: `/accounts/demo-account/timeline`, `/accounts/demo-account/posts`, and `/accounts/demo-account/comments`.
- Live-sounding timeline/post/comment wording corrected: timeline ingestion, live/freshness badges, post collection/performance labels, comment monitoring/sentiment/moderation labels, preview table helper text, and recommendation wording now emphasize Alpha preview/mock-only state.
- Remaining private-beta/backend/provider items: official source connection UX, compliant provider adapters, private-beta moderation service review, backend ingestion/collection/monitoring jobs, provenance/freshness/confidence enforcement, audit records, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2I Account Followers Following and Engagement Mock Safety

- Pages reviewed: `/accounts/demo-account/followers`, `/accounts/demo-account/following`, and `/accounts/demo-account/engagement`.
- Wording fixed: follower, following, and engagement headers, freshness/source/status badges, KPI labels, filter helper text, gated identity panels, source labels, table row labels, and compliance notices now emphasize Alpha preview/mock intelligence, disabled collection or monitoring, required official source connection, and licensed provider review where relevant.
- Deferred backend/provider items: official source connection UX, compliant provider adapters, licensed provider review workflows for identity-level follower/following features, private-beta engagement monitoring services, backend collection/monitoring jobs, provenance/freshness/confidence enforcement, audit records, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2J Account Ads Mock Safety

- Pages reviewed: `/accounts/demo-account/ads`.
- Wording fixed: ads page header, freshness/source/status badges, KPI labels, filter helper text, creative cards, campaign/spend/source labels, table headers, competitive ad signal panel, and compliance notice now emphasize Ads preview, Mock ad intelligence, Ad monitoring disabled in Alpha, required Meta Marketing API connection, required Meta Ad Library review, required private-beta ads service, and no live ad monitoring.
- Deferred backend/provider items: Meta Marketing API connection UX, Meta Ad Library review/approval workflow, private-beta ads service, compliant provider adapters, real ad monitoring jobs, Ad Library ingestion, provenance/freshness/confidence enforcement, audit records, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2K Settings Governance Mock Safety

- Pages reviewed: `/settings/workspace`, `/settings/team`, `/settings/roles`, and `/settings/audit-logs`.
- Live-sounding workspace/team/role/audit wording corrected: workspace governance/status, team access/invitation/member status, role/permission framing, and audit event/trail/status copy now emphasize Alpha preview, mock-only records, disabled invitations, and required backend enforcement.
- Remaining backend/governance/enforcement items: real workspace persistence, team invitations, auth/session writes, RBAC/permission enforcement, audit ingestion and immutable evidence generation, retention jobs, object storage, provider approval workflows, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2L Remaining Account Subroutes Mock Safety

- Routes reviewed: `/accounts/demo-account/overview`. The account route folder also contains `/accounts/demo-account` and the previously covered subroutes for timeline, posts, comments, followers, following, engagement, ads, recent follows, recent unfollows, and likes.
- Live-sounding wording corrected: the remaining overview subroute title and helper text now frame the page as an account overview preview with Alpha demo only, mock intelligence, official-source metric placeholders, and no live collection running.
- Remaining backend/provider/policy items: official source connection UX, compliant provider adapters, private-beta account service, backend collection/processing jobs, provenance/freshness/confidence enforcement, audit records, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2M Public Marketing and Pricing Mock Safety

- Public pages reviewed: `/pricing`. The requested root file `apps/web/src/app/page.tsx` was not present, and `/about` plus `/contact` route files were not present, so no missing public pages were created or edited.
- Risky claims corrected: pricing route copy now frames plan packaging as a Pricing preview for private beta official-source intelligence, states billing is preview-only, says no payment method is collected in Alpha, and notes activation requires official source connection plus provider approval.
- Remaining private-beta/backend/provider/billing items: real public home page implementation, real billing service, payment processor integration, subscription activation, official source connection UX, provider approval workflow, account onboarding, backend enforcement, audit records, and policy gates through `packages/policy/src/feature_policy.ts`.

## ALPHA-2N Global Navigation and CTA Mock Safety

- Global areas reviewed: app shell layout, sidebar navigation, mobile navigation, top bar/header controls, navigation config, shared empty state defaults, and shared enterprise table empty-state CTA copy.
- Live-sounding CTA/nav wording corrected: `Monitoring` nav group changed to `Signal previews`, accounts nav description changed to `Connection preview workspace`, mentions nav description changed to `Owned/public mention previews`, `Billing` route label changed to `Billing preview`, workspace chrome changed to `Alpha demo`, global freshness badge changed to `No live sync: static preview`, and default empty-state/action copy now frames source setup as a future preview rather than a live connection action.
- Remaining backend/provider/action wiring items: real auth/session handling, official source connection UX, provider adapters, live sync/refresh jobs, reports/exports generation, alert rules engine, billing/payment processor, workspace/team writes, audit records, and policy enforcement through `packages/policy/src/feature_policy.ts` remain private-beta/backend work.

## ALPHA-2O Shared Status Source and Freshness Copy Safety

- Shared areas reviewed: shared system states, empty states, feature gate notice, chart card, dashboard/page scaffold, KPI card usage in the scaffold, enterprise data table, and root shared mock activity data in `apps/web/src/lib/mock-data.ts`.
- Live-sounding shared wording corrected: shared chart badges changed from `Chart-ready` and API `-ready` labels to preview wording, provider integration helper copy now says no live provider integrations run in Alpha, scaffold freshness changed to `Static freshness`, scaffold provider confidence changed to `Mock provider confidence`, future source wording now references future backend enablement instead of immediate connection, and root shared mock activity source/freshness rows now use mock/static preview labels instead of relative `2m ago`/`8m ago`/`1h ago` freshness.
- Remaining backend/provider/sync items: real provider connection state, source connection UX, live freshness calculation, sync/refresh jobs, backend processing, webhook ingestion, database writes, provider adapter execution, and policy enforcement through `packages/policy/src/feature_policy.ts` remain private-beta/backend work.

## ALPHA-2P Billing Usage and Invoices Mock Safety

- Billing areas reviewed: `/billing` route import path, billing page header/title/helper text, mock plan packaging panel, usage preview meters, invoice preview cards, payment labels, licensed provider cost preview, enterprise billing preview table, billing history/compliance notice, status badges, and disabled action copy.
- Live-sounding billing/usage/invoice wording corrected: plan, subscription, renewal, usage quota, invoice, payment method, provider cost, amount, status, upgrade, and action copy now emphasizes `Billing preview`, `Mock plan packaging`, `Usage preview`, `Invoice preview`, `Upgrade disabled in Alpha`, `No payment method is collected in Alpha`, `No subscription changes are saved in Alpha`, `Requires billing backend`, `Requires payment processor integration`, `Private beta pricing preview`, `Preview-only invoice`, and `Mock usage limit` language.
- Remaining backend/payment/subscription/enforcement items: real billing backend routes, payment processor integration, subscription changes, payment method collection, invoice generation/payment, real billing history, workspace cost allocation, quota enforcement, upgrade workflows, provider cost attribution, audit writes, and policy-backed enforcement remain deferred private-beta/backend work.