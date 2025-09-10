"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthRedirect } from "@/components/auth-redirect"
import { EnhancedCryptoChart } from "@/components/enhanced-crypto-chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  PieChart,
  Target,
  AlertTriangle,
  Flame,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Star,
  Globe,
  Briefcase,
  Activity,
  Coins,
  TrendingDown,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import  CryptoGraph  from "@/components/crypto-graph"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
export interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 1000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (typeof end !== "number") return
    let start = 0
    const increment = end / (duration / 16)
    const handle = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(handle)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(handle)
  }, [end, duration])

  const formatValue = (value: number) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + "M"
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + "K"
    }
    return value.toFixed(0)
  }

  return (
    <span>
      {prefix}
      {formatValue(count)}
      {suffix}
    </span>
  )
}

// ================= Dados Aprimorados =================
const cryptoData = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 285000,
    change: 5.2,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 12543.87,
    change: -1.23,
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 543.21,
    change: 8.67,
  },
  {
    symbol: "ADA",
    name: "Cardano",
    price: 2.87,
    change: -0.45,
  },
]

// const marketOpportunities = [
//   {
//     name: "NVDA34 (NVIDIA)",
//     sector: "Tecnologia",
//     potential: "+45%",
//     risk: "Alto",
//     timeframe: "6-12 meses",
//     reason: "Boom da IA e demanda por GPUs",
//     currentPrice: "R$ 89,50",
//     targetPrice: "R$ 130,00",
//     volume: "R$ 2.3B",
//     marketCap: "R$ 89.5B",
//   },
//   {
//     name: "BOVA11 (Ibovespa ETF)",
//     sector: "Diversificado",
//     potential: "+28%",
//     risk: "Médio-Alto",
//     timeframe: "12-18 meses",
//     reason: "Recuperação econômica brasileira",
//     currentPrice: "R$ 112,30",
//     targetPrice: "R$ 144,00",
//     volume: "R$ 890M",
//     marketCap: "R$ 12.1B",
//   },
//   {
//     name: "Bitcoin (BTC)",
//     sector: "Cripto",
//     potential: "+65%",
//     risk: "Muito Alto",
//     timeframe: "3-9 meses",
//     reason: "Aprovação de ETFs e halving",
//     currentPrice: "R$ 285.000",
//     targetPrice: "R$ 470.000",
//     volume: "R$ 127.9B",
//     marketCap: "R$ 4.7T",
//   },
//   {
//     name: "VALE3 (Vale)",
//     sector: "Mineração",
//     potential: "+35%",
//     risk: "Alto",
//     timeframe: "9-15 meses",
//     reason: "Demanda chinesa por minério",
//     currentPrice: "R$ 68,90",
//     targetPrice: "R$ 93,00",
//     volume: "R$ 1.2B",
//     marketCap: "R$ 287.6B",
//   },
// ]
3
const portfolioAllocation = [
  { category: "Ações Growth Tech", percentage: 35, color: "bg-chart-1" },
  { category: "Ações Value Brasil", percentage: 25, color: "bg-chart-2" },
  { category: "ETFs Internacionais", percentage: 20, color: "bg-chart-3" },
  { category: "Criptomoedas", percentage: 15, color: "bg-chart-4" },
  { category: "Reserva Tática", percentage: 5, color: "bg-chart-5" },
]

const performanceMetrics = [
  { label: "Rentabilidade 12M", value: 32.8, suffix: "%", trend: "up" },
  { label: "Patrimônio Total", value: 2.4, suffix: "M", prefix: "R$ ", trend: "up" },
  { label: "Sharpe Ratio", value: 1.85, suffix: "", trend: "up" },
  { label: "Volatilidade", value: 18.2, suffix: "%", trend: "neutral" },
]

