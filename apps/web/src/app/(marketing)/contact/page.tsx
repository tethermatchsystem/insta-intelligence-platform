import type { Metadata } from "next";

import { MarketingBadge, MarketingCtaLink, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "Contact intent preview | Insta Intelligence Platform",
  description:
    "Static Alpha contact page for sales, support, and compliance inquiry intent. No contact form, email, CRM, backend, provider, or billing action runs.",
};

const marketingLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Compare Alpha plans" },
  { href: "/about", label: "Trust and mission" },
  { href: "/for-creators", label: "Creator trust page" },
];

const contactIntentCards = [
  {
    eyebrow: "Sales intent",
    title: "Evaluate private beta fit",
    description:
      "For teams comparing official-first Instagram intelligence, Alpha packaging, commercial readiness, and workspace planning.",
    expectation: "Static route to scoping conversation; no CRM record is created.",
  },
  {
    eyebrow: "Support intent",
    title: "Ask about Alpha review",
    description:
      "For reviewers who need help understanding static pages, preview-only auth, disabled checkout, or private beta limitations.",
    expectation: "Support workflow is preview copy only; no ticket is submitted.",
  },
  {
    eyebrow: "Compliance intent",
    title: "Review data boundaries",
    description:
      "For buyers validating official sources, provider approvals, provenance, audit expectations, and restricted capability boundaries.",
    expectation: "Compliance inquiry is informational; no provider review starts here.",
  },
  {
    eyebrow: "Creator intent",
    title: "Understand creator protections",
    description:
      "For creators and partner teams reviewing consent, authorized data use, public-source limits, and collaboration readiness.",
    expectation: "Creator outreach remains static; no email or application is sent.",
  },
];

const responseExpectations = [
  "Alpha pages explain intent paths only and do not send email, create CRM records, or open support tickets.",
  "A future contact workflow would need approved backend, privacy, retention, and support operations before activation.",
  "Private beta conversations should begin with source eligibility, data boundaries, and compliance posture.",
];

const previewSteps = [
  "Choose the contact intent that matches your role.",
  "Review official-source requirements and provider approval needs where applicable.",
  "Use Pricing and About to understand commercial and trust boundaries first.",
  "Keep this Alpha form disabled until backend, email, CRM, and retention controls exist.",
];

const safetyClaims = [
  "No contact form is submitted in Alpha",
  "No email, CRM record, support ticket, or backend action runs from this page",
  "No live Instagram data is collected in Alpha",
  "No scraping, private account access, hidden monitoring, fake login automation, or anti-bot bypass",
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
              <MarketingBadge tone="solid">Contact intent preview</MarketingBadge>
              <MarketingBadge>Sales and support paths</MarketingBadge>
              <MarketingBadge tone="emerald">No form submission</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Tell visitors where to go next without sending anything yet.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                This contact page frames sales, support, compliance, and creator inquiry intent for an
                official-first Instagram intelligence platform. It is static in Alpha: no contact form is
                submitted, no email is sent, and no backend or CRM action runs.
              </p>
            </div>
            <nav aria-label="Contact page conversion path" className="grid gap-3 sm:flex sm:flex-wrap">
              <MarketingCtaLink href="/pricing">Review plan fit</MarketingCtaLink>
              <MarketingCtaLink href="/about" variant="secondary">Review trust model</MarketingCtaLink>
              <MarketingCtaLink href="/signup" variant="secondary">Preview access request</MarketingCtaLink>
            </nav>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Response expectation</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">
              Static inquiry routing, not a live inbox.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Future response SLAs, routing, retention, and CRM behavior would require backend and support
              system integration. Alpha keeps the experience transparent and disabled.
            </p>
            <MarketingSafetyList items={safetyClaims} density="compact" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="contact-intent-cards" className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Contact paths</p>
            <h2 id="contact-intent-cards" className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Route intent before routing messages.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-300">
            Each card explains why a visitor might reach out and what would need to exist before a future
            live contact flow could be safely enabled.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactIntentCards.map((card) => (
            <article key={card.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{card.eyebrow}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
              <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium leading-5 text-slate-600">
                {card.expectation}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Preview-only request path</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Static steps for Alpha review.</h2>
          <div className="mt-6 space-y-3">
            {previewSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">{index + 1}</span>
                <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-emerald-100/70 sm:p-7" aria-label="Disabled Alpha contact form preview">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Disabled form preview</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            Future contact intake requires approved systems first.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            These controls show the intended intake shape only. They are disabled so Alpha cannot collect
            names, emails, messages, company details, CRM records, or support tickets.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Work email
              <input disabled placeholder="Disabled in Alpha" className="min-h-11 cursor-not-allowed rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-500" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Inquiry type
              <select disabled className="min-h-11 cursor-not-allowed rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-500">
                <option>Sales / support / compliance preview</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-700 sm:col-span-2">
              Message
              <textarea disabled placeholder="Message submission disabled in Alpha" className="min-h-28 cursor-not-allowed rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-500" />
            </label>
          </div>
          <button
            type="button"
            disabled
            className="mt-5 min-h-11 w-full cursor-not-allowed rounded-full border border-emerald-200 bg-emerald-100 px-5 py-3 text-sm font-semibold text-emerald-800"
          >
            Submission disabled in Alpha
          </button>
        </form>
      </section>

      <section className="rounded-[2rem] border border-amber-200 bg-gradient-to-r from-amber-50 via-white to-slate-50 p-5 text-sm leading-6 text-amber-950 shadow-lg shadow-amber-100/70 sm:p-7">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">What to expect</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Response promises are also preview-only.</h2>
          </div>
          <div className="grid gap-3">
            {responseExpectations.map((expectation) => (
              <p key={expectation} className="rounded-2xl border border-amber-200 bg-white/80 p-4 font-medium text-slate-700">
                {expectation}
              </p>
            ))}
          </div>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="Static contact-intent preview · No form submission, email, CRM record, support ticket, backend write, provider sync, live Instagram data collection, scraping, private access, hidden monitoring, fake login automation, or anti-bot behavior"
      />
    </main>
  );
}