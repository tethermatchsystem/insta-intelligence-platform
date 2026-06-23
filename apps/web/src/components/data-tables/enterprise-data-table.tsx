import { mockActivityEvents } from "@/lib/mock-data";
import { EmptyState } from "@/components/empty-states/empty-state";
import { SystemStateBadge } from "@/components/system-states/system-state";

export function EnterpriseDataTable({ title = "Enterprise data table" }: { title?: string }) {
  const rows = mockActivityEvents;

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-3 border-b border-slate-200 px-5 py-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h3 className="font-semibold text-slate-950">{title}</h3>
          <p className="mt-1 text-sm text-slate-500">Enterprise table placeholder with source, confidence, freshness, and policy-safe mock rows.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <SystemStateBadge badge={{ label: "Columns placeholder", tone: "neutral" }} />
          <SystemStateBadge badge={{ label: "No live query", tone: "warning" }} />
        </div>
      </div>
      {rows.length ? (
        <div className="overflow-x-auto">
          <table className="min-w-[640px] divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-5 py-3">Event</th>
                <th className="px-5 py-3">Source</th>
                <th className="px-5 py-3">Confidence</th>
                <th className="px-5 py-3">Freshness</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {rows.map((row) => (
                <tr key={row.id} className="align-top">
                  <td className="px-5 py-4 font-medium text-slate-950">{row.event}</td>
                  <td className="px-5 py-4 text-slate-600">{row.source}</td>
                  <td className="px-5 py-4 text-slate-600">{row.confidence}</td>
                  <td className="px-5 py-4 text-slate-600">{row.freshness}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-5">
          <EmptyState title="No table rows match this state" description="Adjust filters or connect an approved official data source in a future backend batch." />
        </div>
      )}
    </section>
  );
}
