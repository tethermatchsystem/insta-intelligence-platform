export const accountProfile = {
  accountId: "demo-account",
  displayName: "Example Brand",
  handle: "@examplebrand",
  accountType: "Business professional account",
  provider: "Mock preview · official-source required",
  sourceClassification: "mock_preview / official_safe when connected",
  confidence: "modeled preview",
  freshness: "static Alpha demo",
  avatarInitials: "EB",
};

export const accountOverviewKpis = [
  { label: "Followers", value: "1.2M", detail: "+4.2% 30d", tone: "emerald" },
  { label: "Following", value: "842", detail: "stable", tone: "slate" },
  { label: "Media count", value: "1,284", detail: "+18 posts", tone: "blue" },
  { label: "Engagement rate", value: "5.8%", detail: "+0.7 pts", tone: "violet" },
  { label: "Mentions", value: "842", detail: "+12% 7d", tone: "amber" },
  { label: "Alerts", value: "3", detail: "1 high", tone: "rose" },
];

export const accountQuickLinks = [
  { label: "Overview", href: "/accounts/demo-account" },
  { label: "Timeline", href: "/accounts/demo-account/timeline" },
  { label: "Posts", href: "/accounts/demo-account/posts" },
  { label: "Comments", href: "/accounts/demo-account/comments" },
  { label: "Followers", href: "/accounts/demo-account/followers" },
  { label: "Following", href: "/accounts/demo-account/following" },
  { label: "Engagement", href: "/accounts/demo-account/engagement" },
  { label: "Ads", href: "/accounts/demo-account/ads" },
  { label: "Recent Follows", href: "/accounts/demo-account/recent-follows", badge: "Licensed-provider-only · Disabled Alpha" },
  { label: "Recent Unfollows", href: "/accounts/demo-account/recent-unfollows", badge: "Licensed-provider-only · Disabled Alpha" },
  { label: "Likes", href: "/accounts/demo-account/likes", badge: "Restricted · Disabled Alpha" },
];

export const accountTrendPoints = [
  { label: "Followers", value: "1.2M", height: 82 },
  { label: "Reach", value: "3.8M", height: 68 },
  { label: "Engagement", value: "5.8%", height: 56 },
  { label: "Mentions", value: "842", height: 74 },
  { label: "Alerts", value: "3", height: 32 },
  { label: "Confidence", value: "100%", height: 88 },
];

export const providerHealth = [
  { label: "Provider", value: "Mock official-source preview", status: "Mock only" },
  { label: "Freshness", value: "Static Alpha demo data", status: "No live query" },
  { label: "Permission scope", value: "Requires official source connection", status: "Not connected" },
];

export const sourcePolicy = [
  "Official-safe connected professional account metrics",
  "Owned comments, mentions, media, and insights only",
  "No scraping, anti-bot bypass, or private account access",
  "Licensed providers required for any non-official enrichment",
];

export const recentCollectionJobs = [
  { job: "Profile and insights preview", source: "Mock official-source plan", status: "Mock only", freshness: "Static Alpha" },
  { job: "Owned media metrics preview", source: "Mock official-source plan", status: "Mock only", freshness: "Static Alpha" },
  { job: "Mention workflow preview", source: "Mock webhook payload", status: "Mock only", freshness: "Static Alpha" },
];

export const anomalyHighlights = [
  { title: "Mention velocity spike", detail: "Mentions are 42% above the account baseline.", severity: "Medium" },
  { title: "Engagement lift", detail: "Reels engagement is outperforming image posts by 1.8x.", severity: "Positive" },
  { title: "Review one alert", detail: "A high-priority comment workflow needs analyst triage.", severity: "High" },
];

export const recentActivity = [
  { event: "Mention previewed", direction: "Inbound", source: "Mock webhook payload", confidence: "Modeled", freshness: "Static", status: "Mocked" },
  { event: "Media insights previewed", direction: "Owned media", source: "Mock official-source plan", confidence: "Modeled", freshness: "Static", status: "Mocked" },
  { event: "Comment workflow previewed", direction: "Inbound", source: "Mock comments payload", confidence: "Modeled", freshness: "Static", status: "Mocked" },
  { event: "Audience snapshot previewed", direction: "Snapshot", source: "Mock official-source plan", confidence: "Modeled", freshness: "Static", status: "Mocked" },
  { event: "Alert rule previewed", direction: "System", source: "Rules engine mock", confidence: "Modeled", freshness: "Static", status: "Mocked" },
];