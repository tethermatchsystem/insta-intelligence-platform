export type TimelinePolicyClassification =
  | "official_safe"
  | "official_safe_limited"
  | "consented_only"
  | "licensed_provider_only"
  | "restricted"
  | "disabled_by_default";

export type TimelineDirection = "inbound" | "outbound" | "system" | "neutral";

export type TimelineStatus =
  | "complete"
  | "detected"
  | "monitoring"
  | "review"
  | "stable"
  | "gated";

export type TimelineFreshness =
  | "live"
  | "near_real_time"
  | "hourly"
  | "daily"
  | "manual"
  | "unavailable";

export type TimelineConfidenceLabel = "verified" | "high" | "medium" | "low" | "unavailable";

export type TimelineEventType =
  | "snapshot_refresh"
  | "post_published"
  | "comment_inbound"
  | "mention_inbound"
  | "engagement_spike"
  | "ad_detected"
  | "follower_count_changed"
  | "licensed_recent_follow_unfollow_placeholder";

export type TimelineTone = "blue" | "green" | "amber" | "purple" | "slate" | "red";

export type TimelineConfidence = {
  label: TimelineConfidenceLabel;
  score: number | null;
};

export type TimelineProviderBadge = {
  id: string;
  label: string;
  sourceType: "official_api" | "mock_provider" | "licensed_provider_placeholder";
  classification: TimelinePolicyClassification;
  tone: TimelineTone;
  description: string;
};

export type TimelineKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: TimelineTone;
  description: string;
};

export type TimelineFilterOption = {
  label: string;
  value: string;
  description?: string;
};

export type TimelineFilterGroup = {
  id: string;
  label: string;
  options: TimelineFilterOption[];
};

export type TimelineEvent = {
  id: string;
  type: TimelineEventType;
  title: string;
  description: string;
  direction: TimelineDirection;
  sourceProvider: string;
  confidence: TimelineConfidence;
  freshness: TimelineFreshness;
  timestamp: string;
  policyClassification: TimelinePolicyClassification;
  status: TimelineStatus;
};

export type TimelineTableRow = {
  id: string;
  event: string;
  direction: TimelineDirection;
  provider: string;
  confidence: string;
  freshness: TimelineFreshness;
  policyClassification: TimelinePolicyClassification;
  status: TimelineStatus;
  observedAt: string;
};

export const accountTimelineFreshnessValues: Record<TimelineFreshness, string> = {
  live: "Alpha demo only; no live timeline collection is running.",
  near_real_time: "Preview freshness only; requires official source connection for real updates.",
  hourly: "Static Alpha preview cadence, not a running collection job.",
  daily: "Static Alpha preview snapshot, not a running ingestion job.",
  manual: "Manual or mock preview confirmation only.",
  unavailable: "Freshness is unavailable until a compliant provider is connected."
};

export const accountTimelineConfidenceValues: Record<TimelineConfidenceLabel, string> = {
  verified: "Verified first-party or official Meta API data.",
  high: "High confidence normalized provider signal.",
  medium: "Medium confidence derived or aggregated signal.",
  low: "Low confidence placeholder or incomplete signal.",
  unavailable: "Confidence is unavailable because the feature is gated."
};

export const accountTimelineProviderBadges: TimelineProviderBadge[] = [
  {
    id: "meta-graph-api",
    label: "Meta Graph API",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "blue",
    description: "Connected professional account data from official Meta endpoints."
  },
  {
    id: "meta-insights-api",
    label: "Meta Insights",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "green",
    description: "Owned account insights and metric snapshots."
  },
  {
    id: "meta-marketing-api",
    label: "Meta Marketing API",
    sourceType: "official_api",
    classification: "official_safe_limited",
    tone: "purple",
    description: "Ad and campaign visibility where account permissions allow it."
  },
  {
    id: "licensed-provider-placeholder",
    label: "Licensed Provider Placeholder",
    sourceType: "licensed_provider_placeholder",
    classification: "licensed_provider_only",
    tone: "amber",
    description: "Gated placeholder for licensed recent follow/unfollow signals."
  }
];

export const accountTimelineComplianceNotice = {
  title: "Official-first timeline preview",
  description:
    "This mock timeline uses official-safe Meta data categories and clearly gates licensed-provider-only relationship placeholders. No live timeline collection is running, and no scraping, credential automation, or private account access is represented.",
  bullets: [
    "Connected account snapshots, owned comments, mentions, posts, and ads are modeled as official-safe or official-safe-limited signals.",
    "Recent follow/unfollow activity is included only as a licensed-provider-only placeholder and should remain gated before implementation.",
    "Every event carries provenance, freshness, confidence, policy classification, and status metadata."
  ]
};

export const accountTimelineKpis: TimelineKpi[] = [
  {
    id: "events-24h",
    label: "Preview events",
    value: "42",
    delta: "+18%",
    tone: "blue",
    description: "Mock count of compliant account timeline preview events."
  },
  {
    id: "official-source-share",
    label: "Preview source mix",
    value: "88%",
    delta: "+6%",
    tone: "green",
    description: "Modeled share of preview events that would require official Meta APIs."
  },
  {
    id: "avg-confidence",
    label: "Preview confidence",
    value: "91%",
    delta: "+3 pts",
    tone: "purple",
    description: "Average confidence across visible, non-gated events."
  },
  {
    id: "gated-signals",
    label: "Gated signals",
    value: "1",
    delta: "licensed only",
    tone: "amber",
    description: "Signals intentionally blocked until a compliant licensed provider is configured."
  }
];

