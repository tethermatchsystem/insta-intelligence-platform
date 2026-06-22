export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm lg:hidden">
            Menu
          </button>
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Workspace</p>
            <p className="text-sm font-semibold text-slate-900">ACME Agency</p>
          </div>
          <div className="hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm sm:block">
            <span className="font-semibold">Provider freshness:</span> 2m mock
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-[minmax(220px,1fr)_auto_auto] xl:w-[760px]">
          <label className="relative block">
            <span className="sr-only">Search accounts</span>
            <input
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
              placeholder="Search accounts, creators, campaigns..."
            />
          </label>
          <button className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm">
            Last 30 days
          </button>
          <button className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white">AA</span>
            <span className="hidden sm:inline">Analyst</span>
          </button>
        </div>
      </div>
    </header>
  );
}
