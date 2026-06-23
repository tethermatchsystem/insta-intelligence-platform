export type AccountPostMediaType = "image" | "reel" | "carousel" | "video";

export type AccountPostFreshness = "live" | "near_real_time" | "hourly" | "daily" | "manual";

export type AccountPostConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountPostStatus = "published" | "monitoring" | "top_performer" | "underperforming" | "needs_review";

export type AccountPostPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only";

export type AccountPostTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose";

export type AccountPostKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountPostTone;
  description: string;
};

export type AccountPostFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountPostMetricSet = {
  likes: string;
  comments: string;
  saves: string;
  shares: string;
  engagementRate: string;
};

export type AccountPost = {
  id: string;
  title: string;
  captionPreview: string;
  mediaType: AccountPostMediaType;
  publishedAt: string;
  thumbnailTone: AccountPostTone;
  metrics: AccountPostMetricSet;
  freshness: AccountPostFreshness;
  provider: string;
  confidence: AccountPostConfidence;
  confidenceScore: number;
  status: AccountPostStatus;
  policyClassification: AccountPostPolicyClassification;
};

export type AccountPostPerformanceItem = {
  id: string;
  title: string;
  detail: string;
  value: string;
  tone: AccountPostTone;
};

export type AccountPostTableRow = {
  id: string;
  post: string;
  type: AccountPostMediaType;
  published: string;
  engagement: string;
  comments: string;
  source: string;
  confidence: string;
  status: AccountPostStatus;
};

export type AccountPostProviderBadge = {
  id: string;
  label: string;
  sourceType: "official_api" | "licensed_provider" | "mock_provider";
  classification: AccountPostPolicyClassification;
  tone: AccountPostTone;
  description: string;
};

export const accountPostsProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Meta Graph API media",
  confidenceBadge: "94% verified confidence",
  freshnessBadge: "Near real time",
  integrationBadge: "No live integrations",
};

export const accountPostFreshnessLabels: Record<AccountPostFreshness, string> = {
  live: "Live",
  near_real_time: "Near real time",
  hourly: "Hourly",
  daily: "Daily",
  manual: "Manual",
};

export const accountPostConfidenceLabels: Record<AccountPostConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountPostProviderBadges: AccountPostProviderBadge[] = [
  {
    id: "meta-graph-api",
    label: "Meta Graph API",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "blue",
    description: "Connected professional account media and owned post metrics.",
  },
  {
    id: "meta-insights-api",
    label: "Meta Insights",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "green",
    description: "Owned media engagement rollups and performance metrics.",
  },
  {
    id: "licensed-media-provider",
    label: "Licensed media provider",
    sourceType: "licensed_provider",
    classification: "licensed_provider_only",
    tone: "amber",
    description: "Optional licensed enrichment placeholder for compliant media metadata.",
  },
];

export const accountPostKpis: AccountPostKpi[] = [
  { id: "total-posts", label: "Total posts", value: "184", delta: "+12 this month", tone: "blue", description: "Owned media indexed from mock official-safe data." },
  { id: "reels", label: "Reels", value: "46", delta: "25% mix", tone: "purple", description: "Short-form video posts in the current media catalog." },
  { id: "carousels", label: "Carousels", value: "58", delta: "32% mix", tone: "green", description: "Multi-image or mixed-media carousel posts." },
  { id: "avg-engagement", label: "Average engagement", value: "4.8%", delta: "+0.6 pts", tone: "blue", description: "Mock engagement rate across recent owned media." },
  { id: "top-engagement", label: "Top post engagement", value: "12.4%", delta: "reel", tone: "purple", description: "Best observed media engagement in this mock set." },
  { id: "needs-review", label: "Posts needing review", value: "3", delta: "manual QA", tone: "amber", description: "Items flagged for content or metric review." },
];

