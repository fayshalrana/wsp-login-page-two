import * as React from "react"
import { useEffect, useRef, useState } from "react"
import { ChevronDownIcon } from "@/icons"

import { cn } from "@/lib/utils"
import IconWrapper from "@/components/iconWrapper"
import {
  fontBodyBold,
  fontBodyNormal,
  fontCaptionBold,
  fontCaptionNormal,
} from "@/styles/typography"

// Use a generic type T for value
export interface CustomSelectProps<T> {
  options: { value: T; label: string }[]
  sortByText: string
  menuPosition?: "left" | "right"
  smallScreenMenuPosition?: "left" | "right"
  width?: string
  onOptionSelect: (option: { value: T; label: string }) => void
  selectWidth?: string
  defaultValue?: { value: T; label: string }
  menuWidth?: string
}

export function CustomSelect<T>({
  options,
  sortByText,
  onOptionSelect,
  defaultValue,
}: CustomSelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<{
    value: T
    label: string
  } | null>(defaultValue || null)
  const selectRef = useRef<HTMLDivElement>(null)

  const handleOptionClick = (option: { value: T; label: string }) => {
    setSelectedOption(option)
    onOptionSelect(option) // Invoke the callback with the selected option
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const truncateText = (text: string) => {
    return text.length > 18 ? text.substring(0, 18) + "..." : text
  }

  return (
    <div className="relative z-50 inline-block lg:w-[165px]" ref={selectRef}>
      {/* Mobile version (icon only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-black-10 bg-white p-3 hover:bg-black/5 lg:hidden"
      >
        <div className="flex h-5 w-5 flex-col items-center justify-center gap-[3px]">
          <div className="h-[2px] w-5 bg-black"></div>
          <div className="h-[2px] w-4 bg-black"></div>
          <div className="h-[2px] w-3 bg-black"></div>
        </div>
      </button>

      {/* Desktop version */}
      <div
        className="hidden h-[48px] cursor-pointer items-center justify-between rounded-6 border border-black-10 bg-white-60 px-4 lg:flex lg:w-[165px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center overflow-hidden">
          <span className="w-full">
            {selectedOption ? (
              <div className="flex flex-col">
                <span className="text-xs text-black-60">{sortByText}</span>
                <span className="truncate text-sm font-medium text-black-100">
                  {selectedOption.label}
                </span>
              </div>
            ) : (
              sortByText
            )}
          </span>
        </div>
        <IconWrapper Component={ChevronDownIcon} size="20" />
      </div>

      {isOpen && (
        <ul className="absolute right-0 mt-1 w-auto rounded-5 border border-black-10 bg-white-100 py-1 text-black-60 lg:w-[165px]">
          {options.map((option) => (
            <li
              key={option.value as React.Key}
              className={cn(
                "cursor-pointer truncate px-4 py-3 text-sm hover:bg-black-5",
                selectedOption?.value === option.value &&
                  "font-medium text-brand"
              )}
              onClick={() => {
                handleOptionClick(option)
                setIsOpen(false)
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
