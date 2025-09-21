import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, CreditCard, Smartphone, Shield, Clock, Zap, TrendingUp, BarChart3, Lightbulb } from "lucide-react"
import Image from "next/image"
import { WavyBackground } from "@/components/wavy-background"
import Link from "next/link"

export default function ContaDigitalPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl font-bold inter-var text-center">
          Conta Digital Inteligente.
        </p>
        <p className="text-base md:text-lg mt-4 font-normal inter-var text-center">
          Do conservador ao agressivo: receba dicas, insights e recursos exclusivos para evoluir na sua jornada financeira.
        </p>
      </WavyBackground>

      {/* Intro Section */}
      <Section>
        <SectionHeading
          title="Sua jornada financeira, personalizada"
          description="Muito além de uma conta digital: ferramentas inteligentes para cada perfil de investidor."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Texto */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Conta completa, feita para você</h2>
            <p className="text-lg text-muted-foreground">
              A Conta Digital da Machine Invest se adapta ao seu perfil. Receba recomendações inteligentes,
              insights de mercado e suporte da nossa IA financeira, enquanto organiza e potencializa seu dinheiro
              com zero taxas e recursos avançados.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Sem taxas mensais</h3>
                  <p className="text-sm text-muted-foreground">Conta 100% gratuita, sem tarifas escondidas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Cartão completo</h3>
                  <p className="text-sm text-muted-foreground">Débito, crédito e programa de pontos sem anuidade.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Pix ilimitado</h3>
                  <p className="text-sm text-muted-foreground">Transferências instantâneas gratuitas, 24/7.</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="w-fit">Abrir minha conta</Button>
          </div>

          {/* Imagem */}
          <div className="flex items-center justify-center">
            <div className="relative h-[420px] w-[320px]">
              <Image
                src="/machine-home-nova.png"
                alt="Aplicativo da Conta Digital"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Benefícios gerais */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Benefícios para todos os investidores</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Gestão de Finanças</CardTitle>
                <CardDescription>Controle total do seu patrimônio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acompanhe gastos, investimentos, saldo e metas em um app intuitivo que centraliza sua vida financeira.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Lightbulb className="h-10 w-10 text-primary mb-2" />
                <CardTitle>IA Financeira</CardTitle>
                <CardDescription>Insights em tempo real</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Converse com nosso agente de IA para receber recomendações inteligentes e apoio nas suas decisões de investimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Segurança Avançada</CardTitle>
                <CardDescription>Proteção máxima</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tecnologia antifraude, autenticação em 2 fatores e monitoramento constante para garantir sua tranquilidade.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Diferenciais por Perfil */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Recursos exclusivos por perfil</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Conservador</CardTitle>
                <CardDescription>Segurança em primeiro lugar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sugestões de renda fixa, portfólios de baixo risco e relatórios de estabilidade para proteger seu patrimônio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Moderado</CardTitle>
                <CardDescription>Equilíbrio e crescimento</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Estratégias de diversificação, análises comparativas e simulações para balancear risco e retorno.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Agressivo</CardTitle>
                <CardDescription>Ousadia e performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Insights sobre ações, cripto e mercados emergentes, com alertas de tendências e oportunidades de alto potencial.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Escolha seu perfil e abra sua conta agora</h2>
          <p className="text-muted-foreground mb-6">
            Simples, personalizada e com todos os recursos que você precisa para investir melhor.
          </p>
          <Button asChild size="lg" className="w-fit">
            <Link href="/login">Quero minha conta digital</Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}
