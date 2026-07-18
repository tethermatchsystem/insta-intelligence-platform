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

const alphaBillingSafetyBadges = [
  "Preview-only billing",
  "No billing action runs in Alpha",
  "No payment processor is connected in Alpha",
  "No invoice is generated or downloaded in Alpha",
  "No backend action runs from this page",
  "Requires official source connection",
];

const commercialAdminSummary = [
  {
    label: "Billing owner",
    value: "Finance admin preview",
    detail: "Static owner label for commercial review. No team role, billing contact, or payment record is saved.",
    tone: "info" as BillingTone,
  },
  {
    label: "Subscription posture",
    value: "Private beta plan",
    detail: "Plan packaging is mock-only and cannot be upgraded, downgraded, renewed, canceled, or enforced from Alpha UI.",
    tone: "purple" as BillingTone,
  },
  {
    label: "Payment boundary",
    value: "Processor disconnected",
    detail: "No checkout, card collection, invoice payment, billing portal, tax calculation, or payment processor session exists.",
    tone: "warning" as BillingTone,
  },
];

const billingUsageMeters = [
  {
    label: "Report studio credits",
    used: "18",
    limit: "50",
    percent: 36,
    note: "Mock entitlement meter for future executive report generation; no quota enforcement runs.",
  },
  {
    label: "Export packages",
    used: "7",
    limit: "25",
    percent: 28,
    note: "Static packaging meter only; no export files, downloads, or object storage writes exist.",
  },
  {
    label: "Provider review credits",
    used: "0",
    limit: "Approval required",
    percent: 0,
    note: "Licensed-provider costs remain disabled until procurement, provider approval, and policy review are complete.",
  },
];

