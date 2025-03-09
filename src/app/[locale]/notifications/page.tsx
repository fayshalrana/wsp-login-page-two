"use client";

import { NotificationsScreen } from "@/components/notifications/notifications";

export default function Page({ params }: { params: { locale: string } }) {
  console.log("Params:", params); // Debugging
  return <NotificationsScreen />;
}
