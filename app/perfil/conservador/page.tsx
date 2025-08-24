"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerAnimation } from "@/components/animations/stragger-animation"
import { AnimatedCounter } from "@/components/animations/animated-conter"
import { Shield, TrendingUp, DollarSign, PieChart, Target, Calendar, AlertCircle, CheckCircle } from 'lucide-react'

const conservativeProducts = [
  {
    name: "Tesouro Selic",
    risk: "Muito Baixo",
    return: "13.75%",
    liquidity: "Diária",
    minValue: "R$ 30,00",
    description: "Título público com rentabilidade atrelada à taxa Selic"
  },
  {
    name: "CDB 100% CDI",
    risk: "Baixo",
    return: "13.65%",
    liquidity: "No vencimento",
    minValue: "R$ 1.000,00",
    description: "Certificado de Depósito Bancário com garantia do FGC"
  },
  {
    name: "LCI/LCA",
    risk: "Baixo",
    return: "12.80%",
    liquidity: "90 dias",
    minValue: "R$ 5.000,00",
    description: "Letras de Crédito isentas de IR para pessoa física"
  },
  {
    name: "Poupança Plus",
    risk: "Muito Baixo",
    return: "8.50%",
    liquidity: "Diária",
    minValue: "R$ 1,00",
    description: "Conta poupança com rendimento diferenciado"
  }
]

const portfolioAllocation = [
  { category: "Renda Fixa", percentage: 80, color: "bg-blue-500" },
  { category: "Fundos Conservadores", percentage: 15, color: "bg-green-500" },
  { category: "Reserva de Emergência", percentage: 5, color: "bg-gray-500" }
]

export default function ConservadorPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center space-y-2 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Perfil Conservador</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Estratégias de investimento focadas em segurança e preservação do capital, 
            com baixo risco e rentabilidade estável.
          </p>
        </div>
      </ScrollAnimation>

      {/* Características do Perfil */}
      <ScrollAnimation>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Target className="h-5 w-5" />
              Características do Investidor Conservador
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span className="text-xs sm:text-sm">Prioriza segurança</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs sm:text-sm">Baixa tolerância ao risco</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                <span className="text-xs sm:text-sm">Rentabilidade previsível</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="text-xs sm:text-sm">Liquidez importante</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-red-600" />
                <span className="text-xs sm:text-sm">Preservação do capital</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-indigo-600" />
                <span className="text-xs sm:text-sm">Investimentos garantidos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>

      {/* Alocação Recomendada */}
      <ScrollAnimation>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <PieChart className="h-5 w-5" />
              Alocação Recomendada de Portfólio
            </CardTitle>
            <CardDescription>
              Distribuição ideal para o perfil conservador
            </CardDescription>
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
            <CardDescription>
              Investimentos ideais para o perfil conservador
            </CardDescription>
          </CardHeader>
          <CardContent>
            <StaggerAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {conservativeProducts.map((product, index) => (
                  <Card key={index} className="border-l-4 border-l-blue-500">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base sm:text-lg">{product.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {product.risk}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs sm:text-sm">
                        {product.description}
                      </CardDescription>
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
                      <Button className="w-full mt-4" size="sm">
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
              Simulador Conservador
            </CardTitle>
            <CardDescription>
              Veja quanto seu dinheiro pode render com investimentos seguros
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Investimento</p>
                <p className="text-lg sm:text-xl font-bold text-blue-600">R$ 10.000</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Prazo</p>
                <p className="text-lg sm:text-xl font-bold text-green-600">12 meses</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Rentabilidade</p>
                <p className="text-lg sm:text-xl font-bold text-purple-600">13,75% a.a.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Valor Final</p>
                <p className="text-lg sm:text-xl font-bold text-orange-600">
                  R$ <AnimatedCounter end={11375} />
                </p>
              </div>
            </div>
            <Button className="w-full mt-4">
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
              <AlertCircle className="h-5 w-5" />
              Dicas para o Investidor Conservador
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Diversifique mesmo sendo conservador</p>
                  <p className="text-xs text-muted-foreground">
                    Distribua seus investimentos entre diferentes produtos de renda fixa
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Mantenha uma reserva de emergência</p>
                  <p className="text-xs text-muted-foreground">
                    Tenha de 6 a 12 meses de gastos em investimentos com liquidez diária
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Acompanhe a inflação</p>
                  <p className="text-xs text-muted-foreground">
                    Certifique-se de que seus investimentos rendem acima da inflação
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </ScrollAnimation>
    </div>
  )
}
