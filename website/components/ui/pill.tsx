import type React from "react"
import { cn } from "@/lib/utils"

interface PillProps {
  children: React.ReactNode
  variant?: "default" | "primary" | "forest" | "terracotta" | "gold" | "charcoal"
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
          "bg-forest/10 text-forest": variant === "forest",
          "bg-terracotta/10 text-terracotta": variant === "terracotta",
          "bg-gold/10 text-gold-dark": variant === "gold",
          "bg-charcoal/10 text-charcoal-muted": variant === "charcoal",
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
