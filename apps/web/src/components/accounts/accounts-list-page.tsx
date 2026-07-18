import Link from "next/link";
import { accountFilters, accountKpis, accountRows } from "@/lib/mock-data/accounts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function toneClasses(tone: string) {
  const tones: Record<string, string> = {
    blue: "bg-blue-50 text-blue-700 ring-blue-100",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    violet: "bg-violet-50 text-violet-700 ring-violet-100",
    slate: "bg-slate-100 text-slate-700 ring-slate-200",
    amber: "bg-amber-50 text-amber-700 ring-amber-100",
  };

  return tones[tone] ?? tones.slate;
}

function statusClasses(status: string) {
  const statuses: Record<string, string> = {
    Connected: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    Watchlisted: "bg-indigo-50 text-indigo-700 ring-indigo-100",
    Review: "bg-amber-50 text-amber-700 ring-amber-100",
    Imported: "bg-slate-100 text-slate-700 ring-slate-200",
  };

  return statuses[status] ?? statuses.Imported;
}

const accountPreviewBadges = [
  "Preview-only account intelligence",
  "Mock account metrics",
  "Private beta posture",
];

const sourceReadinessCards = [
  {
    title: "Official source readiness",
    detail: "Account metrics stay static until an approved Meta or owned-account source is connected in a future backend batch.",
    badge: "Requires official source connection",
    tone: "emerald",
  },
  {
    title: "Licensed provider boundary",
    detail: "Non-official enrichment remains gated and review-only. Provider approval is required where applicable.",
    badge: "Requires provider approval where applicable",
    tone: "amber",
  },
  {
    title: "Alpha action safety",
    detail: "No account connection, sync, job, notification, download, database write, or backend action runs from this page.",
    badge: "No backend action runs from this page",
    tone: "slate",
  },
];

const accountSafetyBoundaries = [
  "No live Instagram data is collected in Alpha",
  "No account connection runs in Alpha",
  "No backend action runs from this page",
  "No scraping, private account access, hidden surveillance, or anti-bot bypass",
];

const demoAccountHandle = "@examplebrand";

function AccountKpiCard({ label, value, detail, tone }: { label: string; value: string; detail: string; tone: string }) {
  return (
    <Card className="rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70 transition hover:-translate-y-0.5 hover:shadow-md hover:shadow-slate-200/80">
      <CardContent className="p-5">
        <p className="text-sm font-medium text-slate-500">{label}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
          <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
          <Badge variant="outline" className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{detail}</Badge>
        </div>
        <p className="mt-3 text-xs font-medium text-slate-400">Static Alpha preview · mock account metric</p>
      </CardContent>
    </Card>
  );
}

