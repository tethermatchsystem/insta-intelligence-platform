import {
  anomalyHighlights,
  complianceCoverage,
  dashboardKpis,
  dashboardTrendLabels,
  providerHealth,
  recentCollectionJobs,
  recentIntelligenceEvents,
} from "@/lib/mock-data/dashboard";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function toneClasses(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return tones[tone] ?? tones.slate;
}

function DashboardKpiCard({ label, value, trend, tone }: { label: string; value: string; trend: string; tone: string }) {
  return (
    <Card className="premium-kpi-card rounded-3xl py-0">
      <CardContent className="p-5">
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <Badge variant="outline" className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{trend}</Badge>
        </div>
        <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">{value}</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300" />
        </div>
      </div>
      </CardContent>
    </Card>
  );
}

function DashboardPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <Card className="premium-card rounded-3xl py-0">
      <CardHeader className="p-5 pb-3">
        <CardTitle className="text-base font-semibold text-slate-50">{title}</CardTitle>
        {subtitle ? <CardDescription className="mt-1 text-sm text-slate-400">{subtitle}</CardDescription> : null}
      </CardHeader>
      <CardContent className="p-5 pt-1">{children}</CardContent>
    </Card>
  );
}

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <header className="premium-header-surface rounded-[2rem] p-5 sm:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-emerald-100">Official-safe workspace</Badge>
              <Badge variant="outline" className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-indigo-100">Mock provider confidence 98.2%</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold text-slate-700">No live monitoring is running</Badge>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">Dashboard preview</h1>
            <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300">Mock intelligence snapshot for future connected professional account analytics, mentions, benchmarks, and provider readiness.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-slate-300 xl:w-80">
            <p className="font-semibold text-slate-50">Alpha demo only</p>
            <p className="mt-1 leading-6">Dashboard data is static preview data. Future source activity requires official Meta APIs or licensed compliant providers only.</p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardKpis.map((kpi) => (
          <DashboardKpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.8fr)]">
        <DashboardPanel title="Audience and engagement preview" subtitle="Mock visual placeholder for followers, engagement, mentions, alert previews, and provider confidence.">
          <div className="overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/80 p-4 text-white shadow-2xl shadow-black/25 sm:p-5">
            <div className="premium-chart-grid flex h-64 min-w-[520px] items-end gap-4 rounded-2xl border border-white/10 p-4 sm:h-72 sm:p-5">
              {dashboardTrendLabels.map((item) => (
                <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                  <div className={`w-full rounded-t-2xl bg-gradient-to-t from-cyan-300 via-sky-200 to-white shadow-lg shadow-cyan-950/30 ${item.height}`} />
                  <div className="text-center">
                    <p className="text-xs text-slate-300">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel title="Official-first notice" subtitle="Future source connections must pass provider and policy gates.">
          <div className="space-y-3 text-sm text-slate-600">
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">No live monitoring is running in this mock dashboard. Scraping, anti-bot bypass, private account access, and hidden surveillance are not implemented.</p>
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Allowed sources: official Meta APIs, connected professional account analytics, Business Discovery, hashtag/public content APIs, Ad Library, licensed compliant providers, mock providers, and manual CSV import.</p>
          </div>
        </DashboardPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
        <DashboardPanel title="Provider activity disabled in Alpha">
          <div className="space-y-3">
            {providerHealth.map((provider) => (
              <div key={provider.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{provider.name}</p>
                  <Badge variant="outline" className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-600 ring-slate-200">{provider.status}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">Freshness {provider.freshness} · Confidence {provider.confidence}</p>
              </div>
            ))}
          </div>
        </DashboardPanel>

        <DashboardPanel title="Compliance coverage">
          <ul className="space-y-3 text-sm text-slate-600">
            {complianceCoverage.map((item) => (
              <li key={item} className="flex gap-2 rounded-2xl bg-slate-50 p-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />{item}</li>
            ))}
          </ul>
        </DashboardPanel>

        <DashboardPanel title="Collection job previews">
          <div className="space-y-3">
            {recentCollectionJobs.map((job) => (
              <div key={`${job.job}-${job.time}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <p className="font-medium text-slate-900">{job.job}</p>
                <p className="mt-1 text-xs text-slate-500">{job.source} · {job.status} · {job.time}</p>
              </div>
            ))}
          </div>
        </DashboardPanel>

        <DashboardPanel title="Mock anomaly highlights">
          <div className="space-y-3">
            {anomalyHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <span className="text-xs font-semibold text-slate-500">{item.severity}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </DashboardPanel>
      </section>

      <DashboardPanel title="Mock intelligence event preview" subtitle="Static event stream prepared for future official provider ingestion.">
        <div className="premium-table-wrap rounded-2xl">
          <Table className="min-w-[860px]">
            <TableHeader className="bg-slate-950/70 text-xs uppercase tracking-wide text-slate-400">
              <TableRow>
                <TableHead className="px-4 py-3">Event</TableHead>
                <TableHead className="px-4 py-3">Account</TableHead>
                <TableHead className="px-4 py-3">Source</TableHead>
                <TableHead className="px-4 py-3">Confidence</TableHead>
                <TableHead className="px-4 py-3">Freshness</TableHead>
                <TableHead className="px-4 py-3">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-white/10 bg-slate-950/25">
              {recentIntelligenceEvents.map((row) => (
                <TableRow key={`${row.event}-${row.account}`} className="hover:bg-white/5">
                  <TableCell className="px-4 py-4 font-medium text-slate-50">{row.event}</TableCell>
                  <TableCell className="px-4 py-4 text-slate-300">{row.account}</TableCell>
                  <TableCell className="px-4 py-4 text-slate-300">{row.source}</TableCell>
                  <TableCell className="px-4 py-4 text-slate-300">{row.confidence}</TableCell>
                  <TableCell className="px-4 py-4 text-slate-300">{row.freshness}</TableCell>
                  <TableCell className="px-4 py-4"><Badge variant="secondary" className="rounded-full px-2.5 py-1 text-xs font-semibold text-slate-700">{row.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">Private-beta state: official source connections require provider adapters, compliance gates, and backend services before any live monitoring or alert detection can run.</p>
      </DashboardPanel>
    </div>
  );
}