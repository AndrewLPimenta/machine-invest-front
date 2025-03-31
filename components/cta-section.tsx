"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { EnhancedButton } from "@/components/enhanced-button"
import { AnimatedImage } from "@/components/animated-image"

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isAuthenticated } = useAuth()
  const router = useRouter()

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (!isAuthenticated) {
      e.preventDefault()
      router.push("/login")
    } else {
      router.push("/download")
    }
  }

  return (
    <div className="w-full overflow-hidden">
      <section className="py-10 sm:py-12 md:py-16 bg-primary/5" ref={ref}>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Melhorar a responsividade do grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              className="relative flex items-center justify-center lg:order-last"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="relative h-auto max-h-[350px] sm:max-h-[400px] w-full max-w-[180px] sm:max-w-[200px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-1 shadow-xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 20px -5px rgba(0, 0, 0, 0.1), 0 8px 8px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <AnimatedImage
                  src="/images/app-screenshot.png"
                  alt="Machine Invest App Screenshot"
                  width={200}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover"
                  priority
                  animation="reveal"
                  delay={0.8}
                />
              </motion.div>
              {/* Reduzir o tamanho dos efeitos de blur para evitar overflow */}
              <div className="absolute -right-4 -top-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-primary/30 blur-lg opacity-70" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-primary/20 blur-lg opacity-70" />
            </motion.div>
            <motion.div
              className="flex flex-col justify-center space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7 }}
            >
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                  Baixe agora o <span className="text-primary">aplicativo</span> e comece a investir
                </h2>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground">
                  Tenha acesso a todas as funcionalidades da Machine Invest diretamente no seu smartphone. Simule
                  investimentos, acompanhe criptomoedas e gerencie seus produtos financeiros em qualquer lugar.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <EnhancedButton
                  variant="gradient"
                  size="lg"
                  onClick={handleDownloadClick}
                  className="text-sm md:text-base"
                >
                  Baixar App <ArrowDownToLine className="ml-2 h-4 w-4" />
                </EnhancedButton>
                <EnhancedButton variant="outline" size="lg" href="/sobre" className="text-sm md:text-base">
                  Saiba Mais
                </EnhancedButton>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="p-0 h-auto" onClick={handleDownloadClick}>
                    <Image
                      src="/images/app-store-badge.png"
                      alt="App Store"
                      width={120}
                      height={40}
                      className="h-7 sm:h-8 w-auto"
                    />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="p-0 h-auto" onClick={handleDownloadClick}>
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Google Play"
                      width={120}
                      height={40}
                      className="h-7 sm:h-8 w-auto"
                    />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

