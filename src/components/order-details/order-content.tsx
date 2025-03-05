import {
  Calendar,
  Edit2,
  Mail,
  MapPin,
  Phone,
  Table2,
  Tag,
  Trash2,
  User2,
  X,
} from "lucide-react"

import { OrderSummary } from "@/components/delivery-order/order-summary"
import { MainButton } from "@/components/mainButton"
import { fontBodyNormal, fontCaptionNormal, fontTitle3 } from "@/styles/typography"

interface InfoItemProps {
  label: string
  value: string
  status?: "ordered" | "paid"
  icon?: React.ReactNode
  tags?: string[]
}

function InfoItem({ label, value, status, icon, tags }: InfoItemProps) {
  return (
    <div className={`flex flex-col gap-4 rounded-3 bg-black-5 p-4`}>
      <div className="flex items-center gap-2">
        {icon}
        <span className={`${fontCaptionNormal} text-black-60`}>{label}</span>
      </div>
      <div
        className={`${fontBodyNormal} flex items-center justify-between gap-2`}
      >
        {value && (
          <span className={`${fontBodyNormal} text-black-100`}>{value}</span>
        )}
        {status && (
          <span
            className={`rounded-full px-2 py-1 text-xs ${
              status === "ordered"
                ? "right-auto bg-[var(--status-ordered-background)] text-white"
                : "bg-[#CFEAD1] text-[var(--text-semantic-green)]"
            }`}
          >
            {status === "ordered" ? "Ordered" : "Paid"}
          </span>
        )}
      </div>
    </div>
  )
}

function OrderDetailsSection() {
  return (
    <div className="flex gap-2">
      <div className="flex-1 grid grid-cols-3 gap-2">
        <InfoItem
          icon={<User2 size={20} className="text-black-60" />}
          label="User Name"
          value="Sarah Hermant"
        />
        <InfoItem
          icon={<Tag size={20} className="text-black-60" />}
          label="Order Number"
          value="211"
          status="paid"
        />
        <InfoItem
          icon={<div className="h-2 w-2 rounded-full bg-orange-500" />}
          label="Status"
          value=""
          status="ordered"
        />
       
      </div>

      <div className="lg:w-1/3">
      <InfoItem
          icon={<Calendar size={20} className="text-black-60" />}
          label="Date & Time"
          value="4 Mar, 2024 — 14:32"
        />
      </div>
    </div>
  )
}

export function OrderContent() {
  return (
    <div className="flex flex-1 flex-col gap-4 overflow-auto bg-black-5 p-4">
      {/* Header */}
      <div className="flex items-center justify-between gap-6">
        <h1 className={`${fontTitle3} flex-nowrap`}>Order Details</h1>
        <div className="flex items-center gap-2 flex-1 w-full justify-between">
         <div className="right-auto flex gap-2 items-center justify-start">
         <MainButton
            variant="secondary"
            className="border-black-5 flex items-center gap-2 rounded-full border bg-transparent px-4 py-2 border-black-10 hover:bg-black hover:text-white"
          >
            <Edit2 size={16} />
            Edit Order
          </MainButton>
          <MainButton
            variant="secondary"
            className="border-black-5 flex items-center gap-2 rounded-full border bg-transparent px-4 py-2 border-black-10 hover:bg-black hover:text-white"
          >
            <Table2 size={16} />
            Change Table
          </MainButton>
          <MainButton
            variant="secondary"
            className="border-black-5 flex items-center gap-2 rounded-full border bg-transparent px-4 py-2 border-black-10 hover:bg-black hover:text-white"
          >
            <Trash2 size={16} />
            Cancel Order
          </MainButton>
         </div>
          <button className="rounded-full bg-white hidden lg:flex  p-2 shadow-lg hover:bg-black-5">
            <X size={20} className="text-black-60" />
          </button>
        </div>
      </div>

      {/* Order Info */}
      <OrderDetailsSection />

      {/* Order Summary */}
      <OrderSummary />
    </div>
  )
}
