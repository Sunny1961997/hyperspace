import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  // Get the error parameter from the URL if it exists
  const { searchParams } = new URL(request.url)
  const error = searchParams.get("error")

  // Delete the cookies
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
  cookieStore.delete("user-data")
  cookieStore.delete("token-type")

  // Redirect to login page with error parameter if it exists
  const redirectUrl = error ? `/login?error=${error}` : "/login"
  return NextResponse.redirect(new URL(redirectUrl, request.url))
}
