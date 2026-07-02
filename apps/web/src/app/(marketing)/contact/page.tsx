import type { Metadata } from "next";

import { MarketingBadge, MarketingLinkRow, MarketingSafetyList } from "@/components/marketing/marketing-shared";

export const metadata: Metadata = {
  title: "Request access preview | Insta Intelligence Platform",
  description:
    "Private beta request access preview for official-source Instagram intelligence. No contact form is submitted in Alpha, no backend/provider/billing action runs, and access requires official source connection plus provider approval.",
};

const marketingLinks = [
  { href: "/", label: "Alpha home" },
  { href: "/pricing", label: "Open pricing preview" },
  { href: "/about", label: "About the Alpha" },
];

const requestAccessCards = [
  {
    eyebrow: "Best fit",
    title: "Who should request access",
    description:
      "Agencies, brands, creator teams, analysts, and marketing leaders evaluating compliance-first Instagram intelligence for connected professional account workflows.",
  },
  {
    eyebrow: "Review scope",
    title: "What is reviewed first",
    description:
      "Private beta readiness depends on source fit, governance needs, approved data boundaries, team use case, and whether requested workflows can remain official-source safe.",
  },
  {
    eyebrow: "Source requirement",
    title: "Official source connection required",
    description:
      "Activation planning requires official source connection paths such as Instagram Graph API, Meta Marketing API, Meta Ad Library, owned workflows, or approved sources.",
  },
  {
    eyebrow: "Provider boundary",
    title: "Provider approval where applicable",
    description:
      "Some future capabilities require provider approval where applicable and remain unavailable until compliant coverage, policy gates, and backend enforcement exist.",
  },
];

const previewSteps = [
  "Review workspace and team use case",
  "Confirm official-source connection path",
  "Identify provider approval needs where applicable",
  "Keep Alpha request-access steps static until private beta systems exist",
];

const safetyClaims = [
  "No contact form is submitted in Alpha",
  "No backend action runs from this page",
  "No live Instagram data is collected in Alpha",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
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
              <MarketingBadge tone="solid">Request access preview</MarketingBadge>
              <MarketingBadge>Private beta</MarketingBadge>
              <MarketingBadge tone="emerald">Official-source Instagram intelligence</MarketingBadge>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                Request private beta access without triggering live workflows.
              </h1>
              <p className="max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                This contact page is a static Alpha preview for teams evaluating official-source Instagram intelligence. It explains the request-access path, but no contact form is submitted in Alpha and no backend action runs from this page.
              </p>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl shadow-slate-950/20 backdrop-blur sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Private beta readiness</p>
            <h2 className="mt-3 text-xl font-semibold leading-7 tracking-tight text-white sm:text-2xl">Static request-access preview only.</h2>
            <MarketingSafetyList items={safetyClaims} className="mt-5 space-y-3" />
          </aside>
        </div>
      </section>

      <section aria-labelledby="contact-preview-cards" className="rounded-[2rem] border border-white/10 bg-slate-950/85 p-5 shadow-xl shadow-slate-950/20 sm:p-6 lg:p-7">
        <h2 id="contact-preview-cards" className="sr-only">Request access preview details</h2>
        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {requestAccessCards.map((card) => (
            <article key={card.title} className="relative overflow-hidden rounded-[2rem] border border-slate-200/90 bg-gradient-to-b from-white to-slate-50 p-5 shadow-xl shadow-slate-950/15 sm:p-6">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-emerald-500 to-sky-500 opacity-80" aria-hidden="true" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{card.eyebrow}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
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

        <div className="rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 shadow-lg shadow-emerald-100/70 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Activation boundary</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Request access requires source and provider review.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-700">
            Access planning requires official source connection and requires provider approval where applicable. This Alpha page does not guarantee approval, does not open live onboarding, and does not start live Instagram monitoring.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="break-words rounded-2xl border border-emerald-200 bg-white/80 px-4 py-3 text-sm font-semibold text-emerald-900">Requires official source connection</div>
            <div className="break-words rounded-2xl border border-sky-200 bg-white/80 px-4 py-3 text-sm font-semibold text-sky-900">Requires provider approval where applicable</div>
          </div>
        </div>
      </section>

      <MarketingLinkRow
        links={marketingLinks}
        note="No live Instagram data is collected in Alpha · No contact form is submitted in Alpha · No backend action runs from this page · Requires official source connection · Requires provider approval where applicable · No scraping, private account access, hidden surveillance, or anti-bot bypass"
      />
    </main>
  );
}