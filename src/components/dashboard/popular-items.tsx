import { fontBodyBold, fontTitle2 } from "@/styles/typography"

interface PopularItem {
  name: string
  orders: number
}

interface PopularItemsProps {
  items: PopularItem[]
}

export function PopularItems({ items }: PopularItemsProps) {
  return (
    <div className="rounded-xl bg-white p-6">
      <h2 className={`${fontTitle2} mb-4`}>Popular Items</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg border border-black/5 p-4">
            <p className={fontBodyBold}>{item.name}</p>
            <p className="mt-1 text-sm text-black/60">Orders: {item.orders}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
