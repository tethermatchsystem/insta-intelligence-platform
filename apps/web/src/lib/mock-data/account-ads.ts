export type AccountAdTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AccountAdCreativeType = "image" | "video" | "carousel" | "reel" | "story" | "collection";

export type AccountAdStatus = "active" | "paused" | "inactive" | "review_flag" | "mock_only";

export type AccountAdFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type AccountAdConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountAdPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only";

export type AccountAdSourceType = "meta_ad_library" | "authorized_marketing_api" | "licensed_provider" | "mock_provider";

export type AccountAdDirection = "new" | "up" | "down" | "stable" | "flagged" | "licensed_only";

export type AccountAdMetric = "active_ads" | "campaigns" | "creative_variants" | "freshness" | "review_flags" | "licensed_signal";

export type AccountAdKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountAdTone;
  description: string;
};

export type AccountAdFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountAdTrendPoint = {
  label: string;
  value: string;
  height: number;
};

export type AccountAdPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AccountAdTone;
};

export type AccountAdCreative = {
  id: string;
  title: string;
  campaign: string;
  creativeType: AccountAdCreativeType;
  previewTone: AccountAdTone;
  headline: string;
  copyPreview: string;
  cta: string;
  status: AccountAdStatus;
  firstSeen: string;
  lastSeen: string;
  sourceProvider: string;
  sourceType: AccountAdSourceType;
  freshness: AccountAdFreshness;
  confidence: AccountAdConfidence;
  confidenceScore: number;
  policyClassification: AccountAdPolicyClassification;
};

export type AccountAdCompetitiveSignal = {
  id: string;
  title: string;
  value: string;
  description: string;
  sourceProvider: string;
  freshness: AccountAdFreshness;
  confidence: AccountAdConfidence;
  confidenceScore: number;
  policyClassification: AccountAdPolicyClassification;
  status: AccountAdStatus;
  tone: AccountAdTone;
};

export type AccountAdTableRow = {
  id: string;
  adOrCampaign: string;
  creativeType: AccountAdCreativeType;
  status: AccountAdStatus;
  firstSeen: string;
  lastSeen: string;
  source: string;
  confidence: string;
  policy: AccountAdPolicyClassification;
};

export const accountAdsProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Mock ad intelligence",
  confidenceBadge: "91% modeled ads confidence",
  freshnessBadge: "Static Alpha snapshot",
  integrationBadge: "No live ad monitoring",
};

export const accountAdFreshnessLabels: Record<AccountAdFreshness, string> = {
  near_real_time: "Static preview, not live",
  hourly: "Mock hourly preview",
  daily: "Mock daily snapshot",
  weekly: "Mock weekly snapshot",
  manual: "Manual preview import",
};

export const accountAdConfidenceLabels: Record<AccountAdConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountAdPolicyLabels: Record<AccountAdPolicyClassification, string> = {
  official_safe: "Official-safe preview",
  official_safe_limited: "Requires Meta Ad Library review",
  licensed_provider_only: "Requires private-beta ads service",
};

export const accountAdCreativeTypeLabels: Record<AccountAdCreativeType, string> = {
  image: "Image",
  video: "Video",
  carousel: "Carousel",
  reel: "Reel",
  story: "Story",
  collection: "Collection",
};

export const accountAdStatusLabels: Record<AccountAdStatus, string> = {
  active: "Preview active signal",
  paused: "Preview paused signal",
  inactive: "Static preview",
  review_flag: "Preview review flag",
  mock_only: "Mock only",
};

export const accountAdDirectionLabels: Record<AccountAdDirection, string> = {
  new: "Preview new signal",
  up: "Preview lift",
  down: "Preview decline",
  stable: "Static preview",
  flagged: "Preview flag",
  licensed_only: "Private-beta ads service",
};

export const accountAdMetricLabels: Record<AccountAdMetric, string> = {
  active_ads: "Preview ad signals",
  campaigns: "Preview campaigns",
  creative_variants: "Preview variants",
  freshness: "Static freshness",
  review_flags: "Preview review flags",
  licensed_signal: "Private-beta ads service",
};

