'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FolderIcon,
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  PlusIcon,
  EyeIcon,
  UserIcon,
  CalendarIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function ClientDashboardPage() {
  const [clientName] = useState("Sarah Johnson")
  const [lastLogin] = useState("2 hours ago")

  const summaryStats = [
    {
      title: "Total Projects",
      value: 12,
      change: "+2",
      changeType: "positive",
      icon: FolderIcon,
      color: "bg-blue-500",
      description: "All time projects"
    },
    {
      title: "In Progress",
      value: 4,
      change: "+1",
      changeType: "positive",
      icon: ClockIcon,
      color: "bg-yellow-500",
      description: "Active projects"
    },
    {
      title: "Completed",
      value: 8,
      change: "+3",
      changeType: "positive",
      icon: CheckCircleIcon,
      color: "bg-green-500",
      description: "Finished projects"
    },
    {
      title: "Total Spent",
      value: "$24,500",
      change: "+$3,200",
      changeType: "positive",
      icon: CurrencyDollarIcon,
      color: "bg-purple-500",
      description: "This month"
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: "project_created",
      title: "New project created",
      description: "E-commerce Website Redesign",
      timestamp: "2 hours ago",
      icon: FolderIcon,
      color: "bg-blue-500"
    },
    {
      id: 2,
      type: "proposal_received",
      title: "Proposal received",
      description: "Alex Chen submitted a proposal for Mobile App Development",
      timestamp: "4 hours ago",
      icon: DocumentTextIcon,
      color: "bg-green-500"
    },
    {
      id: 3,
      type: "payment_released",
      title: "Payment released",
      description: "$2,500 released to Maria Rodriguez for UI/UX Design System",
      timestamp: "1 day ago",
      icon: CreditCardIcon,
      color: "bg-purple-500"
    },
    {
      id: 4,
      type: "project_completed",
      title: "Project completed",
      description: "Database Optimization marked as completed",
      timestamp: "2 days ago",
      icon: CheckCircleIcon,
      color: "bg-green-500"
    },
    {
      id: 5,
      type: "message_received",
      title: "New message",
      description: "David Kim sent a message about API Integration",
      timestamp: "3 days ago",
      icon: ChatBubbleLeftRightIcon,
      color: "bg-blue-500"
    }
  ]

  const quickActions = [
    {
      title: "Create New Project",
      description: "Start a new project and find experts",
      icon: PlusIcon,
      color: "bg-blue-600",
      href: "/client-dashboard/projects/create"
    },
    {
      title: "View Proposals",
      description: "Review expert proposals for your projects",
      icon: EyeIcon,
      color: "bg-green-600",
      href: "/client-dashboard/proposals"
    },
    {
      title: "Active Projects",
      description: "Track your ongoing projects",
      icon: ClockIcon,
      color: "bg-yellow-600",
      href: "/client-dashboard/projects"
    },
    {
      title: "Messages",
      description: "Chat with your project experts",
      icon: ChatBubbleLeftRightIcon,
      color: "bg-purple-600",
      href: "/client-dashboard/messages"
    }
  ]

  const handleQuickAction = (href: string) => {
    // TODO: Navigate to the specified page
    console.log('Navigating to:', href)
    window.open(href, '_self')
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'project_created': return <FolderIcon className="h-5 w-5" />
      case 'proposal_received': return <DocumentTextIcon className="h-5 w-5" />
      case 'payment_released': return <CreditCardIcon className="h-5 w-5" />
      case 'project_completed': return <CheckCircleIcon className="h-5 w-5" />
      case 'message_received': return <ChatBubbleLeftRightIcon className="h-5 w-5" />
      default: return <CalendarIcon className="h-5 w-5" />
    }
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-4 sm:space-y-6"
    >
        {/* Welcome Banner */}
        <motion.div variants={fadeInUp} className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 sm:space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold mb-2">
                Welcome back, {clientName}! 👋
              </h1>
              <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200">
                Last login: {lastLogin} • Ready to build something amazing?
              </p>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {summaryStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.title}
                variants={staggerItem}
                className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-lg ${stat.color} text-white`}>
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="flex items-center space-x-1">
                    {stat.changeType === 'positive' ? (
                      <ArrowUpIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 dark:text-green-400" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 dark:text-red-400" />
                    )}
                    <span className={`text-xs sm:text-sm font-medium ${
                      stat.changeType === 'positive' 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-red-600 dark:text-red-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {stat.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Quick Actions */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Quick Actions</h2>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <CalendarIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>Today</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {quickActions.map((action) => {
                  const Icon = action.icon
                  return (
                    <motion.button
                      key={action.title}
                      variants={staggerItem}
                      onClick={() => handleQuickAction(action.href)}
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl hover:shadow-md transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      style={{
                        minHeight: '44px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <div className={`p-2 sm:p-3 rounded-lg ${action.color} text-white`}>
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {action.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          {action.description}
                        </p>
                      </div>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Recent Activity</h2>
                <button 
                  className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                  style={{
                    minHeight: '32px',
                    WebkitTapHighlightColor: 'transparent',
                    touchAction: 'manipulation'
                  }}
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {recentActivity.map((activity) => (
                  <motion.div
                    key={activity.id}
                    variants={staggerItem}
                    className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className={`p-1.5 sm:p-2 rounded-lg ${activity.color} text-white flex-shrink-0`}>
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-1 line-clamp-2">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {activity.timestamp}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Stats Row */}
        <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <StarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">Average Rating</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">From completed projects</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">4.8</span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon
                    key={star}
                    className={`h-3 w-3 sm:h-4 sm:w-4 ${
                      star <= 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <ChatBubbleLeftRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">Active Chats</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">With project experts</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">5</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">conversations</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl shadow-sm p-4 sm:p-6 border border-gray-200 dark:border-gray-700 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg">
                <ExclamationTriangleIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm sm:text-lg font-semibold text-gray-900 dark:text-white">Pending Actions</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Require your attention</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">3</span>
              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">items</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
  )
}
