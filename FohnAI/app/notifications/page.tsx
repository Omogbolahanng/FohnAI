import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info } from 'lucide-react'

export default function Notifications() {
  const notifications = [
    { id: 1, title: "Password Compromised", description: "Your email password has been found in a data breach.", severity: "high", date: "2023-04-01" },
    { id: 2, title: "Suspicious Login Attempt", description: "An unusual login attempt was detected from a new location.", severity: "medium", date: "2023-03-28" },
    { id: 3, title: "Dark Web Mention", description: "Your phone number was found mentioned on the dark web.", severity: "low", date: "2023-03-25" },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Notifications</h1>
      {notifications.map((notification) => (
        <Card key={notification.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                {notification.severity === "high" && <AlertTriangle className="text-destructive" />}
                {notification.severity === "medium" && <Info className="text-warning" />}
                {notification.severity === "low" && <Info className="text-info" />}
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
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

