"use client"

import { useState } from "react"

import { Activities } from "./activities"
import { ProfileHeader } from "./profile-header"
import { Settings } from "./settings"
import { UserDetails } from "./user-details"

export function ProfileScreen() {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
  const [defaultPage, setDefaultPage] = useState("kitchen-display")

  return (
    <div className="flex h-screen flex-col gap-4 overflow-hidden p-[var(--spacing-4)]">
      <ProfileHeader />

      <div className="flex min-h-0 flex-1 flex-col gap-4">
        <UserDetails />

        <div className="flex min-h-0 flex-1 gap-2">
          <Activities sortOrder={sortOrder} onSortChange={setSortOrder} />
          <Settings
            defaultPage={defaultPage}
            onDefaultPageChange={setDefaultPage}
          />
        </div>
      </div>
    </div>
  )
}
