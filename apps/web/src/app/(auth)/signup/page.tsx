import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  const rolePreviews = ["Executive sponsor", "Compliance reviewer", "Social intelligence operator"];

  const readinessChecklist = [
    "Confirm the team manages or analyzes approved professional account data.",
    "Identify which official Meta API or licensed provider paths are required.",
    "Prepare compliance contacts for provider, export, and audit review.",
  ];

  return (
    <AuthPageShell
      eyebrow="Workspace onboarding request preview"
      title="Request access to a governed workspace"
      description="Preview the private beta intake experience for approved teams. Alpha does not create accounts, send invitations, start billing, provision tenants, connect providers, or write onboarding data."
      sideTitle="A compliance-first onboarding path before production auth exists."
      sideDescription="Use this preview to align stakeholders around official-source Instagram intelligence, consented professional account analytics, provider governance, and audit-ready onboarding expectations."
      activeMetric="No account or invite is created"
      primaryHrefLabel="Already reviewing access?"
      primaryHref="/login"
    >
      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Access request boundary</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            This page shows how workspace onboarding may be framed for private beta teams. It is not a signup system and does not create users, invitations, tenants, billing records, or provider connections.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <AuthField
            label="Full name"
            placeholder="Jordan Lee"
            autoComplete="name"
            helper="Disabled preview field. No contact record is created."
          />
          <AuthField
            label="Company"
            placeholder="Northstar Social"
            autoComplete="organization"
            helper="Disabled preview field. No workspace tenant is provisioned."
          />
        </div>
        <div className="grid gap-4">
          <AuthField
            label="Work email"
            type="email"
            placeholder="jordan@northstar.example"
            autoComplete="email"
            helper="Disabled in Alpha. No invitation, email, approval workflow, or backend request is sent."
          />
          <AuthField
            label="Password"
            type="password"
            placeholder="Production password field placeholder"
            autoComplete="new-password"
            helper="Disabled in Alpha. Passwords are not stored, submitted, checked, or sent from this static request preview."
          />
        </div>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Account type and role preview</p>
          <div className="grid gap-2 sm:grid-cols-3">
            {rolePreviews.map((role) => (
              <div key={role} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-xs font-semibold leading-5 text-slate-700">
                {role}
              </div>
            ))}
          </div>
          <p className="text-xs leading-5 text-slate-500">
            Role selection is illustrative only. Production invitations and permissions will require an approved workspace workflow.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Workspace readiness checklist</p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-600">
            {readinessChecklist.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/80 p-4 shadow-sm">
          <p className="text-sm font-semibold text-emerald-950">Compliance-first onboarding notes</p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-emerald-900/80">
            <li>• Connected professional account analytics stay official-source and consent-aware.</li>
            <li>• Business Discovery and public signals remain limited, permission-aware workflows.</li>
            <li>• Licensed provider features require policy review before activation.</li>
          </ul>
        </div>

        <AuthButton>Workspace request is disabled in Alpha</AuthButton>

        <p className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm leading-6 text-slate-600 shadow-sm">
          Preview the workspace journey without creating an account: <AuthLink href="/dashboard">Open static dashboard preview</AuthLink>
        </p>

        <AuthNotice title="No account, invite, email, billing, or provider connection runs" tone="blue">
          This static request preview does not create an account, send an invitation, email anyone, open billing, provision a tenant, connect a provider, create a session, or call a backend service.
        </AuthNotice>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
          <p className="text-sm font-semibold text-indigo-950">What can you safely do next?</p>
          <p className="mt-2 text-xs leading-5 text-indigo-900/80">
            Review the readiness checklist with your team, then use the contact page for human follow-up when private beta intake opens.
          </p>
        </div>

        <p className="text-center text-sm text-slate-500">
          Prefer to continue? <AuthLink href="/login">Preview returning workspace access</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
