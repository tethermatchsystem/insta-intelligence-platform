import Link from "next/link";

type ComplianceSettingsTone = "success" | "warning" | "info" | "neutral" | "danger" | "purple" | "cyan";

const compliancePreviewNotes = [
  {
    label: "Preview-only settings",
    value: "No settings are saved in Alpha",
    description: "Static policy classifications below do not enforce runtime decisions or save governance changes yet.",
  },
  {
    label: "Governance controls are static in this preview",
    value: "No backend action runs from this page",
    description: "Provider approvals, roles, retention, and permission gates require private-beta backend enforcement.",
  },
  {
    label: "Private beta activation required",
    value: "Official-source provider approval may be required",
    description: "Audit readiness examples are placeholders, not live audit logs, provider activations, or enforcement records.",
  },
];

const policyRegisterCards = [
  {
    title: "Official Meta APIs",
    riskTier: "Low risk",
    approvalState: "Preferred path",
    dataBoundary: "Instagram Graph API, Meta Marketing API, and Meta Ad Library API where official access and allowed use cases apply.",
    retentionReadiness: "Retention and provenance records must be designed before backend activation.",
    safeNextStep: "Review official permissions, app review requirements, and source provenance before any future integration work.",
    tone: "success" as ComplianceSettingsTone,
  },
  {
    title: "Owned / connected accounts",
    riskTier: "Managed risk",
    approvalState: "Authorized-source review",
    dataBoundary: "Connected professional account analytics and owned account webhooks only where the workspace has authorization.",
    retentionReadiness: "Requires consent, workspace ownership checks, data minimization, and audit logging before live use.",
    safeNextStep: "Confirm account ownership, authorized scopes, and retention expectations without starting OAuth or sync.",
    tone: "info" as ComplianceSettingsTone,
  },
  {
    title: "Licensed-provider adapters",
    riskTier: "Elevated risk",
    approvalState: "Legal and provider approval required",
    dataBoundary: "Licensed compliant providers only for approved enrichment paths with provenance, confidence, and contract controls.",
    retentionReadiness: "Provider metadata, rate limits, confidence scores, and audit records are required before activation.",
    safeNextStep: "Prepare provider due-diligence questions and policy classifications; do not connect adapters in Alpha.",
    tone: "warning" as ComplianceSettingsTone,
  },
  {
    title: "Restricted identity-level surfaces",
    riskTier: "Restricted",
    approvalState: "Disabled by default",
    dataBoundary: "Recent follows/unfollows, arbitrary identity-level histories, and similar sensitive surfaces remain policy-gated.",
    retentionReadiness: "Requires explicit feature-policy review, authorized/licensed source path, and audit controls before any future beta.",
    safeNextStep: "Keep identity-level controls disabled and document safe aggregate alternatives.",
    tone: "danger" as ComplianceSettingsTone,
  },
  {
    title: "Disabled / blocked sources",
    riskTier: "Blocked",
    approvalState: "Not a product path",
    dataBoundary: "Scraping, fake login automation, private-account access, hidden surveillance, credential automation, and anti-bot bypass are not normal product paths.",
    retentionReadiness: "No readiness path is provided for blocked sources in Alpha.",
    safeNextStep: "Reject blocked source requests and route stakeholders to official-source or compliant provider alternatives.",
    tone: "neutral" as ComplianceSettingsTone,
  },
];

const disabledComplianceActions = ["Save policy", "Start approval workflow", "Activate provider", "Enable restricted feature", "Export compliance register", "Route legal review"];

const complianceGovernanceLinks = [
  { label: "Governance hub", href: "/settings", detail: "Back to Settings overview" },
  { label: "Workspace", href: "/settings/workspace", detail: "Workspace policy posture" },
  { label: "Team", href: "/settings/team", detail: "Reviewer and admin access" },
  { label: "Roles", href: "/settings/roles", detail: "Least-privilege policy" },
  { label: "Audit logs", href: "/settings/audit-logs", detail: "Evidence ledger preview" },
  { label: "Data Sources", href: "/data-sources", detail: "Provider readiness" },
];

