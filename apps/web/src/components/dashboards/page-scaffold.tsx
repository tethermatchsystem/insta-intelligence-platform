import { ChartCard } from "@/components/charts/chart-card";
import { EnterpriseDataTable } from "@/components/data-tables/enterprise-data-table";
import { EmptyState } from "@/components/empty-states/empty-state";
import { FeatureGateNotice } from "@/components/feature-gates/feature-gate-notice";
import { KpiCard } from "@/components/kpi-cards/kpi-card";
import { SystemState, SystemStateBadge } from "@/components/system-states/system-state";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function DashboardPageScaffold({ title, description, gated = false, gateStatus = "licensed_provider_only" }: { title: string; description: string; gated?: boolean; gateStatus?: string }) {
  return (
    <div className="space-y-6">
      <Card className="rounded-[2rem] border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="flex flex-col gap-5 p-5 sm:p-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <SystemStateBadge badge={{ label: "Source: mock snapshot", tone: "info" }} />
              <SystemStateBadge badge={{ label: "Confidence: demo-grade", tone: "success" }} />
              <SystemStateBadge badge={{ label: "Static freshness", tone: "neutral" }} />
              <SystemStateBadge badge={{ label: "No live integrations", tone: "warning" }} />
            </div>
            <CardTitle className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</CardTitle>
            <CardDescription className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{description}</CardDescription>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[28rem]">
            <p className="font-semibold text-slate-900">Placeholder-only enterprise state</p>
            <p className="mt-1">This route keeps premium empty, loading, restricted, and unavailable-state copy visible while live providers and backend writes remain disabled.</p>
          </div>
        </CardHeader>
      </Card>

      <Card className="rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="p-4 pb-3">
          <CardTitle className="text-sm font-semibold text-slate-950">Preview filters</CardTitle>
          <CardDescription>Static filter controls for source, provider, confidence, date range, and workspace context.</CardDescription>
        </CardHeader>
        <Separator />
        <CardContent className="p-4">
          <div className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {["Account", "Source", "Provider", "Confidence", "Date range", "Workspace"].map((filter) => (
              <div key={filter} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm text-slate-600 transition hover:bg-slate-100/80">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{filter}</p>
                <p className="mt-2 font-medium text-slate-700">Placeholder filter</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {gated ? <FeatureGateNotice status={gateStatus} /> : null}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Followers" value="1.2M" delta="+4.2%" />
        <KpiCard label="Engagement rate" value="5.8%" delta="+0.7%" />
        <KpiCard label="Mentions" value="842" delta="+12%" />
        <KpiCard label="Mock provider confidence" value="98%" />
      </div>

      <ChartCard title={`${title} trend`} />
      <EnterpriseDataTable title={`${title} events`} />
      <SystemState
        variant={gated ? "restricted" : "placeholder"}
        title={gated ? "Restricted data remains unavailable" : "Future provider data is unavailable in this mock view"}
        description="This state is intentionally static. Future backend batches may enable official-source workflows, owned-account webhooks, manual imports, or approved licensed-provider adapters after policy review."
        badges={[
          { label: gated ? gateStatus : "placeholder-only", tone: gated ? "warning" : "neutral" },
          { label: "No live backend", tone: "warning" },
          { label: "Official-first", tone: "success" },
        ]}
        checks={["No scraping or fake login automation", "No private account access or hidden surveillance", "No anti-bot bypass or live provider activation"]}
      />
      <EmptyState title="No live integration data available in Alpha" />
    </div>
  );
}
