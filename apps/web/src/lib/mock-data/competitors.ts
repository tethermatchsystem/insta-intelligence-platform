export type CompetitorTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type CompetitorFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type CompetitorConfidence = "verified" | "high" | "medium" | "needs_review";

export type CompetitorPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type CompetitorSourceType = "official_api" | "public_ad_library" | "licensed_provider" | "mock_provider";

export type CompetitorStatus = "tracking" | "benchmarking" | "review_required" | "licensed_gated";

export type CompetitorCategory = "beauty" | "fitness" | "commerce" | "hospitality" | "creator_tools";

export type PublicAdVisibility = "active" | "watching" | "quiet" | "licensed_only";

export type CompetitorKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: CompetitorTone;
  description: string;
};

export type CompetitorFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type CompetitorBenchmarkPoint = {
  label: string;
  value: string;
  height: number;
};

export type CompetitorPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: CompetitorTone;
};

export type CompetitorCard = {
  id: string;
  name: string;
  handle: string;
  logoInitials: string;
  category: CompetitorCategory;
  market: string;
  audienceSizeEstimate: string;
  engagementEstimate: string;
  activePublicAds: string;
  adVisibility: PublicAdVisibility;
  sourceProvider: string;
  sourceType: CompetitorSourceType;
  freshness: CompetitorFreshness;
  confidence: CompetitorConfidence;
  confidenceScore: number;
  policyClassification: CompetitorPolicyClassification;
  status: CompetitorStatus;
  recommendedAction: string;
  tone: CompetitorTone;
};

export type CompetitorLicensedPanel = {
  title: string;
  status: CompetitorStatus;
  policyClassification: CompetitorPolicyClassification;
  sourceProvider: string;
  freshness: CompetitorFreshness;
  confidence: CompetitorConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type CompetitorTableRow = {
  id: string;
  competitor: string;
  category: CompetitorCategory;
  audience: string;
  engagement: string;
  publicAds: string;
  source: string;
  confidence: string;
  policy: CompetitorPolicyClassification;
  status: CompetitorStatus;
};

export const competitorIntelligenceProfile = {
  title: "Competitor Intelligence",
  description:
    "Track peer sets, public/professional benchmarks, visible ad activity, and compliant market monitoring using mock intelligence only.",
  sourceBadge: "Public/professional benchmarks",
  confidenceBadge: "86% benchmark confidence",
  freshnessBadge: "Weekly snapshot",
  integrationBadge: "No live integrations",
};

export const competitorFreshnessLabels: Record<CompetitorFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly refresh",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const competitorConfidenceLabels: Record<CompetitorConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const competitorPolicyLabels: Record<CompetitorPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const competitorStatusLabels: Record<CompetitorStatus, string> = {
  tracking: "Tracking",
  benchmarking: "Benchmarking",
  review_required: "Review required",
  licensed_gated: "Licensed gated",
};

export const competitorCategoryLabels: Record<CompetitorCategory, string> = {
  beauty: "Beauty",
  fitness: "Fitness",
  commerce: "Commerce",
  hospitality: "Hospitality",
  creator_tools: "Creator tools",
};

export const adVisibilityLabels: Record<PublicAdVisibility, string> = {
  active: "Active public ads",
  watching: "Watching",
  quiet: "Quiet",
  licensed_only: "Licensed only",
};

export const competitorKpis: CompetitorKpi[] = [
  {
    id: "tracked-competitors",
    label: "Tracked competitors",
    value: "24",
    delta: "+4 this qtr",
    tone: "blue",
    description: "Mock peer set built for public/professional benchmark tracking and owned-account comparison.",
  },
  {
    id: "benchmark-signals",
    label: "Benchmark signals",
    value: "1.8K",
    delta: "weekly",
    tone: "purple",
    description: "Summary-level growth, cadence, engagement, and market visibility signals from mock providers.",
  },
  {
    id: "active-public-ads",
    label: "Active public ads",
    value: "146",
    delta: "public view",
    tone: "green",
    description: "Meta Ad Library style public ad visibility placeholders without private targeting data.",
  },
  {
    id: "engagement-gap",
    label: "Engagement gap",
    value: "+1.7 pts",
    delta: "vs peer median",
    tone: "cyan",
    description: "Mock owned-vs-peer engagement comparison for compliant professional account benchmarking.",
  },
  {
    id: "review-flags",
    label: "Review flags",
    value: "7",
    delta: "manual review",
    tone: "amber",
    description: "Signals requiring analyst review before being used for competitive recommendations.",
  },
  {
    id: "licensed-only-signals",
    label: "Licensed-only signals",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Deeper enrichment remains unavailable until a compliant licensed provider is configured.",
  },
];

