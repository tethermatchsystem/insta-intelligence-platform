import {
  complianceMockData,
  type ComplianceClassification,
  type ComplianceTone,
} from "@/lib/mock-data/compliance";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: ComplianceTone) {
  const tones: Record<ComplianceTone, string> = {
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

function classificationClasses(classification: ComplianceClassification) {
  if (classification === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (classification === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (classification === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  if (classification === "restricted") return "bg-rose-50 text-rose-700 ring-rose-100";
  if (classification === "disabled_by_default") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-cyan-50 text-cyan-700 ring-cyan-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CompliancePanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function ComplianceHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {complianceMockData.headerBadges.map((badge) => (
              <Badge key={`${badge.label}-${badge.value}`} className={toneClasses(badge.tone)}>
                {badge.label}: {badge.value}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Private app compliance</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">Compliance</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
            Review policy gates, provider approval, workspace permissions, audit readiness, data handling, and feature classifications for official-first Instagram intelligence workflows.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">Mock-only policy command center</p>
          <p className="mt-1">
            Static compliance preview only: no live policy writes, no backend enforcement changes, no provider activation, no scraping, no private account access, no hidden surveillance, and no anti-bot bypass.
          </p>
        </div>
      </div>
    </header>
  );
}

function KpiCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {complianceMockData.kpiCards.map((kpi) => (
        <div key={kpi.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
            <Badge className={toneClasses(kpi.tone)}>{kpi.change}</Badge>
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-500">{kpi.description}</p>
        </div>
      ))}
    </section>
  );
}

function PolicyGatePanels() {
  return (
    <CompliancePanel title="Policy gate panels" subtitle="Feature classifications for official-safe, limited official, licensed-provider-only, restricted, and disabled-by-default capabilities.">
      <div className="grid gap-4 xl:grid-cols-5">
        {complianceMockData.policyGatePanels.map((gate) => (
          <article key={gate.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Badge className={toneClasses(gate.tone)}>{gate.status}</Badge>
              <Badge className={classificationClasses(gate.classification)}>{formatToken(gate.classification)}</Badge>
            </div>
            <h3 className="mt-4 text-base font-semibold text-slate-950">{gate.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{gate.summary}</p>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Allowed examples</p>
                <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                  {gate.allowedSignals.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Blocked or gated</p>
                <ul className="mt-2 space-y-1 text-xs leading-5 text-slate-600">
                  {gate.blockedSignals.map((item) => <li key={item}>• {item}</li>)}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </CompliancePanel>
  );
}

function DataGovernancePanels() {
  return (
    <section className="grid gap-4 xl:grid-cols-4">
      {complianceMockData.governancePanels.map((panel) => (
        <article key={panel.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{panel.owner}</p>
              <h2 className="mt-2 text-base font-semibold text-slate-950">{panel.title}</h2>
            </div>
            <Badge className={toneClasses(panel.tone)}>{panel.status}</Badge>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{panel.summary}</p>
          <ul className="mt-4 space-y-2">
            {panel.checks.map((check) => (
              <li key={check} className="rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-600">{check}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

function FeaturePolicyCards() {
  return (
    <CompliancePanel title="Feature policy cards" subtitle="Mock feature review inventory with source, permission model, readiness, and compliance classification.">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {complianceMockData.featurePolicyCards.map((feature) => (
          <article key={feature.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-slate-950">{feature.feature}</h3>
                <p className="mt-1 text-xs text-slate-500">{feature.source}</p>
              </div>
              <Badge className={classificationClasses(feature.classification)}>{formatToken(feature.classification)}</Badge>
            </div>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-950">Permission:</span> {feature.permissionModel}</p>
              <p><span className="font-semibold text-slate-950">Readiness:</span> {feature.readiness}</p>
            </div>
            <p className="mt-4 rounded-2xl border border-slate-100 bg-white p-3 text-xs leading-5 text-slate-500">{feature.reviewNote}</p>
          </article>
        ))}
      </div>
    </CompliancePanel>
  );
}

function AuditReadinessPanel() {
  return (
    <CompliancePanel title="Audit readiness panel" subtitle="Static audit readiness for policy decisions, provider events, exports, and future retention jobs.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {complianceMockData.auditReadinessItems.map((item) => (
          <article key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-950">{item.label}</p>
                <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">{item.value}</p>
              </div>
              <Badge className={toneClasses(item.tone)}>{item.status}</Badge>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">{item.description}</p>
          </article>
        ))}
      </div>
    </CompliancePanel>
  );
}

function EnterpriseComplianceTable() {
  return (
    <CompliancePanel title="Enterprise compliance table" subtitle="Control inventory for domain, classification, source policy, permission scope, audit status, owner, and required action.">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Control</th>
                <th className="px-4 py-3">Domain</th>
                <th className="px-4 py-3">Classification</th>
                <th className="px-4 py-3">Source policy</th>
                <th className="px-4 py-3">Permission scope</th>
                <th className="px-4 py-3">Audit status</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {complianceMockData.tableRows.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="px-4 py-4 font-semibold text-slate-950">{row.control}</td>
                  <td className="px-4 py-4 text-slate-600">{row.domain}</td>
                  <td className="px-4 py-4">
                    <Badge className={classificationClasses(row.classification)}>{formatToken(row.classification)}</Badge>
                  </td>
                  <td className="px-4 py-4 text-slate-600">{row.sourcePolicy}</td>
                  <td className="px-4 py-4 text-slate-600">{row.permissionScope}</td>
                  <td className="px-4 py-4 text-slate-600">{row.auditStatus}</td>
                  <td className="px-4 py-4 text-slate-600">{row.owner}</td>
                  <td className="max-w-xs px-4 py-4 text-slate-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CompliancePanel>
  );
}

function ComplianceNotice() {
  const notice = complianceMockData.notice;

  return (
    <CompliancePanel title={notice.title} subtitle="Official APIs, licensed providers, connected/owned permissions, and public/professional intelligence framing only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{notice.body}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Official Meta APIs and connected/owned account permissions are the default safe path.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Public/professional intelligence requires provenance, confidence, freshness, and policy metadata.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Licensed-provider-only signals require compliant provider approval before activation.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {notice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </CompliancePanel>
  );
}

export function CompliancePage() {
  return (
    <div className="space-y-6">
      <ComplianceHeader />
      <KpiCards />
      <PolicyGatePanels />
      <DataGovernancePanels />
      <FeaturePolicyCards />
      <AuditReadinessPanel />
      <EnterpriseComplianceTable />
      <ComplianceNotice />
    </div>
  );
}