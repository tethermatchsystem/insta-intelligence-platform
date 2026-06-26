import {
  competitorCategoryLabels,
  competitorPolicyLabels,
  competitorStatusLabels,
  competitorTableRows,
  type CompetitorCategory,
  type CompetitorPolicyClassification,
  type CompetitorStatus,
} from "@/lib/mock-data/competitors";

function categoryClasses(category: CompetitorCategory) {
  const categories: Record<CompetitorCategory, string> = {
    beauty: "bg-violet-50 text-violet-700 ring-violet-100",
    fitness: "bg-blue-50 text-blue-700 ring-blue-100",
    commerce: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    hospitality: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    creator_tools: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return categories[category];
}

function policyClasses(policy: CompetitorPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: CompetitorStatus) {
  if (["tracking", "benchmarking"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function CompetitorIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise competitor preview table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock peer-set rows for Alpha preview benchmarks, public ad visibility review, and licensed-provider gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1180px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Competitor</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Audience preview</th>
              <th className="px-4 py-3">Engagement preview</th>
              <th className="px-4 py-3">Public ad preview</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {competitorTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.competitor}</td>
                <td className="px-4 py-4">
                  <Badge className={categoryClasses(row.category)}>{competitorCategoryLabels[row.category]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.audience}</td>
                <td className="px-4 py-4 text-slate-600">{row.engagement}</td>
                <td className="px-4 py-4 text-slate-600">{row.publicAds}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{competitorPolicyLabels[row.policy]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{competitorStatusLabels[row.status]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}