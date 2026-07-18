import { AccountContextNavigation } from "@/components/accounts/account-context-navigation";
import { FollowingIntelligenceCards } from "@/components/audience/following-intelligence-cards";
import { FollowingSummaryPanels } from "@/components/audience/following-summary-panels";
import { FollowingIntelligenceTable } from "@/components/data-tables/following-intelligence-table";
import {
  accountFollowingComplianceNotice,
  accountFollowingFilters,
  accountFollowingKpis,
  accountFollowingProfile,
  type AccountFollowingTone,
} from "@/lib/mock-data/account-following";

function toneClasses(tone: AccountFollowingTone) {
  const tones: Record<AccountFollowingTone, string> = {
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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

const ecosystemLanes = [
  {
    lane: "Partners",
    value: "196 mock relationships",
    cue: "Co-marketing and collaboration targets",
    examples: ["Launch partners", "Retail collaborators", "Studio vendors"],
    detail: "Static partner lane for approved public-entity context; no private relationship tracking runs.",
    tone: "green" as AccountFollowingTone,
  },
  {
    lane: "Creators",
    value: "488 mock relationships",
    cue: "Influence and content adjacency",
    examples: ["Studio educators", "Workflow creators", "Production teams"],
    detail: "Creator lane shows category-level adjacency only, not individual monitoring or outreach automation.",
    tone: "purple" as AccountFollowingTone,
  },
  {
    lane: "Brands",
    value: "308 mock relationships",
    cue: "Commerce and category context",
    examples: ["Product brands", "Tools", "Retail operators"],
    detail: "Brand lane helps explain market context using static Alpha summaries and future official-source gates.",
    tone: "blue" as AccountFollowingTone,
  },
  {
    lane: "Media + competitors",
    value: "218 mock relationships",
    cue: "Industry signal watchlist",
    examples: ["Publishers", "Trend sources", "Adjacent competitors"],
    detail: "Competitive and media labels stay as mock public-entity categories, not surveillance or private-access signals.",
    tone: "amber" as AccountFollowingTone,
  },
];

const industrySignalBands = [
  {
    label: "Partner proximity",
    value: "High",
    detail: "Static relationship-map signal for identifying partnership themes before any provider integration exists.",
    tone: "green" as AccountFollowingTone,
  },
  {
    label: "Creator ecosystem pull",
    value: "Strong",
    detail: "Mock creator and media adjacency for brand ecosystem planning, not identity-level following surveillance.",
    tone: "purple" as AccountFollowingTone,
  },
  {
    label: "Competitor lens",
    value: "Gated preview",
    detail: "Competitor and industry signals are category placeholders and require provider/policy review before real use.",
    tone: "amber" as AccountFollowingTone,
  },
];

const relationshipBoundaries = [
  "Public or approved entity categories only in Alpha mock UI.",
  "No latest-following identity feed, hidden monitoring, outreach automation, or export workflow runs.",
  "Future enrichment requires official source connection and licensed provider review where applicable.",
];

const followingNextSteps = [
  "Choose the ecosystem lane that best explains the account’s current brand posture: partners, creators, brands, media, or competitors.",
  "Use the map to frame partner and industry questions before reviewing category-level rows.",
  "Keep live following collection, exports, monitoring, and identity-level change tracking disabled until policy/provider gates exist.",
];

function FollowingPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountFollowingKpis)[number]) {
  return (
    <div className="rounded-[1.75rem] border border-violet-100 bg-gradient-to-br from-white via-white to-violet-50/70 p-5 shadow-sm shadow-violet-100/70">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">Ecosystem map metric</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">Supports relationship-map review · mock following metric</p>
    </div>
  );
}

