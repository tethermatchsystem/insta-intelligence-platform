export type FeaturePolicyStatus = "official_safe" | "official_safe_limited" | "consented_only" | "licensed_provider_only" | "restricted" | "disabled_by_default";
export type FeaturePolicy = { key: string; label: string; status: FeaturePolicyStatus; allowedSources: string[]; rationale: string };
export const featurePolicies: FeaturePolicy[] = [
  { key: "connected_account_profile_analytics", label: "Connected account profile analytics", status: "official_safe", allowedSources: ["Meta official API"], rationale: "Connected professional account data via official APIs." },
  { key: "connected_account_media_insights", label: "Connected account media insights", status: "official_safe", allowedSources: ["Meta official API"], rationale: "Owned media and insights for connected professional accounts." },
  { key: "owned_comments_and_mentions", label: "Owned comments and mentions", status: "official_safe", allowedSources: ["Meta webhooks", "Meta comments API"], rationale: "Owned account comment and mention workflows." },
  { key: "owned_dms", label: "Owned DMs", status: "consented_only", allowedSources: ["Meta messaging API"], rationale: "Requires connected account consent and approved permissions." },
  { key: "public_professional_account_basic_metrics", label: "Public professional account basic metrics", status: "official_safe", allowedSources: ["Business Discovery"], rationale: "Supported for public professional accounts." },
  { key: "hashtag_monitoring", label: "Hashtag monitoring", status: "official_safe", allowedSources: ["Public Content Access", "Hashtag API"], rationale: "Hashtag-centered discovery only." },
  { key: "owned_ad_reporting", label: "Owned ad reporting", status: "official_safe", allowedSources: ["Meta Marketing API"], rationale: "Owned ad account reporting." },
  { key: "public_ad_archive_search", label: "Public ad archive search", status: "official_safe_limited", allowedSources: ["Meta Ad Library API"], rationale: "Limited by public archive scope." },
  { key: "competitor_benchmarking", label: "Competitor benchmarking", status: "official_safe_limited", allowedSources: ["Business Discovery", "licensed_public_data_provider"], rationale: "Professional-account benchmarking with provenance." },
  { key: "creator_discovery", label: "Creator discovery", status: "official_safe_limited", allowedSources: ["Creator Marketplace", "licensed_public_data_provider"], rationale: "Creator workflows through official or licensed data." },
  { key: "arbitrary_public_account_recent_follows", label: "Arbitrary public account recent follows", status: "licensed_provider_only", allowedSources: ["licensed_public_data_provider"], rationale: "No official arbitrary-user follow endpoint is documented." },
  { key: "arbitrary_public_account_recent_unfollows", label: "Arbitrary public account recent unfollows", status: "licensed_provider_only", allowedSources: ["licensed_public_data_provider"], rationale: "No official arbitrary-user unfollow endpoint is documented." },
  { key: "arbitrary_user_like_history", label: "Arbitrary user like history", status: "restricted", allowedSources: [], rationale: "Do not implement without approved lawful source and policy review." },
  { key: "arbitrary_user_outbound_comments", label: "Arbitrary user outbound comments", status: "restricted", allowedSources: [], rationale: "High-risk outbound activity reconstruction." },
  { key: "arbitrary_user_outbound_engagement_graph", label: "Arbitrary user outbound engagement graph", status: "restricted", allowedSources: [], rationale: "High-risk person-level graph reconstruction." },
  { key: "private_account_data", label: "Private account data", status: "disabled_by_default", allowedSources: [], rationale: "Private account access is not supported." },
  { key: "scraping_with_evasion", label: "Scraping with evasion", status: "disabled_by_default", allowedSources: [], rationale: "Anti-bot bypass and scraping evasion are not implemented." },
];
export function getFeaturePolicy(key: string) { return featurePolicies.find((policy) => policy.key === key); }