export const accountAdKpis: AccountAdKpi[] = [
  {
    id: "active-ads",
    label: "Ads preview",
    value: "24",
    delta: "+6 preview",
    tone: "green",
    description: "Mock ad signals only; no live ad monitoring is running.",
  },
  {
    id: "campaigns",
    label: "Preview campaigns",
    value: "8",
    delta: "3 themes",
    tone: "blue",
    description: "Campaign groupings modeled from Alpha mock ad intelligence placeholders.",
  },
  {
    id: "creative-variants",
    label: "Preview creative variants",
    value: "67",
    delta: "+14 variants",
    tone: "purple",
    description: "Mock creative variants across image, video, carousel, reel, and story formats.",
  },
  {
    id: "freshness",
    label: "Static ad freshness",
    value: "Static",
    delta: "Alpha snapshot",
    tone: "cyan",
    description: "Static preview freshness; requires approved Meta sources before any future data refresh.",
  },
  {
    id: "review-flags",
    label: "Preview review flags",
    value: "4",
    delta: "2 creative",
    tone: "amber",
    description: "Mock creative and landing-page review flags for analyst workflow placeholders.",
  },
  {
    id: "licensed-signals",
    label: "Requires private-beta ads service",
    value: "Gated",
    delta: "provider only",
    tone: "rose",
    description: "Signals requiring licensed providers remain clearly separated and unavailable in Alpha.",
  },
];

