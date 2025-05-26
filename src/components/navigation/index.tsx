import { SidebarTrigger, SidebarProvider, SidebarInset } from "../ui/sidebar"
import { AppSidebar } from "./AppSidebar"

const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 shrink-0 items-center gap-4 border-b border-border px-8 bg-card/50 backdrop-blur-sm">
          <SidebarTrigger className="-ml-1 w-8 h-8 hover:bg-muted/50 rounded-lg transition-colors" />
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground tracking-tight">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back to your workspace</p>
          </div>
        </header>
        <main className="flex-1 p-8 bg-background min-h-screen">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export { Navigation }
