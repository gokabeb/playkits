import type React from "react"
import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "deep-twilight" | "honey-bronze" | "olive-wood" | "rosewood" | "coral" | "yellow"
  className?: string
}

export function Pill({ children, variant = "default", className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-secondary text-secondary-foreground": variant === "default",
          "bg-primary/10 text-primary": variant === "primary",
          "bg-deep-twilight/10 text-deep-twilight": variant === "deep-twilight",
          "bg-honey-bronze/20 text-honey-bronze-dark": variant === "honey-bronze",
          "bg-olive-wood-light/30 text-olive-wood-dark": variant === "olive-wood",
          "bg-rosewood/10 text-rosewood": variant === "rosewood",
          // Legacy variants for backwards compatibility
          "bg-rosewood/20 text-rosewood": variant === "coral",
          "bg-honey-bronze-light text-honey-bronze-dark": variant === "yellow",
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
