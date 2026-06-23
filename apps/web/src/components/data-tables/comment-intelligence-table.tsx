import {
  accountCommentFreshnessLabels,
  accountCommentIntentLabels,
  accountCommentSentimentLabels,
  accountCommentStatusLabels,
  accountCommentTableRows,
  type AccountCommentIntent,
  type AccountCommentMediaType,
  type AccountCommentSentiment,
  type AccountCommentStatus,
} from "@/lib/mock-data/account-comments";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sentimentClasses(sentiment: AccountCommentSentiment) {
  const sentiments: Record<AccountCommentSentiment, string> = {
    positive: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    negative: "bg-rose-50 text-rose-700 ring-rose-100",
    mixed: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return sentiments[sentiment];
}

function intentClasses(intent: AccountCommentIntent) {
  const intents: Record<AccountCommentIntent, string> = {
    question: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    support: "bg-blue-50 text-blue-700 ring-blue-100",
    purchase_intent: "bg-violet-50 text-violet-700 ring-violet-100",
    feedback: "bg-amber-50 text-amber-700 ring-amber-100",
    brand_love: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    moderation: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return intents[intent];
}

function mediaTypeClasses(type: AccountCommentMediaType) {
  const types: Record<AccountCommentMediaType, string> = {
    image: "bg-blue-50 text-blue-700 ring-blue-100",
    reel: "bg-violet-50 text-violet-700 ring-violet-100",
    carousel: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    video: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return types[type];
}

function statusClasses(status: AccountCommentStatus) {
  if (["responded", "resolved"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["new", "triaged"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "queued") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

export function CommentIntelligenceTable() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Enterprise comments table</h2>
        <p className="mt-1 text-sm text-slate-500">Mock comment rows prepared for future official comment ingestion and moderation workflows.</p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1120px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Comment</th>
              <th className="px-4 py-3">Intent</th>
              <th className="px-4 py-3">Sentiment</th>
              <th className="px-4 py-3">Linked post</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountCommentTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="max-w-[360px] px-4 py-4">
                  <p className="font-medium text-slate-950">{row.commenter}</p>
                  <p className="mt-1 text-slate-600">{row.comment}</p>
                </td>
                <td className="px-4 py-4"><Badge className={intentClasses(row.intent)}>{accountCommentIntentLabels[row.intent]}</Badge></td>
                <td className="px-4 py-4"><Badge className={sentimentClasses(row.sentiment)}>{accountCommentSentimentLabels[row.sentiment]}</Badge></td>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <p className="font-medium text-slate-950">{row.linkedPost}</p>
                    <Badge className={mediaTypeClasses(row.linkedPostType)}>{formatToken(row.linkedPostType)}</Badge>
                  </div>
                </td>
                <td className="px-4 py-4 text-slate-600">{accountCommentFreshnessLabels[row.freshness]}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{accountCommentStatusLabels[row.status]}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}