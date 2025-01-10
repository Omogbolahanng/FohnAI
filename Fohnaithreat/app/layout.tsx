"use client"
import { useState, useEffect } from "react"
import { Poppins } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
// import { AuthProvider, useAuth } from "@/components/auth-provider" //Removed import

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

function AppContent({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  // const { loading } = useAuth() //Removed useAuth

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-64 flex-shrink-0`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="md:hidden p-4 flex justify-between items-center border-b">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Sidebar"
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold">FohnAI Dashboard</h1>
          <ThemeToggle />
        </div>
        <main className="flex-1 overflow-y-auto">
          <div className="hidden md:flex justify-between items-center p-4 border-b">
            <h1 className="text-2xl font-bold">FohnAI Dashboard</h1>
            <ThemeToggle />
          </div>
          <div className="p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider>
          <AppContent>{children}</AppContent>
        </ThemeProvider>
      </body>
    </html>
  )
}

