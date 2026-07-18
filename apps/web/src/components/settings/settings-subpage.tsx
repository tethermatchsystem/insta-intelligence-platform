import Link from "next/link";
import {
  type SettingsHeaderBadge,
  type SettingsSubpageBadge,
  type SettingsSubpageCard,
  type SettingsSubpageData,
  type SettingsSubpageKpi,
  type SettingsSubpageTone,
  type SettingsTableCell,
} from "@/lib/mock-data/settings-subpages";

function toneClasses(tone: SettingsSubpageTone) {
  const tones: Record<SettingsSubpageTone, string> = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warning: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    danger: "bg-rose-50 text-rose-700 ring-rose-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
}

function Badge({ badge }: { badge: SettingsSubpageBadge }) {
  return <span className={`inline-flex h-auto max-w-full items-start justify-start whitespace-normal break-words rounded-full px-3 py-1 text-left text-xs font-semibold leading-4 ring-1 ${toneClasses(badge.tone)}`}>{badge.label}</span>;
}

function HeaderBadge({ badge }: { badge: SettingsHeaderBadge }) {
  return <Badge badge={{ label: `${badge.label}: ${badge.value}`, tone: badge.tone }} />;
}

const settingsSafetyPills = [
  "Preview-only settings",
  "No settings are saved in Alpha",
  "Governance controls are static in this preview",
  "Private beta activation required",
  "Official-source provider approval may be required",
  "No backend action runs from this page",
];

type SettingsSubpageKind = "workspace" | "team" | "roles" | "auditLogs" | "generic";

type SettingsContextLink = {
  label: string;
  href: string;
  detail: string;
  kind?: SettingsSubpageKind;
};

const workspaceGovernanceProfile = [
  {
    title: "Workspace identity profile",
    value: "Acme Social Intelligence",
    detail: "Static workspace name, legal entity, region, timezone, business context, and ownership labels for admin review only.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    title: "Business context",
    value: "Agency / enterprise intelligence",
    detail: "Mock business profile for official-first Instagram intelligence, connected professional account analytics, and governed reporting.",
    tone: "purple" as SettingsSubpageTone,
  },
  {
    title: "Data retention readiness",
    value: "Policy review required",
    detail: "Retention, residency, deletion, and audit expectations are preview labels only; no database or object storage policy is changed.",
    tone: "warning" as SettingsSubpageTone,
  },
  {
    title: "Authorized-source policy",
    value: "Official-first defaults",
    detail: "Future source use must stay official-safe, consented, or licensed-provider-only where applicable. No provider activation runs.",
    tone: "success" as SettingsSubpageTone,
  },
];

const workspaceDisabledActions = ["Save workspace profile", "Change data residency", "Enable provider", "Update retention", "Write audit record", "Activate policy gate"];

const teamAccessRows = [
  {
    member: "Maya Rahman",
    role: "Workspace Owner",
    status: "Mock active",
    accessScope: "All workspace settings and commercial review",
    reviewState: "Owner review current",
    guidance: "Safely review owner responsibilities; do not change access or send notifications in Alpha.",
  },
  {
    member: "Omar Haddad",
    role: "Compliance Admin",
    status: "Mock active",
    accessScope: "Policy gates, audit metadata, provider readiness",
    reviewState: "Quarterly review needed",
    guidance: "Review compliance coverage and provider approval needs without modifying permissions.",
  },
  {
    member: "Nora Jensen",
    role: "Analyst",
    status: "Mock active",
    accessScope: "Approved analytics, reports, and governed exports",
    reviewState: "Standard access preview",
    guidance: "Confirm least-privilege analytics scope before any future auth backend work.",
  },
  {
    member: "Pending invite placeholder",
    role: "Campaign Manager",
    status: "Invite disabled",
    accessScope: "Connected account campaign reporting preview",
    reviewState: "Invite approval blocked",
    guidance: "Document invite approval requirements; no invitation email or account creation runs.",
  },
];

const teamDisabledActions = ["Send invitation", "Remove member", "Change role", "Revoke session", "Resend email", "Write auth record"];

