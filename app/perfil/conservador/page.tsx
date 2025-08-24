"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthRedirect } from "@/components/auth-redirect"
import {
  GraduationCap,
  TrendingUp,
  DollarSign,
  PieChart,
  Target,
  Calendar,
  AlertCircle,
  CheckCircle,
  Play,
  BookOpen,
  Users,
  Heart,
  Briefcase,
  Calculator,
} from "lucide-react"
import { useEffect, useState } from "react"

function AnimatedCounter({ end }: { end: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setCount(end), 100)
    return () => clearTimeout(timer)
  }, [end])

  return <span>{count}</span>
}

const beginnerProducts = [
  {
    name: "Poupança",
    risk: "Sem Risco",
    return: "8.50%",
    liquidity: "Imediata",
    minValue: "R$ 1,00",
    description: "O primeiro passo: seguro, fácil e você pode tirar quando quiser",
    difficulty: "Muito Fácil",
  },
  {
    name: "Tesouro Direto",
    risk: "Muito Baixo",
    return: "13.75%",
    liquidity: "Pode vender a qualquer dia",
    minValue: "R$ 30,00",
    description: "Emprestar dinheiro para o governo brasileiro - super seguro!",
    difficulty: "Fácil",
  },
  {
    name: "CDB do seu banco",
    risk: "Baixo",
    return: "12.50%",
    liquidity: "Depende do prazo",
    minValue: "R$ 500,00",
    description: "Como uma poupança turbinada do seu próprio banco",
    difficulty: "Fácil",
  },
  {
    name: "Fundos de Renda Fixa",
    risk: "Baixo",
    return: "11.80%",
    liquidity: "1-2 dias úteis",
    minValue: "R$ 100,00",
    description: "Um especialista investe para você em vários produtos seguros",
    difficulty: "Médio",
  },
]

const beginnerAllocation = [
  { category: "Reserva de Emergência", percentage: 40, color: "bg-blue-500", description: "Para imprevistos" },
  { category: "Investimentos Seguros", percentage: 50, color: "bg-green-500", description: "Para crescer devagar" },
  { category: "Aprendendo a Investir", percentage: 10, color: "bg-purple-500", description: "Para experimentar" },
]

const audienceGroups = [
  {
    title: "Estudantes",
    icon: GraduationCap,
    color: "bg-50 border-200",
    iconColor: "text-blue-600",
    tips: [
      "Comece com R$ 50 por mês - é menos que um lanche por semana!",
      "Use o dinheiro da mesada ou trabalho part-time",
      "Foque em criar o hábito de guardar dinheiro primeiro",
    ],
  },
  {
    title: "Concursados",
    icon: Briefcase,
    color: "bg-50 border-200",
    iconColor: "text-green-600",
    tips: [
      "Você tem estabilidade - use isso a seu favor!",
      "Pode investir pensando no longo prazo",
      "Considere investimentos que rendem todo mês",
    ],
  },
  {
    title: "Área da Saúde",
    icon: Heart,
    color: "bg-50 border-200",
    iconColor: "text-red-600",
    tips: [
      "Horários irregulares? Automatize seus investimentos!",
      "Pense na aposentadoria - você cuida dos outros, cuide de você também",
      "Reserva de emergência é ainda mais importante na sua área",
    ],
  },
]

