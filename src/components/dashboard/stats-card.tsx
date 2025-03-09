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
  iconBgColor?: string
  isCanceled?: boolean
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  variant = "default",
  isSelected = false,
  onClick,
  iconBgColor,
  isCanceled = false,
}: StatsCardProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex h-[160px] w-full flex-col justify-between rounded-xl p-4 transition-colors lg:h-[194px]
        ${
          variant === "primary"
            ? "bg-[var(--brand-background)] text-white"
            : isSelected
              ? isCanceled
                ? "bg-white text-black"
                : "bg-[var(--brand-background)] text-white"
              : "bg-white text-black hover:bg-[var(--brand-background)] hover:text-white"
        }`}
    >
      <div
        className={`w-fit rounded-full p-1`}
        style={{
          backgroundColor:
            isSelected && isCanceled
              ? "var(--brand-background)"
              : iconBgColor ||
                (variant === "primary" || isSelected
                  ? "rgba(255, 255, 255, 0.2)"
                  : "rgba(0, 0, 0, 0.05)"),
        }}
      >
        <Icon
          className={`h-5 w-5 ${
            isSelected && isCanceled
              ? "text-white"
              : isCanceled || variant === "primary" || isSelected
                ? "text-white"
                : "text-black/80 group-hover:text-white"
          }`}
        />
      </div>

      <div>
        <p
          className={`${fontBodyNormal} text-left ${
            variant === "primary" || (isSelected && !isCanceled)
              ? "text-white"
              : "text-black"
          }`}
        >
          {title}
        </p>
        <p
          className={`${fontTitle2} mt-1 text-left ${
            isSelected && !isCanceled ? "text-white" : "text-black"
          }`}
        >
          {value}
        </p>
      </div>
    </button>
  )
}
