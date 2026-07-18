import Link from "next/link";
import type { ReactNode } from "react";
import { accountProfile, providerHealth, recentActivity, sourcePolicy } from "@/lib/mock-data/account-overview";

type Tone = "emerald" | "slate" | "blue" | "violet" | "amber" | "rose";

type DossierMetric = {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
};

type AccountSectionLink = {
  label: string;
  href: string;
  role: string;
  status: string;
  tone: Tone;
  description: string;
  compliance: string;
};

const dossierPreviewBadges = [
  "Account dossier / command center",
  "Alpha preview only",
  "No live Instagram data is collected",
];

const dossierMetrics: DossierMetric[] = [
  { label: "Dossier mode", value: "Command center", detail: "Account hub", tone: "blue" },
  { label: "Source posture", value: "Not connected", detail: "Alpha disabled", tone: "amber" },
  { label: "Sync state", value: "Static", detail: "No live jobs", tone: "slate" },
  { label: "Governance", value: "Bounded", detail: "Official-first", tone: "emerald" },
];

const accountSectionLinks: AccountSectionLink[] = [
  {
    label: "Dossier",
    href: "/accounts/demo-account",
    role: "Command center",
    status: "Current page",
    tone: "blue",
    description: "Account identity, connection readiness, sync posture, governance boundaries, and safe next steps.",
    compliance: "Mock preview / official-source required",
  },
  {
    label: "Executive summary",
    href: "/accounts/demo-account/overview",
    role: "Health snapshot",
    status: "Manager view",
    tone: "emerald",
    description: "Fast readout of account health, priority insights, risk posture, and changes since last review.",
    compliance: "Official-safe summary placeholders",
  },
  {
    label: "Posts",
    href: "/accounts/demo-account/posts",
    role: "Owned media",
    status: "Preview route",
    tone: "slate",
    description: "Owned media inventory and post-level metric placeholders from official sources when connected.",
    compliance: "official_safe",
  },
  {
    label: "Comments",
    href: "/accounts/demo-account/comments",
    role: "Owned interaction review",
    status: "Preview route",
    tone: "slate",
    description: "Owned comment workflow placeholders for future official-source moderation review.",
    compliance: "official_safe",
  },
  {
    label: "Followers",
    href: "/accounts/demo-account/followers",
    role: "Audience snapshot",
    status: "Preview route",
    tone: "slate",
    description: "Aggregate audience and follower-count context; not arbitrary personal tracking.",
    compliance: "official_safe_limited",
  },
  {
    label: "Following",
    href: "/accounts/demo-account/following",
    role: "Relationship ecosystem",
    status: "Preview route",
    tone: "amber",
    description: "Category-level relationship ecosystem preview with approved-source and licensed-provider boundaries.",
    compliance: "official_safe_limited / licensed_provider_only",
  },
  {
    label: "Engagement",
    href: "/accounts/demo-account/engagement",
    role: "Performance context",
    status: "Preview route",
    tone: "slate",
    description: "Engagement, reach, and owned-content signal placeholders prepared for official analytics.",
    compliance: "official_safe",
  },
  {
    label: "Ads",
    href: "/accounts/demo-account/ads",
    role: "Paid visibility",
    status: "Preview route",
    tone: "violet",
    description: "Meta Marketing API or Ad Library style visibility where permissions and policy allow.",
    compliance: "official_safe_limited",
  },
  {
    label: "Timeline",
    href: "/accounts/demo-account/timeline",
    role: "Audit chronology",
    status: "Preview route",
    tone: "blue",
    description: "Audit-safe activity chronology with source labels, freshness, confidence, and policy classification.",
    compliance: "official_safe with gated placeholders",
  },
  {
    label: "Recent follows",
    href: "/accounts/demo-account/recent-follows",
    role: "Restricted relationship placeholder",
    status: "Disabled Alpha",
    tone: "amber",
    description: "Relationship-change signals remain gated pending licensed provider review and explicit policy approval.",
    compliance: "licensed_provider_only",
  },
  {
    label: "Recent unfollows",
    href: "/accounts/demo-account/recent-unfollows",
    role: "Restricted relationship placeholder",
    status: "Disabled Alpha",
    tone: "amber",
    description: "Relationship-change signals remain gated pending licensed provider review and explicit policy approval.",
    compliance: "licensed_provider_only",
  },
  {
    label: "Likes",
    href: "/accounts/demo-account/likes",
    role: "Restricted identity-level area",
    status: "Disabled Alpha",
    tone: "rose",
    description: "Arbitrary user like history is intentionally restricted and not implemented in this Alpha preview.",
    compliance: "restricted",
  },
];

