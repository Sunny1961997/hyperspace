"use server"
import { cookies } from "next/headers"
import type {
  ApiResponse,
  ApiUnauthorizedResponse,
  DashboardData,
  RecruitmentData,
  ProtectedData,
} from "@/lib/api-utils"
import { API_ENDPOINTS } from "./constants"

// Helper function to get auth headers
async function getAuthHeaders(): Promise<Record<string, string>> {
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value
  const tokenType = "Bearer"

  if (!token) {
    return {}
  }

  return {
    Authorization: `${tokenType} ${token}`,
  }
}

// Handle unauthorized responses (token expired, invalid token)
// We don't delete cookies here anymore, just return a flag
async function handleUnauthorized(): Promise<ApiUnauthorizedResponse> {
  // We can't use redirect in a try/catch block directly
  // So we'll return a flag indicating we need to redirect
  return { unauthorized: true }
}

// This is a mock API service to simulate fetching data from an external API
export async function fetchDashboardData(): Promise<ApiResponse<DashboardData>> {
  try {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate successful API response
    return {
      data: {
        totalUsers: 1024,
        activeProjects: 32,
        completedTasks: 128,
      },
      error: null,
    }
  } catch (error) {
    console.error("API error:", error)
    return {
      data: null,
      error: "Failed to fetch dashboard data. Please try again later.",
    }
  }
}

// Fetch recruitment data
export async function fetchRecruitments(page = 1, limit = 10): Promise<ApiResponse<RecruitmentData>> {
  try {
    const headers = await getAuthHeaders()
    
    const requestHeaders: HeadersInit = {
      accept: "application/json",
      ...headers,
    }

    const response = await fetch(`${API_ENDPOINTS.RECRUITMENTS}?page=${page}&limit=${limit}`, {
      headers: requestHeaders,
      cache: "no-store",
    })

    // Handle unauthorized response
    if (response.status === 401) {
      return await handleUnauthorized()
    }

    // Handle other error responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        data: null,
        error: errorData.error?.message || `Error: ${response.status} ${response.statusText}`,
      }
    }

    const result = await response.json()

    if (result.result_code !== 200) {
      return {
        data: null,
        error: result.error?.message || "Failed to fetch recruitments",
      }
    }

    return {
      data: result.data,
      error: null,
    }
  } catch (error) {
    console.error("API error:", error)
    return {
      data: null,
      error: "Failed to fetch recruitment data. Please try again later.",
    }
  }
}

// Example of a function that might throw an error for demonstration purposes
export async function fetchDataWithError(): Promise<ApiResponse<any>> {
  try {
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate API error
    throw new Error("API is currently unavailable")
  } catch (error) {
    if (error instanceof Error) {
      // Handle specific error types
      if (error.message.includes("unavailable")) {
        return {
          data: null,
          error: "The service is temporarily unavailable. Please try again later.",
        }
      }

      // Handle unauthorized errors
      if (error.message.includes("unauthorized") || error.message.includes("401")) {
        return await handleUnauthorized()
      }
    }

    // Generic error handling
    return {
      data: null,
      error: "An unexpected error occurred. Please try again later.",
    }
  }
}

// Example of a function that handles token expiration
export async function fetchProtectedData(): Promise<ApiResponse<ProtectedData>> {
  try {
    const headers = await getAuthHeaders()

    if (!Object.keys(headers).length) {
      return {
        data: null,
        error: "No authentication token found. Please log in again.",
      }
    }

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check if token is expired (this would normally be done by the API)
    // Disabled for testing
    // const isTokenExpired = Math.random() > 0.7 // Randomly simulate expired token
    const isTokenExpired = false

    if (isTokenExpired) {
      return await handleUnauthorized()
    }

    // Simulate successful API response
    return {
      data: {
        secretData: "This is protected data that only authenticated users can see.",
      },
      error: null,
    }
  } catch (error) {
    console.error("API error:", error)
    return {
      data: null,
      error: "Failed to fetch protected data. Please try again later.",
    }
  }
}
