import { SystemStateBadge } from "@/components/system-states/system-state";

export function ChartCard({ title = "Analytics chart" }: { title?: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="font-semibold text-slate-950">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">Premium chart placeholder prepared for official-safe analytics and mock provider snapshots.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <SystemStateBadge badge={{ label: "Chart-ready", tone: "info" }} />
          <SystemStateBadge badge={{ label: "No live query", tone: "warning" }} />
        </div>
      </div>
      <div className="overflow-x-auto rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white">
        <div className="grid h-52 min-w-[420px] grid-cols-6 content-end gap-3">
          {[52, 78, 61, 86, 72, 94].map((height, index) => (
            <div key={`${height}-${index}`} className="flex flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-2">
              <div className="rounded-xl bg-white/70" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 text-xs leading-5 text-slate-300 md:grid-cols-3">
          <p className="rounded-2xl bg-white/10 p-3">Empty/loading chart states should retain context and source posture.</p>
          <p className="rounded-2xl bg-white/10 p-3">Live provider integrations remain disabled in this frontend batch.</p>
          <p className="rounded-2xl bg-white/10 p-3">Use official APIs, owned account webhooks, or approved providers only.</p>
        </div>
      </div>
    </section>
  );
}
