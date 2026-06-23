"use client";

import { SystemState } from "@/components/system-states/system-state";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <SystemState
      variant="error"
      title="This workspace view could not be rendered"
      description="The private app shell caught a route-level rendering issue. No backend write, provider sync, auth mutation, or live integration was attempted by this error state."
      badges={[
        { label: "Route error", tone: "danger" },
        { label: "No live provider action", tone: "warning" },
        { label: "Mock-safe boundary", tone: "neutral" },
      ]}
      checks={[
        "Retry only re-renders the current UI segment",
        "No scraping, private access, or hidden surveillance is triggered",
        error.digest ? `Digest: ${error.digest}` : "Digest unavailable in this preview",
      ]}
    >
      <button
        type="button"
        onClick={reset}
        className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-slate-100"
      >
        Retry rendering
      </button>
    </SystemState>
  );
}