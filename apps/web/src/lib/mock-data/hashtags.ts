export type HashtagTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type HashtagFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type HashtagConfidence = "verified" | "high" | "medium" | "needs_review";

export type HashtagPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type HashtagSourceType = "official_api" | "public_content_access" | "licensed_provider" | "mock_provider";

export type HashtagStatus = "tracking" | "opportunity" | "campaign_ready" | "review_required" | "licensed_gated";

export type HashtagTopic = "beauty" | "fitness" | "commerce" | "travel" | "creator_ops" | "education";

export type HashtagRisk = "low" | "moderate" | "review" | "licensed_only";

export type HashtagKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: HashtagTone;
  description: string;
};

export type HashtagFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type HashtagTrendPoint = {
  label: string;
  value: string;
  height: number;
};

export type HashtagPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: HashtagTone;
};

export type HashtagCard = {
  id: string;
  hashtag: string;
  topic: HashtagTopic;
  categoryDetail: string;
  marketLanguage: string;
  estimatedMomentum: string;
  campaignFitScore: number;
  riskLevel: HashtagRisk;
  sourceProvider: string;
  sourceType: HashtagSourceType;
  freshness: HashtagFreshness;
  confidence: HashtagConfidence;
  confidenceScore: number;
  policyClassification: HashtagPolicyClassification;
  status: HashtagStatus;
  recommendedAction: string;
  tone: HashtagTone;
};

export type HashtagLicensedPanel = {
  title: string;
  status: HashtagStatus;
  policyClassification: HashtagPolicyClassification;
  sourceProvider: string;
  freshness: HashtagFreshness;
  confidence: HashtagConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type HashtagTableRow = {
  id: string;
  hashtag: string;
  topic: HashtagTopic;
  momentum: string;
  campaignFit: string;
  risk: HashtagRisk;
  source: string;
  confidence: string;
  policy: HashtagPolicyClassification;
  status: HashtagStatus;
};

export const hashtagIntelligenceProfile = {
  title: "Hashtag Intelligence",
  description:
    "Discover campaign topics, plan hashtag sets, and monitor compliant public/professional trend signals using mock intelligence only.",
  sourceBadge: "Public/professional topic intelligence",
  confidenceBadge: "88% trend confidence",
  freshnessBadge: "Weekly snapshot",
  integrationBadge: "No live integrations",
};

export const hashtagFreshnessLabels: Record<HashtagFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly refresh",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const hashtagConfidenceLabels: Record<HashtagConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const hashtagPolicyLabels: Record<HashtagPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const hashtagStatusLabels: Record<HashtagStatus, string> = {
  tracking: "Tracking",
  opportunity: "Opportunity",
  campaign_ready: "Campaign ready",
  review_required: "Review required",
  licensed_gated: "Licensed gated",
};

export const hashtagTopicLabels: Record<HashtagTopic, string> = {
  beauty: "Beauty",
  fitness: "Fitness",
  commerce: "Commerce",
  travel: "Travel",
  creator_ops: "Creator ops",
  education: "Education",
};

export const hashtagRiskLabels: Record<HashtagRisk, string> = {
  low: "Low risk",
  moderate: "Moderate risk",
  review: "Needs review",
  licensed_only: "Licensed only",
};

export const hashtagKpis: HashtagKpi[] = [
  {
    id: "tracked-hashtags",
    label: "Tracked hashtags",
    value: "312",
    delta: "+28 this month",
    tone: "blue",
    description: "Mock hashtag set for public/professional topic discovery and campaign planning workflows.",
  },
  {
    id: "opportunity-hashtags",
    label: "Opportunity hashtags",
    value: "46",
    delta: "15% fit",
    tone: "green",
    description: "Hashtags with strong campaign fit and acceptable review posture in this mock dataset.",
  },
  {
    id: "rising-topics",
    label: "Rising topics",
    value: "18",
    delta: "+7 weekly",
    tone: "purple",
    description: "Topic clusters with positive mock momentum for compliant trend monitoring.",
  },
  {
    id: "campaign-matches",
    label: "Campaign matches",
    value: "128",
    delta: "ready",
    tone: "cyan",
    description: "Hashtags aligned to owned campaign themes and connected-account performance summaries.",
  },
  {
    id: "review-flags",
    label: "Review flags",
    value: "11",
    delta: "manual review",
    tone: "amber",
    description: "Risk and brand-safety flags queued for analyst review before campaign use.",
  },
  {
    id: "licensed-only-signals",
    label: "Licensed-only signals",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper trend enrichment remains unavailable until a compliant licensed provider is configured.",
  },
];

