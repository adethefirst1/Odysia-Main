'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  EyeIcon,
  EyeSlashIcon,
  EnvelopeIcon,
  LockClosedIcon,
  ArrowRightIcon,
  UserIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  ArrowLeftIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { staggerContainer, staggerItem, fadeInUp } from '@/lib/animations'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function ClientLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields')
      return
    }
    
    if (!email.includes('@')) {
      alert('Please enter a valid email address')
      return
    }
    
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      
      // Simple validation for demo purposes
      if (email === 'client@example.com' && password === 'password123') {
        // Login successful - redirect to dashboard
        router.push('/client-dashboard')
      } else {
        // For any other credentials, still allow access (demo mode)
        // Handle login error
        router.push('/client-dashboard')
      }
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg flex">
      {/* Left Column - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-8"
        >
          {/* Logo and Header */}
          <motion.div variants={staggerItem} className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-xl flex items-center justify-center">
                <BuildingOfficeIcon className="h-8 w-8 text-white" />
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
                Odysia
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Client Login
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Welcome to Odysia - Manage your projects with confidence
            </p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div variants={staggerItem} className="text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Login Form */}
          <motion.form variants={staggerItem} onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={fadeInUp}>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-dark-border rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-primary-500 dark:focus:border-primary-400 transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5" />
                  ) : (
                    <EyeIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Forgot Password Link */}
            <motion.div variants={fadeInUp} className="flex items-center justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                Forgot your password?
              </Link>
            </motion.div>

            {/* Login Button */}
            <motion.button
              variants={fadeInUp}
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 dark:bg-primary-500 hover:bg-primary-700 dark:hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Signing in...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Login as Client</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              )}
            </motion.button>

            {/* Sign Up Link */}
            <motion.div variants={fadeInUp} className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Don&apos;t have an account?{' '}
                <Link
                  href="/client-signup"
                  className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Sign Up
                </Link>
              </p>
            </motion.div>
          </motion.form>

          {/* Demo Note */}
          <motion.div variants={fadeInUp} className="text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              💡 Demo: Use any email and password to login
            </p>
          </motion.div>

          {/* Security Notice */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <ShieldCheckIcon className="h-4 w-4" />
            <span>Your data is protected with enterprise-grade security</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Column - Animated SVG */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary-600 to-primary-700 items-center justify-center p-8">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
              {/* Background Circles */}
              <motion.circle
                cx="400"
                cy="300"
                r="250"
                fill="rgba(255,255,255,0.05)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
              <motion.circle
                cx="400"
                cy="300"
                r="180"
                fill="rgba(255,255,255,0.03)"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
              />
            </svg>
          </motion.div>

          {/* Main Illustration */}
          <div className="relative z-10 w-full max-w-lg">
            {/* Central Building/Office */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                {/* Building Base */}
                <motion.div
                  className="w-32 h-40 bg-white rounded-lg shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                
                {/* Windows */}
                <motion.div
                  className="absolute top-4 left-4 grid grid-cols-3 gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-6 h-6 bg-blue-400 rounded"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.2 + i * 0.1 }}
                    />
                  ))}
                </motion.div>

                {/* Roof */}
                <motion.div
                  className="absolute -top-2 left-0 w-32 h-4 bg-gray-300 rounded-t-lg"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative"
            >
              {/* Project Management Icons */}
              <motion.div
                className="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <ChartBarIcon className="h-8 w-8 text-primary-600" />
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <CogIcon className="h-6 w-6 text-primary-600" />
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-4 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.0 }}
                whileHover={{ scale: 1.1 }}
              >
                <UserIcon className="h-7 w-7 text-primary-600" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <BuildingOfficeIcon className="h-8 w-8 text-primary-600" />
              </motion.div>
            </motion.div>

            {/* Connection Lines */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.path
                d="M 200 200 Q 300 150 400 200"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 2.6 }}
              />
              <motion.path
                d="M 600 200 Q 500 150 400 200"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 2.8 }}
              />
              <motion.path
                d="M 200 400 Q 300 350 400 400"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 3.0 }}
              />
              <motion.path
                d="M 600 400 Q 500 350 400 400"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 3.2 }}
              />
            </motion.svg>

            {/* Particle Effects */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: `${20 + (i * 60) % 80}%`,
                    top: `${30 + (i * 40) % 60}%`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2,
                    delay: 3.5 + i * 0.1,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Text Overlay */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              Welcome to Odysia
            </h2>
            <p className="text-white/80 text-lg">
              Where great projects come to life
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
