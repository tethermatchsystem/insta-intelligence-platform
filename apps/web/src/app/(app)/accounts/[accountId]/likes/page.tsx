import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const likesPreview: RestrictedIdentityPreviewPageProps = {
  variant: "affinity",
  eyebrow: "Restricted preview",
  title: "Likes content affinity preview",
  description:
    "Preview-only audience intelligence for future approved content-affinity and interaction-preference analysis. This Alpha route contains static mock placeholders only; arbitrary personal like history is restricted and not exposed.",
  classification: "Restricted · Disabled in Alpha",
  policyGate:
    "Like intelligence requires official source connection for owned aggregate metrics and provider approval where applicable. Identity-level like history remains restricted, disabled by default, and unavailable in Alpha.",
  metrics: [
    { label: "Identity-level likes", value: "Not exposed", note: "No arbitrary user like history is shown or collected.", tone: "rose" },
    { label: "Mock audience metrics", value: "Static", note: "Only placeholder KPI language is rendered for QA and sales preview.", tone: "blue" },
    { label: "Backend action", value: "None", note: "No jobs, downloads, exports, notifications, or database writes run from this page.", tone: "slate" },
    { label: "Provider gate", value: "Required", note: "Requires official source connection and provider approval where applicable.", tone: "amber" },
  ],
  signals: [
    {
      signal: "Arbitrary user like history",
      alphaState: "Restricted and unavailable",
      sourceBoundary: "Not available from normal official API access",
      complianceNote: "No identity-level monitoring runs in Alpha.",
    },
    {
      signal: "Owned media aggregate like counts",
      alphaState: "Mock placeholder only",
      sourceBoundary: "Requires official source connection before future approved data",
      complianceNote: "No live Instagram data is collected in Alpha.",
    },
    {
      signal: "Like intelligence workflow",
      alphaState: "Disabled in Alpha",
      sourceBoundary: "Requires backend, policy gate, and provider review",
      complianceNote: "No backend action runs from this page.",
    },
    {
      signal: "Export or download",
      alphaState: "Not implemented",
      sourceBoundary: "No file generation or object storage exists for this route",
      complianceNote: "No downloads are created in Alpha.",
    },
  ],
  panels: [
    {
      label: "Tutorial and workflow themes",
      value: "Mock 41%",
      detail: "Static theme cluster for liked-content categories; not derived from individual user histories.",
    },
    {
      label: "Product launch and studio content",
      value: "Mock 28%",
      detail: "Placeholder topic affinity for owned content planning and sales preview only.",
    },
    {
      label: "Creator education formats",
      value: "Mock 19%",
      detail: "Modeled content-interest bucket; no live like collection or identity lookup runs.",
    },
  ],
  events: [
    {
      label: "Carousel preference",
      state: "High intent",
      detail: "Mock format-affinity placeholder for content strategy discussion, not a live signal.",
    },
    {
      label: "Short-form video preference",
      state: "Medium intent",
      detail: "Static interaction preference preview; no Instagram query runs from this page.",
    },
    {
      label: "Saved-resource behavior",
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
    "Confirm an official source connection for owned or connected professional account metrics.",
    "Run policy review for restricted identity-level like features before any provider adapter is considered.",
    "Require provider approval where applicable and keep licensed-provider-only behavior disabled until approved.",
    "Add backend enforcement, audit records, and provenance metadata in a future private-beta batch.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...likesPreview} />;
}
