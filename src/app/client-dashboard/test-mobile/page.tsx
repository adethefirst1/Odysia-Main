'use client'

import { useEffect } from 'react'

export default function TestMobilePage() {
  useEffect(() => {
    // Add some console logs to help debug
    console.log('Test mobile page loaded')
    console.log('Current viewport width:', window.innerWidth)
    console.log('Current viewport height:', window.innerHeight)
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mobile Navigation Test</h1>
      
      <div className="space-y-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Instructions:</h2>
          <ol className="list-decimal list-inside space-y-1">
            <li>Open this page on a mobile device or use browser dev tools to simulate mobile</li>
            <li>Click the hamburger menu button (☰) in the top left</li>
            <li>The sidebar should open with a close button (✕) in the top right</li>
            <li>Click the close button - it should close the sidebar</li>
            <li>You can also click outside the sidebar or press Escape to close it</li>
          </ol>
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Expected Behavior:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Sidebar opens smoothly from the left</li>
            <li>Close button is easily clickable (48px minimum touch target)</li>
            <li>Sidebar closes immediately when close button is clicked</li>
            <li>Background is dimmed when sidebar is open</li>
            <li>Body scroll is prevented when sidebar is open</li>
          </ul>
        </div>

        <div className="bg-yellow-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Debug Info:</h2>
          <p>Check the browser console for debug information</p>
          <p>Current viewport: {typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'Loading...'}</p>
        </div>

        <div className="bg-red-100 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">If it's not working:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Check browser console for errors</li>
            <li>Ensure you're testing on mobile or mobile simulation</li>
            <li>Try refreshing the page</li>
            <li>Check if JavaScript is enabled</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
