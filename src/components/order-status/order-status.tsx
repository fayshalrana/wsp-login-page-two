"use client"

import { useFullscreen } from "@/providers/FullscreenProvider"

import { OrderHeader } from "./header"
import { OrderGrid } from "./order-grid"

export function OrderStatusScreen() {
  const { isFullscreen } = useFullscreen()

  return (
    <div
      className={`flex h-screen w-full flex-col overflow-hidden ${isFullscreen ? "bg-black-5" : ""} p-[var(--spacing-4)]`}
    >
      <OrderHeader />
      <div className="mt-[var(--spacing-4)] min-h-0 flex-1 overflow-hidden">
        <OrderGrid />
      </div>
    </div>
  )
}
