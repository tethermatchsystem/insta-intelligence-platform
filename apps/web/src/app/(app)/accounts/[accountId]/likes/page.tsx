import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const likesPreview: RestrictedIdentityPreviewPageProps = {
  variant: "affinity",
  eyebrow: "Authorized affinity preview · restricted by design",
  title: "Likes affinity signals — authorized-source preview",
  description:
    "Preview-only workspace for future owned-media aggregate engagement signals, content-affinity categories, and interaction-preference planning. This Alpha route is intentionally restricted: arbitrary personal like history, liker identity trails, and private-user tracking are not exposed.",
  classification: "Restricted · Authorized-source-only · Disabled in Alpha",
  policyGate:
    "Like affinity intelligence requires official source connection for owned aggregate metrics, explicit authorization for connected account sources, and licensed provider approval where applicable. Identity-level like history remains restricted, disabled by default, and unavailable in Alpha.",
  metrics: [
    { label: "Identity-level like history", value: "Blocked", note: "No arbitrary personal like trail, liker list, or private-user engagement history is shown or collected.", tone: "rose" },
    { label: "Owned aggregate affinity", value: "Preview only", note: "Static category widgets represent future authorized owned-media aggregate engagement signals.", tone: "blue" },
    { label: "Eligible source path", value: "Authorization required", note: "Future real signals require connected professional account sources and provider approval where applicable.", tone: "amber" },
    { label: "Backend action", value: "None", note: "No jobs, downloads, exports, alerts, reports, database writes, or monitors run from this page.", tone: "slate" },
  ],
  signals: [
    {
      signal: "Arbitrary user like history",
      alphaState: "Restricted and unavailable",
      sourceBoundary: "Not exposed through this Alpha route and not available from normal official API access",
      complianceNote: "No identity-level like monitoring, hidden surveillance, or private-user tracking runs in Alpha.",
    },
    {
      signal: "Owned media aggregate like counts",
      alphaState: "Mock placeholder only",
      sourceBoundary: "Requires official source connection before future authorized owned-media data",
      complianceNote: "No live Instagram data is collected in Alpha; values are static preview language.",
    },
    {
      signal: "Content affinity categories",
      alphaState: "Static category preview",
      sourceBoundary: "Future use must stay aggregate, consented, authorized, and policy-gated",
      complianceNote: "No individual liker identity, personal history, or account-level surveillance is inferred.",
    },
    {
      signal: "Like affinity workflow",
      alphaState: "Disabled in Alpha",
      sourceBoundary: "Requires backend enforcement, policy gate, audit records, provenance, and provider review",
      complianceNote: "No backend action runs from this page.",
    },
    {
      signal: "Exports, reports, alerts, or downloads",
      alphaState: "Not implemented",
      sourceBoundary: "No file generation, object storage, notifications, or report workflow exists for this route",
      complianceNote: "No downloads, alerts, or reports are created in Alpha.",
    },
  ],
  panels: [
    {
      label: "Education and workflow themes",
      value: "Mock 41%",
      detail: "Static affinity category for owned content planning; not derived from individual user like histories.",
    },
    {
      label: "Product launch and studio content",
      value: "Mock 28%",
      detail: "Placeholder category for authorized aggregate engagement discussion and sales preview only.",
    },
    {
      label: "Creator education formats",
      value: "Mock 19%",
      detail: "Modeled content-interest bucket; no live like collection, identity lookup, or private-user tracking runs.",
    },
  ],
  events: [
    {
      label: "Carousel education preference",
      state: "Mock high intent",
      detail: "Static format-affinity placeholder for content strategy discussion, not a live engagement signal.",
    },
    {
      label: "Short-form video preference",
      state: "Mock medium intent",
      detail: "Static interaction preference preview; no Instagram query runs from this page.",
    },
    {
      label: "Resource-saving intent",
      state: "Modeled only",
      detail: "Preview-only engagement-intent category that requires future official-source review.",
    },
    {
      label: "Identity-level like trail",
      state: "Restricted",
      detail: "Arbitrary personal like history remains restricted, unavailable, and disabled in Alpha.",
    },
  ],
  previewPath: [
    "Confirm an official source connection for owned or connected professional account aggregate engagement metrics.",
    "Keep identity-level like history blocked unless a future policy review explicitly authorizes a compliant source path.",
    "Require licensed provider approval where applicable and keep licensed-provider-only behavior disabled until approved.",
    "Add backend enforcement, audit records, provenance metadata, and feature-policy gates in a future private-beta batch.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...likesPreview} />;
}
