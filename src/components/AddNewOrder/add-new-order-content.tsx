"use client"

import { useState } from "react"
import { ChevronDown, Plus, Table2 } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontTitle1 } from "@/styles/typography"

import { Header } from "./header"
import { MenuItemCard } from "./menu-item-card"
import { CartItem, MenuItem } from "./types"

interface AddNewOrderContentProps {
  menuItems: MenuItem[]
  onAddToCart: (item: MenuItem) => void
  cartItems: CartItem[]
  isTableSelectOpen: boolean
}

export function AddNewOrderContent({
  menuItems,
  onAddToCart,
  cartItems,
  isTableSelectOpen,
}: AddNewOrderContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    "main menu" | "special menu"
  >("main menu")
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)
  const [isGridView, setIsGridView] = useState(true)

  return (
    <div className={`flex h-full ${isTableSelectOpen ? "hidden" : ""}`}>
      {/* Left Side - Menu Items */}
      <div className="flex w-full flex-col border-r border-black/5">
        {/* Fixed Header */}
        <div className="py-4 pl-4">
          <Header
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedMenuItem={selectedMenuItem}
            onMenuItemSelect={setSelectedMenuItem}
            onGridViewToggle={setIsGridView}
          />
        </div>

        {/* Scrollable Menu Items Grid */}
        <div className="flex-1 overflow-hidden">
          <div className="h-full overflow-y-auto p-4">
            <div
              className={`grid ${isGridView ? "grid-cols-5" : "grid-cols-4"} gap-4`}
            >
              {menuItems.map((item) => {
                const cartItem = cartItems.find(
                  (cartItem) => cartItem.id === item.id
                )
                return (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    onAddToCart={onAddToCart}
                    quantity={cartItem?.quantity}
                    isGridView={isGridView}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
