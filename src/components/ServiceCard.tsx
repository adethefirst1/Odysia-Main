'use client'

import { motion } from 'framer-motion'
import { hoverLift, scaleIn, staggerItem } from '@/lib/animations'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    features: string[]
    icon: React.ReactNode
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      className="group bg-white dark:bg-dark-card rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-dark-border hover:border-primary-200 dark:hover:border-primary-600 relative overflow-hidden mobile-touch-target"
      variants={staggerItem}
      whileHover="hover"
      initial="initial"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary-50 dark:from-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />
      
      {/* Floating particles effect */}
      <motion.div
        className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-300 rounded-full opacity-0 group-hover:opacity-60"
        animate={{
          y: [0, -10, 0],
          x: [0, 5, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="relative z-10">
        <div className="flex items-center mb-3 sm:mb-4">
          <motion.div 
            className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-300"
            whileHover={{ 
              scale: 1.1,
              rotate: 5
            }}
          >
            <motion.div 
              className="group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>
          </motion.div>
        </div>
        
        <motion.h3 
          className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-dark-text group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300 mb-2 sm:mb-3 leading-tight"
          whileHover={{ x: 5 }}
        >
          {service.title}
        </motion.h3>
        
        <motion.p 
          className="text-sm sm:text-base text-gray-600 dark:text-dark-text-secondary mb-4 sm:mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {service.description}
        </motion.p>
        
        <motion.ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
          {service.features.map((feature, index) => (
            <motion.li 
              key={index} 
              className="flex items-start text-xs sm:text-sm text-gray-600 dark:text-dark-text-secondary"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.svg 
                className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                whileHover={{ scale: 1.2, rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </motion.svg>
              <span className="leading-relaxed">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
        

      </div>
      
      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-primary-200 dark:bg-primary-700 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0 }}
        whileHover={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      />
    </motion.div>
  )
} 