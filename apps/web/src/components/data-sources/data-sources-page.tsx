import { DataSourceReadinessTable } from "@/components/data-tables/data-source-readiness-table";
import {
  coverageByDomain,
  dataDomainLabels,
  dataSourceCards,
  dataSourceComplianceNotice,
  dataSourceConfidenceLabels,
  dataSourceFilters,
  dataSourceFreshnessLabels,
  dataSourceKpis,
  dataSourcePolicyLabels,
  dataSourcesProfile,
  dataSourceStatusLabels,
  dataSourceTypeLabels,
  freshnessSyncCadence,
  gatedLicensedProviderPanel,
  officialApiReadiness,
  permissionScopesPlaceholder,
  type DataDomain,
  type DataSourceCard,
  type DataSourcePanelItem,
  type DataSourcePolicyClassification,
  type DataSourceStatus,
  type DataSourceTone,
  type DataSourceType,
} from "@/lib/mock-data/data-sources";

function formatToken(value: string) {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function toneClasses(tone: DataSourceTone) {
  const tones: Record<DataSourceTone, string> = {
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

function typeClasses(type: DataSourceType) {
  if (type === "meta_graph_api") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (type === "meta_marketing_api") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (type === "meta_ad_library_api") return "bg-violet-50 text-violet-700 ring-violet-100";
  if (type === "owned_webhook") return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  if (type === "manual_import") return "bg-slate-100 text-slate-700 ring-slate-200";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

function policyClasses(policy: DataSourcePolicyClassification) {
  if (policy === "official_safe") return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (policy === "official_safe_limited") return "bg-blue-50 text-blue-700 ring-blue-100";
  if (policy === "licensed_provider_only") return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function statusClasses(status: DataSourceStatus) {
  if (["ready", "configured"].includes(status)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["needs_review", "coverage_gap"].includes(status)) return "bg-amber-50 text-amber-700 ring-amber-100";
  return "bg-rose-50 text-rose-700 ring-rose-100";
}

function domainClasses(domain: DataDomain) {
  if (["account_insights", "audience", "engagement"].includes(domain)) return "bg-emerald-50 text-emerald-700 ring-emerald-100";
  if (["ads", "exports", "compliance"].includes(domain)) return "bg-blue-50 text-blue-700 ring-blue-100";
  if (["comments", "mentions", "hashtags"].includes(domain)) return "bg-cyan-50 text-cyan-700 ring-cyan-100";
  return "bg-amber-50 text-amber-700 ring-amber-100";
}

const alphaDataSourceSafetyBadges = [
  "Preview-only data sources",
  "No provider connection runs in Alpha",
  "No backend action runs from this page",
  "No live Instagram data is collected in Alpha",
  "Requires official source connection",
  "Requires provider approval where applicable",
];

function Badge({ children, className }: { children: React.ReactNode; className: string }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${className}`}>{children}</span>;
}

function DataSourcesPanel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
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

function KpiCard({ label, value, delta, tone, description }: (typeof dataSourceKpis)[number]) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/70">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge className={toneClasses(tone)}>{delta}</Badge>
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{description}</p>
    </div>
  );
}

function DataSourcesHeader() {
  return (
    <header className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 p-6 shadow-sm shadow-slate-950/20">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div className="max-w-4xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="bg-white/10 text-white ring-white/15">Preview-only data sources</Badge>
            <Badge className="bg-blue-400/10 text-blue-100 ring-blue-300/20">{dataSourcesProfile.sourceBadge}</Badge>
            <Badge className="bg-emerald-400/10 text-emerald-100 ring-emerald-300/20">{dataSourcesProfile.confidenceBadge}</Badge>
            <Badge className="bg-cyan-400/10 text-cyan-100 ring-cyan-300/20">{dataSourcesProfile.freshnessBadge}</Badge>
            <Badge className="bg-slate-100/10 text-slate-200 ring-white/15">{dataSourcesProfile.integrationBadge}</Badge>
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Provider preview</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">{dataSourcesProfile.title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{dataSourcesProfile.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {alphaDataSourceSafetyBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
                {badge}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300 xl:w-[31rem]">
          <p className="font-semibold text-white">Alpha source registry boundary</p>
          <p className="mt-1">
            Preview/mock-only readiness for Instagram Graph API, Meta Marketing API, Meta Ad Library API, owned/connected account webhooks, licensed provider review, permissions, and compliance metadata.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">No OAuth or provider activation</span>
            <span className="rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-xs font-medium text-slate-200">Private beta backend required</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function FilterPlaceholderBar() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-950">Data source filters</p>
          <p className="mt-1 text-xs text-slate-500">
            Static placeholders for source type, status, workspace/client, freshness, confidence, and policy classification. No provider query or saved filter runs.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only controls</Badge>
          {dataSourceFilters.map((filter) => (
            <Badge key={filter.id} className="bg-slate-100 text-slate-700 ring-slate-200">
              {filter.label}: {filter.options[0]}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-medium text-slate-600">
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">Disabled in Alpha</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No provider connection runs in Alpha</span>
        <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">No backend action runs from this page</span>
      </div>
    </section>
  );
}

function SignalList({ items }: { items: DataSourcePanelItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-medium text-slate-950">{item.title}</p>
            <Badge className={toneClasses(item.tone)}>{item.value}</Badge>
          </div>
          <p className="mt-2 text-xs leading-5 text-slate-500">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ProviderReadinessPanels() {
  return (
    <section className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-4">
      <DataSourcesPanel title="Official API preview readiness" subtitle="Mock readiness across Instagram Graph API, Meta APIs, owned webhooks, and manual import paths.">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-5 text-white">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">Static readiness model</p>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">No provider action</span>
          </div>
          <div className="flex h-60 items-end gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            {officialApiReadiness.map((point) => (
              <div key={point.label} className="flex flex-1 flex-col items-center gap-3">
                <div className="w-full rounded-t-2xl bg-white/80 shadow-lg shadow-emerald-950/30" style={{ height: `${point.height}%` }} />
                <div className="text-center">
                  <p className="text-xs text-slate-300">{point.label}</p>
                  <p className="text-sm font-semibold">{point.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DataSourcesPanel>

      <DataSourcesPanel title="Coverage by data domain" subtitle="Domain coverage with risky areas explicitly gated and no live collection running.">
        <SignalList items={coverageByDomain} />
      </DataSourcesPanel>

      <DataSourcesPanel title="Freshness preview cadence" subtitle="Mock freshness windows only; real provider freshness requires private-beta backend enforcement.">
        <SignalList items={freshnessSyncCadence} />
      </DataSourcesPanel>

      <DataSourcesPanel title="Permission and scopes placeholder" subtitle="Official scopes only; no private access, fake login automation, or OAuth flow runs in Alpha.">
        <SignalList items={permissionScopesPlaceholder} />
      </DataSourcesPanel>
    </section>
  );
}

function DataSourceCardItem({ source }: { source: DataSourceCard }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm shadow-slate-200/70">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-950">{source.providerName}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{dataSourceTypeLabels[source.sourceType]}</p>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">Preview-only source</Badge>
          <Badge className={statusClasses(source.readinessStatus)}>{dataSourceStatusLabels[source.readinessStatus]}</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className={typeClasses(source.sourceType)}>{dataSourceTypeLabels[source.sourceType]}</Badge>
        <Badge className="bg-cyan-50 text-cyan-700 ring-cyan-100">{dataSourceFreshnessLabels[source.freshness]}</Badge>
        <Badge className="bg-violet-50 text-violet-700 ring-violet-100">
          {source.confidenceScore > 0 ? `${source.confidenceScore}% ` : ""}{dataSourceConfidenceLabels[source.confidence]}
        </Badge>
        <Badge className={policyClasses(source.policyClassification)}>{dataSourcePolicyLabels[source.policyClassification]}</Badge>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Covered domains</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {source.coveredDomains.map((domain) => (
            <Badge key={domain} className={domainClasses(domain)}>{dataDomainLabels[domain]}</Badge>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">Connection preview guidance</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{source.recommendedAction}</p>
      </div>

      <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="w-full cursor-not-allowed rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-400 sm:w-auto"
          >
            Provider connection disabled
          </button>
          <p className="text-xs leading-5 text-slate-500">No provider connection runs in Alpha; no backend action runs.</p>
        </div>
      </div>
    </article>
  );
}

function DataSourceCardsGrid() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Source and provider previews</p>
          <h2 className="mt-1 text-xl font-semibold text-slate-950">Official-source readiness cards</h2>
          <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500">
            Static source cards for review only. OAuth, provider activation, token storage, webhooks, and live provider execution remain disabled in Alpha.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge className="bg-amber-50 text-amber-700 ring-amber-100">Preview-only data sources</Badge>
          <Badge className="bg-slate-100 text-slate-700 ring-slate-200">No provider connection</Badge>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-5">
        {dataSourceCards.map((source) => (
          <DataSourceCardItem key={source.id} source={source} />
        ))}
      </div>
    </section>
  );
}

function LicensedProviderPanel() {
  return (
    <section className="rounded-3xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Licensed-provider-only gated placeholder</p>
          <h2 className="mt-2 text-lg font-semibold text-amber-950">{gatedLicensedProviderPanel.title}</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-amber-900">{gatedLicensedProviderPanel.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 xl:justify-end">
          <Badge className={policyClasses(gatedLicensedProviderPanel.policyClassification)}>{dataSourcePolicyLabels[gatedLicensedProviderPanel.policyClassification]}</Badge>
          <Badge className={statusClasses(gatedLicensedProviderPanel.status)}>{dataSourceStatusLabels[gatedLicensedProviderPanel.status]}</Badge>
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires official source connection</Badge>
          <Badge className="bg-white text-amber-800 ring-amber-200">Requires provider approval where applicable</Badge>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-amber-100 text-amber-800 ring-amber-200">{gatedLicensedProviderPanel.sourceProvider}</Badge>
        <Badge className="bg-slate-100 text-slate-700 ring-slate-200">{dataSourceFreshnessLabels[gatedLicensedProviderPanel.freshness]}</Badge>
        <Badge className="bg-rose-50 text-rose-700 ring-rose-100">{formatToken(gatedLicensedProviderPanel.confidence)}</Badge>
      </div>

      <ul className="mt-4 grid gap-3 lg:grid-cols-3">
        {gatedLicensedProviderPanel.unavailableReasons.map((reason) => (
          <li key={reason} className="rounded-2xl border border-amber-200 bg-white/70 p-3 text-xs leading-5 text-amber-900">{reason}</li>
        ))}
      </ul>
    </section>
  );
}

function ComplianceNotice() {
  return (
    <DataSourcesPanel title={dataSourceComplianceNotice.title} subtitle="Preview-only data sources for official APIs, owned webhooks, manual imports, and licensed-provider review only.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{dataSourceComplianceNotice.description}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          <p className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-amber-900">Preview-only data sources: no provider connection runs in Alpha and no backend action runs from this page.</p>
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">Instagram Graph API, Meta Marketing API, Meta Ad Library API, and compliant licensed-provider review only. Requires official source connection.</p>
          <p className="rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">Owned/connected account webhooks only where official account access is applicable. No live Instagram data is collected in Alpha.</p>
          <p className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">Requires provider approval where applicable. No generated account farm, scraping, hidden browser automation, fake login automation, private account access, hidden surveillance, or anti-bot bypass.</p>
        </div>
        <ul className="grid gap-2 lg:grid-cols-4">
          {dataSourceComplianceNotice.bullets.map((item) => (
            <li key={item} className="rounded-2xl bg-slate-50 p-3 text-xs text-slate-600">{item}</li>
          ))}
        </ul>
      </div>
    </DataSourcesPanel>
  );
}

export function DataSourcesPage() {
  return (
    <div className="space-y-8">
      <DataSourcesHeader />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {dataSourceKpis.map((kpi) => (
          <KpiCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <FilterPlaceholderBar />
      <ProviderReadinessPanels />
      <DataSourceCardsGrid />
      <LicensedProviderPanel />
      <ComplianceNotice />
      <DataSourceReadinessTable />
    </div>
  );
}