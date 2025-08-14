'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { 
  HomeIcon,
  FolderIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  PlusIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline'
import Logo from '@/components/Logo'
import ThemeToggle from '@/components/ThemeToggle'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { useRouter, usePathname } from 'next/navigation'

interface ClientDashboardLayoutProps {
  children: React.ReactNode
  activeSection?: string
}

const navigationItems = [
  { id: 'overview', label: 'Overview', icon: HomeIcon, href: '/client-dashboard' },
  { id: 'projects', label: 'Projects', icon: FolderIcon, href: '/client-dashboard/projects' },
  { id: 'proposals', label: 'Proposals', icon: ChatBubbleLeftRightIcon, href: '/client-dashboard/proposals' },
  { id: 'messages', label: 'Messages', icon: ChatBubbleLeftRightIcon, href: '/client-dashboard/messages' },
  { id: 'payments', label: 'Payments', icon: CreditCardIcon, href: '/client-dashboard/payments' },
  { id: 'support', label: 'Support', icon: QuestionMarkCircleIcon, href: '/client-dashboard/support' },
]

export default function ClientDashboardLayout({ children, activeSection = 'overview' }: ClientDashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [notifications] = useState(3) // Mock notification count
  const [showNotifications, setShowNotifications] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const notificationsRef = useRef<HTMLDivElement>(null)

  // Determine active section based on current pathname
  const getActiveSection = () => {
    if (pathname === '/client-dashboard') return 'overview'
    if (pathname.startsWith('/client-dashboard/projects')) return 'projects'
    if (pathname.startsWith('/client-dashboard/proposals')) return 'proposals'
    if (pathname.startsWith('/client-dashboard/messages')) return 'messages'
    if (pathname.startsWith('/client-dashboard/payments')) return 'payments'
    if (pathname.startsWith('/client-dashboard/support')) return 'support'
    return 'overview'
  }

  const currentActiveSection = getActiveSection()

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Mock notifications
  const notificationList = [
    { id: 1, message: 'New proposal received for E-commerce project', time: '2 hours ago', unread: true },
    { id: 2, message: 'Payment processed for Mobile App project', time: '1 day ago', unread: true },
    { id: 3, message: 'Project milestone completed', time: '2 days ago', unread: false }
  ]

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 flex">
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <Logo
              width={120}
              height={48}
              className="h-8 w-auto"
              alt="Odysia Logo"
            />
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = currentActiveSection === item.id
              
              return (
                <motion.div
                  key={item.id}
                  variants={staggerItem}
                  whileHover={{ x: 4 }}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors relative ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border-l-4 border-transparent'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Link>
                </motion.div>
              )
            })}
          </nav>

          {/* Bottom Section */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Odysia Client Dashboard
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="lg:pl-64 flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 z-20">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
            {/* Left Side - Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 sm:p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7 text-gray-600 dark:text-gray-400" />
            </button>

            {/* Center - Dashboard Title (hidden on mobile) */}
            <div className="hidden md:flex items-center">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Client Dashboard</h1>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Create New Project Button */}
              <motion.button
                className="bg-blue-600 dark:bg-blue-500 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2 mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="hidden sm:inline text-sm">New Project</span>
              </motion.button>

              {/* Notifications */}
              <div className="relative" ref={notificationsRef}>
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 dark:text-gray-400" />
                  {notifications > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications}
                    </span>
                  )}
                </button>

                {/* Notifications Dropdown */}
                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                    >
                      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h3>
                      </div>
                      <div className="max-h-64 overflow-y-auto">
                        {notificationList.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-4 border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                              notification.unread ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`w-2 h-2 rounded-full mt-2 ${
                                notification.unread ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`} />
                              <div className="flex-1">
                                <p className="text-sm text-gray-900 dark:text-white">
                                  {notification.message}
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {notification.time}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                        <button className="w-full text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                          View All Notifications
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-gray-900">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="h-full"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
