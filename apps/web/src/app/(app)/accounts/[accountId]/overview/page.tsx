import Link from "next/link";
import { accountOverviewKpis, accountProfile, accountQuickLinks, providerHealth, recentActivity, sourcePolicy } from "@/lib/mock-data/account-overview";

const overviewPreviewBadges = [
  "Preview-only account intelligence",
  "Mock account metrics",
  "No live Instagram data is collected in Alpha",
];

const overviewSafetyNotes = [
  "No account connection runs in Alpha",
  "No backend action runs from this page",
  "Requires official source connection",
  "Requires provider approval where applicable",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
];

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
  if (["Mock only", "No live query", "Not connected"].includes(status)) {
    return "bg-amber-50 text-amber-700 ring-amber-100";
  }

  return "bg-slate-100 text-slate-700 ring-slate-200";
}

export default function Page() {
  return (
    <div className="space-y-6">
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap gap-2">
                {overviewPreviewBadges.map((badge) => (
                  <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Account overview preview</p>
              <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountProfile.displayName} overview</h1>
              <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300">
                Alpha demo only: static profile metadata, media summary, source readiness, freshness posture, and official-source metric placeholders.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
              <p className="font-semibold text-white">Static overview boundary</p>
              <p className="mt-1">No live collection is running. Real account intelligence requires official source connection and provider approval where applicable.</p>
              <button disabled className="mt-4 w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
                Account connection disabled in Alpha
              </button>
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountOverviewKpis.map((kpi) => (
          <div key={kpi.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
              <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(kpi.tone)}`}>{kpi.detail}</span>
            </div>
            <p className="mt-3 text-xs font-medium text-slate-400">Static Alpha preview · mock account metric</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(340px,0.7fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
          <h2 className="text-base font-semibold text-slate-950">Source, freshness, and status grouping</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Static provider-readiness rows for the account overview. No provider query, source activation, or backend write runs in Alpha.</p>
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {providerHealth.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium text-slate-950">{item.label}</p>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ring-1 ${statusClasses(item.status)}`}>{item.status}</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-200/60">
          <h2 className="text-base font-semibold text-slate-950">Preview-only account wording</h2>
          <div className="mt-4 space-y-2">
            {overviewSafetyNotes.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
          <h2 className="text-base font-semibold text-slate-950">Compliance/source policy</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {sourcePolicy.map((item) => (
              <li key={item} className="flex gap-2 rounded-2xl bg-slate-50 p-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
          <div className="flex flex-col gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-base font-semibold text-slate-950">Overview activity table</h2>
              <p className="mt-1 text-sm text-slate-500">Mock account activity prepared for future official provider ingestion.</p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Static preview rows</span>
          </div>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200">
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
                    <td className="px-4 py-4"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">{row.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
