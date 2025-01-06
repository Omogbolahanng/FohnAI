import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Share2, CheckCircle, XCircle } from 'lucide-react'

const socialAccounts = [
  { id: 1, name: 'Facebook', securityScore: 85, issues: ['Weak password', 'Public email'] },
  { id: 2, name: 'Twitter', securityScore: 92, issues: ['2FA not enabled'] },
  { id: 3, name: 'LinkedIn', securityScore: 78, issues: ['Old posts with sensitive info', 'Weak password'] },
]

export function SocialMediaScanner() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Share2 className="mr-2" />
          Social Media Security Scan
        </CardTitle>
      </CardHeader>
      <CardContent>
        {socialAccounts.map((account) => (
          <div key={account.id} className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{account.name}</span>
              <span>{account.securityScore}%</span>
            </div>
            <Progress value={account.securityScore} className="w-full mb-2" />
            <div className="text-sm">
              {account.issues.map((issue, index) => (
                <div key={index} className="flex items-center">
                  <XCircle className="h-4 w-4 text-destructive mr-1" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button className="w-full mt-4">Rescan Social Media</Button>
      </CardContent>
    </Card>
  )
}

