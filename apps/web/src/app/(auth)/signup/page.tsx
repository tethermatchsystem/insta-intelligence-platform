import { AuthButton, AuthField, AuthLink, AuthNotice, AuthPageShell } from "@/components/auth/auth-page-shell";

export default function Page() {
  return (
    <AuthPageShell
      eyebrow="Private beta access preview"
      title="Preview private beta access request"
      description="No account is created from this page. This static workspace preview explains the private beta access path without creating users, sessions, billing records, or backend tenants."
      sideTitle="Plan compliant intelligence workflows before production auth exists."
      sideDescription="Position teams around official-source Instagram intelligence, consented professional account analytics, provider governance, and audit-ready operations from day one. Private beta access requires approval."
      activeMetric="No account is created"
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
          <AuthField label="Password" type="password" placeholder="Preview password only" autoComplete="new-password" helper="No account is created from this page. Passwords are not stored, submitted, or sent from this static Alpha preview." />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold text-slate-950">Official-source Instagram intelligence</p>
          <ul className="mt-3 space-y-2 text-xs leading-5 text-slate-600">
            <li>• Private beta access requires approval before real onboarding.</li>
            <li>• Connected professional account analytics are treated as official_safe.</li>
            <li>• Business Discovery and public signals remain limited, permission-aware workflows.</li>
            <li>• Licensed provider features require policy review before activation.</li>
          </ul>
        </div>

        <AuthButton>Review workspace request preview</AuthButton>

        <AuthNotice title="No account is created from this page" tone="blue">
          No account is created from this page, no tenant is provisioned, no billing record is opened, and no session starts. Authentication backend remains a deferred private-beta item.
        </AuthNotice>

        <p className="text-center text-sm text-slate-500">
          Prefer to continue? <AuthLink href="/login">Preview mock sign-in</AuthLink>
        </p>
      </div>
    </AuthPageShell>
  );
}
