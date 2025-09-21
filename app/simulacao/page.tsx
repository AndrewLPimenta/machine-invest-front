"use client"

import { useState } from "react"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight } from "lucide-react"

export default function SimulacaoPage() {
  const [investmentAmount, setInvestmentAmount] = useState(5000)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [investmentPeriod, setInvestmentPeriod] = useState(36)
  const [riskProfile, setRiskProfile] = useState(3)
  const [selectedTab, setSelectedTab] = useState<"renda-fixa" | "renda-variavel" | "cripto">("renda-fixa")
  const [simulatedData, setSimulatedData] = useState<{ name: string; rate: number; final: number; profit: number; profitPct: number }[] | null>(null)
  const [simulationsCount, setSimulationsCount] = useState(0)
  const MAX_FREE_SIMULATIONS = 3
  const isLoggedIn = false

  const investmentRates = {
    "renda-fixa": [
      { name: "CDB", rate: 8.5 },
      { name: "Tesouro Direto", rate: 10.2 },
    ],
    "renda-variavel": [
      { name: "Ações", rate: 15 },
      { name: "Fundos Imobiliários", rate: 12 },
    ],
    "cripto": [
      { name: "Bitcoin", rate: 25 },
      { name: "Ethereum", rate: 30 },
    ],
  }

  const calculateReturn = (amount: number, monthly: number, period: number, rate: number) => {
    let total = amount
    for (let i = 0; i < period; i++) total = total * (1 + rate / 100 / 12) + monthly
    return total
  }

  const handleSimulate = () => {
    if (!isLoggedIn && simulationsCount >= MAX_FREE_SIMULATIONS) return

    const results = investmentRates[selectedTab].map((inv) => {
      const finalAmount = calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, inv.rate)
      const totalInvested = investmentAmount + monthlyContribution * investmentPeriod
      return {
        name: inv.name,
        rate: inv.rate,
        final: finalAmount,
        profit: finalAmount - totalInvested,
        profitPct: ((finalAmount - totalInvested) / totalInvested) * 100,
      }
    })

    setSimulatedData(results)
    if (!isLoggedIn) setSimulationsCount((prev) => prev + 1)
  }

  return (
    <PageLayout>
      <Section>
        <h1 className="text-4xl font-bold text-center mb-6">Simulador de Investimentos</h1>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Configurações</CardTitle>
                <CardDescription>Ajuste os parâmetros e clique em simular</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="investment-amount">Valor Inicial (R$)</Label>
                  <Input id="investment-amount" type="number" value={investmentAmount} onChange={(e) => setInvestmentAmount(Number(e.target.value))} className="mt-1 w-full" />
                </div>
                <div>
                  <Label htmlFor="monthly-contribution">Aporte Mensal (R$)</Label>
                  <Input id="monthly-contribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(Number(e.target.value))} className="mt-1 w-full" />
                </div>
                <div>
                  <Label htmlFor="investment-period">Período (meses)</Label>
                  <Input id="investment-period" type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(Number(e.target.value))} className="mt-1 w-full" />
                </div>
                <div>
                  <Label htmlFor="risk-profile">Perfil de Risco</Label>
                  <Slider value={[riskProfile]} min={1} max={5} step={1} onValueChange={(val) => setRiskProfile(val[0])} className="mt-2" />
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
                  <Button className="w-full" onClick={handleSimulate}>
                    Simular
                  </Button>
                )}
              </CardFooter>
            </Card>
          </div>

          {simulatedData && (
            <div>
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
            </div>
          )}
        </div>
      </Section>
    </PageLayout>
  )
}
