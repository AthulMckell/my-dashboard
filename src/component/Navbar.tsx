import React from 'react'
import { Moon, Sun, User } from 'lucide-react'
import { Switch } from "../components/ui/switch"

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-md`}>
      {<nav className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Logo</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className={`${darkMode ? 'border-purple-400 text-purple-400' : 'border-purple-500 text-purple-600'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}>
                  Home
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium`}>
                  Orders
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium`}>
                  Integrations
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium`}>
                  Tracking Page
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-700'} inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium`}>
                  Partner with Us
                </a>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <div className="flex items-center">
                <span className="mr-2 text-sm">{darkMode ? 'Dark' : 'Light'}</span>
                <Switch
                  checked={darkMode}
                  onCheckedChange={toggleDarkMode}
                  className={`${darkMode ? 'bg-purple-600' : 'bg-gray-200'}`}
                />
                {darkMode ? (
                  <Moon className="h-4 w-4 text-gray-300 ml-2" />
                ) : (
                  <Sun className="h-4 w-4 text-yellow-500 ml-2" />
                )}
              </div>
              <button type="button" className={`${darkMode ? 'bg-gray-700' : 'bg-white'} flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500`} id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <User className={`h-8 w-8 rounded-full ${darkMode ? 'text-purple-400' : 'text-purple-500'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>}
    </nav>
  )
}