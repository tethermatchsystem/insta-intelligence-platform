export type SettingsBadgeTone = "success" | "warning" | "info" | "neutral";

export type SettingsStatus = "enabled" | "configured" | "pending" | "disabled";

export type SettingsSensitivity =
  | "official_safe"
  | "official_safe_limited"
  | "consented_only"
  | "licensed_provider_only"
  | "restricted"
  | "disabled_by_default";

export type SettingsHeaderBadge = {
  label: string;
  value: string;
  tone: SettingsBadgeTone;
};

export type SettingsKpiCard = {
  label: string;
  value: string;
  change: string;
  description: string;
  tone: SettingsBadgeTone;
};

export type WorkspaceProfileSettings = {
  workspaceName: string;
  workspaceSlug: string;
  plan: string;
  region: string;
  timezone: string;
  billingOwner: string;
  defaultCurrency: string;
  dataResidency: string;
};

export type RolePermission = {
  role: string;
  seats: number;
  permissionSummary: string;
  dataScope: string;
  approvalRequired: boolean;
};

export type NotificationRule = {
  id: string;
  name: string;
  channel: "email" | "slack" | "webhook" | "in_app";
  trigger: string;
  audience: string;
  status: SettingsStatus;
};

export type IntegrationPreference = {
  id: string;
  source: string;
  providerType: "official_meta_api" | "manual_csv" | "licensed_provider" | "mock_provider";
  freshness: string;
  defaultEnabled: boolean;
  sensitivity: SettingsSensitivity;
  notes: string;
};

export type SecuritySessionPlaceholder = {
  id: string;
  label: string;
  value: string;
  status: SettingsStatus;
  description: string;
};

export type GovernanceComplianceDefault = {
  id: string;
  policy: string;
  defaultValue: string;
  classification: SettingsSensitivity;
  owner: string;
  rationale: string;
};

export type EnterpriseSettingsTableRow = {
  id: string;
  category: string;
  setting: string;
  owner: string;
  status: SettingsStatus;
  classification: SettingsSensitivity;
  retention: string;
  lastReviewed: string;
};

export type ComplianceNoticeCopy = {
  title: string;
  body: string;
  bullets: string[];
  footer: string;
};

export const settingsHeaderBadges: SettingsHeaderBadge[] = [
  {
    label: "Workspace",
    value: "Enterprise demo",
    tone: "info",
  },
  {
    label: "Policy posture",
    value: "Official-first",
    tone: "success",
  },
  {
    label: "Data mode",
    value: "Mock data only",
    tone: "neutral",
  },
];

export const settingsKpiCards: SettingsKpiCard[] = [
  {
    label: "Connected sources",
    value: "4",
    change: "+1 ready for review",
    description: "Official, manual, licensed, and mock source preferences staged for the Settings page.",
    tone: "success",
  },
  {
    label: "Active roles",
    value: "5",
    change: "2 approval-gated",
    description: "Role presets use least-privilege access for account, reporting, and governance workflows.",
    tone: "info",
  },
  {
    label: "Notification rules",
    value: "6",
    change: "4 enabled",
    description: "Operational alerts are grouped by delivery channel and workspace audience.",
    tone: "warning",
  },
  {
    label: "Compliance defaults",
    value: "7",
    change: "0 restricted defaults",
    description: "Default settings avoid scraping, private account access, and credential automation.",
    tone: "success",
  },
];

export const workspaceProfileSettings: WorkspaceProfileSettings = {
  workspaceName: "Acme Social Intelligence",
  workspaceSlug: "acme-social-intel",
  plan: "Enterprise Intelligence",
  region: "Middle East / Europe",
  timezone: "Asia/Dubai",
  billingOwner: "Finance Operations",
  defaultCurrency: "USD",
  dataResidency: "EU-managed canonical storage",
};

export const rolePermissions: RolePermission[] = [
  {
    role: "Workspace Owner",
    seats: 2,
    permissionSummary: "Full workspace administration, billing, integrations, and governance review.",
    dataScope: "All connected professional accounts and workspace settings",
    approvalRequired: true,
  },
  {
    role: "Compliance Admin",
    seats: 3,
    permissionSummary: "Manages feature policies, audit exports, retention defaults, and source approvals.",
    dataScope: "Policy, audit, and provider configuration metadata",
    approvalRequired: true,
  },
  {
    role: "Analyst",
    seats: 12,
    permissionSummary: "Reviews dashboards, account analytics, comments, ads, reports, and exports.",
    dataScope: "Approved analytics and owned/connected account datasets",
    approvalRequired: false,
  },
  {
    role: "Campaign Manager",
    seats: 7,
    permissionSummary: "Accesses content, engagement, ad intelligence, alerts, and campaign reports.",
    dataScope: "Connected account and Meta Marketing API reporting data",
    approvalRequired: false,
  },
  {
    role: "Read-only Executive",
    seats: 5,
    permissionSummary: "Views executive dashboards, KPI summaries, and scheduled reports only.",
    dataScope: "Aggregated workspace reporting views",
    approvalRequired: false,
  },
];

