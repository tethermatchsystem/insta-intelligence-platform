import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Alpha workspace preview"
      title="Preview mock workspace creation"
      description="Set up a mock company workspace for official-first Instagram intelligence. This form is static in Alpha; no live account, billing, or backend tenant will be created."
      sideTitle="Launch compliant intelligence workflows before connecting production auth."
      sideDescription="Position teams around Meta-approved data sources, consented professional account analytics, provider governance, and audit-ready operations from day one."
      activeMetric="Official-safe setup"
      primaryHrefLabel="Already previewing auth?"
      primaryHref="/login"
    >
      <div className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <AuthField label="Full name" placeholder="Jordan Lee" autoComplete="name" />
          <AuthField label="Company" placeholder="Northstar Social" autoComplete="organization" />
        </div>
        <div className="grid gap-4">
          <AuthField label="Work email" type="email" placeholder="jordan@northstar.example" autoComplete="email" />
          <AuthField label="Password" type="password" placeholder="Preview password only" autoComplete="new-password" helper="No credentials are submitted in Alpha. Passwords are not stored or sent from this static preview." />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-950">Official-first positioning</p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-600">
            <li>• Connected professional account analytics are treated as official_safe.</li>
            <li>• Business Discovery and public signals remain limited, permission-aware workflows.</li>
            <li>• Licensed provider features require policy review before activation.</li>
          </ul>
        </div>

        <AuthButton>Preview mock workspace creation</AuthButton>

        <AuthNotice title="Mock-only onboarding" tone="blue">
          This form does not create users, tenants, sessions, provider credentials, or billing records. Buttons are non-functional placeholders, and authentication backend is planned for private beta.
        </AuthNotice>

        <p className="text-center text-sm text-slate-500">
          Prefer to continue? <AuthLink href="/login">Preview mock sign-in</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
