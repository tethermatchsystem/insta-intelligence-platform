import {
  RestrictedIdentityPreviewPage,
  type RestrictedIdentityPreviewPageProps,
} from "@/components/audience/restricted-identity-preview-page";

const recentUnfollowsPreview: RestrictedIdentityPreviewPageProps = {
  variant: "churn",
  eyebrow: "Restricted preview",
  title: "Recent unfollows restricted preview",
  description:
    "Preview-only audience intelligence for future approved recent-unfollow workflows. This Alpha route is static mock UI only and does not track, collect, or display individual recent unfollower identities.",
  classification: "Licensed-provider-only where required · Disabled in Alpha",
  policyGate:
    "Recent unfollow identity signals are licensed-provider-only where required and require official source connection plus provider approval where applicable. No follower tracking runs in Alpha.",
  metrics: [
    { label: "Recent unfollow identities", value: "Not shown", note: "No individual identity list is rendered or collected in Alpha.", tone: "rose" },
    { label: "Mock relationship signals", value: "Static", note: "Only placeholder churn and relationship-signal copy is visible for preview.", tone: "blue" },
    { label: "Follower tracking", value: "Disabled", note: "No live unfollow tracking, monitor, or collection job runs.", tone: "amber" },
    { label: "Backend action", value: "None", note: "No provider activation, download, notification, job, or database write exists.", tone: "slate" },
  ],
  signals: [
    {
      signal: "Individual recent unfollows",
      alphaState: "Unavailable in Alpha",
      sourceBoundary: "Requires licensed provider review where applicable",
      complianceNote: "No follower tracking runs in Alpha.",
    },
    {
      signal: "Audience churn categories",
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
      detail: "Churn/lost relationship intelligence remains licensed-provider-only where required.",
    },
    {
      label: "Identity monitoring",
      value: "Disabled",
      detail: "No identity-level unfollow monitoring, alerting, jobs, or follower tracking runs in Alpha.",
    },
    {
      label: "Backend readiness",
      value: "Deferred",
      detail: "Future implementation needs policy enforcement, provenance, audit records, and provider review.",
    },
  ],
  events: [
    {
      label: "Lost creator relationship placeholder",
      state: "Mock churn event",
      detail: "Static example only; no individual unfollower identity is collected or displayed.",
    },
    {
      label: "Lost commerce relationship placeholder",
      state: "Mock churn event",
      detail: "Preview-only category row for retention discussion, not live relationship tracking.",
    },
    {
      label: "Dormant publisher relationship placeholder",
      state: "Mock churn event",
      detail: "Disabled-by-default event concept for a future approved/licensed provider flow.",
    },
  ],
  previewPath: [
    "Confirm official source eligibility and connected professional account scope.",
    "Complete provider approval where applicable before any licensed-provider-only recent-unfollow signal can be evaluated.",
    "Gate the feature through policy enforcement and keep identity-level monitoring disabled by default.",
    "Add backend provenance, rate-limit, audit, and compliance records in a future private-beta batch.",
  ],
};

export default function Page() {
  return <RestrictedIdentityPreviewPage {...recentUnfollowsPreview} />;
}
