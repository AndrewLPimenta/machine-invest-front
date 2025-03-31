"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import Link from "next/link"
import { forwardRef } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:bg-primary/90 active:translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-md hover:bg-destructive/90 active:translate-y-0.5",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground active:translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:opacity-90 active:translate-y-0.5",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  href?: string
  ripple?: boolean
}

const EnhancedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ripple = true, asChild = false, href, children, ...props }, ref) => {
    // Ripple effect animation
    const rippleEffect = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple) return

      const button = e.currentTarget
      const circle = document.createElement("span")
      const diameter = Math.max(button.clientWidth, button.clientHeight)
      const radius = diameter / 2

      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
      circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
      circle.classList.add("ripple-effect")

      const rippleElement = button.getElementsByClassName("ripple-effect")[0]
      if (rippleElement) {
        rippleElement.remove()
      }

      button.appendChild(circle)
    }

    // If it's a link
    if (href) {
      return (
        <motion.div
          className={cn(buttonVariants({ variant, size, className }))}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href={href} className="flex h-full w-full items-center justify-center">
            {children}
          </Link>
        </motion.div>
      )
    }

    // Regular button
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        onClick={(e) => {
          rippleEffect(e)
          props.onClick?.(e)
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
        {ripple && <span className="ripple-container" />}
      </motion.button>
    )
  },
)

EnhancedButton.displayName = "EnhancedButton"

export { EnhancedButton }

