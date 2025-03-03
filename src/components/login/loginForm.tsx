"use client"

import { useState } from "react"
import Image from "next/image"

import {
  fontBodyNormal,
  fontTitle1,
  fontButtonLarge
} from "@/styles/typography"

import Checkbox from "../checkbox"
import { MainButton } from "../mainButton"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const isFormValid = email !== "" && password !== ""

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
          <div className="space-y-[var(--spacing-4)]">
            <div className="space-y-[var(--spacing-2)]">
              <label
                className={`${fontBodyNormal} px-[var(--spacing-4)] text-[var(--text-black-60)]`}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-[var(--white-background-100)] px-[var(--spacing-4)] py-3 text-[var(--text-black-100)] placeholder:text-[var(--text-black-40)] focus:bg-[var(--white-background-100)]"
                style={{ borderRadius: "var(--round-6)" }}
                required
              />
            </div>

            <div className="space-y-[var(--spacing-2)]">
              <label
                className={`${fontBodyNormal} px-[var(--spacing-4)] text-[var(--text-black-60)]`}
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-[var(--white-background-100)] px-[var(--spacing-4)] py-3 text-[var(--text-black-100)] placeholder:text-[var(--text-black-40)] focus:bg-[var(--white-background-100)]"
                  style={{ borderRadius: "var(--round-6)" }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-[var(--spacing-4)] top-1/2 -translate-y-1/2"
                >
                  <Image
                    src={showPassword ? "/eyeoff.svg" : "/eye.svg"}
                    alt={showPassword ? "Hide password" : "Show password"}
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[var(--spacing-2)]">
                <Checkbox
                  className="cursor-pointer"
                  checked={rememberMe}
                  onClick={() => setRememberMe(!rememberMe)}
                />
                <label
                  htmlFor="remember"
                  className={`${fontBodyNormal} select-none text-[var(--text-black-60)]`}
                >
                  Remember me
                </label>
              </div>
              <a
                href="/login-with-code"
                className={`${fontButtonLarge} underline`}
              >
                Login with Code
              </a>
            </div>
          </div>

          <MainButton
            type="submit"
            disabled={!isFormValid}
            variant="primary"
            className={`w-full py-3 text-[var(--text-white-100)] transition-colors`}
            style={{ borderRadius: "var(--round-6)" }}
          >
            Sign In
          </MainButton>
        </form>
      </div>
    </div>
  )
}
