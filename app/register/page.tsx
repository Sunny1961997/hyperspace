import Link from "next/link"
import { RegisterForm } from "@/components/auth/register-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RegisterPage() {
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
          </div>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <p className="text-muted-foreground">Create a new account to get started</p>
          </div>
          <RegisterForm />
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
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
