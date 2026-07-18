import { AccountContextNavigation } from "@/components/accounts/account-context-navigation";
import {
  accountPostConfidenceLabels,
  accountPostFilters,
  accountPostFreshnessLabels,
  accountPostKpis,
  accountPostProviderBadges,
  accountPostTableRows,
  accountPosts,
  accountPostsComplianceNotice,
  accountPostsProfile,
  postingCadence,
  topPerformingPosts,
  underperformingPosts,
  type AccountPost,
  type AccountPostMediaType,
  type AccountPostPolicyClassification,
  type AccountPostStatus,
  type AccountPostTone,
} from "@/lib/mock-data/account-posts";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function formatPublished(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toneClasses(tone: AccountPostTone) {
  const tones: Record<AccountPostTone, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
  };

  return tones[tone];
}

function mediaTypeClasses(type: AccountPostMediaType) {
  const types: Record<AccountPostMediaType, string> = {
    image: "bg-blue-50 text-blue-700 ring-blue-100",
    reel: "bg-violet-50 text-violet-700 ring-violet-100",
    carousel: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    video: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return types[type];
}

function policyClasses(policy: AccountPostPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function statusClasses(status: AccountPostStatus) {
  if (["published", "top_performer"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (status === "monitoring") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (["underperforming", "needs_review"].includes(status)) return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-slate-100 text-slate-700 ring-slate-200";
}

function postStatusLabel(status: AccountPostStatus) {
  if (["underperforming", "needs_review"].includes(status)) return "Preview review";
  if (status === "monitoring") return "Alpha demo only";
  return "Preview performance";
}

const postPreviewBadges = [
  "Media library preview",
  "Mock post-level performance",
  "No live Instagram data is collected in Alpha",
];

const postOperationalCards = [
  {
    title: "Library ingestion boundary",
    detail: "Media cards, post status, and performance signals are static Alpha previews. No content ingestion, refresh job, download, or backend action runs from this page.",
    badge: "No content ingestion runs in Alpha",
    tone: "slate" as AccountPostTone,
  },
  {
    title: "Connected-account source path",
    detail: "Future post media, captions, comments, and insights require connected professional account permissions and approved official-source coverage.",
    badge: "Requires official source connection",
    tone: "green" as AccountPostTone,
  },
  {
    title: "Content review decision",
    detail: "Use this preview to decide which content assets should be highlighted, investigated, or queued for future official-source analysis.",
    badge: "Requires provider approval where applicable",
    tone: "amber" as AccountPostTone,
  },
];

const postSafetyChecks = [
  "No content ingestion runs in Alpha",
  "No backend action runs from this page",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
];

const contentLibraryShelves = [
  {
    title: "Asset shelf",
    value: "Media cards",
    detail: "Review mock thumbnails, formats, captions, and publish context before opening any future source-backed workflow.",
    tone: "blue" as AccountPostTone,
  },
  {
    title: "Performance shelf",
    value: "Post signals",
    detail: "Compare static likes, saves, shares, comments, and engagement rate to decide what should be analyzed later.",
    tone: "purple" as AccountPostTone,
  },
  {
    title: "Source shelf",
    value: "Official-ready",
    detail: "Track connected-account readiness, confidence, freshness, and provider gating without running collection in Alpha.",
    tone: "green" as AccountPostTone,
  },
];

const contentLibraryNextSteps = [
  "Review mock top-performing assets before future official-source collection.",
  "Separate media format decisions from moderation or ad creative decisions.",
  "Keep post-level actions disabled until backend ingestion, provenance, and audit records exist.",
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function PostsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountPostKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">Supports content-library review · mock post metric</p>
    </div>
  );
}

function PostsHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {postPreviewBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-slate-100 ring-white/10">{badge}</Badge>
              ))}
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Content ingestion disabled in Alpha</Badge>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Media/content library</p>
            <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountPostsProfile.name} content library preview</h1>
            <p className="mt-2 text-base text-slate-300">{accountPostsProfile.handle} · {accountPostsProfile.accountType}</p>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300">
              Review mock owned-media cards, publishing context, official-source readiness, and post-level performance signals. This page is a content library preview, not a moderation inbox, analytics cockpit, or ad monitoring workflow.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[29rem]">
            <p className="font-semibold text-white">Connected account / official data source path</p>
            <p className="mt-1">Post collection is disabled in Alpha. Future media-library workflows require connected professional account permissions, official-source coverage, and provider approval where applicable.</p>
            <button disabled className="mt-4 w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
              Media collection disabled in Alpha
            </button>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{accountPostsProfile.sourceBadge}</Badge>
              <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{accountPostsProfile.confidenceBadge}</Badge>
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{accountPostsProfile.freshnessBadge}</Badge>
              <Badge className="bg-slate-400/10 text-slate-100 ring-slate-300/20">{accountPostsProfile.integrationBadge}</Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-blue-100 bg-blue-50/60 p-5 shadow-sm shadow-blue-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static library shelves</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-600">Static placeholders for future media filtering, format shelves, and saved content views. No live query runs, no saved view changes are persisted, and no backend action runs from this page.</p>
        </div>
        <div className="flex w-full flex-col gap-2 xl:w-auto xl:items-end">
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Post collection disabled in Alpha
          </button>
          <div className="flex flex-wrap gap-2">
            {accountPostFilters.map((filter) => (
              <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
                {filter.label}: {filter.options[0]}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-950">{value}</p>
    </div>
  );
}

function MediaCard({ post }: { post: AccountPost }) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className={`flex h-52 items-start justify-between bg-gradient-to-br p-4 ${toneClasses(post.thumbnailTone)}`}>
        <div className="rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm">Media asset · mock thumbnail</div>
        <Badge className={mediaTypeClasses(post.mediaType)}>{formatToken(post.mediaType)}</Badge>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-base font-semibold text-slate-950">{post.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{post.captionPreview}</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-3 text-xs leading-5 text-blue-900">
          Content-library decision: review this asset’s format, source readiness, and static performance signals before any future official-source ingestion workflow.
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MetricPill label="Preview likes" value={post.metrics.likes} />
          <MetricPill label="Preview comments" value={post.metrics.comments} />
          <MetricPill label="Preview saves" value={post.metrics.saves} />
          <MetricPill label="Preview shares" value={post.metrics.shares} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{post.metrics.engagementRate} ER</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Mock post metrics</Badge>
          <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountPostFreshnessLabels[post.freshness]}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{post.provider}</Badge>
          <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{post.confidenceScore}% {accountPostConfidenceLabels[post.confidence]}</Badge>
          <Badge className={policyClasses(post.policyClassification)}>{formatToken(post.policyClassification)}</Badge>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-xs text-slate-500">{formatPublished(post.publishedAt)}</p>
          <Badge className={statusClasses(post.status)}>{postStatusLabel(post.status)}</Badge>
        </div>
      </div>
    </article>
  );
}

