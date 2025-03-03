"use client"

import { useState } from "react"
import { CheckIcon } from "@/icons"

import { cn } from "@/lib/utils"
import Checkbox from "@/components/checkbox"
import ToggleSwitch from "@/components/toggleSwitch"
import { fontBodyNormal, fontHeadline } from "@/styles/typography"

type NotificationType =
  | "banner-and-sound"
  | "banner-only"
  | "sound-only"
  | "none"

export default function NotificationSettings() {
  const [selectedType, setSelectedType] = useState<NotificationType>("none")
  const [playRepeatedly, setPlayRepeatedly] = useState(false)
  const [tableNotifications, setTableNotifications] = useState(true)
  const [orderNotifications, setOrderNotifications] = useState(true)

  return (
    <div className="flex max-h-max flex-col space-y-[25.5px] rounded-[var(--round-3)] bg-[var(--white-background-60)] p-[var(--spacing-4)]">
      <h2 className={cn(fontHeadline, "text-[var(--text-black-100)]")}>
        Setting
      </h2>

      {/* Radio Options */}
      <div className="space-y-[25.5px]">
        <RadioOption
          label="Banner and sound"
          selected={selectedType === "banner-and-sound"}
          onClick={() => setSelectedType("banner-and-sound")}
        />
        <RadioOption
          label="Banner only"
          selected={selectedType === "banner-only"}
          onClick={() => setSelectedType("banner-only")}
        />
        <RadioOption
          label="Sound only"
          selected={selectedType === "sound-only"}
          onClick={() => setSelectedType("sound-only")}
        />
        <RadioOption
          label="None"
          selected={selectedType === "none"}
          onClick={() => setSelectedType("none")}
        />
      </div>

      {/* Separator */}
      <div className="h-[1px] bg-[var(--border-black-10)]" />

      {/* Toggles */}
      <div className="space-y-[25.5px]">
        <ToggleSwitch
          label="Play Repeatedly"
          checked={playRepeatedly}
          onChange={setPlayRepeatedly}
        />
        <ToggleSwitch
          label="Table Notifications"
          checked={tableNotifications}
          onChange={setTableNotifications}
        />
        <ToggleSwitch
          label="Order Notifications"
          checked={orderNotifications}
          onChange={setOrderNotifications}
        />
      </div>
    </div>
  )
}

interface RadioOptionProps {
  label: string
  selected: boolean
  onClick: () => void
}

function RadioOption({ label, selected, onClick }: RadioOptionProps) {
  return (
    <div className="flex items-center justify-between">
      <span className={cn(fontBodyNormal, "text-[var(--text-black-100)]")}>
        {label}
      </span>
      <Checkbox
        checked={selected}
        onClick={onClick}
        size="small"
        className="!h-[28px] !w-[28px] !rounded-full"
      />
    </div>
  )
}
