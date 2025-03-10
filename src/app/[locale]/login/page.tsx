"use client"

import { useState } from "react"
import Image from "next/image"

import LoginWithCodeForm from "@/components/login/loginWithCodeForm"
import LoginForm from "@/components/login/loginForm"
import ServicePanel from "@/components/login/servicePanel"
import { fontBodyNormal, fontTitle1 } from "@/styles/typography"

import logo from "../../../../public/original-logo.svg"

export default function Login() {
  const [loginMethod, setLoginMethod] = useState<"email" | "code">("email")

  const handleSwitchLoginMethod = (method: "email" | "code") => {
    setLoginMethod(method)
  }

  return (
    <main className="h-[100vh] w-full overflow-hidden p-[var(--spacing-4)]">
      <div className="flex h-full w-full flex-col gap-[var(--spacing-4)] lg:flex-row">
        {/* Tablet Header - Only visible on medium screens */}
        <div className="mb-8 flex w-full flex-col items-center gap-4 lg:hidden">
          <Image
            src={logo}
            alt="Orderific Logo"
            width={165}
            height={28}
            className="object-contain"
          />
          <h1 className={`${fontTitle1} text-[#1A1A1A]`}>Service Panel</h1>
        </div>

        {/* Left Panel - Service Panel with Image - Hidden on tablet */}
        <div className="hidden lg:flex lg:w-[480px]">
          <ServicePanel />
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex w-full flex-1 items-center justify-center">
          {loginMethod === "email" ? (
            <LoginForm onSwitchToCode={() => handleSwitchLoginMethod("code")} />
          ) : (
            <LoginWithCodeForm
              onSwitchToEmail={() => handleSwitchLoginMethod("email")}
            />
          )}
        </div>
      </div>
    </main>
  )
}
