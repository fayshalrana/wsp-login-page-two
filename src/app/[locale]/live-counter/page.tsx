"use client"

import { useState } from "react"

import { FilterSection } from "@/components/live-counter/filter-section"
import { LiveCounterHeader } from "@/components/live-counter/header"
import { LiveCounterContent } from "@/components/live-counter/live-counter-content"

export default function LiveCounterPage() {
  const [selectedService, setSelectedService] = useState("tables")
  const [searchQuery, setSearchQuery] = useState("")
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className="flex h-screen flex-col">
      <div className="px-4">
        <LiveCounterHeader
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
      </div>
      <FilterSection
        isGridView={isGridView}
        onViewChange={setIsGridView}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <LiveCounterContent isGridView={isGridView} />

      {/* Add Button */}
      <button
        className="fixed bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-lg"
        onClick={() => {
          // Add your click handler here
        }}
      >
        <div className="flex h-5 w-5 items-center justify-center">
          <div className="absolute h-[2px] w-4 bg-white"></div>
          <div className="absolute h-4 w-[2px] bg-white"></div>
        </div>
      </button>
    </div>
  )
}
