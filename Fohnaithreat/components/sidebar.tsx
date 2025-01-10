"use client"

import Link from "next/link"
import Image from "next/image"
import { Home, Bell, Settings, BookOpen, Zap } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from 'next/navigation'

const navItems = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/tips", icon: BookOpen, label: "Security Tips" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export default function Sidebar() {
  const { theme } = useTheme()
  const router = useRouter()

  const handleUpgrade = () => {
    router.push('/upgrade')
  }

  return (
    <div className="w-full md:w-64 bg-card text-card-foreground p-4 border-b md:border-r flex flex-col h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="flex items-center mb-6">
        <Image
          src={theme === 'dark' 
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logowhite-HnxM23xwrUziYX4SzLNxHYNXB2phDK.png"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoblack-fOwDO8Dizt3DjUER6bYa8Gjkcji6Cb.png"
          }
          alt="FohnAI Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="text-2xl font-bold">FohnAI</span>
      </div>
      <nav className="flex-grow overflow-y-auto">
        <ul className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href} 
                className="flex items-center p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <item.icon className="h-5 w-5 md:mr-3" />
                <span className="hidden md:inline">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-4">
        <Button variant="outline" className="w-full mb-4" onClick={handleUpgrade}>
          <Zap className="mr-2 h-4 w-4" />
          Upgrade to Pro
        </Button>
        <Button 
          variant="ghost" 
          className="w-full p-0" 
          onClick={() => router.push('/profile')}
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  )
}

