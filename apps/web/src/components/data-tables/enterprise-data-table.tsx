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
        <div className="flex flex-wrap items-center gap-2">
          <SystemStateBadge badge={{ label: "Columns placeholder", tone: "neutral" }} />
          <SystemStateBadge badge={{ label: "No live query", tone: "warning" }} />
          <Button type="button" variant="outline" size="sm" disabled className="rounded-full border-white/10 bg-white/10 text-slate-300 disabled:opacity-100">
            Columns preview
          </Button>
        </div>
      </CardHeader>
      {rows.length ? (
        <div className="premium-table-wrap overflow-x-auto">
        <Table className="min-w-[640px]">
          <TableHeader className="bg-slate-950/70 text-xs font-semibold uppercase tracking-wide text-slate-400">
            <TableRow>
              <TableHead className="px-5 py-3">Event</TableHead>
              <TableHead className="px-5 py-3">Source</TableHead>
              <TableHead className="px-5 py-3">Confidence</TableHead>
              <TableHead className="px-5 py-3">Freshness</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-white/10 bg-slate-950/25">
              {rows.map((row) => (
                <TableRow key={row.id} className="align-top transition hover:bg-white/5">
                  <TableCell className="px-5 py-4 font-medium text-slate-50">{row.event}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.source}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.confidence}</TableCell>
                  <TableCell className="px-5 py-4 text-slate-300">{row.freshness}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        </div>
      ) : (
        <CardContent className="p-5">
          <EmptyState title="No table rows match this state" description="Adjust preview filters or review an approved official source connection in a future backend batch." />
        </CardContent>
      )}
    </Card>
  );
}
