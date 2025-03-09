"use client"

import { useState } from "react"
import {
  AssignmentTurnedInIcon,
  LabProfileIcon,
  ReceiptLongIcon,
} from "@/icons"
import { CheckCircle, CheckSquare, DollarSign, FileText, X } from "lucide-react"

import { CompletedOrdersChart } from "@/components/dashboard/completed-orders-chart"
import { PaymentDistribution } from "@/components/dashboard/payment-distribution"
import { PopularItems } from "@/components/dashboard/popular-items"
import { StatsCard } from "@/components/dashboard/stats-card"
import { CustomSelect } from "@/components/select"
import {
  fontBodyBold,
  fontBodyNormal,
  fontHeadline,
  fontTitle1,
} from "@/styles/typography"

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
  { name: "Grilled Chicken Wrap", orders: 65 },
  { name: "Cheese Loaded Fries", orders: 52 },
  { name: "BBQ Chicken Pizza", orders: 49 },
  { name: "Spicy Buffalo Wings", orders: 58 },
  { name: "Classic Caesar Salad", orders: 30 },
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

const statsData = [
  { title: "Revenue", value: "$3,145.00", icon: DollarSign, key: "revenue" },
  { title: "All Order", value: "290", icon: LabProfileIcon, key: "all-order" },
  {
    title: "Paid Orders",
    value: "173",
    icon: ReceiptLongIcon,
    key: "paid-orders",
  },
  {
    title: "Accepted",
    value: "38",
    icon: AssignmentTurnedInIcon,
    key: "accepted",
  },
  { title: "Completed", value: "155", icon: CheckCircle, key: "completed" },
  {
    title: "Canceled",
    value: "8",
    icon: X,
    key: "canceled",
    iconBgColor: "#EF4444",
    isCanceled: true,
  },
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
        <span className={`${fontHeadline} font-medium text-black-100`}>
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
            className={`rounded-full px-4 py-2 ${fontBodyNormal} transition-colors
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
            className={`rounded-full px-4 py-2 ${fontBodyNormal} transition-colors
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

      <div className="mb-2 grid grid-cols-4 gap-4 lg:grid-cols-6">
        {statsData.map((stat) => (
          <StatsCard
            key={stat.key}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            iconBgColor={stat.iconBgColor}
            isCanceled={stat.isCanceled}
            isSelected={selectedCard === stat.key}
            onClick={() =>
              setSelectedCard(selectedCard === stat.key ? null : stat.key)
            }
          />
        ))}
      </div>

      <div className="flex flex-col items-start gap-2 lg:flex-row">
        <div className="w-full lg:w-[355px]">
          <PopularItems items={popularItems} />
        </div>
        <div className="w-full space-y-2 lg:flex-1">
          <CompletedOrdersChart initialData={monthlyData} />
          <PaymentDistribution data={paymentData} total={3145} />
        </div>
      </div>
    </div>
  )
}
