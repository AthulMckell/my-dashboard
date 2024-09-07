import React from 'react'
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"

interface PerformanceMetricsProps {
  darkMode: boolean;
}

export default function PerformanceMetrics({ darkMode }: PerformanceMetricsProps) {
  return (
    <>
      <h2 className={`text-2xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'} mb-4`}>Instant Dive into Your Performance Metrics</h2>
      <Tabs defaultValue="lifetime" className="mb-8">
        <TabsList className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <TabsTrigger value="lifetime" className={`${darkMode ? 'data-[state=active]:bg-purple-900 data-[state=active]:text-purple-400' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}`}>Lifetime</TabsTrigger>
          <TabsTrigger value="lastWeek" className={`${darkMode ? 'data-[state=active]:bg-purple-900 data-[state=active]:text-purple-400' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}`}>Last Week</TabsTrigger>
          <TabsTrigger value="lastMonth" className={`${darkMode ? 'data-[state=active]:bg-purple-900 data-[state=active]:text-purple-400' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}`}>Last Month</TabsTrigger>
          <TabsTrigger value="lastYear" className={`${darkMode ? 'data-[state=active]:bg-purple-900 data-[state=active]:text-purple-400' : 'data-[state=active]:bg-purple-100 data-[state=active]:text-purple-800'}`}>Last Year</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
