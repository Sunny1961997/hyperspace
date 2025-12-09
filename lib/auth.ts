import { cookies } from "next/headers"

export interface User {
  id: string
  name?: string
  email?: string
  image?: string
  role?: string
}

export interface Session {
  user: User
  token: string
}

// Get the user session from cookies
export async function getSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth-token')
  const userData = cookieStore.get('user-data')

  if (!authToken || !userData) {
    return null
  }

  try {
    const user = JSON.parse(userData.value)
    return {
      user,
      token: authToken.value
    }
  } catch (error) {
    console.error('Error parsing user data:', error)
    return null
  }
}
