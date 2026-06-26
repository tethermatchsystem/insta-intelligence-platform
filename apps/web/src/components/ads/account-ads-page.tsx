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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function AdsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountAdKpis)[number]) {
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

function AdsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{accountAdsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{accountAdsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountAdsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountAdsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Ads preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{accountAdsProfile.name} ads preview</h1>
          <p className="mt-2 text-base text-slate-600">{accountAdsProfile.handle} · {accountAdsProfile.accountType}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[29rem]">
          <p className="font-semibold text-slate-900">Mock ad intelligence</p>
          <p className="mt-1">Ad monitoring disabled in Alpha. No live ad monitoring is running; future workflows require Meta Marketing API connection, Meta Ad Library review, and a private-beta ads service.</p>
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
          <p className="text-sm font-semibold text-slate-950">Ads preview filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for preview ad signals, future Meta Ad Library review, authorized owned-ad views, and private-beta ads service checks.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {accountAdFilters.map((filter) => (
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
    <AdsPanel title={accountAdsComplianceNotice.title} subtitle="Ad monitoring disabled in Alpha; Meta Marketing API connection, Meta Ad Library review, and private-beta ads service required.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountAdsComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires Meta Ad Library review before any allowed public ad visibility workflow.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Requires Meta Marketing API connection for future owned ad account summaries.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Requires private-beta ads service for any licensed provider enrichment.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live ad monitoring is running; no scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountAdKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <AdsIntelligencePanels />
      <AdCreativeCards />
      <ComplianceNotice />
      <AdIntelligenceTable />
    </div>
  );
}