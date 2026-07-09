import type { ReactNode } from "react";

export type RestrictedIdentityPreviewMetric = {
  label: string;
  value: string;
  note: string;
  tone: "amber" | "rose" | "blue" | "slate";
};

export type RestrictedIdentityPreviewSignal = {
  signal: string;
  alphaState: string;
  sourceBoundary: string;
  complianceNote: string;
};

export type RestrictedIdentityPreviewPanel = {
  label: string;
  value: string;
  detail: string;
};

export type RestrictedIdentityPreviewEvent = {
  label: string;
  state: string;
  detail: string;
};

export type RestrictedIdentityPreviewVariant = "affinity" | "newRelationships" | "churn";

export type RestrictedIdentityPreviewPageProps = {
  variant: RestrictedIdentityPreviewVariant;
  eyebrow: string;
  title: string;
  description: string;
  classification: string;
  policyGate: string;
  metrics: RestrictedIdentityPreviewMetric[];
  signals: RestrictedIdentityPreviewSignal[];
  panels: RestrictedIdentityPreviewPanel[];
  events: RestrictedIdentityPreviewEvent[];
  previewPath: string[];
};

const toneClasses: Record<RestrictedIdentityPreviewMetric["tone"], string> = {
  amber: "border-amber-200 bg-amber-50 text-amber-900 ring-amber-200",
  rose: "border-rose-200 bg-rose-50 text-rose-900 ring-rose-200",
  blue: "border-blue-200 bg-blue-50 text-blue-900 ring-blue-200",
  slate: "border-slate-200 bg-slate-50 text-slate-800 ring-slate-200",
};

function Badge({ children, tone = "slate" }: { children: ReactNode; tone?: RestrictedIdentityPreviewMetric["tone"] }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${toneClasses[tone]}`}>{children}</span>;
}

function MetricCard({ metric }: { metric: RestrictedIdentityPreviewMetric }) {
  return (
    <article className={`rounded-3xl border p-5 shadow-sm ${toneClasses[metric.tone]}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-75">{metric.label}</p>
      <p className="mt-3 text-2xl font-semibold tracking-tight">{metric.value}</p>
      <p className="mt-3 text-sm leading-6 opacity-80">{metric.note}</p>
    </article>
  );
}

