import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";
export const metadata: Metadata = { title: "Insta Intelligence Platform", description: "Official-first Instagram intelligence platform." };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Providers>{children}</Providers></body></html>; }
