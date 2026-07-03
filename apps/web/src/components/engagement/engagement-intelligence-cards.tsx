import {
  accountEngagementConfidenceLabels,
  accountEngagementDirectionLabels,
  accountEngagementFreshnessLabels,
  accountEngagementMetricLabels,
  accountEngagementPolicyLabels,
  accountEngagementStatusLabels,
  engagementAnomalies,
  engagementInsightCards,
  type AccountEngagementDirection,
  type AccountEngagementInsightCard,
  type AccountEngagementPolicyClassification,
  type AccountEngagementStatus,
  type AccountEngagementTone,
} from "@/lib/mock-data/account-engagement";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: AccountEngagementTone) {
  const tones: Record<AccountEngagementTone, string> = {
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

function directionClasses(direction: AccountEngagementDirection) {
  const directions: Record<AccountEngagementDirection, string> = {
    up: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    down: "bg-rose-50 text-rose-700 ring-rose-100",
    stable: "bg-blue-50 text-blue-700 ring-blue-100",
    spike: "bg-green-50 text-green-700 ring-green-100",
    drop: "bg-amber-50 text-amber-700 ring-amber-100",
    watch: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return directions[direction];
}

function policyClasses(policy: AccountEngagementPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function statusClasses(status: AccountEngagementStatus) {
  if (status === "healthy") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "monitoring") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "needs_review") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (status === "anomaly") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function EngagementInsightCard({ insight }: { insight: AccountEngagementInsightCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Aggregated engagement insight</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{insight.title}</h3>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <Badge className={toneClasses(insight.tone)}>{insight.value}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Mock engagement metrics</Badge>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{insight.description}</p>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{insight.suggestedAction}</p>
        <p className="mt-2 text-xs font-medium text-slate-400">No backend action runs from this guidance.</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={directionClasses(insight.direction)}>{accountEngagementDirectionLabels[insight.direction]}</Badge>
        <Badge className={toneClasses(insight.tone)}>{accountEngagementMetricLabels[insight.metric]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{insight.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountEngagementFreshnessLabels[insight.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{insight.confidenceScore}% {accountEngagementConfidenceLabels[insight.confidence]}</Badge>
        <Badge className={policyClasses(insight.policyClassification)}>{accountEngagementPolicyLabels[insight.policyClassification]}</Badge>
        <Badge className={statusClasses(insight.status)}>{accountEngagementStatusLabels[insight.status]}</Badge>
      </div>
    </article>
  );
}

function AnomalyPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">Anomaly review panel</h2>
        <p className="mt-1 text-sm text-slate-500">Mock-only engagement spikes, unusual drops, and aggregate suspicious-pattern placeholders.</p>
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {engagementAnomalies.map((anomaly) => (
          <div key={anomaly.id} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{formatToken(anomaly.type)}</p>
                <h3 className="mt-2 font-semibold text-slate-950">{anomaly.title}</h3>
              </div>
              <Badge className={toneClasses(anomaly.tone)}>{anomaly.value}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{anomaly.description}</p>
            <div className="mt-3">
              <Badge className={statusClasses(anomaly.status)}>{accountEngagementStatusLabels[anomaly.status]}</Badge>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
        Suspicious-pattern detection is represented as a mock aggregate placeholder only. No hidden surveillance, scraping, private-account access, or anti-bot bypass is implemented.
      </p>
    </section>
  );
}

export function EngagementIntelligenceCards() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-3">
        {engagementInsightCards.map((insight) => (
          <EngagementInsightCard key={insight.id} insight={insight} />
        ))}
      </section>

      <AnomalyPanel />
    </div>
  );
}