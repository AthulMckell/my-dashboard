import React from 'react'

interface WelcomeHeaderProps {
  darkMode: boolean;
}

export default function WelcomeHeader({ darkMode }: WelcomeHeaderProps) {
  return (
    <h1 className={`text-3xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-6`}>Welcome, John Mathew!</h1>
  )
}