const connectionReadiness = [
  {
    label: "Account identity",
    value: accountProfile.displayName,
    status: "Mock profile",
    tone: "blue" as Tone,
    detail: `${accountProfile.handle} · ${accountProfile.accountType}`,
  },
  {
    label: "Official source connection",
    value: "Not connected",
    status: "Alpha disabled",
    tone: "amber" as Tone,
    detail: "Future live data must use official Meta APIs or approved provider adapters only.",
  },
  {
    label: "Provider readiness",
    value: "Mock only",
    status: "No live query",
    tone: "slate" as Tone,
    detail: accountProfile.provider,
  },
  {
    label: "Governance classification",
    value: "Official-first",
    status: "Bounded",
    tone: "emerald" as Tone,
    detail: accountProfile.sourceClassification,
  },
];

const syncStatusPreview = [
  {
    step: "1",
    title: "Identity snapshot prepared",
    status: "Static preview",
    detail: "Profile metadata is represented as mock dossier context; no account connection runs.",
  },
  {
    step: "2",
    title: "Permission review required",
    status: "Official source required",
    detail: "Owned media, comments, mentions, insights, and ads require compliant source authorization.",
  },
  {
    step: "3",
    title: "Sync jobs disabled",
    status: "No backend action",
    detail: "No webhooks, queues, monitors, exports, or database writes are triggered from this page.",
  },
  {
    step: "4",
    title: "Restricted surfaces gated",
    status: "Policy boundary",
    detail: "Recent follows/unfollows and likes stay disabled or licensed-provider-only placeholders.",
  },
];

const nextBestActions = [
  { label: "Open the executive summary", href: "/accounts/demo-account/overview", detail: "Manager-friendly health snapshot." },
  { label: "Review the timeline", href: "/accounts/demo-account/timeline", detail: "Audit-safe chronology and source labels." },
  { label: "Visit official-source preview areas", href: "/accounts/demo-account/posts", detail: "Start with Posts, then continue to Comments, Followers, Following, Engagement, or Ads." },
  { label: "Keep restricted surfaces gated", href: "/accounts/demo-account/likes", detail: "Likes, recent follows, and recent unfollows stay disabled or licensed-provider-only in Alpha." },
];

