"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

// Server action to handle logout/session expiration
export async function handleSessionExpired() {
  const cookieStore = await cookies()
  cookieStore.delete("auth-token")
  cookieStore.delete("user-data")
  cookieStore.delete("token-type")

  redirect("/login?error=session_expired")
}
