import { OrderContent } from "./order-content"
import { OrderSidebar } from "./order-sidebar"

export function OrderDetailsScreen() {
  return (
    <div className="flex h-screen w-full">
      <OrderSidebar />
      <OrderContent />
    </div>
  )
} 