"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Bell,
  Briefcase,
  CreditCard,
  Database,
  Download,
  FileText,
  Hash,
  MessageSquare,
  Radar,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { navigationGroups } from "@/lib/navigation";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const navigationIcons = {
  Dashboard: BarChart3,
  Accounts: Users,
  Creators: Search,
  Competitors: Radar,
  Hashtags: Hash,
  Mentions: MessageSquare,
  Alerts: Bell,
  Reports: FileText,
  Exports: Download,
  "Data Sources": Database,
  "Billing preview": CreditCard,
  Settings: Settings,
  Compliance: ShieldCheck,
} as const;

function isActiveRoute(pathname: string, href: string) {
  if (href === "/dashboard") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SidebarNavigation() {
  const pathname = usePathname();
  const mobileItems = navigationGroups.flatMap((group) => group.items);

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-80 border-r border-white/10 bg-slate-950/80 px-4 py-5 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:flex lg:flex-col">
        <div className="premium-header-surface rounded-3xl p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/20 text-sm font-bold text-cyan-100 ring-1 ring-cyan-200/25 shadow-lg shadow-cyan-950/30">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/80">Official-first</p>
              <h1 className="truncate text-lg font-semibold tracking-tight">Insta Intelligence</h1>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-2.5 text-xs text-slate-200 shadow-inner shadow-black/10">
            <span>ACME Agency · Alpha demo workspace</span>
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.65)]" aria-label="Alpha demo" />
          </div>
        </div>

        <Separator className="my-5 bg-white/10" />

        <nav className="flex-1 space-y-6 overflow-y-auto pr-1">
          {navigationGroups.map((group) => (
            <section key={group.label} aria-labelledby={`nav-${group.label}`}>
              <h2 id={`nav-${group.label}`} className="px-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                {group.label}
              </h2>
              <div className="mt-2 space-y-1">
                {group.items.map((item) => {
                  const active = isActiveRoute(pathname, item.href);
                  const Icon = navigationIcons[item.label as keyof typeof navigationIcons] ?? Briefcase;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "group relative flex items-center justify-between gap-3 overflow-hidden rounded-2xl px-3 py-2.5 text-sm transition duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300/60",
                        active
                          ? "bg-cyan-300/20 text-white shadow-lg shadow-cyan-950/20 ring-1 ring-cyan-200/25 before:absolute before:inset-y-2 before:left-0 before:w-1 before:rounded-r-full before:bg-cyan-300"
                          : "text-slate-400 hover:bg-white/10 hover:text-slate-100 hover:ring-1 hover:ring-white/10",
                      ].join(" ")}
                    >
                      <span className="relative flex min-w-0 items-center gap-3">
                        <span className={active ? "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-cyan-300/20 text-cyan-100 ring-1 ring-cyan-200/25" : "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/5 text-slate-400 ring-1 ring-white/10 group-hover:text-cyan-100"}>
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                        <span className="block truncate font-medium leading-5">{item.label}</span>
                        <span className={active ? "block truncate text-xs text-cyan-100/75" : "block truncate text-xs text-slate-500 group-hover:text-slate-300"}>
                          {item.description}
                        </span>
                        </span>
                      </span>
                      <span className={active ? "h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" : "h-2 w-2 shrink-0 rounded-full bg-slate-700 group-hover:bg-cyan-300/70"} />
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>

        <div className="mt-5 rounded-3xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-xs text-slate-300 shadow-inner shadow-emerald-950/20">
          <div className="flex items-center justify-between gap-2">
            <p className="font-semibold text-slate-100">Alpha compliance mode</p>
            <Badge variant="outline" className="rounded-full border-emerald-300/25 bg-emerald-300/20 text-emerald-100">Alpha demo</Badge>
          </div>
          <p className="mt-2 leading-5">Official APIs, consented data, and licensed providers only. No live sync is running.</p>
        </div>
      </aside>

      <nav aria-label="Mobile app navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 px-3 py-2 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden">
        <div className="mx-auto flex max-w-[1600px] gap-2 overflow-x-auto pb-1">
          {mobileItems.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "min-w-[8.5rem] rounded-2xl px-3 py-2 text-xs transition",
                  active ? "bg-cyan-300/20 text-white shadow-sm ring-1 ring-cyan-200/25" : "bg-white/5 text-slate-300 hover:bg-white/10",
                ].join(" ")}
              >
                <span className="block truncate font-semibold">{item.label}</span>
                <span className={active ? "mt-0.5 block text-[10px] text-cyan-100/70" : "mt-0.5 block text-[10px] text-slate-500"}>Preview route</span>
              </Link>
            );
          })}
        </div>
        <p className="mt-1 px-1 text-[10px] leading-4 text-slate-500">Mock-only navigation. Restricted features stay gated until official source or approved provider access exists.</p>
      </nav>
    </>
  );
}
