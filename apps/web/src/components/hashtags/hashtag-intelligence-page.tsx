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

const alphaHashtagSafetyBadges = [
  "Preview-only hashtag intelligence",
  "Mock topic signals",
  "No live Instagram data is collected in Alpha",
  "No hashtag monitoring runs in Alpha",
  "No backend action runs from this page",
  "Public, owned, or approved-source data only",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const hashtagPlanningLanes: Array<{ title: string; value: string; detail: string; tone: HashtagTone }> = [
  {
    title: "Topic cluster review",
    value: "5 clusters",
    detail: "Mock public topic groupings help analysts compare launch, commerce, tutorial, travel, and creator-ops themes before campaign use.",
    tone: "purple",
  },
  {
    title: "Velocity and volume preview",
    value: "Static bars",
    detail: "Trend movement is modeled for planning only. No live hashtag monitoring, scraping, refresh, or background job is running in Alpha.",
    tone: "cyan",
  },
  {
    title: "Campaign tag readiness",
    value: "128 candidates",
    detail: "Candidate hashtags are organized by fit, review posture, source readiness, and policy classification for future official-source workflows.",
    tone: "green",
  },
  {
    title: "Approved-source placeholder",
    value: "Gated",
    detail: "Future monitoring requires official source connection and provider approval where applicable; no provider action runs from this page.",
    tone: "amber",
  },
];

const contentOpportunityCards: Array<{ title: string; tags: string; detail: string; tone: HashtagTone }> = [
  {
    title: "Tutorial launch brief",
    tags: "#GlowRoutineLab · #StudioLaunchPlan",
    detail: "Mock topic signals suggest tutorial-led content and owned-account summary review before a private-beta campaign test.",
    tone: "purple",
  },
  {
    title: "Commerce storytelling brief",
    tags: "#CartToContent · shoppable content",
    detail: "Use this static opportunity card to explain future campaign-tag planning without implying live hashtag search or collection.",
    tone: "green",
  },
  {
    title: "Regional context review",
    tags: "#WeekendStayGuide · MENA",
    detail: "Route regional/seasonal topics through analyst review and provider approval before any future approved-source monitoring.",
    tone: "cyan",
  },
];

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
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
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
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
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
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only hashtag intelligence</Badge>
            <Badge className="bg-violet-400/10 text-violet-100 ring-violet-300/20">{hashtagIntelligenceProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{hashtagIntelligenceProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{hashtagIntelligenceProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100/10 text-slate-200 ring-white/15">{hashtagIntelligenceProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-200">Public topic planning workspace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Hashtag signal planning</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
            {hashtagIntelligenceProfile.description} Use this static workspace to review topic clusters, campaign tag readiness, velocity previews, and content opportunities without implying live hashtag scraping or monitoring.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaHashtagSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha hashtag boundary</p>
          <p className="mt-1">
            Mock topic signals and planning cards only. No live Instagram data is collected in Alpha, no hashtag monitoring runs in Alpha, and no backend/provider action runs from this page.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Official/approved-source future path</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">No scraping or anti-bot bypass</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static topic planning filters</p>
          <p className="mt-1 text-xs text-slate-500">
            Disabled Alpha controls for category, market/language, source, preview trend, and policy review. No live query, refresh, export, or monitor is available.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only controls</Badge>
          {hashtagFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Monitor disabled in Alpha
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Refresh disabled
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Export disabled
        </button>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No backend action runs from this page</span>
      </div>
    </section>
  );
}

function TopicOpportunityMap() {
  const topicClusters = [
    {
      cluster: "Tutorial authority",
      opportunity: "High-fit education tags",
      health: "Healthy",
      readiness: "Campaign brief ready",
      risk: "Low review risk",
      guidance: "Review owned tutorial content alignment before any future approved-source monitoring.",
      tone: "purple" as HashtagTone,
    },
    {
      cluster: "Commerce discovery",
      opportunity: "Shoppable story tags",
      health: "Moderate saturation",
      readiness: "Trend-readiness preview",
      risk: "Claims review needed",
      guidance: "Validate commerce claims and avoid implying unauthorized collection or hidden monitoring.",
      tone: "green" as HashtagTone,
    },
    {
      cluster: "Regional seasonality",
      opportunity: "MENA weekend planning",
      health: "Emerging topic pocket",
      readiness: "Market review required",
      risk: "Context-sensitive",
      guidance: "Route regional tags through analyst review and official/approved-source eligibility checks.",
      tone: "cyan" as HashtagTone,
    },
    {
      cluster: "Provider-gated discovery",
      opportunity: "Licensed enrichment only",
      health: "Unavailable in Alpha",
      readiness: "Approval required",
      risk: "Provider/legal gate",
      guidance: "Keep deeper monitoring disabled until source provenance, rate limits, and provider approval are documented.",
      tone: "amber" as HashtagTone,
    },
  ];

  const disabledActions = ["Start hashtag monitor", "Refresh trend data", "Save opportunity map", "Export tag list", "Activate provider", "Create topic review job"];

  return (
    <section className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
      <article className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-cyan-50 p-5 shadow-sm shadow-violet-100/70">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Topic opportunity map</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">Topic clusters, hashtag health, opportunity, and risk</h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
              Static map cards separate hashtag planning from mentions and alerts. They help teams review topic clusters, health, opportunity/risk posture, trend-readiness, and source eligibility while keeping unauthorized collection, live monitoring, refresh jobs, and provider collection disabled.
            </p>
          </div>
          <Badge className="bg-white text-violet-700 ring-violet-200">Opportunity map only</Badge>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {topicClusters.map((cluster) => (
            <article key={cluster.cluster} className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-sm shadow-violet-100/70">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{cluster.cluster}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{cluster.opportunity}</h3>
                </div>
                <Badge className={toneClasses(cluster.tone)}>{cluster.readiness}</Badge>
              </div>
              <div className="mt-4 grid gap-2 md:grid-cols-2">
                <p className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-950">Health:</span> {cluster.health}</p>
                <p className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-950">Risk:</span> {cluster.risk}</p>
              </div>
              <p className="mt-3 rounded-2xl border border-violet-100 bg-violet-50 p-3 text-xs leading-5 text-violet-900">{cluster.guidance}</p>
            </article>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50 p-5 shadow-sm shadow-amber-100/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the user safely review next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review opportunities, do not monitor tags</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review cluster fit, hashtag health, opportunity/risk, trend-readiness, and source approval notes. Real monitoring, unauthorized collection, refresh, exports, downloads, provider activation, and background jobs remain disabled.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled hashtag opportunity actions">
          {disabledActions.map((action) => (
            <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
              {action}: disabled
            </span>
          ))}
        </div>
      </article>
    </section>
  );
}

function SignalList({ items }: { items: HashtagPanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
    <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <HashtagsPanel title="Topic velocity preview" subtitle="Mock momentum bars for public topic planning; no live hashtag monitoring runs.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Mock topic signals</p>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">Static preview</span>
          </div>
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

      <HashtagsPanel title="Topic cluster mix" subtitle="Public/professional topic cluster placeholders for planning and briefing.">
        <SignalList items={topicClusterMix} />
      </HashtagsPanel>

      <HashtagsPanel title="Campaign tag readiness" subtitle="Connected owned summaries and mock campaign-fit readiness checks.">
        <SignalList items={campaignFitOverview} />
      </HashtagsPanel>

      <HashtagsPanel title="Topic risk review" subtitle="Brand-safety and policy placeholders without surveillance or private access.">
        <SignalList items={riskBrandSafetySignals} />
      </HashtagsPanel>
    </section>
  );
}

function TopicPlanningWorkspace() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
      <HashtagsPanel title="Topic planning board" subtitle="A static operational view for cluster review, velocity interpretation, and campaign tag readiness.">
        <div className="grid gap-3 md:grid-cols-2">
          {hashtagPlanningLanes.map((lane) => (
            <div key={lane.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-semibold text-slate-950">{lane.title}</p>
                <Badge className={toneClasses(lane.tone)}>{lane.value}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{lane.detail}</p>
            </div>
          ))}
        </div>
      </HashtagsPanel>

      <HashtagsPanel title="Content opportunity cards" subtitle="Mock planning prompts for sales and QA preview; no search or monitoring action runs.">
        <div className="space-y-3">
          {contentOpportunityCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{card.tags}</p>
                </div>
                <Badge className={toneClasses(card.tone)}>Mock opportunity</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
            </div>
          ))}
        </div>
      </HashtagsPanel>
    </section>
  );
}

function HashtagCardItem({ hashtag }: { hashtag: HashtagCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Campaign tag candidate</p>
          <h3 className="text-xl font-semibold tracking-tight text-slate-950">{hashtag.hashtag}</h3>
          <p className="mt-1 text-sm text-slate-500">{hashtag.categoryDetail}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only tag card</Badge>
          <Badge className={statusClasses(hashtag.status)}>{hashtagStatusLabels[hashtag.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={topicClasses(hashtag.topic)}>{hashtagTopicLabels[hashtag.topic]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{hashtag.marketLanguage}</Badge>
        <Badge className={riskClasses(hashtag.riskLevel)}>{hashtagRiskLabels[hashtag.riskLevel]}</Badge>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview trend</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtag.estimatedMomentum}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview fit</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtag.campaignFitScore > 0 ? `${hashtag.campaignFitScore}%` : "Gated"}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Risk</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{hashtagRiskLabels[hashtag.riskLevel]}</p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview planning guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{hashtag.recommendedAction}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs font-medium leading-5 text-amber-900">
        No hashtag monitoring runs in Alpha. Requires official source connection or provider approval where applicable before future use.
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
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      {hashtagCards.map((hashtag) => (
        <HashtagCardItem key={hashtag.id} hashtag={hashtag} />
      ))}
    </section>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm shadow-amber-100/70">
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
        <Badge className="bg-white text-amber-800 ring-amber-200">No backend action runs from this page</Badge>
        <Badge className="bg-white text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
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
    <HashtagsPanel title={hashtagComplianceNotice.title} subtitle="Preview-only hashtag intelligence, mock topic signals, owned summary previews, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{hashtagComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public, owned, or approved-source data only with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment requires private-beta monitoring service review and remains unavailable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No hashtag monitoring runs in Alpha. No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
      <TopicOpportunityMap />
      <AnalyticsPanels />
      <TopicPlanningWorkspace />
      <HashtagCardsGrid />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <HashtagIntelligenceTable />
    </div>
  );
}