export const accountTimelineFilters: TimelineFilterGroup[] = [
  {
    id: "event-type",
    label: "Event type",
    options: [
      { label: "All events", value: "all" },
      { label: "Snapshots", value: "snapshot_refresh" },
      { label: "Posts", value: "post_published" },
      { label: "Comments", value: "comment_inbound" },
      { label: "Mentions", value: "mention_inbound" },
      { label: "Engagement spikes", value: "engagement_spike" },
      { label: "Ads", value: "ad_detected" },
      { label: "Follower changes", value: "follower_count_changed" },
      { label: "Licensed placeholders", value: "licensed_recent_follow_unfollow_placeholder" }
    ]
  },
  {
    id: "policy",
    label: "Policy",
    options: [
      { label: "All classifications", value: "all" },
      { label: "Official safe", value: "official_safe" },
      { label: "Official safe limited", value: "official_safe_limited" },
      { label: "Licensed provider only", value: "licensed_provider_only" }
    ]
  },
  {
    id: "freshness",
    label: "Freshness",
    options: [
      { label: "Any freshness", value: "all" },
      { label: "Alpha demo only", value: "live" },
      { label: "Requires official source connection", value: "near_real_time" },
      { label: "Static hourly preview", value: "hourly" },
      { label: "Static daily preview", value: "daily" },
      { label: "Unavailable", value: "unavailable" }
    ]
  }
];

export const accountTimelineEvents: TimelineEvent[] = [
  {
    id: "evt-snapshot-refresh-001",
    type: "snapshot_refresh",
    title: "Preview snapshot event",
    description: "Daily account profile, media count, follower count, and insight snapshot represented as static Alpha preview data.",
    direction: "system",
    sourceProvider: "meta-insights-api",
    confidence: { label: "verified", score: 99 },
    freshness: "daily",
    timestamp: "2026-06-22T21:05:00.000Z",
    policyClassification: "official_safe",
    status: "complete"
  },
  {
    id: "evt-post-published-001",
    type: "post_published",
    title: "Preview post event",
    description: "Owned carousel media is represented as a preview event. No live timeline collection is running.",
    direction: "outbound",
    sourceProvider: "meta-graph-api",
    confidence: { label: "verified", score: 98 },
    freshness: "near_real_time",
    timestamp: "2026-06-22T18:42:00.000Z",
    policyClassification: "official_safe",
    status: "complete"
  },
  {
    id: "evt-comment-inbound-001",
    type: "comment_inbound",
    title: "Preview comment event",
    description: "Owned media comment example shown as Alpha demo only; requires official source connection.",
    direction: "inbound",
    sourceProvider: "meta-graph-api",
    confidence: { label: "verified", score: 97 },
    freshness: "live",
    timestamp: "2026-06-22T17:16:00.000Z",
    policyClassification: "official_safe",
    status: "monitoring"
  },
  {
    id: "evt-mention-inbound-001",
    type: "mention_inbound",
    title: "Preview mention event",
    description: "Eligible mention example shown as a static preview event, not live monitoring.",
    direction: "inbound",
    sourceProvider: "meta-graph-api",
    confidence: { label: "high", score: 94 },
    freshness: "near_real_time",
    timestamp: "2026-06-22T15:33:00.000Z",
    policyClassification: "official_safe_limited",
    status: "detected"
  },
  {
    id: "evt-engagement-spike-001",
    type: "engagement_spike",
    title: "Preview engagement event",
    description: "Owned media engagement trend represented as a mock preview above a demo baseline.",
    direction: "neutral",
    sourceProvider: "meta-insights-api",
    confidence: { label: "high", score: 92 },
    freshness: "hourly",
    timestamp: "2026-06-22T14:00:00.000Z",
    policyClassification: "official_safe",
    status: "review"
  },
  {
    id: "evt-ad-detected-001",
    type: "ad_detected",
    title: "Preview ad event",
    description: "Compliant ad visibility example shown as static Alpha preview data.",
    direction: "outbound",
    sourceProvider: "meta-marketing-api",
    confidence: { label: "medium", score: 86 },
    freshness: "hourly",
    timestamp: "2026-06-22T12:25:00.000Z",
    policyClassification: "official_safe_limited",
    status: "detected"
  },
  {
    id: "evt-follower-count-changed-001",
    type: "follower_count_changed",
    title: "Preview follower-count event",
    description: "Follower count change represented from a static official account snapshot example.",
    direction: "neutral",
    sourceProvider: "meta-insights-api",
    confidence: { label: "verified", score: 99 },
    freshness: "daily",
    timestamp: "2026-06-22T09:10:00.000Z",
    policyClassification: "official_safe",
    status: "stable"
  },
  {
    id: "evt-licensed-recent-follow-unfollow-placeholder-001",
    type: "licensed_recent_follow_unfollow_placeholder",
    title: "Recent follow/unfollow placeholder",
    description: "Relationship-change activity is intentionally gated for licensed provider evaluation only.",
    direction: "neutral",
    sourceProvider: "licensed-provider-placeholder",
    confidence: { label: "unavailable", score: null },
    freshness: "unavailable",
    timestamp: "2026-06-22T08:00:00.000Z",
    policyClassification: "licensed_provider_only",
    status: "gated"
  }
];

export const accountTimelineTableRows: TimelineTableRow[] = accountTimelineEvents.map((event) => ({
  id: event.id,
  event: event.title,
  direction: event.direction,
  provider: event.sourceProvider,
  confidence:
    event.confidence.score === null
      ? accountTimelineConfidenceValues[event.confidence.label]
      : `${event.confidence.score}% ${event.confidence.label}`,
  freshness: event.freshness,
  policyClassification: event.policyClassification,
  status: event.status,
  observedAt: event.timestamp
}));