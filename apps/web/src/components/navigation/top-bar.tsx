import { Activity, Calendar, Command, Search, ShieldCheck, Sparkles, UserRound } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const commandSuggestions = ["Routes", "Accounts", "Reports", "Providers"];

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/75 px-3 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <Badge variant="outline" className="h-9 rounded-2xl border-white/10 bg-white/10 px-3 text-xs font-semibold text-slate-300 shadow-sm lg:hidden">
            Mobile nav below · static preview
          </Badge>
          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
            <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-cyan-200/70">
              <Sparkles className="h-3 w-3" aria-hidden="true" /> Static Alpha workspace
            </p>
            <p className="truncate text-sm font-semibold text-slate-100">ACME Agency · no workspace changes saved</p>
          </div>
          <Badge variant="outline" className="hidden min-h-11 rounded-2xl border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm leading-5 text-emerald-100 shadow-sm sm:inline-flex">
            <Activity className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
            <span><span className="font-semibold">No live sync:</span> static preview</span>
          </Badge>
        </div>

        <div className="grid w-full min-w-0 gap-3 xl:grid-cols-[minmax(320px,1fr)_auto_auto] 2xl:w-[900px]">
          <div className="rounded-3xl border border-cyan-200/10 bg-white/[0.07] p-2 shadow-sm ring-1 ring-white/[0.03]">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-2">
              <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-200/75">
                <Command className="h-3.5 w-3.5" aria-hidden="true" /> Preview-only command center
              </p>
              <span className="text-[11px] font-medium text-slate-500">No live query is running</span>
            </div>
            <label className="relative block" aria-describedby="global-command-helper">
              <span className="sr-only">Preview-only command and search field; no live query is running</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
              <Input
                readOnly
                aria-readonly="true"
                className="h-11 cursor-not-allowed rounded-2xl border-white/10 bg-slate-950/40 pl-11 pr-4 text-slate-300 shadow-inner shadow-black/10 placeholder:text-slate-500 focus-visible:ring-cyan-300/40"
                placeholder="Future route/account/report/provider search — preview only"
              />
            </label>
            <div id="global-command-helper" className="mt-2 flex flex-wrap gap-1.5 px-2 text-[11px] text-slate-500">
              {commandSuggestions.map((suggestion) => (
                <span key={suggestion} className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5">
                  {suggestion} placeholder
                </span>
              ))}
              <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-0.5 text-amber-100">No backend action runs from this control</span>
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
            <Button type="button" variant="outline" disabled className="h-auto min-h-11 justify-start rounded-2xl border-white/10 bg-white/[0.06] px-4 py-2 text-left text-sm font-medium text-slate-400 shadow-sm disabled:cursor-not-allowed disabled:opacity-70">
              <Calendar className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                <span className="block truncate text-slate-300">Range preview</span>
                <span className="block truncate text-[11px] font-normal text-slate-500">Static date window · not applied globally</span>
              </span>
            </Button>
            <div className="flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-medium text-slate-300 shadow-sm opacity-80" aria-label="Static analyst persona preview; no session or permission logic is applied">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true" />
              <Avatar size="sm" className="bg-cyan-300/20 text-white ring-1 ring-cyan-200/25">
                <AvatarFallback className="bg-cyan-300/20 text-xs font-semibold text-cyan-50">AA</AvatarFallback>
              </Avatar>
              <span className="min-w-0">
                <span className="block truncate">Analyst preview</span>
                <span className="block truncate text-[11px] font-normal text-slate-500">Persona only · no session change</span>
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.06] px-4 py-3 text-xs text-slate-400 shadow-sm xl:w-48">
            <p className="flex items-center gap-1.5 font-semibold text-slate-200">
              <UserRound className="h-3.5 w-3.5 text-cyan-200" aria-hidden="true" /> Alpha QA context
            </p>
            <p className="mt-1 leading-5">Official-source connection required. Provider approval may be required.</p>
          </div>
        </div>
      </div>
    </header>
  );
}
