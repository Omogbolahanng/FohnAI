import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">User Profile</h1>
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder.svg" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>John Doe</CardTitle>
              <p className="text-sm text-muted-foreground">john.doe@example.com</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Account Information</h3>
              <p>Member since: January 1, 2023</p>
              <p>Subscription: Pro Plan</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Security Status</h3>
              <p>Two-factor authentication: Enabled</p>
              <p>Last password change: 30 days ago</p>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

