import {
  creatorDiscoveryCards,
  creatorDiscoveryCategoryLabels,
  creatorDiscoveryConfidenceLabels,
  creatorDiscoveryFreshnessLabels,
  creatorDiscoveryPolicyLabels,
  creatorDiscoveryStatusLabels,
  gatedCreatorEnrichmentPanel,
  type CreatorDiscoveryCard,
  type CreatorDiscoveryCategory,
  type CreatorDiscoveryPolicyClassification,
  type CreatorDiscoveryStatus,
  type CreatorDiscoveryTone,
} from "@/lib/mock-data/creator-discovery";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: CreatorDiscoveryTone) {
  const tones: Record<CreatorDiscoveryTone, string> = {
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

function CreatorCard({ creator }: { creator: CreatorDiscoveryCard }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-violet-100/70">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-semibold ring-1 ${toneClasses(creator.tone)}`}>
            {creator.avatarInitials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{creator.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{creator.handle}</p>
          </div>
        </div>
        <Badge className={statusClasses(creator.status)}>{creatorDiscoveryStatusLabels[creator.status]}</Badge>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{creator.niche}</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Audience preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{creator.audienceSize}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Engagement preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{creator.engagementEstimate}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview score</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{creator.fitScore}%</p>
        </div>
      </div>

      <div className="mt-4 rounded-full bg-violet-100 p-1" aria-label={`${creator.name} mock fit score`}>
        <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" style={{ width: `${creator.fitScore}%` }} />
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview partnership planning note</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{creator.recommendedAction}</p>
      </div>

      <p className="mt-4 rounded-2xl border border-violet-100 bg-violet-50 p-3 text-xs leading-5 text-violet-900">
        Static candidate card: no shortlist save, no outreach, no provider action, and no backend action runs in Alpha.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={categoryClasses(creator.category)}>{creatorDiscoveryCategoryLabels[creator.category]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{creator.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{creatorDiscoveryFreshnessLabels[creator.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{creator.confidenceScore}% {creatorDiscoveryConfidenceLabels[creator.confidence]}</Badge>
        <Badge className={policyClasses(creator.policyClassification)}>{creatorDiscoveryPolicyLabels[creator.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function GatedEnrichmentPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 shadow-sm shadow-amber-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedCreatorEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-amber-900">{gatedCreatorEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedCreatorEnrichmentPanel.policyClassification)}>{creatorDiscoveryPolicyLabels[gatedCreatorEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedCreatorEnrichmentPanel.status)}>{creatorDiscoveryStatusLabels[gatedCreatorEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedCreatorEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{creatorDiscoveryFreshnessLabels[gatedCreatorEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedCreatorEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedCreatorEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
      <p className="mt-4 rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">
        Requires provider approval where applicable. No creator search, shortlist save, outreach, export, provider activation, or backend action runs from this page.
      </p>
    </section>
  );
}

export function CreatorCards() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Candidate review cards</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-950">Mock creator candidate shortlist</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">Preview-only creator profiles for fit review, source/provenance labeling, and partnership planning posture.</p>
        </div>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">No creator search runs in Alpha</Badge>
      </div>
      <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
        {creatorDiscoveryCards.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </section>

      <GatedEnrichmentPanel />
    </div>
  );
}