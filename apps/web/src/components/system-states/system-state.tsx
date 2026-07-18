import { type ReactNode, useId } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export type SystemStateVariant = "empty" | "loading" | "error" | "restricted" | "unavailable" | "placeholder";

export type SystemStateBadgeTone = "success" | "warning" | "info" | "neutral" | "danger" | "purple" | "cyan";

export type SystemStateBadge = {
  label: string;
  tone?: SystemStateBadgeTone;
};

type SystemStateProps = {
  variant?: SystemStateVariant;
  eyebrow?: string;
  title: string;
  description?: string;
  badges?: SystemStateBadge[];
  checks?: string[];
  children?: ReactNode;
  compact?: boolean;
  stateRole?: string;
  safetyNote?: string;
};

const variantCopy: Record<SystemStateVariant, { eyebrow: string; accent: string; icon: string; role: string; safetyNote: string }> = {
  empty: {
    eyebrow: "Source readiness placeholder",
    accent: "from-slate-950 via-slate-900 to-indigo-950",
    icon: "∅",
    role: "Explains what official-source, owned, consented, imported, or approved-provider data may appear here after authorized source readiness.",
    safetyNote: "Next-step labels are static guidance only; no connection, invite, policy change, sync, or backend write runs from this state.",
  },
  loading: {
    eyebrow: "Alpha skeleton preview",
    accent: "from-slate-950 via-slate-900 to-blue-950",
    icon: "↻",
    role: "Shows layout and source-readiness placeholders only; it does not imply live backend fetching, provider lookup, or data collection.",
    safetyNote: "No backend fetch, provider query, OAuth flow, job, or live Instagram data collection is running.",
  },
  error: {
    eyebrow: "Compliance-safe boundary state",
    accent: "from-rose-950 via-slate-950 to-slate-900",
    icon: "!",
    role: "Frames unavailable sources, missing permissions, or Alpha-disabled provider jobs with calm recovery copy instead of scary technical failures.",
    safetyNote: "No backend write, notification, provider action, OAuth flow, reset, export, or fake live incident workflow is triggered.",
  },
  restricted: {
    eyebrow: "Compliance gate boundary",
    accent: "from-amber-950 via-slate-950 to-slate-900",
    icon: "⊘",
    role: "Marks features that require official-source eligibility, authorized account scope, policy approval, or licensed-provider-only review before future activation.",
    safetyNote: "Real actions remain disabled. No scraping, private account access, hidden surveillance, fake login automation, or anti-bot bypass is available.",
  },
  unavailable: {
    eyebrow: "Source unavailable preview",
    accent: "from-slate-950 via-slate-900 to-emerald-950",
    icon: "◇",
    role: "Explains that a source, permission, or provider pathway is not connected in Alpha without opening OAuth, activation, or backend setup.",
    safetyNote: "Official-source connection, authorized scope, and private beta activation are required before live behavior exists.",
  },
  placeholder: {
    eyebrow: "Alpha preview boundary",
    accent: "from-slate-950 via-slate-900 to-cyan-950",
    icon: "◇",
    role: "Provides static Alpha context for a future workflow while keeping the current UI mock-only and official-source-safe.",
    safetyNote: "No live Instagram data is collected, synced, exported, or written in Alpha.",
  },
};

const boundaryLabels: Record<SystemStateVariant, string> = {
  empty: "Source readiness",
  loading: "Skeleton preview",
  error: "Safe recovery copy",
  restricted: "Policy gated",
  unavailable: "Source not connected",
  placeholder: "Static preview",
};

const defaultBadges: Record<SystemStateVariant, SystemStateBadge[]> = {
  empty: [
    { label: "Alpha preview", tone: "info" },
    { label: "Authorized source required", tone: "success" },
    { label: "Actions disabled", tone: "warning" },
  ],
  loading: [
    { label: "Preview skeleton", tone: "info" },
    { label: "No backend fetch", tone: "warning" },
    { label: "Source-readiness placeholder", tone: "neutral" },
  ],
  error: [
    { label: "Source or permission boundary", tone: "danger" },
    { label: "No live failure simulated", tone: "warning" },
    { label: "Preview-safe recovery", tone: "neutral" },
  ],
  restricted: [
    { label: "Official-source required", tone: "warning" },
    { label: "Real actions disabled", tone: "neutral" },
    { label: "Licensed-provider-only where required", tone: "purple" },
  ],
  unavailable: [
    { label: "Source not connected", tone: "warning" },
    { label: "Private beta activation required", tone: "info" },
    { label: "No OAuth started", tone: "neutral" },
  ],
  placeholder: [
    { label: "Preview-only state", tone: "info" },
    { label: "No live integration", tone: "warning" },
    { label: "Official-source first", tone: "success" },
  ],
};

const defaultChecks: Record<SystemStateVariant, string[]> = {
  empty: ["Future rows require authorized source readiness or approved provider coverage", "Safe next steps are guidance only: connect later, review source, invite team, or configure policy", "Controls remain disabled and no backend action runs from this state"],
  loading: ["Skeletons are visual placeholders only", "No live sync, provider fetch, OAuth, or source lookup is implied", "No jobs, downloads, notifications, or database writes run"],
  error: ["Treat this as source not connected, permission unavailable, or Alpha-disabled provider job copy", "No stack trace, fake incident, live support workflow, or alert is exposed", "No provider, OAuth, notification, export, or backend action is triggered"],
  restricted: ["Official-source connection or authorized account scope is required", "Licensed-provider-only features require approval where applicable", "No scraping, private account access, hidden surveillance, fake login, or anti-bot bypass"],
  unavailable: ["Source, permission, or provider pathway is not connected in Alpha", "No OAuth, provider activation, or connection job runs from this state", "No backend route, provider job, or database write exists here"],
  placeholder: ["Alpha preview only", "No live Instagram data is collected, synced, exported, or written in Alpha", "No backend action runs from this state"],
};

