import { Badge } from "@/components/badge"
import SearchInput from "@/components/searchInput"
import { fontTitle1 } from "@/styles/typography"

interface ServiceOption {
  id: string
  label: string
  count: number
}

const serviceOptions: ServiceOption[] = [
  { id: "tables", label: "Tables", count: 16 },
  { id: "delivery", label: "Delivery", count: 3 },
  { id: "pickup", label: "Pickup", count: 2 },
  { id: "aggregators", label: "Aggregators", count: 1 },
]

interface HeaderProps {
  selectedService: string
  onServiceChange: (service: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

export function LiveCounterHeader({
  selectedService,
  onServiceChange,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <div className="flex h-[96px] w-full items-center justify-between py-[var(--spacing-3)] lg:overflow-hidden">
      <h1 className={`${fontTitle1} shrink-0`}>Live Counter</h1>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="flex items-center gap-4 rounded-full p-1">
          {serviceOptions.map((option) => (
            <div key={option.id} className="relative">
              <button
                onClick={() => onServiceChange(option.id)}
                className={`relative flex items-center justify-center rounded-full px-4 py-3 text-[16px] transition-all ${
                  selectedService === option.id
                    ? "bg-black text-white shadow-none"
                    : "bg-white text-black shadow-sm hover:bg-black/5"
                }`}
              >
                {option.label}
                <Badge
                  count={option.count}
                  className={`absolute -right-2 -top-3 h-[32px] w-[32px] rounded-full bg-white text-black shadow-md`}
                  size="small"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-28 lg:w-64 shrink-0 flex justify-end">
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
