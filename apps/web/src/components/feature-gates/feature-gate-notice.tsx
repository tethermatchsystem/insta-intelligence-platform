import { SystemState } from "@/components/system-states/system-state";

function formatStatus(status: string) {
  return status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function FeatureGateNotice({ status = "licensed_provider_only" }: { status?: string }) {
  const isRestricted = status === "restricted" || status === "disabled_by_default";

  return (
    <SystemState
      variant="restricted"
      title={`Compliance-gated module: ${formatStatus(status)}`}
      description="This preview remains blocked until official-source eligibility, owned or consented account scope, policy review, and provider approval are satisfied where required. No provider activation, OAuth, live sync, download, or backend action is available in Alpha."
      stateRole="Restricted state for provider approval, licensed-provider-only, official-source, or disabled-by-default features; it communicates the boundary without revealing or collecting restricted data."
      safetyNote="No private account access, scraping, hidden surveillance, fake login automation, credential automation, or anti-bot bypass is available."
      badges={[
        { label: status, tone: isRestricted ? "danger" : "warning" },
        { label: "Preview-only state", tone: "neutral" },
        { label: "Provider approval may be required", tone: "info" },
      ]}
      checks={["Official-source connection required before future live use", "Licensed-provider-only where required; private beta activation required", "No backend action, OAuth, provider job, download, export, or database write runs from this state"]}
    />
  );
}
