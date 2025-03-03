// import { Select } from "@/components/select"
import { useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"
import SearchInput from "@/components/searchInput"
import { CustomSelect } from "@/components/select"
import {
  fontBodyNormal,
  fontCaptionNormal,
  fontHeadline,
} from "@/styles/typography"

interface ActivitiesProps {
  sortOrder: "newest" | "oldest"
  onSortChange: (order: "newest" | "oldest") => void
}

export function Activities({ sortOrder, onSortChange }: ActivitiesProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showShadow, setShowShadow] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop
        setShowShadow(scrollTop > 0)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const activities = [
    {
      id: "#202",
      action: "order, 'mushroom burger' was accepted.",
      date: "6 Jan 2024",
      time: "1:32",
    },
    {
      id: "#188",
      action: "order, 'Soda' was Ready.",
      date: "6 Jan 2024",
      time: "11:11",
    },
    {
      id: "#164",
      action: "order for 'Table A02' Posted.",
      date: "6 Jan 2024",
      time: "10:59",
    },
    {
      id: "#202",
      action: "order was Completed.",
      date: "6 Jan 2024",
      time: "10:30",
    },
    {
      id: "#202",
      action: "order, 'mushroom burger' was 'Served'.",
      date: "6 Jan 2024",
      time: "08:33",
    },
    {
      id: "#202",
      action: "order, 'mushroom burger' was 'Served'.",
      date: "6 Jan 2024",
      time: "07:55",
    },
    {
      id: "#202",
      action: "order was Completed.",
      date: "6 Jan 2024",
      time: "07:37",
    },
    {
      id: "#164",
      action: "order for 'Table A02' Posted.",
      date: "6 Jan 2024",
      time: "06:24",
    },
    {
      id: "#188",
      action: "order, 'Soda' was Ready.",
      date: "6 Jan 2024",
      time: "06:12",
    },
  ]

  // Filter activities based on search
  const filteredActivities = activities.filter((activity) => {
    if (searchQuery) {
      return (
        activity.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        activity.action.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }
    return true
  })

  return (
    <div className="flex h-full w-2/3 flex-col rounded-3 bg-white p-4">
      {/* Fixed Header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className={fontHeadline}>Activities</h2>
        <div className="flex items-center gap-4">
          <CustomSelect<"newest" | "oldest">
            options={[
              { value: "newest", label: "Newest First" },
              { value: "oldest", label: "Oldest First" },
            ]}
            sortByText="Sort by"
            onOptionSelect={({ value }) => onSortChange(value)}
            defaultValue={{
              value: sortOrder,
              label: sortOrder === "newest" ? "Newest First" : "Oldest First",
            }}
            menuPosition="right"
            selectWidth="w-[180px]"
            menuWidth="w-[180px]"
          />
          <SearchInput
            query={searchQuery}
            setQuery={setSearchQuery}
            width="w-64"
            alwaysOpen={false}
          />
        </div>
      </div>

      {/* Table Container */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        {/* Fixed Table Header */}
        <div
          className={cn(
            "sticky top-0 z-10 flex rounded-t-3 bg-[var(--black-background-5)] px-[var(--spacing-4)] py-[var(--spacing-2)] mb-1 text-sm text-[var(--text-black-60)]"
          )}
        >
          <div className="flex-1">Description</div>
          <div className="ml-auto w-[100px]">Date</div>
          <div className="w-[80px]">Time</div>
        </div>

        {/* Scrollable Activities List */}
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex-1 overflow-y-auto rounded-t-3",
            showShadow && "shadow-[inset_0_4px_30px_rgba(0,0,0,0.09)]",
            "transition-shadow duration-200"
          )}
        >
          {filteredActivities.map((activity, index) => (
            <div
              key={`${activity.id}-${activity.time}`}
              className={cn(
                "flex px-[var(--spacing-4)] py-[var(--spacing-3)]",
                index !== filteredActivities.length - 1 &&
                  "border-b border-[var(--border-black-10)]"
              )}
            >
              <p
                className={cn(
                  fontBodyNormal,
                  "flex-1",
                  "text-[var(--text-black-100)]"
                )}
              >
                {activity.id} {activity.action}
              </p>
              <span
                className={cn(
                  fontCaptionNormal,
                  "ml-auto w-[100px] pl-[var(--spacing-3)] text-[var(--text-black-60)]"
                )}
              >
                {activity.date}
              </span>
              <span
                className={cn(
                  fontCaptionNormal,
                  "w-[80px] pl-[var(--spacing-3)] text-[var(--text-black-60)]"
                )}
              >
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
