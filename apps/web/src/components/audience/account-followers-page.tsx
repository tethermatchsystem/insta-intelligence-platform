import { FollowerIntelligenceCards } from "@/components/audience/follower-intelligence-cards";
import { FollowerSummaryPanels } from "@/components/audience/follower-summary-panels";
import { FollowerIntelligenceTable } from "@/components/data-tables/follower-intelligence-table";
import {
  accountFollowerFilters,
  accountFollowerKpis,
  accountFollowersComplianceNotice,
  accountFollowersProfile,
  type AccountFollowerTone,
} from "@/lib/mock-data/account-followers";

function toneClasses(tone: AccountFollowerTone) {
  const tones: Record<AccountFollowerTone, string> = {
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

const audienceSegmentLenses = [
  {
    segment: "Creator studios",
    share: "34%",
    decision: "Lead with production workflow education",
    detail: "Largest mock audience cohort for content-production, studio operations, and campaign planning themes.",
    tone: "purple" as AccountFollowerTone,
  },
  {
    segment: "Creative operators",
    share: "27%",
    decision: "Package repeatable launch playbooks",
    detail: "Marketing and social teams are represented as aggregated planning personas, not individual follower identities.",
    tone: "blue" as AccountFollowerTone,
  },
  {
    segment: "Commerce teams",
    share: "18%",
    decision: "Use product bundles and proof points",
    detail: "Retail and product teams are a preview segment for audience-fit discussion and future official summaries.",
    tone: "green" as AccountFollowerTone,
  },
  {
    segment: "Emerging makers",
    share: "Mock 11%",
    decision: "Validate before targeting",
    detail: "Static segment placeholder for Alpha storytelling; future real data requires connected or authorized sources.",
    tone: "amber" as AccountFollowerTone,
  },
];

const sourceReadinessSteps = [
  {
    label: "Official source coverage",
    value: "Connection required",
    detail: "Future real audience summaries must come from connected or authorized professional account sources.",
    tone: "amber" as AccountFollowerTone,
  },
  {
    label: "Aggregate segment rollups",
    value: "Preview-safe path",
    detail: "Segment, growth, geography, language, and profile-type views stay aggregate and mock-only in Alpha.",
    tone: "green" as AccountFollowerTone,
  },
  {
    label: "Identity-level follower collection",
    value: "Disabled",
    detail: "Recent follower identity tracking is not active and remains provider-gated where legally allowed.",
    tone: "rose" as AccountFollowerTone,
  },
];

const geoProfileSignals = [
  {
    label: "Market cluster",
    value: "Mock North America",
    bar: "76%",
    detail: "Static geography signal for audience planning; no live follower location lookup runs.",
  },
  {
    label: "Language readiness",
    value: "EN / ES preview",
    bar: "62%",
    detail: "Preview-only language grouping for future localized content decisions.",
  },
  {
    label: "Profile-type mix",
    value: "Creators + operators",
    bar: "68%",
    detail: "Modeled profile-type mix for audience-quality discussion, not identity-level monitoring.",
  },
];

const followerQualitySignals = [
  {
    label: "Relevance fit",
    value: "Strong",
    detail: "Mock content-fit assessment for deciding which audience segments deserve deeper official-source review.",
    tone: "green" as AccountFollowerTone,
  },
  {
    label: "Audience hygiene",
    value: "Needs source proof",
    detail: "Quality labels are static placeholders until authorized account data and provenance exist.",
    tone: "amber" as AccountFollowerTone,
  },
  {
    label: "Private identity exposure",
    value: "Blocked",
    detail: "No individual follower identities, private-account access, or hidden monitoring are represented.",
    tone: "rose" as AccountFollowerTone,
  },
];

const followerNextSteps = [
  "Pick the two mock segments that matter most for content planning before looking at any table row.",
  "Use geography, language, and profile-type signals as readiness questions for future authorized sources.",
  "Keep follower identity collection, exports, monitoring, and backend actions disabled until policy/provider gates exist.",
];

function FollowersPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountFollowerKpis)[number]) {
  return (
    <div className="rounded-[1.75rem] border border-cyan-100 bg-gradient-to-br from-white via-white to-cyan-50/70 p-5 shadow-sm shadow-cyan-100/70">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Audience decision metric</p>
      <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">Supports audience segment review · mock follower metric</p>
    </div>
  );
}

