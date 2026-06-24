import { SystemStateBadge } from "@/components/system-states/system-state";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ChartCard({ title = "Analytics chart" }: { title?: string }) {
  return (
    <Card className="premium-card rounded-3xl py-0">
      <CardHeader className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle className="text-base font-semibold text-slate-50">{title}</CardTitle>
          <CardDescription className="mt-1 text-sm text-slate-400">Premium chart placeholder prepared for official-safe analytics and mock provider snapshots.</CardDescription>
        </div>
        <div className="flex flex-wrap gap-2">
          <SystemStateBadge badge={{ label: "Chart-ready", tone: "info" }} />
          <SystemStateBadge badge={{ label: "No live query", tone: "warning" }} />
        </div>
      </CardHeader>
      <Separator className="bg-white/10" />
      <CardContent className="p-5 pt-4">
        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/80 p-5 text-white shadow-2xl shadow-black/25">
          <div className="premium-chart-grid grid h-56 min-w-[420px] grid-cols-6 content-end gap-3 rounded-2xl border border-white/10 p-4">
            {[52, 78, 61, 86, 72, 94].map((height, index) => (
              <div key={`${height}-${index}`} className="flex flex-col justify-end rounded-2xl border border-white/10 bg-white/5 p-2 shadow-inner shadow-black/20">
                <div className="rounded-xl bg-gradient-to-t from-cyan-300 via-sky-200 to-white shadow-lg shadow-cyan-950/30" style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 text-xs leading-5 text-slate-300 md:grid-cols-3">
            <p className="rounded-2xl border border-white/10 bg-white/10 p-3">Empty/loading chart states retain context and source posture.</p>
            <p className="rounded-2xl border border-white/10 bg-white/10 p-3">Live provider integrations remain disabled in this frontend batch.</p>
            <p className="rounded-2xl border border-white/10 bg-white/10 p-3">Use official APIs, owned account webhooks, or approved providers only.</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="rounded-full bg-emerald-300/10 text-emerald-100">Instagram Graph API-ready</Badge>
          <Badge variant="outline" className="rounded-full border-cyan-300/20 bg-cyan-300/10 text-cyan-100">Meta Marketing API-ready</Badge>
          <Badge variant="outline" className="rounded-full border-amber-300/20 bg-amber-300/10 text-amber-100">Licensed provider adapter only where required</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
