import {
  billingMockData,
  type BillingPolicy,
  type BillingTone,
} from "@/lib/mock-data/billing";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: BillingTone) {
  const tones: Record<BillingTone, string> = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warning: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    danger: "bg-rose-50 text-rose-700 ring-rose-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
  };

  return tones[tone];
}

function policyClasses(policy: BillingPolicy) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-cyan-50 text-cyan-700 ring-cyan-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function BillingPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function BillingHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {billingMockData.headerBadges.map((badge) => (
              <Badge key={`${badge.label}-${badge.value}`} className={toneClasses(badge.tone)}>
                {badge.label}: {badge.value}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Billing operations</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">Billing</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
            Review plan, quotas, usage, invoices, provider credits, and client/workspace billing management in a premium mock-only billing workspace.
          </p>
        </div>
        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 xl:w-[30rem]">
          <p className="font-semibold text-amber-950">No live payment processor connected</p>
          <p className="mt-1">
            This page cannot charge cards, collect payments, change plans, update subscriptions, or write billing records. All values are static frontend mock data.
          </p>
        </div>
      </div>
    </header>
  );
}

function KpiCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {billingMockData.kpiCards.map((kpi) => (
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

function CurrentPlanPanel() {
  const plan = billingMockData.currentPlan;

  return (
    <BillingPanel title="Current plan and subscription placeholder" subtitle="Static plan summary with no live payment, subscription, or quota update controls.">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-slate-950 p-5 text-white">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Plan name</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{plan.name}</h3>
            </div>
            <Badge className="bg-emerald-400/10 text-emerald-200 ring-emerald-300/20">{plan.status}</Badge>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Renewal</p>
              <p className="mt-2 text-sm font-semibold">{plan.renewalDate}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Seats</p>
              <p className="mt-2 text-sm font-semibold">{plan.seats}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Workspaces</p>
              <p className="mt-2 text-sm font-semibold">{plan.workspaces}</p>
            </div>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">{plan.paymentNotice}</p>
        </div>

        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </BillingPanel>
  );
}

function UsageQuotaPanels() {
  return (
    <BillingPanel title="Usage and quota panels" subtitle="Mock quota utilization for monitored accounts, reports, provider credits, alerts, and future API usage.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {billingMockData.usageQuotas.map((quota) => (
          <article key={quota.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-950">{quota.label}</h3>
                <p className="mt-1 text-xs text-slate-500">{quota.used} of {quota.limit}</p>
              </div>
              <Badge className={toneClasses(quota.tone)}>{quota.percent}%</Badge>
            </div>
            <div className="mt-4 h-2 rounded-full bg-slate-200">
              <div className="h-2 rounded-full bg-slate-950" style={{ width: `${quota.percent}%` }} />
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">{quota.description}</p>
          </article>
        ))}
      </div>
    </BillingPanel>
  );
}

function InvoiceCards() {
  return (
    <section className="grid gap-4 xl:grid-cols-3">
      {billingMockData.invoiceCards.map((invoice) => (
        <article key={invoice.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Invoice placeholder</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">{invoice.invoiceNumber}</h3>
            </div>
            <Badge className={toneClasses(invoice.tone)}>{invoice.status}</Badge>
          </div>
          <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">{invoice.amount}</p>
          <div className="mt-4 grid gap-3 text-sm text-slate-600">
            <p><span className="font-semibold text-slate-950">Period:</span> {invoice.period}</p>
            <p><span className="font-semibold text-slate-950">Payment method:</span> {invoice.paymentMethod}</p>
          </div>
          <p className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs leading-5 text-slate-500">{invoice.recommendedAction}</p>
        </article>
      ))}
    </section>
  );
}

function LicensedProviderCostPanel() {
  const provider = billingMockData.licensedProviderCost;

  return (
    <BillingPanel title={provider.title} subtitle="Provider enrichment usage is a mock-only preview for future licensed provider billing controls.">
      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Future provider billing</p>
            <h3 className="mt-2 text-lg font-semibold text-amber-950">{provider.provider}</h3>
            <p className="mt-2 text-sm leading-6 text-amber-900">{provider.usage} · {provider.estimatedCost}</p>
          </div>
          <div className="flex flex-wrap gap-2 xl:justify-end">
            <Badge className={policyClasses(provider.policy)}>{formatToken(provider.policy)}</Badge>
            <Badge className="bg-white/70 text-amber-800 ring-amber-200">{provider.status}</Badge>
          </div>
        </div>
        <ul className="mt-4 grid gap-3 lg:grid-cols-3">
          {provider.notes.map((note) => (
            <li key={note} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{note}</li>
          ))}
        </ul>
      </div>
    </BillingPanel>
  );
}

function EnterpriseBillingTable() {
  return (
    <BillingPanel title="Enterprise billing table" subtitle="Static billing inventory for item, type, period, amount or usage, status, owner, policy, and recommended action.">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Period</th>
                <th className="px-4 py-3">Amount or Usage</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Policy</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {billingMockData.tableRows.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="px-4 py-4 font-semibold text-slate-950">{row.item}</td>
                  <td className="px-4 py-4 text-slate-600">{row.type}</td>
                  <td className="px-4 py-4 text-slate-600">{row.period}</td>
                  <td className="px-4 py-4 text-slate-600">{row.amountOrUsage}</td>
                  <td className="px-4 py-4 text-slate-600">{row.status}</td>
                  <td className="px-4 py-4 text-slate-600">{row.owner}</td>
                  <td className="px-4 py-4">
                    <Badge className={policyClasses(row.policy)}>{formatToken(row.policy)}</Badge>
                  </td>
                  <td className="max-w-xs px-4 py-4 text-slate-600">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </BillingPanel>
  );
}

function ComplianceNotice() {
  const notice = billingMockData.complianceNotice;

  return (
    <BillingPanel title={notice.title} subtitle="No live charges, plan changes, payment updates, or provider billing actions are available from this page.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{notice.body}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Billing state is mock-only until backend billing routes and a payment processor are connected.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Plan and quota controls are future workflow placeholders with no live backend writes.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Provider costs require licensed provider configuration, procurement approval, and policy review.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">Audit-ready billing history and real invoice records will be implemented later.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {notice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </BillingPanel>
  );
}

export function BillingPage() {
  return (
    <div className="space-y-6">
      <BillingHeader />
      <KpiCards />
      <CurrentPlanPanel />
      <UsageQuotaPanels />
      <InvoiceCards />
      <LicensedProviderCostPanel />
      <EnterpriseBillingTable />
      <ComplianceNotice />
    </div>
  );
}