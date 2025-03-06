import { Trash2 } from "lucide-react"

import {
  fontBodyNormal,
  fontCaptionNormal,
} from "@/styles/typography"

import { Order, OrderItem } from "./types"

interface OrderCardProps {
  order: Order
}

export function OrderCard({ order }: OrderCardProps) {
  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "Accept All":
        return "bg-[var(--semantic-green-background)] text-white"
      case "Ready All":
        return "bg-[var(--semantic-blue-background)] text-white"
      case "Serve All":
        return "bg-[var(--status-served-background)] text-white"
    }
  }

  const getBorderColor = (status: Order["status"]) => {
    switch (status) {
      case "Accept All":
        return "border-t-[var(--border-status-ordered)]" // Orange for Accept All
      case "Ready All":
        return "border-t-[var(--border-status-accepted)]"// Green for Ready All
      case "Serve All":
        return "border-t-[var(--border-status-ready)]" // Blue for Serve All
    }
  }

  const getItemStatusColor = (status: OrderItem["status"]) => {
    switch (status) {
      case "Ordered":
        return "text-[var(--text-status-ordered)]"
      case "Accepted":
        return "text-[var(--text-status-accepted)]"
      case "Ready":
        return "text-[var( --text-status-ready)]"
    }
  }

  // Check if all items are in "Ordered" status
  const allItemsOrdered = order.items.every((item) => item.status === "Ordered")
  const showDeleteButton = order.status === "Accept All" && allItemsOrdered

  return (
    <div className={`rounded-3 bg-white p-4 border-t-4 ${getBorderColor(order.status)}`}>
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium">#{order.id}</span>
        <div className="text-sm text-black/60">
          Table {order.tableNumber} | {order.timeStatus}
        </div>
      </div>

      {order.edited && (
        <div className="mt-1 text-sm">
          <span>Edited</span>
          <span className="ml-1 text-[#FF5C41]">1 min ago</span>
        </div>
      )}

      <div className="mt-3 flex items-center justify-between gap-2">
        {showDeleteButton ? (
          <>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-black-10">
              <Trash2 className="h-5 w-5 text-black/60" />
            </button>
            <button
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-3 text-sm ${getStatusColor(
                order.status
              )}`}
            >
              Accept All
              <span className="text-xs bg-black-100 rounded-full px-1">02:59</span>
            </button>
          </>
        ) : (
          <button
            className={`w-full rounded-full py-3 text-center text-sm ${getStatusColor(
              order.status
            )}`}
          >
            {order.status}
          </button>
        )}
      </div>

      {order.instruction && (
        <div className="mt-3 rounded bg-black/5 p-3 text-sm">
          {order.instruction}
        </div>
      )}

      <div className="mt-3 space-y-2.5 ">
        {order.items.map((item, index) => (
          <div key={index} className="flex items-start justify-between border-b border-b-black-10 py-2">
            <div className="flex items-start gap-3">
              <span className="text-lg font-medium">{item.quantity}</span>
              <div className="w-[135px]">
                <div className={`${fontBodyNormal} font-medium`}>{item.name}</div>
                {item.note && (
                  <div className={`${fontCaptionNormal} text-black/60`}>{item.note}</div>
                )}
              </div>
            </div>
            <span
              className={`${fontCaptionNormal} ${getItemStatusColor(item.status)} font-medium`}
            >
              • {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
