import { HashtagIntelligenceTable } from "@/components/data-tables/hashtag-intelligence-table";
import {
  campaignFitOverview,
  gatedHashtagEnrichmentPanel,
  hashtagCards,
  hashtagComplianceNotice,
  hashtagConfidenceLabels,
  hashtagFilters,
  hashtagFreshnessLabels,
  hashtagIntelligenceProfile,
  hashtagKpis,
  hashtagPolicyLabels,
  hashtagRiskLabels,
  hashtagStatusLabels,
  hashtagTopicLabels,
  hashtagTrendMomentum,
  riskBrandSafetySignals,
  topicClusterMix,
  type HashtagCard,
  type HashtagPanelItem,
  type HashtagPolicyClassification,
  type HashtagRisk,
  type HashtagStatus,
  type HashtagTone,
  type HashtagTopic,
} from "@/lib/mock-data/hashtags";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: HashtagTone) {
  const tones: Record<HashtagTone, string> = {
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

function HashtagsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function KpiCard({ label, value, delta, tone, description }: (typeof hashtagKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function HashtagsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{hashtagIntelligenceProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{hashtagIntelligenceProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Fresh {hashtagIntelligenceProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{hashtagIntelligenceProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Topic discovery</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{hashtagIntelligenceProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{hashtagIntelligenceProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only hashtag intelligence view</p>
          <p className="mt-1">
            Premium hashtag discovery for public/professional topic intelligence, connected owned-account summaries, campaign planning, and licensed-provider placeholders only.
          </p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Hashtag filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for category, market/language, source, confidence, and policy-based trend views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {hashtagFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: HashtagPanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center justify-between gap-3">
            <p className="font-medium text-slate-950">{item.title}</p>
            <Badge className={toneClasses(item.tone)}>{item.value}</Badge>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function AnalyticsPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <HashtagsPanel title="Trend momentum placeholder" subtitle="Mock momentum bars for owned wins and public/professional topic clusters.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {hashtagTrendMomentum.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-violet-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </HashtagsPanel>

      <HashtagsPanel title="Topic cluster mix" subtitle="Public/professional topic cluster placeholders for planning.">
        <SignalList items={topicClusterMix} />
      </HashtagsPanel>

      <HashtagsPanel title="Campaign fit overview" subtitle="Connected owned performance and mock campaign-fit summaries.">
        <SignalList items={campaignFitOverview} />
      </HashtagsPanel>

      <HashtagsPanel title="Risk and brand-safety placeholder" subtitle="Review workflow placeholders without surveillance.">
        <SignalList items={riskBrandSafetySignals} />
      </HashtagsPanel>
    </section>
  );
}

function HashtagCardItem({ hashtag }: { hashtag: HashtagCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-950">{hashtag.hashtag}</h3>
          <p className="mt-1 text-sm text-slate-500">{hashtag.categoryDetail}</p>
        </div>
        <Badge className={statusClasses(hashtag.status)}>{hashtagStatusLabels[hashtag.status]}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={topicClasses(hashtag.topic)}>{hashtagTopicLabels[hashtag.topic]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{hashtag.marketLanguage}</Badge>
        <Badge className={riskClasses(hashtag.riskLevel)}>{hashtagRiskLabels[hashtag.riskLevel]}</Badge>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Momentum</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtag.estimatedMomentum}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Fit score</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtag.campaignFitScore > 0 ? `${hashtag.campaignFitScore}%` : "Gated"}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Risk</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtagRiskLabels[hashtag.riskLevel]}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Recommended action</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{hashtag.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{hashtag.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{hashtagFreshnessLabels[hashtag.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {hashtag.confidenceScore > 0 ? `${hashtag.confidenceScore}% ` : ""}{hashtagConfidenceLabels[hashtag.confidence]}
        </Badge>
        <Badge className={policyClasses(hashtag.policyClassification)}>{hashtagPolicyLabels[hashtag.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function HashtagCardsGrid() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {hashtagCards.map((hashtag) => (
        <HashtagCardItem key={hashtag.id} hashtag={hashtag} />
      ))}
    </section>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedHashtagEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedHashtagEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedHashtagEnrichmentPanel.policyClassification)}>{hashtagPolicyLabels[gatedHashtagEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedHashtagEnrichmentPanel.status)}>{hashtagStatusLabels[gatedHashtagEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedHashtagEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{hashtagFreshnessLabels[gatedHashtagEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedHashtagEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedHashtagEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <HashtagsPanel title={hashtagComplianceNotice.title} subtitle="Public/professional hashtag intelligence, owned summaries, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{hashtagComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public/professional hashtag intelligence framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment is licensed-provider-only and unavailable until configured.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {hashtagComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </HashtagsPanel>
  );
}

export function HashtagIntelligencePage() {
  return (
    <div className="space-y-6">
      <HashtagsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {hashtagKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <AnalyticsPanels />
      <HashtagCardsGrid />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <HashtagIntelligenceTable />
    </div>
  );
}