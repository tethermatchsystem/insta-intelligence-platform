import {
  accountFollowingConfidenceLabels,
  accountFollowingFreshnessLabels,
  accountFollowingPolicyLabels,
  accountFollowingRelationshipLabels,
  accountFollowingStatusLabels,
  followingRelationshipCards,
  gatedFollowingIdentityPanel,
  type AccountFollowingPolicyClassification,
  type AccountFollowingRelationshipCard,
  type AccountFollowingStatus,
  type AccountFollowingTone,
} from "@/lib/mock-data/account-following";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: AccountFollowingTone) {
  const tones: Record<AccountFollowingTone, string> = {
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

function policyClasses(policy: AccountFollowingPolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: AccountFollowingStatus) {
  if (status === "available") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["monitoring", "snapshot"].includes(status)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (status === "gated") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function RelationshipCard({ relationship }: { relationship: AccountFollowingRelationshipCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Aggregated relationship card</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-950">{relationship.title}</h3>
        </div>
        <Badge className={toneClasses(relationship.tone)}>{relationship.share}</Badge>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{relationship.description}</p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Count</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{relationship.count}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Change</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{relationship.change}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Overlap</p>
          <p className="mt-1 text-sm font-semibold text-slate-950">{relationship.overlapEstimate}</p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={toneClasses(relationship.tone)}>{accountFollowingRelationshipLabels[relationship.relationshipType]}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{relationship.sourceProvider}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{accountFollowingFreshnessLabels[relationship.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">{relationship.confidenceScore}% {accountFollowingConfidenceLabels[relationship.confidence]}</Badge>
        <Badge className={policyClasses(relationship.policyClassification)}>{accountFollowingPolicyLabels[relationship.policyClassification]}</Badge>
        <Badge className={statusClasses(relationship.status)}>{accountFollowingStatusLabels[relationship.status]}</Badge>
      </div>

      <p className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600">
        No private identity tracking: this card represents aggregate following categories and relationship summaries only.
      </p>
    </article>
  );
}

function GatedIdentityPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedFollowingIdentityPanel.title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-amber-900">{gatedFollowingIdentityPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedFollowingIdentityPanel.policyClassification)}>{accountFollowingPolicyLabels[gatedFollowingIdentityPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedFollowingIdentityPanel.status)}>{accountFollowingStatusLabels[gatedFollowingIdentityPanel.status]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedFollowingIdentityPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{accountFollowingFreshnessLabels[gatedFollowingIdentityPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedFollowingIdentityPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedFollowingIdentityPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

export function FollowingIntelligenceCards() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 xl:grid-cols-3">
        {followingRelationshipCards.map((relationship) => (
          <RelationshipCard key={relationship.id} relationship={relationship} />
        ))}
      </section>

      <GatedIdentityPanel />
    </div>
  );
}