function badgeClasses(tone: SystemStateBadgeTone = "neutral") {
  const tones: Record<SystemStateBadgeTone, string> = {
    success: "bg-emerald-50 text-emerald-700 ring-emerald-100",
    warning: "bg-amber-50 text-amber-700 ring-amber-100",
    info: "bg-blue-50 text-blue-700 ring-blue-100",
    neutral: "bg-slate-100 text-slate-700 ring-slate-200",
    danger: "bg-rose-50 text-rose-700 ring-rose-100",
    purple: "bg-violet-50 text-violet-700 ring-violet-100",
    cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
  };

  return tones[tone];
}

export function SystemStateBadge({ badge }: { badge: SystemStateBadge }) {
  return (
    <Badge variant="outline" className={cn("h-auto min-h-6 max-w-full items-start justify-start overflow-visible whitespace-normal break-words rounded-full border-transparent px-3 py-1 text-left font-semibold leading-4 ring-1", badgeClasses(badge.tone))}>
      {badge.label}
    </Badge>
  );
}

export function SystemState({ variant = "placeholder", eyebrow, title, description, badges = [], checks = [], children, compact = false, stateRole, safetyNote }: SystemStateProps) {
  const copy = variantCopy[variant];
  const boundaryLabel = boundaryLabels[variant];
  const safeBadges = badges.length ? badges : defaultBadges[variant];
  const safeChecks = checks.length ? checks : defaultChecks[variant];
  const titleId = useId();
  const descriptionId = `${titleId}-description`;

  return (
    <Card role="region" aria-labelledby={titleId} aria-describedby={description ? descriptionId : undefined} className={cn("overflow-hidden rounded-3xl border-white/10 bg-slate-950/80 py-0 shadow-2xl shadow-black/20 ring-1 ring-white/[0.03]", compact ? "p-2 sm:p-3" : "p-3 sm:p-4")}>
      <div className={`rounded-3xl bg-gradient-to-br ${copy.accent} p-4 text-white shadow-inner shadow-white/[0.02] sm:p-5`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl min-w-0">
            <div className="mb-4 flex flex-wrap gap-2">
              {safeBadges.map((badge) => (
                <SystemStateBadge key={badge.label} badge={badge} />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:tracking-[0.22em]">{eyebrow ?? copy.eyebrow}</p>
            <h2 id={titleId} className={compact ? "mt-2 text-xl font-semibold tracking-tight" : "mt-3 text-xl font-semibold tracking-tight sm:text-2xl"}>{title}</h2>
            {description ? <p id={descriptionId} className="mt-3 text-sm leading-6 text-slate-300">{description}</p> : null}
            <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-400">{stateRole ?? copy.role}</p>
          </div>
          <div className="w-full shrink-0 rounded-3xl border border-white/10 bg-white/[0.07] p-4 text-sm text-slate-300 shadow-2xl shadow-black/10 lg:w-72">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl font-black text-white">
                {copy.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">State boundary</p>
                <p className="mt-1 text-sm font-semibold text-slate-100">{boundaryLabel}</p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-400">{safetyNote ?? copy.safetyNote}</p>
            <p className="mt-3 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold leading-4 text-cyan-100">
              Alpha preview only · real actions disabled
            </p>
          </div>
        </div>

        {safeChecks.length ? (
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" role="list" aria-label="Preview-only safety checks">
            {safeChecks.map((check) => (
              <Alert key={check} role="listitem" className="rounded-2xl border-white/10 bg-white/10 px-3 py-3 text-slate-200">
                <AlertDescription className="text-xs leading-5 text-slate-200">{check}</AlertDescription>
              </Alert>
            ))}
          </div>
        ) : null}

        {children ? <div className="mt-5">{children}</div> : null}
      </div>
    </Card>
  );
}

export function LoadingSkeletonState({ title = "Preparing source-readiness preview", description = "Rendering skeleton placeholders only. No live sync, provider query, backend fetch, OAuth flow, or Instagram data collection is running." }: { title?: string; description?: string }) {
  return (
    <SystemState
      variant="loading"
      title={title}
      description={description}
      badges={[
        { label: "Alpha preview", tone: "info" },
        { label: "Skeleton placeholder only", tone: "neutral" },
        { label: "No backend fetch", tone: "warning" },
      ]}
      checks={["No backend fetch is implied by this loading state", "No provider query, OAuth, job, export, or database write runs", "No live Instagram data is collected in Alpha"]}
    >
      <div className="grid gap-3 md:grid-cols-3">
        {["Shell placeholder", "Metric placeholders", "Table placeholder"].map((item) => (
          <Card key={item} className="rounded-2xl border-white/10 bg-white/10 py-0 p-4 shadow-none ring-1 ring-white/10">
            <CardContent className="px-0">
              <Skeleton className="h-3 w-24 bg-white/20" />
              <Skeleton className="mt-4 h-8 rounded-2xl bg-white/10" />
              <Skeleton className="mt-3 h-3 w-3/4 bg-white/10" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SystemState>
  );
}