export const accountAdFilters: AccountAdFilterGroup[] = [
  { id: "status", label: "Status", options: ["All preview statuses", "Preview active", "Preview paused", "Static preview", "Preview review flag"] },
  { id: "creative-type", label: "Creative type", options: ["All creatives", "Image", "Video", "Carousel", "Reel", "Story"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter", "Custom"] },
  { id: "source", label: "Source", options: ["All sources", "Requires Meta Ad Library review", "Requires Meta Marketing API connection", "Requires private-beta ads service"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only"] },
];

export const activeAdsTrend: AccountAdTrendPoint[] = [
  { label: "Jan", value: "12", height: 38 },
  { label: "Feb", value: "15", height: 46 },
  { label: "Mar", value: "17", height: 52 },
  { label: "Apr", value: "19", height: 60 },
  { label: "May", value: "22", height: 72 },
  { label: "Jun", value: "24", height: 82 },
];

export const creativeFormatMix: AccountAdPanelItem[] = [
  { id: "format-reels", title: "Reels and short video", value: "42%", detail: "Largest mock creative mix for launch and product-story campaigns.", tone: "purple" },
  { id: "format-carousel", title: "Carousel explainers", value: "28%", detail: "Multi-frame product detail previews with mock testing coverage.", tone: "green" },
  { id: "format-image", title: "Static image variants", value: "19%", detail: "Static creative variants used for preview retargeting and offer reminders.", tone: "blue" },
];

export const campaignThemes: AccountAdPanelItem[] = [
  { id: "theme-launch", title: "Summer editorial launch", value: "11 preview ads", detail: "Product storytelling campaign preview with reel and carousel variants.", tone: "purple" },
  { id: "theme-workflow", title: "Studio workflow proof", value: "7 preview ads", detail: "Creative operations positioning around planning and production routines.", tone: "cyan" },
  { id: "theme-offer", title: "Bundle offer reminders", value: "6 preview ads", detail: "Mock offer campaign with authorized owned-ad preview framing only.", tone: "amber" },
];

export const landingPageDomains: AccountAdPanelItem[] = [
  { id: "domain-main", title: "catalyst.studio", value: "18 preview ads", detail: "Primary owned landing domain placeholder for future authorized ad account summaries.", tone: "green" },
  { id: "domain-shop", title: "shop.catalyst.studio", value: "5 preview ads", detail: "Mock commerce landing page grouping for campaign preview analysis.", tone: "blue" },
  { id: "domain-review", title: "Review needed", value: "1 preview ad", detail: "Landing-page placeholder queued for analyst review, not scraping.", tone: "amber" },
];

export const accountAdCreatives: AccountAdCreative[] = [
  {
    id: "ad-001",
    title: "Summer editorial launch reel",
    campaign: "Summer editorial launch",
    creativeType: "reel",
    previewTone: "purple",
    headline: "Build the studio setup your campaigns deserve",
    copyPreview: "A compact workflow kit for product shoots, content reviews, and campaign planning.",
    cta: "Preview CTA only",
    status: "active",
    firstSeen: "2026-06-10T08:00:00.000Z",
    lastSeen: "2026-06-23T14:30:00.000Z",
    sourceProvider: "Requires Meta Ad Library review",
    sourceType: "meta_ad_library",
    freshness: "hourly",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
  },
  {
    id: "ad-002",
    title: "Carousel product detail proof",
    campaign: "Studio workflow proof",
    creativeType: "carousel",
    previewTone: "green",
    headline: "Five details that keep creative teams aligned",
    copyPreview: "Swipe through a mock product-detail ad built for official/authorized source previews.",
    cta: "Preview CTA only",
    status: "active",
    firstSeen: "2026-06-14T11:20:00.000Z",
    lastSeen: "2026-06-23T12:05:00.000Z",
    sourceProvider: "Requires Meta Marketing API connection",
    sourceType: "authorized_marketing_api",
    freshness: "near_real_time",
    confidence: "high",
    confidenceScore: 94,
    policyClassification: "official_safe",
  },
  {
    id: "ad-003",
    title: "Static bundle offer reminder",
    campaign: "Bundle offer reminders",
    creativeType: "image",
    previewTone: "amber",
    headline: "Bundle your studio essentials before Friday",
    copyPreview: "Mock static ad copy for owned/authorized campaign reporting and creative review.",
    cta: "Preview CTA only",
    status: "review_flag",
    firstSeen: "2026-06-18T09:45:00.000Z",
    lastSeen: "2026-06-22T19:10:00.000Z",
    sourceProvider: "Requires private-beta ads service",
    sourceType: "licensed_provider",
    freshness: "daily",
    confidence: "medium",
    confidenceScore: 85,
    policyClassification: "licensed_provider_only",
  },
];

export const competitiveAdSignals: AccountAdCompetitiveSignal[] = [
  {
    id: "signal-library-frequency",
    title: "Public ad library preview cluster",
    value: "Preview activity",
    description: "Mock public Ad Library style signal showing preview creative volume in the category.",
    sourceProvider: "Requires Meta Ad Library review",
    freshness: "daily",
    confidence: "medium",
    confidenceScore: 84,
    policyClassification: "official_safe_limited",
    status: "mock_only",
    tone: "blue",
  },
  {
    id: "signal-creative-theme",
    title: "Creator-proof messaging theme",
    value: "Trending",
    description: "Allowed public-library-style theme summary; no scraping or private competitor tracking is represented.",
    sourceProvider: "Mock competitive signal",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 81,
    policyClassification: "official_safe_limited",
    status: "mock_only",
    tone: "purple",
  },
  {
    id: "signal-licensed-benchmark",
    title: "Preview spend/benchmark placeholder",
    value: "Licensed only",
    description: "Any spend, delivery, or proprietary benchmark enrichment requires a private-beta ads service and is unavailable in Alpha.",
    sourceProvider: "Requires private-beta ads service",
    freshness: "manual",
    confidence: "needs_review",
    confidenceScore: 0,
    policyClassification: "licensed_provider_only",
    status: "review_flag",
    tone: "rose",
  },
];

export const accountAdsComplianceNotice = {
  title: "Official-first ads intelligence",
  description:
    "This ads page uses mock data framed around Alpha preview ad intelligence only. Ad monitoring disabled in Alpha; no live ad monitoring, Meta Marketing API calls, or Ad Library ingestion is running.",
  bullets: [
    "Public ad visibility requires Meta Ad Library review before any future approved workflow.",
    "Owned performance and campaign data requires Meta Marketing API connection before any future approved workflow.",
    "Licensed enrichment requires a private-beta ads service and must remain classified, provenanced, and gated.",
  ],
};

export const accountAdTableRows: AccountAdTableRow[] = accountAdCreatives.map((ad) => ({
  id: ad.id,
  adOrCampaign: `${ad.title} · ${ad.campaign}`,
  creativeType: ad.creativeType,
  status: ad.status,
  firstSeen: ad.firstSeen,
  lastSeen: ad.lastSeen,
  source: ad.sourceProvider,
  confidence: `${ad.confidenceScore}% ${accountAdConfidenceLabels[ad.confidence]}`,
  policy: ad.policyClassification,
}));