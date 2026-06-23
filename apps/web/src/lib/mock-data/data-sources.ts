export type DataSourceTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type DataSourceFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type DataSourceConfidence = "verified" | "high" | "medium" | "needs_review";

export type DataSourcePolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type DataSourceType =
  | "meta_graph_api"
  | "meta_marketing_api"
  | "meta_ad_library_api"
  | "owned_webhook"
  | "licensed_provider"
  | "manual_import";

export type DataSourceStatus = "ready" | "configured" | "needs_review" | "coverage_gap" | "licensed_gated";

export type DataDomain =
  | "account_insights"
  | "audience"
  | "engagement"
  | "ads"
  | "comments"
  | "mentions"
  | "hashtags"
  | "competitors"
  | "exports"
  | "compliance";

export type DataSourceKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: DataSourceTone;
  description: string;
};

export type DataSourceFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type DataSourceReadinessPoint = {
  label: string;
  value: string;
  height: number;
};

export type DataSourcePanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: DataSourceTone;
};

export type DataSourceCard = {
  id: string;
  providerName: string;
  sourceType: DataSourceType;
  coveredDomains: DataDomain[];
  readinessStatus: DataSourceStatus;
  freshness: DataSourceFreshness;
  confidence: DataSourceConfidence;
  confidenceScore: number;
  policyClassification: DataSourcePolicyClassification;
  recommendedAction: string;
  tone: DataSourceTone;
};

export type LicensedProviderEvaluationPanel = {
  title: string;
  status: DataSourceStatus;
  policyClassification: DataSourcePolicyClassification;
  sourceProvider: string;
  freshness: DataSourceFreshness;
  confidence: DataSourceConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type DataSourceTableRow = {
  id: string;
  source: string;
  type: DataSourceType;
  coverage: string;
  freshness: DataSourceFreshness;
  status: DataSourceStatus;
  confidence: string;
  policy: DataSourcePolicyClassification;
  action: string;
};

export const dataSourcesProfile = {
  title: "Data Sources",
  description:
    "Manage official API providers, licensed provider readiness, freshness, coverage, permissions, and compliant source status using mock configuration data only.",
  sourceBadge: "Official APIs and licensed providers",
  confidenceBadge: "94% source readiness confidence",
  freshnessBadge: "Daily source snapshot",
  integrationBadge: "No live integrations",
};

export const dataSourceFreshnessLabels: Record<DataSourceFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly sync",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual review",
};

export const dataSourceConfidenceLabels: Record<DataSourceConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const dataSourcePolicyLabels: Record<DataSourcePolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const dataSourceTypeLabels: Record<DataSourceType, string> = {
  meta_graph_api: "Meta Graph API",
  meta_marketing_api: "Meta Marketing API",
  meta_ad_library_api: "Meta Ad Library API",
  owned_webhook: "Owned account webhook",
  licensed_provider: "Licensed provider",
  manual_import: "Manual import",
};

export const dataSourceStatusLabels: Record<DataSourceStatus, string> = {
  ready: "Ready",
  configured: "Configured",
  needs_review: "Needs review",
  coverage_gap: "Coverage gap",
  licensed_gated: "Licensed gated",
};

export const dataDomainLabels: Record<DataDomain, string> = {
  account_insights: "Account insights",
  audience: "Audience",
  engagement: "Engagement",
  ads: "Ads",
  comments: "Comments",
  mentions: "Mentions",
  hashtags: "Hashtags",
  competitors: "Competitors",
  exports: "Exports",
  compliance: "Compliance",
};

