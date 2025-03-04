"use client"

import { useState } from "react"

import { ConfirmationPanel } from "./confirmation-panel"
import { transactions } from "./data" // Move transactions to a separate file
import { Header } from "./header"
import { TransactionList } from "./transaction-list"

export function OTPConfirmationScreen() {
  const [selectedId, setSelectedId] = useState<number | null>(1) // Default to first item

  const handleClose = () => {
    setSelectedId(null)
  }

  const selectedTransaction = transactions.find((t) => t.id === selectedId)

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden p-[var(--spacing-4)]">
      <Header />
      <div className="mt-[var(--spacing-4)] flex min-h-0 flex-1">
        {/* Left Panel - Transaction List */}
        <div className="flex w-1/3 flex-col overflow-hidden rounded-bl-[var(--round-3)] rounded-tl-[var(--round-3)] border-r bg-white/60">
          <TransactionList
            selectedId={selectedId}
            onSelect={setSelectedId}
            transactions={transactions}
          />
        </div>

        {/* Right Panel - Confirmation Details */}
        <div className="flex w-2/3 flex-col overflow-hidden rounded-br-[var(--round-3)] rounded-tr-[var(--round-3)] bg-white">
          <ConfirmationPanel
            selectedId={selectedId}
            onClose={handleClose}
            selectedTransaction={selectedTransaction}
          />
        </div>
      </div>
    </div>
  )
}
