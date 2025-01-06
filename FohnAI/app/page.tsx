import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle, CheckCircle, Info, Shield, Lock, Eye, RefreshCcw, Users } from 'lucide-react'
import { AIThreatAnalysis } from "@/components/AIThreatAnalysis"
import { SecurityScoreGame } from "@/components/SecurityScoreGame"
import { DarkWebVisualizer } from "@/components/DarkWebVisualizer"
import { SecurityChatbot } from "@/components/SecurityChatbot"
import { SocialMediaScanner } from "@/components/SocialMediaScanner"

export default function Dashboard() {
  const securityScore = 75
  const threats = [
    { id: 1, type: "Compromised Password", severity: "high", status: "active", details: "Your LinkedIn password was found in a recent data breach." },
    { id: 2, type: "Phishing Attempt", severity: "medium", status: "resolved", details: "A suspicious email claiming to be from your bank was detected and blocked." },
    { id: 3, type: "Dark Web Mention", severity: "low", status: "active", details: "Your email address was mentioned on a dark web forum." },
  ]

  const scoreBreakdown = [
    { category: "Password Strength", score: 80 },
    { category: "Two-Factor Auth", score: 100 },
    { category: "Device Security", score: 60 },
    { category: "Data Encryption", score: 70 },
  ]

  const teamMembers = [
    { id: 1, name: "Alex", image: "/placeholder.svg?height=32&width=32" },
    { id: 2, name: "Sarah", image: "/placeholder.svg?height=32&width=32" },
    { id: 3, name: "Mike", image: "/placeholder.svg?height=32&width=32" },
    { id: 4, name: "Emma", image: "/placeholder.svg?height=32&width=32" },
  ]

  return (
    <div className="space-y-6 p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Security Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="avatar-group">
              {teamMembers.map((member) => (
                <Avatar key={member.id} className="w-8 h-8">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">4 team members</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="shadow-sm">
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="card-gradient card-shadow">
          <CardHeader>
            <CardTitle>Security Score</CardTitle>
            <CardDescription>Your overall security status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="10"
                    cx="64"
                    cy="64"
                    r="58"
                    fill="none"
                  />
                  <circle
                    className="text-primary stroke-current"
                    strokeWidth="10"
                    strokeLinecap="round"
                    cx="64"
                    cy="64"
                    r="58"
                    fill="none"
                    strokeDasharray={`${securityScore * 3.6} 360`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{securityScore}%</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {scoreBreakdown.map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.category}</span>
                    <span className="font-medium">{item.score}%</span>
                  </div>
                  <Progress value={item.score} className="h-1.5" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient card-shadow">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Improve your security with these steps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button className="w-full h-auto py-4 px-4 bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-200">
                <Shield className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Run Security Scan</span>
              </Button>
              <Button className="w-full h-auto py-4 px-4 bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-200">
                <Lock className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Update Passwords</span>
              </Button>
              <Button className="w-full h-auto py-4 px-4 bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-200">
                <Eye className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Check Dark Web</span>
              </Button>
              <Button className="w-full h-auto py-4 px-4 bg-white hover:bg-gray-50 text-gray-900 shadow-sm border border-gray-200">
                <RefreshCcw className="mr-2 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Update Software</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <AIThreatAnalysis />
        <SecurityScoreGame />
        <DarkWebVisualizer />
        <SecurityChatbot />
        <SocialMediaScanner />

        <Card className="card-gradient card-shadow col-span-full">
          <CardHeader>
            <CardTitle>Threat Overview</CardTitle>
            <CardDescription>Recent security issues and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="active">Active Threats</TabsTrigger>
                <TabsTrigger value="resolved">Resolved</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                <ul className="space-y-4">
                  {threats.filter(t => t.status === "active").map((threat) => (
                    <li key={threat.id} className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {threat.severity === "high" && <AlertTriangle className="text-destructive h-5 w-5" />}
                          {threat.severity === "medium" && <Info className="text-yellow-500 h-5 w-5" />}
                          {threat.severity === "low" && <Info className="text-blue-500 h-5 w-5" />}
                          <span className="font-medium">{threat.type}</span>
                        </div>
                        <Badge variant={threat.severity === "high" ? "destructive" : "secondary"} className="mt-2 sm:mt-0">
                          {threat.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{threat.details}</p>
                      <Button variant="link" className="mt-2 h-auto p-0">View Details</Button>
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="resolved">
                <ul className="space-y-4">
                  {threats.filter(t => t.status === "resolved").map((threat) => (
                    <li key={threat.id} className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500 h-5 w-5" />
                          <span className="font-medium">{threat.type}</span>
                        </div>
                        <Badge variant="secondary" className="mt-2 sm:mt-0">resolved</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{threat.details}</p>
                      <Button variant="link" className="mt-2 h-auto p-0">View Details</Button>
                    </li>
                  ))}
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

