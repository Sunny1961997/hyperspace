// Type definitions for API responses
export interface ApiSuccessResponse<T> {
    data: T
    error: null
    unauthorized?: false
  }
  
  export interface ApiErrorResponse {
    data: null
    error: string
    unauthorized?: false
  }
  
  export interface ApiUnauthorizedResponse {
    unauthorized: true
  }
  
  export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse | ApiUnauthorizedResponse
  
  // Type guard functions
  export function isSuccessResponse<T>(response: ApiResponse<T>): response is ApiSuccessResponse<T> {
    return "data" in response && response.data !== null
  }
  
  export function isErrorResponse<T>(response: ApiResponse<T>): response is ApiErrorResponse {
    return "error" in response && response.error !== null
  }
  
  export function isUnauthorizedResponse<T>(response: ApiResponse<T>): response is ApiUnauthorizedResponse {
    return "unauthorized" in response && response.unauthorized === true
  }
  
  // Data interfaces
  export interface DashboardData {
    totalUsers: number
    activeProjects: number
    completedTasks: number
  }
  
  export interface Recruitment {
    team_name: string
    position_name: string
    job_description: string
    start_date: string
    end_date: string
    active: boolean
    rec_id: string
  }
  
  export interface RecruitmentData {
    recruitments: Recruitment[]
  }
  
  export interface ProtectedData {
    secretData: string
  }
  