function FollowersHeader() {
  return (
    <header className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-6 text-white shadow-sm shadow-slate-950/30">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{accountFollowersProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{accountFollowersProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountFollowersProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountFollowersProfile.integrationBadge}</Badge>
            <Badge className="bg-amber-50 text-amber-700 ring-amber-100">{accountFollowersProfile.gatedBadge}</Badge>
            <Badge className="bg-rose-50 text-rose-700 ring-rose-100">Restricted preview</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Audience intelligence and segment atlas</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">{accountFollowersProfile.name} audience intelligence preview</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
            {accountFollowersProfile.handle} · {accountFollowersProfile.accountType}. Mock follower segments, growth/source readiness, geography, language, profile-type mix, and follower-quality signals only.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-cyan-100/90">
            This page should answer who the audience appears to be, which segments matter, and what authorized source coverage would be required later. It is not a live follower tracker.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 xl:w-[29rem]">
          <p className="font-semibold text-white">Audience source boundary · No live tracking</p>
          <p className="mt-1 text-slate-300">Follower preview uses static Alpha mock data. No live follower collection or follower tracking runs in Alpha; future real data requires connected/authorized account sources and licensed provider review where applicable.</p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  const disabledControls = ["Segment atlas preview", "Geo/language lens", "Quality score preview", "Source readiness", "Export disabled", "Monitor disabled"];

  return (
    <section className="rounded-3xl border border-cyan-100 bg-cyan-50/60 p-4 shadow-sm shadow-cyan-100/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static audience segment controls</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">Static placeholders for audience composition, quality, geography, language, and gated provider views; no live follower collection is running.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {accountFollowerFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4" aria-label="Disabled audience preview controls">
        {disabledControls.map((control) => (
          <span key={control} aria-disabled="true" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
            {control}
          </span>
        ))}
      </div>
    </section>
  );
}

function AudienceSegmentAtlas() {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)]">
      <FollowersPanel title="Audience segment atlas" subtitle="Start with audience strategy: each card explains a mock segment, the decision it supports, and the compliance boundary.">
        <div className="grid gap-3 lg:grid-cols-2">
          {audienceSegmentLenses.map((segment) => (
            <article key={segment.segment} className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50/80 via-white to-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">Audience segment</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{segment.segment}</h3>
                </div>
                <Badge className={toneClasses(segment.tone)}>{segment.share}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{segment.detail}</p>
              <p className="mt-3 rounded-2xl border border-cyan-100 bg-white/80 p-3 text-xs leading-5 text-slate-600">
                <span className="font-semibold text-slate-950">Next decision:</span> {segment.decision}
              </p>
            </article>
          ))}
        </div>
      </FollowersPanel>

      <FollowersPanel title="What should the user do next?" subtitle="Preview guidance only; no follower action is executed.">
        <ol className="space-y-3">
          {followerNextSteps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </FollowersPanel>
    </section>
  );
}

function GeographyAndQualitySignals() {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
      <FollowersPanel title="Growth and source readiness" subtitle="A preview checklist for moving from Alpha mock segments to approved audience summaries later.">
        <div className="space-y-3">
          {sourceReadinessSteps.map((step, index) => (
            <div key={step.label} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-100 text-xs font-bold text-cyan-700">{index + 1}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-semibold text-slate-950">{step.label}</p>
                  <Badge className={toneClasses(step.tone)}>{step.value}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </FollowersPanel>

      <FollowersPanel title="Geography, profile-type, and follower-quality matrix" subtitle="Static mock signals for audience planning; no individual follower identity lookup runs.">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-3">
            {geoProfileSignals.map((signal) => (
              <div key={signal.label} className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700">{signal.label}</p>
                  <p className="text-sm font-semibold text-slate-950">{signal.value}</p>
                </div>
                <div className="mt-3 h-2 rounded-full bg-white">
                  <div className="h-2 rounded-full bg-cyan-500" style={{ width: signal.bar }} />
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-600">{signal.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Follower-quality preview</p>
            <div className="mt-4 space-y-3">
              {followerQualitySignals.map((signal) => (
                <div key={signal.label} className="rounded-2xl border border-white bg-white p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-950">{signal.label}</p>
                    <Badge className={toneClasses(signal.tone)}>{signal.value}</Badge>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FollowersPanel>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <FollowersPanel title={accountFollowersComplianceNotice.title} subtitle="Follower collection disabled in Alpha; official APIs, licensed providers, and aggregated summaries only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountFollowersComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account audience summaries only.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires official source connection before future approved data.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Requires licensed provider review; identity-level follower collection is disabled in Alpha.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live follower collection is running; no scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountFollowersComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </FollowersPanel>
  );
}

export function AccountFollowersPage() {
  return (
    <div className="space-y-6">
      <FollowersHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountFollowerKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <AudienceSegmentAtlas />
      <GeographyAndQualitySignals />
      <FollowerSummaryPanels />
      <FollowerIntelligenceCards />
      <ComplianceNotice />
      <FollowerIntelligenceTable />
    </div>
  );
}