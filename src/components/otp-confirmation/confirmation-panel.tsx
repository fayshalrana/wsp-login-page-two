import Image from "next/image"

import { cn } from "@/lib/utils"
import { fontBodyNormal, fontTitle1, fontTitle2 } from "@/styles/typography"

import { MainButton } from "../mainButton"

interface ConfirmationPanelProps {
  selectedId: number
}

export function ConfirmationPanel({ selectedId }: ConfirmationPanelProps) {
  // Show full panel only for first item (ID: 1)
  if (selectedId === 1) {
    return (
      <div className="relative flex flex-col items-center p-20 bg-white">
        {/* Close Button */}
        <button
          className="absolute left-[var(--spacing-4)] top-[30px] flex items-center gap-2 text-[var(--text-black-100)] hover:text-[var(--text-black-60)]"
          onClick={() => {}}>
          <span className="underline">Close</span>
        </button>

        {/* User Info */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
            <Image
              src="/rider-otp-img.svg"
              alt="Nasser Alsubai"
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </div>
          <h2 className={cn(fontTitle2, "text-[var(--text-black-100)]")}>
            Nasser Alsubai
          </h2>
          <span className="text-sm text-[var(--text-black-60)]">
            ID: 29857805
          </span>
        </div>

        {/* OTP Code with checkmark */}
        <div className="mt-8 text-center max-w-[602px]">
          <div className="mb-2 flex items-center justify-center gap-2">
            <h3 className={cn(fontTitle1, "text-[var(--text-semantic-red)]")}>
              674951
            </h3>
          </div>
          <p className={cn(fontBodyNormal, "text-[var(--text-black-100)]")}>
          To accept cash transfers, the rider must enter this 4-digit code in their app before you can accept the transaction.
          </p>
        </div>

        {/* Amount */}
        <div className="mt-8 text-center">
          <span className="text-sm text-[var(--text-black-60)]">
            The amount you should receive:
          </span>
          <h3 className={cn(fontTitle1, "text-[var(--text-black-100)]")}>
            $86.60
          </h3>
        </div>

        {/* Action Button */}
        <MainButton
          variant="primary"
          className="mt-4 w-full max-w-max bg-[var(--black-background-10)] transition-colors hover:bg-black text-gray-400 hover:text-white"
          onClick={() => {}}
        >
          Accept Cash Transfer
        </MainButton>
      </div>
    )
  }

  // Show "Select a rider" message for all other items
  return (
    <div className="flex h-full items-center justify-center p-20 bg-transparent">
      <span className={cn(fontBodyNormal, "text-[var(--text-black-60)] bg-white px-3 rounded-full")}>
        Select a rider to see info
      </span>
    </div>
  )
}
