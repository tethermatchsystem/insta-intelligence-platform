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
  type TimelineFreshness,
  type TimelinePolicyClassification,
  type TimelineStatus,
  type TimelineTone,
} from "@/lib/mock-data/account-timeline";

const accountTimelineProfile = {
  name: "Catalyst Studio",
  handle: "@catalyst.studio",
  accountType: "Connected professional account",
  freshness: "unavailable" as TimelineFreshness,
  providerId: "meta-graph-api",
  confidenceLabel: "Alpha demo only",
};

const timelinePreviewBadges = [
  "Preview-only account intelligence",
  "Mock account timeline",
  "No live Instagram data is collected in Alpha",
];

const timelineOperationalCards = [
  {
    title: "Timeline ingestion",
    detail: "Static preview events only. No account connection, provider job, webhook, queue, or backend timeline action runs in Alpha.",
    badge: "No backend action runs from this page",
    tone: "slate" as TimelineTone,
  },
  {
    title: "Official source readiness",
    detail: "Owned comments, posts, mentions, insights, and ads require official Meta sources before any private-beta collection is enabled.",
    badge: "Requires official source connection",
    tone: "green" as TimelineTone,
  },
  {
    title: "Provider approval boundary",
    detail: "Relationship-change placeholders remain licensed-provider-only and gated until provider approval and policy review exist.",
    badge: "Requires provider approval where applicable",
    tone: "amber" as TimelineTone,
  },
];

const timelineSafetyChecks = [
  "No account connection runs in Alpha",
  "No backend action runs from this page",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
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
  return status === "gated" ? "Requires official source connection" : "Preview event";
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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function TimelinePanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function KpiCard({ label, value, delta, tone, description }: (typeof accountTimelineKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static timeline filters</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">Static placeholders for future event type, policy, and freshness filters. No live query runs, no saved view changes are persisted, and no backend action runs from this page.</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEventCard({ event }: { event: (typeof accountTimelineEvents)[number] }) {
  const confidenceText = event.confidence.score === null ? accountTimelineConfidenceValues[event.confidence.label] : `${event.confidence.score}% ${event.confidence.label}`;

  return (
    <article className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="absolute -left-[1.7rem] top-6 h-4 w-4 rounded-full border-4 border-white bg-slate-950 shadow-sm" />
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{formatTimestamp(event.timestamp)}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{event.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{event.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 xl:justify-end">
          <Badge className={statusClasses(event.status)}>{statusLabel(event.status)}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only</Badge>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={directionClasses(event.direction)}>{formatToken(event.direction)}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{event.sourceProvider}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{confidenceText}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{freshnessLabel(event.freshness)}</Badge>
        <Badge className={policyClasses(event.policyClassification)}>{formatToken(event.policyClassification)}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{accountTimelineFreshnessValues[event.freshness]}</p>
    </article>
  );
}

function ComplianceNotice() {
  return (
    <TimelinePanel title={accountTimelineComplianceNotice.title} subtitle="Official APIs and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountTimelineComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Use official APIs and licensed providers only for live implementation. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Arbitrary recent follows/unfollows are licensed-provider-only placeholders and require provider approval where applicable.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, credential automation, or anti-bot bypass.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No private account access, hidden surveillance workflows, account connection, provider job, or backend action runs from this page.</p>
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
    <TimelinePanel title="Enterprise preview event table" subtitle="Static mock rows only. Timeline ingestion disabled in Alpha.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Event</th>
              <th className="px-4 py-3">Direction</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Freshness</th>
              <th className="px-4 py-3">Policy</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountTimelineTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.event}</td>
                <td className="px-4 py-4"><Badge className={directionClasses(row.direction)}>{formatToken(row.direction)}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{row.provider}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4 text-slate-600">{freshnessLabel(row.freshness)}</td>
                <td className="px-4 py-4"><Badge className={policyClasses(row.policyClassification)}>{formatToken(row.policyClassification)}</Badge></td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{statusLabel(row.status)}</Badge></td>
              </tr>
            ))}
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
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {timelinePreviewBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-slate-100 ring-white/10">{badge}</Badge>
              ))}
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Timeline ingestion disabled in Alpha</Badge>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Timeline preview</p>
            <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountTimelineProfile.name} timeline preview</h1>
            <p className="mt-2 text-base text-slate-300">{accountTimelineProfile.handle} · {accountTimelineProfile.accountType}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
            <p className="font-semibold text-white">Mock activity timeline</p>
            <p className="mt-1">Preview events only. Requires official source connection before any real timeline ingestion.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{activeProvider.label}</Badge>
              <Badge className="bg-violet-400/10 text-violet-100 ring-violet-300/20">{accountTimelineProfile.confidenceLabel}</Badge>
              <Badge className="bg-slate-400/10 text-slate-100 ring-slate-300/20">No live timeline collection is running</Badge>
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

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.7fr)]">
        <TimelinePanel title="Mock activity timeline" subtitle="Preview events only. No live timeline collection is running.">
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

        <TimelinePanel title="Provider/source badges" subtitle="Allowed future source categories represented in this Alpha demo only.">
          <div className="space-y-3">
            {accountTimelineProviderBadges.map((provider) => (
              <div key={provider.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-950">{provider.label}</p>
                  <Badge className={toneClasses(provider.tone)}>{formatToken(provider.classification)}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{provider.description}</p>
              </div>
            ))}
          </div>
        </TimelinePanel>
      </section>

      <ComplianceNotice />
      <TimelineTable />
    </div>
  );
}