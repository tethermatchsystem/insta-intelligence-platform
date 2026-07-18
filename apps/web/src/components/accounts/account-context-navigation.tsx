import Link from "next/link";

type AccountContextLink = {
  label: string;
  href: string;
  note: string;
  badge?: string;
};

const accountContextLinks: AccountContextLink[] = [
  { label: "Dossier", href: "/accounts/demo-account", note: "Account command center" },
  { label: "Executive summary", href: "/accounts/demo-account/overview", note: "Health snapshot" },
  { label: "Timeline", href: "/accounts/demo-account/timeline", note: "Audit-safe chronology" },
  { label: "Posts", href: "/accounts/demo-account/posts", note: "Owned media preview" },
  { label: "Comments", href: "/accounts/demo-account/comments", note: "Owned-comment preview" },
  { label: "Followers", href: "/accounts/demo-account/followers", note: "Aggregate audience preview" },
  { label: "Following", href: "/accounts/demo-account/following", note: "Approved relationship map" },
  { label: "Engagement", href: "/accounts/demo-account/engagement", note: "Official metrics preview" },
  { label: "Ads", href: "/accounts/demo-account/ads", note: "Meta ads/library preview" },
  { label: "Likes", href: "/accounts/demo-account/likes", note: "Restricted placeholder", badge: "Restricted" },
  { label: "Recent follows", href: "/accounts/demo-account/recent-follows", note: "Licensed-provider gate", badge: "Licensed gate" },
  { label: "Recent unfollows", href: "/accounts/demo-account/recent-unfollows", note: "Licensed-provider gate", badge: "Licensed gate" },
];

export function AccountContextNavigation({ activeLabel }: { activeLabel: string }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/70" aria-label="Selected account navigation context">
      <div className="mb-3 flex flex-col gap-2 px-1 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Selected account</p>
          <h2 className="mt-1 text-sm font-semibold text-slate-950">Example Brand · @examplebrand</h2>
          <p className="mt-1 max-w-3xl text-xs leading-5 text-slate-500">
            Account-level preview routes stay inside this demo dossier. Restricted identity surfaces remain disabled, authorized-source, or licensed-provider-only placeholders.
          </p>
        </div>
        <Link
          href="/accounts/demo-account"
          className="inline-flex w-fit rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
        >
          Back to dossier
        </Link>
      </div>
      <nav className="flex gap-2 overflow-x-auto" aria-label="Account dossier sections">
        {accountContextLinks.map((link) => {
          const active = link.label === activeLabel;

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              aria-label={`${link.label}: ${link.note}. Static account preview route for Example Brand.`}
              className={[
                "min-w-fit rounded-2xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
                active ? "bg-slate-950 text-white shadow-sm" : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-950",
              ].join(" ")}
            >
              <span className="flex items-center gap-2">
                {link.label}
                {link.badge ? (
                  <span className={active ? "rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-semibold text-white" : "rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-700 ring-1 ring-amber-100"}>
                    {link.badge}
                  </span>
                ) : null}
              </span>
            </Link>
          );
        })}
      </nav>
    </section>
  );
}