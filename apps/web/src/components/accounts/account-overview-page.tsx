import Link from "next/link";
import {
  accountOverviewKpis,
  accountProfile,
  accountQuickLinks,
  accountTrendPoints,
  anomalyHighlights,
  providerHealth,
  recentActivity,
  recentCollectionJobs,
  sourcePolicy,
} from "@/lib/mock-data/account-overview";

function toneClasses(tone: string) {
  const tones: Record<string, string> = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return tones[tone] ?? tones.slate;
}

function statusClasses(status: string) {
  if (["Healthy", "Current", "Approved", "Succeeded", "Synced", "Stored", "Official safe"].includes(status)) {
    return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  }

  if (["Needs review", "High"].includes(status)) {
    return "bg-amber-50 text-amber-700 ring-amber-100";
  }

  return "bg-slate-100 text-slate-700 ring-slate-200";
}

const accountPreviewBadges = [
  "Preview-only account intelligence",
  "Mock account metrics",
  "No live Instagram data is collected in Alpha",
];

const accountOperationalChecks = [
  "No account connection runs in Alpha",
  "No backend action runs from this page",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const accountSafetyChecks = [
  "Mock profile and metric snapshot only",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
  "Restricted identity-level features remain disabled or licensed-provider-only",
];

function AccountKpiCard({ label, value, detail, tone }: { label: string; value: string; detail: string; tone: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{detail}</span>
      </div>
    </div>
  );
}

function AccountPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

export function AccountOverviewPage() {
  return (
    <div className="space-y-6">
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[2rem] border border-white/10 bg-white/10 text-2xl font-semibold text-white shadow-sm shadow-slate-950/30">
                {accountProfile.avatarInitials}
              </div>
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap gap-2">
                  {accountPreviewBadges.map((badge) => (
                    <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Account profile preview</p>
                <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountProfile.displayName}</h1>
                <p className="mt-2 text-base text-slate-300">{accountProfile.handle} · {accountProfile.accountType}</p>
                <p className="mt-1 text-sm text-slate-400">Source classification: {accountProfile.sourceClassification}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
              <p className="font-semibold text-white">Official-first account intelligence</p>
              <p className="mt-1 leading-6">Alpha demo data is mock/preview only. Live data requires an official source connection, and restricted identity-level features require licensed provider review.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-100 ring-1 ring-indigo-300/20">{accountProfile.provider}</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/20">Mock confidence: {accountProfile.confidence}</span>
                <span className="rounded-full bg-slate-400/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-slate-300/20">Freshness: {accountProfile.freshness}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav className="flex gap-2 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/70" aria-label="Account sections">
        {accountQuickLinks.map((link) => {
          const active = link.label === "Overview";

          return (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "flex whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition",
                active ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              ].join(" ")}
            >
              <span className="flex items-center gap-2">
                {link.label}
                {link.badge ? (
                  <span className={active ? "rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white" : "rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-100"}>
                    {link.badge}
                  </span>
                ) : null}
              </span>
            </Link>
          );
        })}
      </nav>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-950">Alpha account operation posture</h2>
              <p className="mt-1 text-sm leading-6 text-slate-500">Controls remain clearly disabled while the profile, metrics, source state, and actions stay static for Alpha review.</p>
            </div>
            <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 sm:w-auto">
              Account connection disabled in Alpha
            </button>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {accountOperationalChecks.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm font-medium text-slate-700">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-200/60">
          <h2 className="text-base font-semibold text-slate-950">Preview safety boundary</h2>
          <div className="mt-4 space-y-2">
            {accountSafetyChecks.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountOverviewKpis.map((kpi) => (
          <AccountKpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.8fr)]">
        <AccountPanel title="Audience and engagement trend" subtitle="Mock visual placeholder for account-level reach, engagement, mentions, and confidence.">
          <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">Mock account metrics</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">Static Alpha demo</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">No live collection</span>
            </div>
            <div className="flex h-72 items-end gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:gap-4 sm:p-5">
              {accountTrendPoints.map((point) => (
                <div key={point.label} className="flex min-w-0 flex-1 flex-col items-center gap-3">
                  <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-indigo-950/30" style={{ height: `${point.height}%` }} />
                  <div className="text-center">
                    <p className="text-xs text-slate-300">{point.label}</p>
                    <p className="text-sm font-semibold">{point.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AccountPanel>

        <AccountPanel title="Source and policy notice" subtitle="Mock preview only; no scraping or private account access.">
          <div className="space-y-3 text-sm">
            <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">This account overview uses Alpha mock data and does not connect to a backend. No live Instagram data is collected in Alpha, and live data requires official APIs or approved licensed providers only.</p>
            <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Restricted identity-level features remain disabled in Alpha pending licensed provider review. Private account access, scraping, anti-bot bypass, fake login automation, and hidden surveillance are not implemented.</p>
          </div>
        </AccountPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-4">
        <AccountPanel title="Provider health">
          <div className="space-y-3">
            {providerHealth.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{item.label}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ring-1 ${statusClasses(item.status)}`}>{item.status}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{item.value}</p>
              </div>
            ))}
          </div>
        </AccountPanel>

        <AccountPanel title="Compliance/source policy">
          <ul className="space-y-3 text-sm text-slate-600">
            {sourcePolicy.map((item) => (
              <li key={item} className="flex gap-2 rounded-2xl bg-slate-50 p-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />{item}</li>
            ))}
          </ul>
        </AccountPanel>

        <AccountPanel title="Mock collection job previews">
          <div className="space-y-3">
            {recentCollectionJobs.map((job) => (
              <div key={`${job.job}-${job.freshness}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{job.job}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ring-1 ${statusClasses(job.status)}`}>{job.status}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{job.source} · {job.freshness}</p>
              </div>
            ))}
          </div>
        </AccountPanel>

        <AccountPanel title="Anomaly highlights">
          <div className="space-y-3">
            {anomalyHighlights.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ring-1 ${statusClasses(item.severity)}`}>{item.severity}</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </AccountPanel>
      </section>

      <AccountPanel title="Recent activity" subtitle="Mock account activity prepared for future official provider ingestion.">
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full min-w-[820px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Event</th>
                <th className="px-4 py-3">Direction</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">Confidence</th>
                <th className="px-4 py-3">Freshness</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {recentActivity.map((row) => (
                <tr key={`${row.event}-${row.freshness}`} className="hover:bg-slate-50/70">
                  <td className="px-4 py-4 font-medium text-slate-950">{row.event}</td>
                  <td className="px-4 py-4 text-slate-600">{row.direction}</td>
                  <td className="px-4 py-4 text-slate-600">{row.source}</td>
                  <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                  <td className="px-4 py-4 text-slate-600">{row.freshness}</td>
                  <td className="px-4 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses(row.status)}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AccountPanel>
    </div>
  );
}