import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart, PieChart, DollarSign, Clock, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function RendaVariavelPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Renda Variável"
          description="Potencialize seus ganhos com investimentos de maior retorno."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Maximize seu potencial de ganhos</h2>
            <p className="text-lg text-muted-foreground">
              Os investimentos em renda variável oferecem maior potencial de retorno a longo prazo. Conheça nossas
              opções e comece a investir com estratégia e conhecimento.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Maior potencial de retorno</h3>
                  <p className="text-sm text-muted-foreground">Supere a inflação e os investimentos tradicionais</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <PieChart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Diversificação</h3>
                  <p className="text-sm text-muted-foreground">Invista em diferentes setores e empresas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Investimento de longo prazo</h3>
                  <p className="text-sm text-muted-foreground">Construa patrimônio com o tempo</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Começar a investir</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Renda Variável"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Opções de Investimentos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Ações</CardTitle>
                <CardDescription>Participação em empresas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ao comprar ações, você se torna sócio de uma empresa e participa dos seus resultados, com potencial de
                  valorização e recebimento de dividendos.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Risco:</span>
                    <span className="text-sm">Alto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Liquidez:</span>
                    <span className="text-sm">Alta (diária)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Prazo recomendado:</span>
                    <span className="text-sm">Acima de 5 anos</span>
                  </div>
                </div>
                <Button className="w-full">Investir em Ações</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fundos Imobiliários</CardTitle>
                <CardDescription>Investimento em imóveis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Os FIIs permitem investir no mercado imobiliário sem precisar comprar um imóvel, com distribuição
                  mensal de rendimentos e liquidez diária.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Risco:</span>
                    <span className="text-sm">Médio</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Liquidez:</span>
                    <span className="text-sm">Alta (diária)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Prazo recomendado:</span>
                    <span className="text-sm">Acima de 3 anos</span>
                  </div>
                </div>
                <Button className="w-full">Investir em FIIs</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ETFs</CardTitle>
                <CardDescription>Fundos de índice</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Os ETFs permitem investir em uma cesta de ativos que replicam um índice, como o Ibovespa, oferecendo
                  diversificação com uma única aplicação.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm">Risco:</span>
                    <span className="text-sm">Médio-Alto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Liquidez:</span>
                    <span className="text-sm">Alta (diária)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Prazo recomendado:</span>
                    <span className="text-sm">Acima de 3 anos</span>
                  </div>
                </div>
                <Button className="w-full">Investir em ETFs</Button>
              </CardContent>
            </Card>
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
                Investimentos em renda variável envolvem riscos e podem resultar em perdas financeiras. O desempenho
                passado não é garantia de resultados futuros. Antes de investir, considere seus objetivos financeiros,
                horizonte de tempo e tolerância ao risco. Recomendamos buscar orientação de um profissional financeiro
                qualificado.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Dicas para Investir em Renda Variável</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Diversifique seus investimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não coloque todos os ovos na mesma cesta. Distribua seus investimentos entre diferentes empresas,
                  setores e classes de ativos para reduzir o risco.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Pense no longo prazo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A renda variável tende a apresentar melhores resultados no longo prazo. Evite decisões baseadas em
                  oscilações de curto prazo e mantenha o foco nos seus objetivos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Estude antes de investir</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conheça bem as empresas e ativos em que pretende investir. Analise os fundamentos, o histórico e as
                  perspectivas futuras antes de tomar decisões.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

