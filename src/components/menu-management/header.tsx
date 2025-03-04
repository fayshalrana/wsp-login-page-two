import { Badge } from "@/components/badge"
import { fontTitle1 } from "@/styles/typography"

import SearchInput from "../searchInput"

interface ServiceOption {
  id: string
  label: string
  count: number
}

const serviceOptions: ServiceOption[] = [
  { id: "all", label: "All Services", count: 48 },
  { id: "dine-in", label: "Dine-in", count: 32 },
  { id: "delivery", label: "Delivery", count: 28 },
  { id: "pickup", label: "Pickup", count: 24 },
]

interface HeaderProps {
  selectedService: string
  onServiceChange: (service: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function MenuManagementHeader({
  selectedService,
  onServiceChange,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <div className="flex h-[72px] w-full items-center gap-4 lg:gap-8 py-[var(--spacing-3)] overflow-hidden">
      <h1 className={fontTitle1}>Menu Management</h1>

      <div className="flex flex-1 items-center justify-center">
        <div className="flex items-center gap-4 rounded-full p-1">
          {serviceOptions.map((option) => (
            <div key={option.id} className="relative">
              <button
                onClick={() => onServiceChange(option.id)}
                className={`relative flex items-center justify-center rounded-full px-4 py-3 transition-all ${
                  selectedService === option.id
                    ? "bg-black text-white shadow-none"
                    : "bg-white text-black shadow-lg hover:bg-black/5"
                }`}
              >
                {option.label}
                <Badge
                  count={option.count}
                  className={`w-[32px] h-[32px] absolute -right-2 -top-3 rounded-full bg-white text-black shadow-md`}
                  size="small"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-max lg:w-64 flex justify-end">
        <SearchInput
          query={searchQuery}
          setQuery={onSearchChange}
          width="w-full"
          alwaysOpen={false}
        />
      </div>
    </div>
  )
}
