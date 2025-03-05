import { OrderDetails } from "./order-details"
import { OrderHeader } from "./order-header"
import { OrderItems } from "./order-items"
import { OrderSummary } from "./order-summary"

export function PickupOrderScreen() {
  return (
    <div className="flex h-screen flex-col gap-4 p-4">
      <OrderHeader />
      <OrderDetails />
      <div className="flex flex-1 gap-4">
        <OrderItems />
        <OrderSummary />
      </div>
    </div>
  )
} 