"use client"

import { NotificationsScreen } from "@/components/notifications/notifications"

interface NotificationPageProps {
  params: { locale: string }
}

export default function Page({ params }: NotificationPageProps) {
  return <NotificationsScreen />
}
