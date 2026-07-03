import {
  accountEngagementDirectionLabels,
  accountEngagementFreshnessLabels,
  accountEngagementMetricLabels,
  accountEngagementStatusLabels,
  accountEngagementTableRows,
  type AccountEngagementDirection,
  type AccountEngagementMetric,
  type AccountEngagementStatus,
} from "@/lib/mock-data/account-engagement";

function directionClasses(direction: AccountEngagementDirection) {
  const directions: Record<AccountEngagementDirection, string> = {
    up: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    down: "bg-rose-50 text-rose-700 ring-rose-100",
    stable: "bg-blue-50 text-blue-700 ring-blue-100",
    spike: "bg-green-50 text-green-700 ring-green-100",
    drop: "bg-amber-50 text-amber-700 ring-amber-100",
    watch: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return directions[direction];
}

function metricClasses(metric: AccountEngagementMetric) {
  const metrics: Record<AccountEngagementMetric, string> = {
    engagement_rate: "bg-blue-50 text-blue-700 ring-blue-100",
    interactions: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    comments: "bg-violet-50 text-violet-700 ring-violet-100",
    saves: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    shares: "bg-amber-50 text-amber-700 ring-amber-100",
    anomaly: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return metrics[metric];
}

function statusClasses(status: AccountEngagementStatus) {
  if (status === "healthy") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "monitoring") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "needs_review") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (status === "anomaly") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function EngagementIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Enterprise engagement table</h2>
          <p className="mt-1 text-sm text-slate-500">Mock engagement signals prepared for future official and licensed provider summaries. No live engagement monitoring is running.</p>
        </div>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Static preview rows</Badge>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Signal</th>
              <th className="px-4 py-3">Metric</th>
              <th className="px-4 py-3">Direction</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountEngagementTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.signal}</td>
                <td className="px-4 py-4"><Badge className={metricClasses(row.metric)}>{accountEngagementMetricLabels[row.metric]}</Badge></td>
                <td className="px-4 py-4"><Badge className={directionClasses(row.direction)}>{accountEngagementDirectionLabels[row.direction]}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{row.value}</td>
                <td className="px-4 py-4 text-slate-600">{accountEngagementFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{accountEngagementStatusLabels[row.status]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}