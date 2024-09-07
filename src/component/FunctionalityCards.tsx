import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"

interface FunctionalityCardsProps {
  darkMode: boolean;
}

export default function FunctionalityCards({ darkMode }: FunctionalityCardsProps) {
  return (
    <>
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-4`}>Discover the Heart of Our Functionality</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Custom Tracking Page Styles Card */}
        <Card className={`${darkMode ? 'bg-gray-800 border-pink-500' : 'bg-pink-100'} border-2 shadow-lg ${darkMode ? 'shadow-pink-500/50' : ''}`}>
        <CardHeader>
                <CardTitle className={`${darkMode ? 'text-pink-400' : 'text-pink-800'} text-lg`}>Custom Tracking Page Styles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? 'text-pink-300' : 'text-pink-700'} mb-4`}>Elevate Your Brand Aesthetics: Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
                <div className="space-y-2">
                  <div>
                    <label htmlFor="accentColor" className={`block text-sm font-medium ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>Accent Color</label>
                    <Input id="accentColor" defaultValue="#FF9898" className={`${darkMode ? 'bg-gray-700 border-pink-500 focus:border-pink-400 focus:ring-pink-400' : 'border-pink-300 focus:border-pink-500 focus:ring-pink-500'}`} />
                  </div>
                  <div>
                    <label htmlFor="textColor" className={`block text-sm font-medium ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>Text Color</label>
                    <Input id="textColor" defaultValue="#571010" className={`${darkMode ? 'bg-gray-700 border-pink-500 focus:border-pink-400 focus:ring-pink-400' : 'border-pink-300 focus:border-pink-500 focus:ring-pink-500'}`} />
                  </div>
                  <div>
                    <label htmlFor="backgroundColor" className={`block text-sm font-medium ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>Background Color</label>
                    <Input id="backgroundColor" defaultValue="#FFEAEA" className={`${darkMode ? 'bg-gray-700 border-pink-500 focus:border-pink-400 focus:ring-pink-400' : 'border-pink-300 focus:border-pink-500 focus:ring-pink-500'}`} />
                  </div>
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className={`w-full ${darkMode ? 'border-pink-500 text-pink-400 hover:bg-pink-900' : 'border-pink-300 text-pink-700 hover:bg-pink-100'}`}>Preview</Button>
                  <Button className={`w-full ${darkMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-pink-600 hover:bg-pink-700'}`}>Apply Colors</Button>
                </div>
              </CardContent>
        </Card>
        {/* Exclusive Onboarding Support Card */}
        <Card className={`${darkMode ? 'bg-gray-800 border-teal-500' : 'bg-teal-100'} border-2 shadow-lg ${darkMode ? 'shadow-teal-500/50' : ''}`}>
        <CardHeader>
                <CardTitle className={`${darkMode ? 'text-teal-400' : 'text-teal-800'} text-lg`}>Exclusive Onboarding Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? 'text-teal-300' : 'text-teal-700'} mb-4`}>For High-Volume Brands: Unlock personalized guidance! Book a one-on-one onboarding call to streamline your experience.</p>
                <Button className={`w-full ${darkMode ? 'bg-teal-600 hover:bg-teal-700' : 'bg-teal-600 hover:bg-teal-700'}`}>Schedule A Call</Button>
              </CardContent>
        </Card>
        {/* Custom HTML Integration Card */}
        <Card className={`${darkMode ? 'bg-gray-800 border-orange-500' : 'bg-orange-100'} border-2 shadow-lg ${darkMode ? 'shadow-orange-500/50' : ''}`}>
        <CardHeader>
                <CardTitle className={`${darkMode ? 'text-orange-400' : 'text-orange-800'} text-lg`}>Custom HTML Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? 'text-orange-300' : 'text-orange-700'} mb-4`}>Seamlessly Integrate: Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
                <div>
                  <label htmlFor="htmlLink" className={`block text-sm font-medium ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>HTML Link</label>
                  <Input id="htmlLink" placeholder="Enter your custom HTML here" className={`mt-1 ${darkMode ? 'bg-gray-700 border-orange-500 focus:border-orange-400 focus:ring-orange-400' : 'border-orange-300 focus:border-orange-500 focus:ring-orange-500'}`} />
                </div>
                <div className="flex space-x-2 mt-4">
                  <Button variant="outline" className={`w-full ${darkMode ? 'border-orange-500 text-orange-400 hover:bg-orange-900' : 'border-orange-300 text-orange-700 hover:bg-orange-100'}`}>Preview</Button>
                  <Button className={`w-full ${darkMode ? 'bg-orange-600 hover:bg-orange-700' : 'bg-orange-600 hover:bg-orange-700'}`}>Apply changes</Button>
                </div>
              </CardContent>
        </Card>
      </div>
    </>
  )
}