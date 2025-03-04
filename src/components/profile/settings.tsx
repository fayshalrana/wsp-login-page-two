import { useState } from "react"

import { MainButton } from "@/components/mainButton"
import { CustomSelect } from "@/components/select"
import { fontHeadline } from "@/styles/typography"

interface SettingsProps {
  defaultPage: string
  onDefaultPageChange: (page: string) => void
}

export function Settings({ defaultPage, onDefaultPageChange }: SettingsProps) {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [selectedPage, setSelectedPage] = useState(defaultPage)

  const pages = [
    { value: "kitchen-display", label: "Kitchen Display" },
    { value: "order-status", label: "Order Status" },
    { value: "menu-management", label: "Menu Management" },
  ]

  const handlePageSelect = ({ value }: { value: string }) => {
    setSelectedPage(value)
    onDefaultPageChange(value)
  }

  const isPasswordValid = currentPassword !== "" && newPassword !== ""

  return (
    <div className="flex w-1/3 flex-col gap-2">
      {/* Default Page Section */}
      <div className="rounded-3 bg-white-60 p-4">
        <h2 className={`${fontHeadline} mb-[22px]`}>Default Page After Login</h2>
        <div className="flex flex-col gap-[22px]">
          <CustomSelect<string>
            options={pages}
            sortByText=""
            onOptionSelect={handlePageSelect}
            defaultValue={pages.find((page) => page.value === defaultPage)}
            selectWidth="w-full"
            menuWidth="w-full"
          />
          <MainButton
            variant="primary"
            disabled={selectedPage === "kitchen-display"}
            className={`hover:outline-transparent w-full transition-colors py-3 ${
              selectedPage === "kitchen-display"
                ? "border-none bg-[var(--black-5)] text-[var(--black-40)] cursor-not-allowed"
                : "bg-black text-white"
            }`}
            style={{ borderRadius: "var(--round-6)" }}
          >
            Set as default
          </MainButton>
        </div>
      </div>

      {/* Password Section */}
      <div className="rounded-3 bg-white-60 p-4">
        <h2 className={`${fontHeadline} mb-[22px]`}>Password & Security</h2>
        <div className="flex flex-col">
          <div className="space-y-[var(--spacing-2)]">
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full bg-[var(--white-background-100)] px-[var(--spacing-4)] py-3 text-[var(--text-black-100)] placeholder:text-[var(--text-black-40)] focus:bg-[var(--white-background-100)] border-black-10 border-2"
              style={{ borderRadius: "var(--round-6)" }}
            />
          </div>

          <div className="space-y-[var(--spacing-2)] mt-[var(--spacing-2)]">
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full bg-[var(--white-background-100)] px-[var(--spacing-4)] py-3 text-[var(--text-black-100)] placeholder:text-[var(--text-black-40)] focus:bg-[var(--white-background-100)] border-black-10 border-2"
              style={{ borderRadius: "var(--round-6)" }}
            />
          </div>

          <MainButton
            variant="primary"
            disabled={!isPasswordValid}
            className={`hover:outline-transparent w-full transition-colors py-3 mt-[22px] ${
              !isPasswordValid
                ? "bg-[var(--black-5)] text-[var(--black-40)] cursor-not-allowed"
                : "bg-black text-white"
            }`}
            style={{ borderRadius: "var(--round-6)" }}
          >
            Change Password
          </MainButton>
        </div>
      </div>
    </div>
  )
}
