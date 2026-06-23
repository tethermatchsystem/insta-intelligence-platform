import {
  settingsMockData,
  type IntegrationPreference,
  type NotificationRule,
  type RolePermission,
  type SettingsBadgeTone,
  type SettingsSensitivity,
  type SettingsStatus,
} from "@/lib/mock-data/settings";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: SettingsBadgeTone) {
  const tones: Record<SettingsBadgeTone, string> = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warning: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return tones[tone];
}

function statusClasses(status: SettingsStatus) {
  if (["enabled", "configured"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "pending") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function classificationClasses(classification: SettingsSensitivity) {
  if (classification === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (classification === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (classification === "consented_only") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (classification === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (classification === "restricted") return "bg-rose-50 text-rose-700 ring-rose-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function providerClasses(providerType: IntegrationPreference["providerType"]) {
  if (providerType === "official_meta_api") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (providerType === "manual_csv") return "bg-slate-100 text-slate-700 ring-slate-200";
  if (providerType === "licensed_provider") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-violet-50 text-violet-700 ring-violet-100";
}

function channelClasses(channel: NotificationRule["channel"]) {
  if (channel === "email") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (channel === "slack") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (channel === "webhook") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function SettingsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function SettingsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {settingsMockData.headerBadges.map((badge) => (
              <Badge key={`${badge.label}-${badge.value}`} className={toneClasses(badge.tone)}>
                {badge.label}: {badge.value}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Workspace settings</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">Enterprise Settings</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
            Configure workspace profile, access controls, notifications, integrations, security placeholders, and governance defaults for a premium official-first Instagram intelligence workspace.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only settings surface</p>
          <p className="mt-1">
            This page uses static frontend data only. There are no live backend writes, no live integrations, no scraping, no private account access, no hidden surveillance, and no anti-bot bypass workflows.
          </p>
        </div>
      </div>
    </header>
  );
}

function KpiCard({ label, value, change, description, tone }: (typeof settingsMockData.kpiCards)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{change}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function SettingsOverviewStrip() {
  const overviewItems = [
    {
      label: "Workspace controls",
      value: settingsMockData.workspaceProfile.plan,
      detail: "Profile, billing owner, currency, region, timezone, and data residency are displayed as static settings.",
      tone: "info" as const,
    },
    {
      label: "Access governance",
      value: `${settingsMockData.rolePermissions.length} role presets`,
      detail: "Role cards emphasize least-privilege access and approval-gated administration without live user updates.",
      tone: "success" as const,
    },
    {
      label: "Source posture",
      value: `${settingsMockData.integrationPreferences.length} source preferences`,
      detail: "Official APIs, manual imports, licensed providers, and mock sources are framed as no-live-integration preferences.",
      tone: "warning" as const,
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Premium settings overview</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight">Mock-only enterprise control plane</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            A static settings experience for reviewing workspace configuration, role governance, source preferences, sessions, and compliance defaults before any future backend implementation.
          </p>
        </div>
        <Badge className="bg-white/10 text-white ring-white/20">No live backend actions</Badge>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {overviewItems.map((item) => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold">{item.label}</p>
              <Badge className={toneClasses(item.tone)}>{item.value}</Badge>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-300">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WorkspaceProfilePanel() {
  const profile = settingsMockData.workspaceProfile;
  const profileRows = [
    ["Workspace", profile.workspaceName],
    ["Slug", profile.workspaceSlug],
    ["Plan", profile.plan],
    ["Region", profile.region],
    ["Timezone", profile.timezone],
    ["Billing owner", profile.billingOwner],
    ["Currency", profile.defaultCurrency],
    ["Data residency", profile.dataResidency],
  ];

  return (
    <SettingsPanel title="Workspace profile placeholder" subtitle="Static enterprise profile settings for the Settings page shell.">
      <div className="grid gap-3 sm:grid-cols-2">
        {profileRows.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-2 text-sm font-semibold text-slate-950">{value}</p>
          </div>
        ))}
      </div>
    </SettingsPanel>
  );
}

function PlaceholderChecklist() {
  const placeholders = [
    {
      title: "User roles and permissions",
      body: "Least-privilege role presets, admin approval checks, and read-only executive views are represented as mock data only.",
      badge: "Access controls",
      tone: "info" as const,
    },
    {
      title: "Notification preferences",
      body: "Email, Slack, webhook, and in-app routing placeholders show intended alert governance without sending messages.",
      badge: "No live sends",
      tone: "warning" as const,
    },
    {
      title: "Integrations and source preferences",
      body: "Official Meta APIs, manual imports, licensed providers, and mock provider preferences are displayed without connecting live systems.",
      badge: "No live integrations",
      tone: "success" as const,
    },
    {
      title: "Security and sessions",
      body: "SSO, MFA, session lifetime, and device inventory are placeholder controls for a future backend batch.",
      badge: "Placeholder",
      tone: "neutral" as const,
    },
    {
      title: "Governance and compliance defaults",
      body: "Official-first defaults explicitly avoid scraping, private account access, hidden surveillance, and anti-bot bypass.",
      badge: "Policy safe",
      tone: "success" as const,
    },
  ];

  return (
    <section className="grid gap-4 xl:grid-cols-5">
      {placeholders.map((item) => (
        <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <Badge className={toneClasses(item.tone)}>{item.badge}</Badge>
          <h2 className="mt-4 text-base font-semibold text-slate-950">{item.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
        </article>
      ))}
    </section>
  );
}

function RoleCard({ role }: { role: RolePermission }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{role.role}</h3>
          <p className="mt-1 text-sm text-slate-500">{role.seats} seats assigned</p>
        </div>
        <Badge className={role.approvalRequired ? "bg-amber-50 text-amber-700 ring-amber-100" : "bg-emerald-50 text-emerald-700 ring-emerald-100"}>
          {role.approvalRequired ? "Approval gated" : "Standard access"}
        </Badge>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{role.permissionSummary}</p>
      <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Data scope</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{role.dataScope}</p>
      </div>
    </article>
  );
}

function RolesSection() {
  return (
    <SettingsPanel title="Roles and permissions" subtitle="Mock role cards for enterprise access review; no users, invitations, or permissions are changed from this page.">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
        {settingsMockData.rolePermissions.map((role) => (
          <RoleCard key={role.role} role={role} />
        ))}
      </div>
    </SettingsPanel>
  );
}

function NotificationRulesSection() {
  return (
    <SettingsPanel title="Notification rules" subtitle="Static delivery preferences; this component does not send email, Slack messages, webhooks, or in-app alerts.">
      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-3">
        {settingsMockData.notificationRules.map((rule) => (
          <article key={rule.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge className={channelClasses(rule.channel)}>{formatToken(rule.channel)}</Badge>
              <Badge className={statusClasses(rule.status)}>{formatToken(rule.status)}</Badge>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-slate-950">{rule.name}</h3>
            <p className="mt-2 text-xs leading-5 text-slate-500">{rule.trigger}</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">Audience</p>
            <p className="mt-1 text-sm text-slate-600">{rule.audience}</p>
          </article>
        ))}
      </div>
    </SettingsPanel>
  );
}

function IntegrationPreferencesPanel() {
  return (
    <SettingsPanel title="Integrations and source preferences" subtitle="Mock preferences for allowed official, manual, licensed, and demo data paths.">
      <div className="grid gap-3 xl:grid-cols-2">
        {settingsMockData.integrationPreferences.map((source) => (
          <article key={source.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{source.source}</h3>
                <p className="mt-1 text-xs text-slate-500">Freshness: {source.freshness}</p>
              </div>
              <Badge className={source.defaultEnabled ? "bg-emerald-50 text-emerald-700 ring-emerald-100" : "bg-slate-100 text-slate-700 ring-slate-200"}>
                {source.defaultEnabled ? "Default on" : "Default off"}
              </Badge>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge className={providerClasses(source.providerType)}>{formatToken(source.providerType)}</Badge>
              <Badge className={classificationClasses(source.sensitivity)}>{formatToken(source.sensitivity)}</Badge>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{source.notes}</p>
          </article>
        ))}
      </div>
    </SettingsPanel>
  );
}

function SecurityAndGovernancePanels() {
  return (
    <section className="grid gap-6 xl:grid-cols-2">
      <SettingsPanel title="Security and session placeholders" subtitle="Prepared enterprise controls with no live identity provider or session backend connection.">
        <div className="space-y-3">
          {settingsMockData.securitySessionPlaceholders.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold text-slate-950">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.value}</p>
                </div>
                <Badge className={statusClasses(item.status)}>{formatToken(item.status)}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </SettingsPanel>

      <SettingsPanel title="Governance and compliance defaults" subtitle="Policy-oriented defaults for an official-first Instagram intelligence workspace.">
        <div className="space-y-3">
          {settingsMockData.governanceComplianceDefaults.map((item) => (
            <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-semibold text-slate-950">{item.policy}</p>
                <Badge className={classificationClasses(item.classification)}>{formatToken(item.classification)}</Badge>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Default: {item.defaultValue}</Badge>
                <Badge className="bg-blue-50 text-blue-700 ring-blue-100">Owner: {item.owner}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.rationale}</p>
            </div>
          ))}
        </div>
      </SettingsPanel>
    </section>
  );
}

function EnterpriseSettingsTable() {
  return (
    <SettingsPanel title="Enterprise settings table" subtitle="Table-style governance inventory for settings ownership, status, classification, retention, and review cadence.">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Setting</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Classification</th>
                <th className="px-4 py-3">Retention</th>
                <th className="px-4 py-3">Last reviewed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {settingsMockData.enterpriseSettingsTableRows.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="px-4 py-4 font-semibold text-slate-950">{row.category}</td>
                  <td className="max-w-sm px-4 py-4 text-slate-600">{row.setting}</td>
                  <td className="px-4 py-4 text-slate-600">{row.owner}</td>
                  <td className="px-4 py-4">
                    <Badge className={statusClasses(row.status)}>{formatToken(row.status)}</Badge>
                  </td>
                  <td className="px-4 py-4">
                    <Badge className={classificationClasses(row.classification)}>{formatToken(row.classification)}</Badge>
                  </td>
                  <td className="px-4 py-4 text-slate-600">{row.retention}</td>
                  <td className="px-4 py-4 text-slate-600">{row.lastReviewed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SettingsPanel>
  );
}

function ComplianceNotice() {
  const notice = settingsMockData.complianceNotice;

  return (
    <SettingsPanel title={notice.title} subtitle="Official APIs, connected professional accounts, manual imports, and licensed compliant providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{notice.body}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official Meta APIs and connected professional account analytics are the preferred data paths.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Manual CSV imports require consent and workspace attestation before use.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Licensed providers remain disabled by default until legal, provenance, and policy checks are complete.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, private account access, hidden surveillance, fake login automation, credential automation, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {notice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
        <p className="rounded-2xl border border-slate-200 bg-white p-4 text-xs font-medium text-slate-500">{notice.footer}</p>
      </div>
    </SettingsPanel>
  );
}

export function SettingsPage() {
  return (
    <div className="space-y-6">
      <SettingsHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {settingsMockData.kpiCards.map((kpi) => (
          <KpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <SettingsOverviewStrip />
      <WorkspaceProfilePanel />
      <PlaceholderChecklist />
      <RolesSection />
      <NotificationRulesSection />
      <IntegrationPreferencesPanel />
      <SecurityAndGovernancePanels />
      <EnterpriseSettingsTable />
      <ComplianceNotice />
    </div>
  );
}