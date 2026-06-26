export type AccountFollowingTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AccountFollowingFreshness = "near_real_time" | "hourly" | "daily" | "weekly" | "manual";

export type AccountFollowingConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountFollowingPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "disabled_by_default";

export type AccountFollowingSourceType = "official_api" | "licensed_provider" | "mock_provider";

export type AccountFollowingDirection = "added" | "removed" | "stable" | "gated";

export type AccountFollowingStatus = "available" | "monitoring" | "snapshot" | "gated" | "disabled_by_default";

export type AccountFollowingRelationshipType = "creator" | "brand" | "publisher" | "community" | "gated_identity";

export type AccountFollowingKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountFollowingTone;
  description: string;
};

export type AccountFollowingFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountFollowingMixPoint = {
  label: string;
  value: string;
  height: number;
};

export type AccountFollowingSummaryPanel = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AccountFollowingTone;
};

export type AccountFollowingRelationshipCard = {
  id: string;
  title: string;
  relationshipType: AccountFollowingRelationshipType;
  share: string;
  count: string;
  change: string;
  overlapEstimate: string;
  description: string;
  sourceProvider: string;
  sourceType: AccountFollowingSourceType;
  freshness: AccountFollowingFreshness;
  confidence: AccountFollowingConfidence;
  confidenceScore: number;
  policyClassification: AccountFollowingPolicyClassification;
  status: AccountFollowingStatus;
  tone: AccountFollowingTone;
};

export type AccountFollowingGatedIdentityPanel = {
  title: string;
  status: AccountFollowingStatus;
  policyClassification: AccountFollowingPolicyClassification;
  sourceProvider: string;
  freshness: AccountFollowingFreshness;
  confidence: AccountFollowingConfidence;
  confidenceScore: number | null;
  description: string;
  unavailableReasons: string[];
};

export type AccountFollowingTableRow = {
  id: string;
  signal: string;
  direction: AccountFollowingDirection;
  count: string;
  freshness: AccountFollowingFreshness;
  source: string;
  confidence: string;
  policy: AccountFollowingPolicyClassification;
  status: AccountFollowingStatus;
};

export const accountFollowingProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Mock following intelligence",
  confidenceBadge: "90% modeled relationship confidence",
  freshnessBadge: "Static Alpha snapshot",
  integrationBadge: "No live following collection",
  gatedBadge: "Requires licensed provider review",
};

export const accountFollowingFreshnessLabels: Record<AccountFollowingFreshness, string> = {
  near_real_time: "Static preview, not live",
  hourly: "Mock hourly preview",
  daily: "Mock daily snapshot",
  weekly: "Mock weekly snapshot",
  manual: "Manual preview import",
};

export const accountFollowingConfidenceLabels: Record<AccountFollowingConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountFollowingPolicyLabels: Record<AccountFollowingPolicyClassification, string> = {
  official_safe: "Official-safe preview",
  official_safe_limited: "Official-safe limited preview",
  licensed_provider_only: "Requires licensed provider review",
  disabled_by_default: "Disabled in Alpha",
};

export const accountFollowingStatusLabels: Record<AccountFollowingStatus, string> = {
  available: "Preview only",
  monitoring: "Mock preview",
  snapshot: "Static preview",
  gated: "Gated preview",
  disabled_by_default: "Disabled in Alpha",
};

export const accountFollowingDirectionLabels: Record<AccountFollowingDirection, string> = {
  added: "Preview add signal",
  removed: "Preview remove signal",
  stable: "Static preview",
  gated: "Gated preview",
};

export const accountFollowingRelationshipLabels: Record<AccountFollowingRelationshipType, string> = {
  creator: "Creator",
  brand: "Brand",
  publisher: "Publisher",
  community: "Community",
  gated_identity: "Gated identity",
};

