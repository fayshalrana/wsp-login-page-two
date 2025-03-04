"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useFullscreen } from "@/providers/FullscreenProvider"
import { X } from "lucide-react"

import { MainButton } from "@/components/mainButton"
import { fontHeadline, fontTitle1, fontTitle2 } from "@/styles/typography"

import logo from "../../../public/mcdonas-logo.svg"
import expendIcon from "../../../public/resize.svg"

export function OrderHeader() {
  const [currentTime, setCurrentTime] = useState<string>("")
  const { isFullscreen, setIsFullscreen } = useFullscreen()

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

  const handleFullScreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      } else {
        await document.exitFullscreen()
        setIsFullscreen(false)
      }
    } catch (err) {
      console.error(err)
    }
  }

  // Update fullscreen state when browser controls are used
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    setIsFullscreen(Boolean(document.fullscreenElement))

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [setIsFullscreen])

  return (
    <header className={`flex flex-col gap-6 ${isFullscreen ? "px-0" : ""}`}>
      {/* Top Header - Hidden in fullscreen */}
      <section
        className={`flex items-center justify-between transition-opacity duration-200 ${
          isFullscreen ? "hidden" : "block"
        }`}
      >
        <h1 className={`${fontTitle1} text-[var(--text-black-100)]`}>
          Order Status
        </h1>

        <MainButton
          variant="secondary"
          onClick={handleFullScreen}
          className="max-w-max border border-[var(--border-black-10)] bg-transparent p-[16px] hover:outline-transparent"
          iconSize="24"
          aria-label="Toggle Fullscreen"
        >
          <Image
            width={5}
            height={5}
            className="h-[13px] w-[13px]"
            src={expendIcon}
            alt="FullScreen"
          />
          <span className="ml-2 text-[var(--text-black-100)]">FullScreen</span>
        </MainButton>
      </section>

      {/* Sub Header */}
      <section
        className={`relative flex items-center justify-between rounded-2xl bg-[var(--black-background-5)] px-[var(--spacing-4)] py-[var(--spacing-4)] backdrop-blur-sm ${
          isFullscreen ? "bg-white shadow-sm" : ""
        }`}
      >
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
            McDonald&apos;s
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className={`${fontTitle2} text-[32px] font-bold text-[var(--text-black-100)]`}
          >
            {currentTime}
          </span>

          {/* Updated Minimize button with absolute positioning */}
          {isFullscreen && (
            <button
              onClick={handleFullScreen}
              className="absolute right-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg hover:bg-black-5"
              aria-label="Exit Fullscreen"
            >
              <X size={20} className="text-black-60" />
            </button>
          )}
        </div>
      </section>
    </header>
  )
}
