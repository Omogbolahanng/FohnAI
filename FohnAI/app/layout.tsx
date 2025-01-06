import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "@/components/sidebar"

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "FohnAI - Personal Threat Monitoring",
  description: "Protect your digital presence with FohnAI's real-time threat monitoring",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-4 md:p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

