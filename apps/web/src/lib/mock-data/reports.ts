export type ReportTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type ReportFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type ReportConfidence = "verified" | "high" | "medium" | "needs_review";

export type ReportPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type ReportSourceType = "official_api" | "public_professional" | "licensed_provider" | "mock_provider" | "manual_import";

export type ReportStatus = "ready" | "scheduled" | "draft" | "review_required" | "licensed_gated";

export type ReportType = "executive_summary" | "client_export" | "campaign_report" | "benchmark_report" | "compliance_review" | "licensed_only";

export type ReportKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: ReportTone;
  description: string;
};

export type ReportFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type ReportCadencePoint = {
  label: string;
  value: string;
  height: number;
};

export type ReportPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: ReportTone;
};

export type ReportCard = {
  id: string;
  title: string;
  type: ReportType;
  linkedWorkspace: string;
  dateRange: string;
  status: ReportStatus;
  sourceProvider: string;
  sourceType: ReportSourceType;
  freshness: ReportFreshness;
  confidence: ReportConfidence;
  confidenceScore: number;
  policyClassification: ReportPolicyClassification;
  recommendedAction: string;
  tone: ReportTone;
};

export type ExecutiveSummaryPreview = {
  title: string;
  subtitle: string;
  dateRange: string;
  notice: string;
  bullets: string[];
  metrics: ReportPanelItem[];
};

