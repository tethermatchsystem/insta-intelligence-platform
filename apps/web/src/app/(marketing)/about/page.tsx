import type { Metadata } from "next";
import Link from "next/link";

import { DashboardPageScaffold } from "@/components/dashboards/page-scaffold";

export const metadata: Metadata = {
  title: "About the Alpha | Insta Intelligence Platform",
  description:
    "About the private beta Alpha preview for official-source Instagram intelligence. Requires official source connection and provider approval where applicable; no live Instagram data is collected in Alpha.",
};

const marketingLinks = [
  { href: "/", label: "Alpha home" },
  { href: "/pricing", label: "Open pricing preview" },
  { href: "/about", label: "About the Alpha" },
  { href: "/contact", label: "Contact preview" },
];

function MarketingLinkRow() {
  return (
    <nav aria-label="Public marketing preview links" className="rounded-3xl border border-slate-200 bg-white/95 p-4 text-sm shadow-sm shadow-slate-200/70">
      <div className="flex flex-wrap gap-3">
        {marketingLinks.map((link) => (
          <Link key={link.href} href={link.href} className="rounded-full border border-slate-200 px-3 py-2 font-medium text-slate-700 transition hover:bg-slate-50">
            {link.label}
          </Link>
        ))}
      </div>
      <p className="mt-3 text-xs font-medium text-slate-500">No live Instagram data is collected in Alpha · No contact form is submitted in Alpha · Billing is preview-only · Requires official source connection · Requires provider approval</p>
    </nav>
  );
}

export default function Page() {
  return (
    <>
      <DashboardPageScaffold
        title="About Insta Intelligence"
        description="Alpha preview for a private beta official-source intelligence platform. Public positioning is limited to approved Instagram source strategies, requires official source connection, requires provider approval where applicable, and no live Instagram data is collected in Alpha."
        gated={false}
        gateStatus="official_safe"
      />
      <MarketingLinkRow />
    </>
  );
}