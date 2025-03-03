 "use client"

import { NotificationsScreen } from "@/components/notifications/notifications"

interface NotificationsPageProps {
  params: { locale: string }
}

export default function Page({ params }: NotificationsPageProps) {
  return <NotificationsScreen />
} 