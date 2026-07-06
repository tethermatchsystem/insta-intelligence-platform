import {
  accountFollowerDirectionLabels,
  accountFollowerFreshnessLabels,
  accountFollowerPolicyLabels,
  accountFollowerStatusLabels,
  accountFollowerTableRows,
  type AccountFollowerDirection,
  type AccountFollowerPolicyClassification,
  type AccountFollowerStatus,
} from "@/lib/mock-data/account-followers";

function directionClasses(direction: AccountFollowerDirection) {
  const directions: Record<AccountFollowerDirection, string> = {
    growth: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    decline: "bg-rose-50 text-rose-700 ring-rose-100",
    stable: "bg-blue-50 text-blue-700 ring-blue-100",
    gated: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return directions[direction];
}

function policyClasses(policy: AccountFollowerPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: AccountFollowerStatus) {
  if (status === "available") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["monitoring", "snapshot"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "gated") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function FollowerIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Audience composition preview table</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Static follower quality, geography, creator/business mix, and readiness rows prepared for future official-source audience summaries.
          </p>
        </div>
        <Badge className="bg-amber-50 text-amber-700 ring-amber-100">No live follower tracking</Badge>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Segment or signal</th>
              <th className="px-4 py-3">Direction</th>
              <th className="px-4 py-3">Count</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountFollowerTableRows.map((row) => (
              <tr key={row.id} className="cursor-default">
                <td className="px-4 py-4 font-medium text-slate-950">{row.signal}</td>
                <td className="px-4 py-4"><Badge className={directionClasses(row.direction)}>{accountFollowerDirectionLabels[row.direction]}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{row.count}</td>
                <td className="px-4 py-4 text-slate-600">{accountFollowerFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={policyClasses(row.policy)}>{accountFollowerPolicyLabels[row.policy]}</Badge></td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{accountFollowerStatusLabels[row.status]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600">
        Preview-only audience intelligence: no live Instagram data is collected in Alpha, no backend action runs from this page, and gated identity-level follower signals require official source connection plus provider approval where applicable.
      </p>
    </section>
  );
}