"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownToLine, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"

export default function SimulacaoPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [investmentAmount, setInvestmentAmount] = useState(5000)
  const [investmentPeriod, setInvestmentPeriod] = useState(36)
  const [monthlyContribution, setMonthlyContribution] = useState(500)
  const [riskProfile, setRiskProfile] = useState(3)

  // Simplified calculation for demo purposes
  const calculateReturn = (amount: number, monthly: number, period: number, rate: number) => {
    let total = amount
    for (let i = 0; i < period; i++) {
      total = total * (1 + rate / 100 / 12) + monthly
    }
    return total.toFixed(2)
  }

  const calculateProfit = (finalAmount: string, initialAmount: number, monthly: number, period: number) => {
    const totalInvested = initialAmount + monthly * period
    return (Number.parseFloat(finalAmount) - totalInvested).toFixed(2)
  }

  const calculateProfitPercentage = (finalAmount: string, initialAmount: number, monthly: number, period: number) => {
    const totalInvested = initialAmount + monthly * period
    return (((Number.parseFloat(finalAmount) - totalInvested) / totalInvested) * 100).toFixed(2)
  }

  return (
    <PageLayout>
      <Section>
      <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Simulação de <span className="text-primary">Investimentos</span>
              </h1>
              <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                Calcule o potencial de rendimento dos seus investimentos e planeje seu futuro financeiro.
              </p>
            </motion.div>
        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={ref}
        >
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Simulador Avançado</CardTitle>
                <CardDescription>
                  Ajuste os parâmetros e veja o potencial de rendimento em diferentes modalidades de investimento.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="investment-amount">Valor Inicial (R$)</Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        id="investment-amount"
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full"
                      />
                      <span className="text-sm font-medium w-24">R$ {investmentAmount.toLocaleString("pt-BR")}</span>
                    </div>
                    <Slider
                      value={[investmentAmount]}
                      min={1000}
                      max={100000}
                      step={1000}
                      onValueChange={(value) => setInvestmentAmount(value[0])}
                      className="mt-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="monthly-contribution">Aporte Mensal (R$)</Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        id="monthly-contribution"
                        type="number"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        className="w-full"
                      />
                      <span className="text-sm font-medium w-24">R$ {monthlyContribution.toLocaleString("pt-BR")}</span>
                    </div>
                    <Slider
                      value={[monthlyContribution]}
                      min={0}
                      max={5000}
                      step={100}
                      onValueChange={(value) => setMonthlyContribution(value[0])}
                      className="mt-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="investment-period">Período (meses)</Label>
                    <div className="flex items-center space-x-4">
                      <Input
                        id="investment-period"
                        type="number"
                        value={investmentPeriod}
                        onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                        className="w-full"
                      />
                      <span className="text-sm font-medium w-24">{investmentPeriod} meses</span>
                    </div>
                    <Slider
                      value={[investmentPeriod]}
                      min={1}
                      max={120}
                      step={1}
                      onValueChange={(value) => setInvestmentPeriod(value[0])}
                      className="mt-2 [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                    />
                  </div>
                  <div>
                    <Label htmlFor="risk-profile">Perfil de Risco</Label>
                    <div className="flex items-center space-x-4">
                      <Slider
                        id="risk-profile"
                        value={[riskProfile]}
                        min={1}
                        max={5}
                        step={1}
                        onValueChange={(value) => setRiskProfile(value[0])}
                        className="[&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
                      />
                      <span className="text-sm font-medium w-24">
                        {riskProfile === 1 && "Muito Baixo"}
                        {riskProfile === 2 && "Baixo"}
                        {riskProfile === 3 && "Moderado"}
                        {riskProfile === 4 && "Alto"}
                        {riskProfile === 5 && "Muito Alto"}
                      </span>
                    </div>
                    <div className="mt-2 flex">
                      <span className="text-xs text-muted-foreground flex-1 text-left">Conservador</span>
                      <span className="text-xs text-muted-foreground flex-1 text-right">Arrojado</span>
                    </div>
                  </div>
                </div>
                <Tabs defaultValue="renda-fixa" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="renda-fixa">Renda Fixa</TabsTrigger>
                    <TabsTrigger value="renda-variavel">Renda Variável</TabsTrigger>
                    <TabsTrigger value="cripto">Criptomoedas</TabsTrigger>
                  </TabsList>
                  <TabsContent value="renda-fixa" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">CDB</CardTitle>
                          <CardDescription>Taxa: 8.5% a.a.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 8.5),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 8.5),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 8.5),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Tesouro Direto</CardTitle>
                          <CardDescription>Taxa: 10.2% a.a.</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 10.2),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 10.2),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 10.2),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="renda-variavel" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Ações</CardTitle>
                          <CardDescription>Taxa: 15% a.a. (estimativa)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 15),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 15),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 15),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Fundos Imobiliários</CardTitle>
                          <CardDescription>Taxa: 12% a.a. (estimativa)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 12),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 12),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 12),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="cripto" className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Bitcoin</CardTitle>
                          <CardDescription>Taxa: 25% a.a. (estimativa)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 25),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 25),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 25),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">Ethereum</CardTitle>
                          <CardDescription>Taxa: 30% a.a. (estimativa)</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rendimento Final</span>
                              <span className="font-medium">
                                R${" "}
                                {Number.parseFloat(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 30),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Lucro</span>
                              <span className="font-medium text-green-500">
                                R${" "}
                                {Number.parseFloat(
                                  calculateProfit(
                                    calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 30),
                                    investmentAmount,
                                    monthlyContribution,
                                    investmentPeriod,
                                  ),
                                ).toLocaleString("pt-BR")}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Rentabilidade</span>
                              <span className="font-medium text-green-500">
                                {calculateProfitPercentage(
                                  calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 30),
                                  investmentAmount,
                                  monthlyContribution,
                                  investmentPeriod,
                                )}
                                %
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      * Criptomoedas possuem alta volatilidade. Rendimentos passados não garantem rendimentos futuros.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href="/#download">
                    Baixar App para Simulações Personalizadas <ArrowDownToLine className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Resumo do Investimento</CardTitle>
                <CardDescription>Visão geral do seu plano de investimento</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Valor Inicial</span>
                    <span className="font-medium">R$ {investmentAmount.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Aporte Mensal</span>
                    <span className="font-medium">R$ {monthlyContribution.toLocaleString("pt-BR")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Período</span>
                    <span className="font-medium">{investmentPeriod} meses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Perfil de Risco</span>
                    <span className="font-medium">
                      {riskProfile === 1 && "Muito Baixo"}
                      {riskProfile === 2 && "Baixo"}
                      {riskProfile === 3 && "Moderado"}
                      {riskProfile === 4 && "Alto"}
                      {riskProfile === 5 && "Muito Alto"}
                    </span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Total Investido</span>
                      <span className="font-medium">
                        R$ {(investmentAmount + monthlyContribution * investmentPeriod).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Rendimento Estimado</span>
                      <span className="font-medium text-green-500">
                        R${" "}
                        {Number.parseFloat(
                          calculateProfit(
                            calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 12),
                            investmentAmount,
                            monthlyContribution,
                            investmentPeriod,
                          ),
                        ).toLocaleString("pt-BR")}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Montante Final</span>
                      <span className="font-medium">
                        R${" "}
                        {Number.parseFloat(
                          calculateReturn(investmentAmount, monthlyContribution, investmentPeriod, 12),
                        ).toLocaleString("pt-BR")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-muted p-4">
                  <h4 className="font-medium">Recomendação de Carteira</h4>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Renda Fixa</span>
                      <span className="text-sm font-medium">
                        {riskProfile === 1
                          ? "80%"
                          : riskProfile === 2
                            ? "70%"
                            : riskProfile === 3
                              ? "50%"
                              : riskProfile === 4
                                ? "30%"
                                : "20%"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Renda Variável</span>
                      <span className="text-sm font-medium">
                        {riskProfile === 1
                          ? "15%"
                          : riskProfile === 2
                            ? "20%"
                            : riskProfile === 3
                              ? "30%"
                              : riskProfile === 4
                                ? "40%"
                                : "40%"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Criptomoedas</span>
                      <span className="text-sm font-medium">
                        {riskProfile === 1
                          ? "5%"
                          : riskProfile === 2
                            ? "10%"
                            : riskProfile === 3
                              ? "20%"
                              : riskProfile === 4
                                ? "30%"
                                : "40%"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/servicos">
                    Conhecer Produtos Financeiros <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </Section>
    </PageLayout>
  )
}

