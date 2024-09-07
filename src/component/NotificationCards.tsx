import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Bell, Package, ChevronDown } from 'lucide-react'

interface NotificationCardsProps {
  darkMode: boolean;
}

export default function NotificationCards({ darkMode }: NotificationCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
      {/* Order Sync Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-blue-500' : 'bg-blue-100'} border-2 shadow-lg ${darkMode ? 'shadow-blue-500/50' : ''}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>Order Sync Successful!</CardTitle>
                <Package className={`h-4 w-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </CardHeader>
              <CardContent>
                <p className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>Your order details from the last 30 days have been successfully synced. Check them out now!</p>
                <Button className={`mt-4 w-full ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'}`}>Explore Your Orders</Button>
              </CardContent>
      </Card>
      {/* Customer Notification Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-green-500' : 'bg-green-100'} border-2 shadow-lg ${darkMode ? 'shadow-green-500/50' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-green-400' : 'text-green-800'}`}>Customize Customer Notification</CardTitle>
                <Bell className={`h-4 w-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
              </CardHeader>
              <CardContent>
                <p className={`text-xs ${darkMode ? 'text-green-300' : 'text-green-700'}`}>Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers</p>
                <Button className={`mt-4 w-full ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'}`}>Configure Notifications</Button>
              </CardContent>
      </Card>
      {/* Tracking Link Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-purple-500' : 'bg-purple-100'} border-2 shadow-lg ${darkMode ? 'shadow-purple-500/50' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={`text-sm font-medium ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>Your Tracking Link has been generated</CardTitle>
                <ChevronDown className={`h-4 w-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              </CardHeader>
              <CardContent>
                <p className={`text-xs ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Include the Link to Your Store's Navigation Menu.</p>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className={`w-full ${darkMode ? 'border-purple-500 text-purple-400 hover:bg-purple-900' : 'border-purple-300 text-purple-700 hover:bg-purple-100'}`}>Copy Link</Button>
                  <Button className={`w-full ${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'}`}>Go To Navigation Menu</Button>
                </div>
              </CardContent>
      </Card>
    </div>
  )
}