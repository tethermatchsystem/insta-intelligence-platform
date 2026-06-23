export type ExportTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type ExportFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type ExportConfidence = "verified" | "high" | "medium" | "needs_review";

export type ExportPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type ExportSourceType = "official_api" | "public_professional" | "licensed_provider" | "mock_provider" | "manual_import";

export type ExportStatus = "ready" | "scheduled" | "draft" | "review_required" | "licensed_gated";

export type ExportType = "csv_dataset" | "json_package" | "executive_package" | "audit_delivery" | "scheduled_export" | "licensed_only";

export type ExportFormat = "csv" | "json" | "pdf_package" | "xlsx" | "zip_bundle" | "licensed_only";

export type ExportKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: ExportTone;
  description: string;
};

export type ExportFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type ExportCadencePoint = {
  label: string;
  value: string;
  height: number;
};

export type ExportPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: ExportTone;
};

export type ExportCard = {
  id: string;
  title: string;
  type: ExportType;
  format: ExportFormat;
  linkedWorkspace: string;
  dateRange: string;
  status: ExportStatus;
  sourceProvider: string;
  sourceType: ExportSourceType;
  freshness: ExportFreshness;
  confidence: ExportConfidence;
  confidenceScore: number;
  policyClassification: ExportPolicyClassification;
  recommendedAction: string;
  tone: ExportTone;
};

export type DeliveryAuditPreview = {
  title: string;
  subtitle: string;
  notice: string;
  channels: ExportPanelItem[];
  auditItems: ExportPanelItem[];
};

export type ExportLicensedPanel = {
  title: string;
  status: ExportStatus;
  policyClassification: ExportPolicyClassification;
  sourceProvider: string;
  freshness: ExportFreshness;
  confidence: ExportConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type ExportTableRow = {
  id: string;
  exportName: string;
  type: ExportType;
  format: ExportFormat;
  workspace: string;
  dateRange: string;
  status: ExportStatus;
  source: string;
  policy: ExportPolicyClassification;
  action: string;
};

export const exportsProfile = {
  title: "Exports",
  description:
    "Package CSV, JSON, executive report bundles, and audit-ready stakeholder deliveries from connected account data, public/professional intelligence, and clearly gated licensed-provider placeholders.",
  sourceBadge: "Connected and public/professional exports",
  confidenceBadge: "93% export confidence",
  freshnessBadge: "Weekly snapshot",
  integrationBadge: "No live integrations",
};

export const exportFreshnessLabels: Record<ExportFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly snapshot",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const exportConfidenceLabels: Record<ExportConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const exportPolicyLabels: Record<ExportPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const exportStatusLabels: Record<ExportStatus, string> = {
  ready: "Ready",
  scheduled: "Scheduled",
  draft: "Draft",
  review_required: "Review required",
  licensed_gated: "Licensed gated",
};

export const exportTypeLabels: Record<ExportType, string> = {
  csv_dataset: "CSV dataset",
  json_package: "JSON package",
  executive_package: "Executive package",
  audit_delivery: "Audit delivery",
  scheduled_export: "Scheduled export",
  licensed_only: "Licensed only",
};

export const exportFormatLabels: Record<ExportFormat, string> = {
  csv: "CSV",
  json: "JSON",
  pdf_package: "PDF package",
  xlsx: "XLSX",
  zip_bundle: "ZIP bundle",
  licensed_only: "Licensed only",
};

export const exportKpis: ExportKpi[] = [
  {
    id: "ready-exports",
    label: "Ready exports",
    value: "38",
    delta: "+9 weekly",
    tone: "green",
    description: "Mock export packages ready for stakeholder delivery after source and policy review.",
  },
  {
    id: "scheduled-exports",
    label: "Scheduled exports",
    value: "22",
    delta: "weekly cadence",
    tone: "purple",
    description: "Static schedule placeholders for recurring CSV, JSON, report, and audit deliveries.",
  },
  {
    id: "csv-packages",
    label: "CSV packages",
    value: "19",
    delta: "dataset ready",
    tone: "blue",
    description: "CSV export packages for connected/owned account summaries and manual review workflows.",
  },
  {
    id: "json-packages",
    label: "JSON packages",
    value: "14",
    delta: "API-ready",
    tone: "cyan",
    description: "JSON payload placeholders with source, freshness, confidence, and policy metadata.",
  },
  {
    id: "review-required",
    label: "Review required",
    value: "7",
    delta: "manual review",
    tone: "amber",
    description: "Exports requiring compliance, source, policy, or stakeholder-readiness review.",
  },
  {
    id: "licensed-only-exports",
    label: "Licensed-only exports",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper enrichment and export automation remain unavailable until compliant providers are configured.",
  },
];

