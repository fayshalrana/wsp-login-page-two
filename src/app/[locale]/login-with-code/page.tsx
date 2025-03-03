"use client"

import { useState } from "react"
import Image from "next/image"
import LoginWithCodeForm from "@/components/login-with-code/loginWithCodeForm"
import ServicePanel from "@/components/login/servicePanel"
import logo from "../../../../public/original-logo.svg"
import { fontTitle1 } from "@/styles/typography"

export default function LoginWithCode() {
  return (
    <main className="h-[100vh] w-full overflow-hidden p-[var(--spacing-4)]">
      <div className="flex h-full w-full gap-[var(--spacing-4)] flex-col lg:flex-row">
        {/* Tablet Header - Only visible on medium screens */}
        <div className="lg:hidden flex flex-col items-center gap-4 w-full mb-8">
          <Image
            src={logo}
            alt="Orderific Logo"
            width={140}
            height={28}
            className="object-contain"
          />
          <h1 className={`${fontTitle1} text-[#1A1A1A]`}>Service Panel</h1>
        </div>

        {/* Left Panel - Service Panel with Image - Hidden on tablet */}
        <div className="hidden lg:flex lg:w-[480px]">
          <ServicePanel />
        </div>
        
        {/* Right Panel - Login With Code Form */}
        <div className="flex w-full flex-1 items-center justify-center">
          <LoginWithCodeForm />
        </div>
      </div>
    </main>
  )
} 