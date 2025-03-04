import Image from "next/image"
import { Mail, Settings, UserCircle } from "lucide-react"

import { fontBodyBold, fontBodyNormal } from "@/styles/typography"

export function UserDetails() {
  return (
    <div className="flex gap-2">
      {/* Profile Card */}
      <div className="flex w-2/3 items-center gap-2">
        <div className="flex flex-1 items-center gap-4 rounded-3 bg-black-5 p-4">
          <div className="relative h-[60px] w-[60px] overflow-hidden">
            <Image
              src="/User.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h2 className={`${fontBodyBold} text-text-black-100`}>
              Sarah Hermant
            </h2>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 rounded-3 bg-black-5 p-4">
          <div className="flex items-center gap-1">
            <Mail size={20} className="text-black-60" />
            <span
              className={`${fontBodyNormal} text-xs text-black-60`}
            >
              Email
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${fontBodyNormal} text-sm text-text-black-100`}
            >
              Saraorderific@gmail.com
            </span>
          </div>
        </div>
      </div>

      {/* Join at & Role Card */}
      <div className="flex w-1/3 items-start justify-center gap-2">
        <div className="flex flex-1 flex-col gap-4 rounded-3 bg-black-5 p-4">
          <div className="flex items-center gap-1">
            <UserCircle size={20} className="text-black-60" />
            <span
              className={`${fontBodyNormal} text-xs text-black-60`}
            >
              Join at
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${fontBodyNormal} text-sm text-black-100`}
            >
              Mon, 17 Jun 2023
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-4 rounded-3 bg-black-5 p-4">
          <div className="flex items-center gap-1">
            <Settings size={20} className="text-black-60" />
            <span
              className={`${fontBodyNormal} text-xs text-black-60`}
            >
              Role
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={`${fontBodyNormal} text-sm text-100`}
            >
              Staff
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
