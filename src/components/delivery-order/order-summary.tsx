import { Printer } from "lucide-react"
import { fontBodyNormal } from "@/styles/typography"
import { MainButton } from "@/components/mainButton"

export function OrderSummary() {
  const summary = [
    { label: "Subtotal", value: "$76.00" },
    { label: "Order Discount", value: "$0.00", textColor: "text-red-500" },
    { label: "Taxable Amount", value: "$0.00" },
    { label: "Tax (VAT 3%)", value: "$0.00" },
    { label: "Grand Total", value: "$76.00", isTotal: true },
  ]

  return (
    <div className="w-[280px]">
      <div className="flex flex-col gap-2 rounded-3 bg-[#FFF5F5] p-4">
        {summary.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              item.isTotal ? "mt-2 pt-2 border-t border-black-10" : ""
            }`}
          >
            <span className={`${fontBodyNormal} text-black-60`}>
              {item.label}
            </span>
            <span
              className={`${fontBodyNormal} ${
                item.textColor || "text-black-100"
              }`}
            >
              {item.value}
            </span>
          </div>
        ))}

        <div className="mt-2 flex items-center justify-between">
          <span className={`${fontBodyNormal} text-black-60`}>Total</span>
          <span className={`${fontBodyNormal}`}>$76.00</span>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <button className="rounded-full bg-white p-2 hover:bg-black-5">
            <Printer size={20} className="text-black-60" />
          </button>
          <button className="rounded-full bg-black-5 px-3 py-1 text-sm hover:bg-black-10">
            + DISC%
          </button>
        </div>

        <MainButton
          variant="primary"
          className="mt-2 w-full rounded-full bg-green-600 py-3 hover:bg-green-700"
        >
          Pay Bill
        </MainButton>

        <div className="mt-4">
          <span className="text-sm text-black-60">KOTs</span>
          <div className="mt-1 flex gap-2">
            <span className="rounded-full bg-black-5 px-3 py-1 text-sm">Kitchen</span>
            <span className="rounded-full bg-black-5 px-3 py-1 text-sm">Bar</span>
          </div>
        </div>
      </div>
    </div>
  )
} 