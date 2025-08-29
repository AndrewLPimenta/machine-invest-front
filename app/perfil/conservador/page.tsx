
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Target, 
  Calendar, 
  CheckCircle, 
  Shield, 
  Zap, 
  TrendingDown,
  RefreshCw
} from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { InvestmentForm } from "@/components/investment-form"
import { InvestmentSummary } from "@/components/investment-summary"
import { PageLayout } from "@/components/page-layout"
function AnimatedCounter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(end), 100)
    return () => clearTimeout(timer)
  }, [end])

  return (
    <span>
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  )
}

const conservativeProducts = [
  {
    name: "Tesouro Selic 2026",
    risk: "Baixo",
    return: "SELIC + 0.15%",
    liquidity: "Diária",
    minValue: "R$ 30,00",
    description: "Renda fixa com liquidez diária e segurança máxima",
    highlight: "Recomendado",
  },
  {
    name: "CDB Banco do Brasil",
    risk: "Baixo",
    return: "110% CDI",
    liquidity: "No vencimento",
    minValue: "R$ 1.000,00",
    description: "CDB com garantia FGC até R$ 250.000",
    highlight: "",
  },
  {
    name: "LCI Santander",
    risk: "Baixo",
    return: "92% CDI",
    liquidity: "90 dias",
    minValue: "R$ 5.000,00",
    description: "Isento de imposto de renda para pessoas físicas",
    highlight: "Popular",
  },
  {
    name: "Fundos de Renda Fixa",
    risk: "Baixo-Médio",
    return: "100-115% CDI",
    liquidity: "D+1 a D+30",
    minValue: "R$ 100,00",
    description: "Gestão profissional com diversificação",
    highlight: "Diversificado",
  },
  {
    name: "Debêntures Incentivadas",
    risk: "Médio",
    return: "IPCA + 5-6%",
    liquidity: "Mercado secundário",
    minValue: "R$ 1.000,00",
    description: "Isentas de IR para pessoa física",
    highlight: "Longo Prazo",
  },
  {
    name: "CRI e CRA",
    risk: "Médio",
    return: "CDI + 1-2%",
    liquidity: "Mercado secundário",
    minValue: "R$ 1.000,00",
    description: "Títulos lastreados em crédito imobiliário e agronegócio",
    highlight: "Setorial",
  },
]

const portfolioAllocation = [
  { category: "Tesouro Direto", percentage: 50, color: "bg-blue-500", description: "Segurança e liquidez" },
  { category: "CDBs e LCIs", percentage: 30, color: "bg-green-500", description: "Rentabilidade conservadora" },
  { category: "Fundos RF", percentage: 15, color: "bg-purple-500", description: "Diversificação profissional" },
  { category: "CRI/CRA", percentage: 5, color: "bg-orange-500", description: "Exposição setorial" },
]

