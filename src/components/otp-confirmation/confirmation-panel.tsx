import Image from "next/image"

import { cn } from "@/lib/utils"
import { fontBodyNormal, fontTitle1, fontTitle2 } from "@/styles/typography"

import { MainButton } from "../mainButton"

interface ConfirmationPanelProps {
  selectedId: number | null
  onClose: () => void
  selectedTransaction?: {
    name: string
    userId: string
    otpCode: string
    amount: string
  }
}

export function ConfirmationPanel({
  selectedId,
  onClose,
  selectedTransaction,
}: ConfirmationPanelProps) {
  // Show "Select a rider" message when no item is selected
  if (!selectedId || !selectedTransaction) {
    return (
      <div className="flex h-full items-center justify-center bg-transparent p-20">
        <span
          className={cn(
            fontBodyNormal,
            "rounded-full bg-white px-3 text-[var(--text-black-60)]"
          )}
        >
          Select a rider to see info
        </span>
      </div>
    )
  }

  // Show full panel for selected item
  return (
    <div className="relative flex flex-col items-center bg-white p-20">
      {/* Close Button */}
      <button
        className="absolute left-[var(--spacing-4)] top-[30px] flex items-center gap-2 text-[var(--text-black-100)] hover:text-[var(--text-black-60)]"
        onClick={onClose}
      >
        <span className="underline">Close</span>
      </button>

      {/* User Info */}
      <div className="text-center">
        <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
          <Image
            src="/rider-otp-img.svg"
            alt={selectedTransaction.name}
            width={96}
            height={96}
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className={cn(fontTitle2, "text-[var(--text-black-100)]")}>
          {selectedTransaction.name}
        </h2>
        <span className="text-sm text-[var(--text-black-60)]">
          ID: {selectedTransaction.userId}
        </span>
      </div>

      {/* OTP Code with checkmark */}
      <div className="mt-8 max-w-[602px] text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <h3 className={cn(fontTitle1, "text-[var(--text-semantic-red)]")}>
            {selectedTransaction.otpCode}
          </h3>
        </div>
        <p className={cn(fontBodyNormal, "text-[var(--text-black-100)]")}>
          To accept cash transfers, the rider must enter this 4-digit code in
          their app before you can accept the transaction.
        </p>
      </div>

      {/* Amount */}
      <div className="mt-8 text-center">
        <span className="text-sm text-[var(--text-black-60)]">
          The amount you should receive:
        </span>
        <h3 className={cn(fontTitle1, "text-[var(--text-black-100)]")}>
          {selectedTransaction.amount}
        </h3>
      </div>

      {/* Action Button */}
      <MainButton
        variant="primary"
        className="mt-4 w-full max-w-max bg-[var(--black-background-10)] text-gray-400 transition-colors hover:bg-black hover:text-white"
        onClick={() => {}}
      >
        Accept Cash Transfer
      </MainButton>
    </div>
  )
}
