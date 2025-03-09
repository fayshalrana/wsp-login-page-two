import { useState } from "react"
import { ChevronRight, Plus, User2, X } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontBodyBold, fontBodyNormal, fontTitle1, fontCaptionNormal } from "@/styles/typography"

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
    <div className="flex w-full flex-col border-r border-black-10 bg-white lg:w-[315px]">
      {/* Table Number and Close Button - Only visible on lg and above */}
      <div className="hidden border-b border-black-10 p-4 lg:block">
        <h2 className={`${fontTitle1} flex items-center`}>
          <span className="text-black-40">Table</span>
          <span className="ml-2">A10</span>
        </h2>
      </div>

      {/* Mobile Header - Only visible below lg */}
      <div className="flex items-center justify-between p-4 lg:hidden">
        <h2 className={`${fontTitle1} flex items-center`}>
          <span className="text-black-40">Table</span>
          <span className="ml-2">A10</span>
        </h2>
        <button className="rounded-full bg-white p-2 shadow-lg hover:bg-black-5">
          <X size={20} className="text-black-60" />
        </button>
      </div>

      {/* Mobile Orders List - Horizontal Scrolling */}
      <div className="flex gap-2 overflow-x-auto px-4 py-3 lg:hidden">
      {/* Create New Order Button */}
        <div className="flex flex-1 flex-col items-center rounded-3 border border-black-10 px-4 py-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black-5 hover:bg-black-10">
            <Plus size={24} className="text-black-60" />
          </button>
          <span className={`mt-1 text-center ${fontBodyBold} text-black-100`}>
        Create New Order
          </span>
        </div>

        {/* Orders */}
        {orders.map((order) => (
          <div
            key={order.id}
            onClick={() => setSelectedOrderId(order.id)}
            className={`flex flex-1 px-3 flex-col items-center border rounded-3  border-black-10 ${
              selectedOrderId === order.id
                ? "border-b-4 border-b-orange-500"
                : "border-black-10"
            }`}
          >
            <div
              className={`relative flex h-[64px] w-[64px] items-center justify-center `}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border border-black-20 ${
                  selectedOrderId === order.id ? "bg-orange-500" : "bg-black-5"
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
              {(order.status === "Paid" || order.status === "Ready") && (
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-[#CFEAD1] px-2 py-0.5 text-[10px] text-[#15803D]">
                    Paid
                  </span>
                </div>
              )}
            </div>
            <div className="mt-1 flex flex-col items-center">
              <span className={`text-black-100 ${fontBodyBold}`}>
                {order.name}
              </span>
              <span className={`text-black-100 ${fontCaptionNormal}`}>
                {order.orderNumber}
              </span>
              <span
                className={`text-[10px] ${fontCaptionNormal} ${
                  order.status === "Ready"
                    ? "text-[#15803D]"
                    : order.status === "Served"
                      ? "text-[#D92D20]"
                      : order.status === "Accepted"
                        ? "text-[#B54708]"
                        : "text-black-60"
                }`}
              >
                {order.status}  <span className="text-[10px] text-black-60">{order.time}</span>
              </span>
             
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Orders List - Vertical Layout */}
      <div className="hidden flex-1 flex-col lg:flex">
        {/* Create New Order Button */}
        <MainButton variant="secondary" className="mx-4 my-3 w-auto !px-4">
          Create New Order
        </MainButton>

        {/* Orders List */}
        <div className="flex-1 overflow-auto px-4">
          {orders.map((order) => (
            <div
              key={order.id}
              onClick={() => setSelectedOrderId(order.id)}
              className={`group relative mb-2 flex cursor-pointer select-none items-center gap-3 rounded-3 border border-black-10 p-2 hover:bg-black-5 ${
                selectedOrderId === order.id
                  ? "border-r-[3px] border-r-orange-500"
                  : ""
              }`}
            >
              {/* User Icon */}
              <div className="relative">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border border-black-20 bg-black-5 ${
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
            </div>

            {/* Order Details */}
            <div className="flex flex-1 items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className={fontBodyNormal}>{order.name}</span>
                    {(order.status === "Paid" || order.status === "Ready") && (
                    <span className="rounded-full bg-[#CFEAD1] px-2 py-0.5 text-xs text-[#15803D]">
                      Paid
                    </span>
                  )}
                </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-black-60">{order.orderNumber}</span>
                    <span
                      className={`${
                        order.status === "Ready"
                          ? "text-[#15803D]"
                          : order.status === "Served"
                            ? "text-[#D92D20]"
                            : order.status === "Accepted"
                              ? "text-[#B54708]"
                              : "text-black-60"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-black-60">{order.time}</span>
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
        <MainButton variant="secondary" className="mx-4 my-3 w-auto !px-4">
        Merge Orders
        </MainButton>
      </div>
    </div>
  )
}
