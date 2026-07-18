import { AccountContextNavigation } from "@/components/accounts/account-context-navigation";
import { AdCreativeCards } from "@/components/ads/ad-creative-cards";
import { AdsIntelligencePanels } from "@/components/ads/ads-intelligence-panels";
import { AdIntelligenceTable } from "@/components/data-tables/ad-intelligence-table";
import {
  accountAdFilters,
  accountAdKpis,
  accountAdsComplianceNotice,
  accountAdsProfile,
  type AccountAdTone,
} from "@/lib/mock-data/account-ads";

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

const adsPreviewBadges = [
  "Creative intelligence gallery",
  "Mock ad and creative signals",
  "No live Instagram data is collected in Alpha",
];

const adsOperationalCards = [
  {
    title: "Creative monitoring boundary",
    detail: "Creative cards, placement labels, objective chips, and table rows are static Alpha previews. No ad monitoring, download, or backend action runs in Alpha.",
    badge: "No ad monitoring runs in Alpha",
    tone: "slate" as AccountAdTone,
  },
  {
    title: "Meta source readiness",
    detail: "Future owned ad summaries require Meta Marketing API connection; allowed public ad visibility requires Meta Ad Library review before private beta use.",
    badge: "Requires official source connection",
    tone: "green" as AccountAdTone,
  },
  {
    title: "Creative review decision",
    detail: "Use this preview to compare mock creative themes, placements, objectives, and readiness signals without implying unauthorized competitor private data.",
    badge: "Requires provider approval where applicable",
    tone: "amber" as AccountAdTone,
  },
];

const adsSafetyChecks = [
  "No ad monitoring runs in Alpha",
  "No backend action runs from this page",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
];

const creativeGalleryLanes = [
  {
    title: "Creative board",
    value: "Mock assets",
    detail: "Review static creative cards, message hooks, placement labels, and objective tags before any future source-backed workflow.",
    tone: "purple" as AccountAdTone,
  },
  {
    title: "Placement lens",
    value: "Safe context",
    detail: "Separate owned ad previews from allowed public Ad Library visibility and avoid unauthorized private competitor claims.",
    tone: "blue" as AccountAdTone,
  },
  {
    title: "Approval path",
    value: "Meta review",
    detail: "Future activation requires Meta Marketing API, Meta Ad Library review, private-beta ads service, and audit-backed provider gates.",
    tone: "green" as AccountAdTone,
  },
];

const creativeNextSteps = [
  "Review mock creative cards for message, placement, and objective differences.",
  "Keep owned-ad and allowed-public Ad Library concepts separate from private competitor data.",
  "Do not enable monitoring, downloads, spend queries, or provider enrichment until backend and approval gates exist.",
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function AdsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountAdKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">Supports creative review decisions · mock ad metric</p>
    </div>
  );
}

function AdsHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {adsPreviewBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-slate-100 ring-white/10">{badge}</Badge>
              ))}
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Ad monitoring disabled in Alpha</Badge>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Creative intelligence gallery</p>
            <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountAdsProfile.name} ad creative gallery preview</h1>
            <p className="mt-2 text-base text-slate-300">{accountAdsProfile.handle} · {accountAdsProfile.accountType}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Review mock creative cards, objectives, placement labels, approval gates, and source-safe ad insights. This page is a creative intelligence gallery, not a private competitor tracker or live ad monitoring tool.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[29rem]">
            <p className="font-semibold text-white">Meta API / Ad Library boundary</p>
            <p className="mt-1">Ad monitoring is disabled in Alpha. Future workflows require Meta Marketing API connection, Meta Ad Library review, a private-beta ads service, and policy-gated provenance.</p>
            <button disabled className="mt-4 w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
              Creative monitoring disabled in Alpha
            </button>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{accountAdsProfile.sourceBadge}</Badge>
              <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{accountAdsProfile.confidenceBadge}</Badge>
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{accountAdsProfile.freshnessBadge}</Badge>
              <Badge className="bg-slate-400/10 text-slate-100 ring-slate-300/20">{accountAdsProfile.integrationBadge}</Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-amber-100 bg-amber-50/60 p-5 shadow-sm shadow-amber-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static creative gallery controls</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-600">Static placeholders for creative format, placement, objective, future Meta Ad Library review, authorized owned-ad views, and private-beta ads service checks. No live ad query or backend action runs from this page.</p>
        </div>
        <div className="flex w-full flex-col gap-2 xl:w-auto xl:items-end">
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Ad monitoring disabled in Alpha
          </button>
          <div className="flex flex-wrap gap-2">
            {accountAdFilters.map((filter) => (
              <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
                {filter.label}: {filter.options[0]}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CreativeGalleryBriefing() {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
      <AdsPanel title="Creative gallery lanes" subtitle="Each lane explains a different ad-review decision for the static Alpha demo.">
        <div className="grid gap-3 md:grid-cols-3">
          {creativeGalleryLanes.map((lane) => (
            <div key={lane.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
              <Badge className={toneClasses(lane.tone)}>{lane.value}</Badge>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{lane.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{lane.detail}</p>
            </div>
          ))}
        </div>
      </AdsPanel>

      <AdsPanel title="What should the user do next?" subtitle="Preview guidance only; no ad action is executed.">
        <ol className="space-y-3">
          {creativeNextSteps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-700">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </AdsPanel>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <AdsPanel title={accountAdsComplianceNotice.title} subtitle="Ad monitoring disabled in Alpha; Meta Marketing API connection, Meta Ad Library review, and private-beta ads service required.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountAdsComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires Meta Ad Library review before any allowed public ad visibility workflow. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires Meta Marketing API connection for future owned ad account summaries.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Requires private-beta ads service and provider approval where applicable for any licensed provider enrichment.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live ad monitoring, download, notification, database write, or backend action runs from this page; no scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountAdsComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </AdsPanel>
  );
}

export function AccountAdsPage() {
  return (
    <div className="space-y-6">
      <AdsHeader />
      <AccountContextNavigation activeLabel="Ads" />

      <section className="grid gap-4 lg:grid-cols-3">
        {adsOperationalCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <Badge className={toneClasses(card.tone)}>{card.badge}</Badge>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountAdKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <CreativeGalleryBriefing />
      <section className="grid gap-2 sm:grid-cols-3">
        {adsSafetyChecks.map((item) => (
          <p key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-600 shadow-sm shadow-slate-200/60">
            {item}
          </p>
        ))}
      </section>
      <AdsIntelligencePanels />
      <AdCreativeCards />
      <ComplianceNotice />
      <AdIntelligenceTable />
    </div>
  );
}