export const competitorFilters: CompetitorFilterGroup[] = [
  { id: "category", label: "Category", options: ["All categories", "Beauty", "Fitness", "Commerce", "Hospitality", "Creator tools"] },
  { id: "market", label: "Market", options: ["All markets", "UAE", "US", "UK", "Europe", "MENA"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter to date", "Last 12 months"] },
  { id: "source", label: "Source", options: ["All sources", "Connected owned comparison", "Public professional profile", "Meta Ad Library style", "Licensed provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const competitorGrowthBenchmarks: CompetitorBenchmarkPoint[] = [
  { label: "Owned", value: "+8.4%", height: 80 },
  { label: "Peer median", value: "+5.9%", height: 58 },
  { label: "Top peer", value: "+11.2%", height: 96 },
  { label: "New entrants", value: "+6.8%", height: 66 },
];

export const engagementComparisonSignals: CompetitorPanelItem[] = [
  {
    id: "engagement-owned-gap",
    title: "Owned account advantage",
    value: "+1.7 pts",
    detail: "Owned connected-account engagement is above the mock peer median in this weekly benchmark.",
    tone: "green",
  },
  {
    id: "engagement-save-gap",
    title: "Saves under-index",
    value: "-0.8 pts",
    detail: "Public/professional competitor content suggests a higher save rate on tutorial-style posts.",
    tone: "amber",
  },
  {
    id: "engagement-confidence",
    title: "Confidence band",
    value: "86%",
    detail: "Benchmarks are mock summary estimates and must be reviewed before operational use.",
    tone: "purple",
  },
];

export const contentCadenceComparison: CompetitorPanelItem[] = [
  {
    id: "cadence-reels",
    title: "Short-form cadence",
    value: "4.2x/week",
    detail: "Tracked peer set is publishing short-form content more frequently than the owned baseline.",
    tone: "blue",
  },
  {
    id: "cadence-carousel",
    title: "Carousel depth",
    value: "+18%",
    detail: "Commerce and tutorial peers are leaning into deeper carousel storytelling this period.",
    tone: "cyan",
  },
  {
    id: "cadence-review",
    title: "Manual review lane",
    value: "7 flags",
    detail: "Cadence anomalies are review flags only and do not imply hidden surveillance or scraping.",
    tone: "amber",
  },
];

export const publicAdVisibilitySignals: CompetitorPanelItem[] = [
  {
    id: "ads-active",
    title: "Active public ads visible",
    value: "146",
    detail: "Meta Ad Library style placeholders for public ad visibility, not private targeting or spend data.",
    tone: "green",
  },
  {
    id: "ads-creative-themes",
    title: "Creative themes",
    value: "12 themes",
    detail: "Mock creative clustering for positioning review and benchmark planning.",
    tone: "purple",
  },
  {
    id: "ads-limit",
    title: "Targeting detail",
    value: "Unavailable",
    detail: "Private targeting, delivery, and identity-level ad data are not represented.",
    tone: "rose",
  },
];

export const competitorCards: CompetitorCard[] = [
  {
    id: "competitor-001",
    name: "Luma Beauty Lab",
    handle: "@lumabeauty.lab",
    logoInitials: "LB",
    category: "beauty",
    market: "UAE + GCC",
    audienceSizeEstimate: "418K",
    engagementEstimate: "4.9%",
    activePublicAds: "38",
    adVisibility: "active",
    sourceProvider: "Public professional benchmark",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 90,
    policyClassification: "official_safe_limited",
    status: "tracking",
    recommendedAction: "Compare tutorial and product-launch cadence against owned content plan for the next campaign cycle.",
    tone: "purple",
  },
  {
    id: "competitor-002",
    name: "PeakForm Studio",
    handle: "@peakform.studio",
    logoInitials: "PF",
    category: "fitness",
    market: "US",
    audienceSizeEstimate: "296K",
    engagementEstimate: "5.6%",
    activePublicAds: "21",
    adVisibility: "watching",
    sourceProvider: "Connected owned comparison",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 96,
    policyClassification: "official_safe",
    status: "benchmarking",
    recommendedAction: "Use owned connected-account performance gaps to refine benchmark targets for reels and saves.",
    tone: "blue",
  },
  {
    id: "competitor-003",
    name: "Cartline Collective",
    handle: "@cartline.co",
    logoInitials: "CC",
    category: "commerce",
    market: "UK + Europe",
    audienceSizeEstimate: "522K",
    engagementEstimate: "3.8%",
    activePublicAds: "64",
    adVisibility: "active",
    sourceProvider: "Meta Ad Library style public visibility",
    sourceType: "public_ad_library",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 88,
    policyClassification: "official_safe_limited",
    status: "tracking",
    recommendedAction: "Review public ad creative themes and benchmark launch messaging against owned campaign calendar.",
    tone: "green",
  },
  {
    id: "competitor-004",
    name: "Harbor Stay Social",
    handle: "@harborstay.social",
    logoInitials: "HS",
    category: "hospitality",
    market: "MENA",
    audienceSizeEstimate: "174K",
    engagementEstimate: "4.2%",
    activePublicAds: "9",
    adVisibility: "quiet",
    sourceProvider: "Public professional benchmark",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 78,
    policyClassification: "official_safe_limited",
    status: "review_required",
    recommendedAction: "Validate market and category fit before adding to the executive peer benchmark set.",
    tone: "cyan",
  },
  {
    id: "competitor-005",
    name: "CreatorOps Bench",
    handle: "@creatorops.bench",
    logoInitials: "CB",
    category: "creator_tools",
    market: "Global",
    audienceSizeEstimate: "Licensed",
    engagementEstimate: "Gated",
    activePublicAds: "Licensed",
    adVisibility: "licensed_only",
    sourceProvider: "Licensed competitor provider required",
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

export const gatedCompetitorEnrichmentPanel: CompetitorLicensedPanel = {
  title: "Deeper competitor enrichment placeholder",
  status: "licensed_gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Compliant licensed provider required",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Advanced competitor enrichment, proprietary market datasets, and deeper non-public signals are not official-safe by default. This area remains unavailable until a compliant licensed provider is configured with provenance, gating, and review workflows.",
  unavailableReasons: [
    "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
    "Deeper enrichment must be licensed-provider-only with confidence, freshness, and policy metadata.",
    "This mock page only frames public/professional benchmarks, connected owned comparisons, and public ad visibility.",
  ],
};

export const competitorComplianceNotice = {
  title: "Official-first competitor intelligence",
  description:
    "This competitors page uses mock data for public/professional competitor benchmarks, connected/owned account comparisons, Meta Ad Library style public ad visibility, and clearly gated licensed-provider placeholders only.",
  bullets: [
    "Official APIs and compliant licensed providers are the only future live-data paths represented here.",
    "Public/professional competitor benchmarks are summary-level and require source, confidence, freshness, and policy metadata.",
    "No scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass is implemented.",
    "Deeper enrichment remains licensed-provider-only and unavailable until a compliant provider is configured.",
  ],
};

export const competitorTableRows: CompetitorTableRow[] = competitorCards.map((competitor) => ({
  id: competitor.id,
  competitor: `${competitor.name} ${competitor.handle}`,
  category: competitor.category,
  audience: competitor.audienceSizeEstimate,
  engagement: competitor.engagementEstimate,
  publicAds: competitor.activePublicAds,
  source: competitor.sourceProvider,
  confidence:
    competitor.confidenceScore > 0
      ? `${competitor.confidenceScore}% ${competitorConfidenceLabels[competitor.confidence]}`
      : competitorConfidenceLabels[competitor.confidence],
  policy: competitor.policyClassification,
  status: competitor.status,
}));