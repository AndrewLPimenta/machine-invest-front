"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image?: string
  delay?: number
}

export function TestimonialCard({ quote, author, role, image, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay }}>
      <Card className="h-full">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="text-primary mb-4">
            <Quote className="h-6 w-6" />
          </div>
          <p className="italic flex-grow">{quote}</p>
          <div className="mt-6 flex items-center">
            {image ? (
              <div className="mr-3 rounded-full overflow-hidden h-12 w-12 border-2 border-primary/20">
                <Image
                  src={image || "/placeholder.svg?height=48&width=48"}
                  alt={author}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mr-3 rounded-full overflow-hidden h-12 w-12 bg-primary/10 flex items-center justify-center">
                <span className="text-lg font-bold text-primary">{author.charAt(0)}</span>
              </div>
            )}
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

