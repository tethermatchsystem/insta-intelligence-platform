import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "About the Alpha | Insta Intelligence Platform",
  description:
    "About the Alpha private beta for official-source Instagram intelligence. Built for agencies, brands, creator teams, and compliance-first marketing teams with no live Instagram data collected in Alpha.",
};

const valueCards = [
  {
    title: "Official-source first",
    description:
      "The platform is designed around approved sources, connected professional accounts, customer-owned data, and licensed provider coverage where permitted.",
  },
  {
    title: "Built for marketing teams",
    description:
      "Insta Intelligence Platform is built for agencies, brands, creator teams, and compliance-first marketing teams that need clear operating boundaries.",
  },
  {
    title: "Private beta readiness",
    description:
      "Alpha surfaces preview the workflows, governance posture, and source readiness needed before production backend and provider work begins.",
  },
  {
    title: "Compliance-led product design",
    description:
      "Sensitive capabilities must stay gated, documented, and tied to official source connection plus provider approval where applicable.",
  },
];

const safetyClaims = [
  "Private beta",
  "Official-source Instagram intelligence",
  "Requires official source connection",
  "Requires provider approval where applicable",
  "No live Instagram data is collected in Alpha",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
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
                Insta Intelligence Platform for official-source Instagram intelligence.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Insta Intelligence Platform is an Alpha preview for agencies, brands, creator teams,
                and compliance-first marketing teams evaluating how Instagram intelligence workflows can
                be organized around approved sources, private beta controls, and clear governance.
              </p>
            </div>
            <nav aria-label="About page preview links" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/">
                Alpha home
              </MarketingCtaLink>
              <MarketingCtaLink href="/pricing" variant="secondary">
                Open pricing preview
              </MarketingCtaLink>
              <MarketingCtaLink href="/contact" variant="secondary">
                Contact preview
              </MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Private beta safety</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">Preview-only operating boundary</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Alpha pages describe the product direction only. They do not collect live Instagram data,
              open provider connections, submit contact forms, or run backend actions.
            </p>
            <MarketingSafetyList items={safetyClaims} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="about-alpha-values" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Product posture</p>
            <h2 id="about-alpha-values" className="mt-2 text-2xl font-semibold tracking-tight text-white">
              What this Alpha is built to prove
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            The Alpha focuses on product clarity, governance language, and official-source readiness before
            real backend, provider, billing, or contact workflows are introduced.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <article key={card.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Compliance-first explanation</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Official-source access sets the boundary</h2>
          </div>
          <div className="space-y-4">
            <p className="break-words">
              The product direction prioritizes official Meta APIs, connected professional accounts,
              customer-owned uploads, and licensed provider adapters where approved. Features that depend on
              sensitive data availability must remain gated until the correct source, provider, policy, and
              backend enforcement path exists.
            </p>
            <p className="break-words rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700">
              No live Instagram data is collected in Alpha. No scraping, private account access, hidden
              surveillance, or anti-bot bypass is part of this product preview.
            </p>
          </div>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="No live Instagram data is collected in Alpha · No contact form is submitted in Alpha · Billing is preview-only · Requires official source connection · Requires provider approval where applicable"
      />
    </main>
  );
}