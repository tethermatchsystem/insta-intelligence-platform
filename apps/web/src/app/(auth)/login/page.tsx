import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Preview-only authentication"
      title="Preview-only sign-in"
      description="No real sign-in runs in Alpha. This static auth page lets reviewers inspect the access experience without submitting credentials, creating sessions, or calling an auth backend."
      sideTitle="Official-source Instagram intelligence for approved private beta teams."
      sideDescription="A premium auth preview for connected professional account analytics, policy-gated providers, export controls, and compliance-first workflows. Private beta access requires approval."
      activeMetric="No real sign-in runs in Alpha"
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
            Remember this workspace preview (static only)
          </label>
          <AuthLink href="/forgot-password">Preview reset workflow</AuthLink>
        </div>

        <AuthButton>Review preview-only sign-in UI</AuthButton>

        <AuthNotice title="Preview-only authentication" tone="emerald">
          No real sign-in runs in Alpha. No credentials are captured, no session is created, and no backend authentication request is made. Private beta access requires approval.
        </AuthNotice>

        <p className="text-center text-sm text-slate-500">
          Need approved access later? <AuthLink href="/signup">Preview private beta access request</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
