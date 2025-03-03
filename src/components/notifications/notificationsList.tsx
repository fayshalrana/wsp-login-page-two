"use client"

import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"
import SearchInput from "@/components/searchInput"
import { CustomSelect } from "@/components/select"
import {
  fontBodyNormal,
  fontCaptionNormal,
  fontHeadline,
} from "@/styles/typography"

const notifications = [
  {
    id: 1,
    description: '#202 order, "mushroom burger" was "accepted".',
    date: "6 Jan 2024",
    time: "1:32",
    isUnread: true,
  },
  {
    id: 2,
    description: '#588 order, "Soda" was Ready.',
    date: "6 Jan 2024",
    time: "11:11",
    isUnread: true,
  },
  {
    id: 3,
    description: '#164 order for "Table A101" Placed.',
    date: "6 Jan 2024",
    time: "10:59",
    isUnread: true,
  },
  {
    id: 4,
    description: "#202 order was Completed.",
    date: "5 Jan 2024",
    time: "18:36",
    isUnread: false,
  },
  {
    id: 5,
    description: '#202 order, "mushroom burger" was "Served".',
    date: "5 Jan 2024",
    time: "18:07",
    isUnread: false,
  },
  {
    id: 6,
    description: '#202 order, "mushroom burger" was "Served".',
    date: "5 Jan 2024",
    time: "17:55",
    isUnread: false,
  },
  {
    id: 7,
    description: "#202 order was Completed.",
    date: "5 Jan 2024",
    time: "17:17",
    isUnread: false,
  },
  {
    id: 8,
    description: '#164 order for "Table A101" Placed.',
    date: "5 Jan 2024",
    time: "17:01",
    isUnread: false,
  },
  {
    id: 9,
    description: '#164 order for "Table A101" Placed.',
    date: "5 Jan 2024",
    time: "17:01",
    isUnread: false,
  },
  {
    id: 10,
    description: '#164 order for "Table A101" Placed.',
    date: "5 Jan 2024",
    time: "17:01",
    isUnread: false,
  },
  {
    id: 11,
    description: '#164 order for "Table A101" Placed.',
    date: "5 Jan 2024",
    time: "17:01",
    isUnread: false,
  },
  // Add more notifications...
]

export default function NotificationsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSort, setSelectedSort] = useState({
    value: "all",
    label: "All",
  })

  const sortOptions = [
    { value: "all", label: "All" },
    { value: "unread", label: "Unread" },
  ]

  // Filter notifications based on search and sort
  const filteredNotifications = useMemo(() => {
    return notifications.filter((notification) => {
      // First apply sort filter
      if (selectedSort.value === "unread" && !notification.isUnread) {
        return false
      }

      // Then apply search filter
      if (searchQuery) {
        return notification.description
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      }

      return true
    })
  }, [selectedSort.value, searchQuery])

  const unreadCount = notifications.filter((n) => n.isUnread).length

  return (
    <div className="flex h-full flex-col p-[var(--spacing-4)]">
      {/* Header */}
      <div className="mb-[var(--spacing-4)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className={cn(fontHeadline, "text-[var(--text-black-100)]")}>
              Unread
            </h2>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--black-background-100)] text-xs text-white">
              {unreadCount}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <CustomSelect
              options={sortOptions}
              sortByText="Sort by:"
              onOptionSelect={setSelectedSort}
              defaultValue={selectedSort}
              selectWidth="w-32"
              menuWidth="w-32"
            />
            <SearchInput
              query={searchQuery}
              setQuery={setSearchQuery}
              width="w-64"
              alwaysOpen={false}
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Table Header */}
        <div className="flex rounded-full bg-[var(--black-background-5)] px-[var(--spacing-4)] py-[var(--spacing-2)] text-sm text-[var(--text-black-60)]">
          <div className="flex-1">Description</div>
          <div className="ml-auto w-[180px]">Date</div>
          <div className="w-[80px]">Time</div>
        </div>

        {/* Notifications List - Scrollable */}
        <div className="masonry-scroll-container flex-1 overflow-y-auto">
          {filteredNotifications.map((notification, index) => (
            <div
              key={notification.id}
              className={cn(
                "flex pr-[var(--spacing-4)] py-[var(--spacing-3)]",
                index !== filteredNotifications.length - 1 &&
                  "border-b border-[var(--border-black-10)]"
              )}
            >
              <p
                className={cn(
                  fontBodyNormal,
                  "flex-1",
                  notification.isUnread
                    ? "text-[var(--text-black-100)]"
                    : "text-[var(--text-black-40)]"
                )}
              >
                {notification.description}
              </p>
              <span
                className={cn(
                  fontCaptionNormal,
                  "ml-auto w-[180px] text-[var(--text-black-60)] pl-[var(--spacing-3)]"
                )}
              >
                {notification.date}
              </span>
              <span
                className={cn(
                  fontCaptionNormal,
                  "w-[80px] text-[var(--text-black-60)] pl-[var(--spacing-3)]"
                )}
              >
                {notification.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
