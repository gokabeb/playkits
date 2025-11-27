import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  size?: "default" | "lg"
}

export function Section({ children, className, id, size = "default" }: SectionProps) {
  return (
    <section 
      id={id} 
      className={cn(
        size === "lg" ? "py-24 lg:py-32" : "py-20 lg:py-28",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span className={cn(
      "mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",
      className
    )}>
      {children}
    </span>
  )
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}) {
  return (
    <div className={cn("mb-12 lg:mb-16", centered && "mx-auto max-w-3xl text-center", className)}>
      <h2 className={cn(
        "text-3xl font-medium tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance",
        className?.includes("font-serif") && "font-serif"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "mt-4 text-lg text-muted-foreground text-pretty",
          centered ? "mx-auto max-w-2xl" : "max-w-2xl"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
