import {
  alertFreshnessLabels,
  alertPolicyLabels,
  alertPriorityLabels,
  alertStatusLabels,
  alertTableRows,
  alertTypeLabels,
  type AlertPolicyClassification,
  type AlertPriority,
  type AlertStatus,
  type AlertType,
} from "@/lib/mock-data/alerts";

function priorityClasses(priority: AlertPriority) {
  if (priority === "critical") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (priority === "high") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (priority === "medium") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (priority === "low") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-violet-50 text-violet-700 ring-violet-100";
}

function typeClasses(type: AlertType) {
  if (type === "risk") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (type === "opportunity") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "anomaly") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "workflow") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "compliance") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-violet-50 text-violet-700 ring-violet-100";
}

function policyClasses(policy: AlertPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: AlertStatus) {
  if (["open", "triaged", "in_progress"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "resolved") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function AlertCenterTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise alerts table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock alert rows for risk monitoring, opportunity notification, workflow triage, and compliant enrichment gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1220px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Alert</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Priority</th>
              <th className="px-4 py-3">Linked signal</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {alertTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.alert}</td>
                <td className="px-4 py-4">
                  <Badge className={typeClasses(row.type)}>{alertTypeLabels[row.type]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={priorityClasses(row.priority)}>{alertPriorityLabels[row.priority]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.linkedSignal}</td>
                <td className="px-4 py-4 text-slate-600">{alertFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{alertPolicyLabels[row.policy]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{alertStatusLabels[row.status]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}