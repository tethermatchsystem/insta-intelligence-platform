import {
  accountAdConfidenceLabels,
  accountAdCreatives,
  accountAdCreativeTypeLabels,
  accountAdFreshnessLabels,
  accountAdPolicyLabels,
  accountAdStatusLabels,
  competitiveAdSignals,
  type AccountAdCreative,
  type AccountAdCreativeType,
  type AccountAdPolicyClassification,
  type AccountAdStatus,
  type AccountAdTone,
} from "@/lib/mock-data/account-ads";

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toneClasses(tone: AccountAdTone) {
  const tones: Record<AccountAdTone, string> = {
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

function AdCreativeCard({ ad }: { ad: AccountAdCreative }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className={`flex h-48 items-end justify-between bg-gradient-to-br p-4 ${toneClasses(ad.previewTone)}`}>
        <div className="rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm">Mock ad preview</div>
        <Badge className={creativeTypeClasses(ad.creativeType)}>{accountAdCreativeTypeLabels[ad.creativeType]}</Badge>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-semibold text-slate-950">{ad.title}</h3>
            <Badge className={statusClasses(ad.status)}>{accountAdStatusLabels[ad.status]}</Badge>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{ad.campaign}</p>
          <p className="mt-3 text-sm font-semibold text-slate-950">{ad.headline}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{ad.copyPreview}</p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview CTA</p>
            <p className="mt-1 text-sm font-semibold text-slate-950">{ad.cta}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview first seen</p>
            <p className="mt-1 text-sm font-semibold text-slate-950">{formatTimestamp(ad.firstSeen)}</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview last seen</p>
            <p className="mt-1 text-sm font-semibold text-slate-950">{formatTimestamp(ad.lastSeen)}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{ad.sourceProvider}</Badge>
          <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountAdFreshnessLabels[ad.freshness]}</Badge>
          <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{ad.confidenceScore}% {accountAdConfidenceLabels[ad.confidence]}</Badge>
          <Badge className={policyClasses(ad.policyClassification)}>{accountAdPolicyLabels[ad.policyClassification]}</Badge>
        </div>
      </div>
    </article>
  );
}

function CompetitiveAdSignalsPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Competitive ads preview signals</h2>
        <p className="mt-1 text-sm text-slate-500">Mock-only public ad library style signals; no live Ad Library ingestion, scraping, or private tracking.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {competitiveAdSignals.map((signal) => (
          <div key={signal.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Preview ad signal</p>
                <h3 className="mt-2 font-semibold text-slate-950">{signal.title}</h3>
              </div>
              <Badge className={toneClasses(signal.tone)}>{signal.value}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{signal.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{signal.sourceProvider}</Badge>
              <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountAdFreshnessLabels[signal.freshness]}</Badge>
              <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{signal.confidenceScore ? `${signal.confidenceScore}%` : "Not scored"} {accountAdConfidenceLabels[signal.confidence]}</Badge>
              <Badge className={policyClasses(signal.policyClassification)}>{accountAdPolicyLabels[signal.policyClassification]}</Badge>
              <Badge className={statusClasses(signal.status)}>{accountAdStatusLabels[signal.status]}</Badge>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Competitive ad signals are mock-only and limited to preview public Ad Library style summaries or private-beta ads service placeholders. No live ad monitoring, Ad Library ingestion, scraping, private account access, hidden surveillance, or anti-bot bypass is implemented.
      </p>
    </section>
  );
}

export function AdCreativeCards() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-3">
        {accountAdCreatives.map((ad) => (
          <AdCreativeCard key={ad.id} ad={ad} />
        ))}
      </section>

      <CompetitiveAdSignalsPanel />
    </div>
  );
}