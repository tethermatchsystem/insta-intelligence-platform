import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "Official-first Instagram intelligence | Insta Intelligence Platform",
  description:
    "Premium Alpha preview for official-first Instagram intelligence, compliance-led workflow planning, and private beta readiness for brands, agencies, and creator teams.",
};

const heroMetrics = [
  {
    label: "Source posture",
    value: "Official-first",
    note: "Built around approved Meta sources, connected professional accounts, customer-owned inputs, and licensed providers where permitted.",
  },
  {
    label: "Alpha behavior",
    value: "Static preview",
    note: "Public actions explain the path forward without creating accounts, submitting forms, opening provider connections, or writing data.",
  },
  {
    label: "Operating model",
    value: "Governed",
    note: "Every future data workflow needs provenance, policy gates, audit context, and explicit source readiness before activation.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Confirm source eligibility",
    description:
      "Start with owned, connected, public-library, or approved provider data paths instead of unsafe shortcuts.",
  },
  {
    step: "02",
    title: "Plan governed intelligence views",
    description:
      "Organize account, content, audience, campaign, and creator collaboration questions around permissioned signals.",
  },
  {
    step: "03",
    title: "Review policy and provenance",
    description:
      "Surface confidence, freshness, source type, and compliance boundaries before a team trusts the insight.",
  },
  {
    step: "04",
    title: "Move toward private beta safely",
    description:
      "Use contact, access, and pricing previews to scope the right commercial path without triggering live operations.",
  },
];

const trustCards = [
  {
    title: "Not a scraping product",
    description:
      "The platform narrative rejects evasion, fake login automation, private account access, and hidden monitoring. Alpha pages are static and policy-forward.",
  },
  {
    title: "Built for accountable teams",
    description:
      "Designed for brands, agencies, analysts, creator teams, and enterprise stakeholders that need explainable Instagram intelligence workflows.",
  },
  {
    title: "Commercial flow remains gated",
    description:
      "Signup, sign-in, pricing, and contact paths are previews only until production auth, billing, provider, and support systems exist.",
  },
];

const safetyClaims = [
  "No live Instagram data is collected in Alpha",
  "No scraping, private account access, fake login automation, hidden monitoring, or anti-bot bypass",
  "Requires official source connection before future live data workflows",
  "Requires provider approval where applicable",
  "Signup, login, pricing, and contact actions remain preview-only",
];

const marketingLinks = [
  { href: "/pricing", label: "Compare Alpha plans" },
  { href: "/about", label: "Read the mission" },
  { href: "/for-creators", label: "For creators" },
  { href: "/contact", label: "Contact intent preview" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-4 sm:space-y-10 sm:px-6 sm:py-10 lg:px-8">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/25 sm:rounded-[2.5rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.24),transparent_32%),radial-gradient(circle_at_78%_8%,rgba(59,130,246,0.18),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.94),rgba(15,23,42,1))]" aria-hidden="true" />
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" aria-hidden="true" />
        <div className="relative grid gap-8 p-5 sm:gap-10 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-12 xl:p-14">
          <div className="space-y-7 sm:space-y-8">
            <div className="flex flex-wrap gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.18em]">
              <MarketingBadge tone="solid">Alpha preview</MarketingBadge>
              <MarketingBadge>Premium SaaS narrative</MarketingBadge>
              <MarketingBadge tone="emerald">Official-first Instagram intelligence</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-white sm:text-6xl sm:leading-[1.02] lg:text-7xl">
                Instagram intelligence for teams that choose governed growth.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-xl sm:leading-9">
                Insta Intelligence Platform is a compliance-first Alpha preview for agencies, brands,
                creator teams, and enterprise marketers planning trustworthy Instagram workflows around
                approved sources, clear consent boundaries, and audit-ready context.
              </p>
            </div>

            <nav aria-label="Primary conversion path" className="grid gap-3 pt-1 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/signup">Preview access path</MarketingCtaLink>
              <MarketingCtaLink href="/login" variant="secondary">Preview sign-in</MarketingCtaLink>
              <MarketingCtaLink href="/contact" variant="secondary">Contact sales preview</MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Trust boundary</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
              Premium insight starts with permissioned sources.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              The public site explains the product direction without activating live data, payments,
              support workflows, provider sync, or backend writes.
            </p>
            <MarketingSafetyList items={safetyClaims} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="home-alpha-metrics" className="grid gap-4 md:grid-cols-3">
        <h2 id="home-alpha-metrics" className="sr-only">Alpha trust metrics</h2>
        {heroMetrics.map((metric) => (
          <article key={metric.label} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/70 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{metric.note}</p>
          </article>
        ))}
      </section>

      <section className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Product workflow preview</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              From source readiness to board-ready context.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            The Alpha homepage shows the intended conversion path: understand the platform, review the
            commercial boundary, learn the trust model, then request the right private beta conversation.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-4">
          {workflowSteps.map((item) => (
            <article key={item.step} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">{item.step}</p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-emerald-100/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Conversion path</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            What should a visitor do next?
          </h2>
          <div className="mt-6 grid gap-3 text-sm leading-6 text-slate-700">
            <p className="rounded-2xl border border-emerald-200 bg-white/80 p-4">
              <span className="font-semibold text-emerald-950">Evaluating value?</span> Compare Alpha
              packaging on Pricing before any checkout or subscription system exists.
            </p>
            <p className="rounded-2xl border border-sky-200 bg-white/80 p-4">
              <span className="font-semibold text-sky-950">Need trust context?</span> Read About and For
              Creators to understand mission, source boundaries, and creator-safe positioning.
            </p>
            <p className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <span className="font-semibold text-slate-950">Ready to scope access?</span> Use the static
              contact page to choose a sales, support, or compliance inquiry path.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Why trust the platform</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Clear boundaries are part of the product, not a footnote.
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trustCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold text-slate-950">{card.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Private beta readiness notice</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Static public preview, no live actions.</h2>
          </div>
          <p className="break-words">
            Signup, sign-in, contact, pricing, and workspace paths are Alpha previews only. No form is
            submitted, no payment is collected, no provider connection opens, and no live Instagram data is
            collected from this public website.
          </p>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="Official-first Alpha preview · No live Instagram data collection · No checkout, CRM, auth, provider sync, scraping, private access, hidden monitoring, fake login automation, or anti-bot behavior"
      />
    </main>
  );
}