export function AccountsListPage() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden rounded-[2rem] border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="p-0">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5 text-white sm:p-7">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap gap-2">
                  {accountPreviewBadges.map((badge) => (
                    <Badge key={badge} variant="outline" className="rounded-full border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100 ring-1 ring-white/10">
                      {badge}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Accounts intelligence preview</CardTitle>
                <CardDescription className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                  Review static account profiles, source readiness, freshness posture, and mock provider status for the Alpha workspace. No live Instagram data is collected in Alpha.
                </CardDescription>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/20 xl:w-[28rem]">
                <p className="font-semibold text-white">Provider and compliance notice</p>
                <p className="mt-1 leading-6">
                  This mock view opens a demo account preview only. No account connection runs in Alpha, and future live data requires official APIs, connected accounts, manual imports, or licensed compliant providers.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="outline" className="rounded-full border-emerald-300/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-100 ring-1 ring-emerald-300/20">Official-source required</Badge>
                  <Badge variant="outline" className="rounded-full border-amber-300/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-300/20">Provider approval where applicable</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {accountKpis.map((kpi) => (
          <AccountKpiCard key={kpi.label} {...kpi} />
        ))}
      </section>

      <Card className="rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="flex flex-col gap-3 p-5 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-slate-950">Search and filters</CardTitle>
            <CardDescription className="mt-1 text-sm text-slate-500">Mock-only controls for previewing filters and saved views; no live connected-account query runs in Alpha.</CardDescription>
          </div>
          <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
            <Button disabled variant="outline" className="w-full cursor-not-allowed rounded-2xl border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-400 sm:w-auto">
              Account connection disabled in Alpha
            </Button>
            <Button asChild className="w-full rounded-2xl bg-slate-950 px-4 text-sm font-medium text-white shadow-sm sm:w-auto">
              <Link href="/accounts/demo-account">Open demo account preview</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {accountFilters.map((filter) => (
              <label key={filter} className="block">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{filter}</span>
                <Input
                  readOnly
                  aria-label={`${filter} static preview filter`}
                  className="h-11 cursor-not-allowed rounded-2xl border-slate-200 bg-slate-50 px-3 text-slate-500 shadow-sm placeholder:text-slate-400"
                  placeholder={`Static ${filter.toLowerCase()} preview`}
                />
              </label>
            ))}
          </div>
        </CardContent>
      </Card>

      <section className="grid gap-4 lg:grid-cols-3">
        {sourceReadinessCards.map((card) => (
          <Card key={card.title} className="rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
            <CardContent className="p-5">
              <Badge variant="outline" className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(card.tone)}`}>{card.badge}</Badge>
              <h2 className="mt-4 text-base font-semibold text-slate-950">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.detail}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="flex flex-col gap-2 border-b border-slate-200 p-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-slate-950">Enterprise accounts table</CardTitle>
            <CardDescription className="mt-1 text-sm text-slate-500">Mock account intelligence rows with provider provenance and confidence signals.</CardDescription>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold text-slate-600">{accountRows.length} mock rows</Badge>
            <Badge variant="outline" className="rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">Static freshness</Badge>
          </div>
        </CardHeader>
        <div className="overflow-x-auto">
          <Table className="min-w-[920px]">
            <TableHeader className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <TableRow>
                <TableHead className="px-5 py-3">Account</TableHead>
                <TableHead className="px-5 py-3">Handle</TableHead>
                <TableHead className="px-5 py-3">Type</TableHead>
                <TableHead className="px-5 py-3">Followers</TableHead>
                <TableHead className="px-5 py-3">Engagement</TableHead>
                <TableHead className="px-5 py-3">Provider</TableHead>
                <TableHead className="px-5 py-3">Confidence</TableHead>
                <TableHead className="px-5 py-3">Freshness</TableHead>
                <TableHead className="px-5 py-3">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-slate-100 bg-white">
              {accountRows.map((row) => {
                const isDemoAccount = row.handle === demoAccountHandle;

                return (
                <TableRow key={row.handle} className="hover:bg-slate-50/70">
                  <TableCell className="px-5 py-4 font-medium text-slate-950">
                    {isDemoAccount ? (
                      <Link href="/accounts/demo-account" className="underline decoration-slate-300 underline-offset-4 hover:text-indigo-700 hover:decoration-indigo-500" aria-label="Open Example Brand demo account dossier preview">
                        {row.account}
                      </Link>
                    ) : (
                      <div className="space-y-1">
                        <p>{row.account}</p>
                        <p className="text-xs font-normal text-slate-400">Static row only · no dossier route in Alpha</p>
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">
                    {isDemoAccount ? (
                      <Link href="/accounts/demo-account" className="underline decoration-slate-200 underline-offset-4 hover:text-indigo-700 hover:decoration-indigo-500" aria-label="Open @examplebrand demo account dossier preview">
                        {row.handle}
                      </Link>
                    ) : (
                      <span>{row.handle}</span>
                    )}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.type}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.followers}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.engagement}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.provider}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.confidence}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">
                    <div className="space-y-1">
                      <p className="font-medium text-slate-700">Static preview</p>
                      <p className="text-xs text-slate-400">Mock label: {row.freshness}</p>
                    </div>
                  </TableCell>
                  <TableCell className="px-5 py-4"><Badge variant="outline" className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses(row.status)}`}>{row.status}</Badge></TableCell>
                </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </Card>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600 shadow-sm shadow-slate-200/60">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-semibold text-slate-900">Preview-only account boundary</p>
            <p className="mt-1 leading-6">
              Future batches may connect official Meta APIs, Business Discovery, Ad Library, licensed compliant providers, and manual CSV imports after provider adapters and compliance gates are implemented.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:w-[34rem]">
            {accountSafetyBoundaries.map((item) => (
              <p key={item} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 shadow-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}