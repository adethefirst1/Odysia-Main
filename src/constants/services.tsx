import { Service } from '@/types/service'

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Full-stack web applications built with modern technologies and best practices.',
    features: [
      'Frontend & Backend Development',
      'React, Vue, Angular, Node.js',
      'Database Design & API Integration',
      'Performance Optimization & Testing'
    ],
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that create engaging and intuitive experiences.',
    features: [
      'User Research & Personas',
      'Wireframing & Prototyping',
      'Visual Design & Branding',
      'Usability Testing & Iteration'
    ],
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    )
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    description: 'Scalable cloud infrastructure and automated deployment pipelines.',
    features: [
      'AWS, Azure, GCP Implementation',
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Monitoring & Security'
    ],
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: 'project-management',
    title: 'Project Management',
    description: 'End-to-end project management with escrow-based execution for security.',
    features: [
      'Project Scoping & Planning',
      'Expert Matching & Vetting',
      'Escrow Payment Protection',
      'Progress Tracking & Delivery'
    ],
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  }
] 