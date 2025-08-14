import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import DashboardAuthGuard from '@/components/dashboard/DashboardAuthGuard'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Expert Dashboard - Odysia',
  description: 'Expert dashboard for managing projects, milestones, and earnings',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300 bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text antialiased`}>
        <ThemeProvider>
          <AuthProvider>
            <DashboardAuthGuard>
              {children}
            </DashboardAuthGuard>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 