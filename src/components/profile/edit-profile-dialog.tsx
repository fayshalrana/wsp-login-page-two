import { useMemo, useState } from "react"
import Image from "next/image"
import { Camera, Mail, Pencil, X } from "lucide-react"

import { Dialog, DialogClose, DialogContent } from "@/components/dialog"
import { Input } from "@/components/input"
import { MainButton } from "@/components/mainButton"
import { fontButtonSmall, fontTitle3 } from "@/styles/typography"

interface EditProfileDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function EditProfileDialog({
  isOpen,
  onOpenChange,
}: EditProfileDialogProps) {
  const [firstName, setFirstName] = useState("Sarah")
  const [lastName, setLastName] = useState("Hermant")
  const [email, setEmail] = useState("Saraorderific@gmail.com")

  // Check if form is valid (all fields have values)
  const isFormValid = useMemo(() => {
    return (
      firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== ""
    )
  }, [firstName, lastName, email])

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-[400px] rounded-3 bg-white">
        <div className="flex flex-col">
          {/* Header with title and close button */}
          <div className="mb-7 flex items-center justify-between">
            <h2 className={fontTitle3}>Edit Profile</h2>
            <DialogClose className="h-[40px] w-[40px] rounded-full bg-white-100 p-2 shadow-lg">
              <X size={24} className="text-black-60" />
            </DialogClose>
          </div>

          {/* Profile Photo Section */}
          <div className="mb-6 flex items-center justify-start gap-[10px]">
            <div className="relative">
              <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
                <Image
                  src="/User.svg"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            </div>
            <button
              className={`${fontButtonSmall} flex items-center gap-2 rounded-3 bg-black-10 py-[6px] pl-2 pr-3 text-black-100`}
            >
              <Camera size={20} />
              Change Photo
            </button>
          </div>

          {/* Form Fields */}
          <div className="space-y-[10px]">
            <Input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              icon={Pencil}
              onClear={() => setFirstName("")}
            />
            <Input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              icon={Pencil}
              onClear={() => setLastName("")}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
              onClear={() => setEmail("")}
            />
          </div>

          {/* Save Button */}
          <MainButton
            variant="primary"
            className="mt-6 w-full rounded-full py-4 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => onOpenChange(false)}
            disabled={!isFormValid}
          >
            Save Changes
          </MainButton>
        </div>
      </DialogContent>
    </Dialog>
  )
}
