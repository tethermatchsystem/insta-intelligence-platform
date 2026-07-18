import Link from "next/link";
import type { ReactNode } from "react";
import {
  accountTimelineComplianceNotice,
  accountTimelineConfidenceValues,
  accountTimelineEvents,
  accountTimelineFilters,
  accountTimelineFreshnessValues,
  accountTimelineKpis,
  accountTimelineProviderBadges,
  accountTimelineTableRows,
  type TimelineDirection,
  type TimelineEventType,
  type TimelineFreshness,
  type TimelinePolicyClassification,
  type TimelineStatus,
  type TimelineTone,
} from "@/lib/mock-data/account-timeline";

type TimelineLane = "identity" | "content" | "community" | "ads" | "governance";
type TimelineSeverity = "stable" | "info" | "attention" | "gated";

const accountTimelineProfile = {
  name: "Example Brand",
  handle: "@examplebrand",
  accountType: "Business professional account",
  freshness: "unavailable" as TimelineFreshness,
  providerId: "meta-graph-api",
  confidenceLabel: "Alpha demo only",
};

const timelinePreviewBadges = [
  "Account activity chronology",
  "Audit-safe Alpha preview",
  "No webhooks, monitors, scraping, or hidden tracking",
];

const timelineNavLinks = [
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

const timelineOperationalCards = [
  {
    title: "Chronology scope",
    detail: "Static account events are arranged by audit lane and timestamp. No live webhook, monitor, queue, export, or backend timeline job runs in Alpha.",
    badge: "Preview-only event log",
    tone: "blue" as TimelineTone,
  },
  {
    title: "Source labeling",
    detail: "Every mock entry displays source provider, policy classification, confidence, freshness, and status so future ingestion remains explainable.",
    badge: "Provenance-first",
    tone: "green" as TimelineTone,
  },
  {
    title: "Governance gates",
    detail: "Relationship-change and identity-level placeholders remain disabled or licensed-provider-only until compliant provider approval exists.",
    badge: "Restricted surfaces gated",
    tone: "amber" as TimelineTone,
  },
];

const timelineSafetyChecks = [
  "No account connection runs in Alpha",
  "No live webhooks, monitors, queues, or alerts run from this page",
  "No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass",
];

const timelineLanes: Array<{
  id: TimelineLane;
  label: string;
  description: string;
  source: string;
  tone: TimelineTone;
}> = [
  {
    id: "identity",
    label: "Identity & account snapshots",
    description: "Profile, media count, follower-count, and account-level snapshot previews.",
    source: "Meta Insights / Graph API placeholders",
    tone: "blue",
  },
  {
    id: "content",
    label: "Owned content & engagement",
    description: "Owned post and engagement-signal entries prepared for official analytics.",
    source: "Meta Graph / Insights placeholders",
    tone: "purple",
  },
  {
    id: "community",
    label: "Community interactions",
    description: "Owned comments and eligible mention previews, not generic moderation cards.",
    source: "Official-safe interaction placeholders",
    tone: "green",
  },
  {
    id: "ads",
    label: "Paid and public visibility",
    description: "Ad visibility examples where official permissions or public library rules allow.",
    source: "Meta Marketing API placeholder",
    tone: "purple",
  },
  {
    id: "governance",
    label: "Governance and gated signals",
    description: "Licensed-provider-only relationship placeholders and disabled identity-level areas.",
    source: "Policy gate placeholder",
    tone: "amber",
  },
];

const emptyStateNotes = [
  "No live timeline ingestion is available in Alpha.",
  "No hidden monitoring, webhook subscription, export, download, or saved audit report is created.",
  "Timeline rows are static preview entries for product review only.",
];

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatTimestamp(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toneClasses(tone: TimelineTone) {
  const tones: Record<TimelineTone, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    red: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return tones[tone];
}

function directionClasses(direction: TimelineDirection) {
  const directions: Record<TimelineDirection, string> = {
    inbound: "bg-sky-50 text-sky-700 ring-sky-100",
    outbound: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    system: "bg-slate-100 text-slate-700 ring-slate-200",
    neutral: "bg-zinc-100 text-zinc-700 ring-zinc-200",
  };

  return directions[direction];
}

function policyClasses(policy: TimelinePolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: TimelineStatus) {
  if (["complete", "stable"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["detected", "monitoring"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (["review", "gated"].includes(status)) return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function statusLabel(status: TimelineStatus) {
  const labels: Record<TimelineStatus, string> = {
    complete: "Recorded preview",
    detected: "Detected preview",
    monitoring: "Visible preview",
    review: "Review preview",
    stable: "Stable preview",
    gated: "Gated",
  };

  return labels[status];
}

function severityForStatus(status: TimelineStatus): TimelineSeverity {
  if (status === "gated") return "gated";
  if (status === "review") return "attention";
  if (["complete", "stable"].includes(status)) return "stable";
  return "info";
}

function severityClasses(severity: TimelineSeverity) {
  const severities: Record<TimelineSeverity, string> = {
    stable: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    attention: "bg-amber-50 text-amber-700 ring-amber-100",
    gated: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return severities[severity];
}

function severityLabel(severity: TimelineSeverity) {
  const labels: Record<TimelineSeverity, string> = {
    stable: "Stable",
    info: "Informational",
    attention: "Needs review",
    gated: "Gated",
  };

  return labels[severity];
}

function freshnessLabel(freshness: TimelineFreshness) {
  const labels: Record<TimelineFreshness, string> = {
    live: "Alpha demo only",
    near_real_time: "Requires official source connection",
    hourly: "Static preview",
    daily: "Static preview",
    manual: "Manual preview",
    unavailable: "Unavailable in Alpha",
  };

  return labels[freshness];
}

function laneForEvent(type: TimelineEventType): TimelineLane {
  if (["snapshot_refresh", "follower_count_changed"].includes(type)) return "identity";
  if (["post_published", "engagement_spike"].includes(type)) return "content";
  if (["comment_inbound", "mention_inbound"].includes(type)) return "community";
  if (type === "ad_detected") return "ads";
  return "governance";
}

function laneClasses(lane: TimelineLane) {
  const lanes: Record<TimelineLane, string> = {
    identity: "bg-blue-50 text-blue-700 ring-blue-100",
    content: "bg-violet-50 text-violet-700 ring-violet-100",
    community: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    ads: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-100",
    governance: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return lanes[lane];
}

function laneDotClasses(lane: TimelineLane) {
  const lanes: Record<TimelineLane, string> = {
    identity: "bg-blue-600",
    content: "bg-violet-600",
    community: "bg-emerald-600",
    ads: "bg-fuchsia-600",
    governance: "bg-amber-600",
  };

  return lanes[lane];
}

function laneLabel(lane: TimelineLane) {
  return timelineLanes.find((item) => item.id === lane)?.label ?? formatToken(lane);
}

function confidenceText(event: (typeof accountTimelineEvents)[number]) {
  return event.confidence.score === null ? accountTimelineConfidenceValues[event.confidence.label] : `${event.confidence.score}% ${event.confidence.label}`;
}

function Badge({ children, className }: { children: ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function TimelinePanel({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountTimelineKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function AccountTimelineNav() {
  return (
    <nav className="flex gap-2 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/70" aria-label="Account sections">
      {timelineNavLinks.map((link) => {
        const active = link.label === "Timeline";

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
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Chronology review controls</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
            Static placeholders for future lane, source, policy, and severity review. No live query, webhook subscription, saved audit view, export, or backend action runs from this page.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 xl:w-auto xl:items-end">
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Timeline ingestion disabled in Alpha
          </button>
          <div className="flex flex-wrap gap-2">
            {accountTimelineFilters.map((group) => (
              <Badge key={group.id} className="bg-slate-100 text-slate-700 ring-slate-200">
                {group.label}: {group.options[0]?.label}
              </Badge>
            ))}
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">Lane: All audit lanes</Badge>
            <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Severity: Include gated</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineLaneBoard() {
  return (
    <TimelinePanel title="Event lanes" subtitle="Audit-safe grouping for static entries. Counts are derived from the mock Alpha event list only.">
      <div className="grid gap-3 lg:grid-cols-5">
        {timelineLanes.map((lane) => {
          const count = accountTimelineEvents.filter((event) => laneForEvent(event.type) === lane.id).length;

          return (
            <div key={lane.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className={`h-3 w-3 rounded-full ${laneDotClasses(lane.id)}`} />
                <Badge className={toneClasses(lane.tone)}>{count} entries</Badge>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{lane.label}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-500">{lane.description}</p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-400">{lane.source}</p>
            </div>
          );
        })}
      </div>
    </TimelinePanel>
  );
}

function TimelineEventCard({ event }: { event: (typeof accountTimelineEvents)[number] }) {
  const lane = laneForEvent(event.type);
  const severity = severityForStatus(event.status);

  return (
    <article className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className={`absolute -left-[1.7rem] top-6 h-4 w-4 rounded-full border-4 border-white shadow-sm ${laneDotClasses(lane)}`} />
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge className={laneClasses(lane)}>{laneLabel(lane)}</Badge>
            <Badge className={severityClasses(severity)}>{severityLabel(severity)}</Badge>
            <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{formatTimestamp(event.timestamp)}</span>
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-950">{event.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{event.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 xl:justify-end">
          <Badge className={statusClasses(event.status)}>{statusLabel(event.status)}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only</Badge>
        </div>
      </div>
      <div className="mt-4 grid gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-xs text-slate-600 md:grid-cols-2 2xl:grid-cols-4">
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-400">Direction</p>
          <div className="mt-2"><Badge className={directionClasses(event.direction)}>{formatToken(event.direction)}</Badge></div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-400">Source label</p>
          <p className="mt-2 font-medium text-slate-700">{event.sourceProvider}</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-400">Policy</p>
          <div className="mt-2"><Badge className={policyClasses(event.policyClassification)}>{formatToken(event.policyClassification)}</Badge></div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-wide text-slate-400">Freshness</p>
          <p className="mt-2 font-medium text-slate-700">{freshnessLabel(event.freshness)}</p>
        </div>
      </div>
      <div className="mt-3 grid gap-2 text-xs leading-5 text-slate-500 lg:grid-cols-2">
        <p className="rounded-2xl bg-slate-50 p-3">Confidence: {confidenceText(event)}</p>
        <p className="rounded-2xl bg-slate-50 p-3">Audit note: {accountTimelineFreshnessValues[event.freshness]}</p>
      </div>
    </article>
  );
}

function ComplianceNotice() {
  return (
    <TimelinePanel title={accountTimelineComplianceNotice.title} subtitle="Official APIs and licensed providers only; Alpha does not run live collection.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountTimelineComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Use official APIs and licensed providers only for live implementation. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Arbitrary recent follows/unfollows are licensed-provider-only placeholders and require provider approval where applicable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, credential automation, or anti-bot bypass.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No private account access, hidden surveillance workflows, live webhooks, monitors, queues, provider jobs, or backend actions run from this page.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountTimelineComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </TimelinePanel>
  );
}

function TimelineTable() {
  return (
    <TimelinePanel title="Enterprise chronology table" subtitle="Static mock rows only. Timeline ingestion, exports, downloads, and saved reports are disabled in Alpha.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[1040px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Observed</th>
              <th className="px-4 py-3">Lane</th>
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Severity / status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountTimelineTableRows.map((row) => {
              const event = accountTimelineEvents.find((item) => item.id === row.id);
              const lane = event ? laneForEvent(event.type) : "governance";
              const severity = severityForStatus(row.status);

              return (
                <tr key={row.id} className="hover:bg-slate-50/70">
                  <td className="px-4 py-4 text-slate-600">{formatTimestamp(row.observedAt)}</td>
                  <td className="px-4 py-4"><Badge className={laneClasses(lane)}>{laneLabel(lane)}</Badge></td>
                  <td className="px-4 py-4 font-medium text-slate-950">{row.event}</td>
                  <td className="px-4 py-4 text-slate-600">{row.provider}</td>
                  <td className="px-4 py-4"><Badge className={policyClasses(row.policyClassification)}>{formatToken(row.policyClassification)}</Badge></td>
                  <td className="px-4 py-4 text-slate-600">{freshnessLabel(row.freshness)}</td>
                  <td className="px-4 py-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge className={severityClasses(severity)}>{severityLabel(severity)}</Badge>
                      <Badge className={statusClasses(row.status)}>{statusLabel(row.status)}</Badge>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </TimelinePanel>
  );
}

function TimelineHeader() {
  const activeProvider = accountTimelineProviderBadges.find((provider) => provider.id === accountTimelineProfile.providerId) ?? accountTimelineProviderBadges[0];

  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {timelinePreviewBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-slate-100 ring-white/10">{badge}</Badge>
              ))}
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-200/80">Activity chronology</p>
            <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountTimelineProfile.name} audit-safe timeline</h1>
            <p className="mt-2 max-w-3xl text-base leading-7 text-blue-50/80">
              Preview-only chronology of account events with lanes, source labels, severity, confidence, freshness, and policy classification.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-blue-50/80 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
            <p className="font-semibold text-white">Timeline collection boundary</p>
            <p className="mt-1">No live timeline collection is running. Real chronology entries require official source connection and provider approval where applicable.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{activeProvider.label}</Badge>
              <Badge className="bg-violet-400/10 text-violet-100 ring-violet-300/20">{accountTimelineProfile.confidenceLabel}</Badge>
              <Badge className="bg-slate-400/10 text-slate-100 ring-slate-300/20">Freshness: {freshnessLabel(accountTimelineProfile.freshness)}</Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export function AccountTimelinePage() {
  return (
    <div className="space-y-6">
      <TimelineHeader />
      <AccountTimelineNav />

      <section className="grid gap-4 lg:grid-cols-3">
        {timelineOperationalCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <Badge className={toneClasses(card.tone)}>{card.badge}</Badge>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {accountTimelineKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <TimelineLaneBoard />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(360px,0.7fr)]">
        <TimelinePanel title="Audit-safe activity chronology" subtitle="Preview entries are grouped by lane and ordered by timestamp. This is not a comments queue, generic card feed, or live monitor.">
          <div className="mb-4 grid gap-2 sm:grid-cols-3">
            {timelineSafetyChecks.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
          <div className="relative ml-4 space-y-4 border-l border-slate-200 pl-5 sm:ml-6 sm:pl-6">
            {accountTimelineEvents.map((event) => (
              <TimelineEventCard key={event.id} event={event} />
            ))}
          </div>
        </TimelinePanel>

        <div className="space-y-6">
          <TimelinePanel title="Source and provenance legend" subtitle="Allowed future source categories represented in this Alpha demo only.">
            <div className="space-y-3">
              {accountTimelineProviderBadges.map((provider) => (
                <div key={provider.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="min-w-0 break-words font-medium text-slate-950">{provider.label}</p>
                    <Badge className={toneClasses(provider.tone)}>{formatToken(provider.classification)}</Badge>
                  </div>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{provider.description}</p>
                </div>
              ))}
            </div>
          </TimelinePanel>

          <TimelinePanel title="Audit boundary" subtitle="Clear limits for Alpha chronology review.">
            <div className="space-y-3 text-sm leading-6 text-slate-600">
              <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Timeline entries are static mock records for product review. They do not represent live webhook delivery, background monitoring, or hidden tracking.</p>
              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Gated relationship events are placeholders only and must remain licensed-provider-only before implementation.</p>
            </div>
          </TimelinePanel>
        </div>
      </section>

      <ComplianceNotice />
      <TimelineTable />

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-200/60">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Alpha empty/loading/error state</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">If live chronology were enabled, loading and error states would appear here. In Alpha, the page stays static and non-operational.</p>
          </div>
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Live chronology unavailable
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {emptyStateNotes.map((note) => (
            <p key={note} className="rounded-2xl border border-slate-200 bg-white p-3 text-xs font-medium leading-5 text-slate-600">{note}</p>
          ))}
        </div>
      </section>
    </div>
  );
}