'use client'
import { useState } from "react"
import { MailIcon, PersonIcon } from "@/icons"
import { ChevronDown, X } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/dialog"
import { Input } from "@/components/input"
import { MainButton } from "@/components/mainButton"
import { fontTitle3 } from "@/styles/typography"

interface GuestInfoDialogProps {
  isOpen: boolean
  onClose: () => void
  onSave: (guestInfo: {
    firstName: string
    lastName: string
    phoneNumber: string
    email: string
  }) => void
}

interface Country {
  code: string
  flagUrl: string
  name: string
  dialCode: string
}

const countries: Country[] = [
  { code: "GB", flagUrl: "https://flagcdn.com/w40/gb.png", name: "United Kingdom", dialCode: "+44" },
  { code: "US", flagUrl: "https://flagcdn.com/w40/us.png", name: "United States", dialCode: "+1" },
  { code: "IN", flagUrl: "https://flagcdn.com/w40/in.png", name: "India", dialCode: "+91" },
  { code: "CN", flagUrl: "https://flagcdn.com/w40/cn.png", name: "China", dialCode: "+86" },
  { code: "JP", flagUrl: "https://flagcdn.com/w40/jp.png", name: "Japan", dialCode: "+81" },
  { code: "DE", flagUrl: "https://flagcdn.com/w40/de.png", name: "Germany", dialCode: "+49" },
  { code: "FR", flagUrl: "https://flagcdn.com/w40/fr.png", name: "France", dialCode: "+33" },
  { code: "IT", flagUrl: "https://flagcdn.com/w40/it.png", name: "Italy", dialCode: "+39" },
  { code: "BR", flagUrl: "https://flagcdn.com/w40/br.png", name: "Brazil", dialCode: "+55" },
  { code: "AE", flagUrl: "https://flagcdn.com/w40/ae.png", name: "UAE", dialCode: "+971" },
]

export function GuestInfoDialog({
  isOpen,
  onClose,
  onSave,
}: GuestInfoDialogProps) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [selectedCountry, setSelectedCountry] = useState(countries[0])
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [phoneCode, setPhoneCode] = useState(selectedCountry.dialCode)

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.dialCode.includes(searchQuery)
  )

  const isFormValid = firstName && lastName && phoneNumber && email

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, "")
    setPhoneNumber(value)
  }

  const handleSave = () => {
    if (isFormValid) {
      onSave({
        firstName,
        lastName,
        phoneNumber: `${phoneCode}${phoneNumber}`,
        email,
      })
      onClose()
    }
  }

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex w-[320px] flex-col gap-0 overflow-hidden rounded-[32px] p-0">
          {/* Header */}
          <div className="relative px-4 py-7 text-left">
            <DialogTitle className={`${fontTitle3}`}>
              Add Guest Info
            </DialogTitle>
            <button
              onClick={onClose}
              className="border-black-5 absolute right-6 top-1/2 -translate-y-1/2 rounded-full border bg-white p-2 shadow-2xl hover:bg-black/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="px-4 pb-4">
            <div className="flex flex-col gap-4">
              {/* First Name Input */}
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                icon={PersonIcon}
                className="w-full"
              />

              {/* Last Name Input */}
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                icon={PersonIcon}
                className="w-full"
              />

              {/* Phone Input */}
              <div className="relative">
                <div className="flex w-full items-center gap-2 rounded-full border border-black-10">
                  <button
                    type="button"
                    onClick={() =>
                      setIsCountryDropdownOpen(!isCountryDropdownOpen)
                    }
                    className="flex h-12 w-[116px] flex-none items-center justify-between gap-1 rounded-full bg-black-5 p-4 text-black-100"
                  >
                     <img src={selectedCountry.flagUrl} alt={selectedCountry.name} className="w-6 h-4 rounded-sm" />
                    <span className="text-sm text-black/60">
                      {selectedCountry.dialCode}
                    </span>
                    <ChevronDown className="h-4 w-4 text-black/40" />
                  </button>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="h-full flex-1 bg-transparent pr-4 outline-none placeholder:text-black/40"
                  />
                </div>

                {/* Country Dropdown */}
                {isCountryDropdownOpen && (
                  <div className="absolute left-0 top-14 z-50 w-full rounded-xl border border-black/5 bg-white p-2 shadow-lg">
                    <div className="mb-2 px-2">
                      <input
                        placeholder="Search countries..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="text-sm focus:border-none focus:outline-none focus:ring-0"
                      />
                    </div>
                    <div className="max-h-48 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <button
                          key={country.code}
                          onClick={() => {
                            setSelectedCountry(country)
                            setPhoneCode(country.dialCode)
                            setIsCountryDropdownOpen(false)
                            setSearchQuery("")
                          }}
                          className="flex w-full items-center justify-between px-2 py-2 hover:bg-black/5"
                        >
                          <div className="flex items-center gap-2">
                          <img src={country.flagUrl} alt={country.name} className="w-6 h-4 rounded-sm" />
                            <span className="text-sm">{country.name}</span>
                          </div>
                          <span className="text-sm text-black/60">
                            {country.dialCode}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Email Input */}
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={MailIcon}
              />

              {/* Save Button */}
              <MainButton
                variant="primary"
                onClick={handleSave}
                disabled={!isFormValid}
                className="mt-2 w-full rounded-full py-3"
              >
                Save
              </MainButton>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