export const notificationRules: NotificationRule[] = [
  {
    id: "rule-policy-review",
    name: "Compliance policy review required",
    channel: "email",
    trigger: "Sensitive source preference changes classification or approval state.",
    audience: "Compliance Admins",
    status: "enabled",
  },
  {
    id: "rule-source-freshness",
    name: "Source freshness degraded",
    channel: "slack",
    trigger: "Official API freshness falls outside the configured freshness window.",
    audience: "Workspace Owners and Analysts",
    status: "enabled",
  },
  {
    id: "rule-export-ready",
    name: "Scheduled export ready",
    channel: "email",
    trigger: "A governed report or CSV export is generated successfully.",
    audience: "Requesting user",
    status: "enabled",
  },
  {
    id: "rule-session-risk",
    name: "Session review placeholder",
    channel: "in_app",
    trigger: "A future session policy flags stale device or access metadata.",
    audience: "Workspace Owners",
    status: "pending",
  },
  {
    id: "rule-webhook-sync",
    name: "Integration webhook delivery",
    channel: "webhook",
    trigger: "Source readiness or provider approval state changes.",
    audience: "Data platform endpoint",
    status: "configured",
  },
  {
    id: "rule-weekly-digest",
    name: "Weekly intelligence digest",
    channel: "email",
    trigger: "Workspace weekly reporting cycle closes.",
    audience: "Read-only Executives",
    status: "enabled",
  },
];

export const integrationPreferences: IntegrationPreference[] = [
  {
    id: "source-meta-graph",
    source: "Meta Graph API",
    providerType: "official_meta_api",
    freshness: "Every 6 hours",
    defaultEnabled: true,
    sensitivity: "official_safe",
    notes: "Used for connected professional account insights and owned media metadata.",
  },
  {
    id: "source-meta-marketing",
    source: "Meta Marketing API",
    providerType: "official_meta_api",
    freshness: "Daily",
    defaultEnabled: true,
    sensitivity: "official_safe",
    notes: "Used for ad account reporting where the workspace has authorized access.",
  },
  {
    id: "source-business-discovery",
    source: "Business Discovery",
    providerType: "official_meta_api",
    freshness: "Daily with rate-limit guardrails",
    defaultEnabled: true,
    sensitivity: "official_safe_limited",
    notes: "Limited to fields allowed by Meta APIs and applicable account permissions.",
  },
  {
    id: "source-manual-csv",
    source: "Manual CSV import",
    providerType: "manual_csv",
    freshness: "On upload",
    defaultEnabled: true,
    sensitivity: "consented_only",
    notes: "Requires workspace attestation that uploaded data was collected lawfully.",
  },
  {
    id: "source-licensed-provider",
    source: "Licensed compliant provider",
    providerType: "licensed_provider",
    freshness: "Provider SLA",
    defaultEnabled: false,
    sensitivity: "licensed_provider_only",
    notes: "Disabled until legal, procurement, and policy checks approve the provider.",
  },
  {
    id: "source-demo-mock",
    source: "Demo mock provider",
    providerType: "mock_provider",
    freshness: "Static demo data",
    defaultEnabled: true,
    sensitivity: "official_safe",
    notes: "Used for product demos without live backend or third-party connections.",
  },
];

export const securitySessionPlaceholders: SecuritySessionPlaceholder[] = [
  {
    id: "security-sso",
    label: "Single sign-on",
    value: "SAML/OIDC placeholder",
    status: "pending",
    description: "Prepared for enterprise identity provider configuration in a future backend batch.",
  },
  {
    id: "security-mfa",
    label: "Multi-factor authentication",
    value: "Required for admins",
    status: "configured",
    description: "Mock policy showing stronger controls for owner and compliance roles.",
  },
  {
    id: "security-session-ttl",
    label: "Session duration",
    value: "12 hours",
    status: "configured",
    description: "Default placeholder for web session lifetime and inactivity review.",
  },
  {
    id: "security-device-review",
    label: "Device inventory",
    value: "Coming soon",
    status: "pending",
    description: "Reserved for future session, device, and access audit views.",
  },
];

