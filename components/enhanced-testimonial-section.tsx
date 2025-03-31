"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import Image from "next/image"
// Importe o EnhancedButton
import { EnhancedButton } from "@/components/enhanced-button"

export function EnhancedTestimonialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentPage, setCurrentPage] = useState(0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Melhore as animações dos cards de depoimentos
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.7,
      },
    },
  }

  const testimonials = [
    {
      content:
        "A Machine Invest revolucionou minha forma de investir. As simulações são precisas e me ajudaram a tomar decisões mais inteligentes. Em apenas 6 meses, consegui aumentar meu patrimônio em 15%.",
      author: "Carlos Silva",
      role: "Investidor há 5 anos",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Engenheiro de Software",
      rating: 5,
    },
    {
      content:
        "Nunca foi tão fácil acompanhar meus investimentos em criptomoedas. A interface é intuitiva e as análises são completas. O suporte ao cliente é excepcional, sempre respondendo minhas dúvidas rapidamente.",
      author: "Ana Oliveira",
      role: "Trader de criptomoedas",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Analista de Dados",
      rating: 5,
    },
    {
      content:
        "O aplicativo da Machine Invest é simplesmente incrível. Consigo simular diferentes cenários e tomar decisões com mais segurança. A ferramenta de comparação com bancos tradicionais me mostrou quanto eu estava perdendo em taxas.",
      author: "Roberto Santos",
      role: "Empresário",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "CEO da TechSolutions",
      rating: 5,
    },
    {
      content:
        "Comecei a investir há apenas 3 meses e já estou vendo resultados. A educação financeira disponibilizada pela Machine Invest foi fundamental para eu entender o mercado e fazer escolhas acertadas.",
      author: "Juliana Costa",
      role: "Investidora iniciante",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Médica",
      rating: 4,
    },
    {
      content:
        "A diversificação de carteira sugerida pela Machine Invest me ajudou a reduzir riscos e aumentar retornos. O dashboard personalizado me permite acompanhar tudo em um só lugar, de forma clara e objetiva.",
      author: "Fernando Mendes",
      role: "Investidor experiente",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Professor Universitário",
      rating: 5,
    },
    {
      content:
        "Migrei todos os meus investimentos para a Machine Invest após comparar as taxas e rendimentos. A diferença é impressionante! Em um ano, economizei mais de R$ 3.000 só em taxas administrativas.",
      author: "Patrícia Almeida",
      role: "Contadora",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Consultora Financeira",
      rating: 5,
    },
  ]

  const partners = [
    { name: "TechCrunch", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Forbes", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Business Insider", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Bloomberg", logo: "/placeholder.svg?height=40&width=120" },
    { name: "CNBC", logo: "/placeholder.svg?height=40&width=120" },
  ]

  const itemsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / itemsPerPage)
  const currentTestimonials = testimonials.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  return (
    <section className="py-20 bg-muted/30" ref={ref}>
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
            Descubra como a Machine Invest tem ajudado investidores a alcançar seus objetivos financeiros.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {currentTestimonials.map((testimonial, index) => (
            // Adicione efeito de hover nos cards
            <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
              <Card className="h-full relative shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2">
                  <Quote className="h-5 w-5" />
                </div>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-lg">{testimonial.content}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {[...Array(totalPages)].map((_, i) => (
              // Melhore os botões de paginação
              <EnhancedButton
                key={i}
                variant={currentPage === i ? "gradient" : "outline"}
                size="icon"
                className="w-8 h-8"
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </EnhancedButton>
            ))}
          </div>
        )}

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold">Reconhecido por</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

