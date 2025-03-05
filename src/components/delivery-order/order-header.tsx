import { Edit2, Trash2, X } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontTitle1, fontButtonSmall } from "@/styles/typography"

export function OrderHeader() {
  return (
    <div className="flex items-center justify-between border-b border-black-10 pb-4">
      <div className="flex items-center gap-4">
        <h1 className={`${fontTitle1} text-black-100`}>Delivery Order</h1>
        <div className="flex items-center gap-2">
          <MainButton
            variant="secondary"
            className={` ${fontButtonSmall} border-black-10 flex items-center gap-2 rounded-full border bg-transparent px-4 py-2  hover:bg-black hover:text-white outline-transparent`}
          >
            <Edit2 size={16} />
            Edit Order
          </MainButton>
          <MainButton
            variant="secondary"
            className={` ${fontButtonSmall} border-black-10 flex items-center gap-2 rounded-full border bg-transparent px-4 py-2  hover:bg-black hover:text-white outline-transparent`}
          >
            <Trash2 size={16} />
            Cancel Order
          </MainButton>
        </div>
      </div>

      <button className="rounded-full bg-white p-2 shadow-lg hover:bg-black-5">
        <X size={20} className="text-black-60" />
      </button>
    </div>
  )
}