const rolePolicyCards = [
  {
    role: "Workspace Owner",
    allowed: ["Review workspace profile", "View billing preview", "Review source preferences"],
    restricted: ["Live payment changes", "Provider activation", "Permission writes"],
    auditNote: "Admin elevation requires future approval workflow and audit records before enforcement exists.",
    tone: "purple" as SettingsSubpageTone,
  },
  {
    role: "Compliance Admin",
    allowed: ["Review policy gates", "Review audit metadata", "Assess licensed-provider readiness"],
    restricted: ["Enable restricted features", "Run provider sync", "Generate audit exports"],
    auditNote: "Policy changes remain mock-only until feature-policy enforcement and audit persistence are implemented.",
    tone: "warning" as SettingsSubpageTone,
  },
  {
    role: "Analyst",
    allowed: ["View approved analytics", "Preview reports", "Review export summaries"],
    restricted: ["Settings administration", "Role edits", "Provider credentials"],
    auditNote: "Analyst access is read-oriented and must remain limited to approved official-source datasets.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    role: "Read-only Executive",
    allowed: ["View KPI dashboards", "Preview executive reports", "Read aggregate summaries"],
    restricted: ["Any write action", "Identity-level exports", "Admin configuration"],
    auditNote: "Executive access is static and aggregate-only in Alpha with no permission enforcement backend.",
    tone: "neutral" as SettingsSubpageTone,
  },
];

const rolesDisabledActions = ["Edit role", "Assign permission", "Save policy", "Enforce RBAC", "Approve elevation", "Write audit event"];

const auditEvidenceEvents = [
  {
    timestamp: "2026-07-09 09:42 UTC",
    actor: "Maya Rahman",
    action: "Workspace profile reviewed",
    source: "User action",
    severity: "Info",
    object: "Workspace identity profile",
    reviewState: "Mock reviewed",
    evidenceNote: "Static example of an admin review event. No audit record is persisted and no immutable evidence object is created.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    timestamp: "2026-07-09 09:58 UTC",
    actor: "Meta Graph API adapter preview",
    action: "Provider event schema inspected",
    source: "Provider event",
    severity: "Medium",
    object: "Official API provenance contract",
    reviewState: "Schema only",
    evidenceNote: "Static provider-event example for future official API provenance. No webhook, provider sync, OAuth, or adapter job runs from this page.",
    tone: "success" as SettingsSubpageTone,
  },
  {
    timestamp: "2026-07-09 10:15 UTC",
    actor: "Omar Haddad",
    action: "Licensed provider activation blocked",
    source: "Policy review",
    severity: "High",
    object: "Licensed-provider adapter gate",
    reviewState: "Approval required",
    evidenceNote: "Preview-only policy review event showing why licensed-provider paths remain disabled by default.",
    tone: "warning" as SettingsSubpageTone,
  },
  {
    timestamp: "2026-07-09 11:03 UTC",
    actor: "Nora Jensen",
    action: "Role matrix opened",
    source: "System preview",
    severity: "Low",
    object: "RBAC matrix preview",
    reviewState: "Read-only view",
    evidenceNote: "Static security activity row. No auth session, permission record, or audit event is written.",
    tone: "neutral" as SettingsSubpageTone,
  },
  {
    timestamp: "2026-07-09 12:28 UTC",
    actor: "Compliance Admin",
    action: "Audit export placeholder requested",
    source: "System preview",
    severity: "Medium",
    object: "Audit evidence export",
    reviewState: "Export disabled",
    evidenceNote: "Demonstrates the future evidence request shape while keeping downloads, exports, storage writes, and backend jobs disabled.",
    tone: "danger" as SettingsSubpageTone,
  },
];

const auditProvenanceLegend = [
  {
    label: "User action",
    detail: "Admin-initiated UI activity such as viewing settings or reviewing a profile. Static only in Alpha.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    label: "Provider event",
    detail: "Future official API or licensed-provider adapter events. No provider sync or webhook ingestion exists here.",
    tone: "success" as SettingsSubpageTone,
  },
  {
    label: "System preview",
    detail: "Mock system-generated activity used to demonstrate security review patterns without persistence.",
    tone: "neutral" as SettingsSubpageTone,
  },
  {
    label: "Policy review",
    detail: "Compliance reviewer decisions for restricted, licensed-provider-only, or disabled-by-default capabilities.",
    tone: "warning" as SettingsSubpageTone,
  },
];

