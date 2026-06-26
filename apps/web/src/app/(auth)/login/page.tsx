import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Alpha mock access preview"
      title="Preview mock sign-in"
      description="Preview mock sign-in for the private Instagram intelligence workspace. This form is static in Alpha and no credentials are submitted."
      sideTitle="Monitor official-safe Instagram intelligence from one executive workspace."
      sideDescription="A premium auth preview for connected professional account analytics, policy-gated providers, export controls, and compliance-first workflows."
      activeMetric="Mock access only"
      primaryHrefLabel="New to the platform?"
      primaryHref="/signup"
      secondaryHrefLabel="Preview reset?"
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
            Remember this workspace preview
          </label>
          <AuthLink href="/forgot-password">Preview reset workflow</AuthLink>
        </div>

        <AuthButton>Preview mock sign-in</AuthButton>

        <AuthNotice title="Security and compliance note" tone="emerald">
          This mock sign-in keeps official-first boundaries visible: no scraping, no fake login automation, no credential capture, and no backend session is created. Authentication backend is planned for private beta.
        </AuthNotice>

        <p className="text-center text-sm text-slate-500">
          No live account yet? <AuthLink href="/signup">Preview mock workspace creation</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
