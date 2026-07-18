import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "About the mission | Insta Intelligence Platform",
  description:
    "Trust and mission page for Insta Intelligence Platform, an Alpha preview of official-first Instagram intelligence for compliance-led teams.",
};

const principles = [
  {
    title: "Official sources before insight",
    description:
      "The product direction starts with official Meta APIs, connected professional accounts, customer-owned imports, public library contexts where allowed, and licensed providers where approved.",
  },
  {
    title: "Compliance language in the interface",
    description:
      "Source type, freshness, confidence, provenance, and policy boundaries should be visible where decisions happen, not buried after export.",
  },
  {
    title: "Team workflows without unsafe shortcuts",
    description:
      "Marketing teams need dependable intelligence operations, not brittle collection tactics or unclear data rights.",
  },
  {
    title: "Alpha honesty",
    description:
      "The current public product remains static so buyers can review direction, trust posture, and readiness without triggering backend behavior.",
  },
];

const philosophy = [
  "Use approved sources and documented provider boundaries before showing live metrics.",
  "Prefer aggregate, permissioned, and customer-owned context over identity-level personal histories.",
  "Keep sensitive capabilities policy-gated, auditable, and disabled until there is a compliant source path.",
  "Make commercial, support, provider, and auth limitations explicit during Alpha review.",
];

const companyPreview = [
  {
    label: "Who we serve",
    value: "Brands, agencies, creator teams, analysts, and enterprise marketing leaders",
  },
  {
    label: "What we are building",
    value: "A governed intelligence layer for Instagram planning, reporting, collaboration, and readiness review",
  },
  {
    label: "What Alpha proves",
    value: "Product clarity, conversion flow, compliance language, and private beta operating boundaries",
  },
];

const safetyClaims = [
  "Official-first Instagram intelligence",
  "No live Instagram data is collected in Alpha",
  "No scraping, fake login automation, private account access, hidden monitoring, or anti-bot bypass",
  "Requires official source connection before future live workflows",
  "Requires provider approval where applicable",
  "Contact, billing, signup, and provider actions remain preview-only",
];

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Compare Alpha plans" },
  { href: "/for-creators", label: "Creator trust page" },
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
              <MarketingBadge tone="solid">Trust and mission</MarketingBadge>
              <MarketingBadge>Alpha preview</MarketingBadge>
              <MarketingBadge tone="emerald">Compliance-led product design</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                We are building Instagram intelligence that teams can defend.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                Insta Intelligence Platform is an Alpha preview for turning Instagram data questions into
                governed workflows: source-aware, permission-conscious, commercially honest, and designed
                for teams that need trust before activation.
              </p>
            </div>
            <nav aria-label="About page conversion path" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/contact">Talk through readiness</MarketingCtaLink>
              <MarketingCtaLink href="/pricing" variant="secondary">Review pricing boundary</MarketingCtaLink>
              <MarketingCtaLink href="/for-creators" variant="secondary">Creator protections</MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Company posture</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
              Trust is the product requirement.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              We are not previewing a data grab. We are previewing how official-first intelligence could
              be reviewed, governed, and adopted by accountable marketing teams.
            </p>
            <MarketingSafetyList items={safetyClaims} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="about-mission" className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-emerald-100/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Mission</p>
          <h2 id="about-mission" className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
            Help teams understand performance, creators, content, and campaigns without crossing trust boundaries.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Instagram intelligence only matters if the source can be explained, the use case is allowed,
            and the output can be reviewed by the people responsible for compliance, brand safety, and
            creator relationships.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Company preview</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            What visitors should understand about us.
          </h2>
          <div className="mt-6 grid gap-3">
            {companyPreview.map((item) => (
              <article key={item.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{item.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-800">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="about-alpha-values" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Data principles</p>
            <h2 id="about-alpha-values" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Principles that shape the product.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            The Alpha focuses on product clarity, governance language, and official-source readiness before
            real backend, provider, billing, or contact workflows are introduced.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((card) => (
            <article key={card.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Product philosophy</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Enterprise safety needs to be designed into every surface.
          </h2>
          <div className="mt-6 grid gap-3">
            {philosophy.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium leading-6 text-slate-700">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-6 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Compliance-first explanation</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Official-source access sets the boundary.
          </h2>
          <div className="mt-4 space-y-4">
            <p className="break-words">
              The product direction prioritizes official Meta APIs, connected professional accounts,
              customer-owned uploads, and licensed provider adapters where approved. Features that depend on
              sensitive data availability must remain gated until the correct source, provider, policy, and
              backend enforcement path exists.
            </p>
            <p className="break-words rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700">
              No live Instagram data is collected in Alpha. No scraping, private account access, hidden
              monitoring, fake login automation, or anti-bot bypass is part of this product preview.
            </p>
          </div>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="Trust and mission preview · No live Instagram data collection · No contact form submission · No billing, provider sync, scraping, private access, hidden monitoring, fake login automation, or anti-bot behavior"
      />
    </main>
  );
}