export default function IniciantePage() {
  return (
    <AuthRedirect>
      <div className="min-h-screen bg-background">
        <div className="relative overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-secondary/20 text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/abstract-financial-pattern.png')] opacity-10"></div>
          <div className="relative px-4 py-16 lg:py-24">
            <div className="max-w-7xl mx-auto">
              <div className="text-center space-y-8">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">Perfil Iniciante</h1>
                    <p className="text-xl text-white/80 mt-2">Seus Primeiros Passos</p>
                  </div>
                </div>

                <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                  Informações simples, claras e objetivas para você começar a investir com segurança e confiança
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium text-white border-white/30"
                  >
                    ✨ Sem Jargões
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium  text-white border-white/30"
                  >
                    🎯 Exemplos Práticos
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium text-white border-white/30"
                  >
                    💡 Passo a Passo
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
          <Card className="border-l-4 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-3xl font-bold">
                <Calculator className="h-8 w-8" />
                Onde Você Está Investindo
              </CardTitle>
              <CardDescription className="text-lg mt-3">
                Anote aqui onde você colocou seu dinheiro - é importante acompanhar!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Simple Investment Form */}
                <Card className="bg-gradient-to-br border-2 ">
                  <CardHeader>
                    <CardTitle className="text-xl">✨ Adicionar Investimento</CardTitle>
                    <CardDescription>Registre onde você colocou seu dinheiro hoje</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Onde você investiu?</label>
                      <select className="w-full p-3 border-2 rounded-lg text-base">
                        <option className="w-full border-2 border-blue-200 hover:bg-blue-50 bg-transparent">💰 Poupança</option>
                        <option className="w-full border-2 border-blue-200 hover:bg-blue-50 bg-transparent">🏛️ Tesouro Direto</option>
                        <option className="w-full border-2 border-blue-200 hover:bg-blue-50 bg-transparent">🏦 CDB do meu banco</option>
                        <option className="w-full border-2 border-blue-200 hover:bg-blue-50 bg-transparent">📊 Fundo de Renda Fixa</option>
                        <option className="w-full border-2 border-blue-200 hover:bg-blue-50 bg-transparent">❓ Outro (vou aprender mais)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Quanto você investiu?</label>
                      <input
                        type="number"
                        placeholder="100"
                        className="w-full p-3 border-2 rounded-lg text-base"
                      />
                      <p className="text-xs ">💡 Qualquer valor está ótimo para começar!</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Quando?</label>
                      <input
                        type="date"
                        className="w-full p-3 border-2 border-200 rounded-lg text-base"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-primary via-primary/95 to-secondary/20  py-3" size="lg">
                      🎉 Registrar Meu Investimento
                    </Button>
                  </CardContent>
                </Card>

                {/* Simple Investment Summary */}
                <Card className="border-2 border-2">
                  <CardHeader>
                    <CardTitle className="text-xl text--800 ">📈 Seu Progresso</CardTitle>
                    <CardDescription>Veja como você está indo!</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-br to-green-100 rounded-xl border-2 border-200">
                        <p className="text-sm text-700 mb-2">Total que você já investiu</p>
                        <p className="text-4xl font-bold text-800">R$ 450</p>
                        <p className="text-sm text-600 mt-2">Parabéns! Você está no caminho certo!</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-800">📊 Onde está seu dinheiro:</h4>
                        {[
                          { name: "💰 Poupança", amount: "R$ 200", percentage: 44, color: "bg-blue-400" },
                          { name: "🏛️ Tesouro Direto", amount: "R$ 150", percentage: 33, color: "bg-green-400" },
                          { name: "🏦 CDB", amount: "R$ 100", percentage: 23, color: "bg-purple-400" },
                        ].map((item, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{item.name}</span>
                              <span className="text-sm font-bold">{item.amount}</span>
                            </div>
                            <Progress value={item.percentage} className="h-3" />
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-50 rounded-lg border-2 border-200">
                        <p className="text-sm text-800">
                          🎯 <strong>Meta do mês:</strong> Investir mais R$ 50. Você está quase lá!
                        </p>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full border-2 border00 hover:bg-blue-50 bg-transparent"
                      >
                        📱 Ver Meu Histórico
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r rounded-xl border-2 border-200">
                <h4 className="font-bold text-lg mb-3">🌟 Dicas para Acompanhar seus Investimentos:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Anote todo investimento que fizer - por menor que seja!</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Comemore cada conquista - você está evoluindo!</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Não se preocupe se for pouco - o importante é começar</p>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">Tente investir um pouquinho todo mês</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-500 shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-3xl font-bold text-800">
                <Play className="h-8 w-8" />
                Área de Vídeos Educativos
              </CardTitle>
              <CardDescription className="text-lg mt-3">
                Aprenda assistindo! Vídeos práticos e fáceis de entender
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border-2 border-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-blue-300">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-blue-400 mx-auto mb-3" />
                        <p className="text-base font-medium text-blue-600">Vídeo: Organizando seus Gastos</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Como Organizar suas Finanças</h3>
                    <p className="text-base text-muted-foreground">
                      Aprenda a controlar onde seu dinheiro está indo antes de começar a investir
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center mb-4 border-2 border-dashed border-green-300">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-green-400 mx-auto mb-3" />
                        <p className="text-base font-medium text-green-600">Vídeo: Primeiros Investimentos</p>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3">Seu Primeiro Investimento</h3>
                    <p className="text-base text-muted-foreground">
                      Passo a passo de como fazer seu primeiro investimento na prática
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-3 text-3xl font-bold ">
                <Target className="h-8 w-8 text-blue-600 " />O que Você Vai Aprender Aqui
              </CardTitle>
              <CardDescription className="text-lg mt-3">
                Tudo que você precisa saber para começar a investir com segurança
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-foreground-600">
                {[
                  {
                    icon: CheckCircle,
                    color: "text-blue-600",
                    text: "Diferença entre poupar e investir",
                    
                  },
                  {
                    icon: CheckCircle,
                    color: "text-green-600",
                    text: "Como começar com pouco dinheiro",
                    
                  },
                  {
                    icon: CheckCircle,
                    color: "text-purple-600",
                    text: "Montar sua reserva de emergência",
                    
                  },
                  {
                    icon: CheckCircle,
                    color: "text-orange-600",
                    text: "Investimentos básicos e seguros",
                    
                  },
                  { icon: CheckCircle, color: "text-red-600", text: "Evitar dívidas e juros altos",},
                  { icon: CheckCircle, color: "text-indigo-600", text: "Ver seu dinheiro crescer",},
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-6 ${item.bg} rounded-xl border-2 border-transparent hover:border-gray-200 transition-all duration-300`}
                  >
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-base font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Users className="h-5 w-5" />
                Dicas Especiais por Área
              </CardTitle>
              <CardDescription>Conselhos personalizados para sua situação</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {audienceGroups.map((group, index) => (
                  <Card key={index} className={`${group.color} border-2`}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base">
                        <group.icon className={`h-5 w-5 ${group.iconColor}`} />
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-2">
                        {group.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className={`h-4 w-4 ${group.iconColor} mt-0.5 flex-shrink-0`} />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <PieChart className="h-5 w-5" />
                Como Dividir seu Dinheiro (Sugestão para Iniciantes)
              </CardTitle>
              <CardDescription>Uma forma simples de organizar seus primeiros investimentos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {beginnerAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm font-medium">{item.category}</span>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="text-sm font-bold">
                        <AnimatedCounter end={item.percentage} />%
                      </span>
                    </div>
                    <Progress value={item.percentage} className="h-2" />
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-50 rounded-lg border border-200">
                <p className="text-sm text-800">
                  💡 <strong>Lembre-se:</strong> Estes são apenas números de exemplo! O importante é começar, mesmo que
                  seja com R$ 50 por mês.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <TrendingUp className="h-5 w-5" />
                Seus Primeiros Investimentos
              </CardTitle>
              <CardDescription>Opções seguras e fáceis para começar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {beginnerProducts.map((product, index) => (
                  <Card key={index} className="p-4 bg-gradient-to-br from-50 to-100 rounded-lg border border-200">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-base sm:text-lg">{product.name}</CardTitle>
                        <div className="flex flex-col gap-1">
                          <Badge variant="secondary" className="text-xs">
                            {product.risk}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {product.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-xs sm:text-sm">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
                        <div>
                          <p className="text-muted-foreground">Quanto rende</p>
                          <p className="font-semibold text-green-600">{product.return} por ano</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Quando posso tirar</p>
                          <p className="font-semibold">{product.liquidity}</p>
                        </div>
                        <div className="col-span-2">
                          <p className="text-muted-foreground">Valor para começar</p>
                          <p className="font-semibold">{product.minValue}</p>
                        </div>
                      </div>
                      <Button className=" bg-gradient-to-r from-primary via-primary/95 to-secondary/20  w-full mt-4" size="sm">
                        Ver Como Funciona
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <Calculator className="h-5 w-5" />
                Exemplos Reais: Veja seu Dinheiro Crescer
              </CardTitle>
              <CardDescription>Quanto R$ 100, R$ 500 ou R$ 1.000 podem virar ao longo do tempo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-50 to-100 rounded-lg border border-200">
                  <h3 className="font-semibold text-800 mb-3">Guardando R$ 100/mês</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Em 1 ano:</span>
                      <span className="font-bold">R$ 1.338</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 3 anos:</span>
                      <span className="font-bold">R$ 4.482</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 5 anos:</span>
                      <span className="font-bold text-blue-600">R$ 8.181</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-50 to-100 rounded-lg border border-200">
                  <h3 className="font-semibold text-800 mb-3">Guardando R$ 500/mês</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Em 1 ano:</span>
                      <span className="font-bold">R$ 6.690</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 3 anos:</span>
                      <span className="font-bold">R$ 22.410</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 5 anos:</span>
                      <span className="font-bold text-green-600">R$ 40.905</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-50 to-100 rounded-lg border border-200">
                  <h3 className="font-semibold text-800 mb-3">Guardando R$ 1.000/mês</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Em 1 ano:</span>
                      <span className="font-bold">R$ 13.380</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 3 anos:</span>
                      <span className="font-bold">R$ 44.820</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Em 5 anos:</span>
                      <span className="font-bold text-purple-600">R$ 81.810</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-50 rounded-lg border border-200">
                <p className="text-sm text-800">
                  🎉 <strong>Incrível, né?</strong> Estes cálculos consideram 12% ao ano. Na poupança, você teria bem
                  menos!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <BookOpen className="h-5 w-5" />
                Dicas de Ouro para Iniciantes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-3 p-3 bg-50 border border-200 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Primeiro quite suas dívidas</p>
                    <p className="text-xs text-muted-foreground">
                      Cartão de crédito e cheque especial cobram mais de 300% ao ano. Quite isso antes!
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-50 border border-200 rounded-lg">
                  <Calendar className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Monte sua reserva de emergência primeiro</p>
                    <p className="text-xs text-muted-foreground">
                      Tenha 3-6 meses de gastos guardados antes de investir em outras coisas
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-50 border border-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Comece pequeno, mas comece!</p>
                    <p className="text-xs text-muted-foreground">
                      É melhor investir R$ 50 por mês do que esperar ter R$ 1.000 para começar
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-3 bg-50 border border-200 rounded-lg">
                  <DollarSign className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Automatize seus investimentos</p>
                    <p className="text-xs text-muted-foreground">
                      Configure para investir automaticamente todo mês - assim você não esquece!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-50 to-50 border-200">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-xl font-bold text-800">Você Consegue! 🚀</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Investir é um processo de construção de longo prazo. Não tenha medo de errar - o importante é começar
                  e aprender no caminho. Cada R$ 1 investido hoje é um passo em direção à sua independência financeira!
                </p>
                <Button size="lg" className="bg-foreground-600 border border-2 hover:bg-700 text-10">
                  Próximos Passos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AuthRedirect>
  )
}
