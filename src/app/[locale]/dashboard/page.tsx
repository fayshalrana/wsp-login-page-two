"use client"

import { useState } from "react"
import { CheckCircle, CheckSquare, DollarSign, FileText, X } from "lucide-react"

import { CompletedOrdersChart } from "@/components/dashboard/completed-orders-chart"
import { PaymentDistribution } from "@/components/dashboard/payment-distribution"
import { PopularItems } from "@/components/dashboard/popular-items"
import { StatsCard } from "@/components/dashboard/stats-card"
import { CustomSelect } from "@/components/select"
import { fontBodyBold, fontBodyNormal, fontHeadline, fontTitle1 } from "@/styles/typography"

interface DashboardPageProps {
  params: {
    locale: string
  }
}

const dateRangeOptions = [
  { value: "today", label: "Today" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
]

const popularItems = [
  { name: "Double Chicken Burger + French fries", orders: 88 },
  { name: "Mexican Burger", orders: 74 },
  { name: "Double Spicy Bean Burger", orders: 41 },
  { name: "Potato Gems", orders: 38 },
  { name: "Beer", orders: 32 },
]

const monthlyData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 145 },
  { month: "Mar", orders: 180 },
  { month: "Apr", orders: 165 },
  { month: "May", orders: 210 },
  { month: "Jun", orders: 269 },
  { month: "Jul", orders: 190 },
  { month: "Aug", orders: 175 },
  { month: "Sep", orders: 160 },
  { month: "Oct", orders: 140 },
  { month: "Nov", orders: 130 },
  { month: "Dec", orders: 125 },
]

const paymentData = [
  { method: "Card", amount: 1400, color: "#FF5B36" },
  { method: "PayPal", amount: 400, color: "#F59E0B" },
  { method: "Apple Pay", amount: 395, color: "#FCD34D" },
  { method: "Cash", amount: 365, color: "#3B82F6" },
  { method: "Crypto", amount: 270, color: "#8B5CF6" },
]

// Add this type for restaurant status
type RestaurantStatus = "OPEN" | "BUSY" | "CLOSED"

export default function DashboardPage() {
  const [restaurantStatus, setRestaurantStatus] =
    useState<RestaurantStatus>("OPEN")
  const [selectedCard, setSelectedCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className={fontTitle1}>Dashboard</h1>
        <CustomSelect
          options={dateRangeOptions}
          sortByText="Range"
          defaultValue={dateRangeOptions[0]}
          onOptionSelect={console.log}
        />
      </div>

      <div className="mb-2 flex items-center gap-6 rounded-3 bg-black-5 p-4">
        <span className={`${fontHeadline} font-mediam text-black-100`}>
          Restaurant Status
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => setRestaurantStatus("OPEN")}
            className={`rounded-full px-4 py-3 ${fontBodyNormal} transition-colors
              ${
                restaurantStatus === "OPEN"
                  ? "bg-[#22C55E] text-white"
                  : "bg-white text-black hover:bg-black/5"
              }`}
          >
            OPEN
          </button>
          <button
            onClick={() => setRestaurantStatus("BUSY")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
              ${
                restaurantStatus === "BUSY"
                  ? "bg-[#F59E0B] text-white"
                  : "bg-white text-black hover:bg-black/5"
              }`}
          >
            BUSY
          </button>
          <button
            onClick={() => setRestaurantStatus("CLOSED")}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
              ${
                restaurantStatus === "CLOSED"
                  ? "bg-[#EF4444] text-white"
                  : "bg-white text-black hover:bg-black/5"
              }`}
          >
            CLOSED
          </button>
        </div>
      </div>

      <div className="mb-2 grid grid-cols-6 gap-4">
        <StatsCard
          title="Revenue"
          value="$3,145.00"
          icon={DollarSign}
          variant="primary"
        />
        <StatsCard
          title="All Order"
          value="290"
          icon={FileText}
          isSelected={selectedCard === "all-order"}
          onClick={() =>
            setSelectedCard(selectedCard === "all-order" ? null : "all-order")
          }
        />
        <StatsCard
          title="Paid Orders"
          value="173"
          icon={FileText}
          isSelected={selectedCard === "paid-orders"}
          onClick={() =>
            setSelectedCard(
              selectedCard === "paid-orders" ? null : "paid-orders"
            )
          }
        />
        <StatsCard
          title="Accepted"
          value="38"
          icon={CheckSquare}
          isSelected={selectedCard === "accepted"}
          onClick={() =>
            setSelectedCard(selectedCard === "accepted" ? null : "accepted")
          }
        />
        <StatsCard
          title="Completed"
          value="155"
          icon={CheckCircle}
          isSelected={selectedCard === "completed"}
          onClick={() =>
            setSelectedCard(selectedCard === "completed" ? null : "completed")
          }
        />
        <StatsCard
          title="Canceled"
          value="8"
          icon={X}
          isSelected={selectedCard === "canceled"}
          onClick={() =>
            setSelectedCard(selectedCard === "canceled" ? null : "canceled")
          }
        />
      </div>

      <div className="flex items-start gap-2">
        <div className="w-[355px]">
          <PopularItems items={popularItems} />
        </div>
        <div className="flex-1 space-y-2">
          <CompletedOrdersChart initialData={monthlyData} />
          <PaymentDistribution data={paymentData} total={3145} />
        </div>
      </div>
    </div>
  )
}
