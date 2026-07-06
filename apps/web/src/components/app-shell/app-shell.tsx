import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="premium-app-bg min-h-screen text-slate-100">
      <a href="#private-app-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-2xl focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow-2xl">
        Skip to static Alpha app preview content
      </a>
      <SidebarNavigation />
      <div className="premium-content-shell min-h-screen lg:pl-80">
        <TopBar />
        <main id="private-app-content" className="mx-auto w-full max-w-[1600px] px-3 py-5 pb-28 sm:px-6 sm:py-6 lg:px-8 lg:py-8 lg:pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}
