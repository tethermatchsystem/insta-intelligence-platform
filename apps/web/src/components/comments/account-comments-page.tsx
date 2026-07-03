import { AccountCommentIntelligencePanels } from "@/components/comments/comment-intelligence-panels";
import { CommentStream } from "@/components/comments/comment-stream";
import { CommentIntelligenceTable } from "@/components/data-tables/comment-intelligence-table";
import {
  accountCommentFilters,
  accountCommentKpis,
  accountCommentProviderBadges,
  accountCommentsComplianceNotice,
  accountCommentsProfile,
  type AccountCommentPolicyClassification,
  type AccountCommentTone,
} from "@/lib/mock-data/account-comments";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: AccountCommentTone) {
  const tones: Record<AccountCommentTone, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    green: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
}

function policyClasses(policy: AccountCommentPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

const commentPreviewBadges = [
  "Preview-only content intelligence",
  "Mock comment metrics",
  "No live Instagram data is collected in Alpha",
];

const commentOperationalCards = [
  {
    title: "Comment ingestion boundary",
    detail: "Comment streams, sentiment labels, and moderation recommendations are static Alpha previews. No content ingestion or backend action runs from this page.",
    badge: "No content ingestion runs in Alpha",
    tone: "slate" as AccountCommentTone,
  },
  {
    title: "Official source readiness",
    detail: "Owned comment intelligence requires official source connection before any private-beta moderation or response workflow can run.",
    badge: "Requires official source connection",
    tone: "green" as AccountCommentTone,
  },
  {
    title: "Provider approval boundary",
    detail: "Advanced moderation or enrichment remains gated until provider approval and policy review exist where applicable.",
    badge: "Requires provider approval where applicable",
    tone: "amber" as AccountCommentTone,
  },
];

const commentSafetyChecks = [
  "No content ingestion runs in Alpha",
  "No backend action runs from this page",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CommentsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountCommentKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
      <p className="mt-3 text-xs font-medium text-slate-400">Static Alpha preview · mock comment metric</p>
    </div>
  );
}

function CommentsHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
      <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {commentPreviewBadges.map((badge) => (
                <Badge key={badge} className="bg-white/10 text-slate-100 ring-white/10">{badge}</Badge>
              ))}
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">Comment monitoring disabled in Alpha</Badge>
            </div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Comment preview</p>
            <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountCommentsProfile.name} comment preview</h1>
            <p className="mt-2 text-base text-slate-300">{accountCommentsProfile.handle} · {accountCommentsProfile.accountType}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[29rem]">
            <p className="font-semibold text-white">Mock comment intelligence</p>
            <p className="mt-1">Comment monitoring is disabled in Alpha. Preview sentiment requires official source connection and a future private-beta moderation service.</p>
            <button disabled className="mt-4 w-full cursor-not-allowed rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300">
              Comment ingestion disabled in Alpha
            </button>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{accountCommentsProfile.sourceBadge}</Badge>
              <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{accountCommentsProfile.confidenceBadge}</Badge>
              <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{accountCommentsProfile.freshnessBadge}</Badge>
              <Badge className="bg-slate-400/10 text-slate-100 ring-slate-300/20">{accountCommentsProfile.integrationBadge}</Badge>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static comment filters</p>
          <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">Static placeholders for future moderation views, queues, and saved filters. No live query runs, no queue state is saved, and no backend action runs from this page.</p>
        </div>
        <div className="flex w-full flex-col gap-2 xl:w-auto xl:items-end">
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Moderation actions disabled in Alpha
          </button>
          <div className="flex flex-wrap gap-2">
            {accountCommentFilters.map((filter) => (
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

function ProviderSourcePanel() {
  return (
    <CommentsPanel title="Provider/source readiness" subtitle="Requires official source connection or private-beta moderation service before any live monitoring.">
      <div className="space-y-3">
        {accountCommentProviderBadges.map((provider) => (
          <div key={provider.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium text-slate-950">{provider.label}</p>
              <Badge className={policyClasses(provider.classification)}>{formatToken(provider.classification)}</Badge>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">{provider.description}</p>
            <div className="mt-3">
              <Badge className={toneClasses(provider.tone)}>{formatToken(provider.sourceType)}</Badge>
            </div>
          </div>
        ))}
      </div>
    </CommentsPanel>
  );
}

function ComplianceNotice() {
  return (
    <CommentsPanel title={accountCommentsComplianceNotice.title} subtitle="Official APIs and licensed providers only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{accountCommentsComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account comments only. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Official APIs and licensed providers only for future approved data. Requires official source connection.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No content ingestion, moderation job, response send, notification, or backend action runs from this page.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, credential automation, private account access, hidden surveillance, arbitrary personal tracking, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-3">
          {accountCommentsComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </CommentsPanel>
  );
}

export function AccountCommentsPage() {
  return (
    <div className="space-y-6">
      <CommentsHeader />

      <section className="grid gap-4 lg:grid-cols-3">
        {commentOperationalCards.map((card) => (
          <div key={card.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
            <Badge className={toneClasses(card.tone)}>{card.badge}</Badge>
            <h2 className="mt-4 text-base font-semibold text-slate-950">{card.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountCommentKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.75fr)]">
        <CommentsPanel title="Comment preview stream" subtitle="Mock owned comments with preview sentiment, intent, urgency, confidence, source, and recommendation metadata.">
          <div className="mb-4 grid gap-2 sm:grid-cols-3">
            {commentSafetyChecks.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium leading-5 text-slate-600">
                {item}
              </p>
            ))}
          </div>
          <CommentStream />
        </CommentsPanel>

        <ProviderSourcePanel />
      </section>

      <AccountCommentIntelligencePanels />
      <ComplianceNotice />
      <CommentIntelligenceTable />
    </div>
  );
}