import { useState } from "react"
import { Edit2, LogOut } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontTitle1 } from "@/styles/typography"

import { EditProfileDialog } from "./edit-profile-dialog"

export function ProfileHeader() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false)

  return (
    <div className="flex items-center justify-between">
      <h1 className={fontTitle1}>Profile</h1>

      <div className="flex items-center gap-3">
        <MainButton
          variant="secondary"
          onClick={() => setIsEditProfileOpen(true)}
          className="flex gap-1 border-2 border-black-10 bg-transparent p-4 text-[14px] font-bold leading-[16px] outline-transparent hover:shadow-none hover:outline-transparent"
        >
          <Edit2 size={16} />
          Edit Profile
        </MainButton>

        <MainButton
          variant="secondary"
          onClick={() => {}}
          className="h-12 w-12 border-2 border-black-10 bg-transparent p-1 hover:shadow-none hover:outline-transparent"
        >
          <LogOut size={16} />
        </MainButton>
      </div>

      <EditProfileDialog
        isOpen={isEditProfileOpen}
        onOpenChange={setIsEditProfileOpen}
      />
    </div>
  )
}
