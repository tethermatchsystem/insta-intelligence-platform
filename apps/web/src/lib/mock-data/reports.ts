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
    "Package executive summaries, client-ready exports, and compliant insight narratives from connected account data, public/professional intelligence, and clearly gated licensed-provider placeholders.",
  sourceBadge: "Connected and public/professional reporting",
  confidenceBadge: "92% report confidence",
  freshnessBadge: "Weekly snapshot",
  integrationBadge: "No live integrations",
};

export const reportFreshnessLabels: Record<ReportFreshness, string> = {
  near_real_time: "Near real time",
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
  ready: "Ready",
  scheduled: "Scheduled",
  draft: "Draft",
  review_required: "Review required",
  licensed_gated: "Licensed gated",
};

export const reportTypeLabels: Record<ReportType, string> = {
  executive_summary: "Executive summary",
  client_export: "Client export",
  campaign_report: "Campaign report",
  benchmark_report: "Benchmark report",
  compliance_review: "Compliance review",
  licensed_only: "Licensed only",
};

export const reportKpis: ReportKpi[] = [
  {
    id: "saved-reports",
    label: "Saved reports",
    value: "86",
    delta: "+12 this month",
    tone: "blue",
    description: "Mock report library items built from connected account summaries and compliant public/professional intelligence.",
  },
  {
    id: "scheduled-reports",
    label: "Scheduled reports",
    value: "24",
    delta: "weekly cadence",
    tone: "purple",
    description: "Static schedule placeholders for recurring executive, client, campaign, and benchmark packs.",
  },
  {
    id: "ready-exports",
    label: "Ready exports",
    value: "31",
    delta: "client-ready",
    tone: "green",
    description: "Reports prepared for review and export in this mock-only reporting workflow.",
  },
  {
    id: "executive-summaries",
    label: "Executive summaries",
    value: "14",
    delta: "+4 weekly",
    tone: "cyan",
    description: "Board-ready insight packages with mock KPI, benchmark, and opportunity narratives.",
  },
  {
    id: "review-required",
    label: "Review required",
    value: "9",
    delta: "manual review",
    tone: "amber",
    description: "Reports that need compliance, source, confidence, or client-readiness review before export.",
  },
  {
    id: "licensed-only-enrichments",
    label: "Licensed-only enrichments",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper enrichment and export automation remain unavailable until compliant providers are configured.",
  },
];

export const reportFilters: ReportFilterGroup[] = [
  { id: "report-type", label: "Report type", options: ["All types", "Executive summary", "Client export", "Campaign report", "Benchmark report", "Compliance review"] },
  { id: "workspace-client", label: "Workspace/client", options: ["All workspaces", "Growth HQ", "Agency demo", "Enterprise retail", "Creator studio"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter to date", "Last 12 months"] },
  { id: "status", label: "Status", options: ["All statuses", "Ready", "Scheduled", "Draft", "Review required", "Licensed gated"] },
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
    title: "Executive summaries",
    value: "31%",
    detail: "Mock leadership-ready reports for growth, engagement, benchmark, and campaign narratives.",
    tone: "purple",
  },
  {
    id: "mix-client",
    title: "Client exports",
    value: "27%",
    detail: "Agency-ready export placeholders with source, confidence, freshness, and policy metadata.",
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
    title: "Client-ready exports",
    value: "31",
    detail: "Reports ready for export after source and compliance metadata checks.",
    tone: "green",
  },
  {
    id: "export-draft",
    title: "Draft reports",
    value: "18",
    detail: "Draft report shells waiting for final insight packaging and owner review.",
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
    detail: "Reports needing source provenance and freshness review before export.",
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
    title: "Private/scraped signals",
    value: "Disabled",
    detail: "No report is based on scraping, private access, hidden surveillance, or anti-bot bypass.",
    tone: "slate",
  },
];

export const reportCards: ReportCard[] = [
  {
    id: "report-001",
    title: "Executive Growth Snapshot",
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
    recommendedAction: "Review the mock executive summary preview, approve narrative, and mark ready for client export.",
    tone: "purple",
  },
  {
    id: "report-002",
    title: "Client Campaign Export Pack",
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
    recommendedAction: "Keep scheduled for weekly review and confirm client-ready formatting before export.",
    tone: "green",
  },
  {
    id: "report-003",
    title: "Public Benchmark Intelligence Digest",
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
    recommendedAction: "Review benchmark framing and source confidence before including in executive summary exports.",
    tone: "blue",
  },
  {
    id: "report-004",
    title: "Compliance Review Evidence Pack",
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
    recommendedAction: "Finalize source notes, validate policy labels, and route to compliance owner before export.",
    tone: "amber",
  },
  {
    id: "report-005",
    title: "Licensed Enrichment Export Automation",
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
    recommendedAction: "Keep deeper enrichment and export automation unavailable until a compliant provider is configured.",
    tone: "rose",
  },
];

export const executiveSummaryPreview: ExecutiveSummaryPreview = {
  title: "Mock executive summary preview",
  subtitle: "Client-ready insight style with no live backend, no private access, and no scraped signals.",
  dateRange: "Last 30 days · Growth HQ portfolio",
  notice: "This preview is static mock content for insight packaging only. It does not generate reports from live systems or automate exports.",
  bullets: [
    "Owned connected account engagement increased in tutorial-led posts, with response opportunities concentrated around product education.",
    "Public/professional benchmark placeholders suggest competitors are increasing short-form cadence, but benchmark framing requires source review.",
    "Campaign-ready exports should include confidence, freshness, and policy badges for each insight section before client delivery.",
    "Licensed enrichment and automation remain gated until a compliant provider is configured and approved.",
  ],
  metrics: [
    {
      id: "summary-growth",
      title: "Growth narrative",
      value: "+8.4%",
      detail: "Mock owned-account growth summary for executive reporting.",
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
      detail: "Reports requiring source, policy, or client-readiness review.",
      tone: "amber",
    },
  ],
};

export const gatedReportEnrichmentPanel: ReportLicensedPanel = {
  title: "Deeper enrichment and export automation placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced enrichment, proprietary data packaging, automated client delivery, and deeper export workflows are not official-safe by default. This area remains unavailable until a compliant licensed provider is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper enrichment and export automation must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames connected account reports and public/professional intelligence where applicable.",
  ],
};

export const reportComplianceNotice = {
  title: "Official-first reporting",
  description:
    "This reports page uses mock data for connected/owned account reports where applicable, public/professional intelligence summaries, manual review workflows, and clearly gated licensed-provider enrichment/export automation only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Connected account and public/professional reporting require source, confidence, freshness, and policy metadata.",
    "No reports are based on scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass.",
    "Deeper enrichment and export automation remain licensed-provider-only and unavailable until a compliant provider is configured.",
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