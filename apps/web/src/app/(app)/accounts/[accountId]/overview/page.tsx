import Link from "next/link";
import type { ReactNode } from "react";
import {
  accountOverviewKpis,
  accountProfile,
  accountTrendPoints,
  anomalyHighlights,
  providerHealth,
  recentActivity,
  recentCollectionJobs,
  sourcePolicy,
} from "@/lib/mock-data/account-overview";

type Tone = "emerald" | "slate" | "blue" | "violet" | "amber" | "rose";

const overviewPreviewBadges = [
  "Executive summary / health snapshot",
  "Alpha preview only",
  "Mock account metrics",
];

const overviewNavLinks = [
  { label: "Dossier", href: "/accounts/demo-account" },
  { label: "Executive summary", href: "/accounts/demo-account/overview" },
  { label: "Timeline", href: "/accounts/demo-account/timeline" },
  { label: "Posts", href: "/accounts/demo-account/posts" },
  { label: "Comments", href: "/accounts/demo-account/comments" },
  { label: "Followers", href: "/accounts/demo-account/followers" },
  { label: "Following", href: "/accounts/demo-account/following" },
  { label: "Engagement", href: "/accounts/demo-account/engagement" },
  { label: "Ads", href: "/accounts/demo-account/ads" },
  { label: "Likes", href: "/accounts/demo-account/likes", badge: "Restricted" },
  { label: "Recent follows", href: "/accounts/demo-account/recent-follows", badge: "Licensed" },
  { label: "Recent unfollows", href: "/accounts/demo-account/recent-unfollows", badge: "Licensed" },
];

const summaryPanels = [
  {
    title: "Health readout",
    value: "Stable with review items",
    detail: "Audience and engagement placeholders trend positively, while one mock alert remains queued for analyst review.",
    tone: "emerald" as Tone,
  },
  {
    title: "Readiness readout",
    value: "Source not connected",
    detail: "All data is static Alpha UI. Official Meta source authorization is required before any real account metrics appear.",
    tone: "amber" as Tone,
  },
  {
    title: "Risk readout",
    value: "Bounded preview",
    detail: "Restricted relationship and like-history features stay disabled or licensed-provider-only placeholders.",
    tone: "blue" as Tone,
  },
];

const priorityInsights = [
  {
    priority: "P1",
    title: "Review one high-priority workflow",
    detail: "Mock comment/mention context suggests a manager should check the future review queue before escalation.",
    owner: "Community lead",
    tone: "amber" as Tone,
  },
  {
    priority: "P2",
    title: "Protect the engagement lift",
    detail: "Reels-style engagement placeholders outperform image placeholders; keep creative analysis in official-source areas.",
    owner: "Content strategist",
    tone: "emerald" as Tone,
  },
  {
    priority: "P3",
    title: "Keep relationship surfaces gated",
    detail: "Recent follows, unfollows, and like-history pages should remain disabled until policy and provider requirements are satisfied.",
    owner: "Compliance reviewer",
    tone: "rose" as Tone,
  },
];

const changedSinceLastReview = [
  "Follower-count placeholder moved up 4.2% over the mock 30-day window.",
  "Mention volume preview is 12% higher than the prior static review packet.",
  "One high-severity mock workflow is still marked for manager attention.",
  "Provider posture remains unchanged: not connected and no live queries running.",
];

const riskReadinessCards = [
  {
    label: "Official data readiness",
    status: "Needs source connection",
    detail: "Account insights, media, comments, mentions, and ads require official Meta permissions before live use.",
    tone: "amber" as Tone,
  },
  {
    label: "Compliance posture",
    status: "Official-first",
    detail: "No scraping, private account access, hidden monitoring, fake login automation, or anti-bot bypass is represented.",
    tone: "emerald" as Tone,
  },
  {
    label: "Management attention",
    status: "One review item",
    detail: "Static Alpha copy highlights a mocked high-priority workflow for product review only.",
    tone: "rose" as Tone,
  },
];

const emptyStateNotes = [
  "No live overview refresh is available in Alpha.",
  "No exports, reports, billing, alerts, or provider actions run from this page.",
  "Summary controls are visual placeholders only.",
];

function toneClasses(tone: Tone) {
  const tones: Record<Tone, string> = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return tones[tone];
}

