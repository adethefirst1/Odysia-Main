import DashboardLayout from '@/components/dashboard/DashboardLayout'
import Messages from '@/components/dashboard/Messages'

export default function MessagesPage() {
  return (
    <DashboardLayout activeSection="messages">
      <Messages />
    </DashboardLayout>
  )
} 