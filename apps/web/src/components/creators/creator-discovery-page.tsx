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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CreatorsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof creatorDiscoveryKpis)[number]) {
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

function CreatorsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{creatorDiscoveryProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{creatorDiscoveryProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Fresh {creatorDiscoveryProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{creatorDiscoveryProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Creator intelligence</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{creatorDiscoveryProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{creatorDiscoveryProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[29rem]">
          <p className="font-semibold text-slate-900">Mock-only creator discovery view</p>
          <p className="mt-1">Premium creator discovery for public/professional profiles, connected overlap summaries, and licensed-provider placeholders only. No live integrations are connected.</p>
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
          <p className="text-sm font-semibold text-slate-950">Creator filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for future discovery, vetting, and licensed enrichment views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {creatorDiscoveryFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <CreatorsPanel title={creatorDiscoveryComplianceNotice.title} subtitle="Public/professional discovery and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{creatorDiscoveryComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Public/professional creator discovery framing only.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Official APIs and licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Contact and enrichment data is licensed-provider-only and gated.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
      <CreatorDiscoveryPanels />
      <CreatorCards />
      <ComplianceNotice />
      <CreatorDiscoveryTable />
    </div>
  );
}