function Badge({ children, tone = "slate" }: { children: ReactNode; tone?: Tone }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${toneClasses(tone)}`}>{children}</span>;
}

function OverviewPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function statusTone(status: string): Tone {
  if (["Mock only", "No live query", "Not connected"].includes(status)) return "amber";
  return "slate";
}

export default function Page() {
  return (
    <div className="space-y-6">
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap gap-2">
                {overviewPreviewBadges.map((badge) => (
                  <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-emerald-200/80">Executive summary</p>
              <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountProfile.displayName} health snapshot</h1>
              <p className="mt-2 max-w-3xl text-base leading-7 text-emerald-50/80">
                Manager-friendly snapshot of account health, priority insights, readiness risk, and what changed since the last static review packet.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-emerald-50/80 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
              <p className="font-semibold text-white">Snapshot boundary</p>
              <p className="mt-1">This page summarizes mock Alpha signals only. It does not run live refreshes, reports, exports, OAuth, provider jobs, scraping, or monitoring.</p>
              <button disabled className="mt-4 w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-50/70">
                Live summary refresh disabled
              </button>
            </div>
          </div>
        </div>
      </header>

      <nav className="flex gap-2 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/70" aria-label="Account sections">
        {overviewNavLinks.map((link) => {
          const active = link.label === "Executive summary";

          return (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "flex whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition",
                active ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              ].join(" ")}
            >
              <span className="flex items-center gap-2">
                {link.label}
                {link.badge ? (
                  <span className={active ? "rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white" : "rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-100"}>
                    {link.badge}
                  </span>
                ) : null}
              </span>
            </Link>
          );
        })}
      </nav>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {summaryPanels.map((panel) => (
          <div key={panel.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <Badge tone={panel.tone}>{panel.title}</Badge>
            <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{panel.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">{panel.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountOverviewKpis.map((kpi) => (
          <div key={kpi.label} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
              <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
              <Badge tone={kpi.tone as Tone}>{kpi.detail}</Badge>
            </div>
            <p className="mt-3 text-xs font-medium text-slate-400">Executive snapshot · static Alpha metric</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Snapshot review controls</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">Disabled review controls show the intended manager workflow. They do not search, filter, refresh, export, save, or call a backend in Alpha.</p>
          </div>
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Save review disabled
          </button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <input disabled value="Last review: Static Alpha packet" aria-label="Review packet disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500 md:col-span-2" readOnly />
          <select disabled aria-label="Health filter disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
            <option>All health areas</option>
          </select>
          <select disabled aria-label="Risk filter disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
            <option>Policy-safe signals only</option>
          </select>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.75fr)]">
        <OverviewPanel title="Priority insights" subtitle="The few items a manager should understand first; all copy is static Alpha preview content.">
          <div className="space-y-3">
            {priorityInsights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone={item.tone}>{item.priority}</Badge>
                      <h3 className="font-semibold text-slate-950">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">{item.owner}</span>
                </div>
              </article>
            ))}
          </div>
        </OverviewPanel>

        <OverviewPanel title="What changed since last review" subtitle="Preview copy only; no live comparison job or stored review state exists in Alpha.">
          <ol className="space-y-3 text-sm text-slate-600">
            {changedSinceLastReview.map((item, index) => (
              <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-xs font-semibold text-white">{index + 1}</span>
                <span className="leading-6">{item}</span>
              </li>
            ))}
          </ol>
        </OverviewPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <OverviewPanel title="Health pulse preview" subtitle="A compact visual summary for executive review, not a live analytics chart.">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 p-5 text-white">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-50 ring-1 ring-white/10">Static Alpha demo</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-50 ring-1 ring-white/10">No live collection</span>
            </div>
            <div className="flex h-64 items-end gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 sm:gap-4 sm:p-5">
              {accountTrendPoints.map((point) => (
                <div key={point.label} className="flex min-w-0 flex-1 flex-col items-center gap-3">
                  <div className="w-full rounded-t-2xl bg-emerald-200/90 shadow-lg shadow-emerald-950/30" style={{ height: `${point.height}%` }} />
                  <div className="text-center">
                    <p className="text-xs text-emerald-50/70">{point.label}</p>
                    <p className="text-sm font-semibold">{point.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </OverviewPanel>

        <OverviewPanel title="Risk and readiness cards" subtitle="Manager-facing readiness context for official-source adoption.">
          <div className="space-y-3">
            {riskReadinessCards.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-medium text-slate-950">{item.label}</p>
                  <Badge tone={item.tone}>{item.status}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </OverviewPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <OverviewPanel title="Provider and compliance notice" subtitle="Official-source-safe summary boundaries.">
          <div className="space-y-3">
            {providerHealth.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{item.label}</p>
                  <Badge tone={statusTone(item.status)}>{item.status}</Badge>
                </div>
                <p className="mt-1 text-xs text-slate-500">{item.value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              Live summary data must come from official Meta APIs or approved licensed providers only. Alpha does not collect live Instagram data.
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              {sourcePolicy.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-50 p-3">{item}</li>
              ))}
            </ul>
          </div>
        </OverviewPanel>

        <OverviewPanel title="Executive review table" subtitle="Static account summary rows prepared for future official provider ingestion.">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Summary item</th>
                  <th className="px-4 py-3">Management meaning</th>
                  <th className="px-4 py-3">Source</th>
                  <th className="px-4 py-3">Confidence</th>
                  <th className="px-4 py-3">Freshness</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {recentActivity.map((row) => (
                  <tr key={`${row.event}-${row.freshness}`} className="hover:bg-slate-50/70">
                    <td className="px-4 py-4 font-medium text-slate-950">{row.event}</td>
                    <td className="px-4 py-4 text-slate-600">{row.direction}</td>
                    <td className="px-4 py-4 text-slate-600">{row.source}</td>
                    <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                    <td className="px-4 py-4 text-slate-600">{row.freshness}</td>
                    <td className="px-4 py-4"><Badge>{row.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </OverviewPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.7fr)]">
        <OverviewPanel title="Collection readiness preview" subtitle="Mock readiness rows only; no queue, webhook, database write, or provider call is running.">
          <div className="grid gap-3 lg:grid-cols-3">
            {recentCollectionJobs.map((job) => (
              <div key={`${job.job}-${job.freshness}`} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="font-medium text-slate-950">{job.job}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{job.source} · {job.freshness}</p>
                <div className="mt-3"><Badge tone="slate">{job.status}</Badge></div>
              </div>
            ))}
          </div>
        </OverviewPanel>

        <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-200/60">
          <h2 className="text-base font-semibold text-slate-950">Alpha empty/loading/error state</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">If this were connected, a live manager summary would load here. In Alpha, the state stays static and safe.</p>
          <div className="mt-4 space-y-2">
            {emptyStateNotes.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
        </section>
      </section>

      <OverviewPanel title="Anomaly notes for executive review" subtitle="Converted from dashboard-style alerts into manager-readable preview notes.">
        <div className="grid gap-3 md:grid-cols-3">
          {anomalyHighlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-medium text-slate-900">{item.title}</p>
                <Badge tone={item.severity === "High" ? "rose" : item.severity === "Positive" ? "emerald" : "amber"}>{item.severity}</Badge>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </OverviewPanel>
    </div>
  );
}
