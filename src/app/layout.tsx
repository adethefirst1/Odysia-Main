import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AnimatedCursor from '@/components/AnimatedCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import LayoutWrapper from '@/components/LayoutWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Odysia - Managed Tech Talent Platform',
  description: 'Connect with vetted tech experts for Web Development, UI/UX, and Cloud/DevOps projects. Managed end-to-end with escrow-based execution.',
  keywords: 'tech consultancy, managed tech talent, web development, UI/UX design, cloud devops, escrow platform',
  authors: [{ name: 'Odysia Team' }],
  openGraph: {
    title: 'Odysia - Managed Tech Talent Platform',
    description: 'Connect with vetted tech experts for your next project',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Odysia - Managed Tech Talent Platform',
    description: 'Connect with vetted tech experts for your next project',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-white antialiased`}>
        <ThemeProvider>
          <ErrorBoundary>
            <div className="min-h-screen flex flex-col">
              <ScrollProgress />
              <AnimatedCursor />
              <LayoutWrapper>
                {children}
              </LayoutWrapper>
            </div>
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
} 