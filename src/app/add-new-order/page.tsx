import { useState } from "react"

import { AddNewOrderContent } from "@/components/AddNewOrder/add-new-order-content"
import { TableSelectDialog } from "@/components/AddNewOrder/table-select-dialog"

export default function AddNewOrderPage() {
  const [isTableSelectOpen, setIsTableSelectOpen] = useState(false)

  return (
    <>
      <AddNewOrderContent
        menuItems={menuItems}
        onAddToCart={handleAddToCart}
        cartItems={cartItems}
        isTableSelectOpen={isTableSelectOpen}
      />
      <TableSelectDialog
        isOpen={isTableSelectOpen}
        onClose={() => setIsTableSelectOpen(false)}
        onSelect={(table) => {
          handleTableSelect(table)
          setIsTableSelectOpen(false)
        }}
      />
    </>
  )
}
