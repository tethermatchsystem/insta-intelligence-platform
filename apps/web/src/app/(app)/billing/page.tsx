import { BillingPage } from "@/components/billing/billing-page";

export default function Page() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 shadow-sm">
        <p className="font-semibold text-amber-950">Billing preview</p>
        <p className="mt-1">
          Plan comparison preview, usage limits are demo-only, and invoices are preview-only. Upgrade requires billing backend; no payment method is collected in Alpha.
        </p>
      </section>
      <BillingPage />
    </div>
  );
}
