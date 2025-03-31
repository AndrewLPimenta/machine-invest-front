import { cn } from "@/lib/utils"
import type React from "react"

interface ResponsiveContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function ResponsiveContainer({
  children,
  className,
  as: Component = "div",
  ...props
}: ResponsiveContainerProps) {
  return (
    <Component className={cn("container mx-auto px-4 w-full", className)} {...props}>
      {children}
    </Component>
  )
}

