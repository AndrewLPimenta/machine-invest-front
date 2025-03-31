"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionHeadingProps {
  title: string | ReactNode
  description?: string | ReactNode
  className?: string
  titleClassName?: string
  descriptionClassName?: string
  centered?: boolean
  animated?: boolean
  highlightedWord?: string
}

export function SectionHeading({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  centered = false,
  animated = true,
  highlightedWord,
}: SectionHeadingProps) {
  const titleContent =
    typeof title === "string" && highlightedWord
      ? title.split(highlightedWord).map((part, i, arr) =>
          i < arr.length - 1 ? (
            <React.Fragment key={i}>
              {part}
              <span className="text-primary">{highlightedWord}</span>
            </React.Fragment>
          ) : (
            part
          ),
        )
      : title

  const Wrapper = animated ? motion.div : "div"
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.5 },
      }
    : {}

  return (
    <Wrapper className={cn(centered ? "text-center" : "", className)} {...animationProps}>
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl", titleClassName)}>
        {titleContent}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-muted-foreground md:text-xl",
            centered ? "mx-auto max-w-[700px]" : "max-w-[700px]",
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </Wrapper>
  )
}

