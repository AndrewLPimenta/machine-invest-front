"use client"

import React, { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerAnimation } from "@/components/animations/stragger-animation"
import {
  Zap,
  TrendingUp,
  DollarSign,
  PieChart,
  Target,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Flame,
} from "lucide-react"

import { AuthRedirect } from "@/components/auth-redirect"


// ================= AnimatedCounter =================
export interface AnimatedCounterProps {
  end: number
  duration?: number
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 1000 }) => {
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
    if (typeof value !== "number") return "0"
    return value.toFixed(0)
  }

  return <span>{formatValue(count)}</span>
}

// ================= Dados =================
const aggressiveProducts = [
  {
    name: "Ações Individuais",
    risk: "Alto",
    return: "22.50%",
    liquidity: "Diária",
    minValue: "R$ 100,00",
    description: "Investimento direto em ações de empresas listadas",
  },
  {
    name: "Fundos de Ações Growth",
    risk: "Alto",
    return: "25.80%",
    liquidity: "D+1",
    minValue: "R$ 500,00",
    description: "Fundos focados em empresas com alto potencial de crescimento",
  },
  {
    name: "ETFs Internacionais",
    risk: "Alto",
    return: "18.30%",
    liquidity: "Diária",
    minValue: "R$ 200,00",
    description: "Fundos que replicam índices internacionais",
  },
  {
    name: "Criptomoedas",
    risk: "Muito Alto",
    return: "45.20%",
    liquidity: "24/7",
    minValue: "R$ 50,00",
    description: "Moedas digitais com alta volatilidade",
  },
  {
    name: "Fundos Multimercado Agressivos",
    risk: "Alto",
    return: "28.90%",
    liquidity: "D+30",
    minValue: "R$ 1.000,00",
    description: "Fundos com estratégias arrojadas e uso de derivativos",
  },
  {
    name: "Startups e Venture Capital",
    risk: "Muito Alto",
    return: "35.00%",
    liquidity: "Baixíssima",
    minValue: "R$ 10.000,00",
    description: "Investimento em empresas em estágio inicial",
  },
]

const portfolioAllocation = [
  { category: "Ações Nacionais", percentage: 40, color: "bg-red-500" },
  { category: "Ações Internacionais", percentage: 25, color: "bg-purple-500" },
  { category: "Fundos Agressivos", percentage: 20, color: "bg-orange-500" },
  { category: "Criptomoedas", percentage: 10, color: "bg-yellow-500" },
  { category: "Reserva de Emergência", percentage: 5, color: "bg-gray-500" },
]

