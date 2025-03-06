import { useEffect, useState } from "react"

import { CustomSelect } from "@/components/select"
import { fontBodyLinkNormal, fontCaptionNormal } from "@/styles/typography"

interface FilterSectionProps {
  searchQuery: string
  onSearchChange: (query: string) => void
}

const categoryTabs = [
  { id: "all", label: "All Order" },
  { id: "table", label: "Table" },
  { id: "pickup", label: "Pickup" },
  { id: "delivery", label: "Delivery" },
  { id: "aggregators", label: "Aggregators" },
]

const statusTabs = [
  { id: "ordered", label: "Ordered", count: 5, color: "text-[#92400E]" },
  { id: "accepted", label: "Accepted", count: 2, color: "text-[#15803D]" },
  { id: "ready", label: "Ready", count: 3, color: "text-[#1E40AF]" },
  { id: "served", label: "Served", count: 6, color: "text-[#6B21A8]" },
]

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
]

export function FilterSection({ onSearchChange }: FilterSectionProps) {
  const [selectedTab, setSelectedTab] = useState("all")
  const [selectedStatusTab, setSelectedStatusTab] = useState("ordered")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector(".order-content")
      if (content) {
        setIsScrolled(content.scrollTop > 0)
      }
    }

    const content = document.querySelector(".order-content")
    if (content) {
      content.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (content) {
        content.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <div
      className={`sticky top-0 z-10 transition-shadow duration-200 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: Category Tabs */}
        <div className="flex items-center gap-2 rounded-full bg-white">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`rounded-full px-3 py-4 text-sm transition-all ${
                tab.id === selectedTab
                  ? "bg-[#FF5C41] text-white"
                  : "bg-white text-black hover:bg-black/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Status Tabs and Sort */}
        <div className="flex items-center gap-4">
          <div className="flex items-center overflow-hidden rounded-3 bg-black/5">
            {statusTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setSelectedStatusTab(tab.id)}
                className={`flex flex-col items-center border-r border-black/5 px-3 py-1 transition-all last:border-r-0
                  ${index === 0 ? "rounded-l-3" : ""} 
                  ${index === statusTabs.length - 1 ? "rounded-r-3" : ""}
                  ${selectedStatusTab === tab.id ? "bg-white" : "bg-[#f7f7f7]"}
                  hover:bg-white/80
                `}
              >
                <span
                  className={`${fontBodyLinkNormal} font-medium ${tab.color}`}
                >
                  {tab.count}
                </span>
                <span className={`${fontCaptionNormal} ${tab.color}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>

          <CustomSelect
            options={sortOptions}
            sortByText="Sort by"
            onOptionSelect={() => {}}
            defaultValue={sortOptions[0]}
          />
        </div>
      </div>
    </div>
  )
}
