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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function PostsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
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
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function PostsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{accountPostsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{accountPostsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountPostsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountPostsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Post preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{accountPostsProfile.name} post preview</h1>
          <p className="mt-2 text-base text-slate-600">{accountPostsProfile.handle} · {accountPostsProfile.accountType}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[28rem]">
          <p className="font-semibold text-slate-900">Mock post intelligence</p>
          <p className="mt-1">Post collection disabled in Alpha. Preview performance only and requires official source connection.</p>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Post filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for future media filtering and saved views.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {accountPostFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
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
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className={`flex h-48 items-end justify-between bg-gradient-to-br p-4 ${toneClasses(post.thumbnailTone)}`}>
        <div className="rounded-2xl bg-white/85 px-3 py-2 text-xs font-semibold text-slate-900 shadow-sm">Mock thumbnail</div>
        <Badge className={mediaTypeClasses(post.mediaType)}>{formatToken(post.mediaType)}</Badge>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <h3 className="text-base font-semibold text-slate-950">{post.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{post.captionPreview}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <MetricPill label="Preview likes" value={post.metrics.likes} />
          <MetricPill label="Preview comments" value={post.metrics.comments} />
          <MetricPill label="Preview saves" value={post.metrics.saves} />
          <MetricPill label="Preview shares" value={post.metrics.shares} />
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{post.metrics.engagementRate} ER</Badge>
          <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountPostFreshnessLabels[post.freshness]}</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{post.provider}</Badge>
          <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{post.confidenceScore}% {accountPostConfidenceLabels[post.confidence]}</Badge>
          <Badge className={policyClasses(post.policyClassification)}>{formatToken(post.policyClassification)}</Badge>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
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

function ComplianceNotice() {
  return (
    <PostsPanel title={accountPostsComplianceNotice.title} subtitle="Official APIs and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountPostsComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account media only.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Official APIs and licensed providers only for future approved data.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, or credential automation.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No private account access or hidden surveillance workflows.</p>
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
    <PostsPanel title="Enterprise post preview table" subtitle="Static mock post rows only. No live post collection is running.">
      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Post</th>
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountPostKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.7fr)]">
        <PostsPanel title="Post preview grid" subtitle="Mock post cards for connected professional account media. No live post collection is running.">
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