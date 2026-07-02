import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "Insta Intelligence Platform | Alpha preview",
  description:
    "Alpha preview for private beta official-source Instagram intelligence built for agencies, brands, creator teams, and compliance-first marketing teams.",
};

const marketingLinks = [
  { href: "/pricing", label: "Open pricing preview" },
  { href: "/about", label: "About the Alpha" },
  { href: "/contact", label: "Contact preview" },
];

const featureCards = [
  {
    title: "Official-source intelligence",
    eyebrow: "Source strategy",
    description: "Designed around Instagram Graph API, Meta Marketing API, Meta Ad Library, owned account workflows, and approved provider coverage.",
  },
  {
    title: "Compliance-first workflows",
    eyebrow: "Governance",
    description: "Alpha surfaces are explicit about source limits, provider approval, private-beta readiness, and disabled behavior before backend enforcement exists.",
  },
  {
    title: "Built for teams",
    eyebrow: "Operations",
    description: "Positioned for agencies, brands, creator teams, analysts, and marketing leaders that need trustworthy operational context.",
  },
  {
    title: "Preview-only activation",
    eyebrow: "Alpha boundary",
    description: "Request access, pricing, and workspace previews remain static until official source connections and private-beta systems are approved.",
  },
];

const safetyClaims = [
  "No live Instagram data is collected in Alpha",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-4 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/20 sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.18),transparent_28%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(15,23,42,1))]" aria-hidden="true" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />
        <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:p-12 xl:p-14">
          <div className="space-y-7 sm:space-y-8">
            <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
              <MarketingBadge tone="solid">Alpha preview</MarketingBadge>
              <MarketingBadge>Private beta</MarketingBadge>
              <MarketingBadge tone="emerald">Official-source Instagram intelligence</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Insta Intelligence Platform
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-9">
                A compliance-first Alpha preview for agencies, brands, creator teams, and marketing organizations evaluating official-source Instagram intelligence workflows before private beta activation.
              </p>
            </div>

            <nav aria-label="Public marketing preview links" className="grid gap-3 pt-1 sm:flex sm:flex-wrap">
              {marketingLinks.map((link) => (
                <MarketingCtaLink key={link.href} href={link.href}>
                  {link.label}
                </MarketingCtaLink>
              ))}
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Alpha safety posture</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">Preview clarity before production systems.</h2>
            <MarketingSafetyList items={safetyClaims} />
          </aside>
        </div>
      </section>

      <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Platform preview</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">Built to feel governed from day one.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Public marketing surfaces stay static and compliance-safe while showing the product direction for official-source intelligence workflows.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((feature) => (
            <article key={feature.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-950/20 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{feature.eyebrow}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Private beta readiness notice</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Static public preview, no live actions.</h2>
          </div>
          <p className="break-words">
            This public homepage is a static Alpha preview. Request access, pricing, and workspace flows are preview-only; no contact form is submitted in Alpha, billing is preview-only, and no provider or backend action runs from this page.
          </p>
        </div>
      </section>
    </main>
  );
}
