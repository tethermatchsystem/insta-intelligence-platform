export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-3 py-3 backdrop-blur sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <span className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm lg:hidden">
            Mobile nav below
          </span>
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Workspace</p>
            <p className="truncate text-sm font-semibold text-slate-900">ACME Agency</p>
          </div>
          <div className="hidden rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-800 shadow-sm sm:block">
            <span className="font-semibold">Mock freshness:</span> static preview
          </div>
        </div>

        <div className="grid w-full min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto] 2xl:w-[760px]">
          <label className="relative block">
            <span className="sr-only">Search accounts</span>
            <input
              readOnly
              className="h-11 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
              placeholder="Search preview: accounts, creators, campaigns..."
            />
          </label>
          <div className="grid h-11 place-items-center rounded-2xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm">
            Range preview
          </div>
          <div className="flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white">AA</span>
            <span className="hidden sm:inline">Analyst preview</span>
          </div>
        </div>
      </div>
    </header>
  );
}
