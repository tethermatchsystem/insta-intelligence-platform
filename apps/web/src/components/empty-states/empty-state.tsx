import { SystemState, type SystemStateBadge } from "@/components/system-states/system-state";

export function EmptyState({
  title = "Source-ready data will appear here after authorization",
  description = "This Alpha placeholder explains where future official-source, owned or connected account, manual import, or approved-provider data may appear after authorized source readiness and policy review.",
  badges,
  nextSteps,
}: {
  title?: string;
  description?: string;
  badges?: SystemStateBadge[];
  nextSteps?: string[];
}) {
  const previewSteps = nextSteps ?? [
    "Connect authorized account later",
    "Review data source readiness",
    "Invite team after approval",
    "Configure policy before activation",
  ];

  return (
    <SystemState
      variant="empty"
      title={title}
      description={description}
      compact
      stateRole="Clean Alpha preview placeholder for source readiness, absent mock rows, or disabled workflows; it avoids dead-end no-data language and explains the safe future path."
      safetyNote="The next-step controls below are disabled guidance only. No connection, invite, policy update, sync, export, ticket, or backend action runs from this state."
      badges={
        badges ?? [
          { label: "Alpha preview", tone: "info" },
          { label: "Source readiness", tone: "success" },
          { label: "Disabled controls", tone: "warning" },
        ]
      }
      checks={["Future rows require authorized official-source, owned, consented, imported, or approved-provider data", "No live query, sync, download, notification, provider activation, invite, or policy write runs", "No scraping, private account access, hidden surveillance, fake login, or anti-bot bypass"]}
    >
      <div className="flex flex-wrap gap-2" role="list" aria-label="Disabled Alpha next-step controls">
        {previewSteps.map((step) => (
          <button
            key={step}
            type="button"
            disabled
            role="listitem"
            className="max-w-full cursor-not-allowed rounded-full border border-white/10 bg-white/10 px-3 py-1 text-left text-xs font-semibold leading-5 text-slate-200 opacity-90 disabled:opacity-90"
            aria-label={`${step} disabled in Alpha preview`}
          >
            {step}
          </button>
        ))}
      </div>
    </SystemState>
  );
}
