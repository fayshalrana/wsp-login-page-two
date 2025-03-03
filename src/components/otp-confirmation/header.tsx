import { cn } from "@/lib/utils"
import { fontTitle1 } from "@/styles/typography"

export function Header() {
  return (
    <div className="flex items-center justify-between py-6">
      <h1 className={cn(fontTitle1, "text-[var(--text-black-100)]")}>
        OTP Confirmation
      </h1>
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-[var(--semantic-warning-100)]" />
      </div>
    </div>
  )
} 