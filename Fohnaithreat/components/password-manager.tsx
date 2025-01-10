"use client"
import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, Eye, EyeOff, Copy, Check } from 'lucide-react'

export function PasswordManager() {
  const [passwords, setPasswords] = useState([
    { id: 1, site: "example.com", username: "user@example.com", password: "********" },
    { id: 2, site: "secure-site.com", username: "secureuser", password: "********" },
  ])
  const [newSite, setNewSite] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [showPassword, setShowPassword] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<number | null>(null)

  const handleAddPassword = () => {
    if (newSite && newUsername && newPassword) {
      setPasswords([...passwords, { id: Date.now(), site: newSite, username: newUsername, password: newPassword }])
      setNewSite('')
      setNewUsername('')
      setNewPassword('')
    }
  }

  const togglePasswordVisibility = (id: number) => {
    setShowPassword(showPassword === id ? null : id)
  }

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <Card className="card-gradient card-shadow">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Lock className="mr-2" />
          Password Manager
        </CardTitle>
        <CardDescription>Securely store and manage your passwords</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex space-x-2">
            <Input placeholder="Website" value={newSite} onChange={(e) => setNewSite(e.target.value)} />
            <Input placeholder="Username" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
            <Input type="password" placeholder="Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <Button onClick={handleAddPassword}>Add</Button>
          </div>
          <ul className="space-y-2">
            {passwords.map((item) => (
              <li key={item.id} className="flex items-center justify-between p-2 bg-card rounded-lg">
                <div>
                  <p className="font-medium">{item.site}</p>
                  <p className="text-sm text-muted-foreground">{item.username}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => togglePasswordVisibility(item.id)}
                  >
                    {showPassword === item.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Input
                    type={showPassword === item.id ? "text" : "password"}
                    value={item.password}
                    className="w-32"
                    readOnly
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(item.password, item.id)}
                  >
                    {copiedId === item.id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

