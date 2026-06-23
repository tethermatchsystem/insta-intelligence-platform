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
      description="This surface is blocked until the workspace has owned account access, official API permission, or an approved licensed provider. The placeholder does not expose private Instagram data or automate credentials."
      badges={[
        { label: status, tone: isRestricted ? "danger" : "warning" },
        { label: "Placeholder-only", tone: "neutral" },
        { label: "Provider review required", tone: "info" },
      ]}
      checks={["Requires policy approval before activation", "No scraping, fake login automation, or anti-bot bypass", "No private account access or hidden surveillance"]}
    />
  );
}
