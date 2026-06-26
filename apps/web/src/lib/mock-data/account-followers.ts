export type AccountFollowerTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AccountFollowerFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type AccountFollowerConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountFollowerPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type AccountFollowerSourceType = "official_api" | "licensed_provider" | "mock_provider";

export type AccountFollowerDirection = "growth" | "decline" | "stable" | "gated";

export type AccountFollowerStatus = "available" | "monitoring" | "snapshot" | "gated" | "disabled_by_default";

export type AccountFollowerKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountFollowerTone;
  description: string;
};

export type AccountFollowerFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountFollowerGrowthPoint = {
  label: string;
  value: string;
  height: number;
};

export type AccountFollowerSummaryPanel = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AccountFollowerTone;
};

export type AccountFollowerSegmentCard = {
  id: string;
  title: string;
  audienceShare: string;
  count: string;
  growth: string;
  description: string;
  sourceProvider: string;
  sourceType: AccountFollowerSourceType;
  freshness: AccountFollowerFreshness;
  confidence: AccountFollowerConfidence;
  confidenceScore: number;
  policyClassification: AccountFollowerPolicyClassification;
  status: AccountFollowerStatus;
  tone: AccountFollowerTone;
};

export type AccountFollowerGatedIdentityPanel = {
  title: string;
  status: AccountFollowerStatus;
  policyClassification: AccountFollowerPolicyClassification;
  sourceProvider: string;
  freshness: AccountFollowerFreshness;
  confidence: AccountFollowerConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type AccountFollowerTableRow = {
  id: string;
  signal: string;
  direction: AccountFollowerDirection;
  count: string;
  freshness: AccountFollowerFreshness;
  source: string;
  confidence: string;
  policy: AccountFollowerPolicyClassification;
  status: AccountFollowerStatus;
};

export const accountFollowersProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Mock audience intelligence",
  confidenceBadge: "92% modeled confidence",
  freshnessBadge: "Static Alpha snapshot",
  integrationBadge: "No live follower collection",
  gatedBadge: "Requires licensed provider review",
};

export const accountFollowerFreshnessLabels: Record<AccountFollowerFreshness, string> = {
  near_real_time: "Static preview, not live",
  hourly: "Mock hourly preview",
  daily: "Mock daily snapshot",
  weekly: "Mock weekly snapshot",
  manual: "Manual preview import",
};

export const accountFollowerConfidenceLabels: Record<AccountFollowerConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountFollowerPolicyLabels: Record<AccountFollowerPolicyClassification, string> = {
  official_safe: "Official-safe preview",
  official_safe_limited: "Official-safe limited preview",
  licensed_provider_only: "Requires licensed provider review",
  disabled_by_default: "Disabled in Alpha",
};

export const accountFollowerStatusLabels: Record<AccountFollowerStatus, string> = {
  available: "Preview only",
  monitoring: "Mock preview",
  snapshot: "Static preview",
  gated: "Gated preview",
  disabled_by_default: "Disabled in Alpha",
};

export const accountFollowerDirectionLabels: Record<AccountFollowerDirection, string> = {
  growth: "Growth",
  decline: "Decline",
  stable: "Stable",
  gated: "Gated",
};

export const accountFollowerKpis: AccountFollowerKpi[] = [
  {
    id: "total-followers",
    label: "Follower preview total",
    value: "482.6K",
    delta: "+4.2% 30d",
    tone: "blue",
    description: "Connected professional account audience total modeled as mock official-safe preview data.",
  },
  {
    id: "follower-growth",
    label: "Follower preview growth",
    value: "+19.4K",
    delta: "30d net",
    tone: "green",
    description: "Aggregated growth count from static preview audience summaries.",
  },
  {
    id: "estimated-new-followers",
    label: "Preview new followers",
    value: "7.8K",
    delta: "7d estimate",
    tone: "cyan",
    description: "Mock aggregate estimate only; no live follower collection or individual identities are exposed.",
  },
  {
    id: "audience-confidence",
    label: "Mock audience confidence",
    value: "92%",
    delta: "high",
    tone: "purple",
    description: "Confidence score for aggregated audience insights and segment rollups.",
  },
  {
    id: "top-audience-segment",
    label: "Preview audience segment",
    value: "Creators",
    delta: "34% share",
    tone: "amber",
    description: "Largest mock segment by connected account audience summary.",
  },
  {
    id: "gated-identity-signals",
    label: "Follower collection disabled in Alpha",
    value: "Disabled",
    delta: "licensed only",
    tone: "rose",
    description: "Arbitrary recent follower identity tracking requires licensed provider review and remains disabled in Alpha.",
  },
];

