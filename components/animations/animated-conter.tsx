"use client"

import { useRef, useEffect, useState } from "react"
import { useInView, useSpring, useMotionValue } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  formatValue?: (value: number) => string
  className?: string
}

export function AnimatedCounter({
  from,
  to,
  duration = 1.5,
  formatValue = (value) => value.toFixed(0),
  className = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef(null)
  const inView = useInView(nodeRef, { once: true, threshold: 0.3 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const value = useMotionValue(from)
  const springValue = useSpring(value, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000,
  })

  const [displayValue, setDisplayValue] = useState(formatValue(from))

  useEffect(() => {
    if (inView && !hasAnimated) {
      value.set(to)
      setHasAnimated(true)
    }
  }, [inView, value, to, hasAnimated])

  useEffect(() => {
    const unsubscribe = springValue.onChange((v) => {
      setDisplayValue(formatValue(v))
    })

    return unsubscribe
  }, [springValue, formatValue])

  return (
    <span ref={nodeRef} className={className}>
      {displayValue}
    </span>
  )
}
