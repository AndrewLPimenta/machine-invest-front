"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface StaggerAnimationProps {
  children: ReactNode
  delay?: number
  staggerDelay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

export function StaggerAnimation({
  children,
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: StaggerAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, threshold })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  }

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={container} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
