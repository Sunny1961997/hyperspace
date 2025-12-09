// Environment variables
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080/api/v1"

// API endpoints
export const API_ENDPOINTS = {
  LOGIN: `${API_URL}/users_auth/login`,
  REGISTER: `${API_URL}/users_auth/register`,
  LOGOUT: `${API_URL}/users_auth/logout`,
  RECRUITMENTS: `${API_URL}/recruitments/recruitments_all_active`,
  // Add more endpoints as needed
}
