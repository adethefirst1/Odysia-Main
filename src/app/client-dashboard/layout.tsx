import ClientDashboardLayout from '@/components/client-dashboard/ClientDashboardLayout'

export default function ClientDashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClientDashboardLayout>
      {children}
    </ClientDashboardLayout>
  )
}
