import { cn } from "@/lib/utils"
import { fontTitle2, fontTitle1 } from "@/styles/typography"

interface OrderCardProps {
  orderNumber: string
  status: "preparing" | "ready"
  isLarge?: boolean
}

export function OrderCard({
  orderNumber,
  status,
  isLarge = false,
}: OrderCardProps) {
  return (
    <div
      className={cn(
        fontTitle2,
        "flex items-center justify-center rounded-3 px-6",
        isLarge ? `h-[128px] ${fontTitle1}` : "h-[64px]",
        status === "preparing"
          ? "bg-[#e5e5e5] text-[var(--text-black-100)]"
          : "bg-[#00A524] text-white"
      )}
    >
      {orderNumber}
    </div>
  )
}
