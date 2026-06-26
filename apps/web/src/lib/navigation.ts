export type NavigationItem = {
  label: string;
  href: string;
  description: string;
};

export type NavigationGroup = {
  label: "Intelligence" | "Signal previews" | "Operations" | "Workspace";
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Intelligence",
    items: [
      { label: "Dashboard", href: "/dashboard", description: "Executive workspace overview" },
      { label: "Accounts", href: "/accounts", description: "Connection preview workspace" },
      { label: "Creators", href: "/creators", description: "Creator discovery and safe vetting" },
      { label: "Competitors", href: "/competitors", description: "Public benchmark peer sets" },
    ],
  },
  {
    label: "Signal previews",
    items: [
      { label: "Hashtags", href: "/hashtags", description: "Public topic signal planning" },
      { label: "Mentions", href: "/mentions", description: "Owned/public mention previews" },
      { label: "Alerts", href: "/alerts", description: "Mock rules and triage states" },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Reports", href: "/reports", description: "Preview stakeholder outputs" },
      { label: "Exports", href: "/exports", description: "Mock CSV, JSON, audit packages" },
      { label: "Data Sources", href: "/data-sources", description: "Official/provider readiness" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "Billing preview", href: "/billing", description: "Mock plans, quotas, invoices" },
      { label: "Settings", href: "/settings", description: "Mock workspace administration" },
      { label: "Compliance", href: "/settings/compliance", description: "Feature policy and source gates" },
    ],
  },
];