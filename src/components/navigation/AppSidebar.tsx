import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { NAVIGATION } from "@/constants/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar"

const AppSidebar = () => {
  const location = useLocation()

  return (
    <Sidebar collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup className="gap-10">
          <SidebarGroupLabel className="text-2xl">Logo</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-8">
              {NAVIGATION.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-lg px-3 py-6 text-[18px] font-medium transition-all duration-200",
                        location.pathname === item.href
                          ? "bg-sidebar-accent text-sidebar-accent-foreground"
                          : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground",
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export { AppSidebar }
