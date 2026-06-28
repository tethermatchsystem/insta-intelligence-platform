import type { Metadata } from "next";
import Link from "next/link";

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
    description: "Designed around Instagram Graph API, Meta Marketing API, Meta Ad Library, owned account workflows, and approved provider coverage.",
  },
  {
    title: "Compliance-first workflows",
    description: "Alpha surfaces are explicit about source limits, provider approval, private-beta readiness, and disabled behavior before backend enforcement exists.",
  },
  {
    title: "Built for teams",
    description: "Positioned for agencies, brands, creator teams, analysts, and marketing leaders that need trustworthy operational context.",
  },
  {
    title: "Preview-only activation",
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
    <main className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 shadow-sm shadow-slate-200/70">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.3fr_0.7fr] lg:p-10">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide">
              <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">Alpha preview</span>
              <span className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-600">Private beta</span>
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-emerald-700">Official-source Instagram intelligence</span>
            </div>

            <div className="space-y-4">
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">Insta Intelligence Platform</h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                A compliance-first Alpha preview for agencies, brands, creator teams, and marketing organizations evaluating official-source Instagram intelligence workflows before private beta activation.
              </p>
            </div>

            <nav aria-label="Public marketing preview links" className="flex flex-wrap gap-3">
              {marketingLinks.map((link) => (
                <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-slate-50">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-950">Alpha safety posture</p>
            <div className="mt-4 space-y-3">
              {safetyClaims.map((claim) => (
                <div key={claim} className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  {claim}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {featureCards.map((feature) => (
          <article key={feature.title} className="rounded-3xl border border-slate-200 bg-white/95 p-5 shadow-sm shadow-slate-200/70">
            <h2 className="text-base font-semibold text-slate-950">{feature.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
        <p className="font-semibold">Private beta readiness notice</p>
        <p className="mt-2">
          This public homepage is a static Alpha preview. Request access, pricing, and workspace flows are preview-only; no contact form is submitted in Alpha, billing is preview-only, and no provider or backend action runs from this page.
        </p>
      </section>
    </main>
  );
}
