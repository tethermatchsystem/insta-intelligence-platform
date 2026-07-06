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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Audience composition and follower quality preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">{accountFollowersProfile.name} follower quality preview</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">
            {accountFollowersProfile.handle} · {accountFollowersProfile.accountType}. Mock follower growth, geography, language, creator/business mix, and readiness signals only.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 xl:w-[29rem]">
          <p className="font-semibold text-white">Mock audience metrics · No live tracking</p>
          <p className="mt-1 text-slate-300">Follower preview uses static Alpha mock data. No live follower collection or follower tracking runs in Alpha; official source connection and licensed provider review are required before any future collection workflow.</p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  const disabledControls = ["Segment preview", "Geo/language preview", "Quality score preview", "Export disabled", "Monitor disabled"];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Audience readiness filters</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Static placeholders for audience composition, quality, geography, language, and gated provider views; no live follower collection is running.</p>
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
      <FollowerSummaryPanels />
      <FollowerIntelligenceCards />
      <ComplianceNotice />
      <FollowerIntelligenceTable />
    </div>
  );
}