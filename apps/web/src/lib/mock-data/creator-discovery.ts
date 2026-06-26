export type CreatorDiscoveryTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type CreatorDiscoveryFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type CreatorDiscoveryConfidence = "verified" | "high" | "medium" | "needs_review";

export type CreatorDiscoveryPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type CreatorDiscoverySourceType = "official_api" | "licensed_provider" | "mock_provider";

export type CreatorDiscoveryStatus = "qualified" | "outreach_ready" | "monitoring" | "needs_review" | "gated";

export type CreatorDiscoveryCategory = "design" | "creator_ops" | "commerce" | "lifestyle" | "education";

export type CreatorDiscoveryKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: CreatorDiscoveryTone;
  description: string;
};

export type CreatorDiscoveryFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type CreatorDiscoveryMixPoint = {
  label: string;
  value: string;
  height: number;
};

export type CreatorDiscoveryPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: CreatorDiscoveryTone;
};

export type CreatorDiscoveryCard = {
  id: string;
  name: string;
  handle: string;
  avatarInitials: string;
  category: CreatorDiscoveryCategory;
  niche: string;
  audienceSize: string;
  engagementEstimate: string;
  fitScore: number;
  sourceProvider: string;
  sourceType: CreatorDiscoverySourceType;
  freshness: CreatorDiscoveryFreshness;
  confidence: CreatorDiscoveryConfidence;
  confidenceScore: number;
  policyClassification: CreatorDiscoveryPolicyClassification;
  status: CreatorDiscoveryStatus;
  recommendedAction: string;
  tone: CreatorDiscoveryTone;
};

export type CreatorDiscoveryGatedEnrichmentPanel = {
  title: string;
  status: CreatorDiscoveryStatus;
  policyClassification: CreatorDiscoveryPolicyClassification;
  sourceProvider: string;
  freshness: CreatorDiscoveryFreshness;
  confidence: CreatorDiscoveryConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type CreatorDiscoveryTableRow = {
  id: string;
  creator: string;
  category: CreatorDiscoveryCategory;
  audience: string;
  engagement: string;
  fitScore: string;
  source: string;
  confidence: string;
  policy: CreatorDiscoveryPolicyClassification;
  status: CreatorDiscoveryStatus;
};

export const creatorDiscoveryProfile = {
  title: "Creator Preview",
  description:
    "Preview mock creator profiles for brand and agency planning. Discovery is disabled in Alpha, and no live creator discovery is running.",
  sourceBadge: "Mock creator profile",
  confidenceBadge: "Preview score only",
  freshnessBadge: "Alpha demo only",
  integrationBadge: "No live creator discovery is running",
};

export const creatorDiscoveryFreshnessLabels: Record<CreatorDiscoveryFreshness, string> = {
  near_real_time: "Alpha demo only",
  hourly: "Alpha demo only",
  daily: "Static preview snapshot",
  weekly: "Static preview snapshot",
  manual: "Manual preview import",
};

export const creatorDiscoveryConfidenceLabels: Record<CreatorDiscoveryConfidence, string> = {
  verified: "Preview score",
  high: "Preview score",
  medium: "Preview score",
  needs_review: "Needs review",
};

export const creatorDiscoveryPolicyLabels: Record<CreatorDiscoveryPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
  disabled_by_default: "Disabled by default",
};

export const creatorDiscoveryStatusLabels: Record<CreatorDiscoveryStatus, string> = {
  qualified: "Preview qualified",
  outreach_ready: "Planning preview",
  monitoring: "Discovery disabled in Alpha",
  needs_review: "Needs review",
  gated: "Gated",
};

export const creatorDiscoveryCategoryLabels: Record<CreatorDiscoveryCategory, string> = {
  design: "Design",
  creator_ops: "Creator ops",
  commerce: "Commerce",
  lifestyle: "Lifestyle",
  education: "Education",
};