// ================= Página =================
export default function ArrojadoPage() {
  return (
    <AuthRedirect>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center space-y-2 sm:space-y-4">
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-red-600" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Perfil Arrojado</h1>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Estratégias agressivas focadas em máximo crescimento patrimonial, com alta tolerância ao risco e horizonte
              de longo prazo.
            </p>
          </div>
        </ScrollAnimation>

        {/* Características do Perfil */}
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Target className="h-5 w-5" />
                Características do Investidor Arrojado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { icon: <Flame className="h-4 w-4 text-red-600" />, text: "Alta tolerância ao risco", bg: "bg-red-50" },
                  { icon: <CheckCircle className="h-4 w-4 text-orange-600" />, text: "Busca máximo retorno", bg: "bg-orange-50" },
                  { icon: <CheckCircle className="h-4 w-4 text-purple-600" />, text: "Horizonte longo prazo", bg: "bg-purple-50" },
                  { icon: <CheckCircle className="h-4 w-4 text-yellow-600" />, text: "Aceita volatilidade", bg: "bg-yellow-50" },
                  { icon: <CheckCircle className="h-4 w-4 text-green-600" />, text: "Conhecimento avançado", bg: "bg-green-50" },
                  { icon: <CheckCircle className="h-4 w-4 text-blue-600" />, text: "Diversificação global", bg: "bg-blue-50" },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-2 p-3 rounded-lg ${item.bg}`}>
                    {item.icon}
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Alocação de Portfólio */}
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <PieChart className="h-5 w-5" />
                Alocação Recomendada de Portfólio
              </CardTitle>
              <CardDescription>Distribuição ideal para o perfil arrojado</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {portfolioAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{item.category}</span>
                      <span className="text-sm font-bold">
                        <AnimatedCounter end={item.percentage} />%
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Produtos Recomendados */}
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <TrendingUp className="h-5 w-5" />
                Produtos Recomendados
              </CardTitle>
              <CardDescription>Investimentos ideais para o perfil arrojado</CardDescription>
            </CardHeader>
            <CardContent>
              <StaggerAnimation>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {aggressiveProducts.map((product, index) => (
                    <Card key={index} className="border-l-4 border-l-red-500">
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-base sm:text-lg">{product.name}</CardTitle>
                          <Badge
                            variant={product.risk === "Muito Alto" ? "destructive" : "secondary"}
                            className="text-xs"
                          >
                            {product.risk}
                          </Badge>
                        </div>
                        <CardDescription className="text-xs sm:text-sm">{product.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                          <div>
                            <p className="text-muted-foreground">Rentabilidade</p>
                            <p className="font-semibold text-green-600">{product.return} a.a.</p>
                          </div>
                          <div>
                            <p className="text-muted-foreground">Liquidez</p>
                            <p className="font-semibold">{product.liquidity}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-muted-foreground">Valor Mínimo</p>
                            <p className="font-semibold">{product.minValue}</p>
                          </div>
                        </div>
                        <Button className="w-full mt-4" size="sm" variant="destructive">
                          Simular Investimento
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </StaggerAnimation>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Simulador Rápido */}
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <DollarSign className="h-5 w-5" />
                Simulador Arrojado
              </CardTitle>
              <CardDescription>Veja o potencial de crescimento com estratégia agressiva</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">Investimento</p>
                  <p className="text-lg sm:text-xl font-bold text-red-600">R$ 10.000</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">Prazo</p>
                  <p className="text-lg sm:text-xl font-bold text-purple-600">36 meses</p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">Rentabilidade</p>
                  <p className="text-lg sm:text-xl font-bold text-orange-600">25,80% a.a.</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="text-xs sm:text-sm text-muted-foreground">Valor Final</p>
                  <p className="text-lg sm:text-xl font-bold text-yellow-600">
                    R$ <AnimatedCounter end={19953} />
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <p className="text-xs font-medium text-yellow-800">
                    Atenção: Rentabilidades passadas não garantem resultados futuros
                  </p>
                </div>
              </div>
              <Button className="w-full mt-4" variant="destructive">
                Fazer Simulação Detalhada
              </Button>
            </CardContent>
          </Card>
        </ScrollAnimation>

        {/* Dicas e Alertas */}
        <ScrollAnimation>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <AlertTriangle className="h-5 w-5" />
                Dicas para o Investidor Arrojado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  {
                    icon: <Flame className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />,
                    title: "Nunca invista tudo em um só ativo",
                    description: "Mesmo sendo arrojado, diversifique para reduzir riscos específicos",
                    bg: "bg-red-50 border border-red-200",
                  },
                  {
                    icon: <Calendar className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />,
                    title: "Pense em décadas, não em meses",
                    description: "Investimentos arrojados precisam de tempo para compensar a volatilidade",
                    bg: "bg-orange-50",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />,
                    title: "Estude constantemente",
                    description: "Mantenha-se atualizado sobre mercados, empresas e tendências globais",
                    bg: "bg-purple-50",
                  },
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />,
                    title: "Prepare-se psicologicamente",
                    description: "Volatilidade alta significa perdas temporárias significativas",
                    bg: "bg-yellow-50 border border-yellow-200",
                  },
                ].map((item, i) => (
                  <div key={i} className={`flex gap-3 p-3 rounded-lg ${item.bg}`}>
                    {item.icon}
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollAnimation>
      </div>
    </AuthRedirect>
  )
}
