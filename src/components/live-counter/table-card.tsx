import Image from "next/image"

import {
  fontBodyNormal,
  fontCaptionNormal,
  fontTitle2,
  fontHeadline
} from "@/styles/typography"

import { TableData } from "./types"

interface TableCardProps {
  table: TableData
  isGridView: boolean
}

export function TableCard({ table, isGridView }: TableCardProps) {
  const isReady = table.status === "Ready"

  const borderStyle = {
    Ordered:
      "border-l-4 border-l-[var(--border-status-livecounter-ordered)] border-dashed",
    Free: "border-l-4 border-l-[#15803D] border-solid",
    Ready: "border-l-4 border-l-[#FF5C41] border-solid",
  }[table.status]

  if (!isGridView) {
    return (
      <div
        className={`flex h-12 w-[70px] items-center justify-center rounded-3 bg-white ${borderStyle}`}
      >
        <h3 className={`${fontHeadline} font-bold`}>A{table.number}</h3>
      </div>
    )
  }

  return (
    <div
      className={`flex flex-col gap-6 rounded-3 bg-white p-4 ${borderStyle}`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col">
          <h3 className={`${fontTitle2} font-bold`}>A{table.number}</h3>
          <span className={`${fontCaptionNormal} text-black-60`}>
            {table.location}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`${fontBodyNormal}`}>{table.occupancy}</span>
          <Image
            src="/userIcon.svg"
            alt="Receipt"
            width={15}
            height={15}
            className="text-[var(--icon-black-40)]"
          />
        </div>
      </div>
      <div className="mt-2 flex items-end justify-between">
        <div>
          <div className={`${fontCaptionNormal} text-black-100`}>
            {table.status}
          </div>
          <div className={`${fontCaptionNormal} text-black-60`}>
            {table.timeStatus}
          </div>
        </div>
        {table.orders > 0 && (
          <div className="flex items-center gap-1">
            <span className={`${fontBodyNormal}`}>{table.orders}</span>
            <Image
              src="/lab_profile.svg"
              alt="Receipt"
              width={20}
              height={20}
              className="text-[var(--icon-black-40)]"
            />
          </div>
        )}
      </div>
    </div>
  )
}
