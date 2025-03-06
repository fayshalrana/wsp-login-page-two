import { useEffect, useState } from "react"
import Image from "next/image"
import { Grid2X2, List } from "lucide-react"

import { CustomSelect } from "@/components/select"

interface FilterSectionProps {
  isGridView: boolean
  onViewChange: (isGrid: boolean) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const locationTabs = [
  { id: "all", label: "All Table" },
  { id: "main-hall", label: "Main Hall" },
  { id: "terrace", label: "Terrace" },
  { id: "river-side", label: "River Side" },
  { id: "sea-view", label: "Sea View" },
]

const sortOptions = [
  { value: "table_desc", label: "Table No. Descending" },
  { value: "table_asc", label: "Table No. Ascending" },
  { value: "status", label: "Status" },
]

export function FilterSection({
  isGridView,
  onViewChange,
  onSearchChange,
}: FilterSectionProps) {
  const [selectedTab, setSelectedTab] = useState("all")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const content = document.querySelector(".live-counter-content")
      if (content) {
        setIsScrolled(content.scrollTop > 0)
      }
    }

    const content = document.querySelector(".live-counter-content")
    if (content) {
      content.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (content) {
        content.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const handleTabClick = (tabId: string) => {
    setSelectedTab(tabId)
  }

  return (
    <div
      className={`sticky top-0 z-10 flex items-center justify-between px-4 py-3 transition-shadow duration-200 ${
        isScrolled ? "shadow-2xl" : ""
      }`}
    >
      <div className="flex items-center gap-2 rounded-full bg-white">
        {locationTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
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

      <div className="flex items-center gap-3">
        <CustomSelect
          options={sortOptions}
          sortByText="Sort by"
          onOptionSelect={() => {}}
          defaultValue={sortOptions[0]}
        />

        <button
          onClick={() => onViewChange(!isGridView)}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-black-10 p-3 hover:bg-black/5"
        >
          {!isGridView ? (
            <Image
              src="/mini-grid-icon.svg"
              alt="List"
              width={20}
              height={20}
            />
          ) : (
            <Image src="/normal-grid.svg" alt="Grid" width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  )
}
