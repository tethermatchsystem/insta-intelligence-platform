import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const recentFollowsPreview: RestrictedIdentityPreviewPageProps = {
  variant: "newRelationships",
  eyebrow: "Restricted preview",
  title: "Recent follows restricted preview",
  description:
    "Preview-only audience intelligence for future approved recent-follow workflows. This route is static mock UI only and does not track, collect, or display individual recent follower identities.",
  classification: "Licensed-provider-only where required · Disabled in Alpha",
  policyGate:
    "Recent follow identity signals are licensed-provider-only where required and require official source connection plus provider approval where applicable. No follower tracking runs in Alpha.",
  metrics: [
    { label: "Recent follow identities", value: "Not shown", note: "No individual identity list is rendered or collected in Alpha.", tone: "rose" },
    { label: "Mock relationship signals", value: "Static", note: "Only placeholder relationship-signal copy is visible for preview.", tone: "blue" },
    { label: "Follower tracking", value: "Disabled", note: "No live follower tracking, monitor, or collection job runs.", tone: "amber" },
    { label: "Backend action", value: "None", note: "No provider activation, download, notification, job, or database write exists.", tone: "slate" },
  ],
  signals: [
    {
      signal: "Individual recent follows",
      alphaState: "Unavailable in Alpha",
      sourceBoundary: "Requires licensed provider review where applicable",
      complianceNote: "No follower tracking runs in Alpha.",
    },
    {
      signal: "Relationship categories",
      alphaState: "Mock relationship signals only",
      sourceBoundary: "Requires official source connection before future approved data",
      complianceNote: "No identity-level monitoring runs in Alpha.",
    },
    {
      signal: "Collection or sync job",
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
      label: "Provider approval",
      value: "Required",
      detail: "Licensed-provider-only where required; no provider activation exists in Alpha.",
    },
    {
      label: "Identity monitoring",
      value: "Disabled",
      detail: "No identity-level monitoring, notifications, jobs, or follower tracking runs in Alpha.",
    },
    {
      label: "Source posture",
      value: "Official-first",
      detail: "Future workflows require official source connection and policy-backed approval.",
    },
  ],
  events: [
    {
      label: "New creator relationship placeholder",
      state: "Mock event only",
      detail: "Static example of a future relationship-change row; no recent follow identity is collected.",
    },
    {
      label: "New brand relationship placeholder",
      state: "Mock event only",
      detail: "Category-level sales/QA preview row that does not represent live Instagram data.",
    },
    {
      label: "New publisher relationship placeholder",
      state: "Mock event only",
      detail: "Disabled-by-default event concept for a future approved/licensed provider flow.",
    },
  ],
  previewPath: [
    "Confirm official source eligibility and connected professional account scope.",
    "Complete provider approval where applicable before any licensed-provider-only recent-follow signal can be evaluated.",
    "Gate the feature through policy enforcement and keep identity-level monitoring disabled by default.",
    "Add backend provenance, rate-limit, audit, and compliance records in a future private-beta batch.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...recentFollowsPreview} />;
}
