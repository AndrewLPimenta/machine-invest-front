"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, DollarSign, LineChart, Shield } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { EnhancedTestimonialSection } from "@/components/enhanced-testimonial-section"
import { SimulationSection } from "@/components/simulation-section"
import { CtaSection } from "@/components/cta-section"
import { EnhancedPerformanceChart } from "@/components/enhanced-performance-chart"
import { EnhancedCryptoChart } from "@/components/enhanced-crypto-chart"
import { MarketVolumeChart } from "@/components/market-volume-chart"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ResponsiveGrid } from "@/components/responsive-grid"
import { Suspense } from "react"
import { CardSkeleton, ChartSkeleton } from "@/components/loading-skeleton"

export default function Home() {
  const performanceData = [
    { label: "Renda Fixa", value: 40, color: "#10b981" },
    { label: "Renda Variável", value: 30, color: "#06b6d4" },
    { label: "Criptomoedas", value: 20, color: "#8b5cf6" },
    { label: "Outros", value: 10, color: "#f59e0b" },
  ]

  return (
    <PageLayout>
      <HeroSection />
      <FeatureSection />

      {/* Seção de Gráficos e Análises */}
      <Section background="muted">
        <SectionHeading
          title="Análises e Insights em Tempo Real"
          description="Acompanhe o mercado financeiro e tome decisões baseadas em dados atualizados e análises precisas."
          centered
        />

        <div className="mt-16">
          <ResponsiveGrid cols={{ default: 1, md: 2 }}>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedPerformanceChart
                title="Alocação Recomendada"
                description="Distribuição ideal de ativos para um perfil moderado"
                data={performanceData}
              />
            </Suspense>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedCryptoChart symbol="BTC" name="Bitcoin" currentPrice={245876.32} change={2.45} />
            </Suspense>
          </ResponsiveGrid>
        </div>

        <div className="mt-8">
          <ResponsiveGrid cols={{ default: 1, md: 2 }}>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedCryptoChart symbol="ETH" name="Ethereum" currentPrice={12543.87} change={-1.23} />
            </Suspense>
            <Suspense fallback={<CardSkeleton />}>
              <Card>
                <CardHeader>
                  <CardTitle>Notícias do Mercado</CardTitle>
                  <CardDescription>Últimas atualizações do mundo financeiro</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium">Banco Central anuncia nova taxa de juros</h3>
                    <p className="text-sm text-muted-foreground">
                      O Banco Central decidiu manter a taxa Selic em 10,5% ao ano, em linha com as expectativas do
                      mercado.
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Há 2 horas</span>
                      <Link href="/blog" className="text-primary hover:underline">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Bitcoin atinge nova máxima histórica</h3>
                    <p className="text-sm text-muted-foreground">
                      A principal criptomoeda do mercado superou os US$ 80.000 pela primeira vez, impulsionada por forte
                      demanda institucional.
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Há 5 horas</span>
                      <Link href="/blog" className="text-primary hover:underline">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-medium">Mercado de ações reage positivamente a dados econômicos</h3>
                    <p className="text-sm text-muted-foreground">
                      Principais índices sobem após divulgação de dados de emprego melhores que o esperado, sinalizando
                      recuperação econômica.
                    </p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Há 8 horas</span>
                      <Link href="/blog" className="text-primary hover:underline">
                        Ler mais
                      </Link>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/blog">
                      Ver Todas as Notícias <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Suspense>
          </ResponsiveGrid>
        </div>

        <div className="mt-8">
          <Suspense fallback={<ChartSkeleton />}>
            <MarketVolumeChart
              title="Volume de Negociação do Mercado"
              description="Acompanhe o volume de negociação do mercado financeiro"
            />
          </Suspense>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/criptomoedas">
              Explorar Mais Análises <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <EnhancedTestimonialSection />
      <SimulationSection />

      {/* Seção de Comparativo */}
      <Section background="muted">
        <SectionHeading
          title="Por que escolher a Machine Invest?"
          description="Compare e veja por que somos a escolha inteligente para seus investimentos."
          centered
          highlightedWord="Machine Invest"
        />

        <div className="mt-16">
          <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 3 }}>
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <DollarSign className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Taxas Reduzidas</CardTitle>
                <CardDescription>
                  Economize com nossas taxas significativamente menores que os bancos tradicionais.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Taxa de Manutenção</span>
                  <span className="font-medium text-green-500">R$ 0,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Taxa de Transferência</span>
                  <span className="font-medium text-green-500">R$ 0,00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Taxa de Administração</span>
                  <span className="font-medium text-green-500">0,5% a.a.</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/comparativo">
                    Ver Comparativo Completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Segurança Garantida</CardTitle>
                <CardDescription>Seus dados e investimentos protegidos com a mais alta tecnologia.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Criptografia de ponta a ponta</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Autenticação de dois fatores</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Monitoramento 24/7 contra fraudes</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Regulamentado pelo Banco Central</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/seguranca">
                    Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <LineChart className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Rendimentos Superiores</CardTitle>
                <CardDescription>Maximize seus ganhos com nossas opções de investimento otimizadas.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Renda Fixa</span>
                  <span className="font-medium text-green-500">Até 12% a.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Renda Variável</span>
                  <span className="font-medium text-green-500">Até 18% a.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Criptomoedas</span>
                  <span className="font-medium text-green-500">Potencial ilimitado</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/simulacao">
                    Simular Rendimentos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </ResponsiveGrid>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/comparativo">
              Ver Comparativo Completo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaSection />
    </PageLayout>
  )
}

