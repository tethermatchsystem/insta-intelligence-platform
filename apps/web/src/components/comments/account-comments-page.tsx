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

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function CommentsPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof accountCommentKpis)[number]) {
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

function CommentsHeader() {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-blue-50 text-blue-700 ring-blue-100">{accountCommentsProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-50 text-emerald-700 ring-emerald-100">{accountCommentsProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">Fresh {accountCommentsProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountCommentsProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Comment intelligence and moderation</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{accountCommentsProfile.name} comments</h1>
          <p className="mt-2 text-base text-slate-600">{accountCommentsProfile.handle} · {accountCommentsProfile.accountType}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[28rem]">
          <p className="font-semibold text-slate-900">Mock-only owned comments view</p>
          <p className="mt-1">Premium comment intelligence prepared for official APIs and licensed providers only. No live integrations are connected.</p>
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
          <p className="text-sm font-semibold text-slate-950">Comment filters</p>
          <p className="mt-1 text-xs text-slate-500">Static placeholders for future moderation views, queues, and saved filters.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {accountCommentFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProviderSourcePanel() {
  return (
    <CommentsPanel title="Provider/source readiness" subtitle="Compliant future sources for comment intelligence.">
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
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Connected professional account comments only.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Official APIs and licensed providers only for future live data.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No scraping, fake login automation, credential automation, or anti-bot bypass.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">No private account access, hidden surveillance, or arbitrary personal tracking.</p>
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

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {accountCommentKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.75fr)]">
        <CommentsPanel title="Comment stream" subtitle="Mock owned comments with sentiment, intent, urgency, confidence, source, and suggested action metadata.">
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