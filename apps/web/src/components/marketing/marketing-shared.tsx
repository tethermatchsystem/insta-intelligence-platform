import Link from "next/link";
import type { ReactNode } from "react";

type MarketingLink = {
  href: string;
  label: string;
};

type MarketingBadgeTone = "solid" | "muted" | "emerald";

type MarketingBadgeProps = {
  children: ReactNode;
  tone?: MarketingBadgeTone;
};

const badgeToneClasses: Record<MarketingBadgeTone, string> = {
  solid: "border-white/15 bg-white text-slate-950 shadow-sm",
  muted: "border-white/15 bg-white/10 text-slate-200",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
};

export function MarketingBadge({ children, tone = "muted" }: MarketingBadgeProps) {
  return (
    <span className={`inline-flex max-w-full items-center rounded-full border px-3 py-1.5 text-left leading-5 ${badgeToneClasses[tone]}`}>
      {children}
    </span>
  );
}

type MarketingCtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function MarketingCtaLink({ href, children, variant = "primary" }: MarketingCtaLinkProps) {
  const variantClass =
    variant === "primary"
      ? "border-white/15 bg-white text-slate-950 shadow-lg shadow-slate-950/20 hover:bg-slate-100"
      : "border-white/15 bg-white/10 text-white hover:bg-white/15";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 w-full items-center justify-center rounded-full border px-5 py-3 text-center text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 sm:w-auto ${variantClass}`}
    >
      {children}
    </Link>
  );
}

type MarketingSafetyListProps = {
  items: string[];
  density?: "comfortable" | "compact";
  className?: string;
};

export function MarketingSafetyList({ items, density = "comfortable", className }: MarketingSafetyListProps) {
  const wrapperClass = className ?? (density === "compact" ? "mt-5 grid gap-2" : "mt-6 space-y-3");
  const itemClass =
    density === "compact"
      ? "break-words rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-2 text-sm font-medium leading-6 text-slate-100 shadow-sm shadow-slate-950/10"
      : "break-words rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-sm font-medium leading-6 text-slate-100 shadow-sm shadow-slate-950/10";

  return (
    <div className={wrapperClass}>
      {items.map((item) => (
        <div key={item} className={itemClass}>
          {item}
        </div>
      ))}
    </div>
  );
}

type MarketingLinkRowProps = {
  links: MarketingLink[];
  note: string;
};

export function MarketingLinkRow({ links, note }: MarketingLinkRowProps) {
  return (
    <nav aria-label="Public marketing preview links" className="rounded-[2rem] border border-slate-200 bg-white/95 p-3 text-sm shadow-sm shadow-slate-200/70 sm:p-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-center font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 sm:w-auto">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-3 break-words text-xs font-medium leading-5 text-slate-600">{note}</p>
    </nav>
  );
}