export const accountFollowerFilters: AccountFollowerFilterGroup[] = [
  { id: "segment", label: "Segment", options: ["All segments", "Creators", "Operators", "Retail teams", "Students"] },
  { id: "date-range", label: "Date range", options: ["Last 30 days", "Last 7 days", "Quarter", "Custom"] },
  { id: "source", label: "Source", options: ["All sources", "Mock Meta audience preview", "Mock snapshot provider", "Requires licensed provider review"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "growth-status", label: "Growth status", options: ["All statuses", "Growth", "Stable", "Decline", "Gated"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const followerGrowthTrend: AccountFollowerGrowthPoint[] = [
  { label: "Jan", value: "414K", height: 44 },
  { label: "Feb", value: "428K", height: 52 },
  { label: "Mar", value: "439K", height: 58 },
  { label: "Apr", value: "456K", height: 68 },
  { label: "May", value: "471K", height: 78 },
  { label: "Jun", value: "483K", height: 86 },
];

export const audienceSegments: AccountFollowerSummaryPanel[] = [
  { id: "segment-creators", title: "Creators and studios", value: "34%", detail: "Largest aggregated audience segment with consistent content-save behavior.", tone: "purple" },
  { id: "segment-operators", title: "Creative operators", value: "27%", detail: "Marketing, production, and social teams planning campaign workflows.", tone: "blue" },
  { id: "segment-retail", title: "Retail teams", value: "18%", detail: "Small teams watching product bundles, launch recaps, and workspace content.", tone: "green" },
];

export const audienceDemographics: AccountFollowerSummaryPanel[] = [
  { id: "geo", title: "Top geography", value: "US / UK / UAE", detail: "Mock aggregate geography placeholder, not identity-level location tracking.", tone: "cyan" },
  { id: "device", title: "Device mix", value: "71% mobile", detail: "Aggregated device placeholder for connected audience summaries only.", tone: "slate" },
  { id: "age", title: "Age band", value: "25–34", detail: "Modeled demographic band from official-safe audience insight placeholders.", tone: "amber" },
];

export const activityWindows: AccountFollowerSummaryPanel[] = [
  { id: "weekday-window", title: "Weekday activity", value: "12–3 PM", detail: "Highest mock audience activity window for scheduling decisions.", tone: "blue" },
  { id: "evening-window", title: "Evening activity", value: "7–9 PM", detail: "Secondary window for creator and studio audience engagement.", tone: "purple" },
  { id: "weekend-window", title: "Weekend lift", value: "+11%", detail: "Saturday audience response lift in snapshot-based summaries.", tone: "green" },
];

export const followerSegmentCards: AccountFollowerSegmentCard[] = [
  {
    id: "segment-card-creators",
    title: "Creators and studio owners",
    audienceShare: "34%",
    count: "164K estimated followers",
    growth: "+6.8K 30d",
    description: "Aggregated audience segment interested in content production, campaign planning, and studio organization.",
    sourceProvider: "Mock Meta audience preview",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "high",
    confidenceScore: 94,
    policyClassification: "official_safe",
    status: "available",
    tone: "purple",
  },
  {
    id: "segment-card-operators",
    title: "Marketing and creative operators",
    audienceShare: "27%",
    count: "130K estimated followers",
    growth: "+4.1K 30d",
    description: "Summary segment for teams using the account as inspiration for workflow, launches, and measurement routines.",
    sourceProvider: "Mock Meta audience preview",
    sourceType: "official_api",
    freshness: "daily",
    confidence: "high",
    confidenceScore: 91,
    policyClassification: "official_safe_limited",
    status: "snapshot",
    tone: "blue",
  },
  {
    id: "segment-card-commerce",
    title: "Commerce and retail teams",
    audienceShare: "18%",
    count: "86K estimated followers",
    growth: "+2.9K 30d",
    description: "Aggregated segment with interest in product bundles, launch cadence, and owned media performance.",
    sourceProvider: "Mock snapshot audience model",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 84,
    policyClassification: "official_safe_limited",
    status: "monitoring",
    tone: "green",
  },
];

export const gatedIdentityPanel: AccountFollowerGatedIdentityPanel = {
  title: "Follower collection disabled in Alpha",
  status: "disabled_by_default",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Requires licensed provider review",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "No live follower collection is running. Arbitrary recent follower identity tracking is not official-safe and remains unavailable until a compliant licensed provider is reviewed and the feature is explicitly gated.",
  unavailableReasons: [
    "No individual recent follower identities are shown in this mock page.",
    "Follower collection disabled in Alpha; no live follower collection is running.",
    "No scraping, private account access, hidden surveillance, or credential automation is represented.",
  ],
};

export const accountFollowersComplianceNotice = {
  title: "Official-first audience intelligence",
  description:
    "This followers page uses mock data for connected professional account audience summaries only. No live follower collection is running; any future implementation requires official source connection and licensed provider review for gated identity-level features.",
  bullets: [
    "Aggregated follower growth, demographics, and preview audience segments are modeled as connected account summaries.",
    "Arbitrary recent follower or unfollower identities require licensed provider review and must remain gated.",
    "No scraping, fake login automation, credential automation, private account access, or hidden surveillance is represented.",
  ],
};

export const accountFollowerTableRows: AccountFollowerTableRow[] = [
  {
    id: "row-total-growth",
    signal: "Total follower growth summary",
    direction: "growth",
    count: "+19.4K net followers",
    freshness: "daily",
    source: "Mock Meta audience preview",
    confidence: "94% High confidence",
    policy: "official_safe",
    status: "available",
  },
  {
    id: "row-creators",
    signal: "Creators and studios segment",
    direction: "growth",
    count: "164K estimated followers",
    freshness: "daily",
    source: "Mock Meta audience preview",
    confidence: "94% High confidence",
    policy: "official_safe",
    status: "available",
  },
  {
    id: "row-operators",
    signal: "Marketing operators segment",
    direction: "stable",
    count: "130K estimated followers",
    freshness: "daily",
    source: "Mock Meta audience preview",
    confidence: "91% High confidence",
    policy: "official_safe_limited",
    status: "snapshot",
  },
  {
    id: "row-commerce",
    signal: "Commerce and retail segment",
    direction: "growth",
    count: "86K estimated followers",
    freshness: "weekly",
    source: "Mock snapshot audience model",
    confidence: "84% Medium confidence",
    policy: "official_safe_limited",
    status: "monitoring",
  },
  {
    id: "row-identity-level",
    signal: "Follower collection disabled in Alpha",
    direction: "gated",
    count: "Unavailable",
    freshness: "manual",
    source: "Requires licensed provider review",
    confidence: "Not scored",
    policy: "licensed_provider_only",
    status: "disabled_by_default",
  },
];