function PerformanceList({ title, items }: { title: string; items: typeof topPerformingPosts }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-slate-950">{title}</p>
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex items-center justify-between gap-3">
            <p className="font-medium text-slate-950">{item.title}</p>
            <Badge className={toneClasses(item.tone)}>{item.value}</Badge>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function PerformanceSection() {
  return (
    <section className="grid gap-6 xl:grid-cols-3">
      <PostsPanel title="Preview performance highlights" subtitle="Mock winners ranked by owned engagement preview signals.">
        <PerformanceList title="High performers" items={topPerformingPosts} />
      </PostsPanel>
      <PostsPanel title="Preview review items" subtitle="Mock posts below demo baseline or queued for future review.">
        <PerformanceList title="Needs attention" items={underperformingPosts} />
      </PostsPanel>
      <PostsPanel title={postingCadence.title} subtitle="Cadence chart placeholder.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white">
          <p className="text-4xl font-semibold tracking-tight">{postingCadence.value}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{postingCadence.description}</p>
        </div>
      </PostsPanel>
    </section>
  );
}

function LibraryWorkflowSection() {
  return (
    <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)]">
      <PostsPanel title="Content library shelves" subtitle="Each shelf explains a different media-review decision for the Alpha demo.">
        <div className="grid gap-3 md:grid-cols-3">
          {contentLibraryShelves.map((shelf) => (
            <div key={shelf.title} className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
              <Badge className={toneClasses(shelf.tone)}>{shelf.value}</Badge>
              <h3 className="mt-4 text-sm font-semibold text-slate-950">{shelf.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{shelf.detail}</p>
            </div>
          ))}
        </div>
      </PostsPanel>

      <PostsPanel title="What should the user do next?" subtitle="Preview guidance only; no action is executed.">
        <ol className="space-y-3">
          {contentLibraryNextSteps.map((step, index) => (
            <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </PostsPanel>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <PostsPanel title={accountPostsComplianceNotice.title} subtitle="Official APIs and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountPostsComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account media only. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Official APIs and licensed providers only for future approved data. Requires official source connection.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No content ingestion, provider job, download, or backend action runs from this page.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, credential automation, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountPostsComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </PostsPanel>
  );
}

function PostsTable() {
  return (
    <PostsPanel title="Media inventory ledger" subtitle="Static mock post rows for inventory review. No live post collection is running.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Media asset</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Published</th>
              <th className="px-4 py-3">Engagement</th>
              <th className="px-4 py-3">Comments</th>
              <th className="px-4 py-3">Source</th>
              <th className="px-4 py-3">Confidence</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {accountPostTableRows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50/70">
                <td className="px-4 py-4 font-medium text-slate-950">{row.post}</td>
                <td className="px-4 py-4"><Badge className={mediaTypeClasses(row.type)}>{formatToken(row.type)}</Badge></td>
                <td className="px-4 py-4 text-slate-600">{formatPublished(row.published)}</td>
                <td className="px-4 py-4 text-slate-600">{row.engagement}</td>
                <td className="px-4 py-4 text-slate-600">{row.comments}</td>
                <td className="px-4 py-4 text-slate-600">{row.source}</td>
                <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                <td className="px-4 py-4"><Badge className={statusClasses(row.status)}>{postStatusLabel(row.status)}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PostsPanel>
  );
}

export function AccountPostsPage() {
  return (
    <div className="space-y-6">
      <PostsHeader />
      <AccountContextNavigation activeLabel="Posts" />

      <section className="grid gap-4 lg:grid-cols-3">
        {postOperationalCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <Badge className={toneClasses(card.tone)}>{card.badge}</Badge>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountPostKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <LibraryWorkflowSection />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.7fr)]">
        <PostsPanel title="Media asset grid" subtitle="Mock content-library cards for connected professional account media. No live post collection is running.">
          <div className="mb-4 grid gap-2 sm:grid-cols-3">
            {postSafetyChecks.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {accountPosts.map((post) => (
              <MediaCard key={post.id} post={post} />
            ))}
          </div>
        </PostsPanel>

        <PostsPanel title="Provider/source badges" subtitle="Compliant future source categories for mock post intelligence.">
          <div className="space-y-3">
            {accountPostProviderBadges.map((provider) => (
              <div key={provider.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-950">{provider.label}</p>
                  <Badge className={toneClasses(provider.tone)}>{formatToken(provider.classification)}</Badge>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-500">{provider.description}</p>
              </div>
            ))}
          </div>
        </PostsPanel>
      </section>

      <PerformanceSection />
      <ComplianceNotice />
      <PostsTable />
    </div>
  );
}