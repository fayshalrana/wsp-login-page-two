"use client"
import { useState } from "react"
import { X } from "lucide-react"

import {
  Dialog,
  DialogFullScreenContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/dialog"
import SearchInput from "@/components/searchInput"
import { CustomSelect } from "@/components/select"
import { fontHeadline, fontTitle1 } from "@/styles/typography"

interface TableSelectDialogProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (table: string) => void
}

const locations = [
  "All Table",
  "Main Hall",
  "Terrace",
  "River Side",
  "Sea View",
]

export function TableSelectDialog({
  isOpen,
  onClose,
  onSelect,
}: TableSelectDialogProps) {
  const [selectedLocation, setSelectedLocation] = useState("All Table")
  const [searchQuery, setSearchQuery] = useState("")

  const tables = [
    { id: "C2", status: "available" },
    { id: "C3", status: "occupied" },
    { id: "C4", status: "available" },
    { id: "C5", status: "reserved" },
    { id: "D1", status: "available" },
    { id: "D3", status: "occupied" },
    { id: "D2", status: "available" },
    { id: "D4", status: "reserved" },
    { id: "D5", status: "available" },
    { id: "D6", status: "occupied" },
  ]

  const sortOptions = [
    { value: "ascending", label: "Table No. Ascending" },
    { value: "descending", label: "Table No. Descending" },
  ]

  const handleSortChange = (option: { value: string; label: string }) => {
    console.log("Sort changed:", option)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="z-[60]" />
      <DialogFullScreenContent className="z-[61] flex h-full flex-col bg-white">
        {/* Header */}
        <div className="">
          <div className="relative px-6 py-5">
            <DialogTitle className={`${fontTitle1} text-left`}>
              Select Table Number
            </DialogTitle>
            <button
              onClick={onClose}
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border bg-black-5 p-2 shadow-lg hover:bg-black/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Tab Header */}
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex gap-4 rounded-3 bg-black-5">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => setSelectedLocation(location)}
                  className={`rounded-full px-3 py-4 text-sm font-medium transition-colors
                    ${
                      location === selectedLocation
                        ? "bg-[#FF5B36] text-white"
                        : "text-black hover:bg-black/5"
                    }`}
                >
                  {location}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <CustomSelect
                options={sortOptions}
                sortByText="Sort by"
                onOptionSelect={handleSortChange}
                defaultValue={sortOptions[0]}
                menuPosition="right"
              />
              <SearchInput
                query={searchQuery}
                setQuery={setSearchQuery}
                width="w-64"
              />
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-10 gap-4 px-4 pb-4">
            {tables.map((table) => (
              <button
                key={table.id}
                onClick={() => {
                  if (table.status === "available") {
                    onSelect(table.id)
                    onClose()
                  }
                }}
                className={`relative flex h-14 items-center justify-center rounded-3 border-l-4 ${fontHeadline}
                  ${
                    table.status === "available"
                      ? "border-[#22C55E] bg-black-5"
                      : table.status === "occupied"
                        ? "border-[#EF4444] bg-black-5"
                        : table.status === "selected"
                          ? "border-none bg-[#6B7280] text-black-5"
                          : "border-[#F59E0B] bg-black-5"
                  }`}
              >
                {table.id}
              </button>
            ))}
          </div>
        </div>
      </DialogFullScreenContent>
    </Dialog>
  )
}
