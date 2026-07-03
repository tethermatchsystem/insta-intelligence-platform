import Link from "next/link";
import { type ReactNode } from "react";

type AuthPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  sideTitle: string;
  sideDescription: string;
  activeMetric: string;
  primaryHrefLabel: string;
  primaryHref: string;
  secondaryHrefLabel?: string;
  secondaryHref?: string;
};

type AuthFieldProps = {
  label: string;
  type?: string;
  placeholder: string;
  helper?: string;
  autoComplete?: string;
};

type AuthNoticeProps = {
  title: string;
  children: ReactNode;
  tone?: "slate" | "emerald" | "blue";
};

const proofPoints = [
  "Official-source Instagram intelligence",
  "Private beta access requires approval",
  "No real sign-in runs in Alpha",
];

const assuranceRows = [
  { label: "Preview-only authentication", value: "Static UI" },
  { label: "Backend writes", value: "Disabled" },
  { label: "Feature gate", value: "official_safe" },
];

const authSafetyPills = [
  "Preview-only authentication",
  "No real sign-in runs in Alpha",
  "Private beta access requires approval",
];

const publicNavLinks = [
  { href: "/", label: "Alpha home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const authPreviewLinkLabels: Record<string, string> = {
  "/login": "Open sign-in preview",
  "/signup": "Open workspace preview",
  "/forgot-password": "Open reset preview",
};

function getAuthPreviewLinkLabel(href: string) {
  return authPreviewLinkLabels[href] ?? "Open preview";
}

function AuthBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-black/10 backdrop-blur">
      {children}
    </span>
  );
}

export function AuthField({ label, type = "text", placeholder, helper, autoComplete }: AuthFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
      />
      {helper ? <span className="mt-2 block text-xs leading-5 text-slate-500">{helper}</span> : null}
    </label>
  );
}

export function AuthButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      disabled
      className="w-full cursor-not-allowed rounded-2xl border border-slate-800 bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 opacity-90"
    >
      {children}
    </button>
  );
}

export function AuthNotice({ title, children, tone = "slate" }: AuthNoticeProps) {
  const toneClasses = {
    slate: "border-slate-200 bg-slate-50 text-slate-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-900",
    blue: "border-blue-200 bg-blue-50 text-blue-900",
  };

  return (
    <div className={`rounded-2xl border p-4 text-sm leading-6 ${toneClasses[tone]}`}>
      <p className="font-semibold">{title}</p>
      <div className="mt-1 text-xs leading-5 opacity-90">{children}</div>
    </div>
  );
}

export function AuthLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-sm font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 outline-none hover:decoration-slate-950 focus-visible:ring-2 focus-visible:ring-slate-400"
    >
      {children}
    </Link>
  );
}

export function AuthPageShell({
  eyebrow,
  title,
  description,
  children,
  sideTitle,
  sideDescription,
  activeMetric,
  primaryHrefLabel,
  primaryHref,
  secondaryHrefLabel,
  secondaryHref,
}: AuthPageShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.34),_transparent_32%),radial-gradient(circle_at_82%_18%,_rgba(14,165,233,0.22),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#0f172a_50%,_#111827_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20 backdrop-blur sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-2xl px-2 py-1.5 text-white outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950 shadow-xl shadow-black/20">
              II
            </div>
            <div>
              <p className="text-sm font-semibold">Insta Intelligence</p>
              <p className="text-xs text-slate-300">Official-source Instagram intelligence</p>
            </div>
          </Link>

          <nav aria-label="Public auth preview links" className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
            {publicNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-center text-xs font-semibold text-slate-200 outline-none transition hover:border-white/25 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        <div className="grid flex-1 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/40 backdrop-blur xl:grid-cols-[1.02fr_0.98fr]">
          <section className="relative hidden overflow-hidden bg-slate-950 p-8 text-white xl:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.48),_transparent_28%),radial-gradient(circle_at_80%_0%,_rgba(14,165,233,0.25),_transparent_30%),radial-gradient(circle_at_50%_85%,_rgba(16,185,129,0.22),_transparent_30%)]" />
            <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="relative flex h-full min-h-[42rem] flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-sm font-black text-slate-950 shadow-xl shadow-white/10">
                    II
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Insta Intelligence</p>
                    <p className="text-xs text-slate-300">Official-first SaaS preview</p>
                  </div>
                </div>

                <div className="mt-16 max-w-xl">
                  <div className="mb-5 flex flex-wrap gap-2">
                    <AuthBadge>{activeMetric}</AuthBadge>
                    <AuthBadge>Official-source Instagram intelligence</AuthBadge>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{eyebrow}</p>
                  <h2 className="mt-4 text-5xl font-semibold tracking-tight">{sideTitle}</h2>
                  <p className="mt-5 text-base leading-8 text-slate-300">{sideDescription}</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Trust posture</p>
                  <div className="mt-4 grid gap-3">
                    {proofPoints.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm text-slate-100">
                        <span className="h-2 w-2 rounded-full bg-emerald-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  {assuranceRows.map((row) => (
                    <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                      <span className="text-slate-300">{row.label}</span>
                      <span className="font-semibold text-white">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-5 sm:p-8 lg:p-10 xl:p-12">
            <div className="mx-auto flex h-full max-w-xl flex-col justify-center">
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/login"
                  className="flex items-center gap-3 rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
                    II
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Insta Intelligence</p>
                    <p className="text-xs text-slate-500">Auth preview</p>
                  </div>
                </Link>
                <span className="w-fit rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-slate-950/10">
                  Preview-only authentication
                </span>
              </div>

              <div className="rounded-[2rem] border border-slate-200/80 bg-white/90 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur sm:p-7">
                <div className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/80 p-4">
                  <p className="text-sm font-semibold text-indigo-950">Preview-only authentication</p>
                  <p className="mt-1 text-xs leading-5 text-indigo-900/80">
                    No real sign-in runs in Alpha. Private beta access requires approval before any production auth, session, email, or provider workflow exists.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h1>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-3">
                  {authSafetyPills.map((pill) => (
                    <div key={pill} className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold leading-5 text-slate-700">
                      {pill}
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-6">
                  {children}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500">
                <span>{primaryHrefLabel}</span>
                <AuthLink href={primaryHref}>{getAuthPreviewLinkLabel(primaryHref)}</AuthLink>
                {secondaryHref && secondaryHrefLabel ? (
                  <>
                    <span className="text-slate-300">•</span>
                    <span>{secondaryHrefLabel}</span>
                    <AuthLink href={secondaryHref}>{getAuthPreviewLinkLabel(secondaryHref)}</AuthLink>
                  </>
                ) : null}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}