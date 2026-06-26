export type BillingTone = "success" | "warning" | "info" | "neutral" | "danger" | "purple";

export type BillingPolicy = "official_safe" | "official_safe_limited" | "licensed_provider_only" | "consented_only";

export type BillingHeaderBadge = {
  label: string;
  value: string;
  tone: BillingTone;
};

export type BillingKpiCard = {
  label: string;
  value: string;
  change: string;
  description: string;
  tone: BillingTone;
};

export type CurrentPlan = {
  name: string;
  status: string;
  renewalDate: string;
  seats: string;
  workspaces: string;
  paymentNotice: string;
  features: string[];
};

export type UsageQuota = {
  id: string;
  label: string;
  used: string;
  limit: string;
  percent: number;
  description: string;
  tone: BillingTone;
};

export type InvoiceCard = {
  id: string;
  invoiceNumber: string;
  amount: string;
  status: string;
  period: string;
  paymentMethod: string;
  recommendedAction: string;
  tone: BillingTone;
};

export type LicensedProviderCost = {
  title: string;
  provider: string;
  usage: string;
  estimatedCost: string;
  policy: BillingPolicy;
  status: string;
  notes: string[];
};

export type BillingTableRow = {
  id: string;
  item: string;
  type: string;
  period: string;
  amountOrUsage: string;
  status: string;
  owner: string;
  policy: BillingPolicy;
  action: string;
};

export type BillingComplianceNotice = {
  title: string;
  body: string;
  bullets: string[];
};

export const billingHeaderBadges: BillingHeaderBadge[] = [
  { label: "Source", value: "Mock billing ledger", tone: "info" },
  { label: "Confidence", value: "Mock preview only", tone: "success" },
  { label: "Freshness", value: "Static preview", tone: "neutral" },
  { label: "Integrations", value: "No payment processor", tone: "warning" },
  { label: "Upgrade", value: "Disabled in Alpha", tone: "warning" },
];

export const billingKpiCards: BillingKpiCard[] = [
  {
    label: "Mock plan packaging",
    value: "Enterprise preview",
    change: "Private beta pricing preview",
    description: "Mock plan packaging preview with no live subscription state saved.",
    tone: "success",
  },
  {
    label: "Usage preview",
    value: "68%",
    change: "Mock usage limit",
    description: "Combined mock usage limit preview across accounts, reports, exports, alerts, and provider credits.",
    tone: "info",
  },
  {
    label: "Mock account limit",
    value: "84 / 125",
    change: "Mock availability",
    description: "Monitored professional account capacity preview; no plan enforcement exists in Alpha.",
    tone: "success",
  },
  {
    label: "Provider credit preview",
    value: "18.4k",
    change: "Requires provider integration",
    description: "Licensed provider enrichment credit preview shown as mock-only billing telemetry.",
    tone: "warning",
  },
  {
    label: "Invoice preview",
    value: "0",
    change: "Preview-only invoice",
    description: "Invoice cards are static placeholders and do not represent payable balances.",
    tone: "success",
  },
  {
    label: "Backend requirements",
    value: "3",
    change: "Requires billing backend",
    description: "Provider costs, quota changes, and renewal notices require future backend workflows.",
    tone: "purple",
  },
];

export const currentPlan: CurrentPlan = {
  name: "Enterprise Intelligence preview",
  status: "Mock plan packaging",
  renewalDate: "Private beta renewal preview — not scheduled",
  seats: "27 of 40 mock seats assigned",
  workspaces: "4 mock client workspaces shown",
  paymentNotice: "No payment method is collected in Alpha. Upgrade disabled in Alpha; no subscription changes are saved and payment processor integration is required.",
  features: [
    "Connected professional account analytics preview",
    "Governed exports and report scheduling previews",
    "Source readiness and policy review placeholders",
    "Licensed provider cost review before any activation",
  ],
};

export const usageQuotas: UsageQuota[] = [
  {
    id: "monitored-accounts",
    label: "Mock monitored accounts limit",
    used: "84",
    limit: "125",
    percent: 67,
    description: "Connected professional accounts and approved business discovery profiles only; no live plan enforcement.",
    tone: "success",
  },
  {
    id: "reports-exports",
    label: "Mock report/export limit",
    used: "312",
    limit: "500",
    percent: 62,
    description: "Mock report/export packaging limit preview; requires backend jobs before enforcement.",
    tone: "info",
  },
  {
    id: "provider-sync-credits",
    label: "Provider credit preview",
    used: "18.4k",
    limit: "30k",
    percent: 61,
    description: "Future licensed provider enrichment credits; disabled until provider configuration exists.",
    tone: "warning",
  },
  {
    id: "alert-rules",
    label: "Mock alert rule limit",
    used: "46",
    limit: "75",
    percent: 61,
    description: "Workspace alert rule and notification routing placeholders; no saved usage enforcement.",
    tone: "purple",
  },
  {
    id: "api-requests",
    label: "API metering preview",
    used: "1.2M",
    limit: "2M",
    percent: 60,
    description: "Future API metering display; no external billing backend is connected.",
    tone: "neutral",
  },
];