export const exportFilters: ExportFilterGroup[] = [
  { id: "export-type", label: "Export type", options: ["All types", "CSV dataset", "JSON package", "Executive package", "Audit delivery", "Scheduled export"] },
  { id: "workspace-client", label: "Workspace/client", options: ["All workspaces", "Growth HQ", "Agency demo", "Enterprise retail", "Creator studio"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter to date", "Last 12 months"] },
  { id: "format", label: "Format", options: ["All formats", "CSV", "JSON", "PDF package", "XLSX", "ZIP bundle"] },
  { id: "status", label: "Status", options: ["All statuses", "Ready", "Scheduled", "Draft", "Review required", "Licensed gated"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const scheduledExportCadence: ExportCadencePoint[] = [
  { label: "Daily", value: "5", height: 32 },
  { label: "Weekly", value: "22", height: 88 },
  { label: "Monthly", value: "16", height: 64 },
  { label: "Quarterly", value: "7", height: 42 },
  { label: "Ad hoc", value: "31", height: 94 },
];

export const exportFormatMix: ExportPanelItem[] = [
  {
    id: "format-csv",
    title: "CSV packages",
    value: "36%",
    detail: "Mock tabular exports for connected account summaries, campaign rows, and review workflows.",
    tone: "blue",
  },
  {
    id: "format-json",
    title: "JSON packages",
    value: "27%",
    detail: "Structured payload placeholders for API-ready delivery and downstream analytics.",
    tone: "cyan",
  },
  {
    id: "format-report",
    title: "Executive bundles",
    value: "21%",
    detail: "Report and stakeholder packages with source, confidence, freshness, and policy metadata.",
    tone: "purple",
  },
];

export const deliveryReadiness: ExportPanelItem[] = [
  {
    id: "delivery-ready",
    title: "Ready for delivery",
    value: "38",
    detail: "Exports ready after source provenance, freshness, and policy metadata checks.",
    tone: "green",
  },
  {
    id: "delivery-approval",
    title: "Approval pending",
    value: "11",
    detail: "Exports waiting for stakeholder approval before delivery placeholders are marked complete.",
    tone: "amber",
  },
  {
    id: "delivery-no-backend",
    title: "Delivery automation",
    value: "Mock only",
    detail: "No live export backend, scheduler, object storage, or delivery integration is connected.",
    tone: "slate",
  },
];

export const exportComplianceQueue: ExportPanelItem[] = [
  {
    id: "review-source",
    title: "Source review",
    value: "4 exports",
    detail: "Exports needing source provenance and freshness review before stakeholder delivery.",
    tone: "amber",
  },
  {
    id: "review-policy",
    title: "Policy review",
    value: "3 exports",
    detail: "Exports with official-safe-limited or licensed-provider-only placeholders that need review.",
    tone: "rose",
  },
  {
    id: "review-disabled",
    title: "Private/scraped signals",
    value: "Disabled",
    detail: "No export contains scraping, private access, hidden surveillance, or anti-bot bypass data.",
    tone: "slate",
  },
];

export const exportCards: ExportCard[] = [
  {
    id: "export-001",
    title: "Owned Engagement CSV Export",
    type: "csv_dataset",
    format: "csv",
    linkedWorkspace: "Growth HQ · Connected owned account",
    dateRange: "Last 30 days",
    status: "ready",
    sourceProvider: "Connected owned account summaries",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    recommendedAction: "Approve CSV delivery after stakeholder review and preserve source/freshness metadata.",
    tone: "blue",
  },
  {
    id: "export-002",
    title: "Campaign Insights JSON Package",
    type: "json_package",
    format: "json",
    linkedWorkspace: "Agency demo · Launch campaign",
    dateRange: "Quarter to date",
    status: "scheduled",
    sourceProvider: "Connected owned account and manual import",
    sourceType: "official_api",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 92,
    policyClassification: "official_safe",
    recommendedAction: "Keep scheduled weekly and validate JSON schema placeholders before stakeholder handoff.",
    tone: "cyan",
  },
  {
    id: "export-003",
    title: "Executive Report ZIP Bundle",
    type: "executive_package",
    format: "zip_bundle",
    linkedWorkspace: "Enterprise retail · Executive workspace",
    dateRange: "Last 30 days",
    status: "ready",
    sourceProvider: "Connected and public/professional report summaries",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 89,
    policyClassification: "official_safe_limited",
    recommendedAction: "Review public/professional benchmark framing before sending the executive package.",
    tone: "purple",
  },
  {
    id: "export-004",
    title: "Audit Evidence XLSX Package",
    type: "audit_delivery",
    format: "xlsx",
    linkedWorkspace: "Creator studio · Compliance review",
    dateRange: "Last 7 days",
    status: "review_required",
    sourceProvider: "Manual compliance review",
    sourceType: "manual_import",
    freshness: "manual",
    confidence: "medium",
    confidenceScore: 82,
    policyClassification: "official_safe_limited",
    recommendedAction: "Finalize audit notes and validate policy labels before marking delivery ready.",
    tone: "amber",
  },
  {
    id: "export-005",
    title: "Licensed Enrichment Export Automation",
    type: "licensed_only",
    format: "licensed_only",
    linkedWorkspace: "Global portfolio · Unavailable automation",
    dateRange: "Provider required",
    status: "licensed_gated",
    sourceProvider: "Licensed export provider required",
    sourceType: "licensed_provider",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    recommendedAction: "Keep deeper enrichment and export automation unavailable until a compliant provider is configured.",
    tone: "rose",
  },
];

export const deliveryAuditPreview: DeliveryAuditPreview = {
  title: "Mock delivery and audit readiness",
  subtitle: "Static delivery-channel, audit-log, and approval-state placeholders with no live backend.",
  notice: "This panel is mock-only. It does not send files, write audit logs, schedule jobs, or connect to object storage.",
  channels: [
    {
      id: "channel-download",
      title: "Secure download placeholder",
      value: "Ready",
      detail: "Mock stakeholder download channel for approved exports only.",
      tone: "green",
    },
    {
      id: "channel-email",
      title: "Email delivery placeholder",
      value: "Disabled",
      detail: "No live email, webhook, or external delivery automation is connected.",
      tone: "slate",
    },
    {
      id: "channel-storage",
      title: "Object storage placeholder",
      value: "Mock only",
      detail: "No files are uploaded to object storage in this frontend mock page.",
      tone: "blue",
    },
  ],
  auditItems: [
    {
      id: "audit-log",
      title: "Audit log placeholder",
      value: "Queued",
      detail: "Audit events would record requester, source, policy, and approval metadata in a real backend.",
      tone: "purple",
    },
    {
      id: "audit-approval",
      title: "Approval state placeholder",
      value: "Review",
      detail: "Exports requiring review stay gated until source and policy checks are complete.",
      tone: "amber",
    },
    {
      id: "audit-private",
      title: "Private/scraped data",
      value: "Excluded",
      detail: "Exports do not include private, scraped, hidden-surveillance, or anti-bot bypass data.",
      tone: "rose",
    },
  ],
};

export const gatedExportEnrichmentPanel: ExportLicensedPanel = {
  title: "Deeper enrichment and export automation placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced enrichment, proprietary data packages, automated delivery, and deeper export workflows are not official-safe by default. This area remains unavailable until a compliant licensed provider is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper enrichment and export automation must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames connected account exports and public/professional intelligence exports where applicable.",
  ],
};

export const exportComplianceNotice = {
  title: "Official-first export center",
  description:
    "This exports page uses mock data for connected/owned account exports where applicable, public/professional intelligence exports, audit-ready delivery placeholders, and clearly gated licensed-provider enrichment/export automation only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Connected account and public/professional intelligence exports require source, confidence, freshness, and policy metadata.",
    "No exports contain scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass data.",
    "Deeper enrichment and export automation remain licensed-provider-only and unavailable until a compliant provider is configured.",
  ],
};

export const exportTableRows: ExportTableRow[] = exportCards.map((exportItem) => ({
  id: exportItem.id,
  exportName: exportItem.title,
  type: exportItem.type,
  format: exportItem.format,
  workspace: exportItem.linkedWorkspace,
  dateRange: exportItem.dateRange,
  status: exportItem.status,
  source: exportItem.sourceProvider,
  policy: exportItem.policyClassification,
  action: exportItem.recommendedAction,
}));