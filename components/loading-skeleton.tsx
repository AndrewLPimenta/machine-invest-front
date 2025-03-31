"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  count?: number
  circle?: boolean
}

export function LoadingSkeleton({ className, count = 1, circle = false }: SkeletonProps) {
  const skeletons = Array.from({ length: count }).map((_, i) => (
    <div key={i} className={cn("animate-pulse bg-muted rounded", circle ? "rounded-full" : "rounded", className)} />
  ))

  return <>{skeletons}</>
}

