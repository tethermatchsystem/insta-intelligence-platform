import { accountFilters, accountKpis, accountRows } from "@/lib/mock-data/accounts";

function toneClasses(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return tones[tone] ?? tones.slate;
}

function statusClasses(status: string) {
  const statuses: Record<string, string> = {
    Connected: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    Watchlisted: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    Review: "bg-amber-50 text-amber-700 ring-amber-100",
    Imported: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return statuses[status] ?? statuses.Imported;
}

function AccountKpiCard({ label, value, detail, tone }: { label: string; value: string; detail: string; tone: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{detail}</span>
      </div>
    </div>
  );
}

export function AccountsListPage() {
  return (
    <div className="space-y-6">
      <header className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100">Official-safe accounts</span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">Connected professional accounts</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">Mock data only</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Accounts</h1>
            <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
              Monitor connected business and creator accounts, professional-account watchlists, provider freshness, and review status from one intelligence surface.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 xl:w-96">
            <p className="font-semibold text-slate-900">Provider and compliance notice</p>
            <p className="mt-1 leading-6">
              This mock view supports official APIs, connected accounts, manual imports, and licensed compliant providers only. Scraping and private account access are not implemented.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {accountKpis.map((kpi) => (
          <AccountKpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Search and filters</h2>
            <p className="mt-1 text-sm text-slate-500">Placeholder controls for future live filtering and saved account views.</p>
          </div>
          <button type="button" className="w-full rounded-2xl border border-slate-200 bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm sm:w-auto">Preview account list workflow</button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {accountFilters.map((filter) => (
            <label key={filter} className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{filter}</span>
              <input className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm outline-none placeholder:text-slate-400 focus:border-slate-400 focus:bg-white" placeholder={`Filter by ${filter.toLowerCase()}`} />
            </label>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-col gap-2 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Enterprise accounts table</h2>
            <p className="mt-1 text-sm text-slate-500">Mock account intelligence rows with provider provenance and confidence signals.</p>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{accountRows.length} mock rows</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">Account</th>
                <th className="px-5 py-3">Handle</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Followers</th>
                <th className="px-5 py-3">Engagement</th>
                <th className="px-5 py-3">Provider</th>
                <th className="px-5 py-3">Confidence</th>
                <th className="px-5 py-3">Freshness</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {accountRows.map((row) => (
                <tr key={row.handle} className="hover:bg-slate-50/70">
                  <td className="px-5 py-4 font-medium text-slate-950">{row.account}</td>
                  <td className="px-5 py-4 text-slate-600">{row.handle}</td>
                  <td className="px-5 py-4 text-slate-600">{row.type}</td>
                  <td className="px-5 py-4 text-slate-600">{row.followers}</td>
                  <td className="px-5 py-4 text-slate-600">{row.engagement}</td>
                  <td className="px-5 py-4 text-slate-600">{row.provider}</td>
                  <td className="px-5 py-4 text-slate-600">{row.confidence}</td>
                  <td className="px-5 py-4 text-slate-600">{row.freshness}</td>
                  <td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses(row.status)}`}>{row.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Disabled until official source is connected</p>
        <p className="mt-1 leading-6">
          Future batches will connect official Meta APIs, Business Discovery, Ad Library, licensed compliant providers, and manual CSV imports after provider adapters and compliance gates are implemented.
        </p>
      </section>
    </div>
  );
}