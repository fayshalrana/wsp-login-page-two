import { Plus, Pencil } from "lucide-react"
import { fontBodyNormal, fontCaptionNormal } from "@/styles/typography"
import { OrderSummary } from "./order-summary"

export function OrderItems() {
  const items = [
    {
      name: "Buffalo Burger",
      notes: "PICKLES: No",
      qty: 1,
      price: 22.50,
      total: 22.50,
    },
    {
      name: "Cheese Burger",
      notes: "Size: Small, Cheese: A little bit, Salt: No",
      qty: 1,
      price: 22.50,
      total: 22.50,
    },
    {
      name: "Double Chicken Burger + French fries",
      qty: 2,
      price: 22.50,
      total: 22.50,
    },
    {
      name: "Soda",
      qty: 8,
      price: 2.25,
      total: 20.00,
    },
    {
      name: "Texas Meatover",
      notes: "Size: Small, Cheese: A little bit, Salt: No",
      qty: 1,
      price: 16.50,
      total: 33.00,
      discount: 2.00,
    },
  ]

  return (
    <div className="flex gap-4">
      {/* Items List - Left Side */}
      <div className="flex-1">
        <div className="mb-2 grid grid-cols-[1fr_80px_80px_80px_40px] gap-4 px-4 py-2 text-sm text-black-60">
          <div>Items Summary</div>
          <div className="text-center">QTY</div>
          <div className="text-right">Price</div>
          <div className="text-right">Total Price</div>
          <div></div>
        </div>
        
        <div className="flex flex-col rounded-3 bg-[#FFF5F5]">
          {items.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_80px_80px_80px_40px] gap-4 px-4 py-3 border-b border-black-10 last:border-none"
            >
              <div>
                <p className={fontBodyNormal}>{item.name}</p>
                {item.notes && (
                  <p className={`${fontCaptionNormal} text-black-60`}>{item.notes}</p>
                )}
              </div>
              <div className="text-center">{item.qty}</div>
              <div className="text-right">${item.price.toFixed(2)}</div>
              <div className="text-right">${item.total.toFixed(2)}</div>
              <div className="flex justify-center">
                {item.discount ? (
                  <button className="text-green-500">
                    <Plus size={16} />
                  </button>
                ) : (
                  <button className="text-black-60 hover:text-black-100">
                    <Plus size={16} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary - Right Side */}
      <OrderSummary />
    </div>
  )
} 