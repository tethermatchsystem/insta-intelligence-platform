export const dashboardKpis = [
  { label: "Account previews", value: "128", trend: "Preview data", tone: "blue" },
  { label: "Preview follower reach", value: "18.4M", trend: "Mock 30d", tone: "emerald" },
  { label: "Preview engagement rate", value: "5.7%", trend: "Mock delta", tone: "violet" },
  { label: "Mention previews", value: "2,842", trend: "Mock 7d", tone: "amber" },
  { label: "Mock provider confidence", value: "98.2%", trend: "official + licensed", tone: "slate" },
  { label: "Alert previews", value: "9", trend: "Detection disabled", tone: "rose" },
];

export const dashboardTrendLabels = [
  { label: "Followers", value: "18.4M", height: "h-36" },
  { label: "Engagement", value: "5.7%", height: "h-28" },
  { label: "Mentions", value: "2.8K", height: "h-32" },
  { label: "Alert previews", value: "9", height: "h-20" },
  { label: "Confidence", value: "98%", height: "h-40" },
];

export const providerHealth = [
  { name: "Meta official API preview", status: "Requires official source connection", freshness: "Static preview", confidence: "100% mock" },
  { name: "Business Discovery preview", status: "Requires official source connection", freshness: "Static preview", confidence: "97% mock" },
  { name: "Licensed provider preview", status: "Provider activity disabled in Alpha", freshness: "n/a", confidence: "92% mock" },
];

export const complianceCoverage = [
  "Official-safe modules enabled",
  "High-risk public intelligence gated",
  "No scraping or private account access",
  "Provider provenance required",
];

export const recentCollectionJobs = [
  { job: "Owned media refresh preview", source: "Meta API mock", status: "Preview data", time: "Static sample" },
  { job: "Owned mention ingest preview", source: "Webhook mock", status: "No live monitoring", time: "Static sample" },
  { job: "Competitor snapshot preview", source: "Business Discovery mock", status: "Requires official source connection", time: "Alpha demo" },
];

export const anomalyHighlights = [
  { title: "Mock mention spike", detail: "Preview scenario: mentions appear above a modeled baseline", severity: "Alpha demo only" },
  { title: "Mock engagement dip", detail: "Preview scenario: creator engagement appears below a mock 7d average", severity: "Alpha demo only" },
  { title: "Provider activity disabled", detail: "Licensed-provider activity is disabled in Alpha", severity: "No live monitoring" },
];

export const recentIntelligenceEvents = [
  { event: "Mock mention preview", account: "@examplebrand", source: "Webhook mock", confidence: "100% mock", freshness: "Static preview", status: "Alpha demo only" },
  { event: "Mock media metrics preview", account: "@agency_client", source: "Meta official API mock", confidence: "100% mock", freshness: "Static preview", status: "Preview data" },
  { event: "Mock competitor snapshot", account: "@creator_studio", source: "Business Discovery mock", confidence: "97% mock", freshness: "Static preview", status: "Requires official source connection" },
  { event: "Mock alert rule preview", account: "@examplebrand", source: "Rules engine mock disabled", confidence: "95% mock", freshness: "No live monitoring", status: "Detection disabled in Alpha" },
  { event: "Mock export preview", account: "Workspace", source: "Export service mock", confidence: "99% mock", freshness: "Static preview", status: "Alpha demo only" },
];