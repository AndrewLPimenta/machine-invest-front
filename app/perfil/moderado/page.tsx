"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthRedirect } from "@/components/auth-redirect"
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
  ArrowRight,
} from "lucide-react"

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

const moderateProducts = [
  {
    name: "Tesouro IPCA+ 2035",
    risk: "Baixo",
    return: "IPCA + 5.85%",
    liquidity: "Diária",
    minValue: "R$ 30,00",
    description: "Proteção contra inflação com rentabilidade real garantida",
    highlight: "Recomendado",
  },
  {
    name: "CDB Banco Inter",
    risk: "Baixo",
    return: "108% CDI",
    liquidity: "No vencimento",
    minValue: "R$ 1.000,00",
    description: "CDB com garantia do FGC até R$ 250.000",
    highlight: "",
  },
  {
    name: "Fundo Multimercado XP",
    risk: "Médio",
    return: "CDI + 3.2%",
    liquidity: "D+30",
    minValue: "R$ 500,00",
    description: "Diversificação em múltiplos mercados e estratégias",
    highlight: "Popular",
  },
  {
    name: "ETF IVVB11 (S&P 500)",
    risk: "Médio-Alto",
    return: "22.8%",
    liquidity: "Diária",
    minValue: "R$ 150,00",
    description: "Exposição ao mercado americano com baixo custo",
    highlight: "Internacional",
  },
  {
    name: "FII HGLG11",
    risk: "Médio",
    return: "8.5% + dividendos",
    liquidity: "Diária",
    minValue: "R$ 120,00",
    description: "Fundo imobiliário com foco em logística",
    highlight: "Dividendos",
  },
  {
    name: "Ações ITUB4",
    risk: "Alto",
    return: "15.2%",
    liquidity: "Diária",
    minValue: "R$ 25,00",
    description: "Ações do Itaú Unibanco, maior banco privado do país",
    highlight: "Blue Chip",
  },
]

const portfolioAllocation = [
  { category: "Renda Fixa", percentage: 40, color: "bg-blue-500", description: "Tesouro, CDBs, LCIs" },
  {
    category: "Fundos Multimercado",
    percentage: 30,
    color: "bg-green-500",
    description: "Diversificação profissional",
  },
  { category: "Ações e ETFs", percentage: 20, color: "bg-purple-500", description: "Crescimento de longo prazo" },
  { category: "FIIs", percentage: 10, color: "bg-orange-500", description: "Renda passiva mensal" },
]

