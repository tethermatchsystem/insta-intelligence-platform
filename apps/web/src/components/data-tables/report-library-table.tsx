import {
  reportPolicyLabels,
  reportStatusLabels,
  reportTableRows,
  reportTypeLabels,
  type ReportPolicyClassification,
  type ReportStatus,
  type ReportType,
} from "@/lib/mock-data/reports";

function typeClasses(type: ReportType) {
  if (type === "executive_summary") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "client_export") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "campaign_report") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "benchmark_report") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "compliance_review") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function policyClasses(policy: ReportPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: ReportStatus) {
  if (["ready", "scheduled"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "draft") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function ReportLibraryTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise report library</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock report rows for executive summaries, client-ready exports, compliance review, and licensed-provider gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1220px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Report</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Workspace</th>
              <th className="px-4 py-3">Date range</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Preview guidance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {reportTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.report}</td>
                <td className="px-4 py-4">
                  <Badge className={typeClasses(row.type)}>{reportTypeLabels[row.type]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.workspace}</td>
                <td className="px-4 py-4 text-slate-600">{row.dateRange}</td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{reportStatusLabels[row.status]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{reportPolicyLabels[row.policy]}</Badge>
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