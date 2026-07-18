import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "Pricing preview | Insta Intelligence Platform",
  description:
    "Alpha pricing preview for official-first Instagram intelligence. Plan cards, value comparison, and commercial boundaries are static with no checkout, payment, or subscription behavior.",
};

const pricingPreviewPlans = [
  {
    name: "Alpha Review",
    eyebrow: "Preview access",
    price: "Invitation review",
    audience: "Founders, product reviewers, and early operators validating the workflow language.",
    description:
      "Best for teams that want to understand official-first Instagram intelligence before production data, billing, or provider systems are enabled.",
    bullets: [
      "Static workspace and marketing page preview",
      "Mock KPI, table, timeline, and compliance patterns",
      "Official-source readiness checklist language",
      "No payment method, invoice, or plan mutation",
    ],
    readiness: "Use when you are still comparing product fit and source eligibility.",
  },
  {
    name: "Agency Beta",
    eyebrow: "Multi-client planning",
    price: "Scoped beta review",
    audience: "Agencies and social teams planning governed client reporting across approved sources.",
    description:
      "Designed for teams that need client workspace planning, policy-forward reporting, and clear commercial boundaries before onboarding.",
    bullets: [
      "Client portfolio operating model preview",
      "Connected professional account reporting concepts",
      "Team workflow and approval readiness notes",
      "Provider approval required where applicable",
    ],
    readiness: "Use when client use cases are known and source access can be reviewed.",
  },
  {
    name: "Enterprise Readiness",
    eyebrow: "Governance review",
    price: "Commercial review",
    audience: "Brands, procurement teams, and enterprise stakeholders assessing risk and rollout controls.",
    description:
      "Built for deeper review of source policy, audit posture, commercial packaging, support expectations, and private beta sequencing.",
    bullets: [
      "Compliance and audit posture preview",
      "Official-source and licensed-provider boundary review",
      "Procurement, security, and rollout planning notes",
      "Future billing backend and payment processor required",
    ],
    readiness: "Use when governance, procurement, and private beta sequencing matter.",
  },
];

const comparisonRows = [
  ["Primary value", "Preview product fit", "Plan client operations", "Assess governed rollout"],
  ["Live Instagram data", "Not collected", "Not collected", "Not collected"],
  ["Source requirement", "Official source path", "Official source path", "Official and approved provider path"],
  ["Commercial state", "Static preview", "Scoped review", "Future contract review"],
  ["Checkout", "Disabled", "Disabled", "Disabled"],
];

const safetyItems = [
  "Billing is preview-only",
  "No payment method is collected in Alpha",
  "No checkout, invoice, upgrade, downgrade, or subscription change is saved",
  "Future billing requires backend and payment processor integration",
  "Future live data requires official source connection",
  "Provider approval is required where applicable",
];

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Trust and mission" },
  { href: "/for-creators", label: "Creator boundary" },
  { href: "/contact", label: "Contact intent preview" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-4 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/25 sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,1))]" aria-hidden="true" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />
        <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-12 xl:p-14">
          <div className="space-y-7 sm:space-y-8">
            <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
              <MarketingBadge tone="solid">Pricing preview</MarketingBadge>
              <MarketingBadge>Alpha commercial boundary</MarketingBadge>
              <MarketingBadge tone="emerald">No checkout behavior</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Plan value before payments, contracts, or live data exist.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                These plan cards preview how Alpha and private-beta packaging could map to product fit,
                agency operations, and enterprise governance. They are informational only: no payment
                method is collected, no subscription changes are saved, and no checkout flow runs.
              </p>
            </div>
            <nav aria-label="Pricing conversion path" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/contact">Discuss fit preview</MarketingCtaLink>
              <MarketingCtaLink href="/signup" variant="secondary">Preview access request</MarketingCtaLink>
              <MarketingCtaLink href="/about" variant="secondary">Review trust model</MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Commercial safety</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
              Alpha pricing is a boundary preview.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Pricing helps visitors choose the right conversation. It does not bill, subscribe,
              upgrade, downgrade, invoice, or provision a workspace.
            </p>
            <MarketingSafetyList items={safetyItems} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="pricing-preview-plans" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Plan and value comparison</p>
            <h2 id="pricing-preview-plans" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Choose the right Alpha conversation.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Each card explains who the plan is for, what value it previews, and which readiness conditions
            must exist before anything could become live in a future private beta.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
          {pricingPreviewPlans.map((plan) => (
            <article key={plan.name} className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                {plan.eyebrow}
              </span>
              <div className="mt-5 space-y-3">
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{plan.name}</h3>
                <p className="text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">{plan.price}</p>
                <p className="text-sm font-semibold leading-6 text-slate-700">{plan.audience}</p>
                <p className="text-sm leading-6 text-slate-600">{plan.description}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-700">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 break-words rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium leading-5 text-slate-600">
                {plan.readiness}
              </p>
              <button
                type="button"
                disabled
                className="mt-4 min-h-11 cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-500"
              >
                Checkout disabled in Alpha
              </button>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="pricing-comparison" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Readiness notes</p>
            <h2 id="pricing-comparison" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              What changes by plan, and what never changes in Alpha.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            The comparison is static so buyers can understand value and boundaries before any commercial
            infrastructure is connected.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200">
          <div className="grid min-w-[42rem] grid-cols-4 bg-slate-950 text-xs font-semibold uppercase tracking-[0.14em] text-white">
            <div className="p-4">Dimension</div>
            <div className="p-4">Alpha Review</div>
            <div className="p-4">Agency Beta</div>
            <div className="p-4">Enterprise</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row[0]} className="grid min-w-[42rem] grid-cols-4 border-t border-slate-200 text-sm leading-6 text-slate-700">
              {row.map((cell, index) => (
                <div key={`${row[0]}-${cell}`} className={`break-words p-4 ${index === 0 ? "font-semibold text-slate-950" : ""}`}>
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Compliance boundary</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Plans do not expand data rights.</h2>
          </div>
          <p className="break-words">
            Future packaging must still map to approved sources such as official Meta APIs, connected
            professional accounts, customer-owned uploads, and licensed provider adapters where permitted.
            This page does not add contact submission, billing, payment processing, provider integration,
            live API calls, scraping, private account access, hidden personal tracking, or anti-bot behavior.
          </p>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="Static pricing preview · No payment method collected · No checkout, subscription, invoice, provider sync, live Instagram data collection, scraping, private access, hidden personal tracking, or anti-bot behavior"
      />
    </main>
  );
}
