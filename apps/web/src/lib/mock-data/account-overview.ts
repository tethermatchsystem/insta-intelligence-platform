export const accountProfile = {
  accountId: "demo",
  displayName: "Example Brand",
  handle: "@examplebrand",
  accountType: "Business professional account",
  provider: "Meta official API",
  sourceClassification: "official_safe",
  confidence: "100%",
  freshness: "2m ago",
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
  { label: "Overview", href: "/accounts/demo" },
  { label: "Timeline", href: "/accounts/demo/timeline" },
  { label: "Posts", href: "/accounts/demo/posts" },
  { label: "Comments", href: "/accounts/demo/comments" },
  { label: "Followers", href: "/accounts/demo/followers" },
  { label: "Following", href: "/accounts/demo/following" },
  { label: "Engagement", href: "/accounts/demo/engagement" },
  { label: "Ads", href: "/accounts/demo/ads" },
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
  { label: "Provider", value: "Meta official API", status: "Healthy" },
  { label: "Webhook freshness", value: "2m ago", status: "Current" },
  { label: "Permission scope", value: "Connected account", status: "Approved" },
];

export const sourcePolicy = [
  "Official-safe connected professional account metrics",
  "Owned comments, mentions, media, and insights only",
  "No scraping, anti-bot bypass, or private account access",
  "Licensed providers required for any non-official enrichment",
];

export const recentCollectionJobs = [
  { job: "Profile and insights refresh", source: "Meta official API", status: "Succeeded", freshness: "2m ago" },
  { job: "Owned media metrics sync", source: "Meta official API", status: "Succeeded", freshness: "8m ago" },
  { job: "Mention webhook normalization", source: "Meta webhooks", status: "Succeeded", freshness: "12m ago" },
];

export const anomalyHighlights = [
  { title: "Mention velocity spike", detail: "Mentions are 42% above the account baseline.", severity: "Medium" },
  { title: "Engagement lift", detail: "Reels engagement is outperforming image posts by 1.8x.", severity: "Positive" },
  { title: "Review one alert", detail: "A high-priority comment workflow needs analyst triage.", severity: "High" },
];

export const recentActivity = [
  { event: "Mention observed", direction: "Inbound", source: "Meta webhook", confidence: "100%", freshness: "2m", status: "Official safe" },
  { event: "Media insights captured", direction: "Owned media", source: "Meta official API", confidence: "100%", freshness: "8m", status: "Synced" },
  { event: "Comment workflow queued", direction: "Inbound", source: "Meta comments API", confidence: "100%", freshness: "12m", status: "Needs review" },
  { event: "Audience snapshot stored", direction: "Snapshot", source: "Meta official API", confidence: "100%", freshness: "22m", status: "Stored" },
  { event: "Alert rule evaluated", direction: "System", source: "Rules engine mock", confidence: "96%", freshness: "30m", status: "Mocked" },
];