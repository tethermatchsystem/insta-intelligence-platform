# Alpha V1 Release Candidate Route and Safety Audit

Task: `APP-WEB / DOM-ALPHA-QA / ROUTE-SAFETY-RELEASE-CANDIDATE-AUDIT / ALPHA-3W-LITE`

Scope: lightweight documentation-only release-candidate audit for Alpha V1. This audit used only the approved QA report, navigation config, project rules, and a targeted App Router `page.tsx` inventory. No source files were edited.

## 1. Alpha V1 Route Map Result

**Result: Pass for Alpha V1 route-map completeness.**

The targeted route inventory confirmed the expected public, auth, app, account, operations, billing, and settings route files are present. The demo account URL family is covered by the existing dynamic route folder `apps/web/src/app/(app)/accounts/[accountId]/...`, so `/accounts/demo-account` and its subroutes resolve through the `[accountId]` route segment.

| Expected route or route family | Route file evidence | Result |
| --- | --- | --- |
| `/` | `apps/web/src/app/(marketing)/page.tsx` | Present |
| `/pricing` | `apps/web/src/app/(marketing)/pricing/page.tsx` | Present |
| `/about` | `apps/web/src/app/(marketing)/about/page.tsx` | Present |
| `/contact` | `apps/web/src/app/(marketing)/contact/page.tsx` | Present |
| `/login` | `apps/web/src/app/(auth)/login/page.tsx` | Present |
| `/signup` | `apps/web/src/app/(auth)/signup/page.tsx` | Present |
| `/forgot-password` | `apps/web/src/app/(auth)/forgot-password/page.tsx` | Present |
| `/dashboard` | `apps/web/src/app/(app)/dashboard/page.tsx` | Present |
| `/accounts` | `apps/web/src/app/(app)/accounts/page.tsx` | Present |
| `/accounts/demo-account` | `apps/web/src/app/(app)/accounts/[accountId]/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/overview` | `apps/web/src/app/(app)/accounts/[accountId]/overview/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/timeline` | `apps/web/src/app/(app)/accounts/[accountId]/timeline/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/posts` | `apps/web/src/app/(app)/accounts/[accountId]/posts/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/comments` | `apps/web/src/app/(app)/accounts/[accountId]/comments/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/followers` | `apps/web/src/app/(app)/accounts/[accountId]/followers/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/following` | `apps/web/src/app/(app)/accounts/[accountId]/following/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/likes` | `apps/web/src/app/(app)/accounts/[accountId]/likes/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/recent-follows` | `apps/web/src/app/(app)/accounts/[accountId]/recent-follows/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/recent-unfollows` | `apps/web/src/app/(app)/accounts/[accountId]/recent-unfollows/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/engagement` | `apps/web/src/app/(app)/accounts/[accountId]/engagement/page.tsx` | Present via dynamic account route |
| `/accounts/demo-account/ads` | `apps/web/src/app/(app)/accounts/[accountId]/ads/page.tsx` | Present via dynamic account route |
| `/creators` | `apps/web/src/app/(app)/creators/page.tsx` | Present |
| `/competitors` | `apps/web/src/app/(app)/competitors/page.tsx` | Present |
| `/hashtags` | `apps/web/src/app/(app)/hashtags/page.tsx` | Present |
| `/mentions` | `apps/web/src/app/(app)/mentions/page.tsx` | Present |
| `/alerts` | `apps/web/src/app/(app)/alerts/page.tsx` | Present |
| `/reports` | `apps/web/src/app/(app)/reports/page.tsx` | Present |
| `/exports` | `apps/web/src/app/(app)/exports/page.tsx` | Present |
| `/data-sources` | `apps/web/src/app/(app)/data-sources/page.tsx` | Present |
| `/billing` | `apps/web/src/app/(app)/billing/page.tsx` | Present |
| `/settings` | `apps/web/src/app/(app)/settings/page.tsx` | Present |
| `/settings/workspace` | `apps/web/src/app/(app)/settings/workspace/page.tsx` | Present |
| `/settings/team` | `apps/web/src/app/(app)/settings/team/page.tsx` | Present |
| `/settings/roles` | `apps/web/src/app/(app)/settings/roles/page.tsx` | Present |
| `/settings/audit-logs` | `apps/web/src/app/(app)/settings/audit-logs/page.tsx` | Present |
| `/settings/compliance` | `apps/web/src/app/(app)/settings/compliance/page.tsx` | Present |

