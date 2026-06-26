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

function AccountKpiCard({ label, value, detail, tone }: { label: string; value: string; detail: string; tone: string }) {
  return (
    <Card className="rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
      <CardContent className="p-5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <div className="mt-4 flex items-end justify-between gap-3">
        <p className="text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
        <Badge variant="outline" className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${toneClasses(tone)}`}>{detail}</Badge>
      </div>
      </CardContent>
    </Card>
  );
}

export function AccountsListPage() {
  return (
    <div className="space-y-6">
      <Card className="rounded-[2rem] border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="flex flex-col gap-5 p-5 sm:p-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-emerald-100">Official-safe accounts</Badge>
              <Badge variant="outline" className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-indigo-100">Connected professional accounts</Badge>
              <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold text-slate-700">Mock data only</Badge>
            </div>
            <CardTitle className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Accounts</CardTitle>
            <CardDescription className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
              Preview the mock account intelligence layout for connected business and creator accounts, professional-account watchlists, provider readiness, and review status.
            </CardDescription>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 xl:w-96">
            <p className="font-semibold text-slate-900">Provider and compliance notice</p>
            <p className="mt-1 leading-6">
              This mock view opens a demo account preview only. Future live data requires official APIs, connected accounts, manual imports, or licensed compliant providers; scraping and private account access are not implemented.
            </p>
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
          <Button asChild className="w-full rounded-2xl bg-slate-950 px-4 text-sm font-medium text-white shadow-sm sm:w-auto">
            <Link href="/accounts/demo-account">Open demo account preview</Link>
          </Button>
        </CardHeader>
        <CardContent className="p-5 pt-0">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {accountFilters.map((filter) => (
            <label key={filter} className="block">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">{filter}</span>
              <Input className="h-11 rounded-2xl border-slate-200 bg-slate-50 px-3 shadow-sm" placeholder={`Filter by ${filter.toLowerCase()}`} />
            </label>
          ))}
        </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70">
        <CardHeader className="flex flex-col gap-2 border-b border-slate-200 p-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-base font-semibold text-slate-950">Enterprise accounts table</CardTitle>
            <CardDescription className="mt-1 text-sm text-slate-500">Mock account intelligence rows with provider provenance and confidence signals.</CardDescription>
          </div>
          <Badge variant="secondary" className="rounded-full px-3 py-1 text-xs font-semibold text-slate-600">{accountRows.length} mock rows</Badge>
        </CardHeader>
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
              {accountRows.map((row) => (
                <TableRow key={row.handle} className="hover:bg-slate-50/70">
                  <TableCell className="px-5 py-4 font-medium text-slate-950">{row.account}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.handle}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.type}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.followers}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.engagement}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.provider}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.confidence}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-600">{row.freshness}</TableCell>
                  <TableCell className="px-5 py-4"><Badge variant="outline" className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${statusClasses(row.status)}`}>{row.status}</Badge></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </Card>

      <section className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="font-semibold text-slate-900">Disabled until official source is connected</p>
        <p className="mt-1 leading-6">
          Future batches will connect official Meta APIs, Business Discovery, Ad Library, licensed compliant providers, and manual CSV imports after provider adapters and compliance gates are implemented.
        </p>
      </section>
    </div>
  );
}