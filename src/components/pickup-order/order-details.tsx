import { Calendar, Mail, Phone, Tag, User2 } from "lucide-react"
import { fontBodyNormal, fontCaptionNormal } from "@/styles/typography"

export function OrderDetails() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <InfoItem 
        icon={<User2 size={20} className="text-black-60" />}
        label="User Name" 
        value="Marry Romero" 
      />
      <InfoItem 
        icon={<Tag size={20} className="text-black-60" />}
        label="Order Number" 
        value="204" 
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
    </div>
  )
}

interface InfoItemProps {
  label: string
  value: string
  status?: "ordered" | "paid"
  icon?: React.ReactNode
}

function InfoItem({ label, value, status, icon }: InfoItemProps) {
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