Additional tracked page routes also exist outside the expected Alpha V1 route list: `/agencies`, `/compliance`, `/for-creators`, and `/page`. They are not route-map blockers for this audit.

## 2. Navigation Link Safety Result

**Result: Pass for current Alpha V1 navigation link safety.**

The navigation config in `apps/web/src/lib/navigation.ts` links only to route-backed destinations:

- `/dashboard`
- `/accounts`
- `/creators`
- `/competitors`
- `/hashtags`
- `/mentions`
- `/alerts`
- `/reports`
- `/exports`
- `/data-sources`
- `/billing`
- `/settings`
- `/settings/compliance`

No stale `/accounts/demo/...` navigation pattern was found in the reviewed navigation file. The top-level app navigation intentionally stays focused on major product domains; account subroutes, auth routes, marketing routes, and most settings subroutes are valid but not all exposed in the primary sidebar. That is acceptable for Alpha V1 and matches the existing QA report’s deferred-navigation posture.

Low-risk wording note: `Connected-account preview workspace` is acceptable because it includes `preview`, but future copy could use `Account intelligence hub` if the team wants the label to match the role map exactly.

## 3. Compliance / Fake-Live Wording Result

**Result: Pass for Alpha V1 demo safety, with no release-blocking fake-live wording found in the reviewed docs/navigation/route map.**

The QA report and navigation consistently frame the Alpha as mock, static, preview-only, official-source-first, and private-beta/back-end gated. Prohibited capability terms appear as safety disclaimers such as `No scraping`, `No live Instagram data is collected in Alpha`, `No private account access`, `No hidden surveillance`, `No fake login automation`, and `No anti-bot bypass`, not as enabled features.

Risk checks from the lightweight audit:

| Risk area | Audit result |
| --- | --- |
| Live Instagram data collected in Alpha | Not found as an enabled claim; repeatedly denied in QA copy. |
| Scraping / anti-bot bypass | Not found as enabled behavior; appears only as prohibited behavior. |
| Fake login automation / credential automation | Not found as enabled behavior; real auth remains deferred. |
| Private account access / hidden surveillance | Not found as enabled behavior; repeatedly denied. |
| Real OAuth/provider activation | Deferred to private-beta/backend/provider work. |
| Real billing/payment | Framed as preview-only; no payment method collection in Alpha. |
| Real report/export/download generation | Framed as preview-only; real jobs/files/downloads are deferred. |
| Real alert delivery | Framed as preview-only; alert delivery is deferred. |
| Real search/query execution | Framed as preview-only; no live query is running. |
| Real workspace switching/saved settings | Framed as static Alpha workspace/settings preview; persistence is deferred. |
| Real identity-level tracking | Restricted/licensed-provider-only/disabled-in-Alpha posture is documented. |

## 4. Page Role and Duplicate-Functionality Result

**Result: Pass for Alpha V1 page role clarity. No release-blocking duplicate-functionality issue was found.**

The current QA report and route/navigation names support clear page roles:

| Area | Alpha V1 page role |
| --- | --- |
| Dashboard | Workspace overview |
| Accounts | Account intelligence hub |
| Posts | Content/media library |
| Comments | Moderation/sentiment review |
| Followers | Audience composition |
| Following | Relationship map |
| Likes | Affinity preview |
| Recent follows / recent unfollows | Restricted change-log placeholders |
| Engagement | Analytics/trends |
| Ads | Ad/creative intelligence |
| Creators | Creator discovery/shortlist |
| Competitors | Benchmark peer sets |
| Hashtags | Topic/hashtag planning |
| Mentions | Brand-safety triage |
| Alerts | Mock rules/triage |
| Reports | Report library/planning |
| Exports | Export package preview |
| Data Sources | Provider readiness |
| Billing | Subscription/payment placeholder |
| Settings | Governance/admin placeholder |

Some pages share adjacent intelligence language, but their intended jobs are distinct enough for Alpha V1:

