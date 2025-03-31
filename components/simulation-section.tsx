"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { EnhancedButton } from "@/components/enhanced-button"

export function SimulationSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [investmentPeriod, setInvestmentPeriod] = useState(12)

  // Simplified calculation for demo purposes
  const calculateReturn = (amount: number, period: number, rate: number) => {
    return (amount * Math.pow(1 + rate / 100, period / 12)).toFixed(2)
  }

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
              Simule seus <span className="text-primary">investimentos</span>
            </h2>
            <p className="mx-auto mt-2 sm:mt-3 max-w-[700px] text-sm sm:text-base text-muted-foreground">
              Calcule o potencial de rendimento dos seus investimentos com nossa ferramenta de simulação.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 sm:mt-10 md:mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <Card className="shadow-md">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-base sm:text-lg md:text-xl">Simulador de Investimentos</CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  Ajuste os valores e veja o potencial de rendimento em diferentes modalidades.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-medium">Valor Inicial</span>
                    <span className="text-xs sm:text-sm font-medium">
                      R$ {investmentAmount.toLocaleString("pt-BR")}
                    </span>
                  </div>
                  <Slider
                    value={[investmentAmount]}
                    min={100}
                    max={10000}
                    step={100}
                    onValueChange={(value) => setInvestmentAmount(value[0])}
                    className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3 sm:[&_[role=slider]]:h-4 sm:[&_[role=slider]]:w-4"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-xs sm:text-sm font-medium">Período (meses)</span>
                    <span className="text-xs sm:text-sm font-medium">{investmentPeriod} meses</span>
                  </div>
                  <Slider
                    value={[investmentPeriod]}
                    min={1}
                    max={60}
                    step={1}
                    onValueChange={(value) => setInvestmentPeriod(value[0])}
                    className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-3 sm:[&_[role=slider]]:h-4 sm:[&_[role=slider]]:w-4"
                  />
                </div>
                <Tabs defaultValue="cdb" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="cdb" className="text-xs sm:text-sm py-1 px-2 h-auto">
                      CDB
                    </TabsTrigger>
                    <TabsTrigger value="tesouro" className="text-xs sm:text-sm py-1 px-2 h-auto">
                      Tesouro Direto
                    </TabsTrigger>
                    <TabsTrigger value="cripto" className="text-xs sm:text-sm py-1 px-2 h-auto">
                      Criptomoedas
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="cdb" className="space-y-3 pt-3 sm:pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rendimento</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          R$ {calculateReturn(investmentAmount, investmentPeriod, 8.5)}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Taxa: 8.5% a.a.</div>
                      </div>
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rentabilidade</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          {(
                            (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 8.5)) /
                              investmentAmount -
                              1) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">No período</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="tesouro" className="space-y-3 pt-3 sm:pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rendimento</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          R$ {calculateReturn(investmentAmount, investmentPeriod, 10.2)}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Taxa: 10.2% a.a.</div>
                      </div>
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rentabilidade</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          {(
                            (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 10.2)) /
                              investmentAmount -
                              1) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">No período</div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="cripto" className="space-y-3 pt-3 sm:pt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rendimento</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          R$ {calculateReturn(investmentAmount, investmentPeriod, 25)}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">Taxa: 25% a.a. (estimativa)</div>
                      </div>
                      <div className="rounded-lg border p-2 sm:p-3">
                        <div className="text-xs font-medium text-muted-foreground">Rentabilidade</div>
                        <div className="mt-1 text-base sm:text-lg md:text-xl font-bold">
                          {(
                            (Number.parseFloat(calculateReturn(investmentAmount, investmentPeriod, 25)) /
                              investmentAmount -
                              1) *
                            100
                          ).toFixed(2)}
                          %
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">No período</div>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      * Criptomoedas possuem alta volatilidade. Rendimentos passados não garantem rendimentos futuros.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <EnhancedButton variant="gradient" className="w-full text-xs sm:text-sm" href="/simulacao">
                  Simulação Completa <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </EnhancedButton>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

