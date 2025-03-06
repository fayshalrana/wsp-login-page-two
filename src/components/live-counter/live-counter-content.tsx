import { useEffect, useState } from "react"

import { TableGrid } from "./table-grid"
import { Location, TableData, TableStatus } from "./types"

// Helper function to get random item from array
const getRandomItem = <T,>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

const locations: Location[] = ["River Side", "Main Hall", "Terrace", "Sea View"]
const statuses: TableStatus[] = ["Free", "Ordered", "Ready"]
const timeStatuses = [
  "Now",
  "5 min ago",
  "10 min ago",
  "15 min ago",
  "20 min ago",
]

// Function to generate random tables
const generateTables = (): TableData[] => {
  return Array.from({ length: 20 }, (_, index) => {
    const status = getRandomItem(statuses)
    return {
      id: index + 1,
      number: index + 1,
      location: getRandomItem(locations),
      status: status,
      timeStatus: status === "Free" ? "-" : getRandomItem(timeStatuses),
      occupancy: Math.floor(Math.random() * 6) + 1, // 1-6 people
      orders: status === "Free" ? 0 : Math.floor(Math.random() * 5) + 1, // 1-5 orders for non-free tables
    }
  })
}

const categories = [
  { name: "Tables", count: 16 },
  { name: "Delivery", count: 3 },
  { name: "Pickup", count: 2 },
  { name: "Aggregators", count: 1 },
]

const locationFilters = [
  "All Table",
  "River Side",
  "Main Hall",
  "Terrace",
  "Sea View",
]

interface LiveCounterContentProps {
  isGridView: boolean
}

export function LiveCounterContent({ isGridView }: LiveCounterContentProps) {
  const [tables, setTables] = useState<TableData[]>([])

  useEffect(() => {
    setTables(generateTables())
  }, [])

  // Show loading or empty state while tables are being generated
  if (tables.length === 0) {
    return <div className="flex-1 overflow-auto bg-black-5 p-4">Loading...</div>
  }

  return (
    <div className="live-counter-content flex-1 overflow-auto px-4">
      <TableGrid tables={tables} isGridView={isGridView} />
    </div>
  )
}
