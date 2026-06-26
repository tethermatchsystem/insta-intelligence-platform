import {
  accountCommentConfidenceLabels,
  accountCommentFreshnessLabels,
  accountCommentIntentLabels,
  accountCommentSentimentLabels,
  accountComments,
  accountCommentStatusLabels,
  accountCommentUrgencyLabels,
  type AccountComment,
  type AccountCommentIntent,
  type AccountCommentMediaType,
  type AccountCommentPolicyClassification,
  type AccountCommentSentiment,
  type AccountCommentStatus,
  type AccountCommentTone,
  type AccountCommentUrgency,
} from "@/lib/mock-data/account-comments";

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function toneClasses(tone: AccountCommentTone) {
  const tones: Record<AccountCommentTone, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
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

function urgencyClasses(urgency: AccountCommentUrgency) {
  const urgencies: Record<AccountCommentUrgency, string> = {
    low: "bg-slate-100 text-slate-700 ring-slate-200",
    medium: "bg-blue-50 text-blue-700 ring-blue-100",
    high: "bg-amber-50 text-amber-700 ring-amber-100",
    urgent: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return urgencies[urgency];
}

function statusClasses(status: AccountCommentStatus) {
  if (["responded", "resolved"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["new", "triaged"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "queued") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
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

function policyClasses(policy: AccountCommentPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CommentCard({ comment }: { comment: AccountComment }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div className="flex gap-4">
          <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl font-semibold ring-1 ${toneClasses(comment.linkedPostTone)}`}>
            {initials(comment.commenterName)}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-slate-950">{comment.commenterName}</h3>
              <span className="text-sm text-slate-500">{comment.commenterHandle}</span>
            </div>
            <p className="mt-1 text-xs text-slate-400">{comment.commenterPlaceholder} · {formatTimestamp(comment.commentedAt)}</p>
          </div>
        </div>
        <Badge className={statusClasses(comment.status)}>{accountCommentStatusLabels[comment.status]}</Badge>
      </div>

      <p className="mt-4 rounded-3xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">“{comment.commentText}”</p>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className={`rounded-3xl bg-gradient-to-br p-4 ring-1 ${toneClasses(comment.linkedPostTone)}`}>
          <p className="text-[11px] font-semibold uppercase tracking-wide opacity-70">Linked post/media placeholder</p>
          <p className="mt-2 text-sm font-semibold">{comment.linkedPostTitle}</p>
          <div className="mt-3">
            <Badge className={mediaTypeClasses(comment.linkedPostType)}>{formatToken(comment.linkedPostType)}</Badge>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-100 bg-white p-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview recommendation</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{comment.suggestedAction}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={sentimentClasses(comment.sentiment)}>{accountCommentSentimentLabels[comment.sentiment]}</Badge>
        <Badge className={intentClasses(comment.intent)}>{accountCommentIntentLabels[comment.intent]}</Badge>
        <Badge className={urgencyClasses(comment.urgency)}>{accountCommentUrgencyLabels[comment.urgency]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{comment.confidenceScore}% {accountCommentConfidenceLabels[comment.confidence]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{comment.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountCommentFreshnessLabels[comment.freshness]}</Badge>
        <Badge className={policyClasses(comment.policyClassification)}>{formatToken(comment.policyClassification)}</Badge>
      </div>
    </article>
  );
}

export function CommentStream() {
  return (
    <div className="space-y-4">
      {accountComments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </div>
  );
}