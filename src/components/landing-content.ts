import { Sparkles, Zap, Shield } from "lucide-react"
import type { ThemeMode } from "@/lib/themes"

export interface ThemeContent {
  badge: string
  title: string
  highlight: string
  subtitle: string
  cta: string
  features: { icon: typeof Sparkles; text: string }[]
}

export const content: Record<ThemeMode, ThemeContent> = {
  "minimal-light": {
    badge: "Скоро запуск",
    title: "Жизнь без",
    highlight: "неудобных звонков",
    subtitle:
      "Звонить - работа для профессионалов. Продукт, в котором все ваши задачи решаются в режиме онлайн.",
    cta: "Получить ранний доступ",
    features: [
      { icon: Sparkles, text: "Быстрое решение задач" },
      { icon: Zap, text: "Работа по подписке" },
      { icon: Shield, text: "Профессионалы" },
    ],
  },
  dark: {
    badge: "Скоро старт",
    title: "Оффлайн задачи",
    highlight: "без стресса",
    subtitle: "Запись к врачу, бронь столика, спор с УК — делегируйте всё неудобное экстравертам.",
    cta: "Встать в очередь",
    features: [
      { icon: Sparkles, text: "Штатные помощники" },
      { icon: Zap, text: "Решение за час" },
      { icon: Shield, text: "Безопасность данных" },
    ],
  },
  retro: {
    badge: "Отправление скоро",
    title: "Свобода от",
    highlight: "неудобного общения",
    subtitle: "Простая подписка, которая избавляет от звонков в УК, записей к врачу и поиска подрядчиков.",
    cta: "Забронировать место",
    features: [
      { icon: Sparkles, text: "Понятные тарифы" },
      { icon: Zap, text: "Быстрая помощь" },
      { icon: Shield, text: "Проверенные исполнители" },
    ],
  },
  neon: {
    badge: "[ ИНИЦИАЛИЗАЦИЯ ]",
    title: "СИСТЕМНЫЙ",
    highlight: "ПРОРЫВ",
    subtitle: "Протокол интерфейса нового поколения. Ломаем барьеры. Переопределяем границы.",
    cta: "НАЧАТЬ ДОСТУП",
    features: [
      { icon: Sparkles, text: "КВАНТОВОЕ ЯДРО" },
      { icon: Zap, text: "ГИПЕРСКОРОСТЬ" },
      { icon: Shield, text: "ШИФРОВАНИЕ" },
    ],
  },
  monochrome: {
    badge: "Анонс",
    title: "Изысканная",
    highlight: "простота",
    subtitle: "Где форма встречает функцию. Создано с умыслом, спроектировано для эффекта.",
    cta: "Получить уведомление",
    features: [
      { icon: Sparkles, text: "Продуманно" },
      { icon: Zap, text: "Эффективно" },
      { icon: Shield, text: "Надежно" },
    ],
  },
  glass: {
    badge: "Превью",
    title: "За пределами",
    highlight: "границ",
    subtitle: "Плавный опыт, который адаптируется под вас. Бесшовно, красиво, интуитивно.",
    cta: "Запросить доступ",
    features: [
      { icon: Sparkles, text: "Адаптивно" },
      { icon: Zap, text: "Бесшовно" },
      { icon: Shield, text: "Безопасно" },
    ],
  },
  terminal: {
    badge: "> status: pending",
    title: "$ sudo launch",
    highlight: "--force",
    subtitle: "// требуется root доступ. ожидание подтверждения развертывания...",
    cta: "$ subscribe --notify",
    features: [
      { icon: Sparkles, text: "--optimized" },
      { icon: Zap, text: "--async" },
      { icon: Shield, text: "--secure" },
    ],
  },
  luxury: {
    badge: "Эксклюзивный превью",
    title: "Открываем",
    highlight: "совершенство",
    subtitle:
      "Для избранных ценителей. Опыт, созданный для тех, кто не соглашается на меньшее.",
    cta: "Запросить приглашение",
    features: [
      { icon: Sparkles, text: "Уникально" },
      { icon: Zap, text: "Премиум" },
      { icon: Shield, text: "Эксклюзив" },
    ],
  },
}