export const accountPostFilters: AccountPostFilterGroup[] = [
  { id: "media-type", label: "Media type", options: ["All media", "Images", "Reels", "Carousels", "Videos"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter", "Custom"] },
  { id: "engagement", label: "Engagement", options: ["Any engagement", "Top 10%", "Below baseline", "Needs review"] },
  { id: "provider", label: "Provider", options: ["All providers", "Meta Graph API", "Meta Insights", "Licensed provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "status", label: "Status", options: ["All statuses", "Published", "Monitoring", "Top performer", "Underperforming"] },
];

export const accountPostsComplianceNotice = {
  title: "Official-first media intelligence",
  description:
    "This posts page uses mock data for connected professional account media only. Live implementation must rely on official APIs and licensed providers only, with no scraping and no private account access.",
  bullets: [
    "Owned media, captions, and engagement metrics are modeled as official-safe connected account signals.",
    "Licensed provider enrichment must remain clearly classified and gated where required.",
    "No scraping, fake login automation, credential automation, or private account access is represented.",
  ],
};

export const accountPosts: AccountPost[] = [
  {
    id: "post-001",
    title: "Launch reel: summer editorial",
    captionPreview: "Behind the scenes of our summer editorial launch with creator-led product moments...",
    mediaType: "reel",
    publishedAt: "2026-06-22T18:30:00.000Z",
    thumbnailTone: "purple",
    metrics: { likes: "18.4K", comments: "642", saves: "2.1K", shares: "1.4K", engagementRate: "12.4%" },
    freshness: "near_real_time",
    provider: "Meta Graph API",
    confidence: "verified",
    confidenceScore: 98,
    status: "top_performer",
    policyClassification: "official_safe",
  },
  {
    id: "post-002",
    title: "Carousel: product detail story",
    captionPreview: "Five product details our design team refined for everyday studio workflows...",
    mediaType: "carousel",
    publishedAt: "2026-06-21T13:10:00.000Z",
    thumbnailTone: "green",
    metrics: { likes: "9.7K", comments: "314", saves: "1.8K", shares: "520", engagementRate: "7.8%" },
    freshness: "hourly",
    provider: "Meta Insights",
    confidence: "high",
    confidenceScore: 94,
    status: "monitoring",
    policyClassification: "official_safe",
  },
  {
    id: "post-003",
    title: "Image: workspace setup",
    captionPreview: "A minimal workspace setup for planning campaign shoots and weekly content reviews...",
    mediaType: "image",
    publishedAt: "2026-06-19T09:45:00.000Z",
    thumbnailTone: "blue",
    metrics: { likes: "5.2K", comments: "118", saves: "740", shares: "204", engagementRate: "4.1%" },
    freshness: "daily",
    provider: "Meta Graph API",
    confidence: "verified",
    confidenceScore: 97,
    status: "published",
    policyClassification: "official_safe",
  },
  {
    id: "post-004",
    title: "Video: founder Q&A recap",
    captionPreview: "Key moments from the founder Q&A on creative operations, campaign planning, and measurement...",
    mediaType: "video",
    publishedAt: "2026-06-17T16:05:00.000Z",
    thumbnailTone: "amber",
    metrics: { likes: "3.1K", comments: "86", saves: "244", shares: "91", engagementRate: "2.2%" },
    freshness: "daily",
    provider: "Licensed media provider",
    confidence: "medium",
    confidenceScore: 82,
    status: "underperforming",
    policyClassification: "licensed_provider_only",
  },
];

export const topPerformingPosts: AccountPostPerformanceItem[] = [
  { id: "top-001", title: "Launch reel: summer editorial", detail: "Best save and share velocity in the last 30 days.", value: "12.4% ER", tone: "purple" },
  { id: "top-002", title: "Carousel: product detail story", detail: "High saves indicate durable product research intent.", value: "1.8K saves", tone: "green" },
  { id: "top-003", title: "Image: workspace setup", detail: "Steady comment quality and official-safe engagement.", value: "4.1% ER", tone: "blue" },
];

export const underperformingPosts: AccountPostPerformanceItem[] = [
  { id: "under-001", title: "Video: founder Q&A recap", detail: "Below baseline share-through and completion proxy.", value: "2.2% ER", tone: "amber" },
  { id: "under-002", title: "Static teaser: webinar reminder", detail: "Mock item queued for future review workflow.", value: "Needs review", tone: "rose" },
];

export const postingCadence = {
  title: "Posting cadence placeholder",
  value: "4.6 posts/week",
  description: "Mock cadence based on connected professional account media only. Future charts should use official media timestamps and owned insights.",
};

export const accountPostTableRows: AccountPostTableRow[] = accountPosts.map((post) => ({
  id: post.id,
  post: post.title,
  type: post.mediaType,
  published: post.publishedAt,
  engagement: post.metrics.engagementRate,
  comments: post.metrics.comments,
  source: post.provider,
  confidence: `${post.confidenceScore}% ${accountPostConfidenceLabels[post.confidence]}`,
  status: post.status,
}));