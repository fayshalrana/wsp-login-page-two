import { useEffect, useState } from "react"
import {
  Bar,
  BarChart,
  Cell,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts"

import { fontCaptionBold, fontTitle2 } from "@/styles/typography"

interface MonthData {
  month: string
  orders: number
}

interface CompletedOrdersChartProps {
  initialData: MonthData[]
}

const CustomBackground = (props: any) => {
  const { x, y, width, height } = props
  return (
    <g>
      {/* Solid gray background */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="#F3F3F3"
        rx={25}
        ry={25}
      />
      {/* Striped overlay */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill="url(#stripePattern)"
        fillOpacity={0.4}
        rx={25}
        ry={25}
      />
    </g>
  )
}

const CustomBar = (props: any) => {
  const { x, y, width, height, payload } = props
  const [isHovered, setIsHovered] = useState(false)
  const isJune = payload.month === "Jun"

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={isJune ? "#FF5B36" : isHovered ? "#FF5B36" : "#FFFFFF"}
        rx={25}
        ry={25}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <g transform={`translate(${x + width / 2},${y + height - 20})`}>
        <rect
          x={-20}
          y={-25}
          width={40}
          height={40}
          rx={100}
          ry={100}
          fill={isHovered ? "#fff" : "#f3f3f3"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
        <text
          x={0}
          y={0}
          textAnchor="middle"
          fill={isJune ? "#FF5B36" : "#000000"}
          style={{
            fontSize: "12px",
            fontWeight: isJune ? 500 : 400,
          }}
        >
          {payload.month}
        </text>
      </g>
    </g>
  )
}

export function CompletedOrdersChart({
  initialData,
}: CompletedOrdersChartProps) {
  const [data, setData] = useState(initialData)

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/completed-orders")
        const newData = await response.json()
        setData(newData)
      } catch (error) {
        console.error("Failed to fetch updated data:", error)
      }
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="rounded-xl bg-black-5 px-4 pt-4">
      <h2 className={`${fontTitle2} mb-6`}>Completed Orders</h2>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
            barSize={48}
          >
            <defs>
              <pattern
                id="stripePattern"
                patternUnits="userSpaceOnUse"
                width="6"
                height="6"
                patternTransform="rotate(-45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="6"
                  stroke="#e6d3cf"
                  strokeWidth="8"
                />
              </pattern>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={false}
              dy={10}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={false}
              position={{ y: -40 }}
            />
            <Bar
              dataKey="orders"
              shape={<CustomBar />}
              background={<CustomBackground />}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload, coordinate }: any) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="absolute flex h-10 w-[50px] items-center justify-center rounded-3 bg-black before:absolute before:left-1/2 before:-bottom-[5px] before:rotate-45 before:h-[15px] before:w-[15px] before:-translate-x-1/2 before:bg-black before:rounded-[5px]"
        style={{
          left: coordinate.x, // Follow the cursor horizontally
          top: coordinate.y - 40, // Adjust tooltip position above cursor
          transform: "translate(-50%, -100%)", // Center the tooltip
          pointerEvents: "none", // Prevent blocking mouse events
          position: "absolute",
        }}
      >
        <span className={`${fontCaptionBold} text-white`}>
          {payload[0].value}
        </span>
      </div>
    )
  }
  return null
}
