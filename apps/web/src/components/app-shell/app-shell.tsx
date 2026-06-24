import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="premium-app-bg min-h-screen text-slate-100">
      <SidebarNavigation />
      <div className="premium-content-shell min-h-screen lg:pl-80">
        <TopBar />
        <main className="mx-auto w-full max-w-[1600px] px-3 py-5 pb-28 sm:px-6 sm:py-6 lg:px-8 lg:py-8 lg:pb-10">
          {children}
        </main>
      </div>
    </div>
  );
}
