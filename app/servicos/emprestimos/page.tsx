import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Clock, CheckCircle, DollarSign, Percent, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"

export default function EmprestimosPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Empréstimos"
          description="Soluções financeiras para realizar seus projetos com as melhores taxas do mercado."
          centered
        />

        <div className="mt-12">
          <Tabs defaultValue="pessoal" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="pessoal">Empréstimo Pessoal</TabsTrigger>
              <TabsTrigger value="consignado">Consignado</TabsTrigger>
              <TabsTrigger value="garantia">Com Garantia</TabsTrigger>
            </TabsList>
            <TabsContent value="pessoal">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Empréstimo Pessoal</h2>
                  <p className="text-lg text-muted-foreground">
                    Ideal para quem precisa de dinheiro rápido para realizar projetos pessoais, quitar dívidas ou lidar
                    com emergências.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Aprovação rápida</h3>
                        <p className="text-sm text-muted-foreground">Resposta em até 24 horas</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Percent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Taxas competitivas</h3>
                        <p className="text-sm text-muted-foreground">A partir de 1,99% ao mês</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Prazos flexíveis</h3>
                        <p className="text-sm text-muted-foreground">De 6 a 60 meses para pagar</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Simular empréstimo</Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Simulação de Empréstimo</CardTitle>
                    <CardDescription>Calcule o valor das parcelas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Valor do empréstimo</label>
                          <span className="text-sm">R$ 5.000,00</span>
                        </div>
                        <div className="px-1">
                          <Slider defaultValue={[5000]} min={1000} max={50000} step={1000} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Prazo (meses)</label>
                          <span className="text-sm">24 meses</span>
                        </div>
                        <div className="px-1">
                          <Slider defaultValue={[24]} min={6} max={60} step={6} />
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Valor da parcela:</span>
                          <span className="font-medium">R$ 258,33</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Taxa de juros:</span>
                          <span className="font-medium">1,99% a.m.</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Total a pagar:</span>
                          <span className="font-medium">R$ 6.199,92</span>
                        </div>
                      </div>
                      <Button className="w-full">Solicitar agora</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="consignado">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Empréstimo Consignado</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Para aposentados, pensionistas e servidores públicos. As melhores taxas do mercado com desconto direto
                  na folha.
                </p>
                <Button>Consultar condições</Button>
              </div>
            </TabsContent>
            <TabsContent value="garantia">
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold mb-4">Empréstimo com Garantia</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Use seu veículo, imóvel ou investimentos como garantia e obtenha taxas ainda menores e prazos maiores.
                </p>
                <Button>Consultar condições</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Por que escolher nossos empréstimos?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Sem taxas ocultas</CardTitle>
                <CardDescription>Transparência em todas as etapas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não cobramos taxas de abertura de crédito, seguros obrigatórios ou outras taxas ocultas. O valor que
                  você vê na simulação é exatamente o que você vai pagar.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Calculator className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Simulação personalizada</CardTitle>
                <CardDescription>Encontre a melhor opção para você</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa ferramenta de simulação permite que você ajuste valores e prazos para encontrar a opção que
                  melhor se encaixa no seu orçamento e necessidades.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Segurança garantida</CardTitle>
                <CardDescription>Seus dados estão protegidos</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos tecnologia de ponta para proteger suas informações pessoais e financeiras. Sua privacidade
                  e segurança são nossas prioridades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

