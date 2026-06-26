import {
  audienceFitSegments,
  brandSafetyOverview,
  creatorCategoryMix,
  growthOpportunities,
  type CreatorDiscoveryPanelItem,
  type CreatorDiscoveryTone,
} from "@/lib/mock-data/creator-discovery";

function toneClasses(tone: CreatorDiscoveryTone) {
  const tones: Record<CreatorDiscoveryTone, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function DiscoveryPanel({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
      {children}
    </section>
  );
}

function SignalList({ items }: { items: CreatorDiscoveryPanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center justify-between gap-3">
            <p className="font-medium text-slate-950">{item.title}</p>
            <Badge className={toneClasses(item.tone)}>{item.value}</Badge>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

export function CreatorDiscoveryPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <DiscoveryPanel title="Creator category mix" subtitle="Mock category distribution for Alpha creator previews.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {creatorCategoryMix.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-indigo-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DiscoveryPanel>

      <DiscoveryPanel title="Audience preview segments" subtitle="Connected overlap previews and mock public-signal placeholders.">
        <SignalList items={audienceFitSegments} />
      </DiscoveryPanel>

      <DiscoveryPanel title="Brand safety overview" subtitle="Review workflow placeholders without surveillance.">
        <SignalList items={brandSafetyOverview} />
      </DiscoveryPanel>

      <DiscoveryPanel title="Planning opportunity preview" subtitle="Mock opportunities for campaign planning only.">
        <SignalList items={growthOpportunities} />
      </DiscoveryPanel>
    </section>
  );
}