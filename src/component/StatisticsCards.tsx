import React from 'react'
import { Card,CardHeader,CardTitle,CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
interface StatisticsCardsProps {
  darkMode: boolean;
}

export default function StatisticsCards({ darkMode }: StatisticsCardsProps) {
  return (
    
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
      {/* Shipment Updates Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-yellow-500' : 'bg-yellow-100'} border-2 shadow-lg ${darkMode ? 'shadow-yellow-500/50' : ''}`}>
      <CardHeader>
                <CardTitle className={`${darkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>Shipment Updates</CardTitle>
              </CardHeader>
              <CardContent>
              <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
                <p className={`text-center text-sm ${darkMode ? 'text-yellow-300' : 'text-yellow-700'} mt-4`}>Total Orders: 394</p>
              </CardContent>
      </Card>
      {/* Star Facts Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-red-500' : 'bg-red-100'} border-2 shadow-lg ${darkMode ? 'shadow-red-500/50' : ''}`}>
      <CardHeader>
                <CardTitle className={`${darkMode ? 'text-red-400' : 'text-red-800'}`}>Star Facts about your orders!!!</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className={`list-disc list-inside space-y-2 text-sm ${darkMode ? 'text-red-300' : 'text-red-700'}`}>
                  <li>There are 8 shipments that have been in out for delivery for more than 3 days.</li>
                  <li>There are 5 shipments in exception right now</li>
                  <li>The maximum chargebacks are from Miami.</li>
                </ul>
                <Button className={`mt-4 w-full ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'}`}>Check Orders Page</Button>
              </CardContent>
      </Card>
      {/* Tracking Page Views Card */}
      <Card className={`${darkMode ? 'bg-gray-800 border-indigo-500' : 'bg-indigo-100'} border-2 shadow-lg ${darkMode ? 'shadow-indigo-500/50' : ''}`}>
      <CardHeader>
                <CardTitle className={`${darkMode ? 'text-indigo-400' : 'text-indigo-800'}`}>Tracking Page Views Vs Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-indigo-700'} mb-4`}>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Orders</span>
                    <span className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-800'}`}>80</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Tracking Page Views</span>
                    <span className={`font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-800'}`}>44</span>
                  </div>
                </div>
              </CardContent>
      </Card>
    </div>
  )
}