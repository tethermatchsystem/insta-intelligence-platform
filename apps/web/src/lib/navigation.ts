export type NavigationItem = {
  label: string;
  href: string;
  description: string;
};

export type NavigationGroup = {
  label: "Intelligence / workspace overview" | "Account intelligence" | "Signal previews" | "Operations / governance";
  summary: string;
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Intelligence / workspace overview",
    summary: "Portfolio command map for the static Alpha workspace.",
    items: [
      { label: "Dashboard", href: "/dashboard", description: "Workspace overview · static Alpha metrics" },
    ],
  },
  {
    label: "Account intelligence",
    summary: "Owned, public, consented, or approved-source account review surfaces.",
    items: [
      { label: "Accounts", href: "/accounts", description: "Connected-account preview workspace" },
      { label: "Creators", href: "/creators", description: "Public/approved-source creator review" },
      { label: "Competitors", href: "/competitors", description: "Public benchmark peer-set preview" },
    ],
  },
  {
    label: "Signal previews",
    summary: "Static signal planning only; no monitoring job or live query runs.",
    items: [
      { label: "Hashtags", href: "/hashtags", description: "Public topic planning preview" },
      { label: "Mentions", href: "/mentions", description: "Owned/public mention triage preview" },
      { label: "Alerts", href: "/alerts", description: "Preview-only rules and triage" },
    ],
  },
  {
    label: "Operations / governance",
    summary: "Output, provider readiness, billing, settings, and policy previews.",
    items: [
      { label: "Reports", href: "/reports", description: "Stakeholder report previews" },
      { label: "Exports", href: "/exports", description: "Mock CSV, JSON, audit packages" },
      { label: "Data Sources", href: "/data-sources", description: "Official/provider readiness preview" },
      { label: "Billing preview", href: "/billing", description: "Mock plans, quotas, invoices" },
      { label: "Settings", href: "/settings", description: "Static workspace administration" },
      { label: "Compliance", href: "/settings/compliance", description: "Policy and source-gate preview" },
    ],
  },
];