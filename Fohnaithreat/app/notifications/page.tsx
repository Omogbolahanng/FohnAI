import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, Info, AlertTriangle } from 'lucide-react'

const notifications = [
  { id: 1, title: "New security threat detected", description: "A potential phishing attempt was blocked.", severity: "high", date: "2023-05-15" },
  { id: 2, title: "Password changed successfully", description: "Your account password was updated.", severity: "low", date: "2023-05-14" },
  { id: 3, title: "Unusual login attempt", description: "An login attempt from an unknown device was detected.", severity: "medium", date: "2023-05-13" },
]

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      {notifications.map((notification) => (
        <Card key={notification.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {notification.severity === "high" && <AlertTriangle className="text-destructive" />}
                {notification.severity === "medium" && <Info className="text-yellow-500" />}
                {notification.severity === "low" && <Bell className="text-blue-500" />}
                <span>{notification.title}</span>
              </CardTitle>
              <Badge variant={notification.severity === "high" ? "destructive" : "secondary"}>
                {notification.severity}
              </Badge>
            </div>
            <CardDescription>{notification.date}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{notification.description}</p>
            <Button variant="link" className="mt-2 p-0">View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

