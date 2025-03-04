import { fontCaptionBold, fontCaptionNormal } from "@/styles/typography"

import ToggleSwitch from "../toggleSwitch"

interface CategoryHeaderProps {
  title: string
  itemCount: number
  isActive: boolean
  onToggleActive: (active: boolean) => void
}

export function CategoryHeader({
  title,
  itemCount,
  isActive,
  onToggleActive,
}: CategoryHeaderProps) {
  return (
    <div className="flex items-center justify-between bg-[#FFF7F7] px-4 py-[23.5px] rounded-3 ">
      <div className="flex items-center gap-2">
        <h2 className={fontCaptionBold}>{title}</h2>
        <span className={`${fontCaptionNormal} font-normal text-black-60`}>
          {itemCount} items
        </span>
      </div>

      <div className="flex items-center gap-2">
        <ToggleSwitch
          checked={isActive}
          onChange={() => onToggleActive(!isActive)}
        />
        <span className={`${fontCaptionNormal} text-black-100`}>
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>
    </div>
  )
}