function StaticPreviewControls() {
  const controls = [
    ["Account", "demo-account only"],
    ["Date range", "Static Alpha snapshot"],
    ["Provider", "Not connected"],
    ["Export", "Disabled in Alpha"],
    ["Monitor", "No identity-level monitoring"],
    ["Backend", "No action runs"],
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Static restricted preview controls</p>
          <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">
            These labels are disabled placeholders. They do not filter live provider data, start jobs, download files, save monitors, or create backend actions.
          </p>
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Disabled restricted preview controls">
          {controls.map(([label, value]) => (
            <span key={label} aria-disabled="true" className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
              {label}: {value}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function AffinityRestrictedWidgets() {
  const affinityCategories = [
    {
      label: "Education intent",
      value: "Mock 41%",
      detail: "Owned-media planning category for tutorials, workflow explainers, and campaign education themes.",
    },
    {
      label: "Launch interest",
      value: "Mock 28%",
      detail: "Static category preview for product launch and studio content strategy conversations.",
    },
    {
      label: "Creator format fit",
      value: "Mock 19%",
      detail: "Preview-only engagement signal for format planning; no individual like trail is queried.",
    },
  ];

  const eligibleSources = [
    "Owned media aggregate engagement from connected professional account sources.",
    "Authorized connected account metrics with provenance, audit records, and policy enforcement.",
    "Licensed-provider-only enrichment only after approval where applicable; disabled in Alpha.",
  ];

  const disabledActions = [
    "Open liker identities",
    "Track personal like history",
    "Export like trails",
    "Start monitor",
    "Generate report",
    "Run backfill",
  ];

  return (
    <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-3xl border border-violet-200 bg-white p-5 shadow-sm shadow-violet-100/70">
        <div className="mb-5 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">Authorized affinity preview</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Mock affinity categories</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
              These widgets are category-level placeholders for future authorized owned-media aggregate engagement signals.
            </p>
          </div>
          <Badge tone="amber">Aggregate only</Badge>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {affinityCategories.map((category) => (
            <article key={category.label} className="rounded-3xl border border-violet-100 bg-violet-50/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-700">{category.label}</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{category.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">{category.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-5 shadow-sm shadow-amber-100/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">Eligible sources and disabled actions</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Restricted by design, not broken</h2>
        <div className="mt-5 space-y-3">
          {eligibleSources.map((source) => (
            <p key={source} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-xs leading-5 text-emerald-900">
              {source}
            </p>
          ))}
        </div>

        <div className="mt-5 border-t border-amber-200 pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">Disabled placeholders</p>
          <div className="mt-3 flex flex-wrap gap-2" aria-label="Disabled like affinity actions">
            {disabledActions.map((action) => (
              <span key={action} aria-disabled="true" className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                {action}: disabled
              </span>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

function AffinityWorkspace({ panels, events }: { panels: RestrictedIdentityPreviewPanel[]; events: RestrictedIdentityPreviewEvent[] }) {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950 p-5 text-white shadow-sm shadow-violet-950/20">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">Content affinity map</p>
            <h2 className="mt-2 text-lg font-semibold">Mock liked-content themes</h2>
          </div>
          <Badge tone="amber">No live like tracking</Badge>
        </div>
        <div className="space-y-3">
          {panels.map((panel) => (
            <div key={panel.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold">{panel.label}</p>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-violet-100">{panel.value}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-violet-100/85">{panel.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Interaction preference preview</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Format affinity and engagement intent</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {events.map((event) => (
            <div key={event.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">{event.label}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">{event.state}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{event.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChangeLogWorkspace({ panels, events }: { panels: RestrictedIdentityPreviewPanel[]; events: RestrictedIdentityPreviewEvent[] }) {
  return (
    <section className="grid gap-6 xl:grid-cols-[0.75fr_1.25fr]">
      <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 shadow-sm shadow-emerald-100/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Disabled provider gate</p>
        <h2 className="mt-2 text-lg font-semibold text-emerald-950">New relationship event controls</h2>
        <div className="mt-5 space-y-3">
          {panels.map((panel) => (
            <div key={panel.label} className="rounded-2xl border border-emerald-200 bg-white/75 p-4">
              <p className="text-sm font-semibold text-emerald-950">{panel.label}</p>
              <p className="mt-1 text-xl font-semibold text-emerald-950">{panel.value}</p>
              <p className="mt-2 text-xs leading-5 text-emerald-900">{panel.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Restricted change-log placeholder</p>
            <h2 className="mt-2 text-lg font-semibold text-slate-950">Mock new relationship events</h2>
          </div>
          <Badge tone="rose">Disabled by default</Badge>
        </div>
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={event.label} className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-semibold text-emerald-800">{index + 1}</span>
              <div>
                <p className="text-sm font-semibold text-slate-950">{event.label}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">{event.state}</p>
                <p className="mt-2 text-xs leading-5 text-slate-500">{event.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChurnWorkspace({ panels, events }: { panels: RestrictedIdentityPreviewPanel[]; events: RestrictedIdentityPreviewEvent[] }) {
  return (
    <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-slate-950 via-rose-950 to-slate-950 p-5 text-white shadow-sm shadow-rose-950/20">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-200">Churn placeholder</p>
            <h2 className="mt-2 text-lg font-semibold">Mock lost relationship events</h2>
          </div>
          <Badge tone="rose">No identity-level monitoring</Badge>
        </div>
        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-semibold">{event.label}</p>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-rose-100">{event.state}</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-rose-100/85">{event.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Retention readiness</p>
        <h2 className="mt-2 text-lg font-semibold text-slate-950">Provider approval blockers</h2>
        <div className="mt-5 space-y-3">
          {panels.map((panel) => (
            <div key={panel.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-950">{panel.label}</p>
              <p className="mt-1 text-xl font-semibold text-slate-950">{panel.value}</p>
              <p className="mt-2 text-xs leading-5 text-slate-500">{panel.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VariantWorkspace({ variant, panels, events }: { variant: RestrictedIdentityPreviewVariant; panels: RestrictedIdentityPreviewPanel[]; events: RestrictedIdentityPreviewEvent[] }) {
  if (variant === "affinity") return <AffinityWorkspace panels={panels} events={events} />;
  if (variant === "newRelationships") return <ChangeLogWorkspace panels={panels} events={events} />;
  return <ChurnWorkspace panels={panels} events={events} />;
}

function SignalTable({ signals }: { signals: RestrictedIdentityPreviewSignal[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <div className="mb-4 flex flex-col gap-3 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-950">Restricted identity signal table</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Preview-only audience intelligence rows. Values are static mock placeholders and intentionally avoid individual identity exposure.
          </p>
        </div>
        <Badge tone="amber">No live Instagram data is collected in Alpha</Badge>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Signal</th>
              <th className="px-4 py-3">Alpha state</th>
              <th className="px-4 py-3">Source boundary</th>
              <th className="px-4 py-3">Compliance note</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {signals.map((row) => (
              <tr key={row.signal} className="cursor-default">
                <td className="px-4 py-4 font-medium text-slate-950">{row.signal}</td>
                <td className="px-4 py-4 text-slate-600">{row.alphaState}</td>
                <td className="px-4 py-4 text-slate-600">{row.sourceBoundary}</td>
                <td className="px-4 py-4 text-slate-600">{row.complianceNote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
        No backend action runs from this page. No scraping, private account access, hidden surveillance, fake login automation, generated account farm behavior, or anti-bot bypass is implemented.
      </p>
    </section>
  );
}

function ComplianceBoundaryCard({ policyGate, variant }: { policyGate: string; variant: RestrictedIdentityPreviewVariant }) {
  const boundaries =
    variant === "affinity"
      ? [
          "Restricted affinity preview",
          "Authorized aggregate engagement only",
          "Mock affinity categories",
          "Identity-level like history blocked",
          "Requires official source connection",
          "Requires provider approval where applicable",
          "Licensed-provider-only where required",
          "No liker identity trails in Alpha",
          "No private-user tracking runs in Alpha",
        ]
      : [
          "Restricted preview",
          "Preview-only audience intelligence",
          "Mock audience metrics",
          "Mock relationship signals",
          "Requires official source connection",
          "Requires provider approval where applicable",
          "Licensed-provider-only where required",
          "No follower tracking runs in Alpha",
          "No identity-level monitoring runs in Alpha",
        ];

  return (
    <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-5 shadow-sm shadow-amber-100/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Compliance boundary</p>
          <h2 className="mt-2 text-lg font-semibold text-slate-950">Restricted preview only — future provider approval required</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{policyGate}</p>
        </div>
        <Badge tone="rose">No backend action runs from this page</Badge>
      </div>
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {boundaries.map((boundary) => (
          <div key={boundary} className="rounded-2xl border border-slate-200 bg-white/80 p-3 text-xs font-semibold text-slate-700">
            {boundary}
          </div>
        ))}
      </div>
    </section>
  );
}

export function RestrictedIdentityPreviewPage({
  variant,
  eyebrow,
  title,
  description,
  classification,
  policyGate,
  metrics,
  signals,
  panels,
  events,
  previewPath,
}: RestrictedIdentityPreviewPageProps) {
  const classificationCopy =
    variant === "affinity"
      ? "No live Instagram data is collected in Alpha. No personal like history, liker identity trails, or identity-level engagement monitoring runs in Alpha."
      : "No live Instagram data is collected in Alpha. No follower tracking runs in Alpha. No identity-level monitoring runs in Alpha.";

  return (
    <div className="space-y-6">
      <header className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-amber-950 to-rose-950 p-6 text-white shadow-sm shadow-slate-950/30">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge tone="rose">Restricted preview</Badge>
              <Badge tone="amber">Preview-only audience intelligence</Badge>
              <Badge tone="slate">Static mock data</Badge>
              <Badge tone="blue">No live provider action</Badge>
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">{eyebrow}</p>
            <h1 className="mt-2 max-w-4xl text-4xl font-semibold tracking-tight text-white">{title}</h1>
            <p className="mt-3 max-w-4xl text-base leading-7 text-slate-200">{description}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200 xl:w-[30rem]">
            <p className="font-semibold text-white">{classification}</p>
            <p className="mt-1 text-slate-300">{classificationCopy}</p>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </section>

      <StaticPreviewControls />

      {variant === "affinity" ? <AffinityRestrictedWidgets /> : null}

      <VariantWorkspace variant={variant} panels={panels} events={events} />

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
          <div className="mb-5">
            <h2 className="text-base font-semibold text-slate-950">Future approved-source path</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              This page is useful for sales and QA preview only. Future implementation must be reviewed through official-source, policy, and provider gates before any live workflow exists.
            </p>
          </div>
          <ol className="space-y-3">
            {previewPath.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <ComplianceBoundaryCard policyGate={policyGate} variant={variant} />
      </section>

      <SignalTable signals={signals} />
    </div>
  );
}