const complianceControlRoomKpis = [
  {
    label: "Policy families",
    value: "5",
    change: "Static register",
    description: "Official APIs, connected accounts, licensed providers, restricted surfaces, and blocked sources are separated for safe review.",
    tone: "info" as ComplianceSettingsTone,
  },
  {
    label: "Live enforcement",
    value: "0",
    change: "Disabled",
    description: "No policy save, provider activation, restricted enablement, legal routing, export, or backend enforcement runs in Alpha.",
    tone: "warning" as ComplianceSettingsTone,
  },
  {
    label: "Safe source paths",
    value: "3",
    change: "Official-first",
    description: "Official Meta APIs, owned/connected permissions, and compliant licensed providers remain the only future implementation paths.",
    tone: "success" as ComplianceSettingsTone,
  },
  {
    label: "Blocked paths",
    value: "6",
    change: "Not product paths",
    description: "Scraping, fake login, private-account access, hidden surveillance, credential automation, and anti-bot bypass stay blocked.",
    tone: "danger" as ComplianceSettingsTone,
  },
];

const complianceRegisterFilters = [
  "Search data-source policy",
  "Risk tier: all tiers",
  "Approval state: all states",
  "Classification: official-safe to blocked",
  "Owner: governance preview",
];

const complianceReviewLanes = [
  {
    lane: "Ready to review",
    count: "2",
    detail: "Official Meta API and owned/connected account policies can be reviewed for permissions, provenance, and retention notes.",
    tone: "success" as ComplianceSettingsTone,
  },
  {
    lane: "Approval required",
    count: "1",
    detail: "Licensed-provider adapters require legal/provider approval, provenance metadata, rate-limit strategy, and confidence scoring before activation.",
    tone: "warning" as ComplianceSettingsTone,
  },
  {
    lane: "Restricted review",
    count: "1",
    detail: "Identity-level surfaces, recent follows/unfollows, and arbitrary like history remain disabled unless a future compliant source path is approved.",
    tone: "danger" as ComplianceSettingsTone,
  },
  {
    lane: "Blocked",
    count: "1",
    detail: "Scraping, fake login automation, private-account access, hidden surveillance, credential automation, and anti-bot bypass are rejected paths.",
    tone: "neutral" as ComplianceSettingsTone,
  },
];

const complianceStateCards = [
  {
    title: "Empty state",
    value: "No live policies queried",
    detail: "If a future filter has no results, explain the review boundary without creating provider jobs or policy writes.",
    tone: "neutral" as ComplianceSettingsTone,
  },
  {
    title: "Loading state",
    value: "No backend request starts",
    detail: "Alpha loading language is illustrative only; this page does not fetch policies, approvals, audits, or legal queues.",
    tone: "info" as ComplianceSettingsTone,
  },
  {
    title: "Error state",
    value: "No enforcement changes",
    detail: "Future errors should preserve safe defaults and never enable restricted, blocked, scraping, fake-login, or private-access paths.",
    tone: "warning" as ComplianceSettingsTone,
  },
];

