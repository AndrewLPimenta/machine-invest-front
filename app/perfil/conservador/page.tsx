"use client"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  Target,
  BookOpen,
  Play,
  FileText,
  ArrowRight,
  Lightbulb,
  DollarSign,
  PieChart,
  Calculator,
  Video,
} from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { HeroSection } from "@/components/hero-section"
import { Section } from "@/components/section"
import Link from "next/link"
import { FinanceDicas } from "@/components/ui/finance-dicas"
export default function ConservadorPageHome() {
  return (
    <AuthRedirect>
      <PageLayout>
        <HeroSection />

        <Section>
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="mr-2 h-6 w-6 text-primary" />
                Bem-vindo, Investidor Conservador
              </CardTitle>
              <CardDescription className="text-lg">
                Sua jornada de investimentos seguros começa aqui. Explore conteúdos educativos e acompanhe seu
                progresso.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                  <DollarSign className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold">Perfil Seguro</p>
                    <p className="text-sm text-muted-foreground">Investimentos de baixo risco</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                  <PieChart className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-semibold">Diversificação</p>
                    <p className="text-sm text-muted-foreground">Portfolio equilibrado</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                  <Calculator className="h-8 w-8 text-purple-600" />
                  <div>
                    <p className="font-semibold">Planejamento</p>
                    <p className="text-sm text-muted-foreground">Metas de longo prazo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
        <Section>
          <div className="mb-6 space-y-4 md:space-y-0 md:justify-between">
            <Card className="bg-background/50 backdrop-blur-sm shadow-md border border-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <BookOpen className="mr-2 h-6 w-6 text-primary" />
                  Dicas e Investimento para o Perfil Conservador
                </CardTitle>
                <CardDescription>
                  Dicas personalizadas para melhorar sua jornada financeira:
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Dica vinda do backend */}
                <div className="p-3 rounded-md bg-muted">
                  <FinanceDicas />
                </div>

                {/* Espaço reservado para dicas futuras */}
                <Badge className="bg-primary/10 text-primary whitespace-nowrap border-0">
                  Em breve
                </Badge>
              </CardContent>
            </Card>
          </div>


        </Section>
        <Section>
          <Card className="bg-background/50 backdrop-blur-lg shadow-lg border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <FileText className="mr-2 h-6 w-6 text-primary" />
                Resumo das Suas Finanças
              </CardTitle>
              <CardDescription>Uma visão geral do seu perfil financeiro e próximos passos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Target className="h-8 w-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Perfil Definido</h3>
                    <p className="text-sm text-muted-foreground">Investidor Conservador</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Foco em Segurança</h3>
                    <p className="text-sm text-muted-foreground">Baixo risco, retorno estável</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold">Crescimento Gradual</h3>
                    <p className="text-sm text-muted-foreground">Construção de patrimônio</p>
                  </div>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-3">Próximos Passos Recomendados:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Assista aos vídeos educativos sobre Tesouro Direto</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Defina suas metas financeiras de curto e longo prazo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Considere diversificar com CDBs e fundos conservadores</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Estabeleça um valor mensal para investir</span>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <Link href="/perfil/conservador/financas" passHref>
                    <Button size="lg" className="group" asChild>
                      <span>
                        Minhas Finanças
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>
        <Section>
          <Card className="bg-background/50 backdrop-blur-lg shadow-lg border border-primary/20 rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-bold">
                <Video className="mr-2 h-6 w-6 text-primary" />
                Vídeos Educativos 
              </CardTitle>
              <CardDescription>
                Descubra como começar a investir com segurança. Siga as aulas abaixo e
                evolua no seu aprendizado de forma prática.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Próximos passos */}
              <div className="bg-muted/40 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 text-lg">O que você vai aprender:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Conceitos básicos do Tesouro Direto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Como comparar CDB, poupança e fundos conservadores</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Definir metas financeiras de curto e longo prazo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Montar sua estratégia de investimento inicial</span>
                  </li>
                </ul>
              </div>

              {/* Botão CTA */}
              <div className="flex justify-center">
                <Link href="/perfil/conservador/conteudo" passHref>
                  <Button size="lg" className="group" asChild>
                    <span>
                      Primeiros Passos
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section>
          <Card className="bg-background/50 backdrop-blur-lg shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Lightbulb className="mr-2 h-6 w-6 text-primary" />
                Para Investidores Conservadores
              </CardTitle>
              <CardDescription>Princípios fundamentais para investir com segurança</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-green-800 dark:text-green-200">Comece devagar</h4>
                      <p className="text-sm text-green-700 dark:text-green-300">
                        Inicie com pequenos valores até ganhar confiança
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200">Diversifique sempre</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        Não coloque todos os ovos na mesma cesta
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-purple-800 dark:text-purple-200">Pense no longo prazo</h4>
                      <p className="text-sm text-purple-700 dark:text-purple-300">
                        Investimentos conservadores rendem mais com tempo
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-orange-800 dark:text-orange-200">Estude antes de investir</h4>
                      <p className="text-sm text-orange-700 dark:text-orange-300">
                        Conhecimento é sua melhor ferramenta
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-teal-800 dark:text-teal-200">Tenha uma reserva</h4>
                      <p className="text-sm text-teal-700 dark:text-teal-300">Mantenha dinheiro para emergências</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-indigo-50 dark:bg-indigo-950/20 rounded-lg">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-indigo-800 dark:text-indigo-200">Revise regularmente</h4>
                      <p className="text-sm text-indigo-700 dark:text-indigo-300">Acompanhe e ajuste sua estratégia</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>


      </PageLayout>
    </AuthRedirect>
  )
}
