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
import { PageLayout } from "@/components/page-layout"
import { HeroSection } from "@/components/hero-section"
import { FinancialStatus } from "@/components/financial-status"

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
      <PageLayout>
        <div className="min-h-screen bg-background">
          < HeroSection />

          <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
            <Card className="bg-transparent backdrop-blur-none shadow-xl rounded-2xl p-6">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                  <Target className="h-8 w-8 text-green-500" />O que define o investidor moderado
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  Características principais do seu perfil de investimento
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: CheckCircle, color: "bg-blue-500", text: "Busca equilíbrio entre risco e retorno" },
                    { icon: CheckCircle, color: "bg-green-500", text: "Aceita volatilidade moderada" },
                    { icon: CheckCircle, color: "bg-purple-500", text: "Valoriza diversificação estratégica" },
                    { icon: CheckCircle, color: "bg-orange-500", text: "Foco no médio e longo prazo" },
                    { icon: CheckCircle, color: "bg-red-500", text: "Quer profissionalizar investimentos" },
                    { icon: CheckCircle, color: "bg-indigo-500", text: "Busca crescimento consistente" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-transparent  rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className={`p-3 rounded-full ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-500 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  Acompanhe suas finanças
                </CardTitle>

              </CardHeader>

              <CardContent>



                {/* Status Financeiro */}
                <div className="mb-6">
                  <FinancialStatus />
                </div>

                {/* Botão de ação */}
                <div className="flex justify-center">
                  <Link href="/perfil/moderado/financas">
                    <Button
                      size="lg"
                      className="bg-primary text-black flex items-center gap-2 px-6 py-3 rounded-xl"
                    >
                      Minhas Finanças
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>




            <Card className="bg-/80 backdrop-blur-sm  shadow-xl">
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
                  <h4 className="font-semibold text-primary mb-2">💡 Estratégias de Diversificaçã em breve.</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border backdrop-blur-lg shadow-lg border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">
                  Investimentos Moderados com IA
                </CardTitle>
                <CardDescription className="mt-2 text-sm text-muted-foreground">
                  Receba recomendações personalizadas para equilibrar risco e retorno e crescer seu patrimônio de forma estratégica.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                  <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <h4 className="font-semibold text-blue-600 mb-2">Equilíbrio de Risco</h4>
                    <p className="text-sm text-muted-foreground">
                      Identifique oportunidades que combinam segurança e potencial de crescimento para sua carteira.
                    </p>
                  </div>
                  <div className="flex-1 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-2">Diversificação Inteligente</h4>
                    <p className="text-sm text-muted-foreground">
                      Receba estratégias que distribuem investimentos em diferentes classes para reduzir volatilidade e otimizar resultados.
                    </p>
                  </div>
                  <div className="flex-1 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <h4 className="font-semibold text-green-600 mb-2">Crescimento Sustentável</h4>
                    <p className="text-sm text-muted-foreground">
                      Defina metas de médio e longo prazo e acompanhe sua evolução com recomendações contínuas da IA.
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex py-6 justify-center">
                  <Button size="lg" asChild className="bg-primary text-background hover:bg-primary/90">
                    <Link href="/perfil/moderado/chatbot">Conversar agora</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-background/50 backdrop-blur-lg shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <PieChart className="mr-2 h-6 w-6 text-primary" />
                  Simulações para Investidores Moderados
                </CardTitle>
                <CardDescription>
                  Planeje sua carteira equilibrada, testando cenários de crescimento e diversificação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-blue-800 dark:text-blue-200">Simule diferentes aportes</h4>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Teste valores iniciais e contribuições mensais para acompanhar seu crescimento sustentável
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-purple-800 dark:text-purple-200">Defina horizontes de investimento</h4>
                        <p className="text-sm text-purple-700 dark:text-purple-300">
                          Analise como sua carteira performa no médio e longo prazo
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Compare estratégias diversificadas</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Renda fixa, variável, cryptomoedas, visando equilíbrio de risco e retorno
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200">Visualize resultados estratégicos</h4>
                        <p className="text-sm text-orange-700 dark:text-orange-300">
                          Veja o montante final, rentabilidade e crescimento médio da sua carteira
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200">Acesse sempre que quiser</h4>
                        <p className="text-sm text-teal-700 dark:text-teal-300">
                          Use nossa plataforma para simular diferentes cenários de investimento de forma prática
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4">
                  <Button size="lg" asChild className="bg-primary text-background hover:bg-primary/90">
                    <Link href="/perfil/moderado/simulacao">
                      Acessar Simulações <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
                    <Card
                      key={index}
                      className="border-l-4 border-l-cyan-500 primary-500 shadow-lg hover:shadow-2xl transition-all duration-300 p-4"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg font-semibold text-primary">{product.name}</CardTitle>
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
                        <CardDescription className="text-sm text-gray-500">{product.description}</CardDescription>
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
                        <Button className="w-full bg-primary/30">
                          Em Breve.
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
