import Link from "next/link";
import { ExportCenterTable } from "@/components/data-tables/export-center-table";
import {
  deliveryAuditPreview,
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

const alphaExportSafetyBadges = [
  "Preview-only exports",
  "No export file is created in Alpha",
  "No backend action runs from this page",
  "No live Instagram data is collected in Alpha",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const exportPackagingReadiness: ExportPanelItem[] = [
  {
    id: "package-manifest",
    title: "Package manifest readiness",
    value: "Mock staged",
    detail: "Static package manifest for selected fields, source labels, freshness labels, and policy badges. No object storage or file is created.",
    tone: "blue",
  },
  {
    id: "destination-approval",
    title: "Destination approval",
    value: "Review required",
    detail: "Delivery destination, recipient, and approval state are preview labels only; no delivery, email, webhook, or download action runs.",
    tone: "amber",
  },
  {
    id: "licensed-payload-blocked",
    title: "Licensed-provider payloads",
    value: "Disabled",
    detail: "Licensed-provider-only enrichment packages require approval and remain disabled by default in Alpha.",
    tone: "rose",
  },
];

const exportDeliveryQueue = [
  {
    packageName: "Audience health CSV package",
    packageType: "CSV dataset",
    destination: "Workspace analyst review",
    fileFormat: "CSV preview",
    approvalState: "Source review needed",
    deliveryStatus: "Queued mock only",
    safeNextStep: "Review fields, policy labels, and intended destination before any future export job is designed.",
  },
  {
    packageName: "Executive ZIP evidence bundle",
    packageType: "ZIP bundle",
    destination: "Client success handoff",
    fileFormat: "PDF + JSON manifest preview",
    approvalState: "Compliance approval blocked",
    deliveryStatus: "Delivery disabled",
    safeNextStep: "Confirm audience, retention, and source provenance requirements; do not generate or download files in Alpha.",
  },
  {
    packageName: "Ad Library audit package",
    packageType: "Audit delivery",
    destination: "Compliance reviewer",
    fileFormat: "JSON package preview",
    approvalState: "Mock approved for review",
    deliveryStatus: "Static delivery placeholder",
    safeNextStep: "Validate official-source boundaries and audit fields before future backend packaging work.",
  },
];

const disabledExportQueueActions = ["Build export", "Download file", "Send delivery", "Write to storage", "Create signed URL", "Run scheduled export"];

const exportOutputLinks = [
  { label: "Review report templates", href: "/reports", detail: "Return to report previews before packaging decisions." },
  { label: "Return to dashboard", href: "/dashboard", detail: "Back to the workspace intelligence overview." },
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function ExportsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof exportKpis)[number]) {
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

function ExportsHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only exports</Badge>
            <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{exportsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{exportsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Static {exportsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100/10 text-slate-200 ring-white/15">{exportsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Export packaging / delivery queue</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{exportsProfile.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{exportsProfile.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaExportSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha export boundary</p>
          <p className="mt-1">
            Preview-only export packaging for manifests, destinations, approval states, file formats, delivery status labels, and licensed-provider placeholders only.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Download disabled in Alpha</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">No file, storage, or delivery job</span>
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
          <p className="text-sm font-semibold text-slate-950">Export filters</p>
          <p className="mt-1 text-xs text-slate-500">
            Static placeholders for export type, workspace/client, date range, preview-only file format, status, and policy classification. No live query or saved filter runs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only controls</Badge>
          {exportFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Disabled in Alpha</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No backend action runs from this page</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No export file is created in Alpha</span>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: ExportPanelItem[] }) {
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

function ExportPackagingQueuePreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <section className="rounded-3xl border border-cyan-200 bg-white p-5 shadow-sm shadow-cyan-100/70">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Packaging and delivery queue</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Mock export packages awaiting approval</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Static queue rows show package type, destination readiness, file format, approval state, and delivery status. No export package, download, signed URL, delivery, or storage write is created in Alpha.
            </p>
          </div>
          <Badge className="bg-rose-50 text-rose-700 ring-rose-100">Downloads disabled</Badge>
        </div>

        <div className="space-y-3">
          {exportDeliveryQueue.map((item) => (
            <article key={item.packageName} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{item.packageName}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{item.safeNextStep}</p>
                </div>
                <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{item.deliveryStatus}</Badge>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Package type</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.packageType}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Destination</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.destination}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">File format</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.fileFormat}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Approval state</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{item.approvalState}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-cyan-50 via-white to-amber-50 p-5 shadow-sm shadow-cyan-100/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the user safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review package readiness, not files</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review fields, policy labels, destination intent, approval state, and delivery readiness. Real exports, downloads, object storage writes, signed URLs, and scheduled delivery remain disabled.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled export delivery actions">
          {disabledExportQueueActions.map((action) => (
            <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
              {action}: disabled
            </span>
          ))}
        </div>
      </section>
    </section>
  );
}

function ExportOutputJourney() {
  return (
    <section className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-violet-50 p-5 shadow-sm shadow-cyan-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Output journey</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Exports package reviewed outputs; reports stay template previews</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">
            Use these links to move between existing preview routes only. They do not build files, create signed URLs, download packages, send deliveries, generate reports, or run backend jobs.
          </p>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 xl:w-[34rem]">
          {exportOutputLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-2xl border border-cyan-100 bg-white p-3 text-sm text-slate-600 transition hover:border-cyan-200 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400">
              <span className="block font-semibold text-slate-950">{link.label}</span>
              <span className="mt-1 block text-xs leading-5 text-slate-500">{link.detail}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExportPanels() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <ExportsPanel title="Delivery queue cadence" subtitle="Queue cadence placeholder only; export jobs, storage writes, downloads, and delivery require backend and remain disabled.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Static schedule model</p>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">No job runs</span>
          </div>
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

      <ExportsPanel title="Package format mix" subtitle="CSV, JSON, executive bundle, and audit package placeholders with no file creation.">
        <SignalList items={exportFormatMix} />
      </ExportsPanel>

      <ExportsPanel title="Package readiness gates" subtitle="Manifest, destination, approval, and provider payload readiness with no file creation.">
        <SignalList items={exportPackagingReadiness} />
      </ExportsPanel>

      <ExportsPanel title="Compliance review queue" subtitle="Source, policy, and audit-readiness review placeholders with no audit write.">
        <SignalList items={exportComplianceQueue} />
      </ExportsPanel>
    </section>
  );
}

function ExportCardItem({ exportItem }: { exportItem: ExportCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{exportItem.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{exportItem.linkedWorkspace}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only export</Badge>
          <Badge className={statusClasses(exportItem.status)}>{exportStatusLabels[exportItem.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={typeClasses(exportItem.type)}>{exportTypeLabels[exportItem.type]}</Badge>
        <Badge className={formatClasses(exportItem.format)}>{exportFormatLabels[exportItem.format]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{exportItem.dateRange}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Disabled Alpha guidance</p>
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

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 sm:w-auto"
          >
            Export download disabled
          </button>
          <p className="text-xs leading-5 text-slate-500">No export file is created in Alpha; no backend action runs.</p>
        </div>
      </div>
    </article>
  );
}

function ExportCardsGrid() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Export package previews</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Dataset and delivery cards</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Static export packaging cards for review only. Download, file creation, delivery, storage, and provider execution remain disabled in Alpha.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only exports</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No backend export job</Badge>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
        {exportCards.map((exportItem) => (
          <ExportCardItem key={exportItem.id} exportItem={exportItem} />
        ))}
      </div>
    </section>
  );
}

function DeliveryAuditPanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Mock-only delivery and download preview</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">{deliveryAuditPreview.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{deliveryAuditPreview.subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className="bg-blue-50 text-blue-700 ring-blue-100">Audit log placeholder</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Approval state placeholder</Badge>
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">No export file is created</Badge>
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
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires official source connection</Badge>
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
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
    <ExportsPanel title={exportComplianceNotice.title} subtitle="Preview-only exports for connected account summaries, public/professional intelligence, and licensed-provider placeholders only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{exportComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Preview-only exports: no export file is created in Alpha and no backend action runs from this page.</p>
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official APIs and compliant licensed providers only for future live data. Requires official source connection.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Connected account and public/professional intelligence export framing with source, freshness, confidence, and policy badges.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No live Instagram data is collected in Alpha. No scraping, private account access, hidden surveillance, or anti-bot bypass.</p>
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
    <div className="space-y-8">
      <ExportsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {exportKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <ExportOutputJourney />
      <ExportPackagingQueuePreview />
      <ExportPanels />
      <ExportCardsGrid />
      <DeliveryAuditPanel />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <ExportCenterTable />
    </div>
  );
}