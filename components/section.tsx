import { cn } from "@/lib/utils"
import type React from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-12 md:py-16 lg:py-20 px-4 md:px-8 lg:px-12 w-full", className)} // Adicionado padding horizontal
    >
      {children}
    </section>
  )
}
