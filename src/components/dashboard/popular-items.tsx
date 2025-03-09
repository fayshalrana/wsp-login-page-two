import { fontBodyBold, fontCaptionBold, fontCaptionNormal, fontHeadline, fontTitle2 } from "@/styles/typography"

interface PopularItem {
  name: string
  orders: number
}

interface PopularItemsProps {
  items: PopularItem[]
}

export function PopularItems({ items }: PopularItemsProps) {
  return (
    <div className="rounded-xl bg-black-5 p-4">
      <h2 className={`${fontHeadline} font-medium text-black-100 mb-4`}>Popular Items</h2>
      <div className="grid grid-cols-6 lg:grid-cols-2 gap-2">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col justify-between h-[122px] lg:gap-5 gap-2 rounded-3 border border-black/5 bg-white-60 p-4">
            <p className={fontCaptionBold}>{item.name}</p>
            <p className={`${fontCaptionNormal} text-black-60`}>Orders: <span className="text-black">{item.orders}</span></p>
          </div>
        ))}
      </div>
    </div>
  )
}
