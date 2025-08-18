'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChatBubbleLeftRightIcon,
  PaperClipIcon,
  PaperAirplaneIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
  UserIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  VideoCameraIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'

export default function ClientMessagesPage() {
  const [selectedChat, setSelectedChat] = useState<number | null>(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [messageText, setMessageText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showChatView, setShowChatView] = useState(false) // For mobile view control

  const chats = [
    {
      id: 1,
      expert: {
        name: "Alex Chen",
        avatar: "/avatars/alex.jpg",
        status: "online",
        rating: 4.9,
        project: "E-commerce Website Redesign"
      },
      lastMessage: "I've completed the frontend mockups. Would you like to review them?",
      timestamp: "2 min ago",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 2,
      expert: {
        name: "Maria Rodriguez",
        avatar: "/avatars/maria.jpg",
        status: "offline",
        rating: 4.8,
        project: "Mobile App Development"
      },
      lastMessage: "The iOS app is ready for testing. I'll send you the build link.",
      timestamp: "1 hour ago",
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 3,
      expert: {
        name: "David Kim",
        avatar: "/avatars/david.jpg",
        status: "online",
        rating: 4.7,
        project: "Database Optimization"
      },
      lastMessage: "I need some clarification on the performance requirements.",
      timestamp: "3 hours ago",
      unreadCount: 1,
      isOnline: true
    },
    {
      id: 4,
      expert: {
        name: "Sarah Johnson",
        avatar: "/avatars/sarah.jpg",
        status: "away",
        rating: 4.9,
        project: "API Integration"
      },
      lastMessage: "Payment gateway integration is complete. Ready for testing.",
      timestamp: "1 day ago",
      unreadCount: 0,
      isOnline: false
    },
    {
      id: 5,
      expert: {
        name: "Michael Brown",
        avatar: "/avatars/michael.jpg",
        status: "offline",
        rating: 4.6,
        project: "UI/UX Design System"
      },
      lastMessage: "Thanks for the feedback! I'll make those adjustments.",
      timestamp: "2 days ago",
      unreadCount: 0,
      isOnline: false
    }
  ]

  const messages = [
    {
      id: 1,
      sender: "expert",
      content: "Hi! I've started working on the e-commerce redesign project.",
      timestamp: "10:30 AM",
      status: "read"
    },
    {
      id: 2,
      sender: "client",
      content: "Great! I'm excited to see the progress.",
      timestamp: "10:32 AM",
      status: "read"
    },
    {
      id: 3,
      sender: "expert",
      content: "I've completed the initial wireframes. Would you like to review them?",
      timestamp: "11:15 AM",
      status: "read"
    },
    {
      id: 4,
      sender: "client",
      content: "Yes, please share them. I'd like to see the homepage design first.",
      timestamp: "11:20 AM",
      status: "read"
    },
    {
      id: 5,
      sender: "expert",
      content: "Perfect! I've uploaded the homepage mockups to the project files. You can find them in the 'Design' folder.",
      timestamp: "2:45 PM",
      status: "read"
    },
    {
      id: 6,
      sender: "expert",
      content: "I've also included some alternative color schemes. Let me know which direction you prefer.",
      timestamp: "2:46 PM",
      status: "delivered"
    },
    {
      id: 7,
      sender: "expert",
      content: "I've completed the frontend mockups. Would you like to review them?",
      timestamp: "3:30 PM",
      status: "sent"
    }
  ]

  const filteredChats = chats.filter(chat => 
    chat.expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    chat.expert.project.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const selectedChatData = chats.find(chat => chat.id === selectedChat)

  const handleSendMessage = () => {
    if (messageText.trim()) {
      // TODO: Implement message sending
      console.log('Sending message:', messageText)
      setMessageText('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileUpload = () => {
    // TODO: Implement file upload
    console.log('Uploading file')
  }

  const handleChatSelect = (chatId: number) => {
    setSelectedChat(chatId)
    // On mobile, switch to chat view
    if (window.innerWidth < 768) {
      setShowChatView(true)
    }
  }

  const handleBackToChatList = () => {
    setShowChatView(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500'
      case 'away': return 'bg-yellow-500'
      case 'offline': return 'bg-gray-400'
      default: return 'bg-gray-400'
    }
  }

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case 'sent': return <CheckIcon className="h-3 w-3 text-gray-400" />
      case 'delivered': return <CheckIcon className="h-3 w-3 text-blue-500" />
      case 'read': return <CheckIcon className="h-3 w-3 text-green-500" />
      default: return <ClockIcon className="h-3 w-3 text-gray-400" />
    }
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="h-[calc(100vh-120px)] bg-white dark:bg-dark-card rounded-2xl shadow-sm overflow-hidden"
    >
      <div className="flex h-full">
        {/* Conversation List - Left Column */}
        <motion.div 
          variants={fadeInUp} 
          className={`w-full md:w-80 lg:w-96 border-r border-gray-200 dark:border-dark-border flex flex-col ${
            showChatView ? 'hidden md:flex' : 'flex'
          }`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-gray-800">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h2>
              <button 
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                style={{
                  minHeight: '44px',
                  minWidth: '44px',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
              >
                <EllipsisVerticalIcon className="h-5 w-5" />
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-dark-surface text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors text-sm mobile-touch-target"
                style={{
                  minHeight: '48px',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
              />
            </div>
          </div>

          {/* Chat List */}
          <div className="flex-1 overflow-y-auto">
            {filteredChats.map((chat) => (
              <motion.div
                key={chat.id}
                variants={staggerItem}
                onClick={() => handleChatSelect(chat.id)}
                className={`p-4 border-b border-gray-100 dark:border-dark-border cursor-pointer transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700 mobile-touch-target ${
                  selectedChat === chat.id ? 'bg-blue-50 dark:bg-blue-900/20 border-r-2 border-blue-500' : ''
                }`}
                style={{
                  minHeight: '80px',
                  WebkitTapHighlightColor: 'transparent',
                  touchAction: 'manipulation'
                }}
              >
                <div className="flex items-start space-x-3">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <UserIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white dark:border-dark-card ${getStatusColor(chat.expert.status)}`} />
                  </div>

                  {/* Chat Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate">
                        {chat.expert.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0">
                        {chat.timestamp}
                      </span>
                    </div>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 truncate">
                      {chat.expert.project}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate flex-1">
                        {chat.lastMessage}
                      </p>
                      {chat.unreadCount > 0 && (
                        <span className="ml-2 bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center flex-shrink-0">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chat Window - Right Column */}
        <motion.div 
          variants={fadeInUp} 
          className={`flex-1 flex flex-col ${
            !showChatView ? 'hidden md:flex' : 'flex'
          }`}
        >
          {selectedChatData ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {/* Back button for mobile */}
                    <button
                      onClick={handleBackToChatList}
                      className="md:hidden p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                      style={{
                        minHeight: '44px',
                        minWidth: '44px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <ArrowLeftIcon className="h-5 w-5" />
                    </button>
                    
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                        <UserIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-dark-card ${getStatusColor(selectedChatData.expert.status)}`} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-base truncate">
                        {selectedChatData.expert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {selectedChatData.expert.project}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                      style={{
                        minHeight: '44px',
                        minWidth: '44px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <PhoneIcon className="h-5 w-5" />
                    </button>
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                      style={{
                        minHeight: '44px',
                        minWidth: '44px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <VideoCameraIcon className="h-5 w-5" />
                    </button>
                    <button 
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                      style={{
                        minHeight: '44px',
                        minWidth: '44px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <EllipsisVerticalIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={staggerItem}
                    className={`flex ${message.sender === 'client' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-4 py-3 rounded-lg shadow-sm ${
                      message.sender === 'client'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <div className={`flex items-center justify-between mt-2 ${
                        message.sender === 'client' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        <span className="text-xs">{message.timestamp}</span>
                        {message.sender === 'client' && (
                          <div className="ml-2">
                            {getMessageStatusIcon(message.status)}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-lg shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-gray-800">
                <div className="flex items-end space-x-3">
                  <div className="flex-1">
                    <textarea
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      rows={1}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-dark-border rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-dark-surface text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors resize-none mobile-touch-target"
                      style={{ 
                        minHeight: '48px', 
                        maxHeight: '120px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={handleFileUpload}
                      className="p-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mobile-touch-target"
                      style={{
                        minHeight: '48px',
                        minWidth: '48px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <PaperClipIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className="p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mobile-touch-target"
                      style={{
                        minHeight: '48px',
                        minWidth: '48px',
                        WebkitTapHighlightColor: 'transparent',
                        touchAction: 'manipulation'
                      }}
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Empty State */
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ChatBubbleLeftRightIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Select a conversation</h3>
                <p className="text-base text-gray-600 dark:text-gray-400">
                  Choose a chat from the list to start messaging
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
