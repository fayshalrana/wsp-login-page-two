import { MapPin, User2 } from "lucide-react"
import { fontBodyNormal, fontCaptionNormal } from "@/styles/typography"

export function OrderDetails() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-6 gap-4">
      <InfoItem 
            icon={<User2 size={20} className="text-black-60" />}
            label="User Name" 
            value="Sarah Hermant" 
          />
        <InfoItem label="Order Number" value="211" />
        <InfoItem label="Status" value="Ordered" status="ordered" />
        <InfoItem label="Date & Time" value="4 Mar, 2024 — 14:32" />
        <InfoItem label="Phone Number" value="+91 98765 43210" />
        <InfoItem label="Email address" value="test@gmail.com" />
      </div>
      
      <div className="mt-2 flex gap-2">
        <div className="rounded-3 bg-black-5 p-4">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-black-60" />
          <span className={`${fontCaptionNormal} text-black-60`}>Address</span>
        </div>
        <p className={`${fontBodyNormal} text-black-100`}>
          Chinnaiyain Colony, Poongrawanapuram, Chennai, Tamil Naduhgf 600003, India
        </p>
        <p className={`${fontBodyNormal} mt-4 text-black-100`}>
          Delivery Instruction: Deliver to the back entrance of the building, near the parking lot. Contact me upon arrival for further instructions.
        </p>
        </div>
        <div className="rounded-3 bg-black-5 p-4">
        <div className="flex items-center gap-2">
          <MapPin size={20} className="text-black-60" />
          <span className={`${fontCaptionNormal} text-black-60`}>Address</span>
        </div>
        <p className={`${fontBodyNormal} text-black-100`}>
          Chinnaiyain Colony, Poongrawanapuram, Chennai, Tamil Naduhgf 600003, India
        </p>
        <p className={`${fontBodyNormal} mt-4 text-black-100`}>
          Delivery Instruction: Deliver to the back entrance of the building, near the parking lot. Contact me upon arrival for further instructions.
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
}

function InfoItem({ label, value, status, icon }: InfoItemProps) {
  return (
    <div className={`flex flex-col gap-1 rounded-3 bg-black-5 p-4`}>
      <div className="flex items-center gap-2">
        {icon}
        <span className={`${fontCaptionNormal} text-black-60`}>{label}</span>
      </div>
      <span className={`${fontBodyNormal} flex items-center gap-2`}>
        {value}
        {status && (
          <span className={`rounded-full px-2 py-1 text-xs ${
            status === "ordered" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
          }`}>
            {status === "ordered" ? "Ordered" : "Paid"}
          </span>
        )}
      </span>
    </div>
  )
} 