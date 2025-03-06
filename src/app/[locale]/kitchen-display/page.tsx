"use client"

import { useState } from "react"

import { FilterSection } from "@/components/kitchen-display/filter-section"
import { KitchenDisplayHeader } from "@/components/kitchen-display/header"
import { OrderContent } from "@/components/kitchen-display/order-content"

export default function KitchenDisplayPage() {
  const [selectedStatus, setSelectedStatus] = useState("open")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen flex-col bg-[#F7F7F7]">
      <div className="bg-white">
        <div className="px-4">
          <KitchenDisplayHeader
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
        <FilterSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>

      <div className="order-content flex-1 overflow-auto">
        <OrderContent />
      </div>
    </div>
  )
}
