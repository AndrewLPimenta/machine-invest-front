import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bitcoin, TrendingUp, AlertTriangle, Shield, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CriptomoedasInvestPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Investimentos em Criptomoedas"
          description="Diversifique sua carteira com ativos digitais e blockchain."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">O futuro dos investimentos</h2>
            <p className="text-lg text-muted-foreground">
              As criptomoedas representam uma nova classe de ativos digitais baseados em tecnologia blockchain. Conheça
              as principais moedas e comece a investir com segurança e conhecimento.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Alto potencial de valorização</h3>
                  <p className="text-sm text-muted-foreground">Oportunidade de ganhos expressivos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Segurança e transparência</h3>
                  <p className="text-sm text-muted-foreground">Tecnologia blockchain auditável</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Inovação tecnológica</h3>
                  <p className="text-sm text-muted-foreground">Participe da revolução digital</p>
                </div>
              </div>
            </div>
            <Button className="w-fit" asChild>
              <Link href="/criptomoedas">Explorar criptomoedas</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Criptomoedas"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Principais Criptomoedas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-orange-100 p-2">
                    <Bitcoin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <CardTitle>Bitcoin (BTC)</CardTitle>
                    <CardDescription>A primeira e mais conhecida criptomoeda</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Criado em 2009, o Bitcoin é considerado o ouro digital e a principal referência no mercado de
                  criptomoedas. Com oferta limitada a 21 milhões de unidades, é visto como reserva de valor.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Preço atual:</span>
                    <span className="text-sm font-medium">$65,432.10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Variação 24h:</span>
                    <span className="text-sm font-medium text-green-500">+2.5%</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/criptomoedas/btc">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-blue-100 p-2">
                    <svg
                      className="h-6 w-6 text-blue-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 4L4 12L12 20L20 12L12 4Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle>Ethereum (ETH)</CardTitle>
                    <CardDescription>Plataforma de contratos inteligentes</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  O Ethereum vai além de uma simples moeda digital, oferecendo uma plataforma para aplicações
                  descentralizadas e contratos inteligentes que estão revolucionando diversos setores.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Preço atual:</span>
                    <span className="text-sm font-medium">$3,245.67</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Variação 24h:</span>
                    <span className="text-sm font-medium text-green-500">+1.8%</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/criptomoedas/eth">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-green-100 p-2">
                    <svg
                      className="h-6 w-6 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12" cy="12" r="8" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle>Solana (SOL)</CardTitle>
                    <CardDescription>Alta performance e baixas taxas</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Solana é uma blockchain de alta performance capaz de processar milhares de transações por segundo com
                  taxas extremamente baixas, ideal para aplicações financeiras descentralizadas.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Preço atual:</span>
                    <span className="text-sm font-medium">$142.89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Variação 24h:</span>
                    <span className="text-sm font-medium text-red-500">-0.7%</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <Link href="/criptomoedas/sol">Ver detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" asChild>
              <Link href="/criptomoedas">Ver todas as criptomoedas</Link>
            </Button>
          </div>
        </div>

        <div className="mt-24">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <span>Aviso de Risco</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Investimentos em criptomoedas envolvem alto risco e alta volatilidade. O valor dos ativos digitais pode
                variar significativamente em curtos períodos. Antes de investir, considere seus objetivos financeiros,
                horizonte de tempo e tolerância ao risco. Nunca invista mais do que está disposto a perder.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Como Começar a Investir</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                  <span className="font-bold">1</span>
                </div>
                <CardTitle>Crie sua conta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cadastre-se na Machine Invest e complete seu processo de verificação para garantir a segurança da sua
                  conta e cumprir as regulamentações.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                  <span className="font-bold">2</span>
                </div>
                <CardTitle>Deposite fundos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transfira dinheiro para sua conta usando Pix, TED ou outras formas de pagamento disponíveis na
                  plataforma.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center mb-2">
                  <span className="font-bold">3</span>
                </div>
                <CardTitle>Comece a investir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Escolha as criptomoedas que deseja comprar, defina o valor e confirme sua operação. Você pode
                  acompanhar seu portfólio em tempo real.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button asChild>
              <Link href="/cadastro">Criar minha conta</Link>
            </Button>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

