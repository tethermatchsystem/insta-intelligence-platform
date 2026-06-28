import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing preview | Insta Intelligence Platform",
  description:
    "Alpha and private beta pricing preview for official-source Instagram intelligence. Billing is preview-only, no payment method is collected in Alpha, and subscriptions require future billing backend plus payment processor integration.",
};

const pricingPreviewPlans = [
  {
    name: "Alpha Preview",
    eyebrow: "Preview only",
    price: "Invitation review",
    description:
      "For early product reviewers validating official-source workflows before billing or subscription changes are enabled.",
    bullets: [
      "Alpha preview workspace",
      "Mock analytics and governance flows",
      "No payment method is collected in Alpha",
      "Requires official source connection for future data",
    ],
    note: "Billing is preview-only and no subscription changes are saved in Alpha.",
  },
  {
    name: "Agency Private Beta",
    eyebrow: "Private beta",
    price: "Scoped review",
    description:
      "For agencies planning multi-client intelligence operations with compliant provider review and team governance.",
    bullets: [
      "Client workspace planning preview",
      "Owned and connected account reporting concepts",
      "Requires provider approval where applicable",
      "Requires billing backend before subscription changes",
    ],
    note: "Future availability depends on official source readiness and approved provider coverage.",
  },
  {
    name: "Enterprise Review",
    eyebrow: "Governance review",
    price: "Custom review",
    description:
      "For larger teams evaluating compliance posture, source approvals, procurement, and private-beta rollout controls.",
    bullets: [
      "Compliance and audit planning preview",
      "Official-source and licensed-provider readiness review",
      "Requires payment processor integration for future billing",
      "Requires provider approval where applicable",
    ],
    note: "Enterprise packaging remains preview-only until backend, billing, and provider approvals exist.",
  },
];

const safetyItems = [
  "Billing is preview-only",
  "No payment method is collected in Alpha",
  "No subscription changes are saved in Alpha",
  "Requires billing backend",
  "Requires payment processor integration",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

const marketingLinks = [
  { href: "/", label: "Alpha home" },
  { href: "/pricing", label: "Open pricing preview" },
  { href: "/about", label: "About the Alpha" },
  { href: "/contact", label: "Contact preview" },
];

function MarketingLinkRow() {
  return (
    <nav aria-label="Public marketing preview links" className="rounded-3xl border border-slate-200 bg-white/95 p-4 text-sm shadow-sm shadow-slate-200/70">
      <div className="flex flex-wrap gap-3">
        {marketingLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium text-slate-500">No live Instagram data is collected in Alpha · No contact form is submitted in Alpha · Billing is preview-only · Requires official source connection · Requires provider approval</p>
    </nav>
  );
}

export default function Page() {
  return (
    <main className="space-y-8">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/80">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              Pricing preview · Private beta
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Pricing preview for compliance-first Instagram intelligence.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                These packages preview how Alpha and private-beta access may be organized for brands,
                agencies, and enterprise teams. Billing is preview-only, no payment method is collected in
                Alpha, and future access requires official source connection plus provider approval where
                applicable.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                Contact preview
              </Link>
              <Link href="/about" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                About the Alpha
              </Link>
              <Link href="/" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                Alpha home
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Billing safety</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Preview-only commercial flow</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Pricing content is informational for Alpha review. Subscription management, payment method
              collection, invoice generation, and plan changes require future backend and payment processor work.
            </p>
            <div className="mt-5 grid gap-2">
              {safetyItems.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="pricing-preview-plans" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Plan packaging</p>
            <h2 id="pricing-preview-plans" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              Private-beta pricing preview cards
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            Plan names, packaging, and limits are placeholders for review only. No subscription changes are
            saved in Alpha, and payment processor or provider enablement remains future backend work.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPreviewPlans.map((plan) => (
            <article key={plan.name} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {plan.eyebrow}
                </span>
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{plan.name}</h3>
                <p className="text-3xl font-semibold tracking-tight text-slate-950">{plan.price}</p>
                <p className="text-sm leading-6 text-slate-600">{plan.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-700">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium leading-5 text-slate-600">
                {plan.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Compliance boundary</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Official-source access first</h2>
          </div>
          <p className="text-sm leading-6 text-slate-600">
            Future pricing and packaging must map to approved sources such as official Meta APIs,
            connected professional accounts, customer-owned uploads, and licensed provider adapters where
            permitted. This page does not add contact submission, billing, payment processing, provider
            integration, live API calls, scraping, private account access, hidden surveillance, or anti-bot behavior.
          </p>
        </div>
      </section>

      <MarketingLinkRow />
    </main>
  );
}
