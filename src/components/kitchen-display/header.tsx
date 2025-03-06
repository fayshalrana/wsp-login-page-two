import SearchInput from "@/components/searchInput"
import { fontTitle1 } from "@/styles/typography"

interface HeaderProps {
  selectedStatus: string
  onStatusChange: (status: string) => void
  searchQuery: string
  onSearchChange: (query: string) => void
}

const statusOptions = [
  { id: "open", label: "Open", count: 16 },
  { id: "completed", label: "Completed", count: 185 },
]

export function KitchenDisplayHeader({
  selectedStatus,
  onStatusChange,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <div className="flex h-[96px] w-full items-center justify-between py-[var(--spacing-3)] overflow-hidden">
      <h1 className={`${fontTitle1} shrink-0`}>Kitchen Display</h1>

      <div className="flex flex-1 items-center justify-center px-4">
        <div className="flex items-center gap-4 p-1">
          {statusOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onStatusChange(option.id)}
              className={`relative flex items-center rounded-full px-4 py-3 text-sm transition-all ${
                selectedStatus === option.id
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black/5"
              }`}
            >
              {option.label}
              <span
                className={`absolute -top-2 -right-2 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-xs ${
                  selectedStatus === option.id
                    ? "bg-white text-black"
                    : "bg-white text-black"
                }`}
              >
                {option.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3 w-28 justify-end lg:w-64">
        <SearchInput
          query={searchQuery}
          setQuery={onSearchChange}
          width="w-64"
          alwaysOpen={false}
        />
      </div>
    </div>
  )
}
