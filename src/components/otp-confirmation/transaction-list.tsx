import { cn } from "@/lib/utils"
import SearchInput from "@/components/searchInput"
import {
  fontBodyNormal,
  fontCaptionNormal,
  fontHeadline,
} from "@/styles/typography"

import avatar from "../../../public/rider-otp-img.svg"

const transactions = [
  {
    id: 1,
    name: "Nasser Alsubai",
    date: "9 Feb 2024",
    time: "10:24",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Nguyen, Shane",
    date: "9 Feb 2024",
    time: "10:20",
    avatar: avatar,
  },
  {
    id: 3,
    name: "Flores, Juanita",
    date: "9 Feb 2024",
    time: "10:04",
    initial: "S",
  },
  {
    id: 4,
    name: "Miles, Esther",
    date: "9 Feb 2024",
    time: "09:30",
    avatar: avatar,
  },
  {
    id: 5,
    name: "Miles, Esther",
    date: "9 Feb 2024",
    time: "09:26",
    avatar: avatar,
  },
  {
    id: 6,
    name: "Black, Marvin",
    date: "9 Feb 2024",
    time: "09:20",
    avatar: avatar,
  },
  {
    id: 7,
    name: "Cooper, Kristin",
    date: "9 Feb 2024",
    time: "09:18",
    avatar: avatar,
  },
  {
    id: 8,
    name: "Flores, Juanita",
    date: "9 Feb 2024",
    time: "09:07",
    avatar: avatar,
  },
  {
    id: 9,
    name: "Black, Marvin",
    date: "8 Feb 2024",
    time: "22:20",
    avatar: avatar,
  },
  {
    id: 10,
    name: "Henry, Arthur",
    date: "8 Feb 2024",
    time: "22:17",
    avatar: avatar,
  },
]

interface TransactionListProps {
  selectedId: number
  onSelect: (id: number) => void
}

export function TransactionList({
  selectedId,
  onSelect,
}: TransactionListProps) {
  return (
    <div className="flex h-full flex-col bg-transparent">
      {/* Header - Fixed */}
      <div className="pt-[var(--spacing-2)] pb-[var(--spacing-4)]">
        <div className="flex items-center justify-between gap-2 pt-[var(--spacing-3)] px-[var(--spacing-4)]">
          <div className="flex items-center gap-2">
            <h1 className={cn(fontHeadline, "text-[var(--text-black-100)]")}>
              Pending
            </h1>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--black-background-100)] text-xs text-white">
              1
            </span>
          </div>
          <SearchInput
            query=""
            setQuery={() => {}}
            width="w-64"
            alwaysOpen={false}
          />
        </div>
      </div>

      {/* Transaction List - Scrollable */}
      <div className="scrollbar-hide flex-1 overflow-y-auto py-[var(--spacing-4)] pt-0">
        <div className="flex flex-col">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              onClick={() => onSelect(transaction.id)}
              className={cn(
                "flex cursor-pointer items-center gap-3 border-b px-[var(--spacing-4)] py-[var(--spacing-3)] transition-colors hover:bg-white",
                selectedId === transaction.id && "bg-white"
              )}
            >
              {/* Avatar */}
              <div className="h-10 w-10">
                <div className="h-full w-full overflow-hidden rounded-full bg-[var(--black-background-10)]">
                  <img
                    src="/rider-otp-img.svg"
                    alt={transaction.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Date */}
              <div className="flex flex-1 flex-col">
                <span
                  className={cn(fontBodyNormal, "text-[var(--text-black-100)]")}
                >
                  {transaction.name}
                </span>
                <div className="flex items-center gap-1">
                  <span
                    className={cn(
                      fontCaptionNormal,
                      "text-[var(--text-black-60)]"
                    )}
                  >
                    {transaction.date}
                  </span>
                  <span
                    className={cn(
                      fontCaptionNormal,
                      "text-[var(--text-black-60)]"
                    )}
                  >
                    —
                  </span>
                  <span
                    className={cn(
                      fontCaptionNormal,
                      "text-[var(--text-black-60)]"
                    )}
                  >
                    {transaction.time}
                  </span>
                </div>
              </div>

              {/* ID Number and Red Dot - Only show for first item */}
              {transaction.id === 1 && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <span
                    className={cn(
                      fontBodyNormal,
                      "text-[var(--text-black-60)]"
                    )}
                  >
                    674951
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
// Helper function to get initials
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}
