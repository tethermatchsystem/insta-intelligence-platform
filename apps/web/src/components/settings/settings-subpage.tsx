import {
  type SettingsHeaderBadge,
  type SettingsSubpageBadge,
  type SettingsSubpageCard,
  type SettingsSubpageData,
  type SettingsSubpageKpi,
  type SettingsSubpageTone,
  type SettingsTableCell,
} from "@/lib/mock-data/settings-subpages";

function toneClasses(tone: SettingsSubpageTone) {
  const tones: Record<SettingsSubpageTone, string> = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warning: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    danger: "bg-rose-50 text-rose-700 ring-rose-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
}

function Badge({ badge }: { badge: SettingsSubpageBadge }) {
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${toneClasses(badge.tone)}`}>{badge.label}</span>;
}

function HeaderBadge({ badge }: { badge: SettingsHeaderBadge }) {
  return <Badge badge={{ label: `${badge.label}: ${badge.value}`, tone: badge.tone }} />;
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-950">{title}</h2>
        {subtitle ? <p className="mt-1 text-sm leading-6 text-slate-500">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Header({ page }: { page: SettingsSubpageData }) {
  return (
    <header className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {page.headerBadges.map((badge) => (
              <HeaderBadge key={`${badge.label}-${badge.value}`} badge={badge} />
            ))}
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">{page.eyebrow}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">{page.title}</h1>
          <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">{page.description}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 xl:w-[30rem]">
          <p className="font-semibold text-slate-900">{page.heroNoteTitle}</p>
          <p className="mt-1">{page.heroNote}</p>
        </div>
      </div>
    </header>
  );
}

function KpiCard({ kpi }: { kpi: SettingsSubpageKpi }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{kpi.label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{kpi.value}</p>
        <Badge badge={{ label: kpi.change, tone: kpi.tone }} />
      </div>
      <p className="mt-3 text-xs leading-5 text-slate-500">{kpi.description}</p>
    </article>
  );
}

function DetailCard({ card, featured = false }: { card: SettingsSubpageCard; featured?: boolean }) {
  return (
    <article className={featured ? "rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-sm" : "rounded-2xl border border-slate-100 bg-slate-50 p-4"}>
      {card.badges?.length ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {card.badges.map((badge) => (
            <Badge key={badge.label} badge={badge} />
          ))}
        </div>
      ) : null}
      {card.eyebrow ? <p className={featured ? "text-xs font-semibold uppercase tracking-wide text-slate-400" : "text-xs font-semibold uppercase tracking-wide text-slate-400"}>{card.eyebrow}</p> : null}
      <h3 className={featured ? "mt-2 text-xl font-semibold tracking-tight text-white" : "mt-2 text-base font-semibold text-slate-950"}>{card.title}</h3>
      <p className={featured ? "mt-2 text-sm leading-6 text-slate-300" : "mt-2 text-sm leading-6 text-slate-600"}>{card.description}</p>
      {card.fields?.length ? (
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {card.fields.map((field) => (
            <div key={field.label} className={featured ? "rounded-2xl border border-white/10 bg-white/5 p-3" : "rounded-2xl border border-slate-100 bg-white p-3"}>
              <p className={featured ? "text-[11px] font-semibold uppercase tracking-wide text-slate-400" : "text-[11px] font-semibold uppercase tracking-wide text-slate-400"}>{field.label}</p>
              <p className={featured ? "mt-2 text-sm font-semibold text-white" : "mt-2 text-sm font-semibold text-slate-950"}>{field.value}</p>
            </div>
          ))}
        </div>
      ) : null}
      {card.bullets?.length ? (
        <ul className={featured ? "mt-4 space-y-2 text-sm leading-6 text-slate-300" : "mt-4 space-y-2 text-sm leading-6 text-slate-600"}>
          {card.bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      ) : null}
      {card.footer ? <p className={featured ? "mt-4 rounded-2xl bg-white/10 p-3 text-xs leading-5 text-slate-300" : "mt-4 rounded-2xl bg-white p-3 text-xs leading-5 text-slate-500"}>{card.footer}</p> : null}
    </article>
  );
}

function TableCell({ cell }: { cell: SettingsTableCell }) {
  if (typeof cell === "string") return <span>{cell}</span>;
  return <Badge badge={cell} />;
}

function EnterpriseTable({ page }: { page: SettingsSubpageData }) {
  return (
    <Panel title={page.tableTitle} subtitle={page.tableSubtitle}>
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                {page.tableColumns.map((column) => (
                  <th key={column} className="px-4 py-3">{column}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {page.tableRows.map((row, rowIndex) => (
                <tr key={`${page.title}-${rowIndex}`} className="align-top">
                  {row.map((cell, cellIndex) => (
                    <td key={`${page.title}-${rowIndex}-${cellIndex}`} className={cellIndex === 0 ? "px-4 py-4 font-semibold text-slate-950" : "px-4 py-4 text-slate-600"}>
                      <TableCell cell={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}

function ComplianceNotice({ page }: { page: SettingsSubpageData }) {
  return (
    <Panel title={page.noticeTitle} subtitle="Compliance-safe static UI boundaries for settings administration and governance previews.">
      <div className="space-y-4 text-sm leading-6 text-slate-600">
        <p>{page.noticeBody}</p>
        <div className="grid gap-3 lg:grid-cols-2">
          {page.noticeBullets.map((item) => (
            <p key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700">{item}</p>
          ))}
        </div>
      </div>
    </Panel>
  );
}

export function SettingsSubpage({ page }: { page: SettingsSubpageData }) {
  return (
    <div className="space-y-6">
      <Header page={page} />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {page.kpiCards.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </section>
      <DetailCard card={page.summary} featured />
      <Panel title={page.cardsTitle} subtitle={page.cardsSubtitle}>
        <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-4">
          {page.cards.map((card) => (
            <DetailCard key={card.title} card={card} />
          ))}
        </div>
      </Panel>
      <EnterpriseTable page={page} />
      <ComplianceNotice page={page} />
    </div>
  );
}