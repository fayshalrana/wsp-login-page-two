import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"

import { fontBodyBold, fontCaptionNormal, fontHeadline, fontTitle2, fontTitle3 } from "@/styles/typography"

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
  // Convert data for Recharts
  const chartData = data.map((item) => ({
    name: item.method,
    value: item.amount,
    color: item.color,
  }))

  return (
    <div className="rounded-xl bg-black-5 p-4">
      <h2 className={`${fontHeadline} font-medium text-black-100`}>Payment Type Distribution</h2>
      <div className="flex justify-around lg:justify-start items-center gap-8">
        <div className="relative h-[272px] w-[320px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className={`${fontTitle3}`}>${total.toLocaleString()}</p>
              <p className="text-sm text-black/60">Total</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4 w-[220px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between gap-1">
             <div className="flex items-center gap-1">
             <div
                className="h-2 w-5 rounded-full"
                style={{ backgroundColor: item.color }}
              /> 
              <span className={`min-w-[80px] ${fontCaptionNormal}`}>{item.method}</span>
             </div>
              <span className={`${fontBodyBold}`}>
                ${item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
