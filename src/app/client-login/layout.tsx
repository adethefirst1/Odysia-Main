import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import AnimatedCursor from '@/components/AnimatedCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { ThemeProvider } from '@/lib/contexts/ThemeContext'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Client Login - Odysia',
  description: 'Login to your client dashboard and manage your projects.',
}

export default function ClientLoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} transition-colors duration-300 bg-white dark:bg-dark-bg text-gray-900 dark:text-dark-text antialiased`}>
        <ErrorBoundary>
          <ThemeProvider>
            <AnimatedCursor />
            <ScrollProgress />
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
