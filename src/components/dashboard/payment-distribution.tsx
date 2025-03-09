import { fontTitle2, fontTitle3 } from "@/styles/typography"

interface PaymentType {
  method: string
  amount: number
  color: string
}

interface PaymentDistributionProps {
  data: PaymentType[]
  total: number
}

export function PaymentDistribution({ data, total }: PaymentDistributionProps) {
  return (
    <div className="rounded-xl bg-white p-6">
      <h2 className={`${fontTitle2} mb-6`}>Payment Type Distribution</h2>
      <div className="flex items-center gap-8">
        <div className="relative h-[200px] w-[200px]">
          {/* This is a simplified donut chart - you might want to use a charting library */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm text-black/60">Total</p>
              <p className={fontTitle3}>${total.toLocaleString()}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm">{item.method}</span>
              <span className="text-sm font-medium">${item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 