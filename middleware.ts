import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth-token")?.value
  const pathname = request.nextUrl.pathname

  // Public paths that don't require authentication
  const publicPaths = ['/login', '/register', '/']
  const isPublicPath = publicPaths.includes(pathname)

  // If there's no auth token and the path isn't public, redirect to login
  if (!authToken && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If there's an auth token and the user is trying to access login/register, redirect to dashboard
  if (authToken && isPublicPath && pathname !== '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/((?!api|_next|static|public|.*\\..*).*)",
  ],
}
