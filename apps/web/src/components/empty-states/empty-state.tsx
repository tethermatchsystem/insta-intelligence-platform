import { SystemState, type SystemStateBadge } from "@/components/system-states/system-state";

export function EmptyState({
  title = "No Alpha preview rows to show yet",
  description = "This placeholder explains where future official-source, owned/connected account, manual import, or approved-provider data may appear after private beta backend work.",
  badges,
  nextSteps,
}: {
  title?: string;
  description?: string;
  badges?: SystemStateBadge[];
  nextSteps?: string[];
}) {
  const previewSteps = nextSteps ?? [
    "Review source readiness later",
    "Confirm official-source eligibility",
    "Keep provider actions disabled in Alpha",
  ];

  return (
    <SystemState
      variant="empty"
      title={title}
      description={description}
      compact
      stateRole="Clean Alpha preview placeholder for absent mock rows or disabled workflows; it does not create tasks, tickets, downloads, or provider actions."
      safetyNote="No backend action runs from this state, and no live Instagram data is collected in Alpha."
      badges={
        badges ?? [
          { label: "Alpha preview", tone: "info" },
          { label: "Preview-only state", tone: "neutral" },
          { label: "No backend action", tone: "warning" },
        ]
      }
      checks={["No live query, sync, download, notification, or provider activation runs", "Official-source connection required for future live data", "No scraping, private account access, hidden surveillance, or anti-bot bypass"]}
    >
      <div className="flex flex-wrap gap-2" role="list" aria-label="Preview-only next-step labels">
        {previewSteps.map((step) => (
          <span key={step} role="listitem" className="max-w-full rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold leading-5 text-slate-200">
            {step}
          </span>
        ))}
      </div>
    </SystemState>
  );
}
