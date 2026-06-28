import type { Metadata } from "next";
import Link from "next/link";

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
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
              About the Alpha · Private beta
            </div>
            <div className="space-y-4">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Insta Intelligence Platform for official-source Instagram intelligence.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
                Insta Intelligence Platform is an Alpha preview for agencies, brands, creator teams,
                and compliance-first marketing teams evaluating how Instagram intelligence workflows can
                be organized around approved sources, private beta controls, and clear governance.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
                Alpha home
              </Link>
              <Link href="/pricing" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                Open pricing preview
              </Link>
              <Link href="/contact" className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
                Contact preview
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Private beta safety</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Preview-only operating boundary</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Alpha pages describe the product direction only. They do not collect live Instagram data,
              open provider connections, submit contact forms, or run backend actions.
            </p>
            <div className="mt-5 grid gap-2">
              {safetyClaims.map((claim) => (
                <div key={claim} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                  {claim}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section aria-labelledby="about-alpha-values" className="space-y-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Product posture</p>
            <h2 id="about-alpha-values" className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              What this Alpha is built to prove
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600">
            The Alpha focuses on product clarity, governance language, and official-source readiness before
            real backend, provider, billing, or contact workflows are introduced.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card) => (
            <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Compliance-first explanation</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Official-source access sets the boundary</h2>
          </div>
          <div className="space-y-4 text-sm leading-6 text-slate-600">
            <p>
              The product direction prioritizes official Meta APIs, connected professional accounts,
              customer-owned uploads, and licensed provider adapters where approved. Features that depend on
              sensitive data availability must remain gated until the correct source, provider, policy, and
              backend enforcement path exists.
            </p>
            <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700">
              No live Instagram data is collected in Alpha. No scraping, private account access, hidden
              surveillance, or anti-bot bypass is part of this product preview.
            </p>
          </div>
        </div>
      </section>

      <MarketingLinkRow />
    </main>
  );
}