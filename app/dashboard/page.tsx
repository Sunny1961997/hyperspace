import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { getSession } from "@/lib/auth"
import { fetchDashboardData, fetchRecruitments } from "@/lib/api"
import { isSuccessResponse, isErrorResponse, isUnauthorizedResponse } from "@/lib/api-utils"
import { RecruitmentTable } from "@/components/dashboard/recruitment-table"
import ClientRecruitmentTable from "@/components/dashboard/client-recruitment-table"

export default async function DashboardPage() {
  const session = await getSession()
  const dashboardResult = await fetchDashboardData()

  const dashboardData = isSuccessResponse(dashboardResult) ? dashboardResult.data : null
  const dashboardError = isErrorResponse(dashboardResult) ? dashboardResult.error : null

  // Fetch initial recruitments with default values
  const recruitmentResult = await fetchRecruitments(1, 10)

  if (isUnauthorizedResponse(recruitmentResult)) {
    redirect("/api/auth/logout?error=session_expired")
  }

  const recruitmentData = isSuccessResponse(recruitmentResult) ? recruitmentResult.data : null
  const recruitmentError = isErrorResponse(recruitmentResult) ? recruitmentResult.error : null

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {session?.user?.name || "User"}!
          {session?.user?.role && (
            <span className="ml-2 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {session.user.role}
            </span>
          )}
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recruitments">Recruitments</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.totalUsers || "N/A"}</div>
                <p className="text-xs text-muted-foreground">+20% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.activeProjects || "N/A"}</div>
                <p className="text-xs text-muted-foreground">+10% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{dashboardData?.completedTasks || "N/A"}</div>
                <p className="text-xs text-muted-foreground">+35% from last month</p>
              </CardContent>
            </Card>
          </div>

          {dashboardError && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{dashboardError}</AlertDescription>
            </Alert>
          )}
        </TabsContent>

        <TabsContent value="recruitments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Recruitments</CardTitle>
              <CardDescription>View all currently active recruitment positions.</CardDescription>
            </CardHeader>
            <CardContent>
              {recruitmentError ? (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{recruitmentError}</AlertDescription>
                </Alert>
              ) : (
                <ClientRecruitmentTable
                  recruitments={recruitmentData?.recruitments || []}
                />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
