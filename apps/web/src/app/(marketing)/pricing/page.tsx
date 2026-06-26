import { DashboardPageScaffold } from "@/components/dashboards/page-scaffold";

export default function Page() {
  return (
    <DashboardPageScaffold
      title="Pricing preview"
      description="Private beta plan packaging for official-source intelligence. Billing is preview-only, no payment method is collected in Alpha, and activation requires official source connection plus provider approval."
      gated={false}
      gateStatus="official_safe"
    />
  );
}
