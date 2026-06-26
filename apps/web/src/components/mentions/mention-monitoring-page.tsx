import { MentionMonitoringTable } from "@/components/data-tables/mention-monitoring-table";
import {
  gatedMentionEnrichmentPanel,
  mentionCards,
  mentionComplianceNotice,
  mentionConfidenceLabels,
  mentionFilters,
  mentionFreshnessLabels,
  mentionIntentLabels,
  mentionKpis,
  mentionMonitoringProfile,
  mentionPolicyLabels,
  mentionSentimentLabels,
  mentionSourceMix,
  mentionStatusLabels,
  mentionUrgencyLabels,
  opportunityThemes,
  riskEscalationSignals,
  sentimentTrendPoints,
  type MentionCard,
  type MentionIntent,
  type MentionPanelItem,
  type MentionPolicyClassification,
  type MentionSentiment,
  type MentionStatus,
  type MentionTone,
  type MentionUrgency,
} from "@/lib/mock-data/mentions";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: MentionTone) {
  const tones: Record<MentionTone, string> = {
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

function sentimentClasses(sentiment: MentionSentiment) {
  if (sentiment === "positive") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (sentiment === "neutral") return "bg-slate-100 text-slate-700 ring-slate-200";
  if (sentiment === "mixed") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (sentiment === "negative") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function intentClasses(intent: MentionIntent) {
  if (["praise", "purchase_intent"].includes(intent)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (intent === "question") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (intent === "support") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (intent === "risk") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function urgencyClasses(urgency: MentionUrgency) {
  if (urgency === "low") return "bg-slate-100 text-slate-700 ring-slate-200";
  if (urgency === "medium") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (urgency === "high") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (urgency === "review") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function policyClasses(policy: MentionPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: MentionStatus) {
  if (["open", "triaged", "response_ready"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function MentionsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function KpiCard({ label, value, delta, tone, description }: (typeof mentionKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function MentionsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{mentionMonitoringProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{mentionMonitoringProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{mentionMonitoringProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{mentionMonitoringProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Mention preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{mentionMonitoringProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{mentionMonitoringProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Alpha demo mention preview</p>
          <p className="mt-1">
            Mock mention intelligence previews for public/professional mentions, connected owned-account mentions where applicable, response opportunities, and licensed-provider placeholders only. Listening is disabled in Alpha.
          </p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Mention filters</p>
          <p className="mt-1 text-xs text-slate-500">Static Alpha placeholders for preview sentiment, channel/source, mention type, confidence, and policy-based triage views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {mentionFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: MentionPanelItem[] }) {
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

function IntelligencePanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <MentionsPanel title="Preview sentiment placeholder" subtitle="Mock sentiment trend for mention preview review.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {sentimentTrendPoints.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-emerald-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MentionsPanel>

      <MentionsPanel title="Mention source mix" subtitle="Owned, public/professional, and manual-source placeholders.">
        <SignalList items={mentionSourceMix} />
      </MentionsPanel>

      <MentionsPanel title="Opportunity themes" subtitle="Response and campaign opportunity placeholders.">
        <SignalList items={opportunityThemes} />
      </MentionsPanel>

      <MentionsPanel title="Risk and escalation placeholder" subtitle="Review workflow placeholders without surveillance.">
        <SignalList items={riskEscalationSignals} />
      </MentionsPanel>
    </section>
  );
}

function MentionCardItem({ mention }: { mention: MentionCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-semibold ring-1 ${toneClasses(mention.tone)}`}>
            {mention.avatarInitials}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-950">{mention.sourceName}</h3>
            <p className="mt-1 text-sm text-slate-500">{mention.sourceHandle}</p>
          </div>
        </div>
        <Badge className={statusClasses(mention.status)}>{mentionStatusLabels[mention.status]}</Badge>
      </div>

      <blockquote className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        “{mention.textPreview}”
      </blockquote>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Linked account/post placeholder</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{mention.linkedSurface}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={sentimentClasses(mention.sentiment)}>{mentionSentimentLabels[mention.sentiment]}</Badge>
        <Badge className={intentClasses(mention.intent)}>{mentionIntentLabels[mention.intent]}</Badge>
        <Badge className={urgencyClasses(mention.urgency)}>{mentionUrgencyLabels[mention.urgency]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{mention.mentionType}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Alpha demo next step</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{mention.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{mention.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{mentionFreshnessLabels[mention.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {mention.confidenceScore > 0 ? `${mention.confidenceScore}% ` : ""}{mentionConfidenceLabels[mention.confidence]}
        </Badge>
        <Badge className={policyClasses(mention.policyClassification)}>{mentionPolicyLabels[mention.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function MentionCardsStream() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {mentionCards.map((mention) => (
        <MentionCardItem key={mention.id} mention={mention} />
      ))}
    </section>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedMentionEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedMentionEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedMentionEnrichmentPanel.policyClassification)}>{mentionPolicyLabels[gatedMentionEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedMentionEnrichmentPanel.status)}>{mentionStatusLabels[gatedMentionEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedMentionEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{mentionFreshnessLabels[gatedMentionEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedMentionEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedMentionEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <MentionsPanel title={mentionComplianceNotice.title} subtitle="Mock mention intelligence, connected mention previews where applicable, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{mentionComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public/professional mention preview with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900">Connected account mentions are represented only where official account access is applicable.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment requires private-beta monitoring service review and remains unavailable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 lg:col-span-2">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-5">
          {mentionComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </MentionsPanel>
  );
}

export function MentionMonitoringPage() {
  return (
    <div className="space-y-6">
      <MentionsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {mentionKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <IntelligencePanels />
      <MentionCardsStream />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <MentionMonitoringTable />
    </div>
  );
}