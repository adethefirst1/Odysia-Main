import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { AuthProvider } from '@/lib/contexts/AuthContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import ClientDashboardAuthGuard from '@/components/client-dashboard/ClientDashboardAuthGuard'
import ClientDashboardLayout from '@/components/client-dashboard/ClientDashboardLayout'

export default function ClientDashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ErrorBoundary>
          <ClientDashboardAuthGuard>
            <ClientDashboardLayout>
              {children}
            </ClientDashboardLayout>
          </ClientDashboardAuthGuard>
        </ErrorBoundary>
      </AuthProvider>
    </ThemeProvider>
  )
}
