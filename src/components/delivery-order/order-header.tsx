import { Edit2, X } from "lucide-react"

import { fontTitle1 } from "@/styles/typography"

export function OrderHeader() {
  return (
    <div className="flex items-center justify-between border-b border-black-10 pb-4">
      <div className="flex items-center gap-4">
        <h1 className={`${fontTitle1} text-black-100`}>Delivery Order</h1>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-black-60 hover:text-black-100">
            <Edit2 size={16} />
            Edit Order
          </button>
          <div className="h-4 w-[1px] bg-black-10" />
          <button className="flex items-center gap-1 text-sm text-black-60 hover:text-black-100">
            <X size={16} />
            Cancel Order
          </button>
        </div>
      </div>

      <button className="rounded-full bg-white p-2 shadow-lg hover:bg-black-5">
        <X size={20} className="text-black-60" />
      </button>
    </div>
  )
}
