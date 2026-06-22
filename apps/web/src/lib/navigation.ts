export type NavigationItem = {
  label: string;
  href: string;
  description: string;
};

export type NavigationGroup = {
  label: "Intelligence" | "Monitoring" | "Operations" | "Workspace";
  items: NavigationItem[];
};

export const navigationGroups: NavigationGroup[] = [
  {
    label: "Intelligence",
    items: [
      { label: "Dashboard", href: "/dashboard", description: "Executive workspace overview" },
      { label: "Accounts", href: "/accounts", description: "Connected and monitored accounts" },
      { label: "Creators", href: "/creators", description: "Creator discovery and vetting" },
      { label: "Competitors", href: "/competitors", description: "Benchmark tracked peer sets" },
    ],
  },
  {
    label: "Monitoring",
    items: [
      { label: "Hashtags", href: "/hashtags", description: "Campaign and UGC signals" },
      { label: "Mentions", href: "/mentions", description: "Inbound mention streams" },
      { label: "Alerts", href: "/alerts", description: "Rules and anomaly triage" },
    ],
  },
  {
    label: "Operations",
    items: [
      { label: "Reports", href: "/reports", description: "Scheduled stakeholder outputs" },
      { label: "Exports", href: "/exports", description: "CSV, JSON, and audit exports" },
      { label: "Data Sources", href: "/data-sources", description: "Provider freshness and coverage" },
    ],
  },
  {
    label: "Workspace",
    items: [
      { label: "Billing", href: "/billing", description: "Plan, quotas, and invoices" },
      { label: "Settings", href: "/settings", description: "Workspace administration" },
      { label: "Compliance", href: "/settings/compliance", description: "Feature policy and requests" },
    ],
  },
];