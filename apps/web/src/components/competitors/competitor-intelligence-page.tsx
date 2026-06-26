import { CompetitorIntelligenceTable } from "@/components/data-tables/competitor-intelligence-table";
import {
  adVisibilityLabels,
  competitorCards,
  competitorCategoryLabels,
  competitorComplianceNotice,
  competitorConfidenceLabels,
  competitorFilters,
  competitorFreshnessLabels,
  competitorGrowthBenchmarks,
  competitorIntelligenceProfile,
  competitorKpis,
  competitorPolicyLabels,
  competitorStatusLabels,
  contentCadenceComparison,
  engagementComparisonSignals,
  gatedCompetitorEnrichmentPanel,
  publicAdVisibilitySignals,
  type CompetitorCard,
  type CompetitorCategory,
  type CompetitorPanelItem,
  type CompetitorPolicyClassification,
  type CompetitorStatus,
  type CompetitorTone,
  type PublicAdVisibility,
} from "@/lib/mock-data/competitors";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: CompetitorTone) {
  const tones: Record<CompetitorTone, string> = {
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

function categoryClasses(category: CompetitorCategory) {
  const categories: Record<CompetitorCategory, string> = {
    beauty: "bg-violet-50 text-violet-700 ring-violet-100",
    fitness: "bg-blue-50 text-blue-700 ring-blue-100",
    commerce: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    hospitality: "bg-cyan-50 text-cyan-700 ring-cyan-100",
    creator_tools: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return categories[category];
}

function policyClasses(policy: CompetitorPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: CompetitorStatus) {
  if (["tracking", "benchmarking"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function adVisibilityClasses(visibility: PublicAdVisibility) {
  if (visibility === "active") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (visibility === "watching") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (visibility === "quiet") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CompetitorsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof competitorKpis)[number]) {
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

function CompetitorsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{competitorIntelligenceProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{competitorIntelligenceProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{competitorIntelligenceProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitorIntelligenceProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Competitor preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{competitorIntelligenceProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{competitorIntelligenceProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Alpha demo competitor preview</p>
          <p className="mt-1">
            Mock competitor benchmark previews for public/professional planning, connected owned-account comparison, public ad visibility, and licensed-provider placeholders only. Monitoring is disabled in Alpha.
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
          <p className="text-sm font-semibold text-slate-950">Competitor filters</p>
          <p className="mt-1 text-xs text-slate-500">Static Alpha placeholders for category, market, source, preview benchmark, and policy-based review.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {competitorFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: CompetitorPanelItem[] }) {
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

function BenchmarkPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <CompetitorsPanel title="Competitor benchmark preview" subtitle="Mock growth benchmark bars for owned, peer median, top peer, and new entrant previews.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {competitorGrowthBenchmarks.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-blue-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CompetitorsPanel>

      <CompetitorsPanel title="Engagement preview comparison" subtitle="Owned-vs-peer mock summary estimates with preview benchmark metadata.">
        <SignalList items={engagementComparisonSignals} />
      </CompetitorsPanel>

      <CompetitorsPanel title="Content cadence preview" subtitle="Mock cadence benchmarks for Alpha planning only; no live competitor monitoring is running.">
        <SignalList items={contentCadenceComparison} />
      </CompetitorsPanel>

      <CompetitorsPanel title="Public ad preview placeholder" subtitle="Meta Ad Library style public ad visibility preview only.">
        <SignalList items={publicAdVisibilitySignals} />
      </CompetitorsPanel>
    </section>
  );
}

function CompetitorCardItem({ competitor }: { competitor: CompetitorCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-semibold ring-1 ${toneClasses(competitor.tone)}`}>
            {competitor.logoInitials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{competitor.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{competitor.handle}</p>
          </div>
        </div>
        <Badge className={statusClasses(competitor.status)}>{competitorStatusLabels[competitor.status]}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={categoryClasses(competitor.category)}>{competitorCategoryLabels[competitor.category]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitor.market}</Badge>
        <Badge className={adVisibilityClasses(competitor.adVisibility)}>{adVisibilityLabels[competitor.adVisibility]}</Badge>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Audience preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.audienceSizeEstimate}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Engagement preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.engagementEstimate}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Public ad preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.activePublicAds}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Alpha demo next step</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{competitor.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitor.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{competitorFreshnessLabels[competitor.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {competitor.confidenceScore > 0 ? `${competitor.confidenceScore}% ` : ""}{competitorConfidenceLabels[competitor.confidence]}
        </Badge>
        <Badge className={policyClasses(competitor.policyClassification)}>{competitorPolicyLabels[competitor.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function CompetitorCardsGrid() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {competitorCards.map((competitor) => (
        <CompetitorCardItem key={competitor.id} competitor={competitor} />
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
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedCompetitorEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedCompetitorEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedCompetitorEnrichmentPanel.policyClassification)}>
            {competitorPolicyLabels[gatedCompetitorEnrichmentPanel.policyClassification]}
          </Badge>
          <Badge className={statusClasses(gatedCompetitorEnrichmentPanel.status)}>{competitorStatusLabels[gatedCompetitorEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedCompetitorEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitorFreshnessLabels[gatedCompetitorEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedCompetitorEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedCompetitorEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <CompetitorsPanel title={competitorComplianceNotice.title} subtitle="Mock competitor benchmarks, owned comparison previews, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{competitorComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public/professional competitor benchmark framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment requires private-beta provider service review and remains unavailable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {competitorComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </CompetitorsPanel>
  );
}

export function CompetitorIntelligencePage() {
  return (
    <div className="space-y-6">
      <CompetitorsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {competitorKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <BenchmarkPanels />
      <CompetitorCardsGrid />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <CompetitorIntelligenceTable />
    </div>
  );
}