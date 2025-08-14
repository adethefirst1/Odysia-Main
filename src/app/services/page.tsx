import Image from 'next/image'
import { SERVICES_DATA } from '@/constants/services'
import ServiceCard from '@/components/ServiceCard'
import Logo from '@/components/Logo'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo
              width={180}
              height={72}
              className="h-18 w-auto"
              alt="Odysia Logo"
            />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-text-secondary max-w-3xl mx-auto">
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
} 