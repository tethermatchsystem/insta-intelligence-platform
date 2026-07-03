import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Preview-only authentication"
      title="Preview password reset UI"
      description="No password reset email is sent in Alpha. This static page lets reviewers inspect reset safety copy without generating tokens, sending email, or calling an auth backend."
      sideTitle="Review access recovery copy without sending Alpha emails."
      sideDescription="A controlled reset preview for enterprise buyers to review access flows, mock security boundaries, and official-source Instagram intelligence positioning before auth integration."
      activeMetric="No reset email is sent"
      primaryHrefLabel="Remembered your password?"
      primaryHref="/login"
      secondaryHrefLabel="Need a workspace?"
      secondaryHref="/signup"
    >
      <div className="space-y-5">
        <AuthField
          label="Workspace email"
          type="email"
          placeholder="operator@company.com"
          autoComplete="email"
          helper="No password reset email is sent in Alpha; this email stays in the static preview."
        />

        <AuthButton>Review reset preview UI</AuthButton>

        <AuthNotice title="No password reset email is sent in Alpha" tone="slate">
          No password reset email is sent in Alpha. This screen does not generate tokens, send email, update passwords, create sessions, or contact an auth backend.
        </AuthNotice>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 shadow-sm">
          <p className="font-semibold text-slate-950">Recovery checklist</p>
          <ul className="mt-2 space-y-1 text-xs leading-5">
            <li>• Verify the workspace email before production integration.</li>
            <li>• Keep session, token, and email handling in approved auth services only.</li>
            <li>• Preserve audit-ready copy for enterprise security review.</li>
          </ul>
        </div>

        <p className="text-center text-sm text-slate-500">
          Back to mock access? <AuthLink href="/login">Preview mock sign-in</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
