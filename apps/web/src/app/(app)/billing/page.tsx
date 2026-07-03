import { BillingPage } from "@/components/billing/billing-page";

export default function Page() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900 shadow-sm shadow-amber-100/70">
        <p className="font-semibold text-amber-950">Preview-only billing boundary</p>
        <p className="mt-1">
          Plan comparison, usage limits, invoices, provider costs, and billing actions are static Alpha previews. No billing action runs in Alpha, no payment processor is connected, and no invoice is generated or downloaded.
        </p>
      </section>
      <BillingPage />
    </div>
  );
}
