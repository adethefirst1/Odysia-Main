'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  UserIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  BellIcon,
  IdentificationIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import { 
  ProfileSection, 
  SecuritySection, 
  PaymentsSection, 
  NotificationsSection, 
  VerificationSection, 
  DangerZoneSection 
} from '@/components/client-dashboard/SettingsSections'
import { DeleteAccountModal, DeactivateAccountModal } from '@/components/client-dashboard/SettingsModals'

interface SettingsSection {
  id: string
  label: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  description: string
}

const settingsSections: SettingsSection[] = [
  {
    id: 'profile',
    label: 'Profile',
    icon: UserIcon,
    description: 'Manage your personal information'
  },
  {
    id: 'security',
    label: 'Security',
    icon: ShieldCheckIcon,
    description: 'Password and authentication settings'
  },
  {
    id: 'payments',
    label: 'Payments',
    icon: CreditCardIcon,
    description: 'Payment methods and transaction history'
  },
  {
    id: 'notifications',
    label: 'Notifications',
    icon: BellIcon,
    description: 'Email and push notification preferences'
  },
  {
    id: 'verification',
    label: 'Verification',
    icon: IdentificationIcon,
    description: 'Identity and company verification'
  },
  {
    id: 'danger-zone',
    label: 'Danger Zone',
    icon: ExclamationTriangleIcon,
    description: 'Account deactivation and deletion'
  }
]

export default function ClientSettingsPage() {
  const [activeSection, setActiveSection] = useState('profile')
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showDeactivateModal, setShowDeactivateModal] = useState(false)

  const profileCompletion = 70 // This would be calculated based on filled fields

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId)
    setShowMobileMenu(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Manage your account settings and preferences
                </p>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                style={{
                  minHeight: '44px',
                  minWidth: '44px',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
              >
                <UserIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Profile Completion
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {profileCompletion}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${profileCompletion}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <motion.aside 
            variants={fadeInUp}
            className={`lg:w-80 lg:min-h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 ${
              showMobileMenu ? 'block' : 'hidden lg:block'
            }`}
          >
            <div className="p-4">
              <nav className="space-y-2">
                {settingsSections.map((section, index) => {
                  const Icon = section.icon
                  const isActive = activeSection === section.id
                  
                  return (
                    <motion.div
                      key={section.id}
                      variants={staggerItem}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <button
                        onClick={() => handleSectionChange(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 mobile-touch-target ${
                          isActive
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                        }`}
                        style={{
                          minHeight: '56px',
                          WebkitTapHighlightColor: 'transparent',
                          touchAction: 'manipulation'
                        }}
                      >
                        <Icon className={`h-5 w-5 flex-shrink-0 ${
                          isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-sm">{section.label}</div>
                          <div className={`text-xs mt-0.5 ${
                            isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {section.description}
                          </div>
                        </div>
                      </button>
                    </motion.div>
                  )
                })}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {activeSection === 'profile' && <ProfileSection />}
                {activeSection === 'security' && <SecuritySection />}
                {activeSection === 'payments' && <PaymentsSection />}
                {activeSection === 'notifications' && <NotificationsSection />}
                {activeSection === 'verification' && <VerificationSection />}
                {activeSection === 'danger-zone' && (
                  <DangerZoneSection 
                    onDelete={() => setShowDeleteModal(true)}
                    onDeactivate={() => setShowDeactivateModal(true)}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </motion.div>

      {/* Delete Account Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <DeleteAccountModal onClose={() => setShowDeleteModal(false)} />
        )}
      </AnimatePresence>

      {/* Deactivate Account Modal */}
      <AnimatePresence>
        {showDeactivateModal && (
          <DeactivateAccountModal onClose={() => setShowDeactivateModal(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
