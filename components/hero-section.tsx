"use client"

import { ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedImage } from "@/components/animated-image"
import { useAuth } from "@/contexts/auth-context"
import { useMemo } from "react"

 interface User {
  name?: string | null
  email?: string | null
  image?: string | null
}

export function HeroSection() {
  const { user } = useAuth() as { user?: User }

  // Usa primeiro nome se disponível; fallback para "Usuário"
  const displayName = useMemo(() => {
    const n = user?.name
    if (!n) return "Usuário"
    return String(n).trim().split(" ")[0]
  }, [user])

  return (
    <Section className="relative min-h-screen flex items-center">
      {/* Fundo */}
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
                dashboard
              </motion.div>

              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Olá, <span className="text-primary">{displayName}</span>.
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-[90%] md:max-w-[600px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Explore tudo o que a Machine Invest tem para oferecer. Gerencie seus investimentos, acompanhe seu progresso e alcance seus objetivos financeiros com facilidade.
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
                Baixar App
              </EnhancedButton>

              <EnhancedButton variant="outline" size="lg" href="#" className="text-sm md:text-base">
                Explorar <ArrowDown className="ml-2 h-4 w-4" />
              </EnhancedButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center lg:justify-end mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-background/30 backdrop-blur-0" />

            <motion.div
              className="flex items-center justify-center w-full h-[500px] sm:h-[600px] relative overflow-visible"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            >
              <AnimatedImage
                src="/machine-logo.png"
                alt="Machine Invest Logo"
                width={200}
                height={200}
                className="z-10 object-contain"
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

            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/30 blur-xl opacity-70" />
            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full bg-primary/20 blur-xl opacity-70" />
          </motion.div>
        </div>
      </ResponsiveContainer>
    </Section>
  )
}
