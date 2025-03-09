'use client'
import { Plus } from "lucide-react"

import { MenuItem } from "./types"
import { fontCaptionBold } from "@/styles/typography"

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart: (item: MenuItem) => void
  quantity?: number
  isGridView: boolean
}

export function MenuItemCard({
  item,
  onAddToCart,
  quantity,
  isGridView,
}: MenuItemCardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm
      ${quantity && quantity > 0 ? "border-l-[3px] border-l-[#FF5B36]" : ""}
      ${isGridView ? "gap-12" : ""}`}
    >
      <div
        className={`flex h-full justify-between ${isGridView ? "flex-col gap-[40px]" : "w-full items-center"}`}
      >
        <h3 className={`${fontCaptionBold}`}>{item.name}</h3>
        {isGridView && (
          <div className="mt-auto flex w-full items-center justify-between">
            <span className="text-black/60">${item.price.toFixed(2)}</span>
            <AddButton
              quantity={quantity}
              onAddToCart={() => onAddToCart(item)}
            />
          </div>
        )}
        {!isGridView && (
          <AddButton
            quantity={quantity}
            onAddToCart={() => onAddToCart(item)}
          />
        )}
      </div>
    </div>
  )
}

function AddButton({
  quantity,
  onAddToCart,
}: {
  quantity?: number
  onAddToCart: () => void
}) {
  return (
    <button
      onClick={onAddToCart}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-black-10 transition-colors hover:bg-black/80 hover:text-white"
    >
      {quantity && quantity > 0 && (
        <div className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
          {quantity}
        </div>
      )}
      <Plus className="h-5 w-5" />
    </button>
  )
}
