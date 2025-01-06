"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function Settings() {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    pushNotifications: true,
    darkWebMonitoring: false,
    twoFactorAuth: false,
  })

  const handleSettingChange = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive alerts and notifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-alerts">Email Alerts</Label>
            <Switch
              id="email-alerts"
              checked={settings.emailAlerts}
              onCheckedChange={() => handleSettingChange("emailAlerts")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch
              id="push-notifications"
              checked={settings.pushNotifications}
              onCheckedChange={() => handleSettingChange("pushNotifications")}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Security Features</CardTitle>
          <CardDescription>Enable additional security measures</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="dark-web-monitoring">Dark Web Monitoring (Premium)</Label>
            <Switch
              id="dark-web-monitoring"
              checked={settings.darkWebMonitoring}
              onCheckedChange={() => handleSettingChange("darkWebMonitoring")}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="two-factor-auth">Two-Factor Authentication</Label>
            <Switch
              id="two-factor-auth"
              checked={settings.twoFactorAuth}
              onCheckedChange={() => handleSettingChange("twoFactorAuth")}
            />
          </div>
        </CardContent>
      </Card>
      <Button>Save Changes</Button>
    </div>
  )
}

