import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <SidebarNavigation />
      <div className="min-h-screen lg:pl-80">
        <TopBar />
        <main className="mx-auto w-full max-w-[1600px] px-4 py-5 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
