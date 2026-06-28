import { AlertCenterTable } from "@/components/data-tables/alert-center-table";
import {
  alertCards,
  alertCenterProfile,
  alertComplianceNotice,
  alertConfidenceLabels,
  alertFilters,
  alertFreshnessLabels,
  alertKpis,
  alertPolicyLabels,
  alertPriorityLabels,
  alertStatusLabels,
  alertTypeLabels,
  alertVolumeTrend,
  alertWorkflowSla,
  gatedAlertEnrichmentPanel,
  opportunityCategories,
  priorityMix,
  riskCategories,
  type AlertCard,
  type AlertPanelItem,
  type AlertPolicyClassification,
  type AlertPriority,
  type AlertStatus,
  type AlertTone,
  type AlertType,
} from "@/lib/mock-data/alerts";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: AlertTone) {
  const tones: Record<AlertTone, string> = {
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

function priorityClasses(priority: AlertPriority) {
  if (priority === "critical") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (priority === "high") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (priority === "medium") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (priority === "low") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-violet-50 text-violet-700 ring-violet-100";
}

function typeClasses(type: AlertType) {
  if (type === "risk") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (type === "opportunity") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "anomaly") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "workflow") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "compliance") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-violet-50 text-violet-700 ring-violet-100";
}

function policyClasses(policy: AlertPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: AlertStatus) {
  if (["open", "triaged", "in_progress"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "resolved") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function AlertsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof alertKpis)[number]) {
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

function AlertsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{alertCenterProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{alertCenterProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Fresh {alertCenterProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{alertCenterProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Risk and opportunity triage</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{alertCenterProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{alertCenterProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only alert command center</p>
          <p className="mt-1">
            Premium alerting for connected account signals, public/professional monitoring where applicable, workflow triage, and licensed-provider placeholders only.
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
          <p className="text-sm font-semibold text-slate-950">Alert filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for priority, alert type, status, source, confidence, and policy-based triage views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {alertFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: AlertPanelItem[] }) {
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
      <AlertsPanel title="Alert volume trend placeholder" subtitle="Mock alert volume across risk, opportunity, and workflow triage.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {alertVolumeTrend.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-rose-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AlertsPanel>

      <AlertsPanel title="Priority mix" subtitle="Static priority distribution for queue planning.">
        <SignalList items={priorityMix} />
      </AlertsPanel>

      <AlertsPanel title="Risk categories" subtitle="Risk and compliance review placeholders.">
        <SignalList items={riskCategories} />
      </AlertsPanel>

      <AlertsPanel title="Opportunity categories" subtitle="Opportunity notification placeholders for campaign and response planning.">
        <SignalList items={opportunityCategories} />
      </AlertsPanel>
    </section>
  );
}

function AlertCardItem({ alert }: { alert: AlertCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{alert.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{alert.description}</p>
        </div>
        <Badge className={statusClasses(alert.status)}>{alertStatusLabels[alert.status]}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Linked account/signal placeholder</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{alert.linkedSignal}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={priorityClasses(alert.priority)}>{alertPriorityLabels[alert.priority]}</Badge>
        <Badge className={typeClasses(alert.type)}>{alertTypeLabels[alert.type]}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{alert.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{alert.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{alertFreshnessLabels[alert.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {alert.confidenceScore > 0 ? `${alert.confidenceScore}% ` : ""}{alertConfidenceLabels[alert.confidence]}
        </Badge>
        <Badge className={policyClasses(alert.policyClassification)}>{alertPolicyLabels[alert.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function AlertCardsQueue() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {alertCards.map((alert) => (
        <AlertCardItem key={alert.id} alert={alert} />
      ))}
    </section>
  );
}

function WorkflowSlaPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mock-only workflow and SLA placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Workflow triage status</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{alertWorkflowSla.mockOnlyNotice}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{alertWorkflowSla.owner}</Badge>
          <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{alertWorkflowSla.responseStatus}</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">{alertWorkflowSla.escalationStatus}</Badge>
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {alertWorkflowSla.items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
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

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedAlertEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedAlertEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedAlertEnrichmentPanel.policyClassification)}>{alertPolicyLabels[gatedAlertEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedAlertEnrichmentPanel.status)}>{alertStatusLabels[gatedAlertEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedAlertEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{alertFreshnessLabels[gatedAlertEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedAlertEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedAlertEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <AlertsPanel title={alertComplianceNotice.title} subtitle="Connected account alerts, public/professional monitoring, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{alertComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Connected account and public/professional monitoring framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment is licensed-provider-only and unavailable until configured.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {alertComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </AlertsPanel>
  );
}

export function AlertCenterPage() {
  return (
    <div className="space-y-6">
      <AlertsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {alertKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <IntelligencePanels />
      <AlertCardsQueue />
      <WorkflowSlaPanel />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <AlertCenterTable />
    </div>
  );
}