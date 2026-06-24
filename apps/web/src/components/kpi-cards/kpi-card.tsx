export function KpiCard({ label, value, delta }: { label: string; value: string; delta?: string }) {
  return (
    <div className="premium-kpi-card rounded-3xl p-5">
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <div className="mt-4 flex items-end justify-between gap-3">
          <p className="text-3xl font-semibold tracking-tight text-slate-50">{value}</p>
          {delta ? <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">{delta}</span> : null}
        </div>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
        </div>
      </div>
    </div>
  );
}
