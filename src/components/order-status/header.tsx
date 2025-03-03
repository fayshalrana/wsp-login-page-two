"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Expand, Minimize } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontHeadline, fontTitle1, fontTitle2 } from "@/styles/typography"

import logo from "../../../public/mcdonas-logo.svg"

export function OrderHeader() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const [isFullScreen, setIsFullScreen] = useState(false)

  // Function to update time
  const updateTime = () => {
    const now = new Date()
    setCurrentTime(
      now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
    )
  }

  useEffect(() => {
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const handleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.error)
    } else {
      document.exitFullscreen().catch(console.error)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  return (
    <header className="flex flex-col gap-6">
      {/* Top Header */}
      <section className="flex items-center justify-between">
        <h1 className={`${fontTitle1} text-[var(--text-black-100)]`}>
          Order Status
        </h1>

        <MainButton
          variant="secondary"
          onClick={handleFullScreen}
          className="max-w-max !border !border-[var(--border-black-10)] bg-transparent p-[16px] hover:outline-none"
          icon={isFullScreen ? Minimize : Expand}
          iconSize="24"
          aria-label="Toggle Fullscreen"
        >
          <span className="ml-2 text-[var(--text-black-100)]">FullScreen</span>
        </MainButton>
      </section>

      {/* Sub Header */}
      <section className="flex items-center justify-between rounded-2xl bg-gray-100/40 px-[var(--spacing-4)] py-[var(--spacing-4)] backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Image
            src={logo}
            alt="McDonald's Logo"
            width={60}
            height={60}
            className="rounded-[var(--round-3)]"
          />
          <span
            className={`${fontHeadline} text-xl font-medium text-[var(--text-black-100)]`}
          >
            McDonald's
          </span>
        </div>
        <span
          className={`${fontTitle2} text-[32px] font-bold text-[var(--text-black-100)]`}
        >
          {currentTime}
        </span>
      </section>
    </header>
  )
}
