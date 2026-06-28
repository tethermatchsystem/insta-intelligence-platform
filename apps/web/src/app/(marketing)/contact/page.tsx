import type { Metadata } from "next";
import Link from "next/link";

import { DashboardPageScaffold } from "@/components/dashboards/page-scaffold";

export const metadata: Metadata = {
  title: "Request access preview | Insta Intelligence Platform",
  description:
    "Private beta request access preview for official-source Instagram intelligence. No contact form is submitted in Alpha, no backend/provider/billing action runs, and access requires official source connection plus provider approval.",
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
        title="Request access preview"
        description="Private beta contact placeholder for official-source intelligence buyers. No contact form is submitted in Alpha, no backend action runs, no provider connection is opened, and access review requires official source connection plus provider approval where applicable."
        gated={false}
        gateStatus="official_safe"
      />
      <MarketingLinkRow />
    </>
  );
}