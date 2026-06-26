export type SettingsSubpageTone = "success" | "warning" | "info" | "neutral" | "danger" | "purple" | "cyan";

export type SettingsSubpageBadge = {
  label: string;
  tone: SettingsSubpageTone;
};

export type SettingsHeaderBadge = {
  label: string;
  value: string;
  tone: SettingsSubpageTone;
};

export type SettingsSubpageKpi = {
  label: string;
  value: string;
  change: string;
  description: string;
  tone: SettingsSubpageTone;
};

export type SettingsSubpageField = {
  label: string;
  value: string;
};

export type SettingsSubpageCard = {
  eyebrow?: string;
  title: string;
  description: string;
  badges?: SettingsSubpageBadge[];
  fields?: SettingsSubpageField[];
  bullets?: string[];
  footer?: string;
};

export type SettingsTableCell = string | SettingsSubpageBadge;

export type SettingsSubpageData = {
  eyebrow: string;
  title: string;
  description: string;
  headerBadges: SettingsHeaderBadge[];
  heroNoteTitle: string;
  heroNote: string;
  kpiCards: SettingsSubpageKpi[];
  summary: SettingsSubpageCard;
  cardsTitle: string;
  cardsSubtitle: string;
  cards: SettingsSubpageCard[];
  tableTitle: string;
  tableSubtitle: string;
  tableColumns: string[];
  tableRows: SettingsTableCell[][];
  noticeTitle: string;
  noticeBody: string;
  noticeBullets: string[];
};

const commonNoticeBullets = [
  "Mock-only until backend/auth is connected; no settings are saved in Alpha and no live workspace, team, role, provider, permission, or audit changes are written.",
  "No live permission changes, no live provider changes, no credential automation, and no real authentication side effects.",
  "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is represented.",
  "Sensitive capabilities remain policy-gated for future batches and use official-safe, consented, or licensed-provider-only framing.",
];

function headerBadges(source: string): SettingsHeaderBadge[] {
  return [
    { label: "Source", value: source, tone: "info" },
    { label: "Confidence", value: "Demo-grade static", tone: "success" },
    { label: "Freshness", value: "Snapshot preview", tone: "neutral" },
    { label: "Integrations", value: "No live integrations", tone: "warning" },
  ];
}