export const hashtagFilters: HashtagFilterGroup[] = [
  { id: "category", label: "Category", options: ["All categories", "Beauty", "Fitness", "Commerce", "Travel", "Creator ops", "Education"] },
  { id: "market-language", label: "Market/language", options: ["All markets/languages", "UAE / English", "MENA / Arabic", "US / English", "Europe / English"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter to date", "Last 12 months"] },
  { id: "source", label: "Source", options: ["All sources", "Connected owned performance", "Public content access", "Public/professional topics", "Licensed provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const hashtagTrendMomentum: HashtagTrendPoint[] = [
  { label: "Owned wins", value: "+12%", height: 78 },
  { label: "Beauty", value: "+18%", height: 92 },
  { label: "Commerce", value: "+9%", height: 60 },
  { label: "Creator ops", value: "+14%", height: 74 },
  { label: "Travel", value: "+6%", height: 46 },
];

export const topicClusterMix: HashtagPanelItem[] = [
  {
    id: "cluster-beauty",
    title: "Beauty launches",
    value: "29% mix",
    detail: "Mock cluster covering product launch, routine, and tutorial hashtags for public/professional planning.",
    tone: "purple",
  },
  {
    id: "cluster-commerce",
    title: "Commerce storytelling",
    value: "23% mix",
    detail: "Shoppable content themes are over-indexing for owned campaign planning in this snapshot.",
    tone: "green",
  },
  {
    id: "cluster-education",
    title: "Education and how-to",
    value: "17% mix",
    detail: "Tutorial topics show durable fit for saves and campaign content briefs.",
    tone: "cyan",
  },
];

export const campaignFitOverview: HashtagPanelItem[] = [
  {
    id: "fit-launch",
    title: "Launch campaign fit",
    value: "91%",
    detail: "High fit for upcoming product launch themes using mock public/professional topic intelligence.",
    tone: "green",
  },
  {
    id: "fit-owned",
    title: "Owned account overlap",
    value: "84%",
    detail: "Connected owned-account hashtag performance supports shortlisting for campaign tests.",
    tone: "blue",
  },
  {
    id: "fit-review",
    title: "Analyst review queue",
    value: "11 flags",
    detail: "Flagged hashtags require review before inclusion in recommended campaign sets.",
    tone: "amber",
  },
];

export const riskBrandSafetySignals: HashtagPanelItem[] = [
  {
    id: "risk-low",
    title: "Low-risk candidates",
    value: "72%",
    detail: "Most mock candidates are clear for normal campaign planning after policy review.",
    tone: "green",
  },
  {
    id: "risk-context",
    title: "Context review",
    value: "Moderate",
    detail: "Some topics need human context review due to ambiguous wording or seasonal spikes.",
    tone: "amber",
  },
  {
    id: "risk-private",
    title: "Private signals",
    value: "Disabled",
    detail: "No private account access, hidden surveillance, scraping, or anti-bot bypass signals are represented.",
    tone: "rose",
  },
];

export const hashtagCards: HashtagCard[] = [
  {
    id: "hashtag-001",
    hashtag: "#GlowRoutineLab",
    topic: "beauty",
    categoryDetail: "Beauty tutorials and routine content",
    marketLanguage: "UAE / English",
    estimatedMomentum: "+18% weekly",
    campaignFitScore: 94,
    riskLevel: "low",
    sourceProvider: "Public/professional topic intelligence",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 91,
    policyClassification: "official_safe_limited",
    status: "campaign_ready",
    recommendedAction: "Shortlist for tutorial-led launch posts and compare with owned hashtag performance before campaign use.",
    tone: "purple",
  },
  {
    id: "hashtag-002",
    hashtag: "#StudioLaunchPlan",
    topic: "creator_ops",
    categoryDetail: "Creator operations and launch planning",
    marketLanguage: "US / English",
    estimatedMomentum: "+14% weekly",
    campaignFitScore: 89,
    riskLevel: "low",
    sourceProvider: "Connected owned performance",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 96,
    policyClassification: "official_safe",
    status: "opportunity",
    recommendedAction: "Use connected owned-account performance summaries to test this hashtag in campaign planning.",
    tone: "blue",
  },
  {
    id: "hashtag-003",
    hashtag: "#CartToContent",
    topic: "commerce",
    categoryDetail: "Commerce storytelling and shoppable content",
    marketLanguage: "UK + Europe / English",
    estimatedMomentum: "+9% weekly",
    campaignFitScore: 86,
    riskLevel: "moderate",
    sourceProvider: "Public content access placeholder",
    sourceType: "public_content_access",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 88,
    policyClassification: "official_safe_limited",
    status: "tracking",
    recommendedAction: "Pair with commerce creative themes and route through brand-safety review before publishing.",
    tone: "green",
  },
  {
    id: "hashtag-004",
    hashtag: "#WeekendStayGuide",
    topic: "travel",
    categoryDetail: "Hospitality and destination planning",
    marketLanguage: "MENA / English + Arabic",
    estimatedMomentum: "+6% weekly",
    campaignFitScore: 78,
    riskLevel: "review",
    sourceProvider: "Public/professional topic intelligence",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 80,
    policyClassification: "official_safe_limited",
    status: "review_required",
    recommendedAction: "Validate language and seasonal context before including in regional campaign briefs.",
    tone: "cyan",
  },
  {
    id: "hashtag-005",
    hashtag: "#PrivateTrendMap",
    topic: "education",
    categoryDetail: "Licensed trend enrichment placeholder",
    marketLanguage: "Global",
    estimatedMomentum: "Licensed",
    campaignFitScore: 0,
    riskLevel: "licensed_only",
    sourceProvider: "Licensed hashtag provider required",
    sourceType: "licensed_provider",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    status: "licensed_gated",
    recommendedAction: "Keep deeper enrichment unavailable until a compliant licensed provider is configured and approved.",
    tone: "rose",
  },
];

export const gatedHashtagEnrichmentPanel: HashtagLicensedPanel = {
  title: "Deeper hashtag enrichment placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced trend enrichment, proprietary hashtag graphs, and deeper non-public topic datasets are not official-safe by default. This placeholder remains unavailable until a compliant licensed provider is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper hashtag enrichment must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames public/professional hashtag intelligence and connected owned-account summaries.",
  ],
};

export const hashtagComplianceNotice = {
  title: "Official-first hashtag intelligence",
  description:
    "This hashtags page uses mock data for public/professional topic intelligence, connected owned-account hashtag performance summaries, campaign planning, and clearly gated licensed-provider placeholders only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Public/professional hashtag intelligence is summary-level and requires source, confidence, freshness, and policy metadata.",
    "No scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass is implemented.",
    "Deeper enrichment remains licensed-provider-only and unavailable until a compliant provider is configured.",
  ],
};

export const hashtagTableRows: HashtagTableRow[] = hashtagCards.map((hashtag) => ({
  id: hashtag.id,
  hashtag: hashtag.hashtag,
  topic: hashtag.topic,
  momentum: hashtag.estimatedMomentum,
  campaignFit: hashtag.campaignFitScore > 0 ? `${hashtag.campaignFitScore}%` : "Gated",
  risk: hashtag.riskLevel,
  source: hashtag.sourceProvider,
  confidence:
    hashtag.confidenceScore > 0
      ? `${hashtag.confidenceScore}% ${hashtagConfidenceLabels[hashtag.confidence]}`
      : hashtagConfidenceLabels[hashtag.confidence],
  policy: hashtag.policyClassification,
  status: hashtag.status,
}));