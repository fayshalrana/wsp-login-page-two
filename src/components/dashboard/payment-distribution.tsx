import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
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
  // Convert data for Recharts
  const chartData = data.map(item => ({
    name: item.method,
    value: item.amount,
    color: item.color
  }))

  return (
    <div className="rounded-xl bg-white p-6">
      <h2 className={`${fontTitle2} mb-6`}>Payment Type Distribution</h2>
      <div className="flex items-center gap-8">
        <div className="relative h-[200px] w-[200px]">
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
              <p className={`${fontTitle3}`}>
                ${total.toLocaleString()}
              </p>
              <p className="text-sm text-black/60">Total</p>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div 
                className="h-1.5 w-8 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="min-w-[80px] text-sm">{item.method}</span>
              <span className="text-sm font-medium">
                ${item.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 