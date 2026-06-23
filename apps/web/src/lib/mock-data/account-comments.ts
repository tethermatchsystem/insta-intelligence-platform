export type AccountCommentTone = "blue" | "green" | "amber" | "purple" | "slate" | "rose" | "cyan";

export type AccountCommentSentiment = "positive" | "neutral" | "negative" | "mixed";

export type AccountCommentIntent = "question" | "support" | "purchase_intent" | "feedback" | "brand_love" | "moderation";

export type AccountCommentUrgency = "low" | "medium" | "high" | "urgent";

export type AccountCommentStatus = "new" | "queued" | "triaged" | "responded" | "resolved";

export type AccountCommentMediaType = "image" | "reel" | "carousel" | "video";

export type AccountCommentFreshness = "near_real_time" | "hourly" | "daily" | "manual";

export type AccountCommentConfidence = "verified" | "high" | "medium" | "needs_review";

export type AccountCommentPolicyClassification = "official_safe" | "official_safe_limited" | "licensed_provider_only";

export type AccountCommentProviderType = "official_api" | "licensed_provider" | "mock_provider";

export type AccountCommentKpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  tone: AccountCommentTone;
  description: string;
};

export type AccountCommentFilterGroup = {
  id: string;
  label: string;
  options: string[];
};

export type AccountComment = {
  id: string;
  commenterName: string;
  commenterHandle: string;
  commenterPlaceholder: string;
  commentText: string;
  commentedAt: string;
  linkedPostTitle: string;
  linkedPostType: AccountCommentMediaType;
  linkedPostTone: AccountCommentTone;
  sentiment: AccountCommentSentiment;
  intent: AccountCommentIntent;
  urgency: AccountCommentUrgency;
  confidence: AccountCommentConfidence;
  confidenceScore: number;
  sourceProvider: string;
  providerType: AccountCommentProviderType;
  freshness: AccountCommentFreshness;
  suggestedAction: string;
  status: AccountCommentStatus;
  policyClassification: AccountCommentPolicyClassification;
};

export type AccountCommentProviderBadge = {
  id: string;
  label: string;
  sourceType: AccountCommentProviderType;
  classification: AccountCommentPolicyClassification;
  tone: AccountCommentTone;
  description: string;
};

export type AccountCommentInsightItem = {
  id: string;
  title: string;
  value: string;
  detail: string;
  tone: AccountCommentTone;
};

export type AccountCommentTableRow = {
  id: string;
  commenter: string;
  comment: string;
  intent: AccountCommentIntent;
  sentiment: AccountCommentSentiment;
  linkedPost: string;
  linkedPostType: AccountCommentMediaType;
  freshness: AccountCommentFreshness;
  source: string;
  confidence: string;
  status: AccountCommentStatus;
};

export const accountCommentsProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  sourceBadge: "Meta Graph API comments",
  confidenceBadge: "93% avg confidence",
  freshnessBadge: "Near real time",
  integrationBadge: "No live integrations",
};

export const accountCommentFreshnessLabels: Record<AccountCommentFreshness, string> = {
  near_real_time: "Near real time",
  hourly: "Hourly refresh",
  daily: "Daily refresh",
  manual: "Manual import",
};

export const accountCommentConfidenceLabels: Record<AccountCommentConfidence, string> = {
  verified: "Verified",
  high: "High confidence",
  medium: "Medium confidence",
  needs_review: "Needs review",
};

export const accountCommentSentimentLabels: Record<AccountCommentSentiment, string> = {
  positive: "Positive",
  neutral: "Neutral",
  negative: "Negative",
  mixed: "Mixed",
};

export const accountCommentIntentLabels: Record<AccountCommentIntent, string> = {
  question: "Question",
  support: "Support",
  purchase_intent: "Purchase intent",
  feedback: "Feedback",
  brand_love: "Brand love",
  moderation: "Moderation",
};

export const accountCommentUrgencyLabels: Record<AccountCommentUrgency, string> = {
  low: "Low urgency",
  medium: "Medium urgency",
  high: "High urgency",
  urgent: "Urgent",
};

export const accountCommentStatusLabels: Record<AccountCommentStatus, string> = {
  new: "New",
  queued: "Queued",
  triaged: "Triaged",
  responded: "Responded",
  resolved: "Resolved",
};

export const accountCommentKpis: AccountCommentKpi[] = [
  {
    id: "total-comments",
    label: "Total comments",
    value: "12.8K",
    delta: "+18% 30d",
    tone: "blue",
    description: "Owned comments modeled from connected professional account mock data.",
  },
  {
    id: "new-comments",
    label: "New comments",
    value: "486",
    delta: "last 24h",
    tone: "cyan",
    description: "Fresh mock comments ready for triage in the moderation stream.",
  },
  {
    id: "questions-detected",
    label: "Questions detected",
    value: "214",
    delta: "+31 open",
    tone: "purple",
    description: "Product, shipping, and availability questions detected in owned comments.",
  },
  {
    id: "negative-sentiment",
    label: "Negative sentiment",
    value: "8.6%",
    delta: "-1.2 pts",
    tone: "rose",
    description: "Mock sentiment mix for comments that may need support or moderation review.",
  },
  {
    id: "moderation-queue",
    label: "Moderation queue",
    value: "38",
    delta: "7 urgent",
    tone: "amber",
    description: "Comments requiring escalation, policy review, or brand-safe response handling.",
  },
  {
    id: "response-opportunities",
    label: "Response opportunities",
    value: "126",
    delta: "+19 sales",
    tone: "green",
    description: "High-value replies suggested for support, commerce, and community moments.",
  },
];

