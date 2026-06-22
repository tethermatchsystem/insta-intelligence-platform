import { SidebarNavigation } from "@/components/navigation/sidebar-navigation";
import { TopBar } from "@/components/navigation/top-bar";
export function AppShell({ children }: { children: React.ReactNode }) { return <div className="min-h-screen bg-slate-50 text-slate-950"><SidebarNavigation /><div className="lg:pl-72"><TopBar /><main className="px-6 py-6">{children}</main></div></div>; }
