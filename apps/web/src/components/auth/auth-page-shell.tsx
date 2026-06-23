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
  "Official-first data posture",
  "Connected professional account workflows",
  "Policy-gated provider activation",
];

const assuranceRows = [
  { label: "Live auth", value: "Not connected" },
  { label: "Backend writes", value: "Disabled" },
  { label: "Feature gate", value: "official_safe" },
];

function AuthBadge({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200 backdrop-blur">
      {children}
    </span>
  );
}

export function AuthField({ label, type = "text", placeholder, helper, autoComplete }: AuthFieldProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-800">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-100"
      />
      {helper ? <span className="mt-2 block text-xs leading-5 text-slate-500">{helper}</span> : null}
    </label>
  );
}

export function AuthButton({ children }: { children: ReactNode }) {
  return (
    <button
      type="button"
      className="w-full rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-slate-800"
    >
      {children}
    </button>
  );
}

export function AuthNotice({ title, children, tone = "slate" }: AuthNoticeProps) {
  const toneClasses = {
    slate: "border-slate-200 bg-slate-50 text-slate-600",
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
    <Link href={href} className="font-semibold text-slate-950 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-950">
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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,23,42,0.12),_transparent_34%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_45%,_#f8fafc_100%)] px-6 py-8 text-slate-950 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-2xl shadow-slate-200/70 backdrop-blur xl:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden bg-slate-950 p-8 text-white xl:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(99,102,241,0.45),_transparent_28%),radial-gradient(circle_at_80%_0%,_rgba(14,165,233,0.25),_transparent_30%),radial-gradient(circle_at_50%_85%,_rgba(16,185,129,0.22),_transparent_30%)]" />
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
                    <AuthBadge>Mock onboarding</AuthBadge>
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">{eyebrow}</p>
                  <h1 className="mt-4 text-5xl font-semibold tracking-tight">{sideTitle}</h1>
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

          <section className="p-6 sm:p-8 lg:p-12">
            <div className="mx-auto max-w-lg">
              <div className="mb-10 flex items-center justify-between gap-4">
                <Link href="/login" className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/15">
                    II
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950">Insta Intelligence</p>
                    <p className="text-xs text-slate-500">Auth preview</p>
                  </div>
                </Link>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">Mock-only</span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{eyebrow}</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </div>

              <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-6">
                {children}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-slate-500">
                <span>{primaryHrefLabel}</span>
                <AuthLink href={primaryHref}>{primaryHref.replace("/", "") || "login"}</AuthLink>
                {secondaryHref && secondaryHrefLabel ? (
                  <>
                    <span className="text-slate-300">•</span>
                    <span>{secondaryHrefLabel}</span>
                    <AuthLink href={secondaryHref}>{secondaryHref.replace("/", "")}</AuthLink>
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