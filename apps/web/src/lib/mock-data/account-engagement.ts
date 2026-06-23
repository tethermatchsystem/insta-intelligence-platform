export type AccountEngagementTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AccountEngagementFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type AccountEngagementConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountEngagementPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only";

export type AccountEngagementDirection = "up" | "down" | "stable" | "spike" | "drop" | "watch";

export type AccountEngagementStatus = "healthy" | "monitoring" | "needs_review" | "anomaly" | "mock_only";

export type AccountEngagementMetric = "engagement_rate" | "interactions" | "comments" | "saves" | "shares" | "anomaly";

export type AccountEngagementKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountEngagementTone;
  description: string;
};

export type AccountEngagementFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountEngagementTrendPoint = {
  label: string;
  value: string;
  height: number;
};

export type AccountEngagementPanelItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AccountEngagementTone;
};

export type AccountEngagementInsightCard = {
  id: string;
  title: string;
  metric: AccountEngagementMetric;
  value: string;
  direction: AccountEngagementDirection;
  description: string;
  suggestedAction: string;
  sourceProvider: string;
  freshness: AccountEngagementFreshness;
  confidence: AccountEngagementConfidence;
  confidenceScore: number;
  policyClassification: AccountEngagementPolicyClassification;
  status: AccountEngagementStatus;
  tone: AccountEngagementTone;
};

export type AccountEngagementAnomaly = {
  id: string;
  title: string;
  type: "spike" | "drop" | "suspicious_pattern_placeholder";
  value: string;
  description: string;
  status: AccountEngagementStatus;
  tone: AccountEngagementTone;
};

export type AccountEngagementTableRow = {
  id: string;
  signal: string;
  metric: AccountEngagementMetric;
  direction: AccountEngagementDirection;
  value: string;
  freshness: AccountEngagementFreshness;
  source: string;
  confidence: string;
  status: AccountEngagementStatus;
};

export const accountEngagementProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Meta engagement insights",
  confidenceBadge: "95% engagement confidence",
  freshnessBadge: "Near real time",
  integrationBadge: "No live integrations",
};

export const accountEngagementFreshnessLabels: Record<AccountEngagementFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly refresh",
  daily: "Daily snapshot",
  weekly: "Weekly snapshot",
  manual: "Manual import",
};

export const accountEngagementConfidenceLabels: Record<AccountEngagementConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountEngagementPolicyLabels: Record<AccountEngagementPolicyClassification, string> = {
  official_safe: "Official safe",
  official_safe_limited: "Official safe limited",
  licensed_provider_only: "Licensed provider only",
};

export const accountEngagementDirectionLabels: Record<AccountEngagementDirection, string> = {
  up: "Up",
  down: "Down",
  stable: "Stable",
  spike: "Spike",
  drop: "Drop",
  watch: "Watch",
};

export const accountEngagementStatusLabels: Record<AccountEngagementStatus, string> = {
  healthy: "Healthy",
  monitoring: "Monitoring",
  needs_review: "Needs review",
  anomaly: "Anomaly",
  mock_only: "Mock only",
};

export const accountEngagementMetricLabels: Record<AccountEngagementMetric, string> = {
  engagement_rate: "Engagement rate",
  interactions: "Interactions",
  comments: "Comments",
  saves: "Saves",
  shares: "Shares",
  anomaly: "Anomaly",
};

export const accountEngagementKpis: AccountEngagementKpi[] = [
  {
    id: "engagement-rate",
    label: "Engagement rate",
    value: "5.8%",
    delta: "+0.7 pts",
    tone: "green",
    description: "Mock engagement rate across connected professional account media summaries.",
  },
  {
    id: "total-interactions",
    label: "Total interactions",
    value: "1.42M",
    delta: "+18% 30d",
    tone: "blue",
    description: "Aggregated likes, comments, saves, and shares from official-safe mock insights.",
  },
  {
    id: "comments",
    label: "Comments",
    value: "12.8K",
    delta: "+486 today",
    tone: "purple",
    description: "Owned comment engagement summary prepared for future official provider ingestion.",
  },
  {
    id: "saves",
    label: "Saves",
    value: "84.3K",
    delta: "+11%",
    tone: "cyan",
    description: "Mock save interactions showing durable audience intent across recent posts.",
  },
  {
    id: "shares",
    label: "Shares",
    value: "31.7K",
    delta: "+9%",
    tone: "amber",
    description: "Aggregate share activity from connected account media summaries only.",
  },
  {
    id: "anomalies",
    label: "Engagement anomalies",
    value: "6",
    delta: "2 review",
    tone: "rose",
    description: "Mock anomaly count for spikes, drops, and pattern placeholders without surveillance.",
  },
];

