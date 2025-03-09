"use client";

import { NotificationsScreen } from "@/components/notifications/notifications";

interface NotificationsPageProps {
  params: { locale: string }; // Ensure `params` is an object, not a Promise
}

export default function Page({ params }: NotificationsPageProps) {
  return <NotificationsScreen />;
}