function toneClasses(tone: ComplianceSettingsTone) {
  const tones: Record<ComplianceSettingsTone, string> = {
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

function Badge({ children, tone }: { children: React.ReactNode; tone: ComplianceSettingsTone }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${toneClasses(tone)}`}>{children}</span>;
}

function DisabledControlPills({ actions, ariaLabel }: { actions: string[]; ariaLabel: string }) {
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

function ComplianceControlRoomHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-emerald-900 bg-[radial-gradient(circle_at_top_left,_#064e3b,_#020617_62%)] p-6 text-white shadow-2xl shadow-emerald-100/70">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge tone="success">Source: static policy register</Badge>
            <Badge tone="info">Mode: compliance control room</Badge>
            <Badge tone="warning">No live enforcement</Badge>
            <Badge tone="neutral">Alpha preview only</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-200">Settings / Compliance control room</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Compliance settings</h1>
          <p className="mt-3 max-w-4xl text-base leading-7 text-emerald-50/85">
            Data-source policy register for safely reviewing official Meta APIs, connected account boundaries, licensed-provider readiness, restricted identity-level surfaces, and blocked source categories before any backend governance exists.
          </p>
          <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">Preview-only settings</span>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">No settings are saved in Alpha</span>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">Policy controls are static</span>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">Provider activation disabled</span>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">Legal routing disabled</span>
            <span className="rounded-2xl border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-xs font-semibold leading-5 text-emerald-50">No backend action runs</span>
          </div>
        </div>
        <div className="rounded-3xl border border-emerald-300/20 bg-white/10 p-4 text-sm leading-6 text-emerald-50/85 shadow-xl shadow-black/20 xl:w-[31rem]">
          <p className="font-semibold text-white">Admin-safe next review</p>
          <p className="mt-1">
            Review source classifications, risk tiers, approval posture, data boundaries, retention readiness, and safe next-step notes. Do not save policies, activate providers, enable restricted features, export registers, or route legal reviews in Alpha.
          </p>
          <p className="mt-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-3 text-xs leading-5 text-amber-50">
            Scraping, fake login automation, private-account access, hidden surveillance, credential automation, and anti-bot bypass are blocked categories, not normal product paths.
          </p>
        </div>
      </div>
    </header>
  );
}

function ComplianceGovernanceNav() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60" aria-label="Compliance settings governance navigation context">
      <div className="mb-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Settings / Compliance</p>
          <h2 className="mt-1 text-sm font-semibold text-slate-950">Compliance control room context</h2>
          <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">
            Continue through existing governance preview routes only. Links do not save policies, activate providers, export registers, route legal reviews, or run backend actions.
          </p>
        </div>
        <Link href="/settings" className="inline-flex w-fit rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
          Back to governance hub
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto" aria-label="Compliance related settings routes">
        {complianceGovernanceLinks.map((link) => (
          <Link key={link.href} href={link.href} className="min-w-fit rounded-2xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
            <span className="block">{link.label}</span>
            <span className="block text-[10px] text-slate-400">{link.detail}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}

function ComplianceKpiGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {complianceControlRoomKpis.map((kpi) => (
        <article key={kpi.label} className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white to-emerald-50/40 p-5 shadow-lg shadow-emerald-100/50">
          <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
            <Badge tone={kpi.tone}>{kpi.change}</Badge>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">{kpi.description}</p>
        </article>
      ))}
    </section>
  );
}

function ComplianceBoundaryNotice() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Settings compliance alpha boundary</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">Preview-only governance boundary</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
            Preview-only settings: no settings are saved in Alpha. Policy gates, provider approvals, retention controls, and audit enforcement require private beta activation before any real policy enforcement exists.
          </p>
        </div>
        <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">No backend action runs from this page</span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {compliancePreviewNotes.map((note) => (
          <article key={note.label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <p className="text-xs font-semibold text-slate-300">{note.label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{note.value}</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComplianceFilterRegister() {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-5 shadow-lg shadow-emerald-100/60">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Filter / search area</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Disabled policy register controls</h2>
          <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-600">
            These controls communicate future review workflows only. They do not fetch policies, change classifications, save approvals, activate providers, route legal review, or enforce feature gates.
          </p>
        </div>
        <Badge tone="warning">All controls disabled</Badge>
      </div>
      <div className="mt-4 grid gap-2 md:grid-cols-2 xl:grid-cols-5">
        {complianceRegisterFilters.map((control) => (
          <span key={control} aria-disabled="true" className="rounded-2xl border border-emerald-200 bg-white/80 px-3 py-2 text-xs font-semibold leading-5 text-emerald-900">
            {control}: disabled
          </span>
        ))}
      </div>
    </section>
  );
}

function ComplianceReviewLaneBoard() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Control room lanes</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">What can the admin safely review next?</h2>
          <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
            Review lanes summarize source posture without changing policy state. They are designed to guide safe discussion before official-source adapters or compliant provider approvals are implemented.
          </p>
        </div>
        <Badge tone="neutral">Static review queue</Badge>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {complianceReviewLanes.map((lane) => (
          <article key={lane.lane} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{lane.lane}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{lane.count}</p>
              </div>
              <Badge tone={lane.tone}>Alpha</Badge>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600">{lane.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompliancePolicyRegisterPreview() {
  return (
    <section className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-3xl border border-emerald-200 bg-white p-5 shadow-lg shadow-emerald-100/60">
          <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Compliance control room / data-source policy register</p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">Source policies, risk tiers, and approval posture</h2>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-500">
                Static policy cards show risk tier, approval state, data boundary, retention/readiness notes, and safe next-step guidance. No compliance policy is saved, enforced, exported, or routed from this Alpha page.
              </p>
            </div>
            <Badge tone="warning">Policy saves disabled</Badge>
          </div>

          <div className="grid gap-3 xl:grid-cols-2">
            {policyRegisterCards.map((policy) => (
              <article key={policy.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{policy.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{policy.safeNextStep}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    <Badge tone={policy.tone}>{policy.riskTier}</Badge>
                    <Badge tone="neutral">{policy.approvalState}</Badge>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Data boundary</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{policy.dataBoundary}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Retention / readiness</p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">{policy.retentionReadiness}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-5 shadow-lg shadow-amber-100/60">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the admin safely review next?</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Review policy posture, do not enforce it</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Safely review source classifications, risk tiers, approval state, data boundaries, and retention readiness. Real policy saves, approval workflows, provider activation, restricted feature enablement, exports, and legal routing remain disabled.
          </p>
          <DisabledControlPills actions={disabledComplianceActions} ariaLabel="Disabled compliance control room actions" />
          <p className="mt-5 rounded-2xl border border-slate-200 bg-white/80 p-4 text-xs leading-5 text-slate-600">
            Scraping, fake login automation, private-account access, hidden surveillance, credential automation, and anti-bot bypass are blocked source categories, not normal product paths.
          </p>
        </section>
      </section>
    </section>
  );
}

function CompliancePolicyTable() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-white p-5 shadow-lg shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Enterprise data-source policy table</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Policy register rows for governance review</h2>
          <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
            Table rows mirror the policy cards with risk tier, approval state, data boundary, retention/readiness, and safe next-step guidance. This table is mock-only and does not write policy state.
          </p>
        </div>
        <Badge tone="warning">Compliance export disabled</Badge>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Policy family</th>
                <th className="px-4 py-3">Risk tier</th>
                <th className="px-4 py-3">Approval state</th>
                <th className="px-4 py-3">Data boundary</th>
                <th className="px-4 py-3">Retention / readiness</th>
                <th className="px-4 py-3">Safe next step</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {policyRegisterCards.map((policy) => (
                <tr key={policy.title} className="align-top">
                  <td className="whitespace-nowrap px-4 py-4 font-semibold text-slate-950">{policy.title}</td>
                  <td className="px-4 py-4"><Badge tone={policy.tone}>{policy.riskTier}</Badge></td>
                  <td className="px-4 py-4"><Badge tone="neutral">{policy.approvalState}</Badge></td>
                  <td className="min-w-72 px-4 py-4 text-slate-600">{policy.dataBoundary}</td>
                  <td className="min-w-64 px-4 py-4 text-slate-600">{policy.retentionReadiness}</td>
                  <td className="min-w-64 px-4 py-4 text-slate-600">{policy.safeNextStep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ComplianceStateGuidance() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50 p-5 shadow-lg shadow-slate-200/60">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Empty / loading / error states</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Alpha state guidance for compliance settings</h2>
          <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
            State cards keep admins oriented without implying real policy persistence, backend enforcement, provider sync, OAuth, alerts, downloads, or legal workflow routing.
          </p>
        </div>
        <Badge tone="neutral">State previews only</Badge>
      </div>
      <div className="grid gap-3 lg:grid-cols-3">
        {complianceStateCards.map((state) => (
          <article key={state.title} className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{state.title}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-950">{state.value}</h3>
              </div>
              <Badge tone={state.tone}>Alpha</Badge>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-600">{state.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ComplianceSafetyNotice() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/60">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Provider and compliance notice</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Official-source-safe boundaries</h2>
        <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
          This settings page is an Alpha preview of a compliance control room. It does not add backend/live/provider behavior and does not save, enforce, export, sync, activate, or route any governance action.
        </p>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">Official Meta APIs, connected professional accounts, owned account data, and approved licensed providers are the only safe future implementation paths where allowed.</p>
        <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-sm leading-6 text-blue-900">Business Discovery, hashtag/public content APIs, Meta Marketing API, and Meta Ad Library API must remain permission-scoped with provenance and rate-limit controls.</p>
        <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Recent follows/unfollows remain licensed-provider-only where lawful and compliant; arbitrary user like history remains restricted and disabled by default.</p>
        <p className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm leading-6 text-rose-900">Scraping, fake login automation, private-account access, hidden surveillance, credential automation, and anti-bot bypass are blocked and are not normal product paths.</p>
      </div>
      <DisabledControlPills actions={disabledComplianceActions} ariaLabel="Disabled compliance notice actions" />
    </section>
  );
}

export function ComplianceSettingsPage() {
  return (
    <div className="space-y-6">
      <ComplianceControlRoomHeader />
      <ComplianceGovernanceNav />
      <ComplianceKpiGrid />
      <ComplianceBoundaryNotice />
      <ComplianceFilterRegister />
      <ComplianceReviewLaneBoard />
      <CompliancePolicyRegisterPreview />
      <CompliancePolicyTable />
      <ComplianceStateGuidance />
      <ComplianceSafetyNotice />
    </div>
  );
}