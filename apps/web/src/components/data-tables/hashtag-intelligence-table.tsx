import {
  hashtagPolicyLabels,
  hashtagRiskLabels,
  hashtagStatusLabels,
  hashtagTableRows,
  hashtagTopicLabels,
  type HashtagPolicyClassification,
  type HashtagRisk,
  type HashtagStatus,
  type HashtagTopic,
} from "@/lib/mock-data/hashtags";

function topicClasses(topic: HashtagTopic) {
  const topics: Record<HashtagTopic, string> = {
    beauty: "bg-violet-50 text-violet-700 ring-violet-100",
    fitness: "bg-blue-50 text-blue-700 ring-blue-100",
    commerce: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    travel: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    creator_ops: "bg-amber-50 text-amber-700 ring-amber-100",
    education: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return topics[topic];
}

function riskClasses(risk: HashtagRisk) {
  if (risk === "low") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (risk === "moderate") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (risk === "review") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function policyClasses(policy: HashtagPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: HashtagStatus) {
  if (["opportunity", "campaign_ready", "tracking"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function HashtagIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Enterprise topic planning table</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Static mock hashtag rows for topic cluster review, campaign tag readiness, preview velocity, and compliant enrichment gating. No live query, monitor, refresh, or export runs from this table.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-violet-50 text-violet-700 ring-violet-100">Preview-only hashtag intelligence</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Mock topic signals</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">No backend action</Badge>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Sort disabled in Alpha
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Saved view disabled
        </button>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Public, owned, or approved-source data only</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No hashtag monitoring runs in Alpha</span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1120px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Hashtag</th>
              <th className="px-4 py-3">Topic</th>
              <th className="px-4 py-3">Preview trend</th>
              <th className="px-4 py-3">Preview fit</th>
              <th className="px-4 py-3">Risk</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {hashtagTableRows.map((row) => (
              <tr key={row.id} className="cursor-default bg-white">
                <td className="px-4 py-4 font-medium text-slate-950">{row.hashtag}</td>
                <td className="px-4 py-4">
                  <Badge className={topicClasses(row.topic)}>{hashtagTopicLabels[row.topic]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.momentum}</td>
                <td className="px-4 py-4 text-slate-600">{row.campaignFit}</td>
                <td className="px-4 py-4">
                  <Badge className={riskClasses(row.risk)}>{hashtagRiskLabels[row.risk]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{hashtagPolicyLabels[row.policy]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{hashtagStatusLabels[row.status]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}