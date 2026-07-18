import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "For creators | Insta Intelligence Platform",
  description:
    "Creator-facing Alpha preview explaining creator-safe Instagram intelligence boundaries, authorized data principles, collaboration readiness, and protections.",
};

const creatorPrinciples = [
  {
    title: "Consent and authorization first",
    description:
      "Creator collaboration workflows should rely on connected professional account access, explicit brand partnerships, customer-owned uploads, or allowed public-source context.",
  },
  {
    title: "No hidden creator tracking",
    description:
      "The platform preview does not follow private behavior, infer personal histories, monitor hidden activity, or represent off-platform surveillance.",
  },
  {
    title: "Collaboration-ready context",
    description:
      "Future creator views should help brands and creators discuss fit, content readiness, campaign context, and reporting expectations with source clarity.",
  },
  {
    title: "Protected Alpha boundary",
    description:
      "This page is informational only. It does not create creator profiles, submit applications, collect messages, or connect Instagram accounts.",
  },
];

const eligibilityNotes = [
  "Professional or creator account workflows must use official access paths where applicable.",
  "Brand collaboration review should be based on authorized, permissioned, customer-provided, or allowed public information.",
  "Identity-level personal histories, private account data, and hidden monitoring remain outside this Alpha preview.",
  "Future creator-facing workflows require clear consent, provenance, retention, and revocation language.",
];

const protectionRows = [
  {
    label: "What creators can expect",
    value: "Transparent collaboration readiness language and explicit source boundaries.",
  },
  {
    label: "What this page does not do",
    value: "No application submission, CRM record, provider sync, profile creation, or account connection.",
  },
  {
    label: "What future activation requires",
    value: "Official source eligibility, consent-aware onboarding, provider approval where applicable, and policy enforcement.",
  },
];

const safetyClaims = [
  "Creator-safe Alpha preview",
  "No live Instagram data is collected in Alpha",
  "No creator application or contact form is submitted",
  "No scraping, private account access, hidden creator monitoring, fake login automation, or anti-bot bypass",
  "Future creator workflows require official source connection or approved source eligibility",
];

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Compare Alpha plans" },
  { href: "/about", label: "Trust and mission" },
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
              <MarketingBadge tone="solid">For creators</MarketingBadge>
              <MarketingBadge>Creator-safe Alpha preview</MarketingBadge>
              <MarketingBadge tone="emerald">Authorized data boundaries</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Creator intelligence should feel transparent, permissioned, and partnership-ready.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                This Alpha page explains how creator-facing workflows should protect boundaries while
                helping creators, brands, and agencies discuss collaboration readiness using authorized,
                public-allowed, or customer-provided context.
              </p>
            </div>
            <nav aria-label="Creator page conversion path" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/contact">Ask about creator readiness</MarketingCtaLink>
              <MarketingCtaLink href="/about" variant="secondary">Review mission</MarketingCtaLink>
              <MarketingCtaLink href="/pricing" variant="secondary">Review Alpha plans</MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Creator protection</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
              The trust boundary is visible before any workflow exists.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Alpha does not onboard creators, collect profiles, connect accounts, submit applications, or
              run live Instagram intelligence. It explains the future safety posture only.
            </p>
            <MarketingSafetyList items={safetyClaims} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="creator-principles" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Creator data principles</p>
            <h2 id="creator-principles" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Creators stay protected when source boundaries are clear.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            The page is designed to reassure creators and partners that the platform is not positioned as
            a hidden tracking tool and does not expand access beyond authorized or allowed sources.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {creatorPrinciples.map((principle) => (
            <article key={principle.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-emerald-100/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Eligibility preview</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Creator collaboration readiness starts with allowed context.
          </h2>
          <div className="mt-6 grid gap-3">
            {eligibilityNotes.map((note) => (
              <p key={note} className="rounded-2xl border border-emerald-200 bg-white/80 p-4 text-sm font-medium leading-6 text-slate-700">
                {note}
              </p>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">How creators stay protected</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Alpha explains the rules before asking creators to participate.
          </h2>
          <div className="mt-6 grid gap-3">
            {protectionRows.map((row) => (
              <article key={row.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{row.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-slate-800">{row.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Creator boundary notice</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
              No hidden tracking, no private access, no account connection.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="break-words">
              Future creator workflows must be authorized, permissioned, and clear about source type,
              purpose, retention, revocation, and reporting use. Alpha does not create a creator database,
              watch private activity, infer personal histories, or connect to Instagram on a creator&apos;s behalf.
            </p>
            <p className="break-words rounded-2xl border border-slate-200 bg-slate-50 p-4 font-medium text-slate-700">
              Brand collaboration intelligence should support transparent decisions, not hidden surveillance
              or arbitrary personal tracking.
            </p>
          </div>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="Creator-safe Alpha preview · No application submission, profile creation, provider sync, live Instagram data collection, scraping, private access, hidden creator monitoring, fake login automation, or anti-bot behavior"
      />
    </main>
  );
}