export const accountFollowingKpis: AccountFollowingKpi[] = [
  {
    id: "total-following",
    label: "Following preview total",
    value: "1,284",
    delta: "+38 net 90d",
    tone: "blue",
    description: "Connected account following count summary modeled from mock preview data.",
  },
  {
    id: "following-change",
    label: "Preview relationship signal",
    value: "+4.1%",
    delta: "category mix",
    tone: "green",
    description: "Aggregate category-level change only; no live following collection or identity-level list is exposed.",
  },
  {
    id: "creator-brand-categories",
    label: "Creator/brand categories",
    value: "42",
    delta: "8 clusters",
    tone: "purple",
    description: "Mock relationship categories for creators, brands, publishers, and communities.",
  },
  {
    id: "audience-overlap",
    label: "Audience overlap estimate",
    value: "28%",
    delta: "top cluster",
    tone: "cyan",
    description: "Aggregate overlap estimate for relationship clusters, not individual identity tracking.",
  },
  {
    id: "relationship-confidence",
    label: "Mock relationship confidence",
    value: "90%",
    delta: "high",
    tone: "amber",
    description: "Confidence score for summary-level following relationship intelligence.",
  },
  {
    id: "gated-identity-signals",
    label: "Following collection disabled in Alpha",
    value: "Disabled",
    delta: "licensed only",
    tone: "rose",
    description: "Arbitrary recent following/unfollowing identity-level data requires licensed provider review and remains disabled in Alpha.",
  },
];