export const dataSourceKpis: DataSourceKpi[] = [
  {
    id: "configured-sources",
    label: "Configured sources",
    value: "12",
    delta: "+3 staged",
    tone: "blue",
    description: "Mock configured source inventory across official APIs, webhooks, manual imports, and licensed-provider placeholders.",
  },
  {
    id: "official-api-sources",
    label: "Official API sources",
    value: "5",
    delta: "safe path",
    tone: "green",
    description: "Meta Graph, Marketing, Ad Library, and owned webhook source paths framed as official-first.",
  },
  {
    id: "licensed-providers",
    label: "Licensed providers",
    value: "2",
    delta: "evaluation",
    tone: "purple",
    description: "Licensed provider adapters remain gated until provenance, contracts, and compliance review are complete.",
  },
  {
    id: "webhook-readiness",
    label: "Webhook readiness",
    value: "83%",
    delta: "+9 pts",
    tone: "cyan",
    description: "Owned/connected account webhook readiness placeholders for compliant event workflows.",
  },
  {
    id: "coverage-gaps",
    label: "Coverage gaps",
    value: "6",
    delta: "review",
    tone: "amber",
    description: "Mock domain gaps requiring official API availability checks or licensed-provider evaluation.",
  },
  {
    id: "sources-requiring-review",
    label: "Sources requiring review",
    value: "4",
    delta: "policy queue",
    tone: "rose",
    description: "Sources with policy, scope, confidence, or licensed-provider status requiring analyst review.",
  },
];