export const accountEngagementFilters: AccountEngagementFilterGroup[] = [
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter", "Custom"] },
  { id: "media-type", label: "Media type", options: ["All media", "Images", "Reels", "Carousels", "Videos"] },
  { id: "metric", label: "Metric", options: ["All metrics", "Engagement rate", "Comments", "Saves", "Shares"] },
  { id: "source", label: "Source", options: ["All sources", "Meta engagement insights", "Meta media insights", "Licensed benchmark provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "anomaly-status", label: "Anomaly status", options: ["All statuses", "Healthy", "Monitoring", "Needs review", "Anomaly"] },
];

export const engagementTrend: AccountEngagementTrendPoint[] = [
  { label: "Jan", value: "4.1%", height: 44 },
  { label: "Feb", value: "4.4%", height: 50 },
  { label: "Mar", value: "4.9%", height: 59 },
  { label: "Apr", value: "5.1%", height: 64 },
  { label: "May", value: "5.4%", height: 72 },
  { label: "Jun", value: "5.8%", height: 82 },
];

export const interactionMix: AccountEngagementPanelItem[] = [
  { id: "mix-likes", title: "Likes", value: "72%", detail: "Largest interaction share across mock connected media summaries.", tone: "blue" },
  { id: "mix-saves", title: "Saves", value: "18%", detail: "Save share increased on carousel and product-detail content.", tone: "cyan" },
  { id: "mix-comments", title: "Comments", value: "7%", detail: "Comment share concentrated around product questions and launch recaps.", tone: "purple" },
];

export const topEngagementDrivers: AccountEngagementPanelItem[] = [
  { id: "driver-reels", title: "Launch reels", value: "+32%", detail: "Short-form launch content is driving above-baseline shares and saves.", tone: "green" },
  { id: "driver-carousels", title: "Product carousels", value: "+21%", detail: "Detail-heavy carousel posts produce strong save velocity.", tone: "cyan" },
  { id: "driver-qa", title: "Founder Q&A", value: "+14%", detail: "Conversation-led posts increase comments and support questions.", tone: "purple" },
];

export const lowPerformingSignals: AccountEngagementPanelItem[] = [
  { id: "low-static", title: "Static teasers", value: "-18%", detail: "Static teaser posts are below the 30-day engagement baseline.", tone: "amber" },
  { id: "low-video", title: "Long recap video", value: "-11%", detail: "Long-form recap content shows weaker share-through in mock metrics.", tone: "rose" },
  { id: "low-window", title: "Late posting window", value: "-7%", detail: "Late-night posts underperform against weekday afternoon windows.", tone: "slate" },
];

export const engagementInsightCards: AccountEngagementInsightCard[] = [
  {
    id: "insight-save-velocity",
    title: "Save velocity lift on product detail content",
    metric: "saves",
    value: "+24% saves",
    direction: "up",
    description: "Carousels and product-detail imagery are producing durable intent signals in aggregate engagement summaries.",
    suggestedAction: "Prioritize carousel follow-ups and add pinned replies for common product research questions.",
    sourceProvider: "Meta media insights",
    freshness: "hourly",
    confidence: "high",
    confidenceScore: 94,
    policyClassification: "official_safe",
    status: "healthy",
    tone: "cyan",
  },
  {
    id: "insight-comment-quality",
    title: "Comment quality rising on launch posts",
    metric: "comments",
    value: "+486 new",
    direction: "up",
    description: "Mock comment volume includes more questions and purchase-intent replies on recent launch media.",
    suggestedAction: "Route sales/support questions into response opportunities and monitor sentiment themes.",
    sourceProvider: "Meta engagement insights",
    freshness: "near_real_time",
    confidence: "verified",
    confidenceScore: 97,
    policyClassification: "official_safe",
    status: "monitoring",
    tone: "purple",
  },
  {
    id: "insight-low-static",
    title: "Static teaser posts below baseline",
    metric: "engagement_rate",
    value: "-18% ER",
    direction: "down",
    description: "Static teaser formats are underperforming against recent account-level engagement baselines.",
    suggestedAction: "Convert teaser concepts into short reels or carousel explainers before the next campaign push.",
    sourceProvider: "Licensed benchmark provider",
    freshness: "daily",
    confidence: "medium",
    confidenceScore: 86,
    policyClassification: "licensed_provider_only",
    status: "needs_review",
    tone: "amber",
  },
];

export const engagementAnomalies: AccountEngagementAnomaly[] = [
  {
    id: "anomaly-spike",
    title: "Engagement spike on launch reel",
    type: "spike",
    value: "+62% vs baseline",
    description: "Mock spike attributed to higher share velocity and comment activity on recent launch media.",
    status: "monitoring",
    tone: "green",
  },
  {
    id: "anomaly-drop",
    title: "Unusual drop on static teaser",
    type: "drop",
    value: "-28% reach proxy",
    description: "Mock drop signal for low-performing content review and timing analysis.",
    status: "needs_review",
    tone: "amber",
  },
  {
    id: "anomaly-pattern-placeholder",
    title: "Suspicious pattern placeholder",
    type: "suspicious_pattern_placeholder",
    value: "Mock only",
    description: "Placeholder for aggregate anomaly review only; no hidden surveillance, scraping, or private-account monitoring is represented.",
    status: "mock_only",
    tone: "rose",
  },
];

export const accountEngagementComplianceNotice = {
  title: "Official-first engagement analytics",
  description:
    "This engagement page uses mock data for connected professional account engagement summaries only. Future live implementation must use official APIs and licensed providers only, with no scraping, private account access, hidden surveillance, or anti-bot bypass.",
  bullets: [
    "Engagement rate, interactions, comments, saves, and shares are modeled as connected account summary signals.",
    "Licensed benchmark enrichment must remain clearly classified and separated from official provider summaries.",
    "No scraping, fake login automation, credential automation, private account access, hidden surveillance, or anti-bot bypass is represented.",
  ],
};

export const accountEngagementTableRows: AccountEngagementTableRow[] = [
  {
    id: "row-engagement-rate",
    signal: "Account engagement rate trend",
    metric: "engagement_rate",
    direction: "up",
    value: "5.8%",
    freshness: "hourly",
    source: "Meta engagement insights",
    confidence: "95% High confidence",
    status: "healthy",
  },
  {
    id: "row-interactions",
    signal: "Total interaction volume",
    metric: "interactions",
    direction: "up",
    value: "1.42M interactions",
    freshness: "hourly",
    source: "Meta media insights",
    confidence: "97% Verified",
    status: "healthy",
  },
  {
    id: "row-saves",
    signal: "Product carousel save velocity",
    metric: "saves",
    direction: "spike",
    value: "+24% saves",
    freshness: "hourly",
    source: "Meta media insights",
    confidence: "94% High confidence",
    status: "monitoring",
  },
  {
    id: "row-low-static",
    signal: "Static teaser underperformance",
    metric: "engagement_rate",
    direction: "drop",
    value: "-18% ER",
    freshness: "daily",
    source: "Licensed benchmark provider",
    confidence: "86% Medium confidence",
    status: "needs_review",
  },
  {
    id: "row-pattern-placeholder",
    signal: "Suspicious pattern placeholder",
    metric: "anomaly",
    direction: "watch",
    value: "Mock only",
    freshness: "manual",
    source: "Mock anomaly model",
    confidence: "Not scored",
    status: "mock_only",
  },
];