export const invoiceCards: InvoiceCard[] = [
  {
    id: "invoice-2026-06",
    invoiceNumber: "PREVIEW-INVOICE-2026-006",
    amount: "Preview $12,400",
    status: "Preview-only invoice",
    period: "June 2026 preview period",
    paymentMethod: "No payment method is collected in Alpha",
    recommendedAction: "Review mock allocation by workspace; no payment can be collected or saved here.",
    tone: "info",
  },
  {
    id: "invoice-2026-05",
    invoiceNumber: "PREVIEW-INVOICE-2026-005",
    amount: "Preview $12,400",
    status: "Preview-only invoice",
    period: "May 2026 preview period",
    paymentMethod: "Requires payment processor integration",
    recommendedAction: "Requires billing backend before archival or audit-ready billing history exists.",
    tone: "neutral",
  },
  {
    id: "invoice-provider-review",
    invoiceNumber: "PROVIDER-COST-REVIEW",
    amount: "Preview usage estimate",
    status: "Requires provider approval",
    period: "Future provider billing preview",
    paymentMethod: "Requires billing backend",
    recommendedAction: "Approve licensed provider configuration before any provider cost attribution or billing integration.",
    tone: "warning",
  },
];

export const licensedProviderCost: LicensedProviderCost = {
  title: "Licensed provider cost preview",
  provider: "Compliant enrichment partner preview",
  usage: "18.4k mock provider credit usage",
  estimatedCost: "Preview-only $2,180 estimate",
  policy: "licensed_provider_only",
  status: "Requires licensed provider approval",
  notes: [
    "Provider costs require a licensed provider configuration before activation.",
    "No live provider invoice, usage meter, payment processor, or subscription change is connected.",
    "Procurement, provenance, rate-limit, and compliance review are required first.",
  ],
};

export const billingTableRows: BillingTableRow[] = [
  {
    id: "row-plan",
    item: "Enterprise Intelligence plan preview",
    type: "Mock plan packaging",
    period: "Private beta pricing preview",
    amountOrUsage: "Preview $12,400 package",
    status: "Upgrade disabled in Alpha",
    owner: "Finance Operations",
    policy: "official_safe",
    action: "Requires billing backend and payment processor integration",
  },
  {
    id: "row-accounts",
    item: "Mock monitored accounts limit",
    type: "Mock usage limit",
    period: "Alpha preview cycle",
    amountOrUsage: "84 / 125 mock account limit",
    status: "Mock usage preview",
    owner: "Workspace Admin",
    policy: "official_safe_limited",
    action: "Quota changes are not saved in Alpha",
  },
  {
    id: "row-exports",
    item: "Report/export usage preview",
    type: "Mock usage limit",
    period: "Alpha preview cycle",
    amountOrUsage: "312 / 500 mock runs",
    status: "Mock usage preview",
    owner: "Data Operations",
    policy: "official_safe",
    action: "Requires backend jobs and audit records",
  },
  {
    id: "row-provider",
    item: "Provider enrichment credits",
    type: "Licensed provider preview cost",
    period: "Requires provider approval",
    amountOrUsage: "18.4k / 30k mock credits",
    status: "Requires licensed provider approval",
    owner: "Compliance Admin",
    policy: "licensed_provider_only",
    action: "Requires provider approval before attribution",
  },
  {
    id: "row-alerts",
    item: "Alert rule usage preview",
    type: "Mock usage limit",
    period: "Alpha preview cycle",
    amountOrUsage: "46 / 75 mock rules",
    status: "Mock usage preview",
    owner: "RevOps Intelligence",
    policy: "official_safe",
    action: "Preview routing rules only",
  },
  {
    id: "row-api",
    item: "Mock API request metering",
    type: "Future backend meter",
    period: "Placeholder",
    amountOrUsage: "1.2M / 2M mock requests",
    status: "Requires billing backend",
    owner: "Platform Operations",
    policy: "consented_only",
    action: "Connect backend meter later",
  },
];

export const billingComplianceNotice: BillingComplianceNotice = {
  title: "Alpha billing preview compliance notice",
  body: "Billing, mock plan packaging, usage preview, invoice preview, and provider-cost data on this page is static mock data until a backend billing service and payment processor are explicitly connected in a future batch.",
  bullets: [
    "No live charges, refunds, payment collection, or payment method updates are performed or saved.",
    "No live plan changes, subscription changes, quota purchases, upgrade actions, or invoice payments are performed.",
    "Licensed provider costs require compliant provider configuration, provenance review, and policy approval first.",
    "Preview-only invoices, audit-ready billing history, and workspace cost allocation require future backend routes.",
  ],
};

export const billingMockData = {
  headerBadges: billingHeaderBadges,
  kpiCards: billingKpiCards,
  currentPlan,
  usageQuotas,
  invoiceCards,
  licensedProviderCost,
  tableRows: billingTableRows,
  complianceNotice: billingComplianceNotice,
};