import Link from "next/link";
import { ReportLibraryTable } from "@/components/data-tables/report-library-table";
import {
  executiveSummaryPreview,
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

const alphaReportSafetyBadges = [
  "Preview-only reports",
  "No report is generated in Alpha",
  "No backend action runs from this page",
  "No live Instagram data is collected in Alpha",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const reportStudioSourceReadiness: ReportPanelItem[] = [
  {
    id: "executive-kpi-source",
    title: "Executive KPI source-readiness",
    value: "Mock ready",
    detail: "Static readiness label for owned and connected professional account summary metrics. No live source query runs.",
    tone: "green",
  },
  {
    id: "benchmark-source-review",
    title: "Benchmark source review",
    value: "Policy review",
    detail: "Future benchmark sections require official-source or approved licensed-provider paths before any live enrichment is evaluated.",
    tone: "amber",
  },
  {
    id: "identity-enrichment-blocked",
    title: "Identity-level enrichment",
    value: "Disabled",
    detail: "Restricted identity-level enrichment, private access, scraping, hidden surveillance, and report backfills stay disabled in Alpha.",
    tone: "rose",
  },
];

const reportStudioTemplates = [
  {
    name: "Executive performance narrative",
    owner: "CMO / leadership review",
    period: "Monthly board-ready period",
    reviewStatus: "Mock ready for editorial review",
    sourceReadiness: "Owned account summary sources only",
    safeNextStep: "Review narrative sections and confirm official-source eligibility before any future generation workflow.",
  },
  {
    name: "Client campaign recap",
    owner: "Agency account lead",
    period: "Campaign flight preview",
    reviewStatus: "Needs compliance review",
    sourceReadiness: "Connected account metrics plus policy-approved public/professional context",
    safeNextStep: "Confirm source boundaries, client approval, and policy classification before moving beyond static preview.",
  },
  {
    name: "Compliance evidence packet",
    owner: "Trust and compliance reviewer",
    period: "Audit window placeholder",
    reviewStatus: "Disabled generation placeholder",
    sourceReadiness: "Audit/provenance schema required before future use",
    safeNextStep: "Document required audit fields; do not generate, schedule, store, or deliver a report in Alpha.",
  },
];

const disabledReportStudioActions = ["Generate report", "Schedule delivery", "Create PDF", "Email stakeholders", "Save report job", "Run licensed enrichment"];

const reportOutputLinks = [
  { label: "Review export packaging", href: "/exports", detail: "Continue to governed output packages after report template review." },
  { label: "Return to dashboard", href: "/dashboard", detail: "Back to the workspace intelligence overview." },
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function ReportsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof reportKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
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
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only reports</Badge>
            <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{reportsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{reportsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Static {reportsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100/10 text-slate-200 ring-white/15">{reportsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Report studio / executive library</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{reportsProfile.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{reportsProfile.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaReportSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha reporting boundary</p>
          <p className="mt-1">
            Mock report studio previews for executive templates, editorial review status, source-readiness checks, and licensed-provider placeholders only.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Generation disabled in Alpha</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">No storage, queue, or delivery job</span>
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
          <p className="text-sm font-semibold text-slate-950">Report filters</p>
          <p className="mt-1 text-xs text-slate-500">
            Static placeholders for report type, workspace/client, date range, status, source, confidence, and policy classification. No live query or saved filter runs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only controls</Badge>
          {reportFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Disabled in Alpha</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No backend action runs from this page</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No report is generated in Alpha</span>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: ReportPanelItem[] }) {
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

function ReportStudioPreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <section className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm shadow-violet-100/70">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Executive report library</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Report templates awaiting safe review</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Static templates show audience, owner, reporting period, review status, and source-readiness. They do not generate reports, create files, schedule delivery, or run backend jobs.
            </p>
          </div>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Generation disabled</Badge>
        </div>

        <div className="space-y-3">
          {reportStudioTemplates.map((template) => (
            <article key={template.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{template.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{template.safeNextStep}</p>
                </div>
                <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{template.reviewStatus}</Badge>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Audience / owner</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{template.owner}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Reporting period</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{template.period}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Source-readiness</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{template.sourceReadiness}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50 p-5 shadow-sm shadow-amber-100/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the user safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review templates, not generated output</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review template structure, audience ownership, reporting period, source-readiness, and compliance notes. Live report generation, file creation, scheduling, delivery, and licensed enrichment remain disabled.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled report studio actions">
          {disabledReportStudioActions.map((action) => (
            <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
              {action}: disabled
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

function ReportOutputJourney() {
  return (
    <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-5 shadow-sm shadow-violet-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Output journey</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Reports remain templates; exports remain packaging previews</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            Use these links to move between existing preview routes only. They do not generate reports, create files, schedule delivery, download exports, email stakeholders, or run backend jobs.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 xl:w-[34rem]">
          {reportOutputLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border border-violet-100 bg-white p-3 text-sm text-slate-600 transition hover:border-violet-200 hover:bg-violet-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400">
              <span className="block font-semibold text-slate-950">{link.label}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">{link.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReportLibraryPanels() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <ReportsPanel title="Executive review cadence" subtitle="Editorial review cadence only; scheduled generation and delivery require backend and remain disabled.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Static schedule model</p>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">No job runs</span>
          </div>
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

      <ReportsPanel title="Template portfolio mix" subtitle="Mock executive, campaign, benchmark, and compliance report templates only.">
        <SignalList items={reportTypeMix} />
      </ReportsPanel>

      <ReportsPanel title="Source-readiness for reports" subtitle="Preview-only source checks for report sections; no live query, generation, or storage runs.">
        <SignalList items={reportStudioSourceReadiness} />
      </ReportsPanel>

      <ReportsPanel title="Review and compliance queue" subtitle="Source, policy, and client-readiness review placeholders with no audit write.">
        <SignalList items={reviewComplianceQueue} />
      </ReportsPanel>
    </section>
  );
}

function ReportCardItem({ report }: { report: ReportCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{report.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{report.linkedWorkspace}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only report</Badge>
          <Badge className={statusClasses(report.status)}>{reportStatusLabels[report.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={typeClasses(report.type)}>{reportTypeLabels[report.type]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{report.dateRange}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
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

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 sm:w-auto"
          >
            Report generation disabled
          </button>
          <p className="text-xs leading-5 text-slate-500">No report is generated in Alpha; no backend action runs.</p>
        </div>
      </div>
    </article>
  );
}

function ReportCardsGrid() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Report template previews</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Client and executive report cards</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Static report packaging cards for review only. Generation, scheduling, delivery, storage, and provider execution remain disabled in Alpha.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only reports</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No backend report job</Badge>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
        {reportCards.map((report) => (
          <ReportCardItem key={report.id} report={report} />
        ))}
      </div>
    </section>
  );
}

function ExecutiveSummaryPreviewPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mock-only executive summary preview</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">{executiveSummaryPreview.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{executiveSummaryPreview.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{executiveSummaryPreview.dateRange}</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">No report is generated in Alpha</Badge>
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
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires official source connection</Badge>
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
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
    <ReportsPanel title={reportComplianceNotice.title} subtitle="Preview-only reports for connected account summaries, public/professional intelligence, and licensed-provider placeholders only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{reportComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Preview-only reports: no report is generated in Alpha and no backend action runs from this page.</p>
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data. Requires official source connection.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Connected account and public/professional intelligence framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live Instagram data is collected in Alpha. No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
    <div className="space-y-8">
      <ReportsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {reportKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <ReportOutputJourney />
      <ReportStudioPreview />
      <ReportLibraryPanels />
      <ReportCardsGrid />
      <ExecutiveSummaryPreviewPanel />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <ReportLibraryTable />
    </div>
  );
}