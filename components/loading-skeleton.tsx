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

export function ChartSkeleton({ className }: { className?: string }) {
  return <div className={cn("animate-pulse bg-muted rounded h-48 w-full", className)} />
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("animate-pulse bg-muted rounded-lg p-4 space-y-2", className)}>
      <div className="h-5 w-1/3 bg-muted rounded" />
      <div className="h-32 w-full bg-muted rounded" />
      <div className="h-5 w-1/4 bg-muted rounded" />
    </div>
  )
}
