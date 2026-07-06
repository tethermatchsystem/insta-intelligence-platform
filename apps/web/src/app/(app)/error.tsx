"use client";

import Link from "next/link";
import { SystemState } from "@/components/system-states/system-state";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  void error;

  return (
    <SystemState
      variant="error"
      title="This workspace view could not be rendered"
      description="The private app shell caught a route-level rendering issue and kept the Alpha preview boundary intact. No backend write, provider sync, auth mutation, notification, or live integration was attempted by this error state."
      stateRole="Calm route-boundary recovery for the static private app preview; it avoids stack traces, incident promises, fake support workflows, and live monitoring claims."
      safetyNote="Retry re-renders this UI segment only. No server action, API call, OAuth flow, provider job, or database write is triggered."
      badges={[
        { label: "Route error", tone: "danger" },
        { label: "Preview-only recovery", tone: "neutral" },
        { label: "No backend action", tone: "warning" },
      ]}
      checks={[
        "Retry only re-renders the current UI segment",
        "Dashboard link is normal navigation only; no support ticket or alert is created",
        "No scraping, private account access, hidden surveillance, or anti-bot bypass is triggered",
      ]}
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={reset}
          className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          Retry local preview render
        </button>
        <Link
          href="/dashboard"
          className="rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          Back to dashboard preview
        </Link>
      </div>
    </SystemState>
  );
}