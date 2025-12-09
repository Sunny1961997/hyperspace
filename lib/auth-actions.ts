"use server"

import { cookies } from "next/headers"
import { SignJWT } from "jose"
import { revalidatePath } from "next/cache"
import { API_ENDPOINTS } from "@/lib/constants"

// Mock user database for demonstration
const USERS = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    password: "password123", // In a real app, this would be hashed
  },
]

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  email: string
  password: string
}

interface ProfileData {
  name: string
  email: string
}

interface SettingsData {
  emailNotifications: boolean
  marketingEmails: boolean
  activityDigest: boolean
}

export async function login(data: LoginData) {
  try {
    const response = await fetch(API_ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
      cache: 'no-store',
      credentials: 'include',
    })

    console.log("Login response:", response)

    const result = await response.json()

    // Handle API error responses
    if (!response.ok || result.result_code !== 200) {
      console.error("Login failed:", result)
      return {
        success: false,
        error: result.error?.message || result.error?.title || "Invalid credentials",
      }
    }

    const authToken = result.data?.access_token
    const tokenType = result.data?.token_type
    const userData = result.data?.user

    if (!authToken) {
      console.error("No token returned from API:", result)
      return { success: false, error: "Authentication failed" }
    }

    const cookieStore = await cookies()

    // Set all cookies
    cookieStore.set('auth-token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    if (userData) {
      cookieStore.set('user-data', JSON.stringify(userData), {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    }

    if (tokenType) {
      cookieStore.set('token-type', tokenType, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    }

    // Revalidate the dashboard path
    revalidatePath('/dashboard')

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return {
      success: false,
      error: "Failed to connect to authentication service. Please try again later.",
    }
  }
}

export async function register(data: RegisterData) {
  // Simulate API request delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // In a real app, you would create a new user in your database
    // and hash the password before storing it

    // Check if user already exists
    const existingUser = USERS.find((u) => u.email === data.email)
    if (existingUser) {
      return { success: false, error: "User already exists" }
    }

    // In this mock example, we're not actually adding the user to our array
    // In a real app, you would save the user to your database

    return { success: true }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, error: "Something went wrong" }
  }
}

export async function logout() {
  const cookieStore = await cookies()
  
  // Clear all auth-related cookies
  cookieStore.delete('auth-token')
  cookieStore.delete('user-data')
  cookieStore.delete('token-type')
  
  // Revalidate the session
  revalidatePath('/dashboard')
  
  return { success: true }
}

export async function checkSession() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("auth-token")?.value
    const userData = cookieStore.get("user-data")?.value

    if (!token) {
      return { user: null }
    }

    // If we have user data stored in a cookie, use it
    if (userData) {
      try {
        const user = JSON.parse(userData)
        return {
          user: {
            id: user.email || "unknown",
            name: user.full_name || user.email,
            email: user.email,
            role: user.role,
          },
        }
      } catch (e) {
        console.error("Error parsing user data:", e)
      }
    }

    // Fallback to a basic session if we can't parse user data
    return {
      user: {
        id: "authenticated",
        name: "Authenticated User",
        email: "user@example.com",
      },
    }
  } catch (error) {
    console.error("Session check error:", error)
    return { user: null }
  }
}

export async function updateProfile(data: ProfileData) {
  // Simulate API request delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // In a real app, you would update the user's profile in your database
    revalidatePath("/dashboard/profile")
    return { success: true }
  } catch (error) {
    console.error("Profile update error:", error)
    return { success: false, error: "Something went wrong" }
  }
}

export async function updateSettings(data: SettingsData) {
  // Simulate API request delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  try {
    // In a real app, you would update the user's settings in your database
    revalidatePath("/dashboard/settings")
    return { success: true }
  } catch (error) {
    console.error("Settings update error:", error)
    return { success: false, error: "Something went wrong" }
  }
}

async function createToken(payload: any) {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key")

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret)

  return token
}
