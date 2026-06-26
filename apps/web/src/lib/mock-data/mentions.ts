export type MentionTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type MentionFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type MentionConfidence = "verified" | "high" | "medium" | "needs_review";

export type MentionPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type MentionSourceType = "official_api" | "public_professional" | "licensed_provider" | "mock_provider";

export type MentionStatus = "open" | "triaged" | "response_ready" | "review_required" | "licensed_gated";

export type MentionSentiment = "positive" | "neutral" | "negative" | "mixed" | "licensed_only";

export type MentionIntent = "praise" | "question" | "purchase_intent" | "support" | "risk" | "licensed_only";

export type MentionUrgency = "low" | "medium" | "high" | "review" | "licensed_only";

export type MentionKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: MentionTone;
  description: string;
};

export type MentionFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type MentionTrendPoint = {
  label: string;
  value: string;
  height: number;
};

export type MentionPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: MentionTone;
};

export type MentionCard = {
  id: string;
  sourceName: string;
  sourceHandle: string;
  avatarInitials: string;
  textPreview: string;
  linkedSurface: string;
  mentionType: string;
  sentiment: MentionSentiment;
  intent: MentionIntent;
  urgency: MentionUrgency;
  sourceProvider: string;
  sourceType: MentionSourceType;
  freshness: MentionFreshness;
  confidence: MentionConfidence;
  confidenceScore: number;
  policyClassification: MentionPolicyClassification;
  status: MentionStatus;
  recommendedAction: string;
  tone: MentionTone;
};

