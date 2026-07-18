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

function toneAccentClasses(tone: CompetitorTone) {
  const tones: Record<CompetitorTone, string> = {
    blue: "from-blue-500 to-cyan-400",
    green: "from-emerald-500 to-teal-400",
    amber: "from-amber-500 to-orange-400",
    purple: "from-violet-500 to-blue-400",
    slate: "from-slate-500 to-slate-300",
    rose: "from-rose-500 to-pink-400",
    cyan: "from-cyan-500 to-sky-400",
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
  return <span className={`inline-flex h-auto max-w-full items-start justify-start whitespace-normal break-words rounded-full px-3 py-1 text-left text-xs font-semibold leading-4 ring-1 ${className}`}>{children}</span>;
}

function CompetitorsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-blue-100/70">
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
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-blue-100/70">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${toneAccentClasses(tone)}`} />
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
  const safetyBoundaries = [
    "No competitor monitoring runs in Alpha",
    "No live Instagram data is collected in Alpha",
    "Public or approved-source data only",
    "No backend action runs from this page",
  ];

  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 text-white shadow-sm shadow-slate-950/30">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-28 left-1/4 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <div className="relative flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{competitorIntelligenceProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{competitorIntelligenceProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{competitorIntelligenceProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitorIntelligenceProfile.integrationBadge}</Badge>
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">Preview-only competitor benchmarks</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Public benchmark peer-set workspace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Competitor benchmark board preview</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">{competitorIntelligenceProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-2xl shadow-blue-950/20 xl:w-[31rem]">
          <p className="font-semibold text-white">Mock benchmark metrics · Static Alpha preview</p>
          <p className="mt-1 text-slate-300">
            Mock competitor benchmark previews for public/professional planning, connected owned-account comparison, public ad visibility, and licensed-provider placeholders only. Monitoring is disabled in Alpha.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {safetyBoundaries.map((boundary) => (
              <span key={boundary} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-100">
                {boundary}
              </span>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  const disabledControls = ["Peer-set edit disabled", "Monitor disabled", "Refresh disabled", "Export disabled", "Provider action disabled"];

  return (
    <section className="rounded-3xl border border-blue-200 bg-white p-4 shadow-sm shadow-blue-100/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Competitor filters</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Static Alpha filter preview for peer set, category, market, source, preview benchmark, and policy-based review. No live query is running.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {competitorFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4" aria-label="Disabled competitor benchmark controls">
        {disabledControls.map((control) => (
          <span key={control} aria-disabled="true" className="cursor-not-allowed rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 opacity-80">
            {control}
          </span>
        ))}
      </div>
      <p className="mt-3 rounded-2xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs leading-5 text-blue-900">
        Preview filters only: no competitor monitoring runs in Alpha, no provider request is sent, and no backend action runs from this page.
      </p>
    </section>
  );
}

function CompetitorBenchmarkCommandBoard() {
  const benchmarkLanes = [
    {
      lane: "Positioning gap",
      metric: "Owned vs peer narrative",
      detail: "Compare category positioning, value props, and public profile posture with mock/public/approved-source context only.",
      tone: "blue" as CompetitorTone,
    },
    {
      lane: "Content cadence",
      metric: "+4.2 posts/week",
      detail: "Static cadence comparison for planning; no live competitor refresh, scraping, or background monitor is running.",
      tone: "cyan" as CompetitorTone,
    },
    {
      lane: "Public ads signal",
      metric: "Meta Ad Library style",
      detail: "Public ad visibility preview is framed for allowed-source review and does not collect hidden campaign data.",
      tone: "green" as CompetitorTone,
    },
    {
      lane: "Enrichment gate",
      metric: "Licensed-provider only",
      detail: "Deeper competitor enrichment remains unavailable until legal, provenance, rate-limit, and provider approval checks are complete.",
      tone: "amber" as CompetitorTone,
    },
  ];

  const positioningRows = [
    { axis: "Message territory", owned: "Performance-led intelligence", peer: "Creator commerce storytelling", action: "Review category narrative gaps before campaign planning." },
    { axis: "Content proof", owned: "Connected account reporting", peer: "Public case-study posts", action: "Compare public/allowed content themes only." },
    { axis: "Ad visibility", owned: "Owned campaign preview", peer: "Public Ad Library placeholder", action: "Use official public ad archive paths where available." },
  ];

  const disabledActions = ["Start competitor tracking", "Add hidden monitor", "Refresh competitor data", "Export benchmark", "Activate provider", "Save peer-set changes"];

  return (
    <section className="space-y-4">
      <section className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <article className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-5 shadow-sm shadow-blue-100/70">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Competitor benchmark command board</p>
              <h2 className="mt-2 text-xl font-semibold text-slate-950">Benchmark lanes for positioning, cadence, and public ads signals</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
                This board separates competitor intelligence from creator discovery: it compares peer positioning, public/allowed content cadence, and Meta Ad Library-style visibility without private tracking, hidden surveillance, scraping, or live provider collection.
              </p>
            </div>
            <Badge className="bg-white text-blue-700 ring-blue-200">Benchmark review only</Badge>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 2xl:grid-cols-4">
            {benchmarkLanes.map((lane) => (
              <article key={lane.lane} className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-sm shadow-blue-100/70">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-950">{lane.lane}</p>
                  <Badge className={toneClasses(lane.tone)}>{lane.metric}</Badge>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-600">{lane.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-blue-50 p-5 shadow-sm shadow-amber-100/70">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">What can the user safely review next?</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Review peer assumptions, do not track competitors</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Safely review benchmark lanes, public/allowed-source notes, positioning gaps, content cadence, and public ads signal previews. Real tracking, hidden monitoring, scraping, refresh jobs, exports, downloads, provider activation, and peer-set writes remain disabled.
          </p>
          <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled competitor benchmark actions">
            {disabledActions.map((action) => (
              <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                {action}: disabled
              </span>
            ))}
          </div>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-blue-100/70">
        <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Positioning comparison</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Owned brand vs public peer narrative</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">Static comparison rows support benchmark decisions only. They do not imply competitor scraping, credential access, hidden surveillance, or private account access.</p>
          </div>
          <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Public/allowed-source framing</Badge>
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {positioningRows.map((row) => (
            <article key={row.axis} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{row.axis}</p>
              <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-600">
                <p><span className="font-semibold text-slate-950">Owned:</span> {row.owned}</p>
                <p><span className="font-semibold text-slate-950">Peer:</span> {row.peer}</p>
                <p className="rounded-xl border border-blue-100 bg-blue-50 p-2 text-blue-900">{row.action}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function SignalList({ items }: { items: CompetitorPanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-3">
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
      <CompetitorsPanel title="Peer-set benchmark preview" subtitle="Mock growth benchmark bars for owned, peer median, top peer, and new entrant previews.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Benchmark gap board</p>
            <Badge className="bg-white/90 text-blue-700 ring-white/50">Mock benchmark metrics</Badge>
          </div>
          <div className="flex h-56 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {competitorGrowthBenchmarks.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-gradient-to-t from-cyan-300 to-white shadow-lg shadow-blue-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs leading-5 text-slate-200">
            Preview-only competitor benchmarks based on mock/public/approved-source framing. No competitor monitoring runs in Alpha.
          </p>
        </div>
      </CompetitorsPanel>

      <CompetitorsPanel title="Engagement benchmark gap" subtitle="Owned-vs-peer mock summary estimates with preview benchmark metadata.">
        <SignalList items={engagementComparisonSignals} />
      </CompetitorsPanel>

      <CompetitorsPanel title="Content cadence comparison" subtitle="Mock cadence benchmarks for Alpha planning only; no live competitor monitoring is running.">
        <SignalList items={contentCadenceComparison} />
      </CompetitorsPanel>

      <CompetitorsPanel title="Public ad preview placeholder" subtitle="Meta Ad Library style public ad visibility preview only.">
        <SignalList items={publicAdVisibilitySignals} />
      </CompetitorsPanel>
    </section>
  );
}

function PeerSetWorkspace() {
  const peerSets = [
    { label: "Core category peers", value: "12 brands", detail: "Mock public benchmark group for category comparison.", readiness: 82 },
    { label: "Market expansion peers", value: "7 markets", detail: "Static regional peer set for sales/QA preview.", readiness: 68 },
    { label: "Ad visibility peers", value: "146 ads", detail: "Meta Ad Library style public visibility placeholders only.", readiness: 74 },
  ];

  const benchmarkGaps = [
    { label: "Share-of-voice style preview", value: "Modeled", detail: "Mock category visibility comparison, not identity-level surveillance." },
    { label: "Cadence gap", value: "+4.2x/week", detail: "Static publishing cadence comparison for planning review." },
    { label: "Peer set health", value: "Review ready", detail: "Manual analyst review posture before private-beta activation." },
  ];

  return (
    <section className="grid gap-4 xl:grid-cols-[1fr_1fr]">
      <article className="rounded-[2rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-5 shadow-sm shadow-blue-100/70">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Peer-set workspace</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">Grouped benchmark board</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">Competitor grouping, market/category comparison, content cadence, and public performance benchmark planning. No live competitor monitoring runs in Alpha.</p>
          </div>
          <Badge className="bg-white text-blue-700 ring-blue-200">Preview-only competitor benchmarks</Badge>
        </div>

        <div className="mt-5 grid gap-3">
          {peerSets.map((peerSet) => (
            <div key={peerSet.label} className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-sm shadow-blue-100/80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-950">{peerSet.label}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{peerSet.detail}</p>
                </div>
                <span className="text-lg font-semibold text-blue-950">{peerSet.value}</span>
              </div>
              <div className="mt-3 rounded-full bg-blue-100 p-1" aria-label={`${peerSet.label} benchmark readiness`}>
                <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${peerSet.readiness}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm shadow-slate-950/20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Benchmark gap review</p>
            <h2 className="mt-2 text-lg font-semibold">Mock market/category gaps</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Static public/approved-source benchmark framing for category strategy. It is not private competitor tracking or arbitrary personal surveillance.</p>
          </div>
          <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Public or approved-source data only</Badge>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
          {benchmarkGaps.map((gap) => (
            <div key={gap.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <p className="text-sm font-semibold text-white">{gap.label}</p>
              <p className="mt-2 text-xl font-semibold text-cyan-100">{gap.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{gap.detail}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function CompetitorCardItem({ competitor }: { competitor: CompetitorCard }) {
  return (
    <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-blue-100/70">
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400" />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-semibold ring-1 ${toneClasses(competitor.tone)}`}>
            {competitor.logoInitials}
          </div>
          <div className="min-w-0">
            <h3 className="break-words text-lg font-semibold text-slate-950">{competitor.name}</h3>
            <p className="mt-1 break-words text-sm text-slate-500">{competitor.handle}</p>
          </div>
        </div>
        <Badge className={statusClasses(competitor.status)}>{competitorStatusLabels[competitor.status]}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={categoryClasses(competitor.category)}>{competitorCategoryLabels[competitor.category]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{competitor.market}</Badge>
        <Badge className={adVisibilityClasses(competitor.adVisibility)}>{adVisibilityLabels[competitor.adVisibility]}</Badge>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3 2xl:grid-cols-1">
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Audience preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.audienceSizeEstimate}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Engagement preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.engagementEstimate}</p>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Public ad preview</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{competitor.activePublicAds}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Alpha demo next step</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{competitor.recommendedAction}</p>
      </div>

      <p className="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-xs leading-5 text-blue-900">
        Static peer card: no competitor monitor, refresh, export, provider action, or backend action runs in Alpha.
      </p>

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
    <div className="space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">Peer-set cards</p>
          <h2 className="mt-1 text-lg font-semibold text-slate-950">Mock competitor benchmark set</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">Preview-only peer rows for category, market, cadence, public ad visibility, and source/provenance review.</p>
        </div>
        <Badge className="bg-blue-50 text-blue-700 ring-blue-100">No competitor monitoring runs in Alpha</Badge>
      </div>
      <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
        {competitorCards.map((competitor) => (
          <CompetitorCardItem key={competitor.id} competitor={competitor} />
        ))}
      </section>
    </div>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-5 shadow-sm shadow-amber-100/70">
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
      <p className="mt-4 rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">
        Requires provider approval where applicable. No competitor monitoring, refresh, export, provider activation, or backend action runs from this page.
      </p>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <CompetitorsPanel title={competitorComplianceNotice.title} subtitle="Mock competitor benchmarks, owned comparison previews, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{competitorComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Preview-only competitor benchmarks with mock benchmark metrics.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment requires provider approval where applicable and remains unavailable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No competitor monitoring runs in Alpha. No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
      <CompetitorBenchmarkCommandBoard />
      <PeerSetWorkspace />
      <BenchmarkPanels />
      <CompetitorCardsGrid />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <CompetitorIntelligenceTable />
    </div>
  );
}