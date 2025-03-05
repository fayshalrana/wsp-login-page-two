import { Edit2, Table2, Trash2, X } from "lucide-react"
import { MainButton } from "@/components/mainButton"
import { OrderDetails } from "@/components/delivery-order/order-details"
import { OrderSummary } from "@/components/delivery-order/order-summary"

export function OrderContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-auto bg-black-5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Order Details</h1>
        <div className="flex items-center gap-2">
          <MainButton
            variant="secondary"
            className="flex items-center gap-2 rounded-full border border-black-5 bg-transparent px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            <Edit2 size={16} />
            Edit Order
          </MainButton>
          <MainButton
            variant="secondary"
            className="flex items-center gap-2 rounded-full border border-black-5 bg-transparent px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            <Table2 size={16} />
            Change Table
          </MainButton>
          <MainButton
            variant="secondary"
            className="flex items-center gap-2 rounded-full border border-black-5 bg-transparent px-4 py-2 text-sm hover:bg-black hover:text-white"
          >
            <Trash2 size={16} />
            Cancel Order
          </MainButton>
          <button className="rounded-full bg-white p-2 shadow-lg hover:bg-black-5">
            <X size={20} className="text-black-60" />
          </button>
        </div>
      </div>

      {/* Order Info */}
      <OrderDetails />

      {/* Order Summary */}
      <OrderSummary />
    </div>
  )
} 