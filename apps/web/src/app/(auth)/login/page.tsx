import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  const workspaceNotes = [
    "Use this preview to review the returning workspace access flow before production authentication exists.",
    "Approved beta teams will later authenticate through governed services, not this static Alpha page.",
    "Official-source analytics and provider access remain policy-gated after a workspace is approved.",
  ];

  const safeNextSteps = [
    "Request workspace access if your team is not approved yet.",
    "Review the recovery preview if you need to validate support copy.",
    "Return to the Alpha marketing site to inspect platform positioning.",
  ];

  return (
    <AuthPageShell
      eyebrow="Returning workspace access preview"
      title="Return to your workspace preview"
      description="Review how approved teams will return to a governed workspace later. Alpha keeps this access flow static: no session, cookie, OAuth handshake, credential capture, or backend authentication runs here."
      sideTitle="A governed doorway for official-first Instagram intelligence."
      sideDescription="The sign-in experience is positioned for approved workspaces that need connected professional account analytics, provider governance, export controls, and audit-ready access boundaries."
      activeMetric="No session is created"
      primaryHrefLabel="Need approved access?"
      primaryHref="/signup"
      secondaryHrefLabel="Need recovery copy?"
      secondaryHref="/forgot-password"
    >
      <div className="space-y-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Workspace access boundary</p>
          <p className="mt-2 text-xs leading-5 text-slate-600">
            This is a returning access preview for teams that may later be invited into a private beta workspace. It is not wired to authentication, identity, provider sync, or billing systems.
          </p>
        </div>

        <div className="grid gap-4">
          <AuthField
            label="Workspace email"
            type="email"
            placeholder="operator@company.com"
            autoComplete="email"
            helper="Disabled in Alpha. The value is not submitted, stored, or sent to an authentication service."
          />
          <AuthField
            label="Password"
            type="password"
            placeholder="Production password field placeholder"
            autoComplete="current-password"
            helper="Disabled in Alpha. No credential validation, session creation, cookie write, or OAuth flow runs from this page."
          />
        </div>

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
          <label className="flex min-w-0 items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              disabled
              aria-disabled="true"
              className="h-4 w-4 shrink-0 cursor-not-allowed rounded border-slate-300 text-slate-950"
            />
            <span className="break-words">Remember workspace preview (disabled)</span>
          </label>
          <AuthLink href="/forgot-password">Open recovery preview</AuthLink>
        </div>

        <AuthButton>Workspace access is disabled in Alpha</AuthButton>

        <p className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm leading-6 text-slate-600 shadow-sm">
          Continue without authentication only for preview review: <AuthLink href="/dashboard">Open static dashboard preview</AuthLink>
        </p>

        <AuthNotice title="No session, cookie, OAuth, or backend authentication runs" tone="emerald">
          This form is static and disabled. It does not capture credentials, create a session, set cookies, invoke OAuth, call an auth backend, connect providers, or grant workspace access.
        </AuthNotice>

        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Returning workspace notes</p>
          <ul className="space-y-2 text-xs leading-5 text-slate-600">
            {workspaceNotes.map((note) => (
              <li key={note} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
          <p className="text-sm font-semibold text-indigo-950">What can you safely do next?</p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-indigo-900/80">
            {safeNextSteps.map((step) => (
              <li key={step}>• {step}</li>
            ))}
          </ul>
        </div>

        <p className="text-center text-sm text-slate-500">
          Need approved access later? <AuthLink href="/signup">Preview workspace access request</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
