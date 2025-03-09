"use client"

import { useState } from "react"

import { AddNewOrderContent } from "@/components/AddNewOrder/add-new-order-content"
import { Sidebar } from "@/components/AddNewOrder/sidebar"
import { CartItem, MenuItem } from "@/components/AddNewOrder/types"

const menuItemsData: MenuItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Sauce: "A lot",
    },
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    price: 14.99,
    inCart: false,
    size: "Medium",
    modifiers: {
      "Extra Cheese": "Yes",
    },
  },
  {
    id: "3",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "4",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "5",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "6",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "7",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "8",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "9",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  {
    id: "10",
    name: "BBQ Chicken Pizza",
    price: 15.99,
    inCart: false,
    size: "Large",
    modifiers: {
      Onions: "Extra",
    },
  },
  // ... you can add more menu items as needed
]

export default function AddNewOrderPage() {
  const [selectedType, setSelectedType] = useState<
    "Table" | "Pickup" | "Delivery"
  >("Table")
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>(menuItemsData)

  const handleAddToCart = (item: MenuItem) => {
    setMenuItems((prev) =>
      prev.map((menuItem) =>
        menuItem.id === item.id ? { ...menuItem, inCart: true } : menuItem
      )
    )

    // Check if item already exists in cart
    setCartItems((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        // If item exists, increase quantity
        return prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      }
      // If item doesn't exist, add it with quantity 1
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      // Remove item from cart
      setCartItems((prev) => prev.filter((item) => item.id !== id))
      // Update menu items to show it's not in cart
      setMenuItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, inCart: false } : item))
      )
    } else {
      // Update quantity
      setCartItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      )
    }
  }

  const handleRemoveAll = () => {
    setCartItems([])
    setMenuItems((prev) => prev.map((item) => ({ ...item, inCart: false })))
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        selectedType={selectedType}
        onTypeChange={setSelectedType}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveAll={handleRemoveAll}
      />

      {/* Main Content */}
      <div className="flex-1">
        <AddNewOrderContent
          menuItems={menuItems}
          onAddToCart={handleAddToCart}
          cartItems={cartItems}
        />
      </div>
    </div>
  )
}