const emptyStateNotes = [
  "Connection workspace is intentionally empty in Alpha.",
  "No OAuth, provider sync, export, alert, billing, or report action is available here.",
  "Use this dossier as a static command-center preview only.",
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

function DossierPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
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

function AccountSectionNav({ activeLabel }: { activeLabel: string }) {
  return (
    <nav className="flex gap-2 overflow-x-auto rounded-3xl border border-slate-200 bg-white p-2 shadow-sm shadow-slate-200/70" aria-label="Account sections">
      {accountSectionLinks.map((link) => {
        const active = link.label === activeLabel;

        return (
          <Link
            key={link.label}
            href={link.href}
            className={[
              "flex whitespace-nowrap rounded-2xl px-4 py-2 text-sm font-medium transition",
              active ? "bg-slate-950 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950",
            ].join(" ")}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

function DossierMetricCard({ label, value, detail, tone }: DossierMetric) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{value}</p>
      <div className="mt-4">
        <Badge tone={tone}>{detail}</Badge>
      </div>
    </div>
  );
}

export function AccountDossierPage() {
  return (
    <div className="space-y-6">
      <header className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm shadow-slate-200/70">
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
            <div className="flex min-w-0 flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[2rem] border border-white/10 bg-white/10 text-2xl font-semibold text-white shadow-sm shadow-slate-950/30">
                {accountProfile.avatarInitials}
              </div>
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap gap-2">
                  {dossierPreviewBadges.map((badge) => (
                    <span key={badge} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                      {badge}
                    </span>
                  ))}
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Account dossier</p>
                <h1 className="mt-2 break-words text-3xl font-semibold tracking-tight text-white sm:text-4xl">{accountProfile.displayName} command center</h1>
                <p className="mt-2 max-w-3xl text-base leading-7 text-slate-300">
                  Central account workspace for identity, source readiness, sync posture, governance boundaries, and safe navigation to official-source preview areas.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
              <p className="font-semibold text-white">Official-first command boundary</p>
              <p className="mt-1">This dossier is static Alpha UI. It does not start OAuth, provider sync, monitoring, scraping, private access, exports, alerts, or backend jobs.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-indigo-400/10 px-3 py-1 text-xs font-semibold text-indigo-100 ring-1 ring-indigo-300/20">{accountProfile.provider}</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/20">Mock confidence: {accountProfile.confidence}</span>
                <span className="rounded-full bg-slate-400/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-slate-300/20">Freshness: {accountProfile.freshness}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AccountSectionNav activeLabel="Dossier" />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dossierMetrics.map((metric) => (
          <DossierMetricCard key={metric.label} {...metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.25fr)_minmax(360px,0.75fr)]">
        <DossierPanel title="Account identity and source readiness" subtitle="Command-center context for the demo account. Values are static and do not represent a live provider connection.">
          <div className="grid gap-3 md:grid-cols-2">
            {connectionReadiness.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className="mt-2 text-lg font-semibold text-slate-950">{item.value}</p>
                  </div>
                  <Badge tone={item.tone}>{item.status}</Badge>
                </div>
                <p className="mt-3 text-xs leading-5 text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </DossierPanel>

        <DossierPanel title="Next-best actions" subtitle="Safe routing guidance only; no action launches a live provider workflow in Alpha.">
          <ol className="space-y-3 text-sm text-slate-600">
            {nextBestActions.map((item, index) => (
              <li key={item.label} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-slate-950 text-xs font-semibold text-white">{index + 1}</span>
                <span className="leading-6">
                  <Link href={item.href} className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:text-indigo-700 hover:decoration-indigo-500">
                    {item.label}
                  </Link>
                  <span className="block text-xs leading-5 text-slate-500">{item.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </DossierPanel>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Dossier routing controls</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
              Static command-center controls show how future teams could choose account workspaces. Search, filters, exports, and saved views are disabled in Alpha.
            </p>
          </div>
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Provider actions disabled
          </button>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <input disabled value="demo-account" aria-label="Account lookup disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500" readOnly />
          <select disabled aria-label="Source filter disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
            <option>Official-source previews only</option>
          </select>
          <select disabled aria-label="Policy filter disabled" className="cursor-not-allowed rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-500">
            <option>Restricted surfaces remain gated</option>
          </select>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)]">
        <DossierPanel title="Sync status preview" subtitle="A preview-only sequence for future compliant ingestion readiness; no live webhook, monitor, queue, or database write runs here.">
          <div className="relative ml-4 space-y-4 border-l border-slate-200 pl-5 sm:ml-5 sm:pl-6">
            {syncStatusPreview.map((item) => (
              <article key={item.step} className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
                <span className="absolute -left-[2rem] top-5 grid h-8 w-8 place-items-center rounded-full border-4 border-white bg-slate-950 text-xs font-semibold text-white shadow-sm">{item.step}</span>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.detail}</p>
                  </div>
                  <Badge tone={item.status.includes("Official") || item.status.includes("Policy") ? "amber" : "slate"}>{item.status}</Badge>
                </div>
              </article>
            ))}
          </div>
        </DossierPanel>

        <DossierPanel title="Provider and compliance notice" subtitle="Official-source-safe boundaries for this command center.">
          <div className="space-y-3">
            {providerHealth.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-medium text-slate-900">{item.label}</p>
                  <Badge tone={item.status === "Not connected" ? "amber" : "slate"}>{item.status}</Badge>
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.value}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
              Live implementation must use official Meta APIs or approved licensed providers only. This Alpha page does not collect live Instagram data.
            </div>
          </div>
        </DossierPanel>
      </section>

      <DossierPanel title="Command routing matrix" subtitle="Enterprise-style map of account workspaces and policy status. Links are navigation previews only.">
        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[980px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3">Workspace</th>
                <th className="px-4 py-3">Product role</th>
                <th className="px-4 py-3">Safe guidance</th>
                <th className="px-4 py-3">Compliance</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {accountSectionLinks.map((link) => (
                <tr key={link.label} className="hover:bg-slate-50/70">
                  <td className="px-4 py-4 font-medium text-slate-950">
                    <Link href={link.href} className="hover:text-indigo-700">{link.label}</Link>
                  </td>
                  <td className="px-4 py-4 text-slate-600">{link.role}</td>
                  <td className="px-4 py-4 text-slate-600">{link.description}</td>
                  <td className="px-4 py-4"><Badge tone={link.tone}>{link.compliance}</Badge></td>
                  <td className="px-4 py-4 text-slate-600">{link.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DossierPanel>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <DossierPanel title="Governance boundaries" subtitle="Compliance-first constraints that shape every linked account area.">
          <ul className="space-y-3 text-sm text-slate-600">
            {sourcePolicy.map((item) => (
              <li key={item} className="flex gap-2 rounded-2xl bg-slate-50 p-3"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />{item}</li>
            ))}
            <li className="flex gap-2 rounded-2xl bg-amber-50 p-3 text-amber-900"><span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />Restricted identity-level features are disabled or licensed-provider-only placeholders.</li>
          </ul>
        </DossierPanel>

        <DossierPanel title="Recent dossier context" subtitle="Static account context prepared for future official provider ingestion; not a moderation queue.">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Context</th>
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
                    <td className="px-4 py-4 text-slate-600">{row.source}</td>
                    <td className="px-4 py-4 text-slate-600">{row.confidence}</td>
                    <td className="px-4 py-4 text-slate-600">{row.freshness}</td>
                    <td className="px-4 py-4"><Badge tone="slate">{row.status}</Badge></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </DossierPanel>
      </section>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 shadow-sm shadow-slate-200/60">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-950">Alpha empty state: no live connection workspace</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">This command center intentionally stops before live source activation. The UI can be reviewed without triggering collection or account access.</p>
          </div>
          <button disabled className="w-full cursor-not-allowed rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-400 xl:w-auto">
            Connect account unavailable
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