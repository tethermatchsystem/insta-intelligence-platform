import { CreatorCards } from "@/components/creators/creator-cards";
import { CreatorDiscoveryPanels } from "@/components/creators/creator-discovery-panels";
import { CreatorDiscoveryTable } from "@/components/data-tables/creator-discovery-table";
import {
  creatorDiscoveryComplianceNotice,
  creatorDiscoveryFilters,
  creatorDiscoveryKpis,
  creatorDiscoveryProfile,
  type CreatorDiscoveryTone,
} from "@/lib/mock-data/creator-discovery";

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

function toneAccentClasses(tone: CreatorDiscoveryTone) {
  const tones: Record<CreatorDiscoveryTone, string> = {
    blue: "from-blue-500 to-cyan-400",
    green: "from-emerald-500 to-teal-400",
    amber: "from-amber-500 to-orange-400",
    purple: "from-violet-500 to-fuchsia-400",
    slate: "from-slate-500 to-slate-300",
    rose: "from-rose-500 to-pink-400",
    cyan: "from-cyan-500 to-blue-400",
  };

  return tones[tone];
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CreatorsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm shadow-violet-100/70">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function KpiCard({ label, value, delta, tone, description }: (typeof creatorDiscoveryKpis)[number]) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-violet-100/70">
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

function CreatorsHeader() {
  const safetyBoundaries = [
    "No creator search runs in Alpha",
    "No live Instagram data is collected in Alpha",
    "Requires official source connection",
    "Requires provider approval where applicable",
  ];

  return (
    <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-violet-950 to-fuchsia-950 p-6 text-white shadow-sm shadow-slate-950/30">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl" />
      <div className="absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="relative flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{creatorDiscoveryProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{creatorDiscoveryProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{creatorDiscoveryProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{creatorDiscoveryProfile.integrationBadge}</Badge>
            <Badge className="bg-violet-50 text-violet-700 ring-violet-100">Preview-only creator discovery</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-200">Creator discovery and shortlist workspace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Creator fit pipeline preview</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
            Public/approved-source creator candidate review for fit scoring, niche/category match, audience quality preview, brand safety readiness, and partnership planning. No creator search runs in Alpha.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-2xl shadow-fuchsia-950/20 xl:w-[31rem]">
          <p className="font-semibold text-white">Mock creator fit signals · Static Alpha preview</p>
          <p className="mt-1 text-slate-300">Mock creator profile previews for public or approved-source planning only. No live Instagram data is collected in Alpha, and no backend action runs from this page.</p>
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
  const disabledControls = ["Creator search disabled", "Shortlist save disabled", "Outreach disabled", "Export disabled", "Provider action disabled"];

  return (
    <section className="rounded-3xl border border-violet-200 bg-white p-4 shadow-sm shadow-violet-100/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Creator candidate filters</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Static Alpha filter preview for niche/category match, fit score, audience quality, brand safety, and licensed enrichment review. No live query is running.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {creatorDiscoveryFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 border-t border-slate-100 pt-4" aria-label="Disabled creator discovery controls">
        {disabledControls.map((control) => (
          <span key={control} aria-disabled="true" className="cursor-not-allowed rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500 opacity-80">
            {control}
          </span>
        ))}
      </div>
      <p className="mt-3 rounded-2xl border border-violet-100 bg-violet-50 px-3 py-2 text-xs leading-5 text-violet-900">
        Preview filters only: no creator search runs in Alpha, no provider request is sent, and no backend action runs from this page.
      </p>
    </section>
  );
}

function CreatorFitEvaluationWorkspace() {
  const fitCards = [
    {
      creator: "Mina Studio",
      lane: "Premium beauty educator",
      fit: "91% mock fit",
      audience: "Owned/public audience quality preview only",
      safety: "Brand-safety review ready",
      collaboration: "Brief alignment can be reviewed next",
      source: "Public or approved-source preview",
      tone: "purple" as CreatorDiscoveryTone,
    },
    {
      creator: "Urban Wellness Lab",
      lane: "Fitness launch partner",
      fit: "84% mock fit",
      audience: "Category overlap placeholder",
      safety: "Manual claims review required",
      collaboration: "Collaboration terms not configured",
      source: "Official-source connection required",
      tone: "blue" as CreatorDiscoveryTone,
    },
    {
      creator: "Retail Story Co.",
      lane: "Commerce storyteller",
      fit: "78% mock fit",
      audience: "Aggregate engagement preview only",
      safety: "Disclosure checklist pending",
      collaboration: "Save/outreach disabled in Alpha",
      source: "Licensed provider approval where applicable",
      tone: "green" as CreatorDiscoveryTone,
    },
  ];

  const disabledActions = ["Save creator", "Send outreach", "Open contact details", "Export shortlist", "Request provider enrichment", "Create collaboration brief"];

  return (
    <section className="grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
      <article className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 p-5 shadow-sm shadow-violet-100/70">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Creator fit evaluation workspace</p>
            <h2 className="mt-2 text-xl font-semibold text-slate-950">Candidate fit cards with audience and brand-safety preview</h2>
            <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
              Static creator-fit cards help teams compare niche match, audience-quality posture, brand-safety readiness, collaboration readiness, and source eligibility. No creator search, contact lookup, private creator data, save, outreach, export, or provider action runs in Alpha.
            </p>
          </div>
          <Badge className="bg-white text-violet-700 ring-violet-200">Evaluation only</Badge>
        </div>

        <div className="mt-5 grid gap-3 xl:grid-cols-3">
          {fitCards.map((card) => (
            <article key={card.creator} className="rounded-3xl border border-white/80 bg-white/85 p-4 shadow-sm shadow-violet-100/70">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{card.lane}</p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-950">{card.creator}</h3>
                </div>
                <Badge className={toneClasses(card.tone)}>{card.fit}</Badge>
              </div>
              <div className="mt-4 grid gap-2">
                <p className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-950">Audience:</span> {card.audience}</p>
                <p className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-950">Brand safety:</span> {card.safety}</p>
                <p className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600"><span className="font-semibold text-slate-950">Collaboration:</span> {card.collaboration}</p>
                <p className="rounded-2xl border border-violet-100 bg-violet-50 p-3 text-xs leading-5 text-violet-900"><span className="font-semibold">Eligibility/source:</span> {card.source}</p>
              </div>
            </article>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50 p-5 shadow-sm shadow-amber-100/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">What can the user safely review next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review fit and readiness, do not contact creators</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review candidate fit, audience-quality posture, brand-safety notes, collaboration readiness, and source eligibility. Real creator search, shortlist saving, outreach, contact access, exports, downloads, provider enrichment, and CRM handoff remain disabled.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled creator evaluation actions">
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

function CreatorShortlistWorkspace() {
  const stages = [
    { label: "Candidate review", value: "Mock profile pool", detail: "Static public/approved-source creator candidates for QA and sales preview.", meta: "Public or approved-source data only", readiness: 72 },
    { label: "Fit scoring", value: "Preview only", detail: "Niche/category, audience quality, and brand-safety readiness signals are mock calculations.", meta: "Mock creator fit signals", readiness: 84 },
    { label: "Partnership planning", value: "Outreach disabled", detail: "No outreach workflow, notification, export, download, or backend action runs in Alpha.", meta: "No backend action runs", readiness: 46 },
  ];

  return (
    <section className="rounded-[2rem] border border-violet-200 bg-gradient-to-br from-white via-violet-50 to-fuchsia-50 p-5 shadow-sm shadow-violet-100/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Shortlist workspace</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">Discovery pipeline, not a live creator database</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            A static review workspace for candidate fit, audience quality, brand-safety readiness, and planning posture. No creator search, save, outreach, or provider workflow runs in Alpha.
          </p>
        </div>
        <Badge className="bg-white text-violet-700 ring-violet-200">Preview-only creator discovery</Badge>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-3">
        {stages.map((stage, index) => (
          <article key={stage.label} className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm shadow-violet-100/80">
            <div className="flex items-center justify-between gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-2xl bg-violet-950 text-sm font-semibold text-white">{index + 1}</span>
              <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{stage.meta}</Badge>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">{stage.label}</h3>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{stage.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{stage.detail}</p>
            <div className="mt-4 rounded-full bg-violet-100 p-1" aria-label={`${stage.label} preview readiness`}>
              <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" style={{ width: `${stage.readiness}%` }} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CreatorReviewBoard() {
  const fitSignals = [
    { label: "Niche/category match", value: "34%", detail: "Mock score weight for category fit." },
    { label: "Audience quality", value: "28%", detail: "Preview-only audience-quality estimate." },
    { label: "Brand-safety readiness", value: "22%", detail: "Manual review posture, not hidden surveillance." },
    { label: "Partnership planning", value: "16%", detail: "Mock campaign-fit planning context." },
  ];

  const readinessChecks = [
    "Brief alignment can be reviewed in Alpha preview",
    "Official source connection required for any future live path",
    "Provider approval required where applicable",
    "Outreach, save, export, and notifications are disabled",
  ];

  return (
    <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm shadow-slate-950/20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200">Fit scoring composition</p>
            <h2 className="mt-2 text-lg font-semibold">Mock creator fit signals</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">Static scoring model preview for sales and QA; no creator database, search index, or live Instagram query is connected.</p>
          </div>
          <Badge className="bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100">Mock creator fit signals</Badge>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {fitSignals.map((signal) => (
            <div key={signal.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-white">{signal.label}</p>
                <span className="text-lg font-semibold text-fuchsia-100">{signal.value}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">{signal.detail}</p>
            </div>
          ))}
        </div>
      </article>

      <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-violet-100/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Outreach readiness preview</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Planning guardrails</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">Partnership planning is visible for product preview only. No outreach, CRM handoff, notification, export, or backend action runs from this page.</p>
        <div className="mt-5 space-y-3">
          {readinessChecks.map((check) => (
            <div key={check} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm leading-5 text-slate-700">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-violet-500" />
              <span>{check}</span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <CreatorsPanel title={creatorDiscoveryComplianceNotice.title} subtitle="Mock public/professional creator previews and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{creatorDiscoveryComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Preview-only creator discovery with mock creator fit signals.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Contact and enrichment data requires provider approval where applicable and remains gated.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No creator search runs in Alpha. No scraping, private account access, hidden surveillance, fake login automation, generated account farm behavior, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {creatorDiscoveryComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </CreatorsPanel>
  );
}

export function CreatorDiscoveryPage() {
  return (
    <div className="space-y-6">
      <CreatorsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {creatorDiscoveryKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <CreatorFitEvaluationWorkspace />
      <CreatorShortlistWorkspace />
      <CreatorReviewBoard />
      <CreatorDiscoveryPanels />
      <CreatorCards />
      <ComplianceNotice />
      <CreatorDiscoveryTable />
    </div>
  );
}