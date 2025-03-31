"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

interface AnimatedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  animation?: "fade" | "slide-up" | "slide-right" | "zoom" | "reveal"
  delay?: number
  duration?: number
  threshold?: number
}

export function AnimatedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
}: AnimatedImageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  const getAnimationVariants = () => {
    switch (animation) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
      case "slide-up":
        return {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration, delay } },
        }
      case "slide-right":
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0, transition: { duration, delay } },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } },
        }
      case "reveal":
        return {
          hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          visible: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            transition: { duration: duration * 1.5, delay, ease: [0.77, 0, 0.175, 1] },
          },
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        }
    }
  }

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={getAnimationVariants()}
        className="h-full w-full"
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          className="h-full w-full object-cover"
        />
      </motion.div>
    </div>
  )
}

