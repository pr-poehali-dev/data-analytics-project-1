import { useState } from "react"
import { cn } from "@/lib/utils"
import { themes, type ThemeMode } from "@/lib/themes"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ThemedCountdown } from "./themed-countdown"
import { content, type ThemeContent } from "./landing-content"
import { ArrowRight, Bell, Settings, Star } from "lucide-react"

interface HeroSectionProps {
  theme: ThemeMode
  targetDate: Date
  onTargetDateChange: (date: Date) => void
}

export function HeroSection({ theme, targetDate, onTargetDateChange }: HeroSectionProps) {
  const themeConfig = themes[theme]
  const currentContent: ThemeContent = content[theme]

  const [days, setDays] = useState("7")
  const [hours, setHours] = useState("0")
  const [minutes, setMinutes] = useState("0")
  const [seconds, setSeconds] = useState("0")
  const [email, setEmail] = useState("")
  const [showSettings, setShowSettings] = useState(false)

  const handleSetTimer = () => {
    const newTarget = new Date()
    newTarget.setDate(newTarget.getDate() + Number.parseInt(days || "0"))
    newTarget.setHours(newTarget.getHours() + Number.parseInt(hours || "0"))
    newTarget.setMinutes(newTarget.getMinutes() + Number.parseInt(minutes || "0"))
    newTarget.setSeconds(newTarget.getSeconds() + Number.parseInt(seconds || "0"))
    onTargetDateChange(newTarget)
    setShowSettings(false)
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12 relative z-10">
      <div className="max-w-4xl w-full flex flex-col items-center gap-6 sm:gap-10">
        <div
          className={cn(
            "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border transition-all",
            themeConfig.muted,
            themeConfig.border,
            themeConfig.mutedForeground,
            themeConfig.fontClass,
            theme === "neon" && "shadow-[0_0_15px_rgba(34,211,238,0.3)] border-cyan-500/50",
            theme === "luxury" && "border-amber-500/30",
          )}
        >
          <Bell className="w-3 h-3 sm:w-4 sm:h-4" />
          {currentContent.badge}
        </div>

        <div className="text-center space-y-3 sm:space-y-4">
          <h1
            className={cn(
              "text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-balance leading-[1.1]",
              themeConfig.foreground,
              themeConfig.fontClass,
            )}
          >
            {currentContent.title}{" "}
            <span
              className={cn(
                "relative inline-block",
                theme === "neon" && "text-cyan-400 [text-shadow:0_0_40px_rgba(34,211,238,0.6)]",
                theme === "luxury" &&
                  "bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 bg-clip-text text-transparent",
                theme === "glass" && "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent",
                theme === "retro" && "text-amber-700",
                theme === "terminal" && "text-green-300",
                theme === "monochrome" && "text-slate-900 font-black",
                theme === "dark" && "text-white",
              )}
            >
              {currentContent.highlight}
            </span>
          </h1>

          <p
            className={cn(
              "text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto text-balance",
              themeConfig.mutedForeground,
              themeConfig.fontClass,
            )}
          >
            {currentContent.subtitle}
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6">
          <div className="relative w-full">
            <ThemedCountdown targetDate={targetDate} />
            <button
              onClick={() => setShowSettings(!showSettings)}
              className={cn(
                "absolute top-2 right-2 sm:top-3 sm:right-3 p-1.5 sm:p-2 rounded-lg border transition-all hover:scale-110",
                themeConfig.card,
                themeConfig.border,
                themeConfig.mutedForeground,
                "hover:bg-opacity-80",
              )}
              title="Настроить таймер"
            >
              <Settings className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>

          {showSettings && (
            <div
              className={cn(
                "w-full p-4 sm:p-6 rounded-2xl border space-y-4",
                themeConfig.card,
                themeConfig.border,
                themeConfig.cardForeground,
                themeConfig.shadow,
              )}
            >
              <h3 className="text-base sm:text-lg font-semibold">Настроить таймер обратного отсчета</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="days" className="text-xs sm:text-sm">
                    Дни
                  </Label>
                  <Input
                    id="days"
                    type="number"
                    min="0"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    className={cn(themeConfig.border, themeConfig.fontClass, "text-sm sm:text-base")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hours" className="text-xs sm:text-sm">
                    Часы
                  </Label>
                  <Input
                    id="hours"
                    type="number"
                    min="0"
                    max="23"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className={cn(themeConfig.border, themeConfig.fontClass, "text-sm sm:text-base")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minutes" className="text-xs sm:text-sm">
                    Минуты
                  </Label>
                  <Input
                    id="minutes"
                    type="number"
                    min="0"
                    max="59"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    className={cn(themeConfig.border, themeConfig.fontClass, "text-sm sm:text-base")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seconds" className="text-xs sm:text-sm">
                    Секунды
                  </Label>
                  <Input
                    id="seconds"
                    type="number"
                    min="0"
                    max="59"
                    value={seconds}
                    onChange={(e) => setSeconds(e.target.value)}
                    className={cn(themeConfig.border, themeConfig.fontClass, "text-sm sm:text-base")}
                  />
                </div>
              </div>
              <button
                onClick={handleSetTimer}
                className={cn(
                  "w-full px-4 py-2 rounded-lg font-medium transition-all hover:scale-[1.02] active:scale-[0.98] text-sm sm:text-base",
                  themeConfig.accent,
                  themeConfig.accentForeground,
                  themeConfig.fontClass,
                )}
              >
                Установить таймер
              </button>
            </div>
          )}

          <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Input
              type="email"
              placeholder="Введите ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "flex-1 h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base rounded-xl border-2 transition-all focus:scale-[1.01]",
                themeConfig.card,
                themeConfig.cardForeground,
                themeConfig.border,
                themeConfig.fontClass,
                theme === "neon" && "focus:border-cyan-500 focus:shadow-[0_0_20px_rgba(34,211,238,0.3)]",
                theme === "luxury" && "focus:border-amber-500/50",
              )}
            />
            <button
              className={cn(
                "h-12 sm:h-14 px-6 sm:px-8 rounded-xl font-semibold transition-all hover:scale-[1.02] active:scale-[0.98] inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base",
                themeConfig.accent,
                themeConfig.accentForeground,
                themeConfig.shadow,
                themeConfig.fontClass,
                theme === "neon" && "shadow-[0_0_30px_rgba(34,211,238,0.4)]",
                theme === "luxury" && "shadow-[0_0_30px_rgba(245,158,11,0.3)]",
              )}
            >
              {currentContent.cta}
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
            {currentContent.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className={cn(
                    "inline-flex items-center gap-1.5 sm:gap-2",
                    themeConfig.mutedForeground,
                    themeConfig.fontClass,
                  )}
                >
                  <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{feature.text}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={cn(
            "w-full max-w-md p-4 sm:p-6 rounded-2xl border space-y-3 sm:space-y-4",
            themeConfig.card,
            themeConfig.border,
            themeConfig.shadow,
          )}
        >
          <div className="flex items-center justify-between">
            <span className={cn("text-xs sm:text-sm font-medium", themeConfig.mutedForeground, themeConfig.fontClass)}>
              Уже зарегистрировано
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-3 h-3 sm:w-4 sm:h-4 fill-current",
                    theme === "neon" && "text-cyan-400",
                    theme === "luxury" && "text-amber-400",
                    theme === "glass" && "text-indigo-500",
                    theme === "retro" && "text-amber-600",
                    theme === "terminal" && "text-green-400",
                    theme === "monochrome" && "text-slate-700",
                    theme === "dark" && "text-white",
                    theme === "minimal-light" && "text-gray-900",
                  )}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex -space-x-2 sm:-space-x-3">
              {[
                "/placeholder-user.jpg",
                "/young-man-portrait-smiling.jpg",
                "/asian-woman-professional-photo.jpg",
                "/smiling-black-woman-portrait.png",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="User avatar"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className={cn("text-sm sm:text-base font-semibold", themeConfig.cardForeground, themeConfig.fontClass)}>
              <span
                className={cn(
                  theme === "neon" && "text-cyan-400",
                  theme === "luxury" && "text-amber-400",
                  theme === "glass" && "text-indigo-600",
                  theme === "retro" && "text-amber-700",
                  theme === "terminal" && "text-green-400",
                )}
              >
                1,247
              </span>{" "}
              ранних пользователей
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
