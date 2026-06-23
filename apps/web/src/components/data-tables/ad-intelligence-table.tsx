import {
  accountAdCreativeTypeLabels,
  accountAdFreshnessLabels,
  accountAdPolicyLabels,
  accountAdStatusLabels,
  accountAdTableRows,
  type AccountAdCreativeType,
  type AccountAdPolicyClassification,
  type AccountAdStatus,
} from "@/lib/mock-data/account-ads";

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function creativeTypeClasses(type: AccountAdCreativeType) {
  const types: Record<AccountAdCreativeType, string> = {
    image: "bg-blue-50 text-blue-700 ring-blue-100",
    video: "bg-amber-50 text-amber-700 ring-amber-100",
    carousel: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    reel: "bg-violet-50 text-violet-700 ring-violet-100",
    story: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    collection: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return types[type];
}

function policyClasses(policy: AccountAdPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function statusClasses(status: AccountAdStatus) {
  if (status === "active") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "paused") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "review_flag") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (status === "mock_only") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function AdIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise ads table</h2>
        <p className="mt-1 text-sm text-slate-500">Mock ads and campaigns prepared for official Ad Library, authorized Marketing API, and licensed-provider-safe analysis.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Ad or campaign</th>
              <th className="px-4 py-3">Creative type</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">First seen</th>
              <th className="px-4 py-3">Last seen</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountAdTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.adOrCampaign}</td>
                <td className="px-4 py-4"><Badge className={creativeTypeClasses(row.creativeType)}>{accountAdCreativeTypeLabels[row.creativeType]}</Badge></td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{accountAdStatusLabels[row.status]}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{formatTimestamp(row.firstSeen)}</td>
                <td className="px-4 py-4 text-slate-600">{formatTimestamp(row.lastSeen)}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={policyClasses(row.policy)}>{accountAdPolicyLabels[row.policy]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}