// ================= Página =================
export default function ArrojadoPage() {
  return (
    <AuthRedirect>
      <PageLayout>
        <HeroSection/>
   
      <div className="min-h-screen bg-background">
          <Section>
  <Card className="bg-background/50 backdrop-blur-lg shadow-lg border-primary/20">
    <CardHeader>
      <CardTitle className="flex flex-col gap-2 text-3xl font-bold">
        <span>Olá, Investidor Agressivo</span>
        <span className="text-lg font-medium text-muted-foreground">
          Seu perfil indica que você busca maior retorno assumindo mais riscos
        </span>
      </CardTitle>
      <CardDescription className="mt-2 text-sm text-muted-foreground">
        Aproveite nossas recomendações personalizadas e conteúdos educativos para maximizar seus investimentos.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="flex-1 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg">
          <h4 className="font-semibold text-red-600 mb-2">Foco em Crescimento</h4>
          <p className="text-sm text-muted-foreground">
            Estratégias para potencializar seus ganhos no mercado financeiro.
          </p>
        </div>
        <div className="flex-1 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
          <h4 className="font-semibold text-yellow-600 mb-2">Diversificação</h4>
          <p className="text-sm text-muted-foreground">
            Distribua seus investimentos em diferentes ativos para equilibrar risco e retorno.
          </p>
        </div>
        <div className="flex-1 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
          <h4 className="font-semibold text-green-600 mb-2">Planejamento</h4>
          <p className="text-sm text-muted-foreground">
            Acompanhe seus objetivos financeiros e ajuste sua estratégia regularmente.
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</Section>
<Section>
   <CryptoGraph />
</Section>
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* <Card className="border-l-4 border-l-chart-1 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Coins className="h-8 w-8 text-chart-1" />
                    Criptomoedas em Tempo Real
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Monitore suas posições em cripto com análise técnica avançada
                  </CardDescription>
                </div>
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium">
                  <Activity className="h-4 w-4 mr-2" />
                  Ao vivo
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="charts" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="charts">Gráficos Avançados</TabsTrigger>
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                </TabsList>

                <TabsContent value="charts" className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {cryptoData.map((crypto, index) => (
                      <EnhancedCryptoChart
                        key={index}
                        symbol={crypto.symbol}
                        name={crypto.name}
                        currentPrice={crypto.price}
                        change={crypto.change}
                      />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="overview" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cryptoData.map((crypto, index) => (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold">{crypto.symbol}</h3>
                            <Badge variant={crypto.change > 0 ? "default" : "destructive"} className="text-xs">
                              {crypto.change > 0 ? (
                                <TrendingUp className="h-3 w-3 mr-1" />
                              ) : (
                                <TrendingDown className="h-3 w-3 mr-1" />
                              )}
                              {Math.abs(crypto.change)}%
                            </Badge>
                          </div>
                          <p className="text-lg font-bold">
                            R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </p>
                          <p className="text-sm text-muted-foreground">{crypto.name}</p>
                          <div className="mt-3">
                            <EnhancedCryptoChart
                              symbol={crypto.symbol}
                              name={crypto.name}
                              currentPrice={crypto.price}
                              change={crypto.change}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card> */}

          {/* <Card className="border-l-4 border- shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Activity className="h-8 w-8 text-primary" />
                    Controle de Investimentos
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Registre e monitore seus aportes com precisão profissional
                  </CardDescription>
                </div>
                <Button className="bg-gradient-to-r from-primary via-primary/95 to-secondary/90" size="lg">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Adicionar Investimento
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
                <Card className="lg:col-span-1 bg-gradient-to-br from-card to-muted/50">
                  <CardHeader>
                    <CardTitle className="text-xl">Registrar Novo Aporte</CardTitle>
                    <CardDescription>Adicione seus investimentos realizados</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ativo/Produto</label>
                      <select className="w-full p-3 border rounded-lg bg-background">
                        <option>NVDA34 (NVIDIA)</option>
                        <option>BOVA11 (Ibovespa ETF)</option>
                        <option>Bitcoin (BTC)</option>
                        <option>VALE3 (Vale)</option>
                        <option>Tesouro IPCA+ 2035</option>
                        <option>Outro...</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Valor (R$)</label>
                        <input
                          type="number"
                          placeholder="5.000"
                          className="w-full p-3 border rounded-lg bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Data</label>
                        <input type="date" className="w-full p-3 border rounded-lg bg-background" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Estratégia</label>
                      <select className="w-full p-3 border rounded-lg bg-background">
                        <option>Posição de Crescimento</option>
                        <option>Hedge Cambial</option>
                        <option>Diversificação Global</option>
                        <option>Oportunidade Tática</option>
                      </select>
                    </div>
                    <Button className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                      Registrar Investimento
                    </Button>
                  </CardContent>
                </Card> */}

                {/* Recent Investments */}
                {/* <Card className="lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-xl">Investimentos Recentes</CardTitle>
                    <CardDescription>Seus últimos aportes e performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          asset: "NVDA34",
                          amount: "R$ 8.500",
                          date: "Hoje",
                          performance: "+2.8%",
                          color: "text-chart-2",
                        },
                        {
                          asset: "Bitcoin",
                          amount: "R$ 12.000",
                          date: "Ontem",
                          performance: "+5.2%",
                          color: "text-chart-2",
                        },
                        {
                          asset: "BOVA11",
                          amount: "R$ 6.000",
                          date: "2 dias",
                          performance: "-1.1%",
                          color: "text-destructive",
                        },
                        {
                          asset: "VALE3",
                          amount: "R$ 4.500",
                          date: "3 dias",
                          performance: "+3.7%",
                          color: "text-chart-2",
                        },
                      ].map((investment, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-muted rounded-xl hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <TrendingUp className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-semibold text-lg">{investment.asset}</p>
                              <p className="text-sm text-muted-foreground">{investment.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-lg">{investment.amount}</p>
                            <p className={`text-sm font-medium ${investment.color}`}>{investment.performance}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6 bg-transparent">
                      Ver Histórico Completo
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card> */}

          {/* <Card className="border-l-4 border-l-secondary shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Eye className="h-8 w-8 text-secondary" />
                    Oportunidades em Destaque
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Ativos com maior potencial de valorização baseado em análise técnica e fundamentalista
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                  <Star className="h-4 w-4 mr-2" />
                  Atualizado hoje
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {marketOpportunities.map((opportunity, index) => (
                  <Card
                    key={index}
                    className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-secondary/20 to-transparent rounded-bl-full"></div>
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl font-bold">{opportunity.name}</CardTitle>
                          <p className="text-base text-muted-foreground mt-1">{opportunity.sector}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-chart-2">{opportunity.potential}</div>
                          <Badge
                            variant={opportunity.risk === "Muito Alto" ? "destructive" : "secondary"}
                            className="text-sm mt-1"
                          >
                            {opportunity.risk}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-2 gap-6 text-base">
                        <div>
                          <p className="text-muted-foreground font-medium">Preço Atual</p>
                          <p className="font-bold text-lg">{opportunity.currentPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-medium">Meta</p>
                          <p className="font-bold text-lg text-chart-2">{opportunity.targetPrice}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-medium">Volume 24h</p>
                          <p className="font-bold text-lg">{opportunity.volume}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground font-medium">Market Cap</p>
                          <p className="font-bold text-lg">{opportunity.marketCap}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground font-medium">Prazo Estimado</p>
                          <p className="font-bold text-lg">{opportunity.timeframe}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-muted rounded-xl">
                        <p className="text-base font-semibold mb-2">Tese de Investimento:</p>
                        <p className="text-base text-muted-foreground">{opportunity.reason}</p>
                      </div>
                      <Button
                        className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors text-base py-3"
                        size="lg"
                      >
                        <Briefcase className="h-5 w-5 mr-2" />
                        Analisar Oportunidade
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card> */}

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <PieChart className="h-6 w-6 text-secondary" />
                  Alocação Estratégica
                </CardTitle>
                <CardDescription>Distribuição otimizada para máximo crescimento com gestão de risco</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {portfolioAllocation.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="font-medium">{item.category}</span>
                      </div>
                      <span className="text-lg font-bold">
                        <AnimatedCounter end={item.percentage} suffix="%" />
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
            {/* <Card className="bg-gradient-to-br from-card to-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                  Simulador Avançado
                </CardTitle>
                <CardDescription>Projeção baseada em performance histórica e cenários de mercado</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground">Investimento Inicial</p>
                    <p className="text-2xl font-bold text-primary">R$ 50.000</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <p className="text-sm text-muted-foreground">Prazo</p>
                    <p className="text-2xl font-bold text-secondary">5 anos</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-chart-2/10 rounded-lg border border-chart-2/20">
                    <div>
                      <p className="text-sm text-muted-foreground">Cenário Otimista</p>
                      <p className="text-sm text-chart-2">35% a.a.</p>
                    </div>
                    <p className="text-xl font-bold text-chart-2">
                      R$ <AnimatedCounter end={224} suffix="K" />
                    </p>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-chart-3/10 rounded-lg border border-chart-3/20">
                    <div>
                      <p className="text-sm text-muted-foreground">Cenário Realista</p>
                      <p className="text-sm text-chart-3">25% a.a.</p>
                    </div>
                    <p className="text-xl font-bold text-chart-3">
                      R$ <AnimatedCounter end={152} suffix="K" />
                    </p>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-chart-4/10 rounded-lg border border-chart-4/20">
                    <div>
                      <p className="text-sm text-muted-foreground">Cenário Conservador</p>
                      <p className="text-sm text-chart-4">15% a.a.</p>
                    </div>
                    <p className="text-xl font-bold text-chart-4">
                      R$ <AnimatedCounter end={100} suffix="K" />
                    </p>
                  </div>
                </div>

                <Button className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors text-base py-3" size="lg">
                  <Target className="h-4 w-4 mr-2" />
                  Criar Estratégia Personalizada
                </Button>
              </CardContent>
            </Card> */}
             <div className="flex justify-center mt-6">
                <Link href="/perfil/agressivo/financas" passHref>
                  <Button size="lg" className="group" asChild>
                    <span className="flex items-center">
                      Ver Relatório Completo das Minhas Finanças
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Zap className="h-6 w-6 text-secondary" />
                Insights para Maximizar Ganhos
              </CardTitle>
              <CardDescription>
                Estratégias avançadas baseadas nas melhores oportunidades do mercado atual
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <TrendingUp className="h-6 w-6 text-chart-2" />,
                    title: "Aproveite a Correção do Mercado",
                    description:
                      "Ibovespa em -8% no mês. Oportunidade para posições em VALE3, PETR4 e bancos com desconto.",
                    action: "Ver Ações em Desconto",
                    urgency: "high",
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-chart-1" />,
                    title: "Diversifique em Tech Global",
                    description: "NVDA34 e MSFT34 com potencial de 40%+ com boom da IA. Considere aumentar exposição.",
                    action: "Analisar ETFs Tech",
                    urgency: "medium",
                  },
                  {
                    icon: <DollarSign className="h-6 w-6 text-chart-3" />,
                    title: "Rebalanceamento Tático",
                    description: "Reduza posição em REITs (-12% YTD) e aumente em commodities (+18% YTD).",
                    action: "Simular Rebalanceamento",
                    urgency: "medium",
                  },
                  {
                    icon: <AlertTriangle className="h-6 w-6 text-chart-4" />,
                    title: "Hedge Cambial Recomendado",
                    description: "Dólar em R$ 5,20. Considere hedge com USIM5 ou posições em IVVB11.",
                    action: "Configurar Hedge",
                    urgency: "high",
                  },
                ].map((insight, i) => (
                  <Card
                    key={i}
                    className={`relative overflow-hidden group hover:shadow-lg transition-all duration-300 ${
                      insight.urgency === "high" ? "border-l-4 border-l-chart-4" : "border-l-4 border-l-chart-2"
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-muted rounded-lg">{insight.icon}</div>
                        <div className="flex-1">
                          <CardTitle className="text-lg">{insight.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                        </div>
                        {insight.urgency === "high" && (
                          <Badge variant="destructive" className="bg-primary/90 text-primary-foreground">
                            Urgente
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-primary/20 group-hover:text-secondary-foreground group-hover:border-secondary transition-colors bg-transparent"
                      >
                        {insight.action}
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </PageLayout>
    </AuthRedirect>
  )
}
