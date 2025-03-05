import { OrderContent } from "./order-content"
import { OrderSidebar } from "./order-sidebar"

export function OrderDetailsScreen() {
  return (
    <div className="flex h-screen w-full flex-col lg:flex-row">
      {/* Mobile/Tablet View */}
      <div className="flex h-full flex-col lg:hidden">
        <div className="flex-none">
          <OrderSidebar />
        </div>
        <div className="flex-1 overflow-auto">
          <OrderContent />
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden h-full w-full lg:flex">
        <OrderSidebar />
        <OrderContent />
      </div>
    </div>
  )
}
