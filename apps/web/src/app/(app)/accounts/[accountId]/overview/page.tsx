import { DashboardPageScaffold } from "@/components/dashboards/page-scaffold";

export default function Page() {
  return (
    <DashboardPageScaffold
      title="Account overview preview"
      description="Alpha demo only: mock intelligence for profile metadata, media summary, and official-source metric placeholders. No live collection is running."
      gated={false}
      gateStatus="official_safe"
    />
  );
}
