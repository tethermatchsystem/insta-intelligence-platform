import { CompliancePage } from "@/components/compliance/compliance-page";

const compliancePreviewNotes = [
  {
    label: "Policy preview",
    value: "Alpha demo copy only",
    description: "Static policy classifications below do not enforce runtime decisions yet.",
  },
  {
    label: "Governance preview",
    value: "Requires backend enforcement",
    description: "Provider approvals, roles, retention, and permission gates require the private-beta backend.",
  },
  {
    label: "Audit enforcement",
    value: "Planned for private beta",
    description: "Audit readiness examples are placeholders, not live audit logs or enforcement records.",
  },
];

function ComplianceBoundaryNotice() {
  return (
    <section className="rounded-3xl border border-blue-200 bg-blue-50 p-5 shadow-sm">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">Settings compliance alpha boundary</p>
          <h2 className="mt-2 text-lg font-semibold text-blue-950">Compliance settings are governance previews</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-blue-900">
            This route is preview/mock-only. Policy gates, provider approvals, retention controls, and audit enforcement require the private-beta backend before any real policy enforcement exists.
          </p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">Alpha demo copy only</span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {compliancePreviewNotes.map((note) => (
          <article key={note.label} className="rounded-2xl border border-blue-200 bg-white/75 p-3">
            <p className="text-xs font-semibold text-blue-950">{note.label}</p>
            <p className="mt-1 text-sm font-semibold text-blue-800">{note.value}</p>
            <p className="mt-2 text-xs leading-5 text-blue-900">{note.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ComplianceSettingsPage() {
  return (
    <div className="space-y-6">
      <ComplianceBoundaryNotice />
      <CompliancePage />
    </div>
  );
}