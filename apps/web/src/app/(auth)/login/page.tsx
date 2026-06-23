import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Secure workspace access"
      title="Welcome back"
      description="Sign in to the private Instagram intelligence workspace preview. This screen is static and does not connect to live authentication."
      sideTitle="Monitor official-safe Instagram intelligence from one executive workspace."
      sideDescription="A premium auth preview for connected professional account analytics, policy-gated providers, export controls, and compliance-first workflows."
      activeMetric="Enterprise access"
      primaryHrefLabel="New to the platform?"
      primaryHref="/signup"
      secondaryHrefLabel="Need a reset?"
      secondaryHref="/forgot-password"
    >
      <div className="space-y-5">
        <div className="grid gap-4">
          <AuthField label="Work email" type="email" placeholder="operator@company.com" autoComplete="email" />
          <AuthField label="Password" type="password" placeholder="Enter password" autoComplete="current-password" />
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-950" />
            Remember this workspace
          </label>
          <AuthLink href="/forgot-password">Forgot password?</AuthLink>
        </div>

        <AuthButton>Sign in to workspace</AuthButton>

        <AuthNotice title="Security and compliance note" tone="emerald">
          This mock sign-in keeps official-first boundaries visible: no scraping, no fake login automation, no credential capture, and no backend session is created.
        </AuthNotice>

        <p className="text-center text-sm text-slate-500">
          No account yet? <AuthLink href="/signup">Create a compliant workspace</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
