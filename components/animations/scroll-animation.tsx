"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface ScrollAnimationProps {
  children: ReactNode
  variant?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "bounce"
  delay?: number
  duration?: number
  className?: string
  once?: boolean
  threshold?: number
}

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideUp: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideLeft: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  slideRight: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  scale: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  bounce: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}

const initialStates = {
  fadeIn: { opacity: 0 },
  slideUp: { opacity: 0, y: 50 },
  slideLeft: { opacity: 0, x: 50 },
  slideRight: { opacity: 0, x: -50 },
  scale: { opacity: 0, scale: 0.8 },
  bounce: { opacity: 0, scale: 0.8 },
}

export function ScrollAnimation({
  children,
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  className = "",
  once = true,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once, threshold })

  useEffect(() => {
    if (inView) {
      controls.start(variant)
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, variant, once])

  return (
    <motion.div
      ref={ref}
      initial={initialStates[variant] || "hidden"}
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
