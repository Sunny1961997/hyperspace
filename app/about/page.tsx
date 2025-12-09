import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 md:px-8">
          <div className="flex items-center gap-2">
            <Link href="/">
              <h1 className="text-xl font-bold">Next.js Boilerplate</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <nav className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="outline" className="hidden sm:inline-flex">
                  Login
                </Button>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <span className="sr-only">Login</span>
                  <span>In</span>
                </Button>
              </Link>
              <Link href="/register">
                <Button className="hidden sm:inline-flex">Register</Button>
                <Button size="icon" className="sm:hidden">
                  <span className="sr-only">Register</span>
                  <span>Up</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mx-auto max-w-3xl space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About This Boilerplate</h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                This Next.js boilerplate provides a solid foundation for building modern web applications with
                authentication, theme switching, and API integration.
              </p>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Features</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authentication with protected routes</li>
                  <li>Login and registration pages</li>
                  <li>External API integration with error handling</li>
                  <li>Token expiration and refresh mechanisms</li>
                  <li>Dark mode and light mode support</li>
                  <li>Secure logout system</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Technologies Used</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Next.js 14+ with App Router</li>
                  <li>React Server Components</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Shadcn UI Components</li>
                  <li>JWT Authentication</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="flex flex-col items-center justify-center gap-4 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next.js Boilerplate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
