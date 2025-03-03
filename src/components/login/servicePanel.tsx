"use client"

import Image from "next/image"

import logo from "../../../public/logo.webp"
import rider from "../../../public/signin.png"
import { fontBigTypoDesktop, fontBodyNormal } from "@/styles/typography"

export default function ServicePanel() {
  return (
    <div className="relative hidden lg:block">
      <div
        className="relative h-[calc(100vh-var(--spacing-8))] w-[480px] overflow-hidden"
        style={{ borderRadius: "var(--round-5)" }}
      >
        {/* Background Image */}
        <Image
          src={rider}
          alt="Sign in background"
          fill
          priority
          className="object-cover"
        />

        {/* First Overlay - Brand Orange */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--signIn-background)" }}
        />

        {/* Second Overlay - Black Gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[70%]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 50%, #000000 100%)",
            opacity: "50%",
          }}
        />

        {/* logo */}
        <div className="absolute left-[var(--spacing-8)] top-[var(--spacing-8)] z-10 w-[164px]">
          <Image
            src={logo}
            alt="Orderific Logo"
            width={164}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Content */}
        <div className="absolute bottom-[var(--spacing-8)] left-[var(--spacing-8)] right-[var(--spacing-7)] z-10">
          <h1
            className={`${fontBigTypoDesktop} mb-4 text-[var(--text-white-100)]`}
          >
            Service Panel
          </h1>
          <p className={`${fontBodyNormal} text-[var(--white-background-70)]`}>
            Streamline your restaurant operations with BMS. Manage reservations,
            orders, inventory, and staff effortlessly, and focus on delivering
            exceptional dining experiences.
          </p>
        </div>
      </div>
    </div>
  )
}
