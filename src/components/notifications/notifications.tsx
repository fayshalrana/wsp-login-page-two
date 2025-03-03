"use client"

import { cn } from "@/lib/utils"
import NotificationsList from "@/components/notifications/notificationsList"
import NotificationSettings from "@/components/notifications/settings"
import { fontTitle1 } from "@/styles/typography"

export function NotificationsScreen() {
  return (
    <div className="flex h-screen w-full flex-col p-[var(--spacing-4)]">
      {/* Header */}
      <h1 className={cn(fontTitle1, "mb-6 text-[var(--text-black-100)]")}>
        Notifications
      </h1>

      {/* Main Content */}
      <div className="flex flex-1 flex-col gap-[var(--spacing-4)] overflow-hidden lg:flex-row lg:gap-[var(--spacing-2)]">
        {/* Left Panel - Notifications */}
        <div className="order-1 flex-1 rounded-[var(--round-3)] bg-[var(--white-background-60)] lg:order-none lg:w-2/3">
          <NotificationsList />
        </div>

        {/* Right Panel - Settings */}
        <div className="order-2 lg:order-none lg:w-1/3">
          <NotificationSettings />
        </div>
      </div>
    </div>
  )
}
