export const dashboardKpis = [
  { label: "Total monitored accounts", value: "128", trend: "+12 this week", tone: "blue" },
  { label: "Follower reach", value: "18.4M", trend: "+4.8% 30d", tone: "emerald" },
  { label: "Engagement rate", value: "5.7%", trend: "+0.6 pts", tone: "violet" },
  { label: "Mentions", value: "2,842", trend: "+18% 7d", tone: "amber" },
  { label: "Provider confidence", value: "98.2%", trend: "official + licensed", tone: "slate" },
  { label: "Active alerts", value: "9", trend: "3 high priority", tone: "rose" },
];

export const dashboardTrendLabels = [
  { label: "Followers", value: "18.4M", height: "h-36" },
  { label: "Engagement", value: "5.7%", height: "h-28" },
  { label: "Mentions", value: "2.8K", height: "h-32" },
  { label: "Alerts", value: "9", height: "h-20" },
  { label: "Confidence", value: "98%", height: "h-40" },
];

export const providerHealth = [
  { name: "Meta official API", status: "Healthy", freshness: "2m", confidence: "100%" },
  { name: "Business Discovery", status: "Healthy", freshness: "12m", confidence: "97%" },
  { name: "Licensed provider", status: "Mocked", freshness: "n/a", confidence: "92%" },
];

export const complianceCoverage = [
  "Official-safe modules enabled",
  "High-risk public intelligence gated",
  "No scraping or private account access",
  "Provider provenance required",
];

export const recentCollectionJobs = [
  { job: "Owned media refresh", source: "Meta API", status: "Succeeded", time: "2m ago" },
  { job: "Mention webhook ingest", source: "Meta webhooks", status: "Succeeded", time: "5m ago" },
  { job: "Competitor snapshot", source: "Business Discovery", status: "Queued", time: "12m ago" },
];

export const anomalyHighlights = [
  { title: "Mention spike", detail: "Brand mentions up 42% versus baseline", severity: "Medium" },
  { title: "Engagement dip", detail: "Two creator accounts below 7d average", severity: "Low" },
  { title: "Provider lag", detail: "One licensed-provider feed is mocked", severity: "Info" },
];

export const recentIntelligenceEvents = [
  { event: "Mention observed", account: "@examplebrand", source: "Meta webhook", confidence: "100%", freshness: "2m", status: "Official safe" },
  { event: "Media metrics captured", account: "@agency_client", source: "Meta official API", confidence: "100%", freshness: "8m", status: "Synced" },
  { event: "Competitor snapshot", account: "@creator_studio", source: "Business Discovery", confidence: "97%", freshness: "12m", status: "Limited official" },
  { event: "Alert evaluated", account: "@examplebrand", source: "Rules engine mock", confidence: "95%", freshness: "18m", status: "Mocked" },
  { event: "Export prepared", account: "Workspace", source: "Export service mock", confidence: "99%", freshness: "24m", status: "Ready" },
];