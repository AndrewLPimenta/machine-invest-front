"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function TestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const testimonials = [
    {
      content:
        "A Machine Invest revolucionou minha forma de investir. As simulações são precisas e me ajudaram a tomar decisões mais inteligentes.",
      author: "Carlos Silva",
      role: "Investidor há 5 anos",
      avatar: "CS",
    },
    {
      content:
        "Nunca foi tão fácil acompanhar meus investimentos em criptomoedas. A interface é intuitiva e as análises são completas.",
      author: "Ana Oliveira",
      role: "Trader de criptomoedas",
      avatar: "AO",
    },
    {
      content:
        "O aplicativo da Machine Invest é simplesmente incrível. Consigo simular diferentes cenários e tomar decisões com mais segurança.",
      author: "Roberto Santos",
      role: "Empresário",
      avatar: "RS",
    },
  ]

  return (
    <div className="w-full overflow-hidden">
      <section className="py-10 sm:py-12 md:py-16 bg-muted/30" ref={ref}>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              O que nossos <span className="text-primary">clientes</span> dizem
            </h2>
            <p className="mx-auto mt-2 sm:mt-3 max-w-[700px] text-sm sm:text-base text-muted-foreground">
              Descubra como a Machine Invest tem ajudado investidores a alcançar seus objetivos financeiros.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full">
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">{testimonial.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                        <AvatarFallback className="text-xs sm:text-sm">{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xs sm:text-sm font-medium">{testimonial.author}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

