import {
  mentionFreshnessLabels,
  mentionIntentLabels,
  mentionPolicyLabels,
  mentionSentimentLabels,
  mentionStatusLabels,
  mentionTableRows,
  mentionUrgencyLabels,
  type MentionIntent,
  type MentionPolicyClassification,
  type MentionSentiment,
  type MentionStatus,
  type MentionUrgency,
} from "@/lib/mock-data/mentions";

function sentimentClasses(sentiment: MentionSentiment) {
  if (sentiment === "positive") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (sentiment === "neutral") return "bg-slate-100 text-slate-700 ring-slate-200";
  if (sentiment === "mixed") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (sentiment === "negative") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function intentClasses(intent: MentionIntent) {
  if (["praise", "purchase_intent"].includes(intent)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (intent === "question") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (intent === "support") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (intent === "risk") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function urgencyClasses(urgency: MentionUrgency) {
  if (urgency === "low") return "bg-slate-100 text-slate-700 ring-slate-200";
  if (urgency === "medium") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (urgency === "high") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (urgency === "review") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function policyClasses(policy: MentionPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: MentionStatus) {
  if (["open", "triaged", "response_ready"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function MentionMonitoringTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise mentions table</h2>
        <p className="mt-1 text-sm text-slate-500">
          Mock mention rows for brand listening, response triage, opportunity detection, and compliant enrichment gating.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1220px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Mention</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Sentiment</th>
              <th className="px-4 py-3">Intent</th>
              <th className="px-4 py-3">Urgency</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {mentionTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="max-w-md px-4 py-4 font-medium leading-6 text-slate-950">{row.mention}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4">
                  <Badge className={sentimentClasses(row.sentiment)}>{mentionSentimentLabels[row.sentiment]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={intentClasses(row.intent)}>{mentionIntentLabels[row.intent]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={urgencyClasses(row.urgency)}>{mentionUrgencyLabels[row.urgency]}</Badge>
                </td>
                <td className="px-4 py-4 text-slate-600">{mentionFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4">
                  <Badge className={policyClasses(row.policy)}>{mentionPolicyLabels[row.policy]}</Badge>
                </td>
                <td className="px-4 py-4">
                  <Badge className={statusClasses(row.status)}>{mentionStatusLabels[row.status]}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}