import Link from "next/link"
import { LoginForm } from "@/components/auth/login-form"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="flex h-16 items-center justify-between w-full px-4 sm:px-6">
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
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 w-full">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>

          <LoginForm />
          
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="flex flex-col items-center justify-center gap-4 w-full px-4 sm:px-6">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next.js Boilerplate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
