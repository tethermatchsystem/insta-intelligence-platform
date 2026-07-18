import { SystemState } from "@/components/system-states/system-state";

function formatStatus(status: string) {
  return status
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function FeatureGateNotice({ status = "licensed_provider_only" }: { status?: string }) {
  const isRestricted = status === "restricted" || status === "disabled_by_default";
  const isLicensedProviderOnly = status === "licensed_provider_only";
  const formattedStatus = formatStatus(status);
  const approvalSummary = isLicensedProviderOnly
    ? "Licensed-provider-only surfaces require approved provider coverage, contract review, and policy activation before future use."
    : isRestricted
      ? "Restricted or disabled-by-default surfaces remain blocked unless policy explicitly approves a compliant future workflow."
      : "This surface requires official-source eligibility, authorized account scope, and policy review before future live use.";

  const disabledActions = ["Request policy review later", "Review provider readiness", "Configure source after approval"];

  return (
    <SystemState
      variant="restricted"
      title={`Alpha compliance gate: ${formattedStatus}`}
      description={`${approvalSummary} No provider activation, OAuth, live sync, download, export, report generation, alerting, billing, or backend action is available in Alpha.`}
      stateRole="Restricted state for official-source, authorized-scope, licensed-provider-only, or disabled-by-default features; it communicates the boundary without revealing, collecting, or inferring restricted data."
      safetyNote="All real actions are disabled. No private account access, scraping, hidden surveillance, fake login automation, credential automation, provider bypass, or anti-bot bypass is available."
      badges={[
        { label: status, tone: isRestricted ? "danger" : "warning" },
        { label: "Alpha boundary", tone: "neutral" },
        { label: isLicensedProviderOnly ? "Licensed provider required" : "Policy approval required", tone: isLicensedProviderOnly ? "purple" : "info" },
      ]}
      checks={["Official-source connection or authorized account scope required before future live use", "Licensed-provider-only where required; private beta activation and policy approval required", "No backend action, OAuth, provider job, download, export, report, alert, billing, or database write runs from this state"]}
    >
      <div className="flex flex-wrap gap-2" role="list" aria-label="Disabled compliance gate actions">
        {disabledActions.map((action) => (
          <button
            key={action}
            type="button"
            disabled
            role="listitem"
            className="max-w-full cursor-not-allowed rounded-full border border-white/10 bg-white/10 px-3 py-1 text-left text-xs font-semibold leading-5 text-slate-200 opacity-90 disabled:opacity-90"
            aria-label={`${action} disabled in Alpha preview`}
          >
            {action}
          </button>
        ))}
      </div>
    </SystemState>
  );
}