export const settingsSubpagesMockData = {
  workspace: {
    eyebrow: "Settings / Workspace",
    title: "Workspace preview",
    description: "Review the static Alpha enterprise workspace profile, metadata placeholders, and official-first governance preview before any backend settings enforcement exists.",
    headerBadges: headerBadges("Mock workspace profile"),
    heroNoteTitle: "No settings are saved in Alpha",
    heroNote: "Workspace settings are display-only. Profile, metadata, provider, and governance preview controls do not write to a database or connect to production services.",
    kpiCards: [
      { label: "Workspace status", value: "Preview", change: "Mock profile", description: "Static workspace profile is staged for enterprise review only.", tone: "success" },
      { label: "Governance badges", value: "6", change: "Official-first", description: "Badges frame source, policy, freshness, and no-live integration posture.", tone: "info" },
      { label: "Metadata fields", value: "12", change: "Placeholders", description: "Region, timezone, data residency, owners, and review cadence are mocked.", tone: "neutral" },
      { label: "Backend writes", value: "0", change: "Disabled", description: "No live workspace, provider, or policy changes are performed.", tone: "warning" },
    ],
    summary: {
      eyebrow: "Workspace profile summary",
      title: "Acme Social Intelligence",
      description: "Enterprise mock workspace for official-first Instagram intelligence, connected professional account analytics, governed exports, and policy-reviewed provider activation.",
      badges: [
        { label: "Enterprise demo", tone: "purple" },
        { label: "official_safe", tone: "success" },
        { label: "No live backend", tone: "warning" },
      ],
      fields: [
        { label: "Workspace slug", value: "acme-social-intel" },
        { label: "Primary region", value: "Middle East / Europe" },
        { label: "Timezone", value: "Asia/Dubai" },
        { label: "Data residency", value: "EU-managed canonical storage" },
        { label: "Billing owner", value: "Finance Operations" },
        { label: "Compliance owner", value: "Governance Office" },
      ],
    },
    cardsTitle: "Workspace metadata and governance badges",
    cardsSubtitle: "Structured placeholders for profile readiness, source posture, residency, ownership, and review cadence.",
    cards: [
      { eyebrow: "Profile", title: "Company identity", description: "Workspace name, slug, legal entity, and default reporting currency are prepared as static preview values.", badges: [{ label: "Preview only", tone: "success" }], fields: [{ label: "Currency", value: "USD" }, { label: "Legal entity", value: "Acme Holdings FZ-LLC" }] },
      { eyebrow: "Governance", title: "Official-first defaults", description: "Default data-source stance prefers official Meta APIs, connected professional accounts, and manual consented imports.", badges: [{ label: "official_safe", tone: "success" }, { label: "Provider review", tone: "warning" }] },
      { eyebrow: "Operations", title: "Review cadence", description: "Workspace metadata is marked for quarterly compliance and security review in the future settings backend.", badges: [{ label: "Quarterly", tone: "info" }], fields: [{ label: "Last mock review", value: "2026-06-18" }, { label: "Next review", value: "2026-09-18" }] },
      { eyebrow: "Controls", title: "Integration lock", description: "Live providers, permission writes, and source activation remain blocked from this static settings subpage.", badges: [{ label: "No live integrations", tone: "warning" }, { label: "No provider changes", tone: "neutral" }] },
    ],
    tableTitle: "Workspace metadata table",
    tableSubtitle: "Enterprise-style inventory of static workspace settings, owners, status, and compliance policy posture.",
    tableColumns: ["Setting", "Placeholder value", "Owner", "Status", "Policy"],
    tableRows: [
      ["Workspace profile", "Acme Social Intelligence", "Workspace Owner", { label: "Preview only", tone: "success" }, { label: "official_safe", tone: "success" }],
      ["Data residency", "EU-managed canonical storage", "Data Operations", { label: "Placeholder", tone: "neutral" }, { label: "official_safe_limited", tone: "info" }],
      ["Provider activation", "Disabled until review", "Compliance Admin", { label: "Locked", tone: "warning" }, { label: "licensed_provider_only", tone: "warning" }],
      ["Backend writes", "Not connected", "Engineering", { label: "Disabled", tone: "neutral" }, { label: "No-live-backend", tone: "danger" }],
    ],
    noticeTitle: "Workspace compliance notice",
    noticeBody: "This workspace settings page is a static admin preview. It does not update workspace records, source preferences, provider approvals, permissions, billing, or policy gates.",
    noticeBullets: commonNoticeBullets,
  },
  team: {
    eyebrow: "Settings / Team",
    title: "Team preview",
    description: "Review mock team membership, invite placeholders, role badges, account status, and access scope without connecting live authentication or sending invitations.",
    headerBadges: headerBadges("Mock team directory"),
    heroNoteTitle: "No invitations are sent in Alpha",
    heroNote: "Team membership, invites, sessions, and user statuses are static UI only. No identity provider, email delivery, or account backend is connected.",
    kpiCards: [
      { label: "Mock team members", value: "8", change: "4 role previews", description: "Mock members show role preview, status, and access scope badges.", tone: "info" },
      { label: "Pending invites", value: "2", change: "Placeholder", description: "Invite controls are non-functional and do not send email.", tone: "warning" },
      { label: "Admin seats", value: "3", change: "Approval-gated", description: "Owner and compliance admin access is shown as governed.", tone: "success" },
      { label: "Live auth writes", value: "0", change: "Disabled", description: "No users, sessions, invites, or passwords are changed.", tone: "neutral" },
    ],
    summary: {
      eyebrow: "Invite placeholder",
      title: "Invitation preview — no emails sent",
      description: "A premium invite preview for enterprise buyers: domain restrictions, role defaults, and approval routing are visible but inactive.",
      badges: [
        { label: "No live auth", tone: "warning" },
        { label: "Email disabled", tone: "neutral" },
        { label: "Approval preview", tone: "info" },
      ],
      fields: [
        { label: "Allowed domain", value: "@acme.example" },
        { label: "Default role", value: "Analyst" },
        { label: "Invite owner", value: "Workspace Owner" },
        { label: "Identity mode", value: "Mock SSO/OIDC placeholder" },
      ],
      footer: "Invite buttons are placeholders and do not create users, send emails, or touch an auth provider.",
    },
    cardsTitle: "Team member cards",
    cardsSubtitle: "Mock team roster with role, status, access scope, and governance badges.",
    cards: [
      { eyebrow: "Owner", title: "Maya Rahman", description: "Mock Workspace Owner responsible for billing, source approvals, and enterprise settings review.", badges: [{ label: "Mock active", tone: "success" }, { label: "Role preview", tone: "purple" }], fields: [{ label: "Access scope", value: "All workspace settings" }, { label: "Mock last seen", value: "Static sample" }] },
      { eyebrow: "Compliance", title: "Omar Haddad", description: "Mock Compliance Admin reviewing provider posture, audit exports, and policy-gated capabilities.", badges: [{ label: "Mock active", tone: "success" }, { label: "Approval preview", tone: "warning" }], fields: [{ label: "Access scope", value: "Policy and audit metadata" }, { label: "Mock last seen", value: "Static sample" }] },
      { eyebrow: "Analytics", title: "Nora Jensen", description: "Mock Analyst focused on connected account analytics, reports, alerts, and export review.", badges: [{ label: "Mock active", tone: "success" }, { label: "Preview permission", tone: "info" }], fields: [{ label: "Access scope", value: "Approved analytics datasets" }, { label: "Mock last seen", value: "Static sample" }] },
      { eyebrow: "Executive", title: "Daniel Cho", description: "Mock read-only Executive seat for KPI dashboards and scheduled report visibility.", badges: [{ label: "Read-only preview", tone: "neutral" }, { label: "Mock active", tone: "success" }], fields: [{ label: "Access scope", value: "Aggregated reporting" }, { label: "Mock last seen", value: "Static sample" }] },
    ],
    tableTitle: "Team access table",
    tableSubtitle: "Enterprise roster table showing actor, role, status, access scope, and authentication posture.",
    tableColumns: ["Member", "Role", "Status", "Access scope", "Auth posture"],
    tableRows: [
      ["Mock team member — Maya Rahman", { label: "Workspace Owner", tone: "purple" }, { label: "Mock active", tone: "success" }, "All workspace settings", { label: "Mock SSO", tone: "info" }],
      ["Mock team member — Omar Haddad", { label: "Compliance Admin", tone: "warning" }, { label: "Mock active", tone: "success" }, "Policy and audit metadata", { label: "No live auth", tone: "neutral" }],
      ["Mock team member — Nora Jensen", { label: "Analyst", tone: "info" }, { label: "Mock active", tone: "success" }, "Approved analytics datasets", { label: "Mock session", tone: "cyan" }],
      ["Mock pending invite", { label: "Campaign Manager", tone: "info" }, { label: "Invite disabled", tone: "warning" }, "Connected account reporting", { label: "Email disabled", tone: "neutral" }],
    ],
    noticeTitle: "Team compliance notice",
    noticeBody: "This team page does not connect to live authentication, create accounts, modify roles, send invites, revoke sessions, or update identity provider configuration.",
    noticeBullets: commonNoticeBullets,
  },
  roles: {
    eyebrow: "Settings / Roles",
    title: "Role preview",
    description: "Review mock role presets, preview permission scopes, governance policy badges, and no-live-permission-write boundaries for future enterprise access control.",
    headerBadges: headerBadges("Mock RBAC matrix"),
    heroNoteTitle: "Requires backend enforcement",
    heroNote: "Role cards and permission matrices are static. No live users, groups, policies, providers, or backend authorization records are changed.",
    kpiCards: [
      { label: "Role presets", value: "5", change: "Least privilege", description: "Mock roles separate owners, compliance, analysts, managers, and executives.", tone: "success" },
      { label: "Permission groups", value: "7", change: "Policy mapped", description: "Scopes cover settings, analytics, exports, providers, alerts, and audits.", tone: "info" },
      { label: "Approval-gated", value: "2", change: "Admin roles", description: "Owner and compliance admin roles require governance review.", tone: "warning" },
      { label: "Permission writes", value: "0", change: "Disabled", description: "No live authorization backend or policy store is connected.", tone: "neutral" },
    ],
    summary: {
      eyebrow: "RBAC governance summary",
      title: "Least-privilege access model preview",
      description: "Role and permission controls are framed around official-safe Instagram intelligence workflows with separation between administration, compliance, analytics, campaigns, and executive read-only views.",
      badges: [
        { label: "No permission writes", tone: "warning" },
        { label: "Governance reviewed", tone: "success" },
        { label: "official_safe", tone: "success" },
      ],
      fields: [
        { label: "Policy owner", value: "Compliance Admin" },
        { label: "Default role", value: "Analyst" },
        { label: "Admin elevation", value: "Approval required" },
        { label: "Sensitive actions", value: "Disabled by default" },
      ],
    },
    cardsTitle: "Role and permission cards",
    cardsSubtitle: "Access scope placeholders with governance policy badges and static permission summaries.",
    cards: [
      { eyebrow: "Admin", title: "Workspace Owner", description: "Preview permission set for workspace administration, billing visibility, source approvals, and settings review.", badges: [{ label: "Approval-gated", tone: "warning" }, { label: "Preview permission", tone: "purple" }], bullets: ["Preview workspace metadata access", "Review source preference placeholders", "View mock billing and exports"] },
      { eyebrow: "Governance", title: "Compliance Admin", description: "Policy gates, provider approval review, audit export placeholders, and retention settings oversight.", badges: [{ label: "Policy owner", tone: "success" }, { label: "Provider review", tone: "warning" }], bullets: ["Review feature classifications", "Review licensed-provider readiness", "Preview audit evidence export"] },
      { eyebrow: "Analytics", title: "Analyst", description: "Connected account dashboards, reports, alerts, comments, ads, and governed exports.", badges: [{ label: "Analytics scope", tone: "info" }, { label: "No settings admin", tone: "neutral" }], bullets: ["View approved datasets", "Create mock reports", "Review alerts"] },
      { eyebrow: "Campaign", title: "Campaign Manager", description: "Campaign reporting, ad intelligence, engagement trends, and owned media review.", badges: [{ label: "Connected accounts", tone: "cyan" }, { label: "Official APIs", tone: "success" }], bullets: ["View ad reporting", "Review mock campaign alerts", "Read export summaries"] },
      { eyebrow: "Executive", title: "Read-only Executive", description: "Executive dashboards, KPI snapshots, and scheduled reporting with no write access.", badges: [{ label: "Read-only", tone: "neutral" }, { label: "Aggregated data", tone: "info" }], bullets: ["View KPI cards", "Preview scheduled reports", "No user or provider writes"] },
    ],
    tableTitle: "Permission matrix table",
    tableSubtitle: "Mock permission inventory for role, access scope, policy posture, and write status.",
    tableColumns: ["Permission group", "Owner role", "Access scope", "Policy", "Write status"],
    tableRows: [
      ["Workspace settings", { label: "Workspace Owner", tone: "purple" }, "Profile, billing owner, source preference previews", { label: "official_safe", tone: "success" }, { label: "No live writes", tone: "warning" }],
      ["Policy gates", { label: "Compliance Admin", tone: "warning" }, "Feature classifications and provider readiness", { label: "restricted review", tone: "danger" }, { label: "Disabled", tone: "neutral" }],
      ["Analytics views", { label: "Analyst", tone: "info" }, "Approved account intelligence datasets", { label: "official_safe", tone: "success" }, { label: "Read-only mock", tone: "neutral" }],
      ["Audit exports", { label: "Compliance Admin", tone: "warning" }, "Audit evidence placeholder and report history preview", { label: "official_safe_limited", tone: "info" }, { label: "No export backend", tone: "warning" }],
    ],
    noticeTitle: "Roles compliance notice",
    noticeBody: "This roles page is a static RBAC preview. It does not update permissions, policies, users, groups, providers, feature gates, or authorization records.",
    noticeBullets: commonNoticeBullets,
  },
  auditLogs: {
    eyebrow: "Settings / Audit logs",
    title: "Audit log preview",
    description: "Review a static mock audit timeline and enterprise table with actor, action, source, status, confidence, freshness, and policy badges.",
    headerBadges: headerBadges("Mock audit stream"),
    heroNoteTitle: "Audit records are mock-only",
    heroNote: "Audit events are static examples. No audit ingestion, object storage, event bus, auth service, or compliance backend is queried or mutated.",
    kpiCards: [
      { label: "Audit events", value: "24", change: "Static sample", description: "Mock timeline records settings, role, export, and source review actions.", tone: "info" },
      { label: "High confidence", value: "91%", change: "Demo score", description: "Confidence badges show intended provenance metadata patterns.", tone: "success" },
      { label: "Freshness window", value: "Static", change: "No ingestion", description: "Freshness labels are placeholders until an audit backend exists.", tone: "neutral" },
      { label: "Live writes", value: "0", change: "Read-only", description: "No live audit records, exports, or retention jobs are created.", tone: "warning" },
    ],
    summary: {
      eyebrow: "Audit stream summary",
      title: "Mock audit trail preview",
      description: "A governance-first audit surface showing how future settings events can communicate actor, action, source, policy classification, confidence, freshness, and result status.",
      badges: [
        { label: "No live audit backend", tone: "warning" },
        { label: "Provenance ready", tone: "success" },
        { label: "Read-only", tone: "neutral" },
      ],
      fields: [
        { label: "Retention placeholder", value: "13 months" },
        { label: "Source mode", value: "Mock event stream" },
        { label: "Object storage", value: "Not connected" },
        { label: "Export evidence", value: "Disabled" },
      ],
    },
    cardsTitle: "Audit event timeline",
    cardsSubtitle: "Timeline-style static events with actor, action, source, status, confidence, freshness, and policy metadata.",
    cards: [
      { eyebrow: "09:42 UTC", title: "Workspace profile reviewed", description: "Maya Rahman reviewed region, timezone, and owner metadata for quarterly governance readiness.", badges: [{ label: "Mock completed", tone: "success" }, { label: "Mock settings", tone: "info" }, { label: "official_safe", tone: "success" }], fields: [{ label: "Actor", value: "Maya Rahman" }, { label: "Confidence", value: "0.96" }, { label: "Freshness", value: "Static preview" }] },
      { eyebrow: "10:15 UTC", title: "Provider activation blocked", description: "Omar Haddad kept licensed-provider activation disabled pending legal and provenance review.", badges: [{ label: "Mock blocked", tone: "warning" }, { label: "Licensed provider", tone: "warning" }, { label: "Policy-gated", tone: "danger" }], fields: [{ label: "Actor", value: "Omar Haddad" }, { label: "Confidence", value: "0.94" }, { label: "Freshness", value: "Static preview" }] },
      { eyebrow: "11:03 UTC", title: "Role matrix opened", description: "Nora Jensen viewed analyst and campaign manager scopes without modifying permissions.", badges: [{ label: "Mock viewed", tone: "neutral" }, { label: "No write", tone: "warning" }, { label: "official_safe", tone: "success" }], fields: [{ label: "Actor", value: "Nora Jensen" }, { label: "Confidence", value: "0.89" }, { label: "Freshness", value: "Static preview" }] },
      { eyebrow: "12:28 UTC", title: "Audit export placeholder requested", description: "Compliance Admin previewed the export action, but no file or backend audit evidence was generated.", badges: [{ label: "Preview only", tone: "neutral" }, { label: "No export backend", tone: "warning" }, { label: "official_safe_limited", tone: "info" }], fields: [{ label: "Actor", value: "Compliance Admin" }, { label: "Confidence", value: "0.91" }, { label: "Freshness", value: "Static preview" }] },
    ],
    tableTitle: "Enterprise audit event table",
    tableSubtitle: "Mock audit records with actor, action, source, status, confidence, freshness, and policy badges.",
    tableColumns: ["Time", "Actor", "Action", "Source", "Status", "Confidence", "Freshness", "Policy"],
    tableRows: [
      ["09:42 UTC", "Maya Rahman", "Workspace profile reviewed", { label: "Mock settings", tone: "info" }, { label: "Mock completed", tone: "success" }, { label: "0.96", tone: "success" }, { label: "Static", tone: "neutral" }, { label: "official_safe", tone: "success" }],
      ["10:15 UTC", "Omar Haddad", "Provider activation blocked", { label: "Licensed provider", tone: "warning" }, { label: "Mock blocked", tone: "warning" }, { label: "0.94", tone: "success" }, { label: "Static", tone: "neutral" }, { label: "licensed_provider_only", tone: "warning" }],
      ["11:03 UTC", "Nora Jensen", "Role matrix opened", { label: "Mock RBAC", tone: "purple" }, { label: "Mock viewed", tone: "neutral" }, { label: "0.89", tone: "info" }, { label: "Static", tone: "neutral" }, { label: "official_safe", tone: "success" }],
      ["12:28 UTC", "Compliance Admin", "Audit export placeholder requested", { label: "Mock audit", tone: "cyan" }, { label: "Preview only", tone: "neutral" }, { label: "0.91", tone: "success" }, { label: "Static", tone: "neutral" }, { label: "official_safe_limited", tone: "info" }],
    ],
    noticeTitle: "Audit logs compliance notice",
    noticeBody: "This audit logs page is static and audit records are mock-only. It does not read or write live audit records, generate immutable evidence, trigger export jobs, or connect to an audit backend.",
    noticeBullets: commonNoticeBullets,
  },
} satisfies Record<"workspace" | "team" | "roles" | "auditLogs", SettingsSubpageData>;