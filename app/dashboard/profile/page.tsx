import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileForm } from "@/components/dashboard/profile-form"
import { getSession } from "@/lib/auth"

export default async function ProfilePage() {
  const session = await getSession()

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground">Manage your account settings and profile information.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your profile information and email address.</CardDescription>
        </CardHeader>
        <CardContent>
          <ProfileForm user={session?.user} />
        </CardContent>
      </Card>
    </div>
  )
}