export default function ConservadorPage() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleInvestmentAdded = () => {
    setRefreshKey(prev => prev + 1) // Força recarregamento dos dados
  }

  return (
<PageLayout>
    <AuthRedirect>
      <div className="min-h-screen bg-background">
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white">
          <div className="relative px-4 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <Shield className="h-10 w-10" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">Perfil Conservador</h1>
                    <p className="text-xl mt-2">Segurança e Preservação de Capital</p>
                  </div>
                </div>

                <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                  Você valoriza segurança acima de tudo e busca proteger seu patrimônio com investimentos de baixo risco
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Badge variant="secondary" className="px-6 py-3 text-base font-medium bg-white/20 border-white/30">
                    <Shield className="h-5 w-5 mr-2 text-blue-400" />
                    Segurança
                  </Badge>
                  <Badge variant="secondary" className="px-6 py-3 text-base font-medium bg-white/20 border-white/30">
                    <TrendingUp className="h-5 w-5 mr-2 text-blue-400" />
                    Estabilidade
                  </Badge>
                  <Badge variant="secondary" className="px-6 py-3 text-base font-medium bg-white/20 border-white/30">
                    <Target className="h-5 w-5 mr-2 text-blue-400" />
                    Previsibilidade
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <Card className="bg-white/10 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-blue-300" />
                      <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">SEGURANÇA</span>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">80-90%</p>
                    <p className="text-base text-blue-100">em renda fixa protegida</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-blue-300" />
                      <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">RETORNO</span>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">
                      <AnimatedCounter end={8} suffix="%" />
                    </p>
                    <p className="text-base text-blue-100">retorno anual esperado</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Target className="h-6 w-6 text-blue-300" />
                      <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">PRAZO</span>
                    </div>
                    <p className="text-4xl font-bold text-white mb-2">1-3 anos</p>
                    <p className="text-base text-blue-100">horizonte ideal</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          {/* Sistema de Acompanhamento de Investimentos */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Target className="h-8 w-8 text-blue-600" />
                    Acompanhe seus Investimentos
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Registre onde você está investindo e acompanhe sua evolução
                  </CardDescription>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Novo Investimento
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Investment Form */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600">Registrar Investimento</CardTitle>
                    <CardDescription>Adicione seus aportes mensais ou pontuais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <InvestmentForm onInvestmentAdded={handleInvestmentAdded} />
                  </CardContent>
                </Card>

                {/* Investment Summary */}
                <InvestmentSummary key={refreshKey} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                <Shield className="h-8 w-8 text-blue-600" />
                O que define o investidor conservador
              </CardTitle>
              <CardDescription className="text-lg mt-3">
                Características principais do seu perfil de investimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: CheckCircle,
                    color: "text-blue-600",
                    text: "Prioriza segurança acima da rentabilidade",
                    bg: "bg-blue-50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-green-600",
                    text: "Prefere liquidez e previsibilidade",
                    bg: "bg-green-50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-purple-600",
                    text: "Evita volatilidade e riscos desnecessários",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-orange-600",
                    text: "Foco em preservação do capital",
                    bg: "bg-orange-50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-red-600",
                    text: "Prefere investimentos de renda fixa",
                    bg: "bg-red-50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-indigo-600",
                    text: "Valoriza garantias como FGC",
                    bg: "bg-indigo-50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-6 ${item.bg} rounded-xl border-2 border-transparent hover:border-blue-200 transition-all duration-300`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-base font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <PieChart className="h-6 w-6 text-blue-600" />
                Carteira Conservadora Recomendada
              </CardTitle>
              <CardDescription className="text-base">
                Como construir uma carteira focada em segurança e estabilidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portfolioAllocation.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold text-gray-900">{item.category}</span>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-blue-600">
                        <AnimatedCounter end={item.percentage} suffix="%" />
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-100 rounded-xl">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Estratégia Conservadora</h4>
                <p className="text-sm text-blue-700">
                  Esta alocação prioriza <strong>segurança</strong> com Tesouro Direto e CDBs,
                  <strong> diversificação moderada</strong> com fundos de renda fixa, e uma pequena
                  exposição a <strong>créditos setoriais</strong> para incremento de rentabilidade.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                Produtos Ideais para Seu Perfil
              </CardTitle>
              <CardDescription className="text-base">
                Investimentos selecionados para construir uma carteira conservadora segura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {conservativeProducts.map((product, index) => (
                  <Card key={index} className="border-l-blue-500 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          {product.highlight && (
                            <Badge variant="secondary" className="mt-1 text-xs bg-blue-100 text-blue-800">
                              {product.highlight}
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant={
                            product.risk === "Médio"
                              ? "outline"
                              : "secondary"
                          }
                          className="text-xs bg-green-100 text-green-800"
                        >
                          {product.risk}
                        </Badge>
                      </div>
                      <CardDescription className="text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                        <div>
                          <p className="text-gray-600">Rentabilidade</p>
                          <p className="font-bold text-blue-600 text-base">{product.return}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Liquidez</p>
                          <p className="font-semibold">{product.liquidity}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-gray-600">Investimento Mínimo</p>
                          <p className="font-semibold text-lg">{product.minValue}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Simular Investimento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <DollarSign className="h-6 w-6 text-blue-600" />
                Simulador: Carteira Conservadora vs Poupança
              </CardTitle>
              <CardDescription className="text-base">
                Veja a diferença de investir com estratégia versus deixar na poupança
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Carteira Conservadora */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Carteira Conservadora
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Investimento Inicial</p>
                      <p className="text-xl font-bold text-blue-600">R$ 10.000</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Aporte Mensal</p>
                      <p className="text-xl font-bold text-blue-600">R$ 500</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Rentabilidade</p>
                      <p className="text-xl font-bold text-blue-600">8% a.a.</p>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Em 3 anos</p>
                      <p className="text-xl font-bold text-blue-600">
                        R$ <AnimatedCounter end={29850} />
                      </p>
                    </div>
                  </div>
                </div>

                {/* Poupança */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-red-600 flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Poupança Tradicional
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Investimento Inicial</p>
                      <p className="text-xl font-bold text-red-600">R$ 10.000</p>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Aporte Mensal</p>
                      <p className="text-xl font-bold text-red-600">R$ 500</p>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Rentabilidade</p>
                      <p className="text-xl font-bold text-red-600">6.2% a.a.</p>
                    </div>
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Em 3 anos</p>
                      <p className="text-xl font-bold text-red-700">
                        R$ <AnimatedCounter end={28120} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-100 rounded-xl text-center">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Diferença de R$ 1.730 em 3 anos!</h4>
                <p className="text-blue-700">
                  Com uma carteira conservadora bem estruturada, você ganha <strong>mais segurança</strong> e ainda 
                  <strong> rentabiliza melhor</strong> que a poupança.
                </p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Começar a Investir
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-blue-50 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Zap className="h-6 w-6 text-blue-600" />
                Estratégias para Investidores Conservadores
              </CardTitle>
              <CardDescription className="text-base">
                Dicas práticas para maximizar segurança e rentabilidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <Shield className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-blue-600 mb-2">1. Diversificação na Renda Fixa</h4>
                    <p className="text-gray-700 mb-3">
                      Mesmo sendo conservador, diversifique entre diferentes emissores e prazos. 
                      Combine Tesouro Direto, CDBs de bons bancos, LCIs/LCAs e debêntures incentivadas.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Ação prática:</strong> Aloque 50% em Tesouro Direto, 30% em CDBs/LCIs, 
                        15% em fundos de renda fixa e 5% em créditos privados (CRI/CRA)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <Calendar className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-blue-600 mb-2">2. Escalonamento de Prazos</h4>
                    <p className="text-gray-700 mb-3">
                      Não concentre todos os investimentos no mesmo vencimento. 
                      Crie uma "escada" de títulos com diferentes datas de vencimento para ter liquidez constante.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Ação prática:</strong> Para cada R$ 10.000, divida em 4 títulos com vencimentos 
                        em 1, 2, 3 e 4 anos. Assim, todo ano você terá um título vencendo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <BarChart3 className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-blue-600 mb-2">3. Use o FGC a Seu Favor</h4>
                    <p className="text-gray-700 mb-3">
                      Aproveite a garantia do Fundo Garantidor de Créditos (até R$ 250 mil por CPF e instituição) 
                      para diversificar entre diferentes bancos e financeiras.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Ação prática:</strong> Limite a R$ 250 mil por instituição financeira 
                        e diversifique entre 3-4 bancos diferentes para maior segurança.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 p-6 bg-white rounded-xl">
                  <TrendingUp className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-blue-600 mb-2">4. Revisão Semestral</h4>
                    <p className="text-gray-700 mb-3">
                      A cada 6 meses, revise sua carteira, verifique se os prazos ainda estão adequados 
                      e se surgiram novas oportunidades com melhor relação risco-retorno.
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Ação prática:</strong> Marque no calendário revisões semestrais. 
                        Aproveite para reinvestir os valores que venceram.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthRedirect>
    </PageLayout>
  )
}