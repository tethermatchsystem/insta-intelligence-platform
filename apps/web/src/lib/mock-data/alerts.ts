export type AlertTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AlertFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type AlertConfidence = "verified" | "high" | "medium" | "needs_review";

export type AlertPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type AlertSourceType = "official_api" | "public_professional" | "licensed_provider" | "mock_provider";

export type AlertStatus = "open" | "triaged" | "in_progress" | "resolved" | "licensed_gated";

export type AlertPriority = "critical" | "high" | "medium" | "low" | "licensed_only";

export type AlertType = "risk" | "opportunity" | "anomaly" | "workflow" | "compliance" | "licensed_only";

export type AlertKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AlertTone;
  description: string;
};

export type AlertFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AlertTrendPoint = {
  label: string;
  value: string;
  height: number;
};

export type AlertPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AlertTone;
};

export type AlertCard = {
  id: string;
  title: string;
  description: string;
  linkedSignal: string;
  priority: AlertPriority;
  type: AlertType;
  sourceProvider: string;
  sourceType: AlertSourceType;
  freshness: AlertFreshness;
  confidence: AlertConfidence;
  confidenceScore: number;
  policyClassification: AlertPolicyClassification;
  status: AlertStatus;
  recommendedAction: string;
  tone: AlertTone;
};

export type AlertWorkflowSla = {
  owner: string;
  responseStatus: string;
  escalationStatus: string;
  mockOnlyNotice: string;
  items: AlertPanelItem[];
};

export type AlertLicensedPanel = {
  title: string;
  status: AlertStatus;
  policyClassification: AlertPolicyClassification;
  sourceProvider: string;
  freshness: AlertFreshness;
  confidence: AlertConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type AlertTableRow = {
  id: string;
  alert: string;
  type: AlertType;
  priority: AlertPriority;
  linkedSignal: string;
  freshness: AlertFreshness;
  source: string;
  confidence: string;
  policy: AlertPolicyClassification;
  status: AlertStatus;
};

export const alertCenterProfile = {
  title: "Alert Center",
  description:
    "Triage compliant risk detection, opportunity alerts, and workflow notifications across owned/connected signals and public/professional monitoring using mock intelligence only.",
  sourceBadge: "Connected and public/professional alerts",
  confidenceBadge: "90% triage confidence",
  freshnessBadge: "Hourly snapshot",
  integrationBadge: "No live integrations",
};

export const alertFreshnessLabels: Record<AlertFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly snapshot",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const alertConfidenceLabels: Record<AlertConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const alertPolicyLabels: Record<AlertPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const alertStatusLabels: Record<AlertStatus, string> = {
  open: "Open",
  triaged: "Triaged",
  in_progress: "In progress",
  resolved: "Resolved",
  licensed_gated: "Licensed gated",
};

export const alertPriorityLabels: Record<AlertPriority, string> = {
  critical: "Critical",
  high: "High priority",
  medium: "Medium priority",
  low: "Low priority",
  licensed_only: "Licensed only",
};

export const alertTypeLabels: Record<AlertType, string> = {
  risk: "Risk",
  opportunity: "Opportunity",
  anomaly: "Anomaly",
  workflow: "Workflow",
  compliance: "Compliance",
  licensed_only: "Licensed only",
};

export const alertKpis: AlertKpi[] = [
  {
    id: "active-alerts",
    label: "Active alerts",
    value: "42",
    delta: "+8 today",
    tone: "blue",
    description: "Mock active alerts from owned/connected account signals and public/professional monitoring placeholders.",
  },
  {
    id: "high-priority-alerts",
    label: "High priority alerts",
    value: "9",
    delta: "triage now",
    tone: "rose",
    description: "High-priority risk and workflow alerts queued for analyst review before response decisions.",
  },
  {
    id: "opportunity-alerts",
    label: "Opportunity alerts",
    value: "17",
    delta: "+5 weekly",
    tone: "green",
    description: "Campaign, mention, and engagement opportunities surfaced with mock confidence metadata.",
  },
  {
    id: "risk-alerts",
    label: "Risk alerts",
    value: "13",
    delta: "review",
    tone: "amber",
    description: "Brand-safety, policy, and anomaly placeholders that require human triage.",
  },
  {
    id: "resolved-this-week",
    label: "Resolved this week",
    value: "68",
    delta: "+14%",
    tone: "cyan",
    description: "Mock workflow throughput across assigned owners, response statuses, and escalation lanes.",
  },
  {
    id: "licensed-only-signals",
    label: "Licensed-only signals",
    value: "Gated",
    delta: "provider only",
    tone: "purple",
    description: "Deeper alert enrichment remains unavailable until a compliant licensed provider is configured.",
  },
];

