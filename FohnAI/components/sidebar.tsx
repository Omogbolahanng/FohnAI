import Link from "next/link"
import Image from "next/image"
import { Home, Bell, Settings, BookOpen, Shield } from 'lucide-react'

const navItems = [
  { href: "/", icon: Home, label: "Dashboard" },
  { href: "/notifications", icon: Bell, label: "Notifications" },
  { href: "/tips", icon: BookOpen, label: "Security Tips" },
  { href: "/settings", icon: Settings, label: "Settings" },
]

export default function Sidebar() {
  return (
    <div className="w-full md:w-64 bg-card text-card-foreground p-4 border-b md:border-r">
      <div className="flex items-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logoblack-fOwDO8Dizt3DjUER6bYa8Gjkcji6Cb.png"
          alt="ThreatGuard Logo"
          width={32}
          height={32}
          className="mr-2"
        />
        <span className="text-2xl font-bold">FohnAI</span>
      </div>
      <nav>
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
    </div>
  )
}

