"use client"

import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, Clock, CheckCircle, DollarSign, Percent, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { useState, useMemo } from "react"

type LoanType = 'pessoal' | 'consignado' | 'garantia'

interface LoanTerms {
  minAmount: number
  maxAmount: number
  minTerm: number
  maxTerm: number
  interestRate: number
  step: number
}

const loanTerms: Record<LoanType, LoanTerms> = {
  pessoal: {
    minAmount: 1000,
    maxAmount: 50000,
    minTerm: 6,
    maxTerm: 60,
    interestRate: 1.99,
    step: 1000
  },
  consignado: {
    minAmount: 2000,
    maxAmount: 100000,
    minTerm: 12,
    maxTerm: 84,
    interestRate: 1.2,
    step: 1000
  },
  garantia: {
    minAmount: 5000,
    maxAmount: 200000,
    minTerm: 12,
    maxTerm: 120,
    interestRate: 0.99,
    step: 5000
  }
}

export default function EmprestimosPage() {
  const [activeTab, setActiveTab] = useState<LoanType>('pessoal')
  const [loanAmount, setLoanAmount] = useState(loanTerms[activeTab].minAmount)
  const [loanTerm, setLoanTerm] = useState(loanTerms[activeTab].minTerm)

  const handleTabChange = (value: string) => {
    const newTab = value as LoanType
    setActiveTab(newTab)
    // Reset values to new tab's minimums
    setLoanAmount(loanTerms[newTab].minAmount)
    setLoanTerm(loanTerms[newTab].minTerm)
  }

  const { monthlyPayment, totalAmount } = useMemo(() => {
    const rate = loanTerms[activeTab].interestRate / 100
    const numerator = loanAmount * rate * Math.pow(1 + rate, loanTerm)
    const denominator = Math.pow(1 + rate, loanTerm) - 1
    const monthly = numerator / denominator
    const total = monthly * loanTerm

    return {
      monthlyPayment: monthly,
      totalAmount: total
    }
  }, [loanAmount, loanTerm, activeTab])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleLoanRequest = () => {
    // Aqui você pode adicionar a lógica para enviar a solicitação de empréstimo
    alert(`Solicitação de empréstimo enviada:\nValor: ${formatCurrency(loanAmount)}\nParcelas: ${loanTerm}x de ${formatCurrency(monthlyPayment)}`)
  }

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Empréstimos"
          description="Soluções financeiras para realizar seus projetos com as melhores taxas do mercado."
          centered
        />

        <div className="mt-12">
          <Tabs defaultValue="pessoal" className="w-full" onValueChange={handleTabChange}>
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
                        <p className="text-sm text-muted-foreground">A partir de {loanTerms.pessoal.interestRate}% ao mês</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Prazos flexíveis</h3>
                        <p className="text-sm text-muted-foreground">De {loanTerms.pessoal.minTerm} a {loanTerms.pessoal.maxTerm} meses para pagar</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit" onClick={handleLoanRequest}>Simular empréstimo</Button>
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
                          <span className="text-sm">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanAmount]} 
                            min={loanTerms[activeTab].minAmount} 
                            max={loanTerms[activeTab].maxAmount} 
                            step={loanTerms[activeTab].step}
                            onValueChange={(value) => setLoanAmount(value[0])}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Prazo (meses)</label>
                          <span className="text-sm">{loanTerm} meses</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanTerm]} 
                            min={loanTerms[activeTab].minTerm} 
                            max={loanTerms[activeTab].maxTerm} 
                            step={6}
                            onValueChange={(value) => setLoanTerm(value[0])}
                          />
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Valor da parcela:</span>
                          <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Taxa de juros:</span>
                          <span className="font-medium">{loanTerms[activeTab].interestRate}% a.m.</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Total a pagar:</span>
                          <span className="font-medium">{formatCurrency(totalAmount)}</span>
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleLoanRequest}>Solicitar agora</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="consignado">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Empréstimo Consignado</h2>
                  <p className="text-lg text-muted-foreground">
                    Para aposentados, pensionistas e servidores públicos. As melhores taxas do mercado com desconto direto
                    na folha.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Taxas reduzidas</h3>
                        <p className="text-sm text-muted-foreground">A partir de {loanTerms.consignado.interestRate}% ao mês</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Percent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Prazos estendidos</h3>
                        <p className="text-sm text-muted-foreground">Até {loanTerms.consignado.maxTerm} meses para pagar</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Desconto em folha</h3>
                        <p className="text-sm text-muted-foreground">Pagamento automático e sem preocupações</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit" onClick={handleLoanRequest}>Simular empréstimo</Button>
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
                          <span className="text-sm">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanAmount]} 
                            min={loanTerms[activeTab].minAmount} 
                            max={loanTerms[activeTab].maxAmount} 
                            step={loanTerms[activeTab].step}
                            onValueChange={(value) => setLoanAmount(value[0])}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Prazo (meses)</label>
                          <span className="text-sm">{loanTerm} meses</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanTerm]} 
                            min={loanTerms[activeTab].minTerm} 
                            max={loanTerms[activeTab].maxTerm} 
                            step={6}
                            onValueChange={(value) => setLoanTerm(value[0])}
                          />
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Valor da parcela:</span>
                          <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Taxa de juros:</span>
                          <span className="font-medium">{loanTerms[activeTab].interestRate}% a.m.</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Total a pagar:</span>
                          <span className="font-medium">{formatCurrency(totalAmount)}</span>
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleLoanRequest}>Solicitar agora</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="garantia">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Empréstimo com Garantia</h2>
                  <p className="text-lg text-muted-foreground">
                    Use seu veículo, imóvel ou investimentos como garantia e obtenha taxas ainda menores e prazos maiores.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Taxas especiais</h3>
                        <p className="text-sm text-muted-foreground">A partir de {loanTerms.garantia.interestRate}% ao mês</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Percent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Valores mais altos</h3>
                        <p className="text-sm text-muted-foreground">Até {formatCurrency(loanTerms.garantia.maxAmount)}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Prazos longos</h3>
                        <p className="text-sm text-muted-foreground">Até {loanTerms.garantia.maxTerm} meses para pagar</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit" onClick={handleLoanRequest}>Simular empréstimo</Button>
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
                          <span className="text-sm">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanAmount]} 
                            min={loanTerms[activeTab].minAmount} 
                            max={loanTerms[activeTab].maxAmount} 
                            step={loanTerms[activeTab].step}
                            onValueChange={(value) => setLoanAmount(value[0])}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <label className="text-sm font-medium">Prazo (meses)</label>
                          <span className="text-sm">{loanTerm} meses</span>
                        </div>
                        <div className="px-1">
                          <Slider 
                            value={[loanTerm]} 
                            min={loanTerms[activeTab].minTerm} 
                            max={loanTerms[activeTab].maxTerm} 
                            step={6}
                            onValueChange={(value) => setLoanTerm(value[0])}
                          />
                        </div>
                      </div>
                      <div className="rounded-lg bg-muted p-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Valor da parcela:</span>
                          <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
                        </div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm">Taxa de juros:</span>
                          <span className="font-medium">{loanTerms[activeTab].interestRate}% a.m.</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Total a pagar:</span>
                          <span className="font-medium">{formatCurrency(totalAmount)}</span>
                        </div>
                      </div>
                      <Button className="w-full" onClick={handleLoanRequest}>Solicitar agora</Button>
                    </div>
                  </CardContent>
                </Card>
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