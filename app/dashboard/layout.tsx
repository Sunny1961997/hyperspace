import type React from "react"
import { redirect } from "next/navigation"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UserNav } from "@/components/dashboard/user-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/dashboard/mobile-nav"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar"
import { getSession } from "@/lib/auth"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen flex-col w-full">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="flex h-16 items-center justify-between w-full px-4 sm:px-6">
            <div className="flex items-center gap-2 md:hidden">
              <MobileNav />
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <div className="hidden md:flex md:items-center md:gap-2">
              <SidebarTrigger />
              <h1 className="text-xl font-bold">Dashboard</h1>
            </div>
            <div className="ml-auto flex items-center gap-4">
              <ThemeToggle />
              <UserNav user={session.user} />
            </div>
          </div>
        </header>
        <div className="flex flex-1 w-full">
          <Sidebar>
            <SidebarHeader>
              <h2 className="text-lg font-semibold">Navigation</h2>
            </SidebarHeader>
            <SidebarContent>
              <DashboardNav />
            </SidebarContent>
          </Sidebar>
          <main className="flex-1 w-full p-4 sm:p-6 md:p-8">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  )
}
