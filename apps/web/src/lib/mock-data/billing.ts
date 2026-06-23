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
  { label: "Confidence", value: "High demo fidelity", tone: "success" },
  { label: "Freshness", value: "Static preview", tone: "neutral" },
  { label: "Integrations", value: "No payment processor", tone: "warning" },
];

export const billingKpiCards: BillingKpiCard[] = [
  {
    label: "Current plan",
    value: "Enterprise",
    change: "Mock active",
    description: "Enterprise Intelligence plan preview with no live subscription state.",
    tone: "success",
  },
  {
    label: "Monthly usage",
    value: "68%",
    change: "+9% vs preview",
    description: "Combined mock usage across accounts, reports, exports, alerts, and provider sync credits.",
    tone: "info",
  },
  {
    label: "Accounts quota",
    value: "84 / 125",
    change: "41 available",
    description: "Monitored professional account capacity placeholder for workspace planning.",
    tone: "success",
  },
  {
    label: "Provider credits",
    value: "18.4k",
    change: "Future control",
    description: "Licensed provider enrichment credit usage shown as mock-only billing telemetry.",
    tone: "warning",
  },
  {
    label: "Unpaid invoices",
    value: "0",
    change: "No live charges",
    description: "Invoice cards are static placeholders and do not represent payable balances.",
    tone: "success",
  },
  {
    label: "Review items",
    value: "3",
    change: "Policy review",
    description: "Provider costs, quota changes, and renewal notices require future backend workflows.",
    tone: "purple",
  },
];

export const currentPlan: CurrentPlan = {
  name: "Enterprise Intelligence",
  status: "Mock active",
  renewalDate: "2026-09-01 placeholder",
  seats: "27 of 40 seats assigned",
  workspaces: "4 client workspaces included",
  paymentNotice: "No live payment processor is connected; this panel cannot create charges, plan changes, or subscription updates.",
  features: [
    "Connected professional account analytics",
    "Governed exports and report scheduling",
    "Source readiness and policy review placeholders",
    "Licensed provider cost review before activation",
  ],
};

export const usageQuotas: UsageQuota[] = [
  {
    id: "monitored-accounts",
    label: "Monitored accounts",
    used: "84",
    limit: "125",
    percent: 67,
    description: "Connected professional accounts and approved business discovery profiles only.",
    tone: "success",
  },
  {
    id: "reports-exports",
    label: "Reports and exports",
    used: "312",
    limit: "500",
    percent: 62,
    description: "Governed report generation and CSV export quota preview.",
    tone: "info",
  },
  {
    id: "provider-sync-credits",
    label: "Provider sync credits",
    used: "18.4k",
    limit: "30k",
    percent: 61,
    description: "Future licensed provider enrichment credits; disabled until provider configuration exists.",
    tone: "warning",
  },
  {
    id: "alert-rules",
    label: "Alert rules",
    used: "46",
    limit: "75",
    percent: 61,
    description: "Workspace alert rules and notification routing placeholders.",
    tone: "purple",
  },
  {
    id: "api-requests",
    label: "API requests placeholder",
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
    invoiceNumber: "INV-MOCK-2026-006",
    amount: "$12,400",
    status: "Preview only",
    period: "June 2026",
    paymentMethod: "Card ending 4242 placeholder",
    recommendedAction: "Review mock allocation by workspace; no payment can be collected here.",
    tone: "info",
  },
  {
    id: "invoice-2026-05",
    invoiceNumber: "INV-MOCK-2026-005",
    amount: "$12,400",
    status: "Mock paid",
    period: "May 2026",
    paymentMethod: "Invoice terms placeholder",
    recommendedAction: "Archive when audit-ready billing history is connected later.",
    tone: "success",
  },
  {
    id: "invoice-provider-review",
    invoiceNumber: "PROVIDER-COST-REVIEW",
    amount: "Usage based",
    status: "Needs review",
    period: "Future provider billing",
    paymentMethod: "Not connected",
    recommendedAction: "Approve licensed provider configuration before any provider cost attribution.",
    tone: "warning",
  },
];

export const licensedProviderCost: LicensedProviderCost = {
  title: "Licensed provider cost placeholder",
  provider: "Compliant enrichment partner pending approval",
  usage: "18.4k mock enrichment credits",
  estimatedCost: "$2,180 preview estimate",
  policy: "licensed_provider_only",
  status: "Future provider billing",
  notes: [
    "Provider costs require a licensed provider configuration before activation.",
    "No live provider invoice, usage meter, or payment processor is connected.",
    "Procurement, provenance, rate-limit, and compliance review are required first.",
  ],
};

export const billingTableRows: BillingTableRow[] = [
  {
    id: "row-plan",
    item: "Enterprise Intelligence plan",
    type: "Subscription placeholder",
    period: "Monthly preview",
    amountOrUsage: "$12,400",
    status: "Mock active",
    owner: "Finance Operations",
    policy: "official_safe",
    action: "Review plan summary only",
  },
  {
    id: "row-accounts",
    item: "Monitored accounts quota",
    type: "Usage quota",
    period: "Current cycle",
    amountOrUsage: "84 / 125 accounts",
    status: "Healthy",
    owner: "Workspace Admin",
    policy: "official_safe_limited",
    action: "Plan quota request workflow later",
  },
  {
    id: "row-exports",
    item: "Reports and exports",
    type: "Usage quota",
    period: "Current cycle",
    amountOrUsage: "312 / 500 runs",
    status: "On track",
    owner: "Data Operations",
    policy: "official_safe",
    action: "Keep governed export audit trail",
  },
  {
    id: "row-provider",
    item: "Provider enrichment credits",
    type: "Licensed provider cost",
    period: "Future billing",
    amountOrUsage: "18.4k / 30k credits",
    status: "Needs review",
    owner: "Compliance Admin",
    policy: "licensed_provider_only",
    action: "Require provider approval",
  },
  {
    id: "row-alerts",
    item: "Alert rules",
    type: "Workspace usage",
    period: "Current cycle",
    amountOrUsage: "46 / 75 rules",
    status: "Healthy",
    owner: "RevOps Intelligence",
    policy: "official_safe",
    action: "Review routing rules",
  },
  {
    id: "row-api",
    item: "API request metering",
    type: "Future backend meter",
    period: "Placeholder",
    amountOrUsage: "1.2M / 2M requests",
    status: "Preview only",
    owner: "Platform Operations",
    policy: "consented_only",
    action: "Connect backend meter later",
  },
];

export const billingComplianceNotice: BillingComplianceNotice = {
  title: "Mock-only billing compliance notice",
  body: "Billing, plan, quota, usage, invoice, and provider-cost data on this page is static mock data until a backend billing service and payment processor are explicitly connected in a future batch.",
  bullets: [
    "No live charges, refunds, payment collection, or payment method updates are performed.",
    "No live plan changes, subscription changes, quota purchases, or invoice payments are performed.",
    "Licensed provider costs require compliant provider configuration, provenance review, and policy approval first.",
    "Audit-ready billing history, invoices, and workspace cost allocation will come later through backend routes.",
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