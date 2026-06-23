import { SystemState, type SystemStateBadge } from "@/components/system-states/system-state";

export function EmptyState({
  title = "No production data connected",
  description = "Connect an official Meta API, owned/connected account workflow, manual import, or approved provider in a future backend batch.",
  badges,
}: {
  title?: string;
  description?: string;
  badges?: SystemStateBadge[];
}) {
  return (
    <SystemState
      variant="empty"
      title={title}
      description={description}
      compact
      badges={
        badges ?? [
          { label: "Empty result", tone: "neutral" },
          { label: "Mock data only", tone: "info" },
          { label: "No live provider", tone: "warning" },
        ]
      }
      checks={["No scraping or private account access", "No hidden surveillance or anti-bot bypass", "Official-first data sources only"]}
    />
  );
}
