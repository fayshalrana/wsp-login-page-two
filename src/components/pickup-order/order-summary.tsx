import { GlassWater, Plus, Printer, Utensils } from "lucide-react"
import { MainButton } from "@/components/mainButton"

export function OrderSummary() {
  return (
    <div className="w-1/3 lg:w-1/4 flex-none rounded-3 bg-white p-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm text-black-60">Subtotal</span>
          <span className="text-sm font-medium">$76.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-black-60">Order Discount</span>
          <span className="text-sm font-medium text-green-500">$5.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-black-60">Taxable Amount</span>
          <span className="text-sm font-medium text-red-500">$5.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-black-60">Tax (VAT 3%)</span>
          <span className="text-sm font-medium text-red-500">$0.00</span>
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-sm text-black-60">Grand Total</span>
          <span className="text-sm font-medium">$76.00</span>
        </div>
      </div>

      <button className="mt-3 flex items-center gap-1 rounded-full bg-black-5 px-3 py-1.5 text-sm hover:bg-black-10">
        <Plus size={14} />
        <span>DISC%</span>
      </button>

      <div className="mt-3 flex justify-between">
        <span className="text-sm font-medium">Total</span>
        <span className="text-sm font-medium">$76.00</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button className="rounded-full bg-black-5 p-2 hover:bg-black-10">
          <Printer size={20} className="text-black-60" />
        </button>
        <MainButton
          variant="primary"
          className="flex-1 rounded-full bg-green-600 py-2.5 text-sm hover:bg-green-700"
        >
          Pay Bill
        </MainButton>
      </div>

      <div className="my-4 h-[1px] w-full bg-black-10" />

      <div>
        <span className="text-sm text-black-60">KOTs</span>
        <div className="mt-2 flex gap-2">
          <button className="flex items-center gap-1.5 rounded-full bg-black-5 px-3 py-1.5 text-sm text-bold hover:bg-black-10">
            <Utensils size={16} className="text-black-60" />
            <span>Kitchen</span>
          </button>
          <button className="flex items-center gap-1.5 rounded-full bg-black-5 px-3 py-1.5 text-sm text-bold hover:bg-black-10">
            <GlassWater size={16} className="text-black-60" />
            <span>Bar</span>
          </button>
        </div>
      </div>
    </div>
  )
} 