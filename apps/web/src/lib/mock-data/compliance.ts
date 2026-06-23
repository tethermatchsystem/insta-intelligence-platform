export type ComplianceTone = "success" | "warning" | "info" | "neutral" | "danger" | "purple" | "cyan";

export type ComplianceClassification =
  | "official_safe"
  | "official_safe_limited"
  | "consented_only"
  | "licensed_provider_only"
  | "restricted"
  | "disabled_by_default";

export type ComplianceHeaderBadge = {
  label: string;
  value: string;
  tone: ComplianceTone;
};

export type ComplianceKpiCard = {
  label: string;
  value: string;
  change: string;
  description: string;
  tone: ComplianceTone;
};

export type PolicyGatePanel = {
  id: string;
  title: string;
  classification: ComplianceClassification;
  status: string;
  summary: string;
  allowedSignals: string[];
  blockedSignals: string[];
  tone: ComplianceTone;
};

export type GovernancePanel = {
  id: string;
  title: string;
  status: string;
  owner: string;
  summary: string;
  checks: string[];
  tone: ComplianceTone;
};

export type FeaturePolicyCard = {
  id: string;
  feature: string;
  classification: ComplianceClassification;
  source: string;
  permissionModel: string;
  readiness: string;
  reviewNote: string;
};

export type AuditReadinessItem = {
  id: string;
  label: string;
  value: string;
  status: string;
  description: string;
  tone: ComplianceTone;
};

export type ComplianceTableRow = {
  id: string;
  control: string;
  domain: string;
  classification: ComplianceClassification;
  sourcePolicy: string;
  permissionScope: string;
  auditStatus: string;
  owner: string;
  action: string;
};

export type ComplianceNotice = {
  title: string;
  body: string;
  bullets: string[];
};

export const complianceHeaderBadges: ComplianceHeaderBadge[] = [
  { label: "Source", value: "Mock policy registry", tone: "info" },
  { label: "Confidence", value: "Review-ready preview", tone: "success" },
  { label: "Freshness", value: "Static compliance snapshot", tone: "neutral" },
  { label: "Integrations", value: "No live policy writes", tone: "warning" },
];

export const complianceKpiCards: ComplianceKpiCard[] = [
  {
    label: "Policy checks",
    value: "42",
    change: "+6 staged",
    description: "Mock checks for source policy, permissions, data handling, retention, and audit readiness.",
    tone: "info",
  },
  {
    label: "Official-safe features",
    value: "18",
    change: "Approved path",
    description: "Connected professional account analytics, owned comments, reports, and exports.",
    tone: "success",
  },
  {
    label: "Licensed-provider-only",
    value: "7",
    change: "Gated by contract",
    description: "Sensitive public/professional intelligence requires compliant provider provenance.",
    tone: "warning",
  },
  {
    label: "Restricted features",
    value: "5",
    change: "No default access",
    description: "Identity-level sensitive signals require explicit policy review and are not product defaults.",
    tone: "danger",
  },
  {
    label: "Audit-ready events",
    value: "1.8M",
    change: "Mock ledger",
    description: "Static audit event coverage for exports, provider approvals, and settings changes.",
    tone: "purple",
  },
  {
    label: "Review required",
    value: "9",
    change: "Compliance queue",
    description: "Features and data sources pending legal, provenance, retention, or permission review.",
    tone: "cyan",
  },
];