const auditDisabledActions = ["Export audit log", "Filter events", "Open evidence", "Change retention", "Enable webhook sync", "Run audit sync"];

const settingsContextLinks: SettingsContextLink[] = [
  { label: "Governance hub", href: "/settings", detail: "Back to settings overview" },
  { label: "Workspace", href: "/settings/workspace", detail: "Workspace profile", kind: "workspace" as SettingsSubpageKind },
  { label: "Team", href: "/settings/team", detail: "Team access", kind: "team" as SettingsSubpageKind },
  { label: "Roles", href: "/settings/roles", detail: "Role policy", kind: "roles" as SettingsSubpageKind },
  { label: "Audit logs", href: "/settings/audit-logs", detail: "Evidence ledger", kind: "auditLogs" as SettingsSubpageKind },
  { label: "Compliance", href: "/settings/compliance", detail: "Policy gates" },
];

const auditLedgerKpis = [
  {
    label: "Evidence rows",
    value: "5",
    change: "Static ledger",
    description: "Mock security activity rows show the evidence shape future audit records should capture.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    label: "Backend writes",
    value: "0",
    change: "Disabled",
    description: "No audit-log persistence, immutable object creation, event bus write, webhook sync, or retention job runs in Alpha.",
    tone: "warning" as SettingsSubpageTone,
  },
  {
    label: "Source labels",
    value: "4",
    change: "Provenance map",
    description: "User action, provider event, system preview, and policy review labels are explanatory only.",
    tone: "success" as SettingsSubpageTone,
  },
  {
    label: "Review queue",
    value: "Mock",
    change: "Admin-safe",
    description: "Admins can safely review actors, objects, severities, review states, and evidence notes without changing data.",
    tone: "purple" as SettingsSubpageTone,
  },
];

const auditFilterControls = [
  "Search actors, objects, or evidence notes",
  "Source: all provenance labels",
  "Severity: all levels",
  "Review state: all states",
  "Time range: static Alpha snapshot",
];

const auditAlphaStateCards = [
  {
    title: "Empty state",
    value: "No live events queried",
    detail: "A future empty ledger should explain whether filters, permissions, or retention windows removed results.",
    tone: "neutral" as SettingsSubpageTone,
  },
  {
    title: "Loading state",
    value: "No backend request starts",
    detail: "Alpha loading copy should remain illustrative; this page does not call audit APIs or subscribe to streams.",
    tone: "info" as SettingsSubpageTone,
  },
  {
    title: "Error state",
    value: "No incident is created",
    detail: "Future failures should route to security review without exposing credentials, hidden collection, or provider secrets.",
    tone: "warning" as SettingsSubpageTone,
  },
];

