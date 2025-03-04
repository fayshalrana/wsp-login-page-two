import { useState } from "react"
import { Edit2, MapPin, Printer } from "lucide-react"
import { MainButton } from "@/components/mainButton"
import { OrderHeader } from "./order-header"
import { OrderDetails } from "./order-details"
import { OrderItems } from "./order-items"
import { OrderSummary } from "./order-summary"
import { OrderFooter } from "./order-footer"

export function DeliveryOrderScreen() {
  return (
    <div className="flex min-h-screen w-full flex-col gap-4 bg-black-5 p-[var(--spacing-4)]">
      <div className="flex w-full flex-col gap-4 rounded-3 bg-white p-[var(--spacing-4)]">
        <OrderHeader />
        <OrderDetails />
        <OrderItems />
        <OrderSummary />
        <OrderFooter />
      </div>
    </div>
  )
} 