import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Tips() {
  const tips = [
    {
      id: 1,
      title: "Create Strong Passwords",
      description: "Use a combination of uppercase and lowercase letters, numbers, and symbols. Aim for at least 12 characters.",
      category: "Password Security",
    },
    {
      id: 2,
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your accounts by requiring a second form of verification.",
      category: "Account Security",
    },
    {
      id: 3,
      title: "Recognize Phishing Attempts",
      description: "Be cautious of unexpected emails asking for personal information or containing suspicious links.",
      category: "Email Safety",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Cybersecurity Tips</h1>
      {tips.map((tip) => (
        <Card key={tip.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{tip.title}</CardTitle>
              <Badge>{tip.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p>{tip.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

