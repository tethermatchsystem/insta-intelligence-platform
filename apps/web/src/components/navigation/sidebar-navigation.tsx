"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationGroups } from "@/lib/navigation";

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
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-80 border-r border-slate-200 bg-white/95 px-4 py-5 shadow-sm backdrop-blur lg:flex lg:flex-col">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-4 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-sm font-semibold ring-1 ring-white/15">
              II
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Official-first</p>
              <h1 className="truncate text-base font-semibold">Insta Intelligence</h1>
            </div>
          </div>
          <div className="mt-4 rounded-2xl bg-white/10 px-3 py-2 text-xs text-slate-300 ring-1 ring-white/10">
            ACME Agency · Enterprise workspace
          </div>
        </div>

        <nav className="mt-5 flex-1 space-y-6 overflow-y-auto pr-1">
          {navigationGroups.map((group) => (
            <section key={group.label} aria-labelledby={`nav-${group.label}`}>
              <h2 id={`nav-${group.label}`} className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                {group.label}
              </h2>
              <div className="mt-2 space-y-1">
                {group.items.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={[
                        "group flex items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-sm transition",
                        active
                          ? "bg-slate-950 text-white shadow-sm"
                          : "text-slate-700 hover:bg-slate-100 hover:text-slate-950",
                      ].join(" ")}
                    >
                      <span className="min-w-0">
                        <span className="block truncate font-medium leading-5">{item.label}</span>
                        <span className={active ? "block truncate text-xs text-slate-300" : "block truncate text-xs text-slate-400 group-hover:text-slate-500"}>
                          {item.description}
                        </span>
                      </span>
                      <span className={active ? "h-2 w-2 shrink-0 rounded-full bg-emerald-300" : "h-2 w-2 shrink-0 rounded-full bg-slate-200 group-hover:bg-slate-300"} />
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </nav>

        <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          <p className="font-semibold text-slate-800">Compliance mode</p>
          <p className="mt-1 leading-5">Official APIs, consented data, and licensed providers only.</p>
        </div>
      </aside>

      <nav aria-label="Mobile app navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-2 shadow-2xl shadow-slate-950/10 backdrop-blur lg:hidden">
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
                  active ? "bg-slate-950 text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200",
                ].join(" ")}
              >
                <span className="block truncate font-semibold">{item.label}</span>
                <span className={active ? "mt-0.5 block text-[10px] text-slate-300" : "mt-0.5 block text-[10px] text-slate-500"}>Preview route</span>
              </Link>
            );
          })}
        </div>
        <p className="mt-1 px-1 text-[10px] leading-4 text-slate-500">Mock-only navigation. Restricted features stay gated until official source or approved provider access exists.</p>
      </nav>
    </>
  );
}
