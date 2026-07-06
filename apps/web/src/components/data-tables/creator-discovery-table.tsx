import {
  creatorDiscoveryCategoryLabels,
  creatorDiscoveryPolicyLabels,
  creatorDiscoveryStatusLabels,
  creatorDiscoveryTableRows,
  type CreatorDiscoveryCategory,
  type CreatorDiscoveryPolicyClassification,
  type CreatorDiscoveryStatus,
} from "@/lib/mock-data/creator-discovery";

function categoryClasses(category: CreatorDiscoveryCategory) {
  const categories: Record<CreatorDiscoveryCategory, string> = {
    design: "bg-violet-50 text-violet-700 ring-violet-100",
    creator_ops: "bg-blue-50 text-blue-700 ring-blue-100",
    commerce: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    lifestyle: "bg-amber-50 text-amber-700 ring-amber-100",
    education: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return categories[category];
}

function policyClasses(policy: CreatorDiscoveryPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: CreatorDiscoveryStatus) {
  if (["qualified", "outreach_ready"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "monitoring") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "needs_review") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function CreatorDiscoveryTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-violet-100/70">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Creator shortlist preview table</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">Mock creator candidate rows for fit review, brand safety readiness, audience quality preview, and compliant enrichment gating. Rows are static and not selectable.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-violet-50 text-violet-700 ring-violet-100">Preview-only creator discovery</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">No creator search runs in Alpha</Badge>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1080px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Creator</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Audience preview</th>
              <th className="px-4 py-3">Engagement preview</th>
              <th className="px-4 py-3">Preview score</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {creatorDiscoveryTableRows.map((row) => (
              <tr key={row.id} className="cursor-default bg-white">
                <td className="px-4 py-4 font-medium text-slate-950">{row.creator}</td>
                <td className="px-4 py-4"><Badge className={categoryClasses(row.category)}>{creatorDiscoveryCategoryLabels[row.category]}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{row.audience}</td>
                <td className="px-4 py-4 text-slate-600">{row.engagement}</td>
                <td className="px-4 py-4 text-slate-600">{row.fitScore}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={policyClasses(row.policy)}>{creatorDiscoveryPolicyLabels[row.policy]}</Badge></td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{creatorDiscoveryStatusLabels[row.status]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600">
        Preview-only creator discovery: public or approved-source data only, no live Instagram data is collected in Alpha, no creator search runs in Alpha, and no shortlist, outreach, export, provider, or backend action runs from this page.
      </p>
    </section>
  );
}