export const accountCommentFilters: AccountCommentFilterGroup[] = [
  { id: "sentiment", label: "Sentiment", options: ["All sentiment", "Positive", "Neutral", "Negative", "Mixed"] },
  { id: "status", label: "Status", options: ["All statuses", "New", "Queued", "Triaged", "Responded", "Resolved"] },
  { id: "media-type", label: "Media type", options: ["All media", "Reels", "Images", "Carousels", "Videos"] },
  { id: "date-range", label: "Date range", options: ["Last 7 days", "Last 24 hours", "Last 30 days", "Custom"] },
  { id: "source", label: "Source", options: ["All sources", "Meta Graph API", "Meta comments insights", "Licensed sentiment provider"] },
  { id: "confidence", label: "Confidence", options: ["Any confidence", "Verified", "High", "Medium", "Needs review"] },
];

export const accountCommentProviderBadges: AccountCommentProviderBadge[] = [
  {
    id: "meta-graph-comments",
    label: "Meta Graph API comments",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "blue",
    description: "Owned comments for connected professional accounts when future live integrations are enabled.",
  },
  {
    id: "meta-comments-insights",
    label: "Meta comments insights",
    sourceType: "official_api",
    classification: "official_safe",
    tone: "green",
    description: "Official-safe comment counts, thread metadata, and owned moderation state placeholders.",
  },
  {
    id: "licensed-sentiment-provider",
    label: "Licensed sentiment provider",
    sourceType: "licensed_provider",
    classification: "licensed_provider_only",
    tone: "amber",
    description: "Optional compliant enrichment for sentiment and intent labels, clearly separated from official comment retrieval.",
  },
];

export const accountComments: AccountComment[] = [
  {
    id: "comment-001",
    commenterName: "Maya R.",
    commenterHandle: "@maya.designs",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "Is the studio kit restocking in sandstone? Need it before our July shoot and would love to order two sets.",
    commentedAt: "2026-06-23T13:42:00.000Z",
    linkedPostTitle: "Launch reel: summer editorial",
    linkedPostType: "reel",
    linkedPostTone: "purple",
    sentiment: "neutral",
    intent: "purchase_intent",
    urgency: "high",
    confidence: "verified",
    confidenceScore: 98,
    sourceProvider: "Meta Graph API comments",
    providerType: "official_api",
    freshness: "near_real_time",
    suggestedAction: "Prioritize an availability reply and route to the sales response queue.",
    status: "new",
    policyClassification: "official_safe",
  },
  {
    id: "comment-002",
    commenterName: "Jon Bell",
    commenterHandle: "@jonbell.studio",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "My order arrived with a damaged clip and support has not replied yet. Can someone help today?",
    commentedAt: "2026-06-23T12:18:00.000Z",
    linkedPostTitle: "Video: founder Q&A recap",
    linkedPostType: "video",
    linkedPostTone: "amber",
    sentiment: "negative",
    intent: "support",
    urgency: "urgent",
    confidence: "verified",
    confidenceScore: 97,
    sourceProvider: "Meta Graph API comments",
    providerType: "official_api",
    freshness: "near_real_time",
    suggestedAction: "Escalate to customer support and request order details in a public-safe reply.",
    status: "queued",
    policyClassification: "official_safe",
  },
  {
    id: "comment-003",
    commenterName: "Noor Studio",
    commenterHandle: "@noorstudio.co",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "Love the new organizer layout. The carousel finally shows the scale clearly — this is exactly what we needed.",
    commentedAt: "2026-06-23T10:05:00.000Z",
    linkedPostTitle: "Carousel: product detail story",
    linkedPostType: "carousel",
    linkedPostTone: "green",
    sentiment: "positive",
    intent: "brand_love",
    urgency: "low",
    confidence: "high",
    confidenceScore: 94,
    sourceProvider: "Meta comments insights",
    providerType: "official_api",
    freshness: "hourly",
    suggestedAction: "Like and reply with a community-building thank-you response.",
    status: "responded",
    policyClassification: "official_safe",
  },
  {
    id: "comment-004",
    commenterName: "Priya A.",
    commenterHandle: "@priya.apartment",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "Could you show how this fits in a small apartment workspace? A desk-depth example would help a lot.",
    commentedAt: "2026-06-22T19:34:00.000Z",
    linkedPostTitle: "Image: workspace setup",
    linkedPostType: "image",
    linkedPostTone: "blue",
    sentiment: "neutral",
    intent: "question",
    urgency: "medium",
    confidence: "high",
    confidenceScore: 92,
    sourceProvider: "Meta Graph API comments",
    providerType: "official_api",
    freshness: "hourly",
    suggestedAction: "Answer with dimensions and tag the comment as a content idea for future posts.",
    status: "triaged",
    policyClassification: "official_safe",
  },
  {
    id: "comment-005",
    commenterName: "Alex Chen",
    commenterHandle: "@alexchen.creative",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "The product looks great, but the launch caption is a little unclear about what is included in the bundle.",
    commentedAt: "2026-06-22T15:12:00.000Z",
    linkedPostTitle: "Launch reel: summer editorial",
    linkedPostType: "reel",
    linkedPostTone: "purple",
    sentiment: "mixed",
    intent: "feedback",
    urgency: "medium",
    confidence: "medium",
    confidenceScore: 86,
    sourceProvider: "Licensed sentiment provider",
    providerType: "licensed_provider",
    freshness: "daily",
    suggestedAction: "Clarify bundle contents in the reply and queue caption copy feedback for review.",
    status: "new",
    policyClassification: "licensed_provider_only",
  },
  {
    id: "comment-006",
    commenterName: "Samira K.",
    commenterHandle: "@samirak.moves",
    commenterPlaceholder: "Connected-account commenter placeholder",
    commentText: "This thread is getting repetitive spam replies from lookalike accounts. Can the brand clean it up?",
    commentedAt: "2026-06-22T11:27:00.000Z",
    linkedPostTitle: "Founder Q&A recap",
    linkedPostType: "video",
    linkedPostTone: "amber",
    sentiment: "negative",
    intent: "moderation",
    urgency: "urgent",
    confidence: "high",
    confidenceScore: 91,
    sourceProvider: "Meta Graph API comments",
    providerType: "official_api",
    freshness: "near_real_time",
    suggestedAction: "Send to moderation queue for owned-comment cleanup and brand-safe acknowledgement.",
    status: "queued",
    policyClassification: "official_safe",
  },
];