- `Hashtags` is topic and campaign planning; `Mentions` is brand-safety triage; `Alerts` is mock rule review.
- `Reports` is stakeholder planning; `Exports` is package/file-format preview.
- `Followers`, `Following`, `Likes`, `Recent follows`, and `Recent unfollows` are now separated into audience composition, relationship map, affinity preview, and restricted identity-change placeholders.
- `Data Sources`, `Settings`, and `Billing` are all governance/operations pages but have separate provider-readiness, administration, and subscription/payment-placeholder roles.

## 5. V1 Readiness Summary

**Recommendation status: Alpha V1 release-candidate ready as a static/mock demo, with build validation passed and targeted diff-check validation showing only the existing line-ending normalization warning.**

Severity summary:

- **Blocker:** None found in this lightweight route/navigation/compliance audit.
- **High:** None found in the reviewed docs, route inventory, or navigation file.
- **Medium:** Real auth, provider connections, billing, reports, exports, alert delivery, saved settings, and backend policy enforcement remain private-beta/backend work. This is acceptable for Alpha V1 because the product is presented as static/mock preview.
- **Low:** Extra public routes such as `/page` and marketing-specific routes exist outside the expected route list. They are not blockers but can be rationalized after V1 if desired.

## 6. Blockers Before Alpha Demo

No release-blocking issues were found in the route map, navigation links, compliance/fake-live wording, or page-role clarity reviewed in this Lite audit.

Suggested non-blocking demo checks:

- Manually click through the expected route list once in the browser.
- Keep demo narration explicit that Alpha has no live provider connection, no real backend writes, no real billing, no real exports/downloads, and no real alerts.
- Avoid presenting restricted identity-level routes as live data collection.

## 7. Should Fix Before Private Beta

- Add route-level smoke tests or Playwright coverage for the expected Alpha route list.
- Implement real auth/session handling only after backend, audit, and role enforcement are ready.
- Gate sensitive features through `packages/policy/src/feature_policy.ts` before any real provider behavior.
- Add official-source connection UX, OAuth/token storage, provider approval workflow, rate-limit handling, provenance, and audit records before enabling real data.
- Implement backend jobs and storage for reports, exports, alerts, billing, source connection state, saved filters, saved settings, and workspace persistence before presenting those as real workflows.

## 8. Design Polish After V1

- Decide whether `/page` should remain as a harmless legacy/preview route or be redirected/removed in a future public marketing cleanup.
- Consider aligning the top-level `Accounts` navigation description exactly with `Account intelligence hub`.
- Consider richer local navigation for account subroutes and settings subroutes after Alpha V1 if manual demo flow needs fewer direct URLs.
- Continue responsive/table/empty-state polish after the V1 route and compliance posture is accepted.

## 9. Backend / Provider Future Work

Future backend/provider batches should remain official-first and policy-gated:

- Meta Graph API / Instagram Graph API adapters for connected professional accounts.
- Meta Marketing API and Meta Ad Library workflows where approved.
- Licensed compliant provider adapters only where policy allows.
- Provider adapter metadata: provider ID, data source type, compliance classification, freshness level, rate-limit strategy, confidence score, provenance metadata, error mapping, and mock/test layer.
- PostgreSQL canonical state, ClickHouse analytics/events, Redis freshness/rate-limit locks, object storage for raw payloads/exports/backfills, and audit/compliance records.
- Policy enforcement through `packages/policy/src/feature_policy.ts` before any sensitive or identity-level workflow is enabled.

## 10. Final Recommendation

Proceed with Alpha V1 as a release-candidate static demo. The expected route map is complete, the reviewed navigation links are route-backed, compliance wording is consistently mock/static/preview-only, page roles are clear enough for the Alpha demo, and no real backend/live/provider/search/filter/export/download/OAuth/database/scraping/private-access/hidden-surveillance/anti-bot behavior was added by this audit.

Validation result: `pnpm --filter web build` passed. Targeted `git diff --check -- docs/qa/ALPHA_1_QA_READINESS_REPORT.md docs/qa/ALPHA_V1_RELEASE_CANDIDATE_AUDIT.md` completed with a line-ending normalization warning for the existing QA report only and no whitespace errors reported.