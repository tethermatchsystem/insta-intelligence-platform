import {
  salesSupportQuestions,
  sentimentThemes,
  urgentComments,
  type AccountCommentInsightItem,
  type AccountCommentTone,
} from "@/lib/mock-data/account-comments";

function toneClasses(tone: AccountCommentTone) {
  const tones: Record<AccountCommentTone, string> = {
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

function IntelligencePanel({ title, subtitle, items }: { title: string; subtitle: string; items: AccountCommentInsightItem[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

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
    </section>
  );
}

export function AccountCommentIntelligencePanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <IntelligencePanel title="Urgent comments" subtitle="High-priority mock comments for moderation or support triage." items={urgentComments} />
      <IntelligencePanel title="Sales/support questions" subtitle="Commerce and support opportunities detected in owned comments." items={salesSupportQuestions} />
      <IntelligencePanel title="Sentiment themes" subtitle="Mock themes summarizing comment tone and response strategy." items={sentimentThemes} />
    </section>
  );
}