export type ReportLicensedPanel = {
  title: string;
  status: ReportStatus;
  policyClassification: ReportPolicyClassification;
  sourceProvider: string;
  freshness: ReportFreshness;
  confidence: ReportConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type ReportTableRow = {
  id: string;
  report: string;
  type: ReportType;
  workspace: string;
  dateRange: string;
  status: ReportStatus;
  source: string;
  confidence: string;
  policy: ReportPolicyClassification;
  action: string;
};

export const reportsProfile = {
  title: "Reports",
  description:
    "Preview mock report templates, executive summaries, and compliant insight narratives from connected account data, public/professional intelligence, and clearly gated licensed-provider placeholders.",
  sourceBadge: "Report preview sources",
  confidenceBadge: "92% preview confidence",
  freshnessBadge: "Weekly snapshot",
  integrationBadge: "No live report generation",
};

export const reportFreshnessLabels: Record<ReportFreshness, string> = {
  near_real_time: "Static Alpha preview",
  hourly: "Hourly snapshot",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const reportConfidenceLabels: Record<ReportConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const reportPolicyLabels: Record<ReportPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const reportStatusLabels: Record<ReportStatus, string> = {
  ready: "Preview ready",
  scheduled: "Schedule preview",
  draft: "Mock draft",
  review_required: "Review required",
  licensed_gated: "Requires private-beta reporting service",
};

export const reportTypeLabels: Record<ReportType, string> = {
  executive_summary: "Executive summary preview",
  client_export: "Client export preview",
  campaign_report: "Campaign report preview",
  benchmark_report: "Benchmark report preview",
  compliance_review: "Compliance review preview",
  licensed_only: "Private-beta reporting service",
};

export const reportKpis: ReportKpi[] = [
  {
    id: "saved-reports",
    label: "Saved report previews",
    value: "86",
    delta: "+12 this month",
    tone: "blue",
    description: "Mock report template previews built from connected account summaries and compliant public/professional intelligence.",
  },
  {
    id: "scheduled-reports",
    label: "Schedule previews",
    value: "24",
    delta: "requires backend",
    tone: "purple",
    description: "Static schedule placeholders only; scheduled delivery requires backend support.",
  },
  {
    id: "ready-exports",
    label: "Export previews",
    value: "31",
    delta: "preview only",
    tone: "green",
    description: "Report export previews prepared for review; export jobs require backend.",
  },
  {
    id: "executive-summaries",
    label: "Report previews",
    value: "14",
    delta: "generation disabled",
    tone: "cyan",
    description: "Board-style insight previews with mock KPI, benchmark, and opportunity narratives.",
  },
  {
    id: "review-required",
    label: "Review required",
    value: "9",
    delta: "manual review",
    tone: "amber",
    description: "Report previews that need compliance, source, confidence, or client-readiness review before any private-beta export service.",
  },
  {
    id: "licensed-only-enrichments",
    label: "Licensed-only enrichments",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper enrichment, generation, and export automation remain unavailable until compliant providers and private-beta services are configured.",
  },
];

export const reportFilters: ReportFilterGroup[] = [
  { id: "report-type", label: "Report type", options: ["All types", "Executive summary", "Client export", "Campaign report", "Benchmark report", "Compliance review"] },
  { id: "workspace-client", label: "Workspace/client", options: ["All workspaces", "Growth HQ", "Agency demo", "Enterprise retail", "Creator studio"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter to date", "Last 12 months"] },
  { id: "status", label: "Status", options: ["All statuses", "Preview ready", "Schedule preview", "Mock draft", "Review required", "Requires private-beta reporting service"] },
  { id: "source", label: "Source", options: ["All sources", "Connected owned account", "Public professional intelligence", "Manual import", "Licensed provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const scheduledReportCadence: ReportCadencePoint[] = [
  { label: "Daily", value: "6", height: 34 },
  { label: "Weekly", value: "24", height: 86 },
  { label: "Monthly", value: "18", height: 66 },
  { label: "Quarterly", value: "9", height: 46 },
  { label: "Ad hoc", value: "29", height: 92 },
];

export const reportTypeMix: ReportPanelItem[] = [
  {
    id: "mix-exec",
    title: "Executive summary previews",
    value: "31%",
    detail: "Mock leadership-ready report previews for growth, engagement, benchmark, and campaign narratives.",
    tone: "purple",
  },
  {
    id: "mix-client",
    title: "Client export previews",
    value: "27%",
    detail: "Agency-ready export previews with source, confidence, freshness, and policy metadata.",
    tone: "green",
  },
  {
    id: "mix-benchmark",
    title: "Benchmark packs",
    value: "22%",
    detail: "Public/professional benchmark summaries and connected owned comparisons.",
    tone: "blue",
  },
];

export const exportReadiness: ReportPanelItem[] = [
  {
    id: "export-ready",
    title: "Export previews",
    value: "31",
    detail: "Report previews ready for review only; export jobs require backend.",
    tone: "green",
  },
  {
    id: "export-draft",
    title: "Draft report previews",
    value: "18",
    detail: "Draft report template shells waiting for final insight packaging and owner review.",
    tone: "cyan",
  },
  {
    id: "export-no-backend",
    title: "Export automation",
    value: "Mock only",
    detail: "No live export backend, scheduler, or client delivery integration is connected.",
    tone: "slate",
  },
];

export const reviewComplianceQueue: ReportPanelItem[] = [
  {
    id: "review-source",
    title: "Source review",
    value: "5 reports",
    detail: "Report previews needing source provenance and freshness review before any private-beta export service.",
    tone: "amber",
  },
  {
    id: "review-policy",
    title: "Policy review",
    value: "4 reports",
    detail: "Reports that include licensed-provider-only placeholders or limited official-safe data.",
    tone: "rose",
  },
  {
    id: "review-disabled",
    title: "Prohibited signals",
    value: "Disabled",
    detail: "No report is based on scraping, private access, hidden surveillance, or anti-bot bypass.",
    tone: "slate",
  },
];

export const reportCards: ReportCard[] = [
  {
    id: "report-001",
    title: "Executive Growth Report Preview",
    type: "executive_summary",
    linkedWorkspace: "Growth HQ · Owned account portfolio",
    dateRange: "Last 30 days",
    status: "ready",
    sourceProvider: "Connected owned account summaries",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    recommendedAction: "Review the mock executive summary preview; generation disabled in Alpha and client export remains preview only.",
    tone: "purple",
  },
  {
    id: "report-002",
    title: "Mock Client Campaign Report Template",
    type: "client_export",
    linkedWorkspace: "Agency demo · Launch campaign",
    dateRange: "Quarter to date",
    status: "scheduled",
    sourceProvider: "Connected owned account and manual import",
    sourceType: "official_api",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 92,
    policyClassification: "official_safe",
    recommendedAction: "Treat as a scheduled delivery preview; scheduled delivery requires backend and export remains disabled in Alpha.",
    tone: "green",
  },
  {
    id: "report-003",
    title: "Public Benchmark Report Preview",
    type: "benchmark_report",
    linkedWorkspace: "Enterprise retail · Peer set benchmarks",
    dateRange: "Last 30 days",
    status: "review_required",
    sourceProvider: "Public/professional benchmark intelligence",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 88,
    policyClassification: "official_safe_limited",
    recommendedAction: "Review benchmark framing and source confidence before including in mock report templates.",
    tone: "blue",
  },
  {
    id: "report-004",
    title: "Compliance Review Evidence Preview",
    type: "compliance_review",
    linkedWorkspace: "Creator studio · Policy review",
    dateRange: "Last 7 days",
    status: "draft",
    sourceProvider: "Manual compliance review",
    sourceType: "manual_import",
    freshness: "manual",
    confidence: "medium",
    confidenceScore: 81,
    policyClassification: "official_safe_limited",
    recommendedAction: "Finalize source notes and validate policy labels before any private-beta reporting or export service.",
    tone: "amber",
  },
  {
    id: "report-005",
    title: "Licensed Enrichment Reporting Placeholder",
    type: "licensed_only",
    linkedWorkspace: "Global portfolio · Unavailable automation",
    dateRange: "Provider required",
    status: "licensed_gated",
    sourceProvider: "Licensed reporting provider required",
    sourceType: "licensed_provider",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    recommendedAction: "Keep deeper enrichment, generation, and export automation unavailable until a compliant provider and private-beta reporting service are configured.",
    tone: "rose",
  },
];

export const executiveSummaryPreview: ExecutiveSummaryPreview = {
  title: "Mock executive summary preview",
  subtitle: "Client-ready preview style with no live backend and no prohibited collection signals.",
  dateRange: "Last 30 days · Growth HQ portfolio",
  notice: "This preview is static mock content for insight packaging only. It does not generate reports from live systems or automate exports.",
  bullets: [
    "Owned connected account engagement increased in tutorial-led posts, with response opportunities concentrated around product education.",
    "Public/professional benchmark placeholders suggest competitors are increasing short-form cadence, but benchmark framing requires source review.",
    "Mock export previews should include confidence, freshness, and policy badges for each insight section before any private-beta delivery service.",
    "Licensed enrichment and automation remain gated until a compliant provider is configured and approved.",
  ],
  metrics: [
    {
      id: "summary-growth",
      title: "Growth narrative",
      value: "+8.4%",
      detail: "Mock owned-account growth summary for executive report previews.",
      tone: "green",
    },
    {
      id: "summary-opportunity",
      title: "Opportunity focus",
      value: "57 responses",
      detail: "Response opportunities from mock mention and alert workflows.",
      tone: "purple",
    },
    {
      id: "summary-review",
      title: "Review queue",
      value: "9 reports",
      detail: "Report previews requiring source, policy, or client-readiness review.",
      tone: "amber",
    },
  ],
};

export const gatedReportEnrichmentPanel: ReportLicensedPanel = {
  title: "Deeper enrichment and report/export automation placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced enrichment, proprietary data packaging, automated client delivery, report generation, and deeper export workflows are not official-safe by default. This area remains unavailable until a compliant licensed provider and private-beta reporting service are configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper enrichment and export automation must be licensed-provider-only with confidence, freshness, policy metadata, and private-beta backend services.",
    "This mock page only frames connected account reports and public/professional intelligence where applicable.",
  ],
};

export const reportComplianceNotice = {
  title: "Official-first report previews",
  description:
    "This reports page uses mock data for connected/owned account report previews where applicable, public/professional intelligence summaries, manual review workflows, and clearly gated licensed-provider enrichment/export automation only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Connected account and public/professional report previews require source, confidence, freshness, and policy metadata.",
    "No reports are based on scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass.",
    "Deeper enrichment, report generation, scheduled delivery, and export automation remain licensed-provider-only and unavailable until a compliant provider and backend service are configured.",
  ],
};

export const reportTableRows: ReportTableRow[] = reportCards.map((report) => ({
  id: report.id,
  report: report.title,
  type: report.type,
  workspace: report.linkedWorkspace,
  dateRange: report.dateRange,
  status: report.status,
  source: report.sourceProvider,
  confidence:
    report.confidenceScore > 0
      ? `${report.confidenceScore}% ${reportConfidenceLabels[report.confidence]}`
      : reportConfidenceLabels[report.confidence],
  policy: report.policyClassification,
  action: report.recommendedAction,
}));