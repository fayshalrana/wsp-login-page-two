"use client"

import { useState } from "react"

import { ConfirmationPanel } from "./confirmation-panel"
import { Header } from "./header"
import { TransactionList } from "./transaction-list"

export function OTPConfirmationScreen() {
  const [selectedId, setSelectedId] = useState(1) // Default to first item

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden p-[var(--spacing-4)]">
      <Header />
      <div className="mt-[var(--spacing-4)] flex min-h-0 flex-1">
        {/* Left Panel - Transaction List */}
        <div className="flex w-[320px] flex-col overflow-hidden rounded-bl-[var(--round-3)] rounded-tl-[var(--round-3)] border-r bg-white/60">
          <TransactionList selectedId={selectedId} onSelect={setSelectedId} />
        </div>

        {/* Right Panel - Confirmation Details */}
        <div className="flex flex-1 flex-col overflow-hidden rounded-br-[var(--round-3)] rounded-tr-[var(--round-3)]">
          <ConfirmationPanel selectedId={selectedId} />
        </div>
      </div>
    </div>
  )
}
