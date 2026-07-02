import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

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

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-4 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20 sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.20),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,1))]" aria-hidden="true" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />
        <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:p-12 xl:p-14">
          <div className="space-y-7 sm:space-y-8">
            <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
              <MarketingBadge tone="solid">Alpha preview</MarketingBadge>
              <MarketingBadge>Private beta</MarketingBadge>
              <MarketingBadge tone="emerald">Official-source Instagram intelligence</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Pricing preview for compliance-first Instagram intelligence.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                These packages preview how Alpha and private-beta access may be organized for brands,
                agencies, and enterprise teams. Billing is preview-only, no payment method is collected in
                Alpha, and future access requires official source connection plus provider approval where
                applicable.
              </p>
            </div>
            <nav aria-label="Pricing preview page links" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/contact">
                Contact preview
              </MarketingCtaLink>
              <MarketingCtaLink href="/about" variant="secondary">
                About the Alpha
              </MarketingCtaLink>
              <MarketingCtaLink href="/" variant="secondary">
                Alpha home
              </MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Billing safety</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">Preview-only commercial flow</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Pricing content is informational for Alpha review. Subscription management, payment method
              collection, invoice generation, and plan changes require future backend and payment processor work.
            </p>
            <MarketingSafetyList items={safetyItems} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="pricing-preview-plans" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Plan packaging</p>
            <h2 id="pricing-preview-plans" className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Private-beta pricing preview cards
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Plan names, packaging, and limits are placeholders for review only. No subscription changes are
            saved in Alpha, and payment processor or provider enablement remains future backend work.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {pricingPreviewPlans.map((plan) => (
            <article key={plan.name} className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {plan.eyebrow}
                </span>
              </div>
              <div className="mt-5 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{plan.name}</h3>
                <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{plan.price}</p>
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
              <p className="mt-6 break-words rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium leading-5 text-slate-600">
                {plan.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Compliance boundary</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Official-source access first</h2>
          </div>
          <p className="break-words">
            Future pricing and packaging must map to approved sources such as official Meta APIs,
            connected professional accounts, customer-owned uploads, and licensed provider adapters where
            permitted. This page does not add contact submission, billing, payment processing, provider
            integration, live API calls, scraping, private account access, hidden surveillance, or anti-bot behavior.
          </p>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="No live Instagram data is collected in Alpha · No contact form is submitted in Alpha · Billing is preview-only · Requires official source connection · Requires provider approval where applicable"
      />
    </main>
  );
}