function AuditLedgerHeader({ page }: { page: SettingsSubpageData }) {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-[radial-gradient(circle_at_top_left,_#1e293b,_#020617_58%)] p-6 text-white shadow-2xl shadow-slate-300/70">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {page.headerBadges.map((badge) => (
              <HeaderBadge key={`${badge.label}-${badge.value}`} badge={badge} />
            ))}
            <Badge badge={{ label: "Evidence ledger mode", tone: "purple" }} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Settings / Audit evidence ledger</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Audit logs</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-slate-300">
            Security activity timeline for reviewing future audit evidence shape: actor, action, source, severity, object, timestamp, review state, and evidence notes. This is Alpha preview UI only.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {settingsSafetyPills.map((pill) => (
              <span key={pill} className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 px-3 py-2 text-xs font-semibold leading-5 text-cyan-50">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-cyan-300/20 bg-white/10 p-4 text-sm leading-6 text-slate-300 shadow-xl shadow-black/20 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha boundary: no audit persistence</p>
          <p className="mt-1">
            No audit-log persistence, backend event writes, immutable evidence objects, webhook delivery, audit sync, retention change, exports, downloads, or provider ingestion run from this page.
          </p>
          <p className="mt-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-xs leading-5 text-amber-50">
            Admin-safe next review: validate whether future audit records capture enough context for official-source provider events, policy reviews, settings activity, and security operations without changing live systems.
          </p>
        </div>
      </div>
    </header>
  );
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-lg shadow-slate-200/60">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Header({ page }: { page: SettingsSubpageData }) {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-200/70">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {page.headerBadges.map((badge) => (
              <HeaderBadge key={`${badge.label}-${badge.value}`} badge={badge} />
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-300">{page.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{page.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{page.description}</p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {settingsSafetyPills.map((pill) => (
              <span key={pill} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold leading-5 text-slate-100">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-300 shadow-xl shadow-black/10 xl:w-[30rem]">
          <p className="font-semibold text-white">{page.heroNoteTitle}</p>
          <p className="mt-1">{page.heroNote}</p>
          <p className="mt-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs leading-5 text-slate-300">
            Controls shown here are static governance previews. No settings are saved in Alpha, and no backend action runs from this page.
          </p>
        </div>
      </div>
    </header>
  );
}

function KpiCard({ kpi }: { kpi: SettingsSubpageKpi }) {
  return (
    <article className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-5 shadow-lg shadow-slate-200/60">
      <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
        <Badge badge={{ label: kpi.change, tone: kpi.tone }} />
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{kpi.description}</p>
    </article>
  );
}

function DetailCard({ card, featured = false }: { card: SettingsSubpageCard; featured?: boolean }) {
  return (
    <article className={featured ? "rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-200/70" : "rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm"}>
      {card.badges?.length ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <Badge key={badge.label} badge={badge} />
          ))}
        </div>
      ) : null}
      {card.eyebrow ? <p className={featured ? "text-xs font-semibold uppercase tracking-wide text-slate-400" : "text-xs font-semibold uppercase tracking-wide text-slate-400"}>{card.eyebrow}</p> : null}
      <h3 className={featured ? "mt-2 text-xl font-semibold tracking-tight text-white" : "mt-2 text-base font-semibold text-slate-950"}>{card.title}</h3>
      <p className={featured ? "mt-2 text-sm leading-6 text-slate-300" : "mt-2 text-sm leading-6 text-slate-600"}>{card.description}</p>
      {card.fields?.length ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {card.fields.map((field) => (
            <div key={field.label} className={featured ? "rounded-2xl border border-white/10 bg-white/5 p-3" : "rounded-2xl border border-slate-100 bg-white p-3"}>
              <p className={featured ? "text-[11px] font-semibold uppercase tracking-wide text-slate-400" : "text-[11px] font-semibold uppercase tracking-wide text-slate-400"}>{field.label}</p>
              <p className={featured ? "mt-2 text-sm font-semibold text-white" : "mt-2 text-sm font-semibold text-slate-950"}>{field.value}</p>
            </div>
          ))}
        </div>
      ) : null}
      {card.bullets?.length ? (
        <ul className={featured ? "mt-4 space-y-2 text-sm leading-6 text-slate-300" : "mt-4 space-y-2 text-sm leading-6 text-slate-600"}>
          {card.bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
      {card.footer ? <p className={featured ? "mt-4 rounded-2xl bg-white/10 p-3 text-xs leading-5 text-slate-300" : "mt-4 rounded-2xl bg-white p-3 text-xs leading-5 text-slate-500"}>{card.footer}</p> : null}
    </article>
  );
}

function TableCell({ cell }: { cell: SettingsTableCell }) {
  if (typeof cell === "string") return <span>{cell}</span>;
  return <Badge badge={cell} />;
}

function EnterpriseTable({ page }: { page: SettingsSubpageData }) {
  return (
    <Panel title={page.tableTitle} subtitle={page.tableSubtitle}>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                {page.tableColumns.map((column) => (
                  <th key={column} className="px-4 py-3">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {page.tableRows.map((row, rowIndex) => (
                <tr key={`${page.title}-${rowIndex}`} className="align-top">
                  {row.map((cell, cellIndex) => (
                    <td key={`${page.title}-${rowIndex}-${cellIndex}`} className={cellIndex === 0 ? "px-4 py-4 font-semibold text-slate-950" : "px-4 py-4 text-slate-600"}>
                      <TableCell cell={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}

function ComplianceNotice({ page }: { page: SettingsSubpageData }) {
  return (
    <Panel title={page.noticeTitle} subtitle="Compliance-safe static UI boundaries for settings administration and governance previews.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{page.noticeBody}</p>
        <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4 text-white">
          <p className="text-sm font-semibold">Preview-only settings boundary</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            {settingsSafetyPills.map((pill) => (
              <span key={pill} className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold leading-5 text-slate-100">
                {pill}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          {page.noticeBullets.map((item) => (
            <p key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">{item}</p>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function disabledActionPills(actions: string[], ariaLabel: string) {
  return (
    <div className="mt-5 flex flex-wrap gap-2" aria-label={ariaLabel}>
      {actions.map((action) => (
        <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
          {action}: disabled
        </span>
      ))}
    </div>
  );
}

function SettingsContextNavigation({ activeKind }: { activeKind: SettingsSubpageKind }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60" aria-label="Settings governance navigation context">
      <div className="mb-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Settings / Governance</p>
          <h2 className="mt-1 text-sm font-semibold text-slate-950">Static admin preview pages</h2>
          <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">
            Use these existing routes for context only. Links do not save settings, change roles, export logs, connect providers, open billing, or run backend actions.
          </p>
        </div>
        <Link
          href="/settings"
          className="inline-flex w-fit rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          Back to governance hub
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto" aria-label="Settings subpages">
        {settingsContextLinks.map((link) => {
          const active = link.kind === activeKind;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={[
                "min-w-fit rounded-2xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
                active ? "bg-slate-950 text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              ].join(" ")}
            >
              <span className="block">{link.label}</span>
              <span className={active ? "block text-[10px] text-white/70" : "block text-[10px] text-slate-400"}>{link.detail}</span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}

function getSubpageKind(page: SettingsSubpageData): SettingsSubpageKind {
  if (page.eyebrow.includes("Workspace")) return "workspace";
  if (page.eyebrow.includes("Team")) return "team";
  if (page.eyebrow.includes("Roles")) return "roles";
  if (page.eyebrow.includes("Audit logs")) return "auditLogs";
  return "generic";
}

function WorkspaceGovernanceProfilePreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-blue-200 bg-white p-5 shadow-lg shadow-blue-100/60">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Workspace identity and data governance profile</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Business context, source policy, and retention readiness</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              This workspace profile is a static Alpha governance profile. It helps admins review identity, business context, data retention readiness, and authorized-source policy before any settings backend exists.
            </p>
          </div>
          <Badge badge={{ label: "Save controls disabled", tone: "warning" }} />
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {workspaceGovernanceProfile.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.title}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{item.value}</h3>
                </div>
                <Badge badge={{ label: "Static", tone: item.tone }} />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-blue-50 via-white to-amber-50 p-5 shadow-lg shadow-amber-100/60">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the admin safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review the profile, do not save changes</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review legal identity, business context, retention assumptions, residency needs, and official-source policy. Real workspace saves, data-residency changes, provider activation, retention writes, and audit records remain disabled.
        </p>
        {disabledActionPills(workspaceDisabledActions, "Disabled workspace governance actions")}
      </section>
    </section>
  );
}

function TeamAccessControlPreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <section className="rounded-3xl border border-cyan-200 bg-white p-5 shadow-lg shadow-cyan-100/60">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">Team access and invitation control</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Member access rows with disabled invite controls</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Static roster rows show role, status, access scope, and review state. No invitation email, account creation, removal, role change, session revoke, or auth-provider write runs in Alpha.
            </p>
          </div>
          <Badge badge={{ label: "No invitation email", tone: "warning" }} />
        </div>

        <div className="space-y-3">
          {teamAccessRows.map((member) => (
            <article key={member.member} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-slate-950">{member.member}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{member.guidance}</p>
                </div>
                <Badge badge={{ label: member.reviewState, tone: member.status.includes("disabled") ? "warning" : "info" }} />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Role</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{member.role}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Status</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{member.status}</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Access scope</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">{member.accessScope}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-cyan-50 via-white to-amber-50 p-5 shadow-lg shadow-amber-100/60">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the admin safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review access scope, do not change membership</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review role assignments, access scopes, pending invite requirements, and review states. Real invitation sending, email, user removal, role changes, session revocation, and auth writes remain disabled.
        </p>
        {disabledActionPills(teamDisabledActions, "Disabled team administration actions")}
      </section>
    </section>
  );
}

function RolesPolicyPreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
      <section className="rounded-3xl border border-violet-200 bg-white p-5 shadow-lg shadow-violet-100/60">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Permission model and role policy</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Role matrix with allowed and restricted actions</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Static role cards show allowed actions, restricted actions, and audit/compliance notes. No permission edit, role assignment, policy save, RBAC enforcement, or audit write runs in Alpha.
            </p>
          </div>
          <Badge badge={{ label: "Role edits disabled", tone: "warning" }} />
        </div>

        <div className="grid gap-3 xl:grid-cols-2">
          {rolePolicyCards.map((role) => (
            <article key={role.role} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-950">{role.role}</h3>
                <Badge badge={{ label: "Mock policy", tone: role.tone }} />
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-700">Allowed preview actions</p>
                  <ul className="mt-2 space-y-1 text-xs leading-5 text-emerald-900">
                    {role.allowed.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-3">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-rose-700">Restricted actions</p>
                  <ul className="mt-2 space-y-1 text-xs leading-5 text-rose-900">
                    {role.restricted.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 rounded-2xl border border-slate-200 bg-white p-3 text-xs leading-5 text-slate-600">{role.auditNote}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-violet-50 via-white to-amber-50 p-5 shadow-lg shadow-amber-100/60">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the admin safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review role policy, do not enforce it</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review least-privilege assumptions, restricted actions, audit notes, and policy ownership. Real role edits, permission assignments, RBAC enforcement, elevation approvals, and audit writes remain disabled.
        </p>
        {disabledActionPills(rolesDisabledActions, "Disabled role policy actions")}
      </section>
    </section>
  );
}

function AuditEvidenceLedgerPreview() {
  return (
    <section className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {auditLedgerKpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
        <section className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-300/70">
          <div className="mb-5 flex flex-col gap-3 2xl:flex-row 2xl:items-start 2xl:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Audit evidence ledger</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">Security activity timeline preview</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                Static ledger rows show actor, action, source, severity, object, timestamp, review state, and evidence notes. No audit-log persistence, event ingestion, evidence object, webhook sync, retention job, export, or backend event write runs in Alpha.
              </p>
            </div>
            <Badge badge={{ label: "No audit persistence", tone: "warning" }} />
          </div>

          <div className="mb-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
            <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-100">Disabled filter/search area</p>
                <p className="mt-1 text-sm leading-6 text-cyan-50">These controls document future audit review ergonomics only. They do not query records, filter a backend, open evidence, or trigger exports.</p>
              </div>
              <Badge badge={{ label: "Filter events disabled", tone: "cyan" }} />
            </div>
            <div className="mt-4 grid gap-2 md:grid-cols-2 2xl:grid-cols-3">
              {auditFilterControls.map((control) => (
                <span key={control} aria-disabled="true" className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold leading-5 text-slate-100">
                  {control}: disabled
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {auditEvidenceEvents.map((event, index) => (
              <article key={`${event.timestamp}-${event.action}`} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-slate-100">A{index + 1}</span>
                    <div>
                      <h3 className="text-base font-semibold text-white">{event.action}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{event.timestamp} · {event.actor}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    <Badge badge={{ label: event.severity, tone: event.tone }} />
                    <Badge badge={{ label: event.reviewState, tone: event.reviewState.includes("disabled") ? "warning" : "info" }} />
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Source</p>
                    <p className="mt-1 text-xs leading-5 text-slate-200">{event.source}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Object</p>
                    <p className="mt-1 text-xs leading-5 text-slate-200">{event.object}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Evidence note</p>
                    <p className="mt-1 text-xs leading-5 text-slate-200">{event.evidenceNote}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-slate-50 p-5 shadow-lg shadow-amber-100/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the admin safely review next?</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Review evidence shape, not live events</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Safely review which actors, objects, sources, severities, and evidence notes future audit logs should capture. Real filtering, evidence opening, retention changes, exports, webhook delivery, and audit syncs remain disabled.
          </p>
          {disabledActionPills(auditDisabledActions, "Disabled audit ledger actions")}
        </section>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-white p-5 shadow-lg shadow-slate-200/70">
        <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Audit event table</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Evidence ledger rows for security review</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Table format mirrors the timeline for enterprise review: actor, action, source, severity, object, timestamp, review state, and evidence note. Rows are mock-only and are not backed by audit-log persistence.
            </p>
          </div>
          <Badge badge={{ label: "Open evidence disabled", tone: "warning" }} />
        </div>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Timestamp</th>
                  <th className="px-4 py-3">Actor</th>
                  <th className="px-4 py-3">Action</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Severity</th>
                  <th className="px-4 py-3">Object</th>
                  <th className="px-4 py-3">Review state</th>
                  <th className="px-4 py-3">Evidence note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {auditEvidenceEvents.map((event) => (
                  <tr key={`${event.timestamp}-${event.object}`} className="align-top">
                    <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-950">{event.timestamp}</td>
                    <td className="px-4 py-4 text-slate-600">{event.actor}</td>
                    <td className="px-4 py-4 font-semibold text-slate-950">{event.action}</td>
                    <td className="px-4 py-4"><Badge badge={{ label: event.source, tone: event.tone }} /></td>
                    <td className="px-4 py-4"><Badge badge={{ label: event.severity, tone: event.tone }} /></td>
                    <td className="px-4 py-4 text-slate-600">{event.object}</td>
                    <td className="px-4 py-4"><Badge badge={{ label: event.reviewState, tone: event.reviewState.includes("disabled") ? "warning" : "info" }} /></td>
                    <td className="min-w-72 px-4 py-4 text-slate-600">{event.evidenceNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
        <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Source and provenance legend</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">How future audit evidence would be labeled</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              These provenance labels are explanatory only. They do not subscribe to providers, listen to webhooks, write events, or persist compliance evidence.
            </p>
          </div>
          <Badge badge={{ label: "Static legend", tone: "neutral" }} />
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {auditProvenanceLegend.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Badge badge={{ label: item.label, tone: item.tone }} />
              <p className="mt-3 text-xs leading-5 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-5 shadow-lg shadow-slate-200/60">
        <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Empty / loading / error states</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Alpha state guidance for the future ledger</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              These states describe what admins can safely review next without connecting auth, persistence, provider sync, alerts, downloads, or policy enforcement.
            </p>
          </div>
          <Badge badge={{ label: "State previews only", tone: "neutral" }} />
        </div>
        <div className="grid gap-3 lg:grid-cols-3">
          {auditAlphaStateCards.map((state) => (
            <article key={state.title} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{state.title}</p>
                  <h3 className="mt-2 text-base font-semibold text-slate-950">{state.value}</h3>
                </div>
                <Badge badge={{ label: "Alpha", tone: state.tone }} />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-600">{state.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function AuditLogsSubpage({ page }: { page: SettingsSubpageData }) {
  return (
    <div className="space-y-6">
      <AuditLedgerHeader page={page} />
      <SettingsContextNavigation activeKind="auditLogs" />
      <AuditEvidenceLedgerPreview />
      <ComplianceNotice page={page} />
    </div>
  );
}

function VariantGovernancePreview({ page }: { page: SettingsSubpageData }) {
  const kind = getSubpageKind(page);

  if (kind === "workspace") return <WorkspaceGovernanceProfilePreview />;
  if (kind === "team") return <TeamAccessControlPreview />;
  if (kind === "roles") return <RolesPolicyPreview />;
  if (kind === "auditLogs") return <AuditEvidenceLedgerPreview />;
  return null;
}

export function SettingsSubpage({ page }: { page: SettingsSubpageData }) {
  const kind = getSubpageKind(page);

  if (kind === "auditLogs") return <AuditLogsSubpage page={page} />;

  return (
    <div className="space-y-6">
      <Header page={page} />
      <SettingsContextNavigation activeKind={kind} />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {page.kpiCards.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>
      <DetailCard card={page.summary} featured />
      <VariantGovernancePreview page={page} />
      <Panel title={page.cardsTitle} subtitle={page.cardsSubtitle}>
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
          {page.cards.map((card) => (
            <DetailCard key={card.title} card={card} />
          ))}
        </div>
      </Panel>
      <EnterpriseTable page={page} />
      <ComplianceNotice page={page} />
    </div>
  );
}