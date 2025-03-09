import { useState } from "react"
import { PersonIcon, TableBarIcon } from "@/icons"
import { ChevronDown, Plus, Trash2 } from "lucide-react"

import { Input } from "@/components/input"
import { MainButton } from "@/components/mainButton"
import {
  fontBodyNormal,
  fontButtonSmall,
  fontCaptionBold,
  fontTitle1,
} from "@/styles/typography"

import { CartItemCard } from "./cart-item"
import { GuestInfoDialog } from "./guest-info-dialog"
import { TableSelectDialog } from "./table-select-dialog"
import { CartItem } from "./types"

interface SidebarProps {
  selectedType: "Table" | "Pickup" | "Delivery"
  onTypeChange: (type: "Table" | "Pickup" | "Delivery") => void
  cartItems?: CartItem[]
  onUpdateQuantity?: (id: string, quantity: number) => void
  onRemoveAll?: () => void
}

export function Sidebar({
  selectedType,
  onTypeChange,
  cartItems = [],
  onUpdateQuantity = () => {},
  onRemoveAll = () => {},
}: SidebarProps) {
  const [tableNumber, setTableNumber] = useState("")
  const [guestInfo, setGuestInfo] = useState("")
  const [isGuestInfoDialogOpen, setIsGuestInfoDialogOpen] = useState(false)
  const [isTableSelectOpen, setIsTableSelectOpen] = useState(false)

  const total =
    cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) ?? 0

  const handleGuestInfoSave = (info: {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
  }) => {
    setGuestInfo(`${info.firstName} ${info.lastName}`)
  }

  const handleTableSelect = (table: string) => {
    setTableNumber(table)
  }

  return (
    <div className="py-4 pl-4">
      <div className="flex h-full w-[315px] flex-shrink-0 flex-col rounded-3 bg-white">
        <div className="p-4">
          {/* Title */}
          <h1 className={`${fontTitle1} mb-6`}>Add New Order</h1>

          {/* Order Type Tabs */}
          <div className="mb-6 flex gap-2">
            {["Table", "Pickup", "Delivery"].map((type) => (
              <button
                key={type}
                onClick={() => onTypeChange(type as typeof selectedType)}
                className={`${fontCaptionBold} rounded-full px-3 py-4 text-sm transition-colors ${
                  selectedType === type
                    ? "bg-[#FF5B36] text-white"
                    : "bg-transparent text-black hover:bg-black/5"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Table Number Input - Only show for Table type */}
          {selectedType === "Table" && (
            <div className="relative mb-4">
              <Input
                placeholder="Table Number"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                icon={TableBarIcon}
                onClick={() => setIsTableSelectOpen(true)}
                readOnly
              />
              <div
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
                onClick={() => setIsTableSelectOpen(true)}
              >
                <ChevronDown className="h-5 w-5 text-black/40" />
              </div>
            </div>
          )}

          {/* Guest Info Input */}
          <div className="relative mb-6">
            <Input
              placeholder="Add Guest Info"
              value={guestInfo}
              onChange={(e) => setGuestInfo(e.target.value)}
              icon={PersonIcon}
              onClick={() => setIsGuestInfoDialogOpen(true)}
              readOnly
            />
            <div
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
              onClick={() => setIsGuestInfoDialogOpen(true)}
            >
              <Plus className="h-5 w-5 text-black/40" />
            </div>
          </div>

          <GuestInfoDialog
            isOpen={isGuestInfoDialogOpen}
            onClose={() => setIsGuestInfoDialogOpen(false)}
            onSave={handleGuestInfoSave}
          />

          <TableSelectDialog
            isOpen={isTableSelectOpen}
            onClose={() => setIsTableSelectOpen(false)}
            onSelect={handleTableSelect}
          />

          {/* Cart Section */}
          {cartItems.length > 0 && (
            <>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`${fontCaptionBold} text-black-60`}>
                    Items
                  </span>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                    {cartItems.length}
                  </span>
                </div>
                <button
                  onClick={onRemoveAll}
                  className={`${fontButtonSmall}  flex items-center gap-1 text-[var(--text-semantic-red)]`}
                >
                  <Trash2 className="h-4 w-4" />
                  <span>Remove All</span>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Scrollable Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 pt-0">
          <div className="flex flex-col gap-3">
            {cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </div>
        </div>

        {/* Total and Place Order */}
        {cartItems.length > 0 && (
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className={`${fontBodyNormal}`}>Total</span>
              <span className={`${fontBodyNormal}`}>${total.toFixed(2)}</span>
            </div>
            <MainButton variant="primary" className="w-full">
              Place Order
            </MainButton>
          </div>
        )}
      </div>
    </div>
  )
}
