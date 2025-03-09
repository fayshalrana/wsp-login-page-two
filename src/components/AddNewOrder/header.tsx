import { useState } from "react"
import { List, X } from "lucide-react"

import { Badge } from "@/components/badge"
import SearchInput from "@/components/searchInput"
import { GridIcon } from "@/icons"

interface MenuItem {
  id: string
  label: string
  count: number
}

const menuItems: Record<string, MenuItem[]> = {
  "main menu": [
    { id: "pizza", label: "Pizza", count: 12 },
    { id: "pasta", label: "Pasta", count: 9 },
    { id: "pasta2", label: "Pasta", count: 12 },
    { id: "panjabi", label: "Panjabi", count: 9 },
  ],
  "special menu": [
    { id: "kebab", label: "Kebab", count: 16 },
    { id: "burgers", label: "Burgers", count: 12 },
    { id: "pizza", label: "Pizza", count: 8 },
  ],
}

interface HeaderProps {
  selectedCategory: "main menu" | "special menu"
  onCategoryChange: (category: "main menu" | "special menu") => void
  selectedMenuItem: string | null
  onMenuItemSelect: (itemId: string) => void
  onGridViewToggle: (isGrid: boolean) => void
}

export function Header({
  selectedCategory,
  onCategoryChange,
  selectedMenuItem,
  onMenuItemSelect,
  onGridViewToggle,
}: HeaderProps) {
  const [isGridView, setIsGridView] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const categories = ["Main Menu", "Special Menu"]

  const handleGridToggle = () => {
    setIsGridView(!isGridView)
    onGridViewToggle(!isGridView)
  }

  return (
    <div className="flex flex-col">
      {/* Top Header with Search, View Toggle, and Close */}
      <div className="mb-4 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Search Input */}
          <SearchInput
            query={searchQuery}
            setQuery={setSearchQuery}
            width="w-[280px]"
          />

          {/* View Toggle Button */}
          <button
            onClick={handleGridToggle}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-black-10 transition-colors hover:bg-black/10"
          >
            {isGridView ? (
              <GridIcon className="h-5 w-5" />
            ) : (
              <List className="h-5 w-5 text-black/60" />
            )}
          </button>
        </div>

        {/* Close Button */}
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white border border-black-10 shadow-2xl transition-colors hover:bg-black/10">
          <X className="h-5 w-5 text-black/60" />
        </button>
      </div>

      {/* Pink background container */}
      <div className="">
        {/* Category tabs */}
        <div className="ml-7 flex">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                onCategoryChange(
                  category.toLowerCase() as "main menu" | "special menu"
                )
              }
              className={`relative rounded-tl-5 rounded-tr-5 border-none px-6 py-5 text-base font-medium outline-none transition-colors ${
                selectedCategory === category.toLowerCase()
                  ? "bg-black-10 before:absolute before:-left-3 before:bottom-0 before:h-3 before:w-3 before:bg-left-angle before:content-[''] after:absolute after:-right-3 after:bottom-0 after:h-3 after:w-3 after:bg-right-angle after:content-['']"
                  : "text-[var(--black-60)] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrollable menu items with gradient overlay */}
        <div className="relative overflow-hidden rounded-tl-[var(--round-5)]">
          <div className="scrollbar-hide flex overflow-x-auto rounded-bl-[var(--round-5)] bg-black-10 p-4">
            <div className="flex gap-4 pb-2">
              {menuItems[selectedCategory]?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMenuItemSelect(item.id)}
                  className={`relative flex items-center justify-center rounded-full px-4 py-3 transition-all ${
                    selectedMenuItem === item.id
                      ? "bg-black text-white shadow-none"
                      : "bg-white text-black shadow-sm hover:bg-white/90"
                  }`}
                >
                  {item.label}
                  <Badge
                    count={item.count}
                    size="small"
                    className={`absolute -right-2 -top-3 z-0 h-[32px] w-[32px] rounded-full bg-white text-black shadow-md`}
                    variant={selectedMenuItem === item.id ? "white" : "black"}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
