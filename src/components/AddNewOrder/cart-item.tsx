import { Minus, Plus } from "lucide-react"

import { CartItem } from "./types"
import { fontCaptionBold, fontCaptionNormal } from "@/styles/typography"

interface CartItemProps {
  item: CartItem
  onUpdateQuantity: (id: string, quantity: number) => void
}

export function CartItemCard({ item, onUpdateQuantity }: CartItemProps) {
  return (
    <div className="rounded-xl border border-black/5 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`${fontCaptionBold}`}>{item.name}</h3>
        <div className="flex items-center gap-1">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-6 text-center">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5 transition-colors hover:bg-black/10"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {item.size && (
          <div className="rounded-full bg-black/5 px-3 py-1.5">
            <span className={`${fontCaptionNormal}  text-black-40`}>Size: </span>
            <span className={`${fontCaptionNormal}`}>{item.size}</span>
          </div>
        )}

        {Object.entries(item.modifiers || {}).map(([key, value]) => (
          <div key={key} className="rounded-full bg-black/5 px-3 py-1.5">
            <span className="text-sm text-black/60">{key}: </span>
            <span className="text-sm font-medium text-black">{value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
