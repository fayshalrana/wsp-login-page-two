import { useState } from "react"
import { fontBodyNormal, fontBodyBold, fontCaptionBold } from "@/styles/typography"
import ToggleSwitch from "../toggleSwitch"

interface MenuItem {
  id: string
  title: string
  price: number
  isActive: boolean
}

const menuItems: MenuItem[] = [
  { id: "1", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "2", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "3", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "4", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "5", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "6", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "7", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "8", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "9", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "10", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "11", title: "Double Cheese", price: 22.50, isActive: true },
  { id: "12", title: "Double Cheese", price: 22.50, isActive: true },
  // Add more items...
]

interface MenuItemGridProps {
  searchQuery: string
  selectedService: string
  categoryActive: boolean
}

export function MenuItemGrid({
  searchQuery,
  selectedService,
  categoryActive,
}: MenuItemGridProps) {
  const [items, setItems] = useState(menuItems)

  const toggleItemActive = (itemId: string) => {
    if (!categoryActive) return // Prevent toggling if category is inactive
    setItems(items.map(item => 
      item.id === itemId 
        ? { ...item, isActive: !item.isActive }
        : item
    ))
  }

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="flex h-full min-h-[112px] w-full flex-col gap-4 rounded-3 bg-white-60 p-4"
        >
          <div className="flex flex-col gap-1">
            <p className={fontBodyBold}>{item.title}</p>
            <p className={`${fontCaptionBold} text-black-60`}>
              ${item.price.toFixed(2)}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className={`${fontBodyNormal} text-black-60`}>
              {item.isActive ? "Active" : "Inactive"}
            </span>
            <ToggleSwitch
              checked={item.isActive}
              onChange={() => toggleItemActive(item.id)}
              disabled={!categoryActive} // Disable if category is inactive
            />
          </div>
        </div>
      ))}
    </div>
  )
}
