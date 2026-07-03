import { CompliancePage } from "@/components/compliance/compliance-page";

const compliancePreviewNotes = [
  {
    label: "Preview-only settings",
    value: "No settings are saved in Alpha",
    description: "Static policy classifications below do not enforce runtime decisions or save governance changes yet.",
  },
  {
    label: "Governance controls are static in this preview",
    value: "No backend action runs from this page",
    description: "Provider approvals, roles, retention, and permission gates require private-beta backend enforcement.",
  },
  {
    label: "Private beta activation required",
    value: "Official-source provider approval may be required",
    description: "Audit readiness examples are placeholders, not live audit logs, provider activations, or enforcement records.",
  },
];

function ComplianceBoundaryNotice() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950 p-5 text-white shadow-2xl shadow-slate-200/70">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Settings compliance alpha boundary</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">Compliance settings are preview-only governance controls</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
            Preview-only settings: no settings are saved in Alpha. Policy gates, provider approvals, retention controls, and audit enforcement require private beta activation before any real policy enforcement exists.
          </p>
        </div>
        <span className="w-fit rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/20">No backend action runs from this page</span>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {compliancePreviewNotes.map((note) => (
          <article key={note.label} className="rounded-2xl border border-white/10 bg-white/10 p-3">
            <p className="text-xs font-semibold text-slate-300">{note.label}</p>
            <p className="mt-1 text-sm font-semibold text-white">{note.value}</p>
            <p className="mt-2 text-xs leading-5 text-slate-300">{note.description}</p>
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