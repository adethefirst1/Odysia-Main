import type { Metadata } from 'next'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import DashboardAuthGuard from '@/components/dashboard/DashboardAuthGuard'

export const metadata: Metadata = {
  title: 'Expert Dashboard - Odysia',
  description: 'Expert dashboard for managing projects, milestones, and earnings',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <DashboardAuthGuard>
        {children}
      </DashboardAuthGuard>
    </AuthProvider>
  )
} 