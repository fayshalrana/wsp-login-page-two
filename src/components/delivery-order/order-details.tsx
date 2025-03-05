import { Calendar, Mail, MapPin, Phone, Tag, User2 } from "lucide-react"

import { fontBodyNormal, fontCaptionNormal } from "@/styles/typography"

export function OrderDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-4">
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
        <InfoItem
          icon={<Calendar size={20} className="text-black-60" />}
          label="Date & Time"
          value="4 Mar, 2024 — 14:32"
        />
        <InfoItem
          icon={<Phone size={20} className="text-black-60" />}
          label="Phone Number"
          value="+91 98765 43210"
        />
        <InfoItem
          icon={<Mail size={20} className="text-black-60" />}
          label="Email address"
          value="test@gmail.com"
        />
      </div>

      <div className="mt-2 flex gap-2">
        <div className="rounded-3 bg-black-5 p-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-black-60" />
            <span className={`${fontCaptionNormal} text-black-60`}>
              Address <a className={`${fontCaptionNormal} text-blue-400 underline`} href="">Location on map</a>
            </span>
          </div>
          <p className={`${fontBodyNormal} mt-[10px] text-black-100`}>
            Delivery Instruction: Deliver to the back entrance of the building,
            near the parking lot. Contact me upon arrival for further
            instructions.
          </p>
        </div>
        <div className="rounded-3 bg-black-5 p-4">
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-black-60" />
            <span className={`${fontCaptionNormal} text-black-60`}>
              Address
            </span>
          </div>
          <p className={`${fontBodyNormal} mt-[10px] text-black-100`}>
            Delivery Instruction: Deliver to the back entrance of the building,
            near the parking lot. Contact me upon arrival for further
            instructions.
          </p>
        </div>
      </div>
    </div>
  )
}

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
      <div className={`${fontBodyNormal} flex items-center justify-between gap-2`}>
       {
        value && (
          <span className={`${fontBodyNormal} text-black-100`}>{value}</span>
        )
       }
        {status && (
          <span
            className={`rounded-full px-2 py-1 text-xs ${
              status === "ordered"
                ? "text-white bg-[var(--status-ordered-background)] right-auto"
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
