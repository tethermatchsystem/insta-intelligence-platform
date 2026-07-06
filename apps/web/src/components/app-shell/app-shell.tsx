import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="premium-app-bg min-h-screen text-slate-100">
      <a href="#private-app-content" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:max-w-[calc(100vw-1.5rem)] focus:rounded-2xl focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:leading-5 focus:text-slate-950 focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-100 sm:focus:left-4 sm:focus:top-4">
        Skip to static Alpha app preview content
      </a>
      <SidebarNavigation />
      <div className="premium-content-shell min-h-screen lg:pl-80">
        <TopBar />
        <main id="private-app-content" tabIndex={-1} aria-label="Static Alpha private app preview content" className="mx-auto w-full max-w-[1600px] scroll-mt-28 px-3 py-4 pb-32 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 sm:px-6 sm:py-6 lg:px-8 lg:py-8 lg:pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}
