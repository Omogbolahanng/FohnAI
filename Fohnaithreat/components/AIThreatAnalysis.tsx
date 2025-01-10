"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, TrendingUp, TrendingDown } from 'lucide-react'

const threats = [
  { id: 1, type: "Phishing Attack", risk: "High", trend: "up", aiInsight: "Increased sophistication in email spoofing detected." },
  { id: 2, type: "Data Breach", risk: "Medium", trend: "down", aiInsight: "Your proactive measures have reduced exposure." },
  { id: 3, type: "Malware", risk: "Low", trend: "up", aiInsight: "New strain targeting IoT devices identified." },
]

export function AIThreatAnalysis() {
  return (
    <Card className="card-gradient card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="mr-2 text-primary" />
          AI Threat Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {threats.map((threat) => (
            <li key={threat.id} className="threat-card p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium text-foreground">{threat.type}</h3>
                  <p className="text-sm text-muted-foreground">{threat.aiInsight}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={threat.risk === "High" ? "destructive" : "secondary"}
                    className={`shadow-sm ${
                      threat.risk === "Medium" 
                        ? "bg-warning text-background" 
                        : threat.risk === "Low" 
                        ? "bg-info text-background"
                        : ""
                    }`}
                  >
                    {threat.risk}
                  </Badge>
                  {threat.trend === "up" ? (
                    <TrendingUp className="text-destructive h-4 w-4" />
                  ) : (
                    <TrendingDown className="text-success h-4 w-4" />
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

