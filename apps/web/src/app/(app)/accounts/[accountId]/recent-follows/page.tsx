import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const recentFollowsPreview: RestrictedIdentityPreviewPageProps = {
  variant: "newRelationships",
  eyebrow: "Restricted follow-change log preview",
  title: "Recent follows — compliance-gated change-log preview",
  description:
    "Static Alpha workspace for discussing how approved recent-follow change intelligence could be reviewed. It does not detect, collect, track, or display individual recent follow identities, and it cannot monitor private or arbitrary accounts.",
  classification: "Restricted · Authorized-source-only or licensed-provider-only · Disabled by default",
  policyGate:
    "Identity-level recent-follow change intelligence is restricted and disabled in Alpha. A future workflow would require an authorized official source or approved licensed provider path, policy enforcement, provenance, audit records, and explicit approval before any live signal is evaluated.",
  metrics: [
    { label: "Follow-change detection", value: "Disabled", note: "No live recent-follow detection, identity delta, monitor, sync job, or tracking workflow runs in Alpha.", tone: "rose" },
    { label: "Eligible source path", value: "Approval required", note: "Future use would require authorized official-source scope or licensed-provider approval where applicable.", tone: "amber" },
    { label: "Mock change-log rows", value: "Static preview", note: "Rows below show sample source, confidence, and review labels without representing real Instagram data.", tone: "blue" },
    { label: "Actions", value: "Disabled", note: "No exports, alerts, downloads, provider activation, backfills, or database writes exist from this page.", tone: "slate" },
  ],
  signals: [
    {
      signal: "Identity-level recent follows",
      alphaState: "Restricted and unavailable",
      sourceBoundary: "Requires authorized official-source scope or licensed-provider approval where applicable",
      complianceNote: "No arbitrary follow tracking, hidden monitoring, scraping, or private account access runs in Alpha.",
    },
    {
      signal: "Follow-change source eligibility",
      alphaState: "Policy review placeholder",
      sourceBoundary: "Future evaluation must verify connected professional account scope and provider permissions first",
      complianceNote: "Eligibility labels are static copy and do not activate a provider or collect data.",
    },
    {
      signal: "Confidence and provenance labels",
      alphaState: "Mock labels only",
      sourceBoundary: "Future real labels would require provenance metadata, audit records, and confidence scoring",
      complianceNote: "No confidence score is computed from live Instagram or identity-level data in Alpha.",
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
      label: "Authorized source check",
      value: "Required before use",
      detail: "Confirm owned or otherwise authorized professional-account scope before any future recent-follow signal is considered.",
    },
    {
      label: "Licensed provider review",
      value: "Required where applicable",
      detail: "Identity-level follow-change intelligence remains licensed-provider-only where required and disabled until approval.",
    },
    {
      label: "Feature-policy gate",
      value: "Disabled by default",
      detail: "Safe next step: review policy classification and provenance requirements; do not activate monitoring or exports.",
    },
  ],
  events: [
    {
      label: "Creator follow-change candidate",
      state: "Schema example only",
      detail: "Illustrates how a future approved row could explain a new relationship category without exposing or collecting a real identity.",
      source: "Authorized connected account or licensed provider required",
      confidence: "Mock medium · no live calculation",
      reviewStatus: "Policy review needed",
    },
    {
      label: "Brand-adjacent follow-change candidate",
      state: "Static delta placeholder",
      detail: "Shows a source review pattern for sales and QA discussion; this does not represent a live follow event.",
      source: "Licensed-provider-only where required",
      confidence: "Mock low · source not connected",
      reviewStatus: "Provider approval blocked",
    },
    {
      label: "Publisher follow-change candidate",
      state: "Disabled event concept",
      detail: "Demonstrates review labels for a future approved/licensed provider flow while keeping identity-level detection off.",
      source: "Official-source eligibility not confirmed",
      confidence: "Not scored in Alpha",
      reviewStatus: "Disabled by default",
    },
  ],
  previewPath: [
    "Safely review the policy classification first: identity-level recent follows remain restricted and disabled in Alpha.",
    "Confirm authorized official-source eligibility or licensed-provider approval where applicable before any future signal is evaluated.",
    "Define provenance, confidence labels, audit records, and rate-limit rules before implementing a backend provider path.",
    "Keep exports, alerts, backfills, monitors, and identity lookup actions disabled unless a future compliance review explicitly approves them.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...recentFollowsPreview} />;
}
