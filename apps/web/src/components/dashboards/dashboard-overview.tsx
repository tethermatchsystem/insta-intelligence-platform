import {
  anomalyHighlights,
  complianceCoverage,
  dashboardKpis,
  dashboardTrendLabels,
  providerHealth,
  recentCollectionJobs,
  recentIntelligenceEvents,
} from "@/lib/mock-data/dashboard";

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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{trend}</span>
      </div>
      <p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    </div>
  );
}

function DashboardPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">Official-safe workspace</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">Provider confidence 98.2%</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">No live integrations yet</span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950">Dashboard</h1>
            <p className="mt-2 max-w-3xl text-base text-slate-600">Connected professional account intelligence across owned media, mentions, competitor benchmarks, and provider freshness.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 xl:w-80">
            <p className="font-semibold text-slate-900">Mock freshness note</p>
            <p className="mt-1 leading-6">Dashboard data is static Batch 1B mock data. Future batches will connect official Meta APIs and licensed compliant providers only.</p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dashboardKpis.map((kpi) => (
          <DashboardKpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.8fr)]">
        <DashboardPanel title="Audience and engagement trend" subtitle="Mock visual placeholder for followers, engagement, mentions, alerts, and provider confidence.">
          <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white">
            <div className="flex h-72 items-end gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              {dashboardTrendLabels.map((item) => (
                <div key={item.label} className="flex flex-1 flex-col items-center gap-3">
                  <div className={`w-full rounded-t-2xl bg-white/80 shadow-lg shadow-indigo-950/30 ${item.height}`} />
                  <div className="text-center">
                    <p className="text-xs text-slate-300">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DashboardPanel>

        <DashboardPanel title="Official-first notice" subtitle="Future live data must pass provider and policy gates.">
          <div className="space-y-3 text-sm text-slate-600">
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">No live integrations are connected in this mock dashboard. Scraping, anti-bot bypass, private account access, and hidden surveillance are not implemented.</p>
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Allowed sources: official Meta APIs, connected professional account analytics, Business Discovery, hashtag/public content APIs, Ad Library, licensed compliant providers, mock providers, and manual CSV import.</p>
          </div>
        </DashboardPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
        <DashboardPanel title="Provider health">
          <div className="space-y-3">
            {providerHealth.map((provider) => (
              <div key={provider.name} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{provider.name}</p>
                  <span className="rounded-full bg-white px-2 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{provider.status}</span>
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

        <DashboardPanel title="Recent collection jobs">
          <div className="space-y-3">
            {recentCollectionJobs.map((job) => (
              <div key={`${job.job}-${job.time}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <p className="font-medium text-slate-900">{job.job}</p>
                <p className="mt-1 text-xs text-slate-500">{job.source} · {job.status} · {job.time}</p>
              </div>
            ))}
          </div>
        </DashboardPanel>

        <DashboardPanel title="Anomaly highlights">
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

      <DashboardPanel title="Recent intelligence events" subtitle="Mock event stream prepared for future official provider ingestion.">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full min-w-[860px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">Account</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Confidence</th>
                <th className="px-4 py-3">Freshness</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {recentIntelligenceEvents.map((row) => (
                <tr key={`${row.event}-${row.account}`}>
                  <td className="px-4 py-4 font-medium text-slate-950">{row.event}</td>
                  <td className="px-4 py-4 text-slate-600">{row.account}</td>
                  <td className="px-4 py-4 text-slate-600">{row.source}</td>
                  <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                  <td className="px-4 py-4 text-slate-600">{row.freshness}</td>
                  <td className="px-4 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-500">Future state: connect live official Meta API, Business Discovery, Ad Library, and licensed-provider events after provider adapters and compliance gates are implemented.</p>
      </DashboardPanel>
    </div>
  );
}