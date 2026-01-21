import { useState } from "react"
import { ThemeSwitcher } from "./theme-switcher"
import { useTheme } from "./theme-context"
import { themes } from "@/lib/themes"
import { cn } from "@/lib/utils"
import { BackgroundDecorations } from "./background-decorations"
import { HeroSection } from "./hero-section"

export function LandingPage() {
  const { theme } = useTheme()
  const themeConfig = themes[theme]

  const [targetDate, setTargetDate] = useState<Date>(() => {
    const date = new Date()
    date.setDate(date.getDate() + 7)
    return date
  })

  return (
    <div
      className={cn(
        "min-h-screen flex flex-col transition-all duration-500 relative overflow-hidden",
        themeConfig.background,
      )}
    >
      <BackgroundDecorations theme={theme} />

      <header className="relative z-50 w-full">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center text-center justify-center">
          <ThemeSwitcher />
        </div>
      </header>

      <HeroSection theme={theme} targetDate={targetDate} onTargetDateChange={setTargetDate} />
    </div>
  )
}
