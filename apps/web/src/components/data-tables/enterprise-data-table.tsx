import { mockActivityEvents } from "@/lib/mock-data";
import { EmptyState } from "@/components/empty-states/empty-state";
import { SystemStateBadge } from "@/components/system-states/system-state";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function EnterpriseDataTable({ title = "Enterprise data table" }: { title?: string }) {
  const rows = mockActivityEvents;

  return (
    <Card className="premium-card overflow-hidden rounded-3xl py-0">
      <CardHeader className="flex flex-col gap-3 border-b border-white/10 p-5 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <CardTitle className="text-base font-semibold text-slate-50">{title}</CardTitle>
          <CardDescription className="mt-1 text-sm text-slate-400">Enterprise table placeholder with source, confidence, freshness, and policy-safe mock rows.</CardDescription>
        </div>
        <div className="flex flex-wrap items-center gap-2 lg:justify-end">
          <SystemStateBadge badge={{ label: "Columns placeholder", tone: "neutral" }} />
          <SystemStateBadge badge={{ label: "No live query", tone: "warning" }} />
          <Button type="button" variant="outline" size="sm" disabled aria-label="Columns preview disabled in Alpha; no saved table view changes run" className="h-auto min-h-8 rounded-full border-white/10 bg-white/10 px-3 py-1.5 text-left text-slate-300 disabled:cursor-not-allowed disabled:opacity-100">
            Columns preview
          </Button>
        </div>
      </CardHeader>
      {rows.length ? (
        <div>
          <div className="grid gap-3 p-4 sm:hidden" aria-label={`${title} mobile static row cards`}>
            {rows.map((row) => (
              <article key={row.id} className="rounded-2xl border border-white/10 bg-slate-950/35 p-4 shadow-inner shadow-black/10">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold leading-5 text-slate-50">{row.event}</h3>
                  <SystemStateBadge badge={{ label: "Static row", tone: "neutral" }} />
                </div>
                <dl className="mt-3 grid gap-2 text-xs leading-5 text-slate-400">
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-slate-500">Source</dt>
                    <dd className="text-right text-slate-300">{row.source}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-slate-500">Confidence</dt>
                    <dd className="text-right text-slate-300">{row.confidence}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-semibold text-slate-500">Freshness</dt>
                    <dd className="text-right text-slate-300">{row.freshness}</dd>
                  </div>
                </dl>
                <p className="mt-3 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-3 py-2 text-[11px] leading-4 text-amber-100">Static Alpha data review only. No row action, export, refresh, provider lookup, or backend query runs.</p>
              </article>
            ))}
          </div>
          <div className="premium-table-wrap hidden overflow-x-auto sm:block" aria-label={`${title} desktop static data table`}>
        <Table className="min-w-[720px]">
          <caption className="sr-only">Static Alpha enterprise data table. Rows are review-only and do not trigger live backend behavior.</caption>
          <TableHeader className="bg-slate-950/70 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <TableRow>
              <TableHead className="px-5 py-3">Event</TableHead>
              <TableHead className="px-5 py-3">Source</TableHead>
              <TableHead className="px-5 py-3">Confidence</TableHead>
              <TableHead className="px-5 py-3">Freshness</TableHead>
              <TableHead className="px-5 py-3">State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-white/10 bg-slate-950/25">
              {rows.map((row) => (
                <TableRow key={row.id} className="cursor-default align-top transition-colors hover:bg-transparent focus-within:bg-white/[0.03]">
                  <TableCell className="px-5 py-4 font-medium text-slate-50">{row.event}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.source}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.confidence}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.freshness}</TableCell>
                  <TableCell className="px-5 py-4"><SystemStateBadge badge={{ label: "Review-only", tone: "neutral" }} /></TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
          </div>
          <div className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-slate-500">
            Table rows are static Alpha review surfaces. No live search, filter, export, download, provider activation, or backend action runs from this table.
          </div>
        </div>
      ) : (
        <CardContent className="p-5">
          <EmptyState title="No table rows match this state" description="Filter preview is static; no live query is running and official source connections require a future backend batch." />
        </CardContent>
      )}
    </Card>
  );
}