export const dataSourceFilters: DataSourceFilterGroup[] = [
  { id: "source-type", label: "Source type", options: ["All types", "Meta Graph API", "Meta Marketing API", "Meta Ad Library API", "Owned webhooks", "Licensed provider", "Manual import"] },
  { id: "status", label: "Status", options: ["All statuses", "Ready", "Configured", "Needs review", "Coverage gap", "Licensed gated"] },
  { id: "workspace-client", label: "Workspace/client", options: ["All workspaces", "Growth HQ", "Agency demo", "Enterprise retail", "Creator studio"] },
  { id: "freshness", label: "Freshness", options: ["Any freshness", "Near real time", "Hourly", "Daily", "Weekly", "Manual"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const officialApiReadiness: DataSourceReadinessPoint[] = [
  { label: "Graph", value: "92%", height: 92 },
  { label: "Marketing", value: "86%", height: 86 },
  { label: "Ad Library", value: "78%", height: 78 },
  { label: "Webhooks", value: "83%", height: 83 },
  { label: "Manual", value: "64%", height: 64 },
];

export const coverageByDomain: DataSourcePanelItem[] = [
  {
    id: "coverage-owned",
    title: "Owned account analytics",
    value: "High",
    detail: "Connected professional account metrics, comments, media, and engagement summaries are covered by official-safe paths.",
    tone: "green",
  },
  {
    id: "coverage-ads",
    title: "Ads and public ad visibility",
    value: "Medium",
    detail: "Marketing API and Ad Library style public visibility are separated with source and policy metadata.",
    tone: "blue",
  },
  {
    id: "coverage-risky",
    title: "Risky data domains",
    value: "Gated",
    detail: "Arbitrary personal tracking, private signals, and scraping-based domains are not enabled.",
    tone: "rose",
  },
];

export const freshnessSyncCadence: DataSourcePanelItem[] = [
  {
    id: "freshness-webhooks",
    title: "Owned webhooks",
    value: "Hourly",
    detail: "Mock webhook readiness for owned/connected accounts only where official access is applicable.",
    tone: "cyan",
  },
  {
    id: "freshness-graph",
    title: "Graph API snapshots",
    value: "Daily",
    detail: "Connected account insight snapshots are represented as mock daily sync windows.",
    tone: "green",
  },
  {
    id: "freshness-licensed",
    title: "Licensed enrichment",
    value: "Manual",
    detail: "Licensed providers require review, provenance metadata, and approved rate-limit strategy before configuration.",
    tone: "amber",
  },
];

export const permissionScopesPlaceholder: DataSourcePanelItem[] = [
  {
    id: "scope-insights",
    title: "Insights permissions",
    value: "Scoped",
    detail: "Mock permissions only represent connected professional account analytics and owned account workflows.",
    tone: "green",
  },
  {
    id: "scope-ads",
    title: "Ads permissions",
    value: "Limited",
    detail: "Marketing and Ad Library source paths are separated by business use case and public visibility constraints.",
    tone: "blue",
  },
  {
    id: "scope-private",
    title: "Private access",
    value: "Disabled",
    detail: "No fake login automation, private account access, hidden surveillance, scraping, or anti-bot bypass scopes exist.",
    tone: "rose",
  },
];

export const dataSourceCards: DataSourceCard[] = [
  {
    id: "source-001",
    providerName: "Meta Graph API",
    sourceType: "meta_graph_api",
    coveredDomains: ["account_insights", "audience", "engagement", "comments", "exports"],
    readinessStatus: "ready",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    recommendedAction: "Keep as the primary path for connected professional account analytics and owned account summaries.",
    tone: "green",
  },
  {
    id: "source-002",
    providerName: "Meta Marketing API",
    sourceType: "meta_marketing_api",
    coveredDomains: ["ads", "engagement", "exports", "compliance"],
    readinessStatus: "configured",
    freshness: "daily",
    confidence: "high",
    confidenceScore: 91,
    policyClassification: "official_safe",
    recommendedAction: "Validate workspace permissions and keep paid media reporting separate from public ad visibility.",
    tone: "blue",
  },
  {
    id: "source-003",
    providerName: "Meta Ad Library API",
    sourceType: "meta_ad_library_api",
    coveredDomains: ["ads", "competitors", "compliance"],
    readinessStatus: "needs_review",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 88,
    policyClassification: "official_safe_limited",
    recommendedAction: "Use only for public ad visibility style workflows and preserve public-source framing in UI copy.",
    tone: "purple",
  },
  {
    id: "source-004",
    providerName: "Owned Account Webhooks",
    sourceType: "owned_webhook",
    coveredDomains: ["comments", "mentions", "engagement", "compliance"],
    readinessStatus: "configured",
    freshness: "hourly",
    confidence: "verified",
    confidenceScore: 94,
    policyClassification: "official_safe",
    recommendedAction: "Continue readiness checks for owned/connected account webhook events and retry metadata.",
    tone: "cyan",
  },
  {
    id: "source-005",
    providerName: "Licensed Provider Evaluation",
    sourceType: "licensed_provider",
    coveredDomains: ["competitors", "hashtags", "mentions", "compliance"],
    readinessStatus: "licensed_gated",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    recommendedAction: "Keep gated until contracts, provenance, allowed data domains, rate limits, and compliance review are approved.",
    tone: "rose",
  },
];

export const gatedLicensedProviderPanel: LicensedProviderEvaluationPanel = {
  title: "Licensed provider evaluation placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Provider evaluation for risky or proprietary data domains is not official-safe by default. This area remains unavailable until a compliant licensed provider is configured with contracts, provenance metadata, allowed-domain review, and rate-limit strategy.",
  unavailableReasons: [
    "No scraping, fake login automation, private account access, hidden surveillance, or anti-bot bypass is represented.",
    "Risky data domains require licensed provider approval with confidence, freshness, and policy metadata.",
    "This mock page only frames official Meta APIs, owned/connected webhooks, manual imports, and licensed-provider placeholders.",
  ],
};

export const dataSourceComplianceNotice = {
  title: "Official-first source management",
  description:
    "This data sources page uses mock data for Meta Graph API, Meta Marketing API, Meta Ad Library API, owned/connected account webhooks, manual imports, and clearly gated licensed-provider evaluation only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Owned/connected account webhooks are represented only where official account access is applicable.",
    "No scraping, fake login automation, private account access, hidden surveillance, credential automation, or anti-bot bypass is implemented.",
    "Risky data domains require licensed provider approval before configuration or downstream product exposure.",
  ],
};

export const dataSourceTableRows: DataSourceTableRow[] = dataSourceCards.map((source) => ({
  id: source.id,
  source: source.providerName,
  type: source.sourceType,
  coverage: source.coveredDomains.map((domain) => dataDomainLabels[domain]).join(", "),
  freshness: source.freshness,
  status: source.readinessStatus,
  confidence:
    source.confidenceScore > 0
      ? `${source.confidenceScore}% ${dataSourceConfidenceLabels[source.confidence]}`
      : dataSourceConfidenceLabels[source.confidence],
  policy: source.policyClassification,
  action: source.recommendedAction,
}));