export const accountFollowingFilters: AccountFollowingFilterGroup[] = [
  { id: "category", label: "Category", options: ["All categories", "Creators", "Brands", "Publishers", "Communities"] },
  { id: "date-range", label: "Date range", options: ["Last 90 days", "Last 30 days", "Quarter", "Custom"] },
  { id: "source", label: "Source", options: ["All sources", "Mock connected summary", "Mock relationship model", "Requires licensed provider review"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
  { id: "relationship-type", label: "Relationship type", options: ["All relationships", "Creator", "Brand", "Publisher", "Community"] },
  { id: "policy", label: "Policy classification", options: ["All policies", "Official safe", "Official safe limited", "Licensed provider only", "Disabled by default"] },
];

export const followingCategoryMix: AccountFollowingMixPoint[] = [
  { label: "Creators", value: "38%", height: 78 },
  { label: "Brands", value: "24%", height: 56 },
  { label: "Publishers", value: "17%", height: 42 },
  { label: "Communities", value: "13%", height: 34 },
  { label: "Tools", value: "8%", height: 24 },
];

export const relationshipClusters: AccountFollowingSummaryPanel[] = [
  { id: "cluster-studio", title: "Studio workflow cluster", value: "312 preview relationships", detail: "Creators and production teams related to campaign planning and studio operations.", tone: "purple" },
  { id: "cluster-commerce", title: "Commerce partner cluster", value: "196 preview relationships", detail: "Brands and retailers connected to launch, merchandising, and product storytelling themes.", tone: "green" },
  { id: "cluster-publisher", title: "Design publishers", value: "104 preview relationships", detail: "Editorial, design, and trend publications summarized at category level.", tone: "blue" },
];

export const brandCreatorAffinity: AccountFollowingSummaryPanel[] = [
  { id: "affinity-creator", title: "Creator affinity", value: "High", detail: "Strong aggregate affinity with creators producing studio, design, and workflow content.", tone: "purple" },
  { id: "affinity-brand", title: "Brand affinity", value: "Medium", detail: "Moderate category overlap with brands serving creative teams and retail operators.", tone: "amber" },
  { id: "affinity-community", title: "Community affinity", value: "+12%", detail: "Growing share of followed communities and collectives in snapshot summaries.", tone: "cyan" },
];

export const changeWindows: AccountFollowingSummaryPanel[] = [
  { id: "window-quarterly", title: "Quarterly refresh", value: "90 days", detail: "Historical snapshot window for aggregate following count and category changes.", tone: "blue" },
  { id: "window-weekly", title: "Weekly review", value: "Fri AM", detail: "Placeholder review window for category-level relationship monitoring.", tone: "slate" },
  { id: "window-gated", title: "Identity changes", value: "Gated", detail: "Latest identity-level following/unfollowing changes remain unavailable without a licensed provider.", tone: "rose" },
];

export const followingRelationshipCards: AccountFollowingRelationshipCard[] = [
  {
    id: "relationship-creators",
    title: "Creator ecosystem relationships",
    relationshipType: "creator",
    share: "38%",
    count: "488 preview relationships",
    change: "+22 net 90d",
    overlapEstimate: "28% overlap",
    description: "Aggregated relationship category for creators, studios, and production operators followed by the connected account.",
    sourceProvider: "Mock connected summary",
    sourceType: "official_api",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 93,
    policyClassification: "official_safe_limited",
    status: "snapshot",
    tone: "purple",
  },
  {
    id: "relationship-brands",
    title: "Brand and commerce relationships",
    relationshipType: "brand",
    share: "24%",
    count: "308 preview relationships",
    change: "+9 net 90d",
    overlapEstimate: "21% overlap",
    description: "Category-level brand relationship placeholder for product, retail, and launch-adjacent followed accounts.",
    sourceProvider: "Mock relationship model",
    sourceType: "mock_provider",
    freshness: "weekly",
    confidence: "medium",
    confidenceScore: 86,
    policyClassification: "official_safe_limited",
    status: "monitoring",
    tone: "green",
  },
  {
    id: "relationship-publishers",
    title: "Publisher and trend sources",
    relationshipType: "publisher",
    share: "17%",
    count: "218 preview relationships",
    change: "+5 net 90d",
    overlapEstimate: "14% overlap",
    description: "Summary category for design publications, trend sources, and editorial accounts followed by the account.",
    sourceProvider: "Mock connected summary",
    sourceType: "official_api",
    freshness: "weekly",
    confidence: "high",
    confidenceScore: 90,
    policyClassification: "official_safe_limited",
    status: "available",
    tone: "blue",
  },
];

export const gatedFollowingIdentityPanel: AccountFollowingGatedIdentityPanel = {
  title: "Following collection disabled in Alpha",
  status: "disabled_by_default",
  policyClassification: "licensed_provider_only",
  sourceProvider: "Requires licensed provider review",
  freshness: "manual",
  confidence: "needs_review",
  confidenceScore: null,
  description:
    "No live following collection is running. Arbitrary latest following or unfollowing identity-level data is not official-safe and remains unavailable until a compliant licensed provider is reviewed and the feature is explicitly gated.",
  unavailableReasons: [
    "No individual latest followed-account identities are shown in this mock page.",
    "Following collection disabled in Alpha; no live following collection is running.",
    "No scraping, private account access, hidden surveillance, or credential automation is represented.",
  ],
};

export const accountFollowingComplianceNotice = {
  title: "Official-first following relationship intelligence",
  description:
    "This following page uses mock data for connected professional account summaries and category-level relationship intelligence only. No live following collection is running; any future implementation requires official source connection and licensed provider review for gated identity-level features.",
  bullets: [
    "Following counts, relationship clusters, and category summaries are modeled as preview relationship signals.",
    "Arbitrary latest following or unfollowing identities require licensed provider review and must remain gated.",
    "No scraping, fake login automation, credential automation, private account access, or hidden surveillance is represented.",
  ],
};

export const accountFollowingTableRows: AccountFollowingTableRow[] = [
  {
    id: "row-total-following",
    signal: "Total following count summary",
    direction: "stable",
    count: "1,284 preview relationships",
    freshness: "weekly",
    source: "Mock connected summary",
    confidence: "93% High confidence",
    policy: "official_safe_limited",
    status: "snapshot",
  },
  {
    id: "row-creators",
    signal: "Creator ecosystem category",
    direction: "added",
    count: "488 preview relationships",
    freshness: "weekly",
    source: "Mock connected summary",
    confidence: "93% High confidence",
    policy: "official_safe_limited",
    status: "snapshot",
  },
  {
    id: "row-brands",
    signal: "Brand and commerce category",
    direction: "added",
    count: "308 preview relationships",
    freshness: "weekly",
    source: "Mock relationship model",
    confidence: "86% Medium confidence",
    policy: "official_safe_limited",
    status: "monitoring",
  },
  {
    id: "row-publishers",
    signal: "Publisher and trend source category",
    direction: "stable",
    count: "218 preview relationships",
    freshness: "weekly",
    source: "Mock connected summary",
    confidence: "90% High confidence",
    policy: "official_safe_limited",
    status: "available",
  },
  {
    id: "row-identity-level",
    signal: "Following collection disabled in Alpha",
    direction: "gated",
    count: "Unavailable",
    freshness: "manual",
    source: "Requires licensed provider review",
    confidence: "Not scored",
    policy: "licensed_provider_only",
    status: "disabled_by_default",
  },
];