const disabledBillingAdminActions = ["Upgrade plan", "Open checkout", "Update payment method", "Download invoice", "Apply credits", "Change subscription"];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function BillingPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
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
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only billing</Badge>
            {billingMockData.headerBadges.map((badge) => (
              <Badge key={`${badge.label}-${badge.value}`} className="bg-white/10 text-slate-200 ring-white/15">
                {badge.label}: {badge.value}
              </Badge>
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Subscription, usage, and commercial admin</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">Billing and usage admin preview</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
            Review mock plan packaging, usage preview, invoice preview, provider credit placeholders, and client/workspace billing planning. No payment method is collected in Alpha and no subscription changes are saved in Alpha.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaBillingSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha billing boundary</p>
          <p className="mt-1">
            This page cannot charge cards, collect payments, change plans, update subscriptions, generate invoices, download invoices, or write billing records.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Payment processor disconnected</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Billing backend required</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function KpiCards() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
      {billingMockData.kpiCards.map((kpi) => (
        <div key={kpi.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
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

function CommercialAdminPreview() {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <section className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm shadow-violet-100/70">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Commercial admin workspace</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Subscription owner, usage posture, and payment boundary</h2>
            <p className="mt-1 max-w-4xl text-sm leading-6 text-slate-500">
              Static billing operations cards show who would review the account commercially, what usage meters would mean, and which payment/security controls are intentionally unavailable in Alpha.
            </p>
          </div>
          <Badge className="bg-rose-50 text-rose-700 ring-rose-100">Payment actions disabled</Badge>
        </div>

        <div className="grid gap-3 lg:grid-cols-3">
          {commercialAdminSummary.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
              <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
              <Badge className={`${toneClasses(item.tone)} mt-3 inline-flex`}>Alpha preview</Badge>
              <p className="mt-3 text-xs leading-5 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {billingUsageMeters.map((meter) => (
            <article key={meter.label} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-slate-950">{meter.label}</h3>
                  <p className="mt-1 text-xs text-slate-500">{meter.used} of {meter.limit} mock allowance</p>
                </div>
                <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{meter.percent}%</Badge>
              </div>
              <div className="mt-4 h-2 rounded-full bg-slate-200">
                <div className="h-2 rounded-full bg-violet-600" style={{ width: `${meter.percent}%` }} />
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500">{meter.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-violet-50 via-white to-amber-50 p-5 shadow-sm shadow-amber-100/70">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">What can the user safely do next?</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Review commercial assumptions only</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Safely review plan packaging, owner responsibilities, mock usage meters, invoice placeholders, and procurement/security notes. Real checkout, payment updates, invoice downloads, billing portals, and subscription writes remain disabled.
        </p>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Disabled billing administration actions">
          {disabledBillingAdminActions.map((action) => (
            <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
              {action}: disabled
            </span>
          ))}
        </div>
        <div className="mt-5 rounded-2xl border border-amber-200 bg-white/70 p-4 text-xs leading-5 text-amber-900">
          No payment processor, checkout session, invoice generator, customer portal, tax engine, subscription backend, or provider billing integration is connected in Alpha.
        </div>
      </section>
    </section>
  );
}

function CurrentPlanPanel() {
  const plan = billingMockData.currentPlan;

  return (
    <BillingPanel title="Mock plan packaging and subscription preview" subtitle="Private beta pricing preview with no live payment, subscription, quota enforcement, or saved plan changes.">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl bg-slate-950 p-5 text-white">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Mock plan packaging</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">{plan.name}</h3>
            </div>
            <Badge className="bg-emerald-400/10 text-emerald-200 ring-emerald-300/20">{plan.status}</Badge>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Renewal preview</p>
              <p className="mt-2 text-sm font-semibold">{plan.renewalDate}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Mock seats</p>
              <p className="mt-2 text-sm font-semibold">{plan.seats}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <p className="text-xs uppercase tracking-wide text-slate-400">Mock workspaces</p>
              <p className="mt-2 text-sm font-semibold">{plan.workspaces}</p>
            </div>
          </div>
          <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-4 text-sm leading-6 text-amber-100">{plan.paymentNotice}</p>
          <div className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              disabled
              aria-disabled="true"
              className="w-full cursor-not-allowed rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-slate-400 sm:w-auto"
            >
              Plan changes disabled
            </button>
            <p className="text-xs leading-5 text-slate-300">No billing action runs in Alpha.</p>
          </div>
        </div>

        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
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
    <BillingPanel title="Usage preview and mock usage limits" subtitle="Static mock usage limit meters for monitored accounts, reports, provider credits, alerts, and future API metering; no usage metering backend runs in Alpha.">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {billingMockData.usageQuotas.map((quota) => (
          <article key={quota.id} className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-950">{quota.label}</h3>
                <p className="mt-1 text-xs text-slate-500">{quota.used} of {quota.limit} mock limit</p>
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
    <section className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Invoice and payment placeholders</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Static invoice records and payment boundary</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Mock invoice cards for review only. No invoice is generated or downloaded in Alpha, and no payment processor is connected.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only billing</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No invoice download</Badge>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-3">
        {billingMockData.invoiceCards.map((invoice) => (
          <article key={invoice.id} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Invoice preview</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-950">{invoice.invoiceNumber}</h3>
              </div>
              <div className="flex flex-wrap gap-2 sm:justify-end">
                <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only invoice</Badge>
                <Badge className={toneClasses(invoice.tone)}>{invoice.status}</Badge>
              </div>
            </div>
            <p className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">{invoice.amount}</p>
            <div className="mt-4 grid gap-3 text-sm text-slate-600">
              <p><span className="font-semibold text-slate-950">Period:</span> {invoice.period}</p>
              <p><span className="font-semibold text-slate-950">Payment note:</span> {invoice.paymentMethod}</p>
            </div>
            <p className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 text-xs leading-5 text-slate-500">{invoice.recommendedAction}</p>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-full cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 sm:w-auto"
                >
                  Invoice download disabled
                </button>
                <p className="text-xs leading-5 text-slate-500">No invoice is generated or downloaded in Alpha.</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function LicensedProviderCostPanel() {
  const provider = billingMockData.licensedProviderCost;

  return (
    <BillingPanel title={provider.title} subtitle="Provider enrichment usage is a mock-only preview; licensed provider approval and payment processor integration are required before billing controls exist.">
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
            <Badge className="bg-white/70 text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
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
    <BillingPanel title="Enterprise billing preview table" subtitle="Static mock billing inventory for item, type, preview period, preview amount or mock usage, status, owner, policy, and disabled Alpha guidance copy. No billing backend action runs from this table.">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <caption className="sr-only">Preview-only enterprise billing table with no Alpha payment processor action.</caption>
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Item</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Period</th>
                <th className="px-4 py-3">Preview amount or mock usage</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Owner</th>
                <th className="px-4 py-3">Policy</th>
                <th className="px-4 py-3">Disabled Alpha guidance</th>
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
    <BillingPanel title={notice.title} subtitle="Preview-only billing: no live charges, plan changes, payment updates, upgrade actions, subscription changes, invoices, or provider billing actions are available from this page.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{notice.body}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">No billing action runs in Alpha, no payment processor is connected in Alpha, and no backend action runs from this page.</p>
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Billing preview requires backend billing routes and payment processor integration before any real payment behavior exists.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Mock plan packaging and quota controls are future workflow placeholders with no live backend writes.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No invoice is generated or downloaded in Alpha. Provider costs require licensed provider configuration, procurement approval, and policy review.</p>
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
    <div className="space-y-8">
      <BillingHeader />
      <KpiCards />
      <CommercialAdminPreview />
      <CurrentPlanPanel />
      <UsageQuotaPanels />
      <InvoiceCards />
      <LicensedProviderCostPanel />
      <EnterpriseBillingTable />
      <ComplianceNotice />
    </div>
  );
}