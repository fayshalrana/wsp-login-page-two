"use client"

import { cn } from "@/lib/utils"
import { fontTitle1 } from "@/styles/typography"

import { OrderCard } from "./order-card"

export function OrderGrid() {
  const preparingOrders = Array(26).fill("3885")
  const readyOrders = Array(12).fill("3885")

  return (
    <div className="flex h-full gap-[var(--spacing-4)]">
      {/* Preparing Orders - 2/3 width */}
      <div className="flex w-full md:w-1/2 lg:w-2/3 flex-col items-center overflow-hidden rounded-[24px] bg-white/60 shadow-sm">
        <h2
          className={cn(
            fontTitle1,
            "py-6 text-center text-[var(--text-black-100)]"
          )}
        >
          Preparing
        </h2>
        <div className="w-full flex-1 overflow-y-auto px-[24px] lg:px-[65.5px] pb-6">
        <div className="flex flex-wrap justify-center items-center w-full gap-2">
            {preparingOrders.map((number, index) => (
              <OrderCard
                key={`preparing-${index}`}
                orderNumber={number}
                status="preparing"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ready Orders - 1/3 width */}
      <div className="flex w-full md:w-1/2 lg:w-1/3 flex-col items-center overflow-hidden rounded-[24px] bg-white/60 shadow-sm">
        <h2
          className={cn(
            fontTitle1,
            "py-6 text-center text-[var(--text-black-100)]"
          )}
        >
          Ready
        </h2>
        <div className="w-full flex-1 overflow-y-auto pl-[24.5px] pr-4 pb-6">
          <div className="flex w-full flex-col gap-2">
            <div className="rounded-3 bg-[#00A524] p-4">
              <OrderCard orderNumber="3885" status="ready" isLarge={true} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {readyOrders.map((number, index) => (
                <OrderCard
                  key={`ready-${index}`}
                  orderNumber={number}
                  status="ready"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
