import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, Percent } from "lucide-react"
import Image from "next/image"

export default function PrevidenciaPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Previdência Privada"
          description="Planeje seu futuro com tranquilidade e segurança financeira."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Invista no seu futuro hoje</h2>
            <p className="text-lg text-muted-foreground">
              A Previdência Privada da Machine Invest oferece planos flexíveis e personalizados para garantir sua
              segurança financeira no futuro, com benefícios fiscais e opções de investimento para todos os perfis.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Benefícios fiscais</h3>
                  <p className="text-sm text-muted-foreground">Deduções no Imposto de Renda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Percent className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Rentabilidade competitiva</h3>
                  <p className="text-sm text-muted-foreground">Diversas opções de investimento</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Flexibilidade</h3>
                  <p className="text-sm text-muted-foreground">Aportes e resgates quando precisar</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Conhecer planos</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Previdência Privada"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Nossos Planos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>PGBL</CardTitle>
                <CardDescription>Plano Gerador de Benefício Livre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ideal para quem faz a declaração completa do Imposto de Renda. Permite deduzir até 12% da renda bruta
                  anual.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedução no IR</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tributação apenas no resgate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Diversas opções de investimento</span>
                  </li>
                </ul>
                <Button className="w-full">Simular PGBL</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>VGBL</CardTitle>
                <CardDescription>Vida Gerador de Benefício Livre</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Perfeito para quem faz declaração simplificada ou já deduz 12% da renda com PGBL. Tributação apenas
                  sobre os rendimentos.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Tributação só sobre rendimentos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Não há limite de contribuição</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Ideal para planejamento sucessório</span>
                  </li>
                </ul>
                <Button className="w-full">Simular VGBL</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Plano Empresarial</CardTitle>
                <CardDescription>Previdência para empresas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Solução para empresas que desejam oferecer benefícios adicionais aos seus colaboradores, com vantagens
                  fiscais.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Benefício para colaboradores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dedução fiscal para a empresa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Planos personalizados</span>
                  </li>
                </ul>
                <Button className="w-full">Consultar</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Simulador de Previdência</h2>
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Calcule seu plano de previdência</CardTitle>
              <CardDescription>Veja quanto você pode acumular para o futuro</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Idade atual</label>
                    <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="35" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Idade de aposentadoria</label>
                    <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="65" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contribuição mensal (R$)</label>
                    <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="500" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Rentabilidade anual estimada (%)</label>
                    <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="8" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tipo de plano</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>PGBL</option>
                      <option>VGBL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Regime de tributação</label>
                    <select className="w-full mt-1 p-2 border rounded-md">
                      <option>Progressivo</option>
                      <option>Regressivo</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full">Calcular</Button>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Resultado da simulação:</h3>
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Valor acumulado:</p>
                    <p className="font-bold">R$ 750.000,00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Renda mensal estimada:</p>
                    <p className="font-bold">R$ 3.750,00</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </PageLayout>
  )
}

