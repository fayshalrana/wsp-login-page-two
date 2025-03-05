import { Pencil, Plus } from "lucide-react"
import { fontBodyNormal } from "@/styles/typography"

const menuItems = [
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

export function OrderItems() {
  return (
    <div className="flex-1 rounded-3 bg-white p-4">
      <div className="mb-2 grid grid-cols-[1fr_60px_80px_80px_100px] items-center gap-2 rounded-3 bg-black-5 px-3 py-2">
        <div className="text-sm text-black-60">Items Summary</div>
        <div className="text-center text-sm text-black-60">QTY</div>
        <div className="text-left text-sm text-black-60">Price</div>
        <div className="text-left text-sm text-black-60">Total Price</div>
        <div className="text-right text-sm text-black-60">Discount</div>
      </div>

      <div className="flex flex-col divide-y divide-black-10">
        {menuItems.map((item) => (
          <div key={item.id} className="grid grid-cols-[1fr_60px_80px_80px_100px] items-center gap-2 py-3">
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
  )
} 