export default function ModeradoPage() {
  return (
    <AuthRedirect>
      <div className="min-h-screen bg-background">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-secondary/20 text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/abstract-financial-pattern.png')] opacity-10"></div>
          <div className="relative px-4 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-4 bg-/20 rounded-2xl backdrop-blur-sm">
                    <BarChart3 className="h-10 w-10" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">Perfil Moderado</h1>
                    <p className="text-xl mt-2">Equilibrando Segurança e Crescimento</p>
                  </div>
                </div>

                <p className="text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                  Você já não é iniciante e busca organização, diversificação e crescimento profissional dos seus
                  investimentos
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium  border-white/30"
                  >
                    <Shield className="h-5 w-5 mr-2 text-primary" />
                    Proteção
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium  border-white/30"
                  >
                    <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                    Crescimento
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium border-white/30"
                  >
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Estratégia
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                <Card className="backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-600 uppercase tracking-wide">PROTEÇÃO</span>
                    </div>
                    <p className="text-4xl font-bold text-900 mb-2">40-60%</p>
                    <p className="text-base text-600">em renda fixa segura</p>
                  </CardContent>
                </Card>

                <Card className=" backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-600 uppercase tracking-wide">CRESCIMENTO</span>
                    </div>
                    <p className="text-4xl font-bold text-900 mb-2">
                      <AnimatedCounter end={16} suffix="%" />
                    </p>
                    <p className="text-base text-600">retorno anual esperado</p>
                  </CardContent>
                </Card>

                <Card className=" backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Target className="h-6 w-6 text-primary" />
                      <span className="text-sm font-semibold text-600 uppercase tracking-wide">PRAZO</span>
                    </div>
                    <p className="text-4xl font-bold text-900 mb-2">2-5 anos</p>
                    <p className="text-base text-600">horizonte ideal</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <Card className="border-l-4 border-l--500 shadow-lg">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                    <Target className="h-8 w-8 text-primary" />
                    Acompanhe seus Investimentos
                  </CardTitle>
                  <CardDescription className="text-lg mt-3">
                    Registre onde você está investindo e veja sua carteira crescer
                  </CardDescription>
                </div>
                <Button className="bg-primary hover:bg-primary-100" size="lg">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Novo Investimento
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Investment Form */}
                <Card className="bg--to-br ">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Registrar Investimento</CardTitle>
                    <CardDescription>Adicione seus aportes mensais ou pontuais</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tipo de Investimento</label>
                      <select className="w-full p-3 border rounded-lg bg-">
                        <option>Tesouro IPCA+ 2035</option>
                        <option>CDB Banco Inter</option>
                        <option>Fundo Multimercado XP</option>
                        <option>ETF IVVB11 (S&P 500)</option>
                        <option>FII HGLG11</option>
                        <option>Ações ITUB4</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Valor (R$)</label>
                        <input type="number" placeholder="1.000" className="w-full p-3 border rounded-lg bg-" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Data</label>
                        <input type="date" className="w-full p-3 border rounded-lg bg-" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Categoria</label>
                      <select className="w-full p-3 border rounded-lg bg-">
                        <option>Renda Fixa</option>
                        <option>Fundos Multimercado</option>
                        <option>Ações e ETFs</option>
                        <option>Fundos Imobiliários</option>
                      </select>
                    </div>
                    <Button className="w-full bg-primary hover:text-primary-100" size="lg">
                      Adicionar à Carteira
                    </Button>
                  </CardContent>
                </Card>

                {/* Investment Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Resumo dos Investimentos</CardTitle>
                    <CardDescription>Seus aportes este mês</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-50 rounded-xl text-center">
                          <p className="text-sm text-primary">Total Investido</p>
                          <p className="text-2xl font-bold text-primary">R$ 3.200</p>
                        </div>
                        <div className="p-4 bg-50 rounded-xl text-center">
                          <p className="text-sm text-600">Este Mês</p>
                          <p className="text-2xl font-bold text-600">R$ 800</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Distribuição Atual</h4>
                        {[
                          { category: "Renda Fixa", amount: "R$ 1.280", percentage: 40, color: "bg-blue-500" },
                          { category: "Fundos", amount: "R$ 960", percentage: 30, color: "bg-green-500" },
                          { category: "Ações/ETFs", amount: "R$ 640", percentage: 20, color: "bg-purple-500" },
                          { category: "FIIs", amount: "R$ 320", percentage: 10, color: "bg-orange-500" },
                        ].map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{item.category}</span>
                              <span className="text-sm font-bold">{item.amount}</span>
                            </div>
                            <Progress value={item.percentage} className="h-2" />
                          </div>
                        ))}
                      </div>

                      <Button variant="outline" className="w-full bg-transparent">
                        Ver Detalhes Completos
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l--500 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                <Target className="h-8 w-8 text-green-600" />O que define o investidor moderado
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
                    text: "Busca equilíbrio entre risco e retorno",
                    bg: "bg--50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-green-600",
                    text: "Aceita volatilidade moderada",
                    bg: "bg--50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-purple-600",
                    text: "Valoriza diversificação estratégica",
                    bg: "bg--50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-orange-600",
                    text: "Foco no médio e longo prazo",
                    bg: "bg--50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-red-600",
                    text: "Quer profissionalizar investimentos",
                    bg: "bg--50",
                  },
                  {
                    icon: CheckCircle,
                    color: "text-indigo-600",
                    text: "Busca crescimento consistente",
                    bg: "bg--50",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-6 ${item.bg} rounded-xl border-2 border-transparent hover:border-200 transition-all duration-300`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-base font-medium text-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-/80 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <PieChart className="h-6 w-6 text-green-600" />
                Carteira Balanceada Recomendada
              </CardTitle>
              <CardDescription className="text-base">
                Como construir uma carteira que equilibra segurança e crescimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {portfolioAllocation.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-semibold text-900">{item.category}</span>
                        <p className="text-sm text-600">{item.description}</p>
                      </div>
                      <span className="text-2xl font-bold text-900">
                        <AnimatedCounter end={item.percentage} suffix="%" />
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-3" />
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg--to-r from-50 to-50 rounded-xl">
                <h4 className="font-semibold text-primary mb-2">💡 Estratégia de Diversificação</h4>
                <p className="text-sm text-700">
                  Esta alocação permite que você tenha <strong>estabilidade</strong> com renda fixa,
                  <strong> crescimento</strong> com ações e ETFs, e <strong>renda passiva</strong> com FIIs. Rebalanceie
                  a cada 6-12 meses para manter as proporções ideais.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className=" backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Produtos Ideais para Seu Perfil
              </CardTitle>
              <CardDescription className="text-base">
                Investimentos selecionados para construir uma carteira moderada eficiente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {moderateProducts.map((product, index) => (
                  <Card key={index} className="border-l-primary-500 hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{product.name}</CardTitle>
                          {product.highlight && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {product.highlight}
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant={
                            product.risk === "Alto"
                              ? "destructive"
                              : product.risk === "Médio-Alto"
                                ? "destructive"
                                : "secondary"
                          }
                          className="text-xs"
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
                          <p className="font-bold text-primary text-base">{product.return}</p>
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
                      <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary">
                        Simular Investimento
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className=" backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <DollarSign className="h-6 w-6 text-primary" />
                Simulador: Carteira Moderada vs Poupança
              </CardTitle>
              <CardDescription className="text-base">
                Veja a diferença de investir com estratégia versus deixar na poupança
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Carteira Moderada */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Carteira Moderada
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 border border-primary/100  rounded-xl text-center">
                      <p className="text-sm text-gray-600">Investimento Inicial</p>
                      <p className="text-xl font-bold text-primary">R$ 10.000</p>
                    </div>
                    <div className="p-4 border border-primary/100  rounded-xl text-center">
                      <p className="text-sm text-gray-600">Aporte Mensal</p>
                      <p className="text-xl font-bold text-primary">R$ 500</p>
                    </div>
                    <div className="p-4 border border-primary/100 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Rentabilidade</p>
                      <p className="text-xl font-bold text-primary">16% a.a.</p>
                    </div>
                    <div className="p-4 border border-primary/100 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Em 3 anos</p>
                      <p className="text-xl font-bold text-primary">
                        R$ <AnimatedCounter end={35420} />
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
                    <div className="p-4 p-4 border border-primary/12 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Investimento Inicial</p>
                      <p className="text-xl font-bold text-red-600">R$ 10.000</p>
                    </div>
                    <div className="p-4 p-4 border border-primary/12  rounded-xl text-center">
                      <p className="text-sm text-gray-600">Aporte Mensal</p>
                      <p className="text-xl font-bold text-red-600">R$ 500</p>
                    </div>
                    <div className="p-4 p-4 border border-primary/12  rounded-xl text-center">
                      <p className="text-sm text-gray-600">Rentabilidade</p>
                      <p className="text-xl font-bold text-red-600">6.2% a.a.</p>
                    </div>
                    <div className="p-4 p-4 border border-primary/12 rounded-xl text-center">
                      <p className="text-sm text-gray-600">Em 3 anos</p>
                      <p className="text-xl font-bold text-red-700">
                        R$ <AnimatedCounter end={30180} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-2xl">
                    <Zap className="h-6 w-6 text-primary" />
                    Estratégias para Profissionalizar seus Investimentos
                  </CardTitle>
                  <CardDescription className="text-base">
                    Dicas práticas para evoluir de aplicador para investidor estratégico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex gap-4 p-6 bg-primary/20 rounded-xl">
                      <BarChart3 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">1. Construa uma Base Sólida</h4>
                        <p className="text-primary/80 mb-3">
                          Comece com 40-50% em renda fixa (Tesouro IPCA+, CDBs) para ter estabilidade. Isso é sua âncora
                          contra volatilidade.
                        </p>
                        <div className=" p-3 rounded-lg">
                          <p className="text-sm text-primary">
                            <strong>Ação prática:</strong> Invista primeiro em Tesouro IPCA+ 2035 para proteger contra inflação
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-primary/20 rounded-xl">
                      <PieChart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">2. Diversifique com Inteligência</h4>
                        <p className="text-primary/80 mb-3">
                          Não coloque todos os ovos na mesma cesta. Combine diferentes classes: fundos multimercado, ETFs internacionais, FIIs e algumas ações.
                        </p>
                        <div className=" p-3 rounded-lg">
                          <p className="text-sm text-primary">
                            <strong>Ação prática:</strong> Use ETFs como IVVB11 para ter exposição internacional com baixo custo
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-primary/20 rounded-xl">
                      <Calendar className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">3. Rebalanceie Regularmente</h4>
                        <p className="text-primary/80 mb-3">
                          A cada 6-12 meses, ajuste sua carteira para manter as proporções ideais. Venda o que subiu muito e compre o que está em desconto.
                        </p>
                        <div className="p-3 rounded-lg">
                          <p className="text-sm text-primary">
                            <strong>Ação prática:</strong> Configure lembretes trimestrais para revisar sua alocação
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 p-6 bg-primary/20 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg text-primary mb-2">4. Pense no Longo Prazo</h4>
                        <p className="text-primary/80 mb-3">
                          Investimentos moderados brilham no médio e longo prazo (2-5 anos). Não se desespere com volatilidade de curto prazo.
                        </p>
                        <div className="p-3 rounded-lg">
                          <p className="text-sm text-primary">
                            <strong>Ação prática:</strong> Defina objetivos claros (casa, aposentadoria) com prazos específicos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex justify-center mt-6">
                <Link href="/perfil/moderado/financas" passHref>
                  <Button size="lg" className="group" asChild>
                    <span className="flex items-center">
                      Ver Relatório Completo das Minhas Finanças
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>



        </div>
      </div>
    </AuthRedirect>
  )
}
