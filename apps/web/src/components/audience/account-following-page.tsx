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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-200">Brand relationship map preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">{accountFollowingProfile.name} followed-entity map</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
            {accountFollowingProfile.handle} · {accountFollowingProfile.accountType}. Mock followed public entities by category, market, relevance, and relationship type only.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 xl:w-[29rem]">
          <p className="font-semibold text-white">Mock relationship signals · No hidden surveillance</p>
          <p className="mt-1 text-slate-300">Following preview uses static Alpha mock data. No live following collection runs in Alpha; official source connection and licensed provider review are required before any future relationship workflow.</p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  const disabledControls = ["Category map preview", "Market preview", "Relevance preview", "Export disabled", "Monitor disabled"];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Relationship map filters</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Static placeholders for followed public-entity categories, market, relevance, and gated provider views; no live following collection is running.</p>
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountFollowingKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <FollowingSummaryPanels />
      <FollowingIntelligenceCards />
      <ComplianceNotice />
      <FollowingIntelligenceTable />
    </div>
  );
}