import {
  exportFormatLabels,
  exportPolicyLabels,
  exportStatusLabels,
  exportTableRows,
  exportTypeLabels,
  type ExportFormat,
  type ExportPolicyClassification,
  type ExportStatus,
  type ExportType,
} from "@/lib/mock-data/exports";

function typeClasses(type: ExportType) {
  if (type === "csv_dataset") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "json_package") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "executive_package") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "audit_delivery") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (type === "scheduled_export") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function formatClasses(format: ExportFormat) {
  if (format === "csv") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (format === "json") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (format === "pdf_package") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (format === "xlsx") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (format === "zip_bundle") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function policyClasses(policy: ExportPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: ExportStatus) {
  if (["ready", "scheduled"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "draft") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function ExportCenterTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise export table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock export rows for CSV, JSON, executive packages, audit deliveries, and licensed-provider gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1220px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Export</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Format</th>
              <th className="px-4 py-3">Workspace</th>
              <th className="px-4 py-3">Date range</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Disabled Alpha guidance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {exportTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.exportName}</td>
                <td className="px-4 py-4">
                  <Badge className={typeClasses(row.type)}>{exportTypeLabels[row.type]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={formatClasses(row.format)}>{exportFormatLabels[row.format]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.workspace}</td>
                <td className="px-4 py-4 text-slate-600">{row.dateRange}</td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{exportStatusLabels[row.status]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{exportPolicyLabels[row.policy]}</Badge>
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