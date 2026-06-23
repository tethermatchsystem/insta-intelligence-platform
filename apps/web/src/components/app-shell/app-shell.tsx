import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <SidebarNavigation />
      <div className="min-h-screen lg:pl-80">
        <TopBar />
        <main className="mx-auto w-full max-w-[1600px] px-3 py-4 pb-28 sm:px-6 sm:py-5 lg:px-8 lg:pb-8">
          {children}
        </main>
      </div>
    </div>
  );
}
