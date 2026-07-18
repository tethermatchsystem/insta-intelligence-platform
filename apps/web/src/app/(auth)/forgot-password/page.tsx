import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  const recoveryPathNotes = [
    "Confirm the workspace email and support path before production auth is integrated.",
    "Keep token generation, delivery, and session changes inside approved auth services only.",
    "Route uncertain access issues to a human support or workspace administrator review path.",
  ];

  return (
    <AuthPageShell
      eyebrow="Safe account recovery preview"
      title="Review workspace recovery guidance"
      description="Preview the account recovery experience without changing access state. Alpha sends no email, creates no reset token, changes no session, updates no password, and starts no backend recovery job."
      sideTitle="Recovery guidance that preserves security boundaries."
      sideDescription="This preview lets enterprise reviewers inspect reset copy, support fallback expectations, and official-source SaaS positioning before any production account recovery service exists."
      activeMetric="No reset token is created"
      primaryHrefLabel="Ready to return?"
      primaryHref="/login"
      secondaryHrefLabel="Need workspace intake?"
      secondaryHref="/signup"
    >
      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Recovery boundary</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            This page is a safe recovery copy preview. It does not verify identity, send email, generate reset tokens, update passwords, create sessions, or call backend recovery jobs.
          </p>
        </div>

        <AuthField
          label="Workspace email"
          type="email"
          placeholder="operator@company.com"
          autoComplete="email"
          helper="Disabled in Alpha. The email stays in the static preview and no recovery request is submitted."
        />

        <AuthButton>Recovery request is disabled in Alpha</AuthButton>

        <AuthNotice title="No email, reset token, session change, or backend recovery job runs" tone="slate">
          This screen is static and disabled. It does not send reset email, create tokens, update passwords, change sessions, write cookies, or contact an authentication backend.
        </AuthNotice>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-950">Recovery path notes</p>
          <ul className="mt-3 space-y-2 text-xs leading-5">
            {recoveryPathNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4 shadow-sm">
          <p className="text-sm font-semibold text-blue-950">Support fallback preview</p>
          <p className="mt-2 text-xs leading-5 text-blue-900/80">
            If this were production and recovery could not be completed safely, the visitor would be routed to an approved workspace administrator or support contact instead of exposing account state.
          </p>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
          <p className="text-sm font-semibold text-indigo-950">What can you safely do next?</p>
          <p className="mt-2 text-xs leading-5 text-indigo-900/80">
            Return to the access preview, review workspace intake, or use the public contact page for manual Alpha follow-up without triggering account recovery automation.
          </p>
        </div>

        <p className="text-center text-sm text-slate-500">
          Need manual help? <AuthLink href="/contact">Open public contact</AuthLink>
          <span className="mx-2 text-slate-300">•</span>
          Back to access? <AuthLink href="/login">Preview workspace access</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
