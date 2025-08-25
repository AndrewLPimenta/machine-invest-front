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
import HeroGeometric from "@/components/hero-geometric"

export default function Home() {
  const performanceData = [
    { label: "Renda Fixa", value: 40, color: "#10b981" },
    { label: "Renda Variável", value: 30, color: "#06b6d4" },
    { label: "Criptomoedas", value: 20, color: "#8b5cf6" },
    { label: "Outros", value: 10, color: "#f59e0b" },
  ]

  return (
    <PageLayout>
      <HeroGeometric />
      <HeroSection />
      <FeatureSection />

      <Section background="muted">
        <SectionHeading
          title="Alocação Recomendada por Perfil"
          description="Descubra a distribuição ideal de investimentos baseada no seu perfil de risco e objetivos financeiros."
          centered
        />

        <div className="mt-16">
          <ResponsiveGrid cols={{ default: 1, lg: 2 }}>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedPerformanceChart
                title="Distribuição Inteligente de Ativos"
                description="Veja como diferentes perfis de investidor devem alocar seus recursos para maximizar retornos"
                data={performanceData}
              />
            </Suspense>

            <Card>
              <CardHeader>
                <CardTitle>Recomendações por Perfil</CardTitle>
                <CardDescription>
                  Entenda qual alocação é ideal para cada tipo de investidor e como isso pode acelerar sua prosperidade.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <h4 className="font-medium">Conservador</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-5">
                    60% Renda Fixa, 25% Fundos, 15% Reserva de Emergência. Foco em preservar capital e crescimento
                    estável.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-cyan-500" />
                    <h4 className="font-medium">Moderado</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-5">
                    40% Renda Fixa, 35% Ações, 20% Fundos, 5% Alternativos. Equilibrio entre segurança e crescimento.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500" />
                    <h4 className="font-medium">Arrojado</h4>
                  </div>
                  <p className="text-sm text-muted-foreground ml-5">
                    20% Renda Fixa, 50% Ações, 20% Criptomoedas, 10% Investimentos Alternativos. Máximo potencial de
                    crescimento.
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/formulario">
                    Descobrir Meu Perfil <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </ResponsiveGrid>
        </div>
      </Section>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>O que posso aprender?</CardTitle>
          <CardDescription>
            Domine suas finanças em cada etapa da jornada: aprenda os fundamentos, descubra novas
            estratégias e acompanhe onde estão seus investimentoss em um só lugar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveGrid cols={{ default: 1, md: 3 }}>
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Cresça com Conhecimento</h4>
              <p className="text-sm text-muted-foreground">
                        Do básico ao avançado: conteúdo prático para investir com confiança em qualquer nível.
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Segurança e Estratégia</h4>
              <p className="text-sm text-muted-foreground">
                Aprenda a proteger seu patrimônio, reduzir ou amenizar riscos e aproveitar as melhores oportunidades.
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium">Controle em Suas Mãos</h4>
              <p className="text-sm text-muted-foreground">
                 Tenha uma visão clara e organizada de onde está o seu dinheiro — tudo em um só lugar.
              </p>
            </div>
          </ResponsiveGrid>
        </CardContent>
        <CardFooter className="justify-center">
          <Button asChild>
            <Link href="/login">
              Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
      <Section>
        <SectionHeading
          title="Notícias que Impactam seus Investimentos"
          description="Fique atualizado com as principais notícias do mercado financeiro e aprenda como aplicá-las em sua estratégia de investimentos."
          centered
        />

        <div className="mt-16">
          <ResponsiveGrid cols={{ default: 1, md: 2, lg: 3 }}>
            <Suspense fallback={<CardSkeleton />}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Banco Central mantém a Selic em 10,5%</CardTitle>
                  <CardDescription>
                    Entenda como essa decisão impacta diferentes investimentos e aprenda a ajustar sua estratégia para
                    maximizar seus ganhos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Há 2 horas</span>
                    <Link href="/blog" className="text-primary hover:underline">
                      Leia mais
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Suspense>

            <Suspense fallback={<CardSkeleton />}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Mercado de ações reage a dados econômicos</CardTitle>
                  <CardDescription>
                    Aprenda a interpretar movimentos do mercado e descubra oportunidades para acelerar seu crescimento
                    financeiro.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Há 5 horas</span>
                    <Link href="/blog" className="text-primary hover:underline">
                      Leia mais
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Suspense>

            <Suspense fallback={<CardSkeleton />}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Dólar em alta: como proteger seu patrimônio</CardTitle>
                  <CardDescription>
                    Descubra estratégias inteligentes para proteger e fazer seu dinheiro crescer mesmo em cenários de
                    volatilidade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Há 8 horas</span>
                    <Link href="/blog" className="text-primary hover:underline">
                      Leia mais
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </Suspense>
          </ResponsiveGrid>
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">
              Ver Todas as Notícias <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
      <Section>
        <div className="mt-8">
          <Suspense fallback={<ChartSkeleton />}>
            <MarketVolumeChart
              title="Domine a Arte de Interpretar Gráficos"
              description="Aprenda a ler tendências, volumes e movimentos do mercado para tomar decisões que podem transformar sua vida financeira."
            />
          </Suspense>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/educacao">
              Aprender Análise Técnica <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
      <Section background="muted">
        <SectionHeading
          title="Investimentos Modernos: O Futuro do Dinheiro"
          description="Explore o mundo das criptomoedas e ativos digitais. Aprenda como diversificar sua carteira com investimentos do futuro."
          centered
          highlightedWord="Futuro"
        />

        <div className="mt-16">
          <ResponsiveGrid cols={{ default: 1, lg: 2 }}>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedCryptoChart
                symbol="BTC"
                name="Bitcoin"
                currentPrice={245876.32}
                change={2.45}
                description="A primeira e maior criptomoeda do mundo. Descubra como o Bitcoin pode fazer parte da sua estratégia de crescimento patrimonial."
              />
            </Suspense>
            <Suspense fallback={<ChartSkeleton />}>
              <EnhancedCryptoChart
                symbol="ETH"
                name="Ethereum"
                currentPrice={12543.87}
                change={-1.23}
                description="A plataforma que revolucionou contratos inteligentes. Entenda como o Ethereum pode potencializar seus investimentos."
              />
            </Suspense>
          </ResponsiveGrid>
        </div>

        <div className="mt-12">

        </div>
      </Section>



      <EnhancedTestimonialSection />
      <SimulationSection />

      <Section background="muted">
        <SectionHeading
          title="Transforme sua Vida Financeira com a Machine Invest"
          description="Descubra como nossas dicas e insights podem ser o diferencial que você precisa para prosperar financeiramente."
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
                <CardTitle>Educação Financeira Gratuita</CardTitle>
                <CardDescription>
                  Receba conhecimento valioso e estratégias personalizadas para acelerar seu crescimento patrimonial,
                  sem custos.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Cadastro e Acesso</span>
                  <span className="font-medium text-green-500">Gratuito</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Dicas Personalizadas</span>
                  <span className="font-medium text-green-500">Gratuito</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Atualizações Constantes</span>
                  <span className="font-medium text-green-500">Gratuito</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/comparativo">
                    Começar Agora <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Confiança e Segurança Total</CardTitle>
                <CardDescription>
                  Informações verificadas por especialistas e dados protegidos com tecnologia de ponta para sua
                  tranquilidade.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Proteção máxima dos seus dados</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Conteúdo validado por especialistas</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Transparência em todas as recomendações</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent" asChild>
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
                <CardTitle>Acelere sua Prosperidade</CardTitle>
                <CardDescription>
                  Aprenda estratégias comprovadas e tome decisões inteligentes que podem multiplicar seu patrimônio ao
                  longo do tempo.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Análises detalhadas do mercado em tempo real</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Comparativos que revelam as melhores oportunidades</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <span>Estratégias para diferentes perfis de risco</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/simulacao">
                    Simular Crescimento <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </ResponsiveGrid>
        </div>

        <div className="mt-8 text-center">
          <Button asChild>
            <Link href="/comparativo">
              Descobrir Todo o Potencial <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaSection />
    </PageLayout>
  )
}
