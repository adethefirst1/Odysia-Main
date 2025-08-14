'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  FolderIcon,
  UserIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  PlusIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function ClientProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'list' | 'cards'>('cards')
  const router = useRouter()

  const projects = [
    {
      id: 1,
      name: "E-commerce Website Redesign",
      description: "Complete redesign of our online store with modern UI/UX and improved functionality",
      expert: "Alex Chen",
      status: "in_progress",
      budget: 8500,
      timeline: "6 weeks",
      lastUpdated: "Dec 10, 2024",
      progress: 65,
      milestones: [
        { title: "Design Mockups", completed: true },
        { title: "Frontend Development", completed: true },
        { title: "Backend Integration", completed: false },
        { title: "Testing & Launch", completed: false }
      ]
    },
    {
      id: 2,
      name: "Mobile App Development",
      description: "iOS and Android app for our service platform with real-time features",
      expert: "Maria Rodriguez",
      status: "completed",
      budget: 12000,
      timeline: "8 weeks",
      lastUpdated: "Nov 28, 2024",
      progress: 100,
      milestones: [
        { title: "UI/UX Design", completed: true },
        { title: "iOS Development", completed: true },
        { title: "Android Development", completed: true },
        { title: "Testing & Deployment", completed: true }
      ]
    },
    {
      id: 3,
      name: "Database Optimization",
      description: "Performance optimization and restructuring of our main database",
      expert: "David Kim",
      status: "pending",
      budget: 3200,
      timeline: "3 weeks",
      lastUpdated: "Dec 5, 2024",
      progress: 0,
      milestones: [
        { title: "Analysis & Planning", completed: false },
        { title: "Optimization", completed: false },
        { title: "Testing", completed: false }
      ]
    },
    {
      id: 4,
      name: "API Integration",
      description: "Integration with third-party payment and shipping APIs",
      expert: "Sarah Johnson",
      status: "in_progress",
      budget: 4500,
      timeline: "4 weeks",
      lastUpdated: "Dec 8, 2024",
      progress: 40,
      milestones: [
        { title: "API Research", completed: true },
        { title: "Payment Integration", completed: false },
        { title: "Shipping Integration", completed: false },
        { title: "Testing", completed: false }
      ]
    },
    {
      id: 5,
      name: "UI/UX Design System",
      description: "Comprehensive design system for our brand across all platforms",
      expert: "David Kim",
      status: "completed",
      budget: 7500,
      timeline: "5 weeks",
      lastUpdated: "Nov 20, 2024",
      progress: 100,
      milestones: [
        { title: "Brand Analysis", completed: true },
        { title: "Design Components", completed: true },
        { title: "Documentation", completed: true },
        { title: "Implementation Guide", completed: true }
      ]
    },
    {
      id: 6,
      name: "Cloud Migration",
      description: "Migration from on-premise servers to cloud infrastructure",
      expert: "Alex Chen",
      status: "pending",
      budget: 5200,
      timeline: "4 weeks",
      lastUpdated: "Dec 1, 2024",
      progress: 0,
      milestones: [
        { title: "Infrastructure Planning", completed: false },
        { title: "Data Migration", completed: false },
        { title: "Testing & Validation", completed: false }
      ]
    }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.status === filter
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (project.expert && project.expert.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesFilter && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
      case 'in_progress': return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'
      case 'pending': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Completed'
      case 'in_progress': return 'In Progress'
      case 'pending': return 'Pending'
      default: return 'Unknown'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircleIcon className="h-4 w-4" />
      case 'in_progress': return <ClockIcon className="h-4 w-4" />
      case 'pending': return <ExclamationTriangleIcon className="h-4 w-4" />
      default: return <ClockIcon className="h-4 w-4" />
    }
  }

  const handleViewDetails = (projectId: number) => {
    // Navigate to project details page in the same tab
    console.log('Viewing project details:', projectId)
    router.push(`/client-dashboard/projects/${projectId}`)
  }

  const handleCreateProject = () => {
    // TODO: Navigate to create project page
    console.log('Creating new project')
    window.open('/client-dashboard/projects/create', '_blank')
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
        {/* Header */}
        <motion.div variants={fadeInUp} className="bg-white dark:bg-dark-card rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Projects</h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Manage and track all your projects
              </p>
            </div>
            
            <motion.button
              onClick={handleCreateProject}
              className="bg-blue-600 dark:bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2 mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Create New Project</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Filters and Search */}
        <motion.div variants={fadeInUp} className="bg-white dark:bg-dark-card rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
              {/* Search */}
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-dark-surface text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors"
                />
              </div>
              
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-dark-surface text-gray-900 dark:text-white transition-colors"
              >
                <option value="all">All Projects</option>
                <option value="pending">Pending</option>
                <option value="in_progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">View:</span>
              <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('cards')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'cards'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Cards
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        {viewMode === 'cards' ? (
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-200 dark:border-dark-border hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {getStatusText(project.status)}
                    </span>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                      <UserIcon className="h-4 w-4" />
                      <span>{project.expert || 'Unassigned'}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        <span>${project.budget.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{project.timeline}</span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Last Updated */}
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Last updated: {project.lastUpdated}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleViewDetails(project.id)}
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2 mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <EyeIcon className="h-4 w-4" />
                    <span>View Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div variants={fadeInUp} className="bg-white dark:bg-dark-card rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-dark-border">
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Project</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Expert</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Status</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Budget</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Progress</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Last Updated</th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900 dark:text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((project) => (
                    <motion.tr
                      key={project.id}
                      variants={staggerItem}
                      className="border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-dark-surface transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">{project.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                            {project.description}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <UserIcon className="h-4 w-4 text-gray-400" />
                          <span className="text-gray-900 dark:text-white">{project.expert || 'Unassigned'}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                          {getStatusText(project.status)}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-900 dark:text-white">${project.budget.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-sm text-gray-600 dark:text-gray-400">{project.lastUpdated}</span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleViewDetails(project.id)}
                          className="flex items-center space-x-2 px-3 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                          <EyeIcon className="h-4 w-4" />
                          <span>View Details</span>
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div variants={fadeInUp} className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <FolderIcon className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {searchTerm || filter !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'You haven\'t created any projects yet.'
              }
            </p>
            {!searchTerm && filter === 'all' && (
              <motion.button
                onClick={handleCreateProject}
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center space-x-2 mx-auto mobile-touch-target focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PlusIcon className="h-5 w-5" />
                <span>Create Your First Project</span>
              </motion.button>
            )}
          </motion.div>
        )}
      </motion.div>
  )
}
