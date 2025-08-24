"use client"
import { ArrowDownToLine, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedImage } from "@/components/animated-image"

export function HeroSection() {
  return (
    <Section className="relative min-h-screen flex items-center">
      {/* Removido o div externo com overflow-hidden que estava causando problemas */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-teal-50/50 dark:from-blue-950/20 dark:to-teal-950/20 z-0 bg-grid-small-black/[0.2] bg-grid-small-white/[0.2] dark:bg-grid-small-white/[0.05]" />

      <ResponsiveContainer>
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="flex flex-col justify-center space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 md:space-y-3">
              <motion.div
                className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm font-medium text-primary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Revolucione seus investimentos
              </motion.div>
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Saiba como e onde <span className="text-primary">Investir</span>, fique por dentro do mercado.
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[90%] md:max-w-[600px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Descubra o potencial dos seus investimentos com a Machine Invest. Simulações precisas, criptomoedas e
                produtos financeiros em um só lugar.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <EnhancedButton
                size="lg"
                variant="gradient"
                href="/download"
                id="download"
                className="text-sm md:text-base"
              >
                Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
              </EnhancedButton>
              <EnhancedButton variant="outline" size="lg" href="/simulacao" className="text-sm md:text-base">
                Simular Agora <ArrowRight className="ml-2 h-4 w-4" />
              </EnhancedButton>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Ajustado o tamanho do container do telefone para evitar overflow */}

            <div className="absolute inset-00 bg-background/30 backdrop-blur-0" />
<motion.div
  className="flex items-center justify-center w-full h-[500px] sm:h-[600px] relative overflow-visible"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
>
  <AnimatedImage
    src="/machine-home-nova.png"
    alt="Machine Invest Logo"
    width={300}
    height={500}
    className="h-full w-auto object-contain"
    animation="zoom"
    delay={0.9}
  />
</motion.div>
            <motion.div
              className="absolute bottom-2 left-2 right-4 rounded-lg bg-black/60 p-3 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="text-xs sm:text-sm font-medium text-white">Machine Invest App</p>
              <p className="text-xs text-white/70">Disponível para iOS e Android</p>
            </motion.div>

            {/* Reduzido o tamanho dos efeitos de blur e contido dentro do componente */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/30 blur-xl opacity-70" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-primary/20 blur-xl opacity-70" />
          </motion.div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}