export const alertFilters: AlertFilterGroup[] = [
  { id: "priority", label: "Priority", options: ["All priorities", "Critical", "High", "Medium", "Low", "Licensed only"] },
  { id: "alert-type", label: "Alert type", options: ["All types", "Risk", "Opportunity", "Anomaly", "Workflow", "Compliance"] },
  { id: "status", label: "Status", options: ["All statuses", "Open", "Triaged", "In progress", "Resolved", "Licensed gated"] },
  { id: "source", label: "Source", options: ["All sources", "Connected owned account", "Public professional monitoring", "Manual import", "Licensed provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const alertVolumeTrend: AlertTrendPoint[] = [
  { label: "Mon", value: "31", height: 54 },
  { label: "Tue", value: "38", height: 62 },
  { label: "Wed", value: "44", height: 74 },
  { label: "Thu", value: "42", height: 70 },
  { label: "Fri", value: "51", height: 88 },
  { label: "Sat", value: "28", height: 45 },
  { label: "Sun", value: "34", height: 58 },
];

export const priorityMix: AlertPanelItem[] = [
  {
    id: "priority-high",
    title: "Critical and high",
    value: "21%",
    detail: "Alerts requiring same-day triage before workflow recommendations are actioned.",
    tone: "rose",
  },
  {
    id: "priority-medium",
    title: "Medium priority",
    value: "46%",
    detail: "Operational alerts suitable for normal queue review and owner assignment.",
    tone: "blue",
  },
  {
    id: "priority-low",
    title: "Low priority",
    value: "33%",
    detail: "Informational alerts for planning, reporting, and weekly workflow summaries.",
    tone: "slate",
  },
];

export const riskCategories: AlertPanelItem[] = [
  {
    id: "risk-brand-safety",
    title: "Brand-safety review",
    value: "6 alerts",
    detail: "Mock public/professional and owned-signal alerts that require analyst context review.",
    tone: "amber",
  },
  {
    id: "risk-policy",
    title: "Policy classification",
    value: "4 alerts",
    detail: "Alerts where feature classification or data-source provenance must be checked first.",
    tone: "purple",
  },
  {
    id: "risk-private-disabled",
    title: "Private monitoring",
    value: "Disabled",
    detail: "No private account monitoring, hidden surveillance, scraping, or anti-bot bypass is represented.",
    tone: "rose",
  },
];

export const opportunityCategories: AlertPanelItem[] = [
  {
    id: "opp-response",
    title: "Response opportunities",
    value: "17",
    detail: "Mentions and comments with mock response intent and confidence metadata.",
    tone: "green",
  },
  {
    id: "opp-content",
    title: "Content momentum",
    value: "9",
    detail: "Owned and public/professional benchmark signals that may inform campaign planning.",
    tone: "cyan",
  },
  {
    id: "opp-workflow",
    title: "Workflow improvements",
    value: "11",
    detail: "Queue, SLA, and owner-assignment placeholders for enterprise operations review.",
    tone: "blue",
  },
];

export const alertCards: AlertCard[] = [
  {
    id: "alert-001",
    title: "High urgency product question spike",
    description: "Connected owned comments show a short-term increase in product questions on the launch carousel.",
    linkedSignal: "Connected owned account · Launch carousel comments",
    priority: "high",
    type: "opportunity",
    sourceProvider: "Connected owned account insights",
    sourceType: "official_api",
    freshness: "hourly",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    status: "open",
    recommendedAction: "Assign response owner, publish FAQ response guidance, and monitor the owned comment thread.",
    tone: "green",
  },
  {
    id: "alert-002",
    title: "Brand-safety claim needs review",
    description: "A public/professional mention references a campaign claim that needs context review before resharing.",
    linkedSignal: "Public professional mention placeholder · Claim context",
    priority: "critical",
    type: "risk",
    sourceProvider: "Public professional monitoring placeholder",
    sourceType: "mock_provider",
    freshness: "daily",
    confidence: "high",
    confidenceScore: 89,
    policyClassification: "official_safe_limited",
    status: "triaged",
    recommendedAction: "Hold response automation and route to brand-safety owner for manual provenance review.",
    tone: "rose",
  },
  {
    id: "alert-003",
    title: "Engagement benchmark anomaly",
    description: "Owned engagement is below the mock peer median for tutorial posts in the current weekly snapshot.",
    linkedSignal: "Connected owned comparison · Tutorial post benchmark",
    priority: "medium",
    type: "anomaly",
    sourceProvider: "Connected owned benchmark summary",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 94,
    policyClassification: "official_safe",
    status: "in_progress",
    recommendedAction: "Review tutorial creative structure and compare with approved public/professional benchmark summaries.",
    tone: "blue",
  },
  {
    id: "alert-004",
    title: "Policy classification review required",
    description: "A planned alert rule references enrichment that must remain licensed-provider-only until configured.",
    linkedSignal: "Workflow rule placeholder · Data-source policy review",
    priority: "medium",
    type: "compliance",
    sourceProvider: "Manual compliance review",
    sourceType: "mock_provider",
    freshness: "manual",
    confidence: "medium",
    confidenceScore: 82,
    policyClassification: "official_safe_limited",
    status: "triaged",
    recommendedAction: "Keep the rule disabled until source provenance, confidence, and licensed-provider status are confirmed.",
    tone: "amber",
  },
  {
    id: "alert-005",
    title: "Private graph enrichment unavailable",
    description: "Deeper cross-account alert correlation is unavailable without a compliant licensed provider.",
    linkedSignal: "Licensed enrichment placeholder · Unavailable",
    priority: "licensed_only",
    type: "licensed_only",
    sourceProvider: "Licensed alert provider required",
    sourceType: "licensed_provider",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    status: "licensed_gated",
    recommendedAction: "Keep deeper enrichment gated until a compliant provider is approved and configured.",
    tone: "purple",
  },
];

export const alertWorkflowSla: AlertWorkflowSla = {
  owner: "Growth ops queue · Mock owner",
  responseStatus: "57 response opportunities ready for review",
  escalationStatus: "9 high-priority alerts routed to analyst triage",
  mockOnlyNotice: "Workflow/SLA state is static mock data only. No backend queue, automation, or live notification integration is connected.",
  items: [
    {
      id: "sla-owner",
      title: "Assigned owner placeholder",
      value: "Growth ops",
      detail: "Default mock owner for opportunity alerts before workflow integration exists.",
      tone: "blue",
    },
    {
      id: "sla-response",
      title: "Response status placeholder",
      value: "Ready",
      detail: "Response opportunities are staged for human review, not automated engagement.",
      tone: "green",
    },
    {
      id: "sla-escalation",
      title: "Escalation status placeholder",
      value: "Review lane",
      detail: "Risk alerts route to analyst review before any external action is recommended.",
      tone: "amber",
    },
  ],
};

export const gatedAlertEnrichmentPanel: AlertLicensedPanel = {
  title: "Deeper alert enrichment placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced cross-channel alert correlation, proprietary risk graphs, and deeper non-public enrichment are not official-safe by default. This area remains unavailable until a compliant licensed provider is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper alert enrichment must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames connected account alerts and public/professional monitoring where applicable.",
  ],
};

export const alertComplianceNotice = {
  title: "Official-first alert center",
  description:
    "This alerts page uses mock data for owned/connected account alerts where applicable, public/professional monitoring placeholders, workflow triage, and clearly gated licensed-provider enrichment only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Connected account and public/professional monitoring alerts require source, confidence, freshness, and policy metadata.",
    "No scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass is implemented.",
    "Deeper enrichment remains licensed-provider-only and unavailable until a compliant provider is configured.",
  ],
};

export const alertTableRows: AlertTableRow[] = alertCards.map((alert) => ({
  id: alert.id,
  alert: alert.title,
  type: alert.type,
  priority: alert.priority,
  linkedSignal: alert.linkedSignal,
  freshness: alert.freshness,
  source: alert.sourceProvider,
  confidence:
    alert.confidenceScore > 0
      ? `${alert.confidenceScore}% ${alertConfidenceLabels[alert.confidence]}`
      : alertConfidenceLabels[alert.confidence],
  policy: alert.policyClassification,
  status: alert.status,
}));