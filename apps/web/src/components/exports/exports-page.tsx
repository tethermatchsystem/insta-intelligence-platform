import { ExportCenterTable } from "@/components/data-tables/export-center-table";
import {
  deliveryAuditPreview,
  deliveryReadiness,
  exportCards,
  exportComplianceNotice,
  exportComplianceQueue,
  exportConfidenceLabels,
  exportFilters,
  exportFormatLabels,
  exportFormatMix,
  exportFreshnessLabels,
  exportKpis,
  exportPolicyLabels,
  exportStatusLabels,
  exportTypeLabels,
  exportsProfile,
  gatedExportEnrichmentPanel,
  scheduledExportCadence,
  type ExportCard,
  type ExportFormat,
  type ExportPanelItem,
  type ExportPolicyClassification,
  type ExportStatus,
  type ExportTone,
  type ExportType,
} from "@/lib/mock-data/exports";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: ExportTone) {
  const tones: Record<ExportTone, string> = {
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

function typeClasses(type: ExportType) {
  if (type === "csv_dataset") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "json_package") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "executive_package") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "audit_delivery") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (type === "scheduled_export") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function formatClasses(format: ExportFormat) {
  if (format === "csv") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (format === "json") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (format === "pdf_package") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (format === "xlsx") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (format === "zip_bundle") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function policyClasses(policy: ExportPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: ExportStatus) {
  if (["ready", "scheduled"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "draft") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "review_required") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function ExportsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof exportKpis)[number]) {
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

function ExportsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{exportsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{exportsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Static {exportsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{exportsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Audit-ready data delivery</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{exportsProfile.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{exportsProfile.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only export workspace</p>
          <p className="mt-1">
            Preview-only export packaging for CSV, JSON, executive bundles, audit placeholders, and licensed-provider placeholders only. Download disabled in Alpha.
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
          <p className="text-sm font-semibold text-slate-950">Export filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for export type, workspace/client, date range, preview-only file format, status, and policy classification.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {exportFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: ExportPanelItem[] }) {
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

function ExportPanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-4">
      <ExportsPanel title="Scheduled export preview" subtitle="Export jobs require backend; this is a static cadence placeholder only.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 text-white">
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {scheduledExportCadence.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-cyan-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ExportsPanel>

      <ExportsPanel title="Preview-only file format mix" subtitle="CSV, JSON, executive bundle, and audit package placeholders with no file creation.">
        <SignalList items={exportFormatMix} />
      </ExportsPanel>

      <ExportsPanel title="Delivery preview readiness" subtitle="Mock stakeholder delivery status; export jobs require backend.">
        <SignalList items={deliveryReadiness} />
      </ExportsPanel>

      <ExportsPanel title="Compliance review queue" subtitle="Source, policy, and audit-readiness review placeholders.">
        <SignalList items={exportComplianceQueue} />
      </ExportsPanel>
    </section>
  );
}

function ExportCardItem({ exportItem }: { exportItem: ExportCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{exportItem.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{exportItem.linkedWorkspace}</p>
        </div>
        <Badge className={statusClasses(exportItem.status)}>{exportStatusLabels[exportItem.status]}</Badge>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={typeClasses(exportItem.type)}>{exportTypeLabels[exportItem.type]}</Badge>
        <Badge className={formatClasses(exportItem.format)}>{exportFormatLabels[exportItem.format]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{exportItem.dateRange}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Alpha preview action</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{exportItem.recommendedAction}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{exportItem.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{exportFreshnessLabels[exportItem.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {exportItem.confidenceScore > 0 ? `${exportItem.confidenceScore}% ` : ""}{exportConfidenceLabels[exportItem.confidence]}
        </Badge>
        <Badge className={policyClasses(exportItem.policyClassification)}>{exportPolicyLabels[exportItem.policyClassification]}</Badge>
      </div>
    </article>
  );
}

function ExportCardsGrid() {
  return (
    <section className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
      {exportCards.map((exportItem) => (
        <ExportCardItem key={exportItem.id} exportItem={exportItem} />
      ))}
    </section>
  );
}

function DeliveryAuditPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mock-only delivery and download preview</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">{deliveryAuditPreview.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{deliveryAuditPreview.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-100">Audit log placeholder</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Approval state placeholder</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No live backend</Badge>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
        {deliveryAuditPreview.notice}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-2">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Mock delivery/download channels</p>
          <SignalList items={deliveryAuditPreview.channels} />
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">Audit and approval placeholders</p>
          <SignalList items={deliveryAuditPreview.auditItems} />
        </div>
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
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedExportEnrichmentPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedExportEnrichmentPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedExportEnrichmentPanel.policyClassification)}>{exportPolicyLabels[gatedExportEnrichmentPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedExportEnrichmentPanel.status)}>{exportStatusLabels[gatedExportEnrichmentPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedExportEnrichmentPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{exportFreshnessLabels[gatedExportEnrichmentPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedExportEnrichmentPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedExportEnrichmentPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <ExportsPanel title={exportComplianceNotice.title} subtitle="Connected account export previews, public/professional intelligence, and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{exportComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Connected account and public/professional intelligence export framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Deeper enrichment and export automation previews are licensed-provider-only and unavailable until configured.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {exportComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </ExportsPanel>
  );
}

export function ExportsPage() {
  return (
    <div className="space-y-6">
      <ExportsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {exportKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <ExportPanels />
      <ExportCardsGrid />
      <DeliveryAuditPanel />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <ExportCenterTable />
    </div>
  );
}