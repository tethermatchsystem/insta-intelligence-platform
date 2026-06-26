import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Alpha reset preview"
      title="Preview reset workflow only"
      description="Enter your work email to preview the password reset experience. This form is static in Alpha and does not send email or call an auth backend."
      sideTitle="Recover workspace access without leaving the compliance-first preview."
      sideDescription="A controlled reset screen for enterprise buyers to review access flows, mock security copy, and no-live-backend boundaries before auth integration."
      activeMetric="Preview-only reset"
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
          helper="No credentials are submitted in Alpha; this email stays in the static preview."
        />

        <AuthButton>Preview reset workflow only</AuthButton>

        <AuthNotice title="No live email or backend" tone="slate">
          Reset delivery is intentionally disabled. This screen only demonstrates the user experience and does not generate tokens, send email, or update passwords. Authentication backend is planned for private beta.
        </AuthNotice>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
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
