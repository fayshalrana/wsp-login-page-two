"use client"

import { OrderHeader } from "./header"
import { OrderGrid } from "./order-grid"

export function OrderStatusScreen() {
  return (
    <div className="flex h-screen w-full flex-col overflow-hidden  p-[var(--spacing-4)]">
      <OrderHeader />
      <div className="mt-[var(--spacing-4)] min-h-0 flex-1 overflow-hidden">
        <OrderGrid />
      </div>
    </div>
  )
}