function FollowingHeader() {
  return (
    <header className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 p-6 text-white shadow-sm shadow-slate-950/30">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{accountFollowingProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{accountFollowingProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountFollowingProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountFollowingProfile.integrationBadge}</Badge>
            <Badge className="bg-amber-50 text-amber-700 ring-amber-100">{accountFollowingProfile.gatedBadge}</Badge>
            <Badge className="bg-rose-50 text-rose-700 ring-rose-100">Restricted relationship intelligence</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Relationship map and brand ecosystem lens</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">{accountFollowingProfile.name} brand ecosystem preview</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
            {accountFollowingProfile.handle} · {accountFollowingProfile.accountType}. Mock followed public entities by category, market, relevance, and relationship type only.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-violet-100/90">
            This page should answer which public or approved entities shape the account’s brand ecosystem. It is not an audience-composition page and it does not enable unauthorized private tracking.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 xl:w-[29rem]">
          <p className="font-semibold text-white">Relationship map boundary · No hidden surveillance</p>
          <p className="mt-1 text-slate-300">Following preview uses static Alpha mock data. No live following collection or identity-level relationship tracking runs in Alpha; official source connection and licensed provider review are required before any future relationship workflow.</p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  const disabledControls = ["Relationship board", "Partner lens", "Creator/media lens", "Competitor lens", "Export disabled", "Monitor disabled"];

  return (
    <section className="rounded-3xl border border-violet-100 bg-violet-50/60 p-4 shadow-sm shadow-violet-100/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static ecosystem map controls</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">Static placeholders for followed public-entity categories, partner lanes, creator/media groups, market relevance, and gated provider views; no live following collection is running.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {accountFollowingFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4" aria-label="Disabled relationship preview controls">
        {disabledControls.map((control) => (
          <span key={control} aria-disabled="true" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
            {control}
          </span>
        ))}
      </div>
    </section>
  );
}

function RelationshipEcosystemMap() {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)]">
      <FollowingPanel title="Relationship ecosystem board" subtitle="A brand-map view of public or approved entity categories: partners, creators, brands, media, competitors, and industry signals.">
        <div className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 p-5 text-white shadow-sm shadow-violet-950/20">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Brand ecosystem lens</p>
              <h3 className="mt-2 text-xl font-semibold">Catalyst Studio relationship map</h3>
            </div>
            <Badge className="bg-white/15 text-violet-100 ring-white/20">Static Alpha board</Badge>
          </div>

          <div className="grid gap-3 lg:grid-cols-2">
            {ecosystemLanes.map((lane) => (
              <article key={lane.lane} className="rounded-3xl border border-white/10 bg-white/10 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">{lane.lane}</p>
                    <h4 className="mt-2 text-base font-semibold text-white">{lane.cue}</h4>
                  </div>
                  <Badge className={toneClasses(lane.tone)}>{lane.value}</Badge>
                </div>
                <p className="mt-3 text-xs leading-5 text-violet-100/85">{lane.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {lane.examples.map((example) => (
                    <span key={example} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-violet-100">
                      {example}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs leading-5 text-violet-100/85">
            This board is a relationship-map preview, not an audience list. It does not collect live following data or expose private relationships.
          </p>
        </div>
      </FollowingPanel>

      <FollowingPanel title="What should the user do next?" subtitle="Preview guidance only; no relationship action is executed.">
        <ol className="space-y-3">
          {followingNextSteps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-violet-100 bg-violet-50/60 p-3 text-sm leading-6 text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </FollowingPanel>
    </section>
  );
}

function EcosystemSignalPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1fr_0.8fr]">
      <FollowingPanel title="Industry signal lanes" subtitle="Static mock ecosystem signals; no private relationship surveillance or live following lookup runs.">
        <div className="grid gap-3 lg:grid-cols-3">
          {industrySignalBands.map((signal) => (
            <div key={signal.label} className="rounded-3xl border border-violet-100 bg-violet-50/50 p-4">
              <Badge className={toneClasses(signal.tone)}>{signal.value}</Badge>
              <p className="mt-4 text-sm font-semibold text-slate-950">{signal.label}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{signal.detail}</p>
            </div>
          ))}
        </div>
      </FollowingPanel>

      <FollowingPanel title="Source and compliance boundaries" subtitle="Relationship intelligence stays category-level and provider-gated in Alpha.">
        <ul className="space-y-3">
          {relationshipBoundaries.map((boundary) => (
            <li key={boundary} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600">
              {boundary}
            </li>
          ))}
        </ul>
      </FollowingPanel>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <FollowingPanel title={accountFollowingComplianceNotice.title} subtitle="Following collection disabled in Alpha; official APIs, licensed providers, and connected account summaries only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountFollowingComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account following summaries only.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires official source connection before future approved data.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Requires licensed provider review; identity-level following collection is disabled in Alpha.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live following collection is running; no scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountFollowingComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </FollowingPanel>
  );
}

export function AccountFollowingPage() {
  return (
    <div className="space-y-6">
      <FollowingHeader />
      <AccountContextNavigation activeLabel="Following" />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountFollowingKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <RelationshipEcosystemMap />
      <EcosystemSignalPanels />
      <FollowingSummaryPanels />
      <FollowingIntelligenceCards />
      <ComplianceNotice />
      <FollowingIntelligenceTable />
    </div>
  );
}