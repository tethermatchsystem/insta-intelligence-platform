import { type ReactNode } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export type SystemStateVariant = "empty" | "loading" | "error" | "restricted" | "placeholder";

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
};

const variantCopy: Record<SystemStateVariant, { eyebrow: string; accent: string; icon: string }> = {
  empty: {
    eyebrow: "Empty state",
    accent: "from-slate-950 via-slate-900 to-indigo-950",
    icon: "∅",
  },
  loading: {
    eyebrow: "Loading state",
    accent: "from-slate-950 via-slate-900 to-blue-950",
    icon: "↻",
  },
  error: {
    eyebrow: "Error state",
    accent: "from-rose-950 via-slate-950 to-slate-900",
    icon: "!",
  },
  restricted: {
    eyebrow: "Restricted state",
    accent: "from-amber-950 via-slate-950 to-slate-900",
    icon: "⊘",
  },
  placeholder: {
    eyebrow: "Placeholder-only state",
    accent: "from-slate-950 via-slate-900 to-cyan-950",
    icon: "◇",
  },
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
    <Badge variant="outline" className={cn("h-6 rounded-full border-transparent px-3 font-semibold ring-1", badgeClasses(badge.tone))}>
      {badge.label}
    </Badge>
  );
}

export function SystemState({ variant = "placeholder", eyebrow, title, description, badges = [], checks = [], children, compact = false }: SystemStateProps) {
  const copy = variantCopy[variant];
  const safeBadges = badges.length
    ? badges
    : [
        { label: "Mock-only", tone: "neutral" as const },
        { label: "No live integration", tone: "warning" as const },
      ];

  return (
    <Card className={cn("overflow-hidden rounded-3xl border-slate-200 bg-white/95 py-0 shadow-sm shadow-slate-200/70", compact ? "p-3" : "p-4") }>
      <div className={`rounded-3xl bg-gradient-to-br ${copy.accent} p-5 text-white`}>
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2">
              {safeBadges.map((badge) => (
                <SystemStateBadge key={badge.label} badge={badge} />
              ))}
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">{eyebrow ?? copy.eyebrow}</p>
            <h2 className={compact ? "mt-2 text-xl font-semibold tracking-tight" : "mt-3 text-2xl font-semibold tracking-tight"}>{title}</h2>
            {description ? <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p> : null}
          </div>
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl font-black text-white shadow-2xl shadow-black/10">
            {copy.icon}
          </div>
        </div>

        {checks.length ? (
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {checks.map((check) => (
              <Alert key={check} className="rounded-2xl border-white/10 bg-white/10 px-3 py-3 text-slate-200">
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

export function LoadingSkeletonState({ title = "Preparing enterprise workspace", description = "Loading mock-safe analytics surfaces without opening live provider, auth, or backend connections." }: { title?: string; description?: string }) {
  return (
    <SystemState
      variant="loading"
      title={title}
      description={description}
      badges={[
        { label: "Static shell", tone: "info" },
        { label: "No live backend", tone: "warning" },
        { label: "Official-first", tone: "success" },
      ]}
      checks={["Rendering route segment", "Keeping provider writes disabled", "Preserving compliance-safe data boundaries"]}
    >
      <div className="grid gap-3 md:grid-cols-3">
        {["Header", "KPI cards", "Enterprise table"].map((item) => (
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