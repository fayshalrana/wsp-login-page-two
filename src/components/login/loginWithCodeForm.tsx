"use client"

import { useEffect, useRef, useState } from "react"

import {
  fontBodyNormal,
  fontButtonLarge,
  fontTitle1,
} from "@/styles/typography"

import { MainButton } from "../mainButton"

interface LoginWithCodeFormProps {
  onSwitchToEmail: () => void
}

export default function LoginWithCodeForm({
  onSwitchToEmail,
}: LoginWithCodeFormProps) {
  const [code, setCode] = useState<string[]>(Array(6).fill(""))
  const [hasError, setHasError] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(6).fill(null))

  // Initialize refs array
  useEffect(() => {
    // Ensure inputRefs has the correct length after initial render
    inputRefs.current = inputRefs.current.slice(0, 6)
  }, [])

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Move to next input if value is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      // Move to previous input on backspace if current input is empty
      inputRefs.current[index - 1]?.focus()
    }
  }

  const isFormValid = code.every((digit) => digit !== "")

  return (
    <div className="flex w-full items-center justify-center px-[var(--spacing-4)]">
      <div className="w-full max-w-[360px] space-y-[var(--spacing-4)]">
        <div className="text-center">
          <h2 className={`${fontTitle1} text-[var(--text-black-100)]`}>
            Welcome Back
          </h2>
          <p
            className={`${fontBodyNormal} mt-[var(--spacing-2)] text-[var(--text-black-60)]`}
          >
            Manage, streamline, and thrive effortlessly.
          </p>
        </div>

        <form className="space-y-[var(--spacing-6)]">
          <div className="space-y-[var(--spacing-6)]">
            {/* Code input boxes */}
            <div className="flex flex-col items-center gap-[var(--spacing-4)]">
              <p className={`${fontBodyNormal} text-[var(--text-black-60)]`}>
                <strong>Enter</strong> 6 digit pin
              </p>
              <div className="flex items-center justify-center gap-2">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      if (el) inputRefs.current[index] = el
                    }}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleCodeChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="h-12 w-12 rounded-full border border-[var(--border-black-10)] bg-[var(--white-background-100)] text-center text-[20px] font-medium text-[var(--text-black-100)] focus:border-[var(--border-black-20)] focus:outline-none"
                  />
                ))}
              </div>
              {hasError && (
                <p
                  className={`${fontBodyNormal} text-[var(--semantic-red-100)]`}
                >
                  Entered code is wrong!
                </p>
              )}
            </div>

            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={onSwitchToEmail}
                className={`${fontButtonLarge} text-[var(--text-black-100)] underline`}
              >
                Login with Password
              </button>
            </div>
          </div>

          <MainButton
            type="submit"
            disabled={!isFormValid}
            variant="primary"
            className="w-full py-3 text-[var(--text-white-100)] transition-colors"
            style={{ borderRadius: "var(--round-6)" }}
          >
            Sign In
          </MainButton>
        </form>
      </div>
    </div>
  )
}
