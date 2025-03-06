export type TableStatus = "Free" | "Ordered" | "Ready"
export type Location = "River Side" | "Main Hall" | "Terrace" | "Sea View"

export interface TableData {
  id: number
  number: number
  location: Location
  status: TableStatus
  timeStatus: string
  occupancy: number
  orders: number
} 