export type MentionLicensedPanel = {
  title: string;
  status: MentionStatus;
  policyClassification: MentionPolicyClassification;
  sourceProvider: string;
  freshness: MentionFreshness;
  confidence: MentionConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type MentionTableRow = {
  id: string;
  mention: string;
  source: string;
  sentiment: MentionSentiment;
  intent: MentionIntent;
  urgency: MentionUrgency;
  freshness: MentionFreshness;
  confidence: string;
  policy: MentionPolicyClassification;
  status: MentionStatus;
};

export const mentionMonitoringProfile = {
  title: "Mention Preview",
  description:
    "Preview mock mention intelligence, response opportunities, and compliant public/professional signals. Listening is disabled in Alpha, and no live mention listening is running.",
  sourceBadge: "Mock mention intelligence",
  confidenceBadge: "Preview sentiment",
  freshnessBadge: "Alpha demo only",
  integrationBadge: "No live mention listening is running",
};

export const mentionFreshnessLabels: Record<MentionFreshness, string> = {
  near_real_time: "Alpha demo only",
  hourly: "Alpha demo only",
  daily: "Static preview snapshot",
  weekly: "Static preview snapshot",
  manual: "Manual preview import",
};

export const mentionConfidenceLabels: Record<MentionConfidence, string> = {
  verified: "Preview sentiment",
  high: "Preview sentiment",
  medium: "Preview sentiment",
  needs_review: "Needs review",
};

export const mentionPolicyLabels: Record<MentionPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const mentionStatusLabels: Record<MentionStatus, string> = {
  open: "Preview open",
  triaged: "Preview triaged",
  response_ready: "Response preview",
  review_required: "Review required",
  licensed_gated: "Requires private-beta monitoring service",
};

export const mentionSentimentLabels: Record<MentionSentiment, string> = {
  positive: "Positive",
  neutral: "Neutral",
  negative: "Negative",
  mixed: "Mixed",
  licensed_only: "Licensed only",
};

export const mentionIntentLabels: Record<MentionIntent, string> = {
  praise: "Praise",
  question: "Question",
  purchase_intent: "Purchase intent",
  support: "Support",
  risk: "Risk",
  licensed_only: "Licensed only",
};

export const mentionUrgencyLabels: Record<MentionUrgency, string> = {
  low: "Low",
  medium: "Medium",
  high: "High",
  review: "Review",
  licensed_only: "Licensed only",
};

export const mentionKpis: MentionKpi[] = [
  {
    id: "tracked-mentions",
    label: "Mention previews",
    value: "2.4K",
    delta: "Alpha demo only",
    tone: "blue",
    description: "Mock mention intelligence summaries for public/professional and connected-account preview workflows.",
  },
  {
    id: "new-mentions",
    label: "New mention previews",
    value: "184",
    delta: "Preview only",
    tone: "cyan",
    description: "Mock mentions entering review and response preview across allowed source types.",
  },
  {
    id: "positive-mentions",
    label: "Preview sentiment",
    value: "68%",
    delta: "+5 pts",
    tone: "green",
    description: "Positive sentiment share from mock owned and public/professional mention previews.",
  },
  {
    id: "negative-mentions",
    label: "Negative mentions",
    value: "9%",
    delta: "review",
    tone: "amber",
    description: "Negative or mixed mentions routed to analyst review before escalation decisions.",
  },
  {
    id: "response-opportunities",
    label: "Response opportunities",
    value: "57",
    delta: "ready",
    tone: "purple",
    description: "Mentions with mock response intent, urgency, and confidence metadata ready for review.",
  },
  {
    id: "licensed-only-enrichments",
    label: "Licensed-only enrichments",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper identity, cross-channel, and proprietary enrichment remains licensed-provider-only.",
  },
];

export const mentionFilters: MentionFilterGroup[] = [
  { id: "sentiment", label: "Preview sentiment", options: ["All preview sentiment", "Positive", "Neutral", "Negative", "Mixed", "Needs review"] },
  { id: "channel-source", label: "Channel/source", options: ["All sources", "Requires official source connection", "Mock mention intelligence", "Manual CSV", "Requires private-beta monitoring service"] },
  { id: "date-range", label: "Preview window", options: ["Static Alpha window", "Mock 7-day view", "Mock today view", "Mock quarter view"] },
  { id: "mention-type", label: "Mention type", options: ["All types", "Brand tag", "Campaign mention", "Product question", "Support issue", "Opportunity"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const sentimentTrendPoints: MentionTrendPoint[] = [
  { label: "Mon", value: "62%", height: 62 },
  { label: "Tue", value: "66%", height: 66 },
  { label: "Wed", value: "71%", height: 71 },
  { label: "Thu", value: "68%", height: 68 },
  { label: "Fri", value: "74%", height: 74 },
  { label: "Sat", value: "69%", height: 69 },
  { label: "Sun", value: "72%", height: 72 },
];

export const mentionSourceMix: MentionPanelItem[] = [
  {
    id: "source-owned",
    title: "Owned connected mentions",
    value: "46%",
    detail: "Mentions from connected/owned surfaces where official account access is applicable.",
    tone: "green",
  },
  {
    id: "source-public",
    title: "Public professional references",
    value: "38%",
    detail: "Public/professional mention preview placeholders for brand review.",
    tone: "blue",
  },
  {
    id: "source-manual",
    title: "Manual imports",
    value: "16%",
    detail: "Mock CSV or analyst-supplied rows with source, confidence, and policy metadata.",
    tone: "cyan",
  },
];

export const opportunityThemes: MentionPanelItem[] = [
  {
    id: "theme-ugc",
    title: "UGC amplification",
    value: "22 mentions",
    detail: "Positive mentions that could become campaign response or creator shortlist opportunities.",
    tone: "purple",
  },
  {
    id: "theme-product",
    title: "Product questions",
    value: "19 mentions",
    detail: "Questions suitable for support response, FAQ content, or sales follow-up workflows.",
    tone: "green",
  },
  {
    id: "theme-campaign",
    title: "Campaign references",
    value: "16 mentions",
    detail: "Campaign-related mentions ready for analyst review and owned response planning.",
    tone: "blue",
  },
];

export const riskEscalationSignals: MentionPanelItem[] = [
  {
    id: "risk-negative",
    title: "Negative sentiment queue",
    value: "9%",
    detail: "Negative mentions are review placeholders and require human escalation decisions.",
    tone: "amber",
  },
  {
    id: "risk-urgent",
    title: "High urgency mentions",
    value: "8",
    detail: "Mock high-urgency mentions that should be triaged before response recommendations.",
    tone: "rose",
  },
  {
    id: "risk-private",
    title: "Private signals",
    value: "Disabled",
    detail: "No private account access, hidden surveillance, scraping, or anti-bot bypass signals are represented.",
    tone: "slate",
  },
];

export const mentionCards: MentionCard[] = [
  {
    id: "mention-001",
    sourceName: "Maya Lin Studio",
    sourceHandle: "@mayalin.studio",
    avatarInitials: "ML",
    textPreview: "The new launch workflow from the brand is genuinely useful — saving this for our next content sprint.",
    linkedSurface: "Connected owned post placeholder · Launch carousel",
    mentionType: "Brand tag",
    sentiment: "positive",
    intent: "praise",
    urgency: "medium",
    sourceProvider: "Requires official source connection",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    status: "response_ready",
    recommendedAction: "Prepare a thank-you response and consider shortlisting for compliant UGC amplification.",
    tone: "purple",
  },
  {
    id: "mention-002",
    sourceName: "The Commerce Edit",
    sourceHandle: "@commerce.edit",
    avatarInitials: "CE",
    textPreview: "Does this product workflow support multi-market content calendars? We are comparing options this week.",
    linkedSurface: "Public professional post placeholder · Product question",
    mentionType: "Product question",
    sentiment: "positive",
    intent: "purchase_intent",
    urgency: "high",
    sourceProvider: "Mock mention intelligence",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 90,
    policyClassification: "official_safe_limited",
    status: "open",
    recommendedAction: "Review this Alpha demo only mention preview before any response planning; no live mention listening is running.",
    tone: "green",
  },
  {
    id: "mention-003",
    sourceName: "Northline Creative Ops",
    sourceHandle: "@northline.ops",
    avatarInitials: "NO",
    textPreview: "Great idea, but we had trouble finding examples for advanced campaign reporting in the latest walkthrough.",
    linkedSurface: "Connected owned comment placeholder · Tutorial reel",
    mentionType: "Support issue",
    sentiment: "mixed",
    intent: "support",
    urgency: "medium",
    sourceProvider: "Requires official source connection",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 95,
    policyClassification: "official_safe",
    status: "triaged",
    recommendedAction: "Create a support response and add reporting examples to the next content brief.",
    tone: "blue",
  },
  {
    id: "mention-004",
    sourceName: "Harbor Stay Social",
    sourceHandle: "@harborstay.social",
    avatarInitials: "HS",
    textPreview: "Some campaign claims need context before we reshare this. Please verify the details first.",
    linkedSurface: "Public professional mention placeholder · Brand safety review",
    mentionType: "Risk review",
    sentiment: "negative",
    intent: "risk",
    urgency: "review",
    sourceProvider: "Manual analyst import",
    sourceType: "mock_provider",
    freshness: "manual",
    confidence: "medium",
    confidenceScore: 78,
    policyClassification: "official_safe_limited",
    status: "review_required",
    recommendedAction: "Hold response recommendations until an analyst reviews claim context and source provenance.",
    tone: "amber",
  },
  {
    id: "mention-005",
    sourceName: "Private Cross-Channel Map",
    sourceHandle: "licensed enrichment placeholder",
    avatarInitials: "LP",
    textPreview: "Deeper identity resolution, cross-channel mention graphs, and private enrichment remain unavailable.",
    linkedSurface: "Licensed provider placeholder · Unavailable",
    mentionType: "Licensed enrichment",
    sentiment: "licensed_only",
    intent: "licensed_only",
    urgency: "licensed_only",
    sourceProvider: "Requires private-beta monitoring service",
    sourceType: "licensed_provider",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    status: "licensed_gated",
    recommendedAction: "Keep deeper enrichment unavailable until a compliant private-beta monitoring service is reviewed and approved.",
    tone: "rose",
  },
];

export const gatedMentionEnrichmentPanel: MentionLicensedPanel = {
  title: "Deeper mention enrichment placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Requires private-beta monitoring service",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Cross-channel identity enrichment, proprietary mention graphs, and deeper non-public listening datasets are not official-safe by default. This area remains unavailable until a compliant private-beta monitoring service is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper mention enrichment must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames public/professional mention previews and connected owned-account mention previews where applicable.",
  ],
};

export const mentionComplianceNotice = {
  title: "Official-first mention preview",
  description:
    "This mentions page uses Alpha demo only mock mention intelligence, connected owned-account mention previews where applicable, opportunity detection placeholders, response triage previews, and clearly gated licensed-provider placeholders. Listening is disabled in Alpha and no live mention listening is running.",
  bullets: [
    "Requires official source connection or compliant private-beta monitoring service before any future live-data path is represented here.",
    "Public/professional mention previews are summary-level and require source, confidence, freshness, and policy metadata.",
    "Connected account mentions are represented only where official account access is applicable.",
    "No scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass is implemented.",
    "Deeper enrichment remains licensed-provider-only and unavailable until a compliant provider is reviewed and configured.",
  ],
};

export const mentionTableRows: MentionTableRow[] = mentionCards.map((mention) => ({
  id: mention.id,
  mention: mention.textPreview,
  source: `${mention.sourceName} ${mention.sourceHandle}`,
  sentiment: mention.sentiment,
  intent: mention.intent,
  urgency: mention.urgency,
  freshness: mention.freshness,
  confidence:
    mention.confidenceScore > 0
      ? `${mention.confidenceScore}% ${mentionConfidenceLabels[mention.confidence]}`
      : mentionConfidenceLabels[mention.confidence],
  policy: mention.policyClassification,
  status: mention.status,
}));