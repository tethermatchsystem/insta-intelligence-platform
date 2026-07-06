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

const alphaMentionSafetyBadges = [
  "Preview-only mention intelligence",
  "Mock mention signals",
  "No live Instagram data is collected in Alpha",
  "No mention monitoring runs in Alpha",
  "No backend action runs from this page",
  "Public, owned, or approved-source data only",
  "No private DM access",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const mentionTriageLanes: Array<{ title: string; value: string; detail: string; tone: MentionTone }> = [
  {
    title: "Owned mention queue",
    value: "46% mix",
    detail: "Connected owned/public mention previews are grouped for analyst review where official account access is applicable.",
    tone: "green",
  },
  {
    title: "Brand-safety review",
    value: "8 urgent",
    detail: "Mock risk and escalation placeholders help teams explain review logic without hidden surveillance or private account access.",
    tone: "rose",
  },
  {
    title: "Opportunity grouping",
    value: "57 prompts",
    detail: "Positive, product-question, and UGC opportunities are organized for future response planning and campaign follow-up workflows.",
    tone: "purple",
  },
  {
    title: "Source-readiness gate",
    value: "Gated",
    detail: "Future monitoring requires official source connection and provider approval where applicable; no provider action runs from this page.",
    tone: "amber",
  },
];

const responseReadinessCards: Array<{ title: string; queue: string; detail: string; tone: MentionTone }> = [
  {
    title: "Thank-you response plan",
    queue: "Positive owned/public mentions",
    detail: "Mock mention signals identify safe response candidates, but no response is sent and no backend action runs in Alpha.",
    tone: "purple",
  },
  {
    title: "Support handoff draft",
    queue: "Product questions and mixed sentiment",
    detail: "Static triage notes help QA preview support-routing logic without notifications, jobs, or live provider access.",
    tone: "blue",
  },
  {
    title: "Brand-safety hold",
    queue: "Claim context and urgent review",
    detail: "Risky mention previews stay in analyst review until source provenance and policy posture are verified.",
    tone: "amber",
  },
];

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
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
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
    <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
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
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only mention intelligence</Badge>
            <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{mentionMonitoringProfile.sourceBadge}</Badge>
            <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{mentionMonitoringProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{mentionMonitoringProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100/10 text-slate-200 ring-white/15">{mentionMonitoringProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200">Brand-safety triage workspace</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Mention intelligence triage</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
            {mentionMonitoringProfile.description} Use this static workspace to review mention queues, sentiment/risk/opportunity groups, source readiness, and response planning without implying live mention monitoring or private DM access.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaMentionSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha mention boundary</p>
          <p className="mt-1">
            Mock mention signals and triage cards only. No live Instagram data is collected in Alpha, no mention monitoring runs in Alpha, no private DM access exists, and no backend/provider action runs from this page.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Public/owned/approved-source future path</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">No hidden surveillance</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static triage filters</p>
          <p className="mt-1 text-xs text-slate-500">
            Disabled Alpha controls for preview sentiment, channel/source, mention type, confidence, and policy triage. No live query, refresh, export, response, or monitor is available.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only controls</Badge>
          {mentionFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Monitor disabled in Alpha
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Response action disabled
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Refresh disabled
        </button>
        <button className="cursor-not-allowed rounded-full bg-white px-3 py-1 text-slate-400 ring-1 ring-slate-200" type="button" disabled>
          Export disabled
        </button>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No backend action runs from this page</span>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: MentionPanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
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
    <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <MentionsPanel title="Sentiment triage preview" subtitle="Mock sentiment trend for queue review; no live mention monitoring runs.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Mock mention signals</p>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">Static preview</span>
          </div>
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

      <MentionsPanel title="Mention source readiness" subtitle="Owned, public/professional, and manual-source placeholders with source gates.">
        <SignalList items={mentionSourceMix} />
      </MentionsPanel>

      <MentionsPanel title="Opportunity grouping" subtitle="Response and campaign opportunity placeholders for future planning.">
        <SignalList items={opportunityThemes} />
      </MentionsPanel>

      <MentionsPanel title="Risk and escalation queue" subtitle="Brand-safety review placeholders without surveillance, private accounts, or DMs.">
        <SignalList items={riskEscalationSignals} />
      </MentionsPanel>
    </section>
  );
}

function MentionTriageWorkspace() {
  return (
    <section className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
      <MentionsPanel title="Mention triage queue board" subtitle="A static operational board for owned/public mention review, risk grouping, and source-readiness planning.">
        <div className="grid gap-3 md:grid-cols-2">
          {mentionTriageLanes.map((lane) => (
            <div key={lane.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <p className="font-semibold text-slate-950">{lane.title}</p>
                <Badge className={toneClasses(lane.tone)}>{lane.value}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{lane.detail}</p>
            </div>
          ))}
        </div>
      </MentionsPanel>

      <MentionsPanel title="Response-readiness cards" subtitle="Mock planning prompts only; no response is sent and no notification/job runs.">
        <div className="space-y-3">
          {responseReadinessCards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-950">{card.title}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{card.queue}</p>
                </div>
                <Badge className={toneClasses(card.tone)}>Mock response plan</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.detail}</p>
            </div>
          ))}
        </div>
      </MentionsPanel>
    </section>
  );
}

function MentionCardItem({ mention }: { mention: MentionCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-4">
          <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-base font-semibold ring-1 ${toneClasses(mention.tone)}`}>
            {mention.avatarInitials}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Triage queue item</p>
            <h3 className="text-lg font-semibold text-slate-950">{mention.sourceName}</h3>
            <p className="mt-1 text-sm text-slate-500">{mention.sourceHandle}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only mention card</Badge>
          <Badge className={statusClasses(mention.status)}>{mentionStatusLabels[mention.status]}</Badge>
        </div>
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
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview response guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{mention.recommendedAction}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs font-medium leading-5 text-amber-900">
        No mention monitoring runs in Alpha. No private DM access. Requires official source connection or provider approval where applicable before future use.
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
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
      {mentionCards.map((mention) => (
        <MentionCardItem key={mention.id} mention={mention} />
      ))}
    </section>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-5 shadow-sm shadow-amber-100/70">
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
        <Badge className="bg-white text-amber-800 ring-amber-200">No backend action runs from this page</Badge>
        <Badge className="bg-white text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
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
    <MentionsPanel title={mentionComplianceNotice.title} subtitle="Preview-only mention intelligence, mock mention signals, connected mention previews where applicable, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{mentionComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Requires official source connection before any future private-beta data path.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public, owned, or approved-source data only with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4 text-cyan-900">Connected account mentions are represented only where official account access is applicable.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment requires private-beta monitoring service review and remains unavailable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 lg:col-span-2">No mention monitoring runs in Alpha. No private DM access. No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
      <MentionTriageWorkspace />
      <MentionCardsStream />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <MentionMonitoringTable />
    </div>
  );
}