export const policyGatePanels: PolicyGatePanel[] = [
  {
    id: "gate-official-safe",
    title: "Official-safe",
    classification: "official_safe",
    status: "Enabled for mock review",
    summary: "Allowed for official Meta APIs, connected professional account analytics, owned media, owned comments, governed reports, and exports.",
    allowedSignals: ["Connected account insights", "Owned comments", "Meta Marketing API reporting"],
    blockedSignals: ["Credential automation", "Private account access", "Scraping"],
    tone: "success",
  },
  {
    id: "gate-official-safe-limited",
    title: "Official-safe-limited",
    classification: "official_safe_limited",
    status: "Permission-scoped",
    summary: "Allowed only where official APIs, rate limits, account permissions, and data minimization constraints are satisfied.",
    allowedSignals: ["Business Discovery metrics", "Hashtag/public content APIs", "Ad Library metadata"],
    blockedSignals: ["Unapproved fields", "Hidden surveillance", "Non-consented identity enrichment"],
    tone: "info",
  },
  {
    id: "gate-licensed-provider",
    title: "Licensed-provider-only",
    classification: "licensed_provider_only",
    status: "Disabled until provider approval",
    summary: "Sensitive public/professional intelligence requires a compliant provider contract, provenance metadata, and rate-limit strategy.",
    allowedSignals: ["Approved provider enrichment", "Contracted public/professional datasets", "Provider SLA freshness"],
    blockedSignals: ["Unlicensed collection", "Arbitrary recent follows without provider approval", "Arbitrary recent unfollows without provider approval"],
    tone: "warning",
  },
  {
    id: "gate-restricted",
    title: "Restricted",
    classification: "restricted",
    status: "Policy review required",
    summary: "Identity-level sensitive signals and arbitrary behavior history are not available by default and require explicit compliance review.",
    allowedSignals: ["Aggregated risk metadata after review", "Consented-only workflows", "Audit-approved exceptions"],
    blockedSignals: ["Arbitrary user like history", "Arbitrary outbound engagement graph", "Hidden surveillance workflows"],
    tone: "danger",
  },
  {
    id: "gate-disabled-default",
    title: "Disabled-by-default",
    classification: "disabled_by_default",
    status: "Blocked",
    summary: "Capabilities that conflict with product policy remain unavailable and are represented for governance visibility only.",
    allowedSignals: ["None by default", "Policy documentation", "Audit trail of blocked requests"],
    blockedSignals: ["Scraping with evasion", "Fake login automation", "Private account data", "Anti-bot bypass"],
    tone: "neutral",
  },
];

export const governancePanels: GovernancePanel[] = [
  {
    id: "governance-provider-approval",
    title: "Provider approval status",
    status: "Mock review queue",
    owner: "Compliance Admin",
    summary: "Provider adapters must include source type, classification, confidence, provenance, freshness, rate-limit strategy, and error mapping before activation.",
    checks: ["Contract and lawful collection attestation", "Provenance metadata", "Licensed-provider-only feature gates"],
    tone: "warning",
  },
  {
    id: "governance-workspace-permissions",
    title: "Workspace permissions placeholder",
    status: "Permission-scoped",
    owner: "Workspace Owner",
    summary: "Connected/owned account permissions are required where applicable; private account access and credential automation are not supported.",
    checks: ["Connected professional account access", "Role-based admin review", "No fake login automation"],
    tone: "success",
  },
  {
    id: "governance-audit-readiness",
    title: "Audit log readiness",
    status: "Audit-ready preview",
    owner: "Data Operations",
    summary: "Mock audit coverage for exports, provider changes, feature policy decisions, and settings updates.",
    checks: ["Policy decision events", "Provider approval events", "Export and report events"],
    tone: "purple",
  },
  {
    id: "governance-retention",
    title: "Retention and data handling placeholder",
    status: "Static defaults",
    owner: "Data Governance",
    summary: "Retention and handling defaults are shown as mock data until backend retention jobs and audit records are implemented.",
    checks: ["Data minimization", "Workspace retention defaults", "Future deletion and suppression workflows"],
    tone: "info",
  },
];

export const featurePolicyCards: FeaturePolicyCard[] = [
  {
    id: "feature-connected-insights",
    feature: "Connected account insights",
    classification: "official_safe",
    source: "Meta Graph API",
    permissionModel: "Connected professional account permissions",
    readiness: "Ready for official API adapter",
    reviewNote: "Safe default for owned/connected analytics.",
  },
  {
    id: "feature-business-discovery",
    feature: "Business Discovery metrics",
    classification: "official_safe_limited",
    source: "Meta official API",
    permissionModel: "Allowed fields and rate limits only",
    readiness: "Limited policy gate",
    reviewNote: "Use only where Meta permissions and public/professional framing apply.",
  },
  {
    id: "feature-recent-follows",
    feature: "Arbitrary recent follows / unfollows",
    classification: "licensed_provider_only",
    source: "Licensed compliant provider only",
    permissionModel: "Provider contract, provenance, and allowed-use review",
    readiness: "Disabled until provider approval",
    reviewNote: "Not available through scraping or hidden surveillance; provider-only if lawful and compliant.",
  },
  {
    id: "feature-like-history",
    feature: "Arbitrary user like history",
    classification: "restricted",
    source: "Not a default source",
    permissionModel: "Explicit compliance exception required",
    readiness: "Restricted",
    reviewNote: "Identity-level sensitive behavior history is not a default product capability.",
  },
  {
    id: "feature-private-account",
    feature: "Private account data access",
    classification: "disabled_by_default",
    source: "Not supported",
    permissionModel: "Blocked",
    readiness: "Disabled",
    reviewNote: "Private account access is outside the allowed product scope.",
  },
  {
    id: "feature-ad-library",
    feature: "Meta Ad Library intelligence",
    classification: "official_safe_limited",
    source: "Meta Ad Library API",
    permissionModel: "Official public ad archive terms",
    readiness: "Limited official API path",
    reviewNote: "Use official API data only with provenance and freshness metadata.",
  },
];

