import { LucideIcon } from "lucide-react"

import { fontBodyNormal, fontTitle2 } from "@/styles/typography"

interface StatsCardProps {
  title: string
  value: string
  icon: LucideIcon
  variant?: "primary" | "default"
  isSelected?: boolean
  onClick?: () => void
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  variant = "default",
  isSelected = false,
  onClick,
}: StatsCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex h-[120px] w-full flex-col justify-between rounded-xl p-4 transition-colors
        ${
          variant === "primary"
            ? "bg-[#FF5B36] text-white"
            : isSelected
              ? "bg-[#FF5B36] text-white"
              : "bg-white text-black hover:bg-[#FF5B36] hover:text-white"
        }`}
    >
      <div
        className={`rounded-full ${
          variant === "primary" || isSelected || "hover:bg-[#FF5B36]"
            ? "bg-white/20"
            : "bg-black/5"
        } w-fit p-2`}
      >
        <Icon
          className={`h-5 w-5 ${
            variant === "primary" || isSelected
              ? "text-white"
              : "text-black/60 group-hover:text-white"
          }`}
        />
      </div>

      <div>
        <p
          className={`${fontBodyNormal} ${
            variant === "primary" || isSelected
              ? "text-white/60"
              : "text-black/60"
          }`}
        >
          {title}
        </p>
        <p className={`${fontTitle2} mt-1`}>{value}</p>
      </div>
    </button>
  )
}
