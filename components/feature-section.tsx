"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, LineChart, Shield, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function FeatureSection() {
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

  const features = [
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />,
      title: "Simulações Precisas",
      description: "Calcule rendimentos e compare diferentes opções de investimento com precisão.",
    },
    {
      icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />,
      title: "Criptomoedas",
      description: "Acesse as principais criptomoedas do mercado e acompanhe em tempo real.",
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />,
      title: "Segurança Garantida",
      description: "Seus dados e investimentos protegidos com a mais alta tecnologia de segurança.",
    },
    {
      icon: <LineChart className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-primary" />,
      title: "Análises Avançadas",
      description: "Gráficos e análises detalhadas para tomar as melhores decisões financeiras.",
    },
  ]

  return (
    <div className="w-full overflow-hidden">
      <section className="py-10 sm:py-12 md:py-16" ref={ref}>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Por que escolher a <span className="text-primary">Machine Invest</span>?
            </h2>
            <p className="mx-auto mt-2 sm:mt-3 max-w-[700px] text-sm sm:text-base text-muted-foreground">
              Descubra os diferenciais que fazem da Machine Invest a plataforma ideal para seus investimentos.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:shadow-md dark:border-slate-800 h-full transition-all hover:shadow-lg hover-lift">
                  <CardHeader className="pb-2">
                    <div className="mb-2 sm:mb-3 rounded-full bg-primary/10 p-2 w-fit">{feature.icon}</div>
                    <CardTitle className="text-base sm:text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs sm:text-sm md:text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

