"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Info, Shield, Lock, Eye, RefreshCcw, Users, User } from 'lucide-react'
import { AIThreatAnalysis } from "@/components/AIThreatAnalysis"
import { SecurityScoreGame } from "@/components/SecurityScoreGame"
import { DarkWebVisualizer } from "@/components/DarkWebVisualizer"
import { SecurityChatbot } from "@/components/SecurityChatbot"
import { SocialMediaScanner } from "@/components/SocialMediaScanner"
import { PasswordManager } from "@/components/password-manager"

export default function Dashboard() {
  const [securityScore, setSecurityScore] = useState(75)
  const [threats, setThreats] = useState([
    { id: 1, type: "Compromised Password", severity: "high", status: "active", details: "Your LinkedIn password was found in a recent data breach." },
    { id: 2, type: "Phishing Attempt", severity: "medium", status: "resolved", details: "A suspicious email claiming to be from your bank was detected and blocked." },
    { id: 3, type: "Dark Web Mention", severity: "low", status: "active", details: "Your email address was mentioned on a dark web forum." },
  ])

  const scoreBreakdown = [
    { category: "Password Strength", score: 80 },
    { category: "Two-Factor Auth", score: 100 },
    { category: "Device Security", score: 60 },
    { category: "Data Encryption", score: 70 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setSecurityScore(prevScore => {
        const newScore = prevScore + Math.floor(Math.random() * 5) - 2
        return Math.max(0, Math.min(100, newScore))
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleRefresh = () => {
    setSecurityScore(prevScore => {
      const newScore = prevScore + Math.floor(Math.random() * 10) - 5
      return Math.max(0, Math.min(100, newScore))
    })
    setThreats(prevThreats => {
      return prevThreats.map(threat => ({
        ...threat,
        status: Math.random() > 0.5 ? "active" : "resolved"
      }))
    })
  }

  const handleQuickAction = (action: string) => {
    console.log(`Performing quick action: ${action}`)
    // Implement actual functionality for each action
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={handleRefresh} variant="outline" size="sm" className="shadow-sm dark:border-primary/20 dark:bg-secondary/50">
          <RefreshCcw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Card className="card-gradient card-shadow">
          <CardHeader>
            <CardTitle className="text-foreground">Security Score</CardTitle>
            <CardDescription className="text-muted-foreground">Your overall security status</CardDescription>
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
                  <span className="text-2xl font-bold text-foreground">{securityScore}%</span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {scoreBreakdown.map((item) => (
                <div key={item.category} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{item.category}</span>
                    <span className="font-medium text-foreground">{item.score}%</span>
                  </div>
                  <Progress 
                    value={item.score} 
                    className="h-1.5 dark:bg-muted" 
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="card-gradient card-shadow">
          <CardHeader>
            <CardTitle className="text-foreground">Quick Actions</CardTitle>
            <CardDescription className="text-muted-foreground">Improve your security with these steps</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Shield, label: "Run Security Scan" },
                { icon: Lock, label: "Update Passwords" },
                { icon: Eye, label: "Check Dark Web" },
                { icon: RefreshCcw, label: "Update Software" },
              ].map((action) => (
                <Button 
                  key={action.label}
                  className="w-full h-auto py-4 px-4 bg-secondary hover:bg-secondary/80 text-secondary-foreground dark:bg-secondary/30 dark:hover:bg-secondary/50"
                  onClick={() => handleQuickAction(action.label)}
                >
                  <action.icon className="mr-2 h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <AIThreatAnalysis />
        <SecurityScoreGame />
        <DarkWebVisualizer />
        <PasswordManager />
        <SecurityChatbot />
        <SocialMediaScanner />

        <Card className="card-gradient card-shadow col-span-full">
          <CardHeader>
            <CardTitle className="text-foreground">Threat Overview</CardTitle>
            <CardDescription className="text-muted-foreground">Recent security issues and their status</CardDescription>
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
                    <li key={threat.id} className="p-4 rounded-lg bg-card border border-border shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          {threat.severity === "high" && <AlertTriangle className="text-destructive h-5 w-5" />}
                          {threat.severity === "medium" && <Info className="text-yellow-500 h-5 w-5" />}
                          {threat.severity === "low" && <Info className="text-blue-500 h-5 w-5" />}
                          <span className="font-medium text-foreground">{threat.type}</span>
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
                    <li key={threat.id} className="p-4 rounded-lg bg-card border border-border shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="text-green-500 h-5 w-5" />
                          <span className="font-medium text-foreground">{threat.type}</span>
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

