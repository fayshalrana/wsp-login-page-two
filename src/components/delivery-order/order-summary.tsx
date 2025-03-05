import {
  Check,
  GlassWater,
  Pencil,
  Plus,
  Printer,
  Utensils,
} from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontBodyNormal, fontButtonSmall } from "@/styles/typography"

// Define the type for menu items
type MenuItem = {
  id: string
  name: string
  notes?: string
  quantity: number
  price: number
  totalPrice: number
  discount?: number
}

// Sample data array
const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Buffalo Burger",
    notes: "Pickles: No",
    quantity: 1,
    price: 22.5,
    totalPrice: 22.5,
  },
  {
    id: "2",
    name: "Cheese Burger",
    notes: "Size: Small, Cheese: A little bit, Salt: No",
    quantity: 1,
    price: 22.5,
    totalPrice: 22.5,
  },
  {
    id: "3",
    name: "Double Chicken Burger + French fries",
    quantity: 2,
    price: 22.5,
    totalPrice: 22.5,
  },
  {
    id: "4",
    name: "Soda",
    quantity: 8,
    price: 2.25,
    totalPrice: 20.0,
  },
  {
    id: "5",
    name: "Texas Meatover",
    notes: "Size: Small, Cheese: A little bit, Salt: No",
    quantity: 1,
    price: 16.5,
    totalPrice: 33.0,
    discount: 2.0,
  },
]

export function OrderSummary() {
  return (
    <div className="flex gap-2">
      {/* Items Table */}
      <div className="flex-1 rounded-3 bg-white p-4">
        {/* Table Header */}
        <div className="mb-2 grid grid-cols-[1fr_60px_80px_80px_100px] items-center gap-2 rounded-3 bg-black-5 px-3 py-2">
          <div className="text-sm text-black-60">Items Summary</div>
          <div className="text-center text-sm text-black-60">QTY</div>
          <div className="text-left text-sm text-black-60">Price</div>
          <div className="text-left text-sm text-black-60">Total Price</div>
          <div className="text-right text-sm text-black-60">Discount</div>
        </div>

        {/* Table Body */}
        <div className="flex flex-col divide-y divide-black-10">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1fr_60px_80px_80px_100px] items-center gap-2 py-3"
            >
              <div>
                <p className={fontBodyNormal}>{item.name}</p>
                {item.notes && (
                  <p className={`${fontBodyNormal} text-sm text-black-60`}>
                    {item.notes}
                  </p>
                )}
              </div>
              <div className="text-center">{item.quantity}</div>
              <div className="text-left">${item.price.toFixed(2)}</div>
              <div className="text-left">${item.totalPrice.toFixed(2)}</div>
              <div className="flex items-center justify-end gap-1">
                {item.discount ? (
                  <>
                    <span className="text-sm text-green-500">
                      ${item.discount.toFixed(2)}
                    </span>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black-20 hover:bg-black-5">
                      <Pencil size={14} className="text-black-100" />
                    </button>
                  </>
                ) : (
                  <button className="flex h-8 w-8 items-center justify-center rounded-full border border-black-20 hover:bg-black-5">
                    <Plus size={14} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="w-1/3 flex-none rounded-3 bg-white p-4">
        {/* Summary Details */}
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

        {/* Discount Button */}
        <button className="mt-3 flex items-center gap-1 rounded-full bg-black-5 px-3 py-1.5 text-sm hover:bg-black-10">
          <Plus size={14} />
          <span className={`${fontButtonSmall}`}>DISC%</span>
        </button>

        {/* Total */}
        <div className="mt-3 flex justify-between">
          <span className="text-sm font-medium">Total</span>
          <span className="text-sm font-medium">$76.00</span>
        </div>

        {/* Print and Pay Bill */}
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

        {/* Divider */}
        <div className="my-4 h-[1px] w-full bg-black-10" />

        {/* KOTs */}
        <div>
          <span className="text-sm text-black-60">KOTs</span>
          <div className="mt-2 flex gap-2">
            <button className="flex items-center gap-1.5 rounded-full bg-black-5 px-3 py-1.5 text-sm hover:bg-black-10">
              <Utensils size={16} className="text-black-60" />
              <span>Kitchen</span>
            </button>
            <button className="flex items-center gap-1.5 rounded-full bg-black-5 px-3 py-1.5 text-sm hover:bg-black-10">
              <GlassWater size={16} className="text-black-60" />
              <span>Bar</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
