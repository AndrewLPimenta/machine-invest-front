"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ScrollAnimation } from "@/components/animations/scroll-animation"
import { StaggerAnimation } from "@/components/animations/stragger-animation"
import { AnimatedCounter } from "@/components/animations/animated-conter"
import { BarChart3, TrendingUp, DollarSign, PieChart, Target, Calendar, AlertTriangle, CheckCircle } from "lucide-react"

const moderateProducts = [
  {
    name: "Fundos Multimercado",
    risk: "Médio",
    return: "16.50%",
    liquidity: "D+1",
    minValue: "R$ 500,00",
    description: "Fundos que investem em diversos mercados e ativos",
  },
  {
    name: "Tesouro IPCA+",
    risk: "Médio",
    return: "15.20%",
    liquidity: "Diária",
    minValue: "R$ 30,00",
    description: "Título público protegido contra a inflação",
  },
  {
    name: "CDB Pré-fixado",
    risk: "Médio",
    return: "14.80%",
    liquidity: "No vencimento",
    minValue: "R$ 1.000,00",
    description: "CDB com taxa de juros definida na contratação",
  },
  {
    name: "Fundos de Ações",
    risk: "Médio-Alto",
    return: "18.30%",
    liquidity: "D+1 a D+30",
    minValue: "R$ 100,00",
    description: "Fundos que investem principalmente em ações",
  },
  {
    name: "Debêntures",
    risk: "Médio",
    return: "16.80%",
    liquidity: "Baixa",
    minValue: "R$ 1.000,00",
    description: "Títulos de dívida emitidos por empresas",
  },
  {
    name: "FIIs",
    risk: "Médio-Alto",
    return: "12.50% + dividendos",
    liquidity: "Diária",
    minValue: "R$ 100,00",
    description: "Fundos de Investimento Imobiliário",
  },
]

const portfolioAllocation = [
  { category: "Renda Fixa", percentage: 50, color: "bg-blue-500" },
  { category: "Fundos Multimercado", percentage: 25, color: "bg-green-500" },
  { category: "Ações/FIIs", percentage: 20, color: "bg-purple-500" },
  { category: "Reserva de Emergência", percentage: 5, color: "bg-gray-500" },
]

export default function ModeradoPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <ScrollAnimation>
        <div className="text-center space-y-2 sm:space-y-4">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <BarChart3 className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Perfil Moderado</h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Estratégias equilibradas que combinam segurança com potencial de crescimento, aceitando riscos moderados
            para obter melhores retornos.
          </p>
        </div>
      </ScrollAnimation>

      {/* Características do Perfil */}
      <ScrollAnimation>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <Target className="h-5 w-5" />
              Características do Investidor Moderado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-blue-600" />
                <span className="text-xs sm:text-sm">Busca equilíbrio</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-xs sm:text-sm">Aceita risco moderado</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-purple-600" />
                <span className="text-xs sm:text-sm">Diversificação importante</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-orange-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-orange-600" />
                <span className="text-xs sm:text-sm">Horizonte médio prazo</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-red-600" />
                <span className="text-xs sm:text-sm">Crescimento do patrimônio</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-indigo-50 rounded-lg">
                <CheckCircle className="h-4 w-4 text-indigo-600" />
                <span className="text-xs sm:text-sm">Flexibilidade estratégica</span>
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
            <CardDescription>Distribuição ideal para o perfil moderado</CardDescription>
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
            <CardDescription>Investimentos ideais para o perfil moderado</CardDescription>
          </CardHeader>
          <CardContent>
            <StaggerAnimation>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {moderateProducts.map((product, index) => (
                  <Card key={index} className="border-l-4 border-l-green-500">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base sm:text-lg">{product.name}</CardTitle>
                        <Badge
                          variant={product.risk === "Médio-Alto" ? "destructive" : "secondary"}
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
              Simulador Moderado
            </CardTitle>
            <CardDescription>Veja o potencial de crescimento com estratégia equilibrada</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Investimento</p>
                <p className="text-lg sm:text-xl font-bold text-blue-600">R$ 10.000</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Prazo</p>
                <p className="text-lg sm:text-xl font-bold text-green-600">24 meses</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Rentabilidade</p>
                <p className="text-lg sm:text-xl font-bold text-purple-600">16,50% a.a.</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg">
                <p className="text-xs sm:text-sm text-muted-foreground">Valor Final</p>
                <p className="text-lg sm:text-xl font-bold text-orange-600">
                  R$ <AnimatedCounter end={13572} />
                </p>
              </div>
            </div>
            <Button className="w-full mt-4">Fazer Simulação Detalhada</Button>
          </CardContent>
        </Card>
      </ScrollAnimation>

      {/* Dicas e Alertas */}
      <ScrollAnimation>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <AlertTriangle className="h-5 w-5" />
              Dicas para o Investidor Moderado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex gap-3 p-3 bg-blue-50 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Diversifique entre classes de ativos</p>
                  <p className="text-xs text-muted-foreground">
                    Combine renda fixa, fundos e uma pequena parcela em renda variável
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-green-50 rounded-lg">
                <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Pense no médio e longo prazo</p>
                  <p className="text-xs text-muted-foreground">
                    Investimentos moderados rendem melhor com horizonte de 2-5 anos
                  </p>
                </div>
              </div>
              <div className="flex gap-3 p-3 bg-purple-50 rounded-lg">
                <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Rebalanceie periodicamente</p>
                  <p className="text-xs text-muted-foreground">
                    Ajuste sua carteira a cada 6-12 meses para manter a alocação ideal
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
