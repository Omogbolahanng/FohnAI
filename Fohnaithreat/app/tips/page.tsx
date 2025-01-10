import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb } from 'lucide-react'

const tips = [
  { id: 1, title: "Use Strong Passwords", description: "Create unique, complex passwords for each account.", category: "Password Security" },
  { id: 2, title: "Enable Two-Factor Authentication", description: "Add an extra layer of security to your accounts.", category: "Account Security" },
  { id: 3, title: "Keep Software Updated", description: "Regularly update your operating system and applications.", category: "Device Security" },
]

export default function TipsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Security Tips</h1>
      {tips.map((tip) => (
        <Card key={tip.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="text-yellow-500" />
                <span>{tip.title}</span>
              </CardTitle>
              <Badge>{tip.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>{tip.description}</p>
            <Button variant="link" className="mt-2 p-0">Learn More</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

