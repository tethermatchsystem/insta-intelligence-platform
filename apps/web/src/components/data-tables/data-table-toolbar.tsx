export function DataTableToolbar() {
  return (
    <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between" aria-label="Static Alpha table filter toolbar">
      <span className="font-semibold text-slate-700">Filter preview toolbar</span>
      <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-200">No live query is running</span>
    </div>
  );
}
