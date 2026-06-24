import { Activity, Calendar, Search, ShieldCheck, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TopBar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/60 px-3 py-3 shadow-2xl shadow-black/10 backdrop-blur-2xl sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-3 2xl:flex-row 2xl:items-center 2xl:justify-between">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <Badge variant="outline" className="h-9 rounded-2xl border-white/10 bg-white/10 px-3 text-xs font-semibold text-slate-300 shadow-sm lg:hidden">
            Mobile nav below
          </Badge>
          <div className="min-w-0 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 shadow-sm backdrop-blur">
            <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-cyan-200/70">
              <Sparkles className="h-3 w-3" aria-hidden="true" /> Workspace
            </p>
            <p className="truncate text-sm font-semibold text-slate-100">ACME Agency</p>
          </div>
          <Badge variant="outline" className="hidden h-11 rounded-2xl border-emerald-300/20 bg-emerald-300/10 px-4 text-sm text-emerald-100 shadow-sm sm:inline-flex">
            <Activity className="mr-2 h-4 w-4" aria-hidden="true" />
            <span className="font-semibold">Mock freshness:</span> static preview
          </Badge>
        </div>

        <div className="grid w-full min-w-0 gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto] 2xl:w-[760px]">
          <label className="relative block">
            <span className="sr-only">Search accounts</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
            <Input
              readOnly
              className="h-11 rounded-2xl border-white/10 bg-white/10 pl-11 pr-4 text-slate-200 shadow-sm placeholder:text-slate-500 focus-visible:ring-cyan-300/40"
              placeholder="Search preview: accounts, creators, campaigns..."
            />
          </label>
          <Button type="button" variant="outline" disabled className="h-11 rounded-2xl border-white/10 bg-white/10 px-4 text-sm font-medium text-slate-300 shadow-sm disabled:opacity-100">
            <Calendar className="mr-2 h-4 w-4" aria-hidden="true" />
            Range preview
          </Button>
          <div className="flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 text-sm font-medium text-slate-200 shadow-sm transition hover:bg-white/20">
            <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
            <Avatar size="sm" className="bg-cyan-300/20 text-white ring-1 ring-cyan-200/25">
              <AvatarFallback className="bg-cyan-300/20 text-xs font-semibold text-cyan-50">AA</AvatarFallback>
            </Avatar>
            <span className="hidden sm:inline">Analyst preview</span>
          </div>
        </div>
      </div>
    </header>
  );
}
