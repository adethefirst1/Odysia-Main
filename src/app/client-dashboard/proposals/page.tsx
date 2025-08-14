'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  UserIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckIcon,
  XMarkIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function ClientProposalsPage() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const proposals = [
    {
      id: 1,
      project: "E-commerce Website Redesign",
      expert: {
        name: "Sarah Johnson",
        avatar: "SJ",
        rating: 4.9,
        reviews: 127,
        completedProjects: 89,
        skills: ["React", "Node.js", "UI/UX"],
        bio: "Full-stack developer with 8+ years experience in e-commerce and web applications.",
        location: "San Francisco, CA"
      },
      budget: "$8,500",
      timeline: "4 weeks",
      submittedDate: "Dec 5, 2024",
      status: "pending",
      description: "I'll create a modern, responsive e-commerce website with advanced features including payment integration, inventory management, and admin dashboard.",
      portfolio: "https://sarahjohnson.dev"
    },
    {
      id: 2,
      project: "Mobile App Development",
      expert: {
        name: "Michael Brown",
        avatar: "MB",
        rating: 4.7,
        reviews: 94,
        completedProjects: 67,
        skills: ["React Native", "Firebase", "API Integration"],
        bio: "Mobile app specialist with expertise in cross-platform development.",
        location: "Austin, TX"
      },
      budget: "$12,000",
      timeline: "6 weeks",
      submittedDate: "Dec 4, 2024",
      status: "accepted",
      description: "Full-stack mobile app development with real-time features, push notifications, and cross-platform compatibility.",
      portfolio: "https://michaelbrown.dev"
    },
    {
      id: 3,
      project: "API Integration",
      expert: {
        name: "Alex Chen",
        avatar: "AC",
        rating: 4.8,
        reviews: 156,
        completedProjects: 112,
        skills: ["Python", "Django", "AWS"],
        bio: "Backend developer specializing in scalable APIs and cloud infrastructure.",
        location: "Seattle, WA"
      },
      budget: "$6,200",
      timeline: "3 weeks",
      submittedDate: "Dec 3, 2024",
      status: "rejected",
      description: "Comprehensive API development with documentation, testing, and deployment to cloud infrastructure.",
      portfolio: "https://alexchen.dev"
    }
  ]

  const filteredProposals = proposals.filter(proposal => {
    const matchesFilter = filter === 'all' || proposal.status === filter
    const matchesSearch = proposal.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         proposal.expert.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
      case 'accepted': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      case 'rejected': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Pending Review'
      case 'accepted': return 'Accepted'
      case 'rejected': return 'Rejected'
      default: return 'Unknown'
    }
  }

  const handleAccept = (proposalId: number) => {
    console.log('Accepting proposal:', proposalId)
  }

  const handleReject = (proposalId: number) => {
    console.log('Rejecting proposal:', proposalId)
  }

  const handleViewProfile = (portfolio: string) => {
    window.open(portfolio, '_blank')
  }

  const stats = {
    total: proposals.length,
    pending: proposals.filter(p => p.status === 'pending').length,
    accepted: proposals.filter(p => p.status === 'accepted').length,
    rejected: proposals.filter(p => p.status === 'rejected').length
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
        {/* Header */}
        <motion.div variants={fadeInUp} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Proposals</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Review and manage expert proposals for your projects
              </p>
            </div>
            
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2z" />
                  </svg>
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search proposals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
              </div>
              
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors"
              >
                <option value="all">All Proposals</option>
                <option value="pending">Pending Review</option>
                <option value="accepted">Accepted</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.total}</p>
              </div>
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                <DocumentTextIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.pending}</p>
              </div>
              <div className="p-3 bg-yellow-100 dark:bg-yellow-900/20 rounded-lg">
                <ClockIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Accepted</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.accepted}</p>
              </div>
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <CheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Rejected</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.rejected}</p>
              </div>
              <div className="p-3 bg-red-100 dark:bg-red-900/20 rounded-lg">
                <XMarkIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Proposals Grid */}
        <motion.div variants={fadeInUp}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProposals.map((proposal) => (
              <motion.div
                key={proposal.id}
                variants={staggerItem}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {proposal.expert.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {proposal.expert.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {proposal.expert.location}
                        </p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(proposal.status)}`}>
                      {getStatusText(proposal.status)}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {proposal.project}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {proposal.description}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {proposal.expert.rating}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        ({proposal.expert.reviews} reviews)
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center space-x-2">
                        <CurrencyDollarIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{proposal.budget}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Budget</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ClockIcon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">{proposal.timeline}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Timeline</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="px-6 py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {proposal.expert.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                    {proposal.expert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md">
                        +{proposal.expert.skills.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="p-6 space-y-3">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleViewProfile(proposal.portfolio)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <EyeIcon className="h-4 w-4" />
                      <span>View Profile</span>
                    </button>
                    <button 
                      onClick={() => window.open(`mailto:${proposal.expert.name.toLowerCase().replace(' ', '.')}@example.com`)}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      <ChatBubbleLeftRightIcon className="h-4 w-4" />
                      <span>Message</span>
                    </button>
                  </div>
                  
                  {proposal.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => handleAccept(proposal.id)}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 dark:bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-700 dark:hover:bg-green-600 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      >
                        <CheckIcon className="h-4 w-4" />
                        <span>Accept</span>
                      </button>
                      <button 
                        onClick={() => handleReject(proposal.id)}
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-red-600 dark:bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-700 dark:hover:bg-red-600 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        <XMarkIcon className="h-4 w-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProposals.length === 0 && (
            <motion.div variants={fadeInUp} className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <DocumentTextIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No proposals found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {searchTerm || filter !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No proposals have been submitted yet.'
                }
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
  )
}
