import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  cols?: {
    default: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: string
}

export function ResponsiveGrid({
  children,
  className,
  cols = { default: 1, sm: 2, lg: 3 },
  gap = "gap-3 sm:gap-4 md:gap-6",
}: ResponsiveGridProps) {
  const getGridCols = () => {
    const classes = []

    classes.push(`grid-cols-${cols.default}`)

    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)

    return classes.join(" ")
  }

  return <div className={cn("grid w-full", getGridCols(), gap, className)}>{children}</div>
}

