export type ItemStatus = "Ordered" | "Accepted" | "Ready"

export interface OrderItem {
  name: string
  status: "Ordered" | "Accepted" | "Ready"
  quantity: number
  note?: string
}

export interface Order {
  id: string
  tableNumber: string
  type?: string
  status: "Accept All" | "Ready All" | "Serve All"
  timeStatus: string
  edited?: boolean
  editedTime?: string
  instruction?: string
  items: OrderItem[]
} 