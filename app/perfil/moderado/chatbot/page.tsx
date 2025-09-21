"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/section"
import { motion, AnimatePresence } from "framer-motion" // import do framer-motion

export interface SimulationItem {
  name: string
  rate: number
  final: number
  profitPct: number
}

export interface InvestmentSimulatorProps {
  isLoggedIn: boolean
  simulationsCount: number
  MAX_FREE_SIMULATIONS: number
  handleSimulate: (params: {
    investmentAmount: number
    monthlyContribution: number
    investmentPeriod: number
    riskProfile: number
    selectedTab: string
  }) => SimulationItem[]
}

export function InvestmentSimulator({
  isLoggedIn,
  simulationsCount,
  MAX_FREE_SIMULATIONS,
  handleSimulate,
}: InvestmentSimulatorProps) {
  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [monthlyContribution, setMonthlyContribution] = useState(100)
  const [investmentPeriod, setInvestmentPeriod] = useState(12)
  const [riskProfile, setRiskProfile] = useState(1)
  const [selectedTab, setSelectedTab] = useState("renda-fixa")
  const [simulatedData, setSimulatedData] = useState<SimulationItem[] | null>(null)

  const onSimulate = () => {
    const data = handleSimulate({
      investmentAmount,
      monthlyContribution,
      investmentPeriod,
      riskProfile,
      selectedTab,
    })
    setSimulatedData(data)
  }

  return (
    <Section>
      <h1 className="text-4xl font-bold text-center mb-6">Simulador de Investimentos</h1>
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Configurações */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Configurações</CardTitle>
              <CardDescription>Ajuste os parâmetros e clique em simular</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="investment-amount">Valor Inicial (R$)</Label>
                <Input
                  id="investment-amount"
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="monthly-contribution">Aporte Mensal (R$)</Label>
                <Input
                  id="monthly-contribution"
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="investment-period">Período (meses)</Label>
                <Input
                  id="investment-period"
                  type="number"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                  className="mt-1 w-full"
                />
              </div>
              <div>
                <Label htmlFor="risk-profile">Perfil de Risco</Label>
                <Slider
                  value={[riskProfile]}
                  min={1}
                  max={5}
                  step={1}
                  onValueChange={(val) => setRiskProfile(val[0])}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Conservador</span>
                  <span>Arrojado</span>
                </div>
              </div>

              <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="renda-fixa">Renda Fixa</TabsTrigger>
                  <TabsTrigger value="renda-variavel">Renda Variável</TabsTrigger>
                  <TabsTrigger value="cripto">Cripto</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardContent>
            <CardFooter>
              {!isLoggedIn && simulationsCount >= MAX_FREE_SIMULATIONS ? (
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login">
                    Faça login para simular <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button className="w-full" onClick={onSimulate}>
                  Simular
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>

        {/* Resumo do Investimento com animação */}
        <AnimatePresence>
          {simulatedData && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Resumo do Investimento</CardTitle>
                  <CardDescription>Visão geral do seu plano de investimento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span>Valor Inicial</span>
                    <span>R$ {investmentAmount.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Aporte Mensal</span>
                    <span>R$ {monthlyContribution.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Período</span>
                    <span>{investmentPeriod} meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Perfil de Risco</span>
                    <span>{["Muito Baixo", "Baixo", "Moderado", "Alto", "Muito Alto"][riskProfile - 1]}</span>
                  </div>

                  <div className="border-t pt-4 mt-4 space-y-2">
                    {simulatedData.map((item) => (
                      <div key={item.name} className="flex justify-between">
                        <span>{item.name} (Taxa {item.rate}%)</span>
                        <span className="text-green-500">
                          R$ {item.final.toLocaleString("pt-BR")} (+{item.profitPct.toFixed(2)}%)
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                {!isLoggedIn && (
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/login">
                        Ter acesso completo às dicas <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}
