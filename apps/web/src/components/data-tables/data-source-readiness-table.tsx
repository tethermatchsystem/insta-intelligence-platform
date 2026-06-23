import {
  dataSourceFreshnessLabels,
  dataSourcePolicyLabels,
  dataSourceStatusLabels,
  dataSourceTableRows,
  dataSourceTypeLabels,
  type DataSourcePolicyClassification,
  type DataSourceStatus,
  type DataSourceType,
} from "@/lib/mock-data/data-sources";

function typeClasses(type: DataSourceType) {
  if (type === "meta_graph_api") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "meta_marketing_api") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "meta_ad_library_api") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "owned_webhook") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "manual_import") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function policyClasses(policy: DataSourcePolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: DataSourceStatus) {
  if (["ready", "configured"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["needs_review", "coverage_gap"].includes(status)) return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function DataSourceReadinessTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise data source table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock provider rows for official APIs, owned webhooks, coverage, freshness, permissions, and compliance status.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1180px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Coverage</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {dataSourceTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.source}</td>
                <td className="px-4 py-4">
                  <Badge className={typeClasses(row.type)}>{dataSourceTypeLabels[row.type]}</Badge>
                </td>
                <td className="max-w-sm px-4 py-4 text-slate-600">{row.coverage}</td>
                <td className="px-4 py-4 text-slate-600">{dataSourceFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{dataSourceStatusLabels[row.status]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{dataSourcePolicyLabels[row.policy]}</Badge>
                </td>
                <td className="max-w-sm px-4 py-4 text-slate-600">{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}