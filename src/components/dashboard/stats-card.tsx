import { ComponentType } from "react"
import { LucideIcon, LucideProps } from "lucide-react"

import { fontBodyNormal, fontTitle2 } from "@/styles/typography"

interface StatsCardProps {
  title: string
  value: string
  icon: ComponentType<LucideProps> | LucideIcon
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
      className={`relative flex h-[160px] lg:h-[194px] w-full flex-col justify-between rounded-xl p-4 transition-colors
        ${
          variant === "primary"
            ? "bg-[var(--brand-background)] text-white"
            : isSelected
              ? "bg-[var(--brand-background)] text-white"
              : "bg-white text-black hover:bg-[var(--brand-background)] hover:text-white"
        }`}
    >
      <div
        className={`rounded-full ${
          variant === "primary" ||
          isSelected ||
          "hover:bg-[var(--brand-background)]"
            ? "bg-white/20"
            : "bg-black/5"
        } w-fit p-1`}
      >
        <Icon
          className={`h-5 w-5 ${
            variant === "primary" || isSelected
              ? "text-white"
              : "text-black/80 group-hover:text-white"
          }`}
        />
      </div>

      <div>
        <p
          className={`${fontBodyNormal} text-left ${
            variant === "primary" || isSelected
              ? "text-white"
              : "text-black hover:text-white"
          }`}
        >
          {title}
        </p>
        <p className={`${fontTitle2} mt-1 text-left`}>{value}</p>
      </div>
    </button>
  )
}
