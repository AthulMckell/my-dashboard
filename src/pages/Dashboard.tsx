import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import WelcomeHeader from '../component/WelcomeHeader'
import NotificationCards from '../component/NotificationCards'
import PerformanceMetrics from '../component/PerformanceMetrics'
import StatisticsCards from '../component/StatisticsCards'
import FunctionalityCards from '../component/FunctionalityCards'

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <WelcomeHeader darkMode={darkMode} />
          <NotificationCards darkMode={darkMode} />
          <PerformanceMetrics darkMode={darkMode} />
          <StatisticsCards darkMode={darkMode} />
          <FunctionalityCards darkMode={darkMode} />
        </div>
      </main>
    </div>
  )
}