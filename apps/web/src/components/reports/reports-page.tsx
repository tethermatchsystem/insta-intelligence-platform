import { ReportLibraryTable } from "@/components/data-tables/report-library-table";
import {
  executiveSummaryPreview,
  exportReadiness,
  gatedReportEnrichmentPanel,
  reportCards,
  reportComplianceNotice,
  reportConfidenceLabels,
  reportFilters,
  reportFreshnessLabels,
  reportKpis,
  reportPolicyLabels,
  reportStatusLabels,
  reportTypeLabels,
  reportsProfile,
  reportTypeMix,
  reviewComplianceQueue,
  scheduledReportCadence,
  type ReportCard,
  type ReportPanelItem,
  type ReportPolicyClassification,
  type ReportStatus,
  type ReportTone,
  type ReportType,
} from "@/lib/mock-data/reports";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: ReportTone) {
  const tones: Record<ReportTone, string> = {
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

function typeClasses(type: ReportType) {
  if (type === "executive_summary") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "client_export") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "campaign_report") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "benchmark_report") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "compliance_review") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function policyClasses(policy: ReportPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: ReportStatus) {
  if (["ready", "scheduled"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "draft") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function ReportsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof reportKpis)[number]) {
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

function ReportsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{reportsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{reportsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Static {reportsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{reportsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Executive insight packaging</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{reportsProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{reportsProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only reporting workspace</p>
          <p className="mt-1">
            Mock report previews for connected account summaries, public/professional intelligence, client export previews, and licensed-provider placeholders only. Generation disabled in Alpha.
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
          <p className="text-sm font-semibold text-slate-950">Report filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for report type, workspace/client, date range, status, source, confidence, and policy classification.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {reportFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: ReportPanelItem[] }) {
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

function ReportLibraryPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <ReportsPanel title="Scheduled delivery preview" subtitle="Scheduled delivery requires backend; this is a static cadence placeholder only.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {scheduledReportCadence.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-violet-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReportsPanel>

      <ReportsPanel title="Report type mix" subtitle="Mock report templates, client export previews, and benchmark placeholders.">
        <SignalList items={reportTypeMix} />
      </ReportsPanel>

      <ReportsPanel title="Export preview readiness" subtitle="Preview-only export status; export jobs require backend.">
        <SignalList items={exportReadiness} />
      </ReportsPanel>

      <ReportsPanel title="Review and compliance queue" subtitle="Source, policy, and client-readiness review placeholders.">
        <SignalList items={reviewComplianceQueue} />
      </ReportsPanel>
    </section>
  );
}

function ReportCardItem({ report }: { report: ReportCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{report.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{report.linkedWorkspace}</p>
        </div>
        <Badge className={statusClasses(report.status)}>{reportStatusLabels[report.status]}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={typeClasses(report.type)}>{reportTypeLabels[report.type]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{report.dateRange}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Preview guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{report.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{report.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{reportFreshnessLabels[report.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {report.confidenceScore > 0 ? `${report.confidenceScore}% ` : ""}{reportConfidenceLabels[report.confidence]}
        </Badge>
        <Badge className={policyClasses(report.policyClassification)}>{reportPolicyLabels[report.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function ReportCardsGrid() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {reportCards.map((report) => (
        <ReportCardItem key={report.id} report={report} />
      ))}
    </section>
  );
}

function ExecutiveSummaryPreviewPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mock-only executive summary preview</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">{executiveSummaryPreview.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{executiveSummaryPreview.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{executiveSummaryPreview.dateRange}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No live backend</Badge>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        {executiveSummaryPreview.notice}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <ul className="space-y-3">
          {executiveSummaryPreview.bullets.map((bullet) => (
            <li key={bullet} className="rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-6 text-slate-700">
              {bullet}
            </li>
          ))}
        </ul>
        <SignalList items={executiveSummaryPreview.metrics} />
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
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedReportEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedReportEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedReportEnrichmentPanel.policyClassification)}>{reportPolicyLabels[gatedReportEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedReportEnrichmentPanel.status)}>{reportStatusLabels[gatedReportEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedReportEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{reportFreshnessLabels[gatedReportEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedReportEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedReportEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <ReportsPanel title={reportComplianceNotice.title} subtitle="Connected account report previews, public/professional intelligence, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{reportComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Connected account and public/professional intelligence framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment and export automation previews are licensed-provider-only and unavailable until configured.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {reportComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </ReportsPanel>
  );
}

export function ReportsPage() {
  return (
    <div className="space-y-6">
      <ReportsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {reportKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <ReportLibraryPanels />
      <ReportCardsGrid />
      <ExecutiveSummaryPreviewPanel />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <ReportLibraryTable />
    </div>
  );
}