export const urgentComments: AccountCommentInsightItem[] = [
  {
    id: "urgent-001",
    title: "Damaged order complaint",
    value: "12 min old",
    detail: "Support-intent comment with negative sentiment and same-day response expectation.",
    tone: "rose",
  },
  {
    id: "urgent-002",
    title: "Spam cleanup request",
    value: "2 threads",
    detail: "Owned-comment moderation issue queued for brand-safe review.",
    tone: "amber",
  },
  {
    id: "urgent-003",
    title: "High-intent restock question",
    value: "98% conf.",
    detail: "Purchase intent on launch media with a suggested sales response.",
    tone: "purple",
  },
];

export const salesSupportQuestions: AccountCommentInsightItem[] = [
  {
    id: "sales-support-001",
    title: "Restock and availability",
    value: "42 open",
    detail: "Questions about colors, bundles, and launch inventory across recent owned posts.",
    tone: "green",
  },
  {
    id: "sales-support-002",
    title: "Shipping and order help",
    value: "18 routed",
    detail: "Support-intent comments that should receive a public-safe acknowledgement.",
    tone: "blue",
  },
  {
    id: "sales-support-003",
    title: "Product fit guidance",
    value: "31 ideas",
    detail: "Questions that can become future explainers, demos, and pinned replies.",
    tone: "cyan",
  },
];

export const sentimentThemes: AccountCommentInsightItem[] = [
  {
    id: "theme-001",
    title: "Launch excitement",
    value: "+23% positive",
    detail: "Brand-love comments cluster around product details and studio workflow imagery.",
    tone: "green",
  },
  {
    id: "theme-002",
    title: "Fulfillment friction",
    value: "8.6% negative",
    detail: "Negative comments are mostly support questions, not broad brand criticism.",
    tone: "rose",
  },
  {
    id: "theme-003",
    title: "Bundle clarity",
    value: "medium risk",
    detail: "Mixed feedback suggests replies should clarify what each kit includes.",
    tone: "amber",
  },
];

export const accountCommentsComplianceNotice = {
  title: "Official-first comment intelligence",
  description:
    "This comments page uses mock data for connected professional account comments only. Future live implementation must use official APIs and licensed providers only, with no scraping, private account access, or hidden surveillance.",
  bullets: [
    "Owned comments and moderation state are modeled as official-safe connected account signals.",
    "Sentiment and intent enrichment must remain clearly classified when provided by licensed providers.",
    "No scraping, fake login automation, credential automation, private account access, or arbitrary personal tracking is represented.",
  ],
};

export const accountCommentTableRows: AccountCommentTableRow[] = accountComments.map((comment) => ({
  id: comment.id,
  commenter: `${comment.commenterName} ${comment.commenterHandle}`,
  comment: comment.commentText,
  intent: comment.intent,
  sentiment: comment.sentiment,
  linkedPost: comment.linkedPostTitle,
  linkedPostType: comment.linkedPostType,
  freshness: comment.freshness,
  source: comment.sourceProvider,
  confidence: `${comment.confidenceScore}% ${accountCommentConfidenceLabels[comment.confidence]}`,
  status: comment.status,
}));