export const auditReadinessItems: AuditReadinessItem[] = [
  {
    id: "audit-policy-decisions",
    label: "Policy decisions",
    value: "742k",
    status: "Mock indexed",
    description: "Feature gate classifications, approvals, denials, and review outcomes.",
    tone: "success",
  },
  {
    id: "audit-provider-events",
    label: "Provider events",
    value: "284k",
    status: "Preview only",
    description: "Provider approval, freshness, confidence, provenance, and error mapping events.",
    tone: "warning",
  },
  {
    id: "audit-export-events",
    label: "Export events",
    value: "516k",
    status: "Audit-ready",
    description: "Governed report and export activity for enterprise review.",
    tone: "purple",
  },
  {
    id: "audit-retention-jobs",
    label: "Retention jobs",
    value: "19",
    status: "Future backend",
    description: "Retention, deletion, takedown, and suppression jobs are future backend workflows.",
    tone: "info",
  },
];

export const complianceTableRows: ComplianceTableRow[] = [
  {
    id: "row-connected-insights",
    control: "Connected account insights",
    domain: "Account analytics",
    classification: "official_safe",
    sourcePolicy: "Official Meta API only",
    permissionScope: "Connected professional account",
    auditStatus: "Ready",
    owner: "Compliance Admin",
    action: "Keep official adapter provenance",
  },
  {
    id: "row-business-discovery",
    control: "Business Discovery metrics",
    domain: "Public/professional intelligence",
    classification: "official_safe_limited",
    sourcePolicy: "Allowed fields and rate limits",
    permissionScope: "Meta API permissions",
    auditStatus: "Limited review",
    owner: "Data Governance",
    action: "Validate fields before release",
  },
  {
    id: "row-provider-recent-follows",
    control: "Recent follows/unfollows signals",
    domain: "Sensitive public intelligence",
    classification: "licensed_provider_only",
    sourcePolicy: "Licensed provider contract required",
    permissionScope: "Provider provenance and allowed use",
    auditStatus: "Needs review",
    owner: "Legal + Compliance",
    action: "Do not enable without provider approval",
  },
  {
    id: "row-like-history",
    control: "Arbitrary user like history",
    domain: "Identity-level behavior",
    classification: "restricted",
    sourcePolicy: "Not a default product source",
    permissionScope: "Explicit exception only",
    auditStatus: "Blocked by default",
    owner: "Compliance Admin",
    action: "Keep restricted",
  },
  {
    id: "row-private-account",
    control: "Private account data",
    domain: "Private data",
    classification: "disabled_by_default",
    sourcePolicy: "Not supported",
    permissionScope: "Blocked",
    auditStatus: "Disabled",
    owner: "Workspace Owner",
    action: "Reject requests",
  },
  {
    id: "row-anti-bot-bypass",
    control: "Anti-bot bypass or scraping evasion",
    domain: "Prohibited collection",
    classification: "disabled_by_default",
    sourcePolicy: "Not supported",
    permissionScope: "Blocked",
    auditStatus: "Disabled",
    owner: "Security + Compliance",
    action: "Reject implementation",
  },
];

export const complianceNotice: ComplianceNotice = {
  title: "Official-first compliance notice",
  body: "This private app compliance page uses static mock data to model policy gates, provider approval, audit readiness, retention placeholders, and data-governance review for an official-first Instagram intelligence SaaS.",
  bullets: [
    "Use official APIs and licensed compliant providers only; connected or owned account permissions are required where applicable.",
    "Public/professional intelligence must include provenance, confidence, freshness, rate-limit strategy, and policy classification metadata.",
    "No scraping, fake login automation, private account access, hidden surveillance, credential automation, or anti-bot bypass is supported.",
    "Arbitrary recent follows/unfollows and identity-level sensitive signals are licensed-provider-only, restricted, or disabled by default.",
  ],
};

export const complianceMockData = {
  headerBadges: complianceHeaderBadges,
  kpiCards: complianceKpiCards,
  policyGatePanels,
  governancePanels,
  featurePolicyCards,
  auditReadinessItems,
  tableRows: complianceTableRows,
  notice: complianceNotice,
};