export const creatorDiscoveryKpis: CreatorDiscoveryKpi[] = [
  {
    id: "creators-indexed",
    label: "Creator previews",
    value: "18.4K",
    delta: "Alpha demo only",
    tone: "blue",
    description: "Mock creator profile index only. Discovery is disabled in Alpha.",
  },
  {
    id: "qualified-creators",
    label: "Mock creator profiles",
    value: "2.9K",
    delta: "Preview score",
    tone: "green",
    description: "Preview profiles matching brand, niche, audience, and review criteria in this mock dataset.",
  },
  {
    id: "audience-fit",
    label: "Audience preview score",
    value: "84%",
    delta: "+6 pts",
    tone: "purple",
    description: "Mock audience-fit estimate. Requires official source connection for any future live use.",
  },
  {
    id: "brand-safety-flags",
    label: "Brand safety flags",
    value: "31",
    delta: "review",
    tone: "amber",
    description: "Mock brand safety flags for review workflows, not hidden surveillance.",
  },
  {
    id: "outreach-ready",
    label: "Planning previews",
    value: "412",
    delta: "Alpha demo only",
    tone: "cyan",
    description: "Mock profiles for compliant planning only; no live outreach or private contact data is included.",
  },
  {
    id: "licensed-enrichments",
    label: "Licensed-only enrichments",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Contact and enrichment data remains licensed-provider-only and unavailable by default.",
  },
];

export const creatorDiscoveryFilters: CreatorDiscoveryFilterGroup[] = [
  { id: "category", label: "Niche/category", options: ["All categories", "Design", "Creator ops", "Commerce", "Lifestyle", "Education"] },
  { id: "geography", label: "Geography", options: ["Any geography", "US", "UK", "UAE", "Europe"] },
  { id: "audience-size", label: "Audience size", options: ["Any size", "10K-50K", "50K-250K", "250K-1M", "1M+"] },
  { id: "engagement", label: "Preview engagement", options: ["Any preview", "Above baseline", "High saves", "High comments", "Needs review"] },
  { id: "source", label: "Source", options: ["All sources", "Requires official source connection", "Connected overlap preview", "Requires licensed provider review"] },
  { id: "confidence", label: "Preview score", options: ["Any preview score", "High preview", "Medium preview", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const creatorCategoryMix: CreatorDiscoveryMixPoint[] = [
  { label: "Design", value: "31%", height: 78 },
  { label: "Ops", value: "24%", height: 62 },
  { label: "Commerce", value: "18%", height: 48 },
  { label: "Lifestyle", value: "16%", height: 42 },
  { label: "Education", value: "11%", height: 30 },
];

export const audienceFitSegments: CreatorDiscoveryPanelItem[] = [
  { id: "fit-studio", title: "Studio workflow audience", value: "91% preview", detail: "Mock creator audiences aligned to production, planning, and design operations.", tone: "purple" },
  { id: "fit-commerce", title: "Commerce operators", value: "84% preview", detail: "Mock overlap with retail, ecommerce, and launch-focused operators.", tone: "green" },
  { id: "fit-education", title: "Learning communities", value: "76% preview", detail: "Preview-only education creator patterns for planning review.", tone: "cyan" },
];

export const brandSafetyOverview: CreatorDiscoveryPanelItem[] = [
  { id: "safety-clear", title: "Clear profiles", value: "92%", detail: "Mock brand-safety pass rate across qualified creator profiles.", tone: "green" },
  { id: "safety-review", title: "Needs review", value: "31", detail: "Profiles queued for manual brand safety review before campaign planning.", tone: "amber" },
  { id: "safety-gated", title: "Private signals", value: "Disabled", detail: "No private identity tracking or hidden surveillance signals are represented.", tone: "rose" },
];

export const growthOpportunities: CreatorDiscoveryPanelItem[] = [
  { id: "growth-micro", title: "Micro-creator preview", value: "+22%", detail: "Mock pool of 10K-50K creator profiles with preview audience-fit estimates.", tone: "blue" },
  { id: "growth-reels", title: "Short-form production", value: "Preview", detail: "Mock creator profile examples for planning; no live discovery is running.", tone: "purple" },
  { id: "growth-licensed", title: "Contact enrichment", value: "Gated", detail: "Contact and enrichment data requires licensed provider review.", tone: "rose" },
];

export const creatorDiscoveryCards: CreatorDiscoveryCard[] = [
  {
    id: "creator-001",
    name: "Maya Lin Studio",
    handle: "@mayalin.studio",
    avatarInitials: "ML",
    category: "design",
    niche: "Studio systems and product styling",
    audienceSize: "184K",
    engagementEstimate: "5.9%",
    fitScore: 94,
    sourceProvider: "Mock public profile preview",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 92,
    policyClassification: "official_safe_limited",
    status: "outreach_ready",
    recommendedAction: "Review this Alpha demo only profile and request licensed provider review before any future enrichment.",
    tone: "purple",
  },
  {
    id: "creator-002",
    name: "Northline Creative Ops",
    handle: "@northline.ops",
    avatarInitials: "NO",
    category: "creator_ops",
    niche: "Creative operations and campaign planning",
    audienceSize: "92K",
    engagementEstimate: "6.4%",
    fitScore: 91,
    sourceProvider: "Connected overlap preview",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "verified",
    confidenceScore: 96,
    policyClassification: "official_safe_limited",
    status: "qualified",
    recommendedAction: "Use as a mock creator profile for planning; requires official source connection before any live workflow.",
    tone: "blue",
  },
  {
    id: "creator-003",
    name: "The Commerce Edit",
    handle: "@commerce.edit",
    avatarInitials: "CE",
    category: "commerce",
    niche: "Retail launches and product storytelling",
    audienceSize: "241K",
    engagementEstimate: "4.8%",
    fitScore: 86,
    sourceProvider: "Requires licensed provider review",
    sourceType: "licensed_provider",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 84,
    policyClassification: "licensed_provider_only",
    status: "needs_review",
    recommendedAction: "Requires licensed provider review before any enrichment or outreach workflow is considered.",
    tone: "green",
  },
  {
    id: "creator-004",
    name: "Studio Lessons Lab",
    handle: "@studiolessons.lab",
    avatarInitials: "SL",
    category: "education",
    niche: "Creator education and workflow tutorials",
    audienceSize: "58K",
    engagementEstimate: "7.1%",
    fitScore: 88,
    sourceProvider: "Mock public profile preview",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 90,
    policyClassification: "official_safe_limited",
    status: "monitoring",
    recommendedAction: "Review tutorial engagement as a preview score only; no live creator discovery is running.",
    tone: "cyan",
  },
];

export const gatedCreatorEnrichmentPanel: CreatorDiscoveryGatedEnrichmentPanel = {
  title: "Contact and enrichment data placeholder",
  status: "gated",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Requires licensed provider review",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "Contact details, private enrichment, and proprietary creator identity data are not treated as official-safe. This placeholder remains unavailable until a compliant licensed provider is configured and approved.",
  unavailableReasons: [
    "No private contact data or personal identity tracking is shown in this mock page.",
    "Contact and enrichment data is licensed-provider-only with provenance and gating requirements.",
    "No scraping, private account access, hidden surveillance, or anti-bot bypass is represented.",
  ],
};

export const creatorDiscoveryComplianceNotice = {
  title: "Official-first creator preview",
  description:
    "This creators page uses Alpha demo only mock creator profiles, connected overlap previews, and clearly separated licensed-provider placeholders. Discovery is disabled in Alpha and no live creator discovery is running.",
  bullets: [
    "Creator previews are framed around mock public/professional profiles and compliant summary signals only.",
    "Contact, enrichment, and proprietary identity data must remain licensed-provider-only and gated.",
    "No scraping, fake login automation, credential automation, private account access, or hidden surveillance is represented.",
  ],
};

export const creatorDiscoveryTableRows: CreatorDiscoveryTableRow[] = creatorDiscoveryCards.map((creator) => ({
  id: creator.id,
  creator: `${creator.name} ${creator.handle}`,
  category: creator.category,
  audience: creator.audienceSize,
  engagement: creator.engagementEstimate,
  fitScore: `${creator.fitScore}%`,
  source: creator.sourceProvider,
  confidence: `${creator.confidenceScore}% ${creatorDiscoveryConfidenceLabels[creator.confidence]}`,
  policy: creator.policyClassification,
  status: creator.status,
}));