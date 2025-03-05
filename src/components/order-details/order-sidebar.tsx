import { useState } from "react"
import { ChevronRight, User2 } from "lucide-react"

import { fontBodyNormal } from "@/styles/typography"

type Order = {
  id: string
  name: string
  orderNumber: string
  status: "Ready" | "Ordered" | "Served" | "Accepted" | "Paid"
  time: string
}

const orders: Order[] = [
  {
    id: "1",
    name: "Sarah Hermant",
    orderNumber: "#203",
    status: "Ready",
    time: "10 min ago",
  },
  {
    id: "2",
    name: "Marry Romero",
    orderNumber: "#204",
    status: "Served",
    time: "15 min ago",
  },
  {
    id: "3",
    name: "Guest 01",
    orderNumber: "#203",
    status: "Ordered",
    time: "12 min ago",
  },
  {
    id: "4",
    name: "Guest 02",
    orderNumber: "#203",
    status: "Accepted",
    time: "20 min ago",
  },
]

export function OrderSidebar() {
  const [selectedOrderId, setSelectedOrderId] = useState<string>("2")

  return (
    <div className="flex w-[315px] flex-col border-r border-black-10 bg-white">
      {/* Table Number */}
      <div className="border-b border-black-10 p-4">
        <h2 className="text-lg font-medium">Table A5</h2>
      </div>

      {/* Create New Order Button */}
      <button className="mx-4 my-3 rounded-full bg-black-5 py-3 text-sm font-medium hover:bg-black-10">
        Create New Order
      </button>

      {/* Orders List */}
      <div className="flex-1 overflow-auto px-4">
        {orders.map((order) => (
          <div
            key={order.id}
            onClick={() => setSelectedOrderId(order.id)}
            className={`group relative mb-2 flex cursor-pointer items-center gap-3 rounded-lg border border-black-10 p-2 hover:bg-black-5 ${
              selectedOrderId === order.id
                ? "border-r-[3px] border-r-orange-500 bg-black-5"
                : ""
            }`}
          >
            {/* User Icon */}
            <div className="relative">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-black-20 bg-black-10 ${
                  selectedOrderId === order.id ? "bg-orange-500" : ""
                }`}
              >
                <User2
                  className={`h-5 w-5 ${
                    selectedOrderId === order.id
                      ? "text-white"
                      : "text-black-60"
                  }`}
                />
              </div>
              {selectedOrderId === order.id && (
                <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-red-500" />
              )}
            </div>

            {/* Order Details */}
            <div className="flex flex-1 items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className={fontBodyNormal}>{order.name}</span>
                  {order.status === "Paid" && (
                    <span className="rounded-full bg-[#CFEAD1] px-2 py-0.5 text-xs text-[#15803D]">
                      Paid
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-black-60">
                  <span>{order.orderNumber}</span>
                  <span>{order.status}</span>
                  <span>{order.time}</span>
                </div>
              </div>

              {/* Right Arrow */}
              <ChevronRight
                size={20}
                className={`transition-opacity ${
                  selectedOrderId === order.id
                    ? "text-orange-500"
                    : "text-black-60 opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Merge Orders Button */}
      <button className="mx-4 my-3 rounded-full bg-black-5 py-3 text-sm font-medium hover:bg-black-10">
        Merge Orders
      </button>
    </div>
  )
}
