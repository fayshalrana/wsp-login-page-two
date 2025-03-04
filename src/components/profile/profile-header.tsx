import { Edit2, LogOut } from "lucide-react"
import { fontTitle1 } from "@/styles/typography"
import { MainButton } from "@/components/mainButton"

export function ProfileHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className={fontTitle1}>Profile</h1>

      <div className="flex items-center gap-3">
        <MainButton
          variant="secondary"
          onClick={() => {}}
          className="p-4 flex gap-1 bg-transparent border-2 border-black-10 outline-transparent hover:outline-transparent hover:shadow-none text-[14px] font-bold leading-[16px]"
        >
          <Edit2 size={16} />
          Edit Profile
        </MainButton>

        <MainButton
          variant="secondary"
          onClick={() => {}}
          className="h-12 w-12 p-1 bg-transparent border-2 border-black-10 hover:outline-transparent hover:shadow-none"
        >
          <LogOut size={16} />
        </MainButton>
      </div>
    </div>
  )
}
