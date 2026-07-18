import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const recentUnfollowsPreview: RestrictedIdentityPreviewPageProps = {
  variant: "churn",
  eyebrow: "Restricted churn review preview",
  title: "Recent unfollows — relationship-loss review preview",
  description:
    "Static Alpha workspace for reviewing how approved relationship-loss intelligence could be framed safely for an account owner. It does not monitor unfollows, identify removed relationships, collect identities, or trigger outreach.",
  classification: "Restricted · Authorized-source-only or licensed-provider-only · Disabled by default",
  policyGate:
    "Identity-level recent-unfollow and relationship-loss intelligence is restricted and disabled in Alpha. A future workflow would require authorized official-source scope or approved licensed-provider access, policy enforcement, provenance, audit records, and explicit approval before any live churn signal is evaluated.",
  metrics: [
    { label: "Unfollow detection", value: "Disabled", note: "No live recent-unfollow detection, relationship-loss monitor, sync job, or identity tracking runs in Alpha.", tone: "rose" },
    { label: "Churn review lens", value: "Mock only", note: "Static churn reasons, relationship risk, and review priority labels are for preview discussion only.", tone: "blue" },
    { label: "Eligible source path", value: "Approval required", note: "Future use requires authorized official-source scope or licensed-provider approval where applicable.", tone: "amber" },
    { label: "Owner actions", value: "Guidance only", note: "No winback automation, alerts, exports, downloads, reports, or backend writes exist from this page.", tone: "slate" },
  ],
  signals: [
    {
      signal: "Identity-level recent unfollows",
      alphaState: "Restricted and unavailable",
      sourceBoundary: "Requires authorized official-source scope or licensed-provider approval where applicable",
      complianceNote: "No unfollow monitoring, hidden surveillance, scraping, or private account access runs in Alpha.",
    },
    {
      signal: "Churn reason labels",
      alphaState: "Static preview only",
      sourceBoundary: "Future real labels must come from approved, authorized, provenance-backed sources",
      complianceNote: "Mock reasons do not infer personal behavior or identify real unfollowers.",
    },
    {
      signal: "Relationship risk review",
      alphaState: "Account-owner guidance only",
      sourceBoundary: "Future risk scoring would require policy approval and transparent source boundaries",
      complianceNote: "Review guidance stays aggregate/source-level and does not activate outreach or surveillance.",
    },
    {
      signal: "Collection, sync, or backfill job",
      alphaState: "Not implemented",
      sourceBoundary: "No backend route, provider adapter, or scheduled job exists",
      complianceNote: "No backend action runs from this page.",
    },
    {
      signal: "Export or alert",
      alphaState: "Disabled preview label only",
      sourceBoundary: "No downloads, notifications, or alert workflows exist",
      complianceNote: "No live Instagram data is collected in Alpha.",
    },
  ],
  panels: [
    {
      label: "Review aggregate account health",
      value: "Safe next step",
      detail: "Use owned, aggregate performance and audience-health indicators first; do not seek identity-level unfollower lists in Alpha.",
    },
    {
      label: "Confirm source eligibility",
      value: "Required before use",
      detail: "Future churn intelligence requires authorized official-source scope or approved licensed-provider access where applicable.",
    },
    {
      label: "Keep actions manual and compliant",
      value: "No automation",
      detail: "Safe next step: document owner-approved retention hypotheses; do not trigger alerts, exports, winback flows, or monitors.",
    },
  ],
  events: [
    {
      label: "Creator relationship-loss candidate",
      state: "Mock churn event",
      detail: "Static example of a review row for account-health discussion; no individual unfollower identity is collected or displayed.",
      reviewPriority: "Priority: policy review first",
      churnReason: "Mock: content cadence mismatch",
      relationshipRisk: "Review owned aggregate engagement trend",
      safeGuidance: "Discuss content themes; do not identify or contact a person.",
    },
    {
      label: "Commerce relationship-loss candidate",
      state: "Static retention placeholder",
      detail: "Preview-only category row for retention planning; it is not live relationship tracking or an identity list.",
      reviewPriority: "Priority: source eligibility",
      churnReason: "Mock: offer relevance unknown",
      relationshipRisk: "Review campaign-level drop-off signals",
      safeGuidance: "Use aggregate campaign learnings only; no automated winback.",
    },
    {
      label: "Publisher relationship-loss candidate",
      state: "Disabled event concept",
      detail: "Demonstrates a future approved/licensed provider review shape while keeping identity-level unfollow detection off.",
      reviewPriority: "Priority: disabled by default",
      churnReason: "Mock: relationship context unavailable",
      relationshipRisk: "Do not score without approved provenance",
      safeGuidance: "Record compliance questions for a future private-beta review.",
    },
  ],
  previewPath: [
    "Safely review aggregate account-health and retention hypotheses first; do not attempt identity-level unfollower lookup in Alpha.",
    "Confirm authorized official-source scope or licensed-provider approval where applicable before any future churn signal is evaluated.",
    "Define provenance, review-priority, confidence, audit, and rate-limit requirements before implementing a backend provider path.",
    "Keep winback automation, alerts, exports, downloads, backfills, and identity-level monitors disabled unless a future compliance review approves them.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...recentUnfollowsPreview} />;
}