export const governanceComplianceDefaults: GovernanceComplianceDefault[] = [
  {
    id: "gov-official-first",
    policy: "Official-first data sourcing",
    defaultValue: "Enabled",
    classification: "official_safe",
    owner: "Compliance Admin",
    rationale: "Prefer official Meta APIs, connected account analytics, and approved source contracts.",
  },
  {
    id: "gov-no-scraping",
    policy: "Scraping and evasion controls",
    defaultValue: "Disabled",
    classification: "disabled_by_default",
    owner: "Workspace Owner",
    rationale: "The product must not implement scraping, anti-bot bypass, fake login, or credential automation.",
  },
  {
    id: "gov-private-data",
    policy: "Private account access",
    defaultValue: "Blocked",
    classification: "disabled_by_default",
    owner: "Compliance Admin",
    rationale: "Private or non-consented account data is outside the allowed product scope.",
  },
  {
    id: "gov-sensitive-feature-gates",
    policy: "Sensitive feature gates",
    defaultValue: "Policy review required",
    classification: "restricted",
    owner: "Compliance Admin",
    rationale: "Any sensitive capability must be evaluated through the feature policy layer before release.",
  },
  {
    id: "gov-export-audit",
    policy: "Export audit trail",
    defaultValue: "Enabled",
    classification: "official_safe",
    owner: "Data Operations",
    rationale: "Track governed report and export activity for enterprise audit readiness.",
  },
  {
    id: "gov-retention-default",
    policy: "Default analytics retention",
    defaultValue: "13 months",
    classification: "official_safe_limited",
    owner: "Data Operations",
    rationale: "Keeps analytics useful while limiting unnecessary long-term data retention.",
  },
  {
    id: "gov-provider-review",
    policy: "Licensed provider onboarding",
    defaultValue: "Legal and policy approval required",
    classification: "licensed_provider_only",
    owner: "Compliance Admin",
    rationale: "Third-party data providers must prove lawful collection, provenance, and permitted use.",
  },
];

export const enterpriseSettingsTableRows: EnterpriseSettingsTableRow[] = [
  {
    id: "setting-workspace-profile",
    category: "Workspace",
    setting: "Profile, region, timezone, and currency defaults",
    owner: "Workspace Owner",
    status: "configured",
    classification: "official_safe",
    retention: "Workspace lifetime",
    lastReviewed: "2026-06-18",
  },
  {
    id: "setting-roles-permissions",
    category: "Access control",
    setting: "Role presets and approval-gated admin permissions",
    owner: "Compliance Admin",
    status: "configured",
    classification: "official_safe",
    retention: "Workspace lifetime plus audit period",
    lastReviewed: "2026-06-17",
  },
  {
    id: "setting-notifications",
    category: "Notifications",
    setting: "Email, Slack, webhook, and in-app alert routing",
    owner: "Data Operations",
    status: "enabled",
    classification: "official_safe",
    retention: "13 months",
    lastReviewed: "2026-06-16",
  },
  {
    id: "setting-source-preferences",
    category: "Integrations",
    setting: "Official API, manual CSV, licensed provider, and mock source preferences",
    owner: "Compliance Admin",
    status: "configured",
    classification: "official_safe_limited",
    retention: "Provider contract period",
    lastReviewed: "2026-06-15",
  },
  {
    id: "setting-security-sessions",
    category: "Security",
    setting: "SSO, MFA, session TTL, and device review placeholders",
    owner: "Workspace Owner",
    status: "pending",
    classification: "consented_only",
    retention: "Security audit period",
    lastReviewed: "2026-06-14",
  },
  {
    id: "setting-governance-defaults",
    category: "Governance",
    setting: "Feature classifications, retention defaults, and source compliance guardrails",
    owner: "Compliance Admin",
    status: "enabled",
    classification: "official_safe_limited",
    retention: "Policy lifetime",
    lastReviewed: "2026-06-13",
  },
];

export const complianceNoticeCopy: ComplianceNoticeCopy = {
  title: "Official-first compliance notice",
  body: "Settings mock data is designed for an Instagram intelligence SaaS that uses official Meta APIs, connected professional account analytics, approved manual imports, and licensed compliant providers only.",
  bullets: [
    "No scraping, anti-bot bypass, fake login automation, credential automation, or private account access is represented.",
    "Sensitive capabilities remain policy-gated and disabled unless they meet the required compliance classification.",
    "Licensed provider preferences are disabled by default until legal, provenance, and rate-limit reviews are complete.",
    "This file contains static frontend mock data only and does not create a backend connection.",
  ],
  footer: "Review packages/policy/src/feature_policy.ts before enabling any sensitive settings in a future implementation batch.",
};

export const settingsMockData = {
  headerBadges: settingsHeaderBadges,
  kpiCards: settingsKpiCards,
  workspaceProfile: workspaceProfileSettings,
  rolePermissions,
  notificationRules,
  integrationPreferences,
  securitySessionPlaceholders,
  governanceComplianceDefaults,
  enterpriseSettingsTableRows,
  complianceNotice: complianceNoticeCopy,
};