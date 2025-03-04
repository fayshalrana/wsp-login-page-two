import React from "react"
import { cn } from "@/lib/utils"
import { fontBodyNormal } from "@/styles/typography"

interface ToggleSwitchProps {
  label?: string
  checked?: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean // Add disabled prop
  labelPosition?: "left" | "right"
  labelClassName?: string
  toggleContainerClassname?: string
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  checked = false,
  onChange,
  disabled = false, // Default to false
  labelPosition = "left",
  labelClassName,
  toggleContainerClassname,
}) => {
  return (
    <label
      className={cn(
        "flex items-center gap-2 cursor-pointer",
        labelPosition === "left" ? "flex-row" : "flex-row-reverse",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        toggleContainerClassname
      )}
    >
      {label && (
        <span className={cn(fontBodyNormal, "text-black-100", labelClassName)}>
          {label}
        </span>
      )}
      <div className="relative inline-block h-[31px] w-[51px]">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={(e) => !disabled && onChange(e.target.checked)}
          aria-checked={checked}
          disabled={disabled} // Apply disabled property
        />
        <div
          className={cn(
            "block h-[31px] w-full rounded-full transition-colors duration-300 ease-in-out",
            checked ? "bg-checked-green" : "bg-unchecked-grey",
            disabled && "bg-gray-300"
          )}
        />
        <div
          className={cn(
            "absolute left-[2px] top-[2px] h-[27px] w-[27px] transform rounded-full bg-white-100 transition-transform duration-300 ease-in-out shadow-[0px_3px_1px_0px_#0000000F,0px_3px_8px_0px_#00000026]",
            checked && "translate-x-[20px]"
          )}
        />
      </div>
    </label>
  )
}

export default ToggleSwitch
