"use client"

import { useState } from "react"

import { CategoryHeader } from "@/components/menu-management/categoryHeader"
import { CategoryTabs } from "@/components/menu-management/categoryTabs"
import { MenuManagementHeader } from "@/components/menu-management/header"
import { MenuItemGrid } from "@/components/menu-management/menuItemGrid"

export default function MenuManagementPage() {
  const [selectedService, setSelectedService] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("breakfast")
  const [searchQuery, setSearchQuery] = useState("")
  const [isCategoryActive, setIsCategoryActive] = useState(true)
  const [selectedMenuItem, setSelectedMenuItem] = useState<string | null>(null)

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedMenuItem(null)
  }

  const handleMenuItemSelect = (itemId: string) => {
    setSelectedMenuItem(itemId)
  }

  return (
    <div className="flex h-screen flex-col gap-[var(--spacing-4)] p-[var(--spacing-4)]">
      <MenuManagementHeader
        selectedService={selectedService}
        onServiceChange={setSelectedService}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <CategoryTabs
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        selectedMenuItem={selectedMenuItem}
        onMenuItemSelect={handleMenuItemSelect}
      />

      <CategoryHeader
        title='Whole "Burgers" Category'
        itemCount={12}
        isActive={isCategoryActive}
        onToggleActive={setIsCategoryActive}
      />

      <MenuItemGrid
        searchQuery={searchQuery}
        selectedService={selectedService}
        categoryActive={isCategoryActive}
      />
    </div>
  )
}
