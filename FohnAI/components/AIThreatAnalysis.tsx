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
            <li key={threat.id} className="p-4 rounded-lg bg-white border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{threat.type}</h3>
                  <p className="text-sm text-muted-foreground">{threat.aiInsight}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={threat.risk === "High" ? "destructive" : threat.risk === "Medium" ? "secondary" : "outline"}
                    className="shadow-sm"
                  >
                    {threat.risk}
                  </Badge>
                  {threat.trend === "up" ? (
                    <TrendingUp className="text-destructive h-4 w-4" />
                  ) : (
                    <TrendingDown className="text-green-500 h-4 w-4" />
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

