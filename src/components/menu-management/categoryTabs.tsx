import { Badge } from "@/components/badge"

interface MenuItem {
  id: string
  label: string
  count: number
}

const menuItems: Record<string, MenuItem[]> = {
  breakfast: [
    { id: "kebab", label: "Kebab", count: 16 },
    { id: "burgers", label: "Burgers", count: 12 },
    { id: "pizza", label: "Pizza", count: 8 },
    { id: "soups", label: "Soups", count: 7 },
    { id: "salads", label: "Salads", count: 11 },
    { id: "pasta", label: "Pasta", count: 3 },
    { id: "desserts", label: "Desserts", count: 4 },
    { id: "sandwiches", label: "Sandwiches", count: 12 },
    { id: "drinks", label: "Drinks", count: 5 },
    { id: "seafood", label: "Seafood", count: 6 },
    { id: "meican", label: "Mexican", count: 9 },
    { id: "mxican", label: "Mexican", count: 9 },
    { id: "mexicn", label: "Mexican", count: 9 },
    { id: "mexian", label: "Mexican", count: 9 },
  ],
  lunch: [
    { id: "kebab", label: "Kebab", count: 16 },
    { id: "burgers", label: "Burgers", count: 12 },
    { id: "pizza", label: "Pizza", count: 8 },
    { id: "soups", label: "Soups", count: 7 },
    { id: "salads", label: "Salads", count: 11 },
    { id: "pasta", label: "Pasta", count: 3 },
  ],
  dinner: [
    { id: "kebab", label: "Kebab", count: 16 },
    { id: "burgers", label: "Burgers", count: 12 },
    { id: "pizza", label: "Pizza", count: 8 },
    { id: "soups", label: "Soups", count: 7 },
  ],
}

interface CategoryTabsProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  selectedMenuItem: string | null
  onMenuItemSelect: (itemId: string) => void
}

export function CategoryTabs({
  selectedCategory,
  onCategoryChange,
  selectedMenuItem,
  onMenuItemSelect,
}: CategoryTabsProps) {
  const categories = ["Breakfast", "Lunch", "Dinner"]

  return (
    <div className="flex flex-col">
      {/* Pink background container */}
      <div className="rounded-t-2xl pb-4 pt-3">
        {/* Category tabs */}
        <div className="ml-7 flex">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category.toLowerCase())}
              className={`relative rounded-tl-5 rounded-tr-5 border-none px-6 py-5 text-base font-medium outline-none transition-colors ${
                selectedCategory === category.toLowerCase()
                  ? "bg-black-10 before:absolute before:-left-3 before:bottom-0 before:h-3 before:w-3 before:bg-left-angle before:content-[''] after:absolute after:-right-3 after:bottom-0 after:h-3 after:w-3 after:bg-right-angle after:content-['']"
                  : "text-[var(--black-60)] hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrollable menu items with gradient overlay */}
        <div className="relative overflow-hidden rounded-[var(--round-5)]">
          <div className="scrollbar-hide flex overflow-x-auto rounded-[var(--round-5)] bg-black-10 p-4 z-9">
            <div className="flex gap-4 pb-2">
              {menuItems[selectedCategory]?.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onMenuItemSelect(item.id)}
                  className={`relative flex items-center justify-center rounded-full px-4 py-3 transition-all ${
                    selectedMenuItem === item.id
                      ? "bg-black text-white shadow-none"
                      : "bg-white text-black shadow-sm hover:bg-white/90"
                  }`}
                >
                  {item.label}
                  <Badge
                    count={item.count}
                    size="small"
                    className={`absolute -right-2 -top-3 z-0 h-[32px] w-[32px] rounded-full bg-white text-black shadow-md`}
                    variant={selectedMenuItem === item.id ? "white" : "black"}
                  />
                </button>
              ))}
            </div>
          </div>
          {/* Gradient overlay */}
          <div
  className="pointer-events-none absolute bottom-0 right-0 top-0 w-16"
  style={{ background: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 100%)" }}
/>
        </div>
      </div>
    </div>
  )
}
