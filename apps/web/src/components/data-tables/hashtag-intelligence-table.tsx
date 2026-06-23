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
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise hashtags table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock hashtag rows for campaign planning, public/professional topic intelligence, and compliant enrichment gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1120px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Hashtag</th>
              <th className="px-4 py-3">Topic</th>
              <th className="px-4 py-3">Momentum</th>
              <th className="px-4 py-3">Campaign fit</th>
              <th className="px-4 py-3">Risk</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {hashtagTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
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