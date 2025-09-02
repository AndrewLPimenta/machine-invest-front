"use client"

import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, CheckCircle, Percent } from "lucide-react"
import Image from "next/image"
import { useState, useMemo } from "react"
import Link from "next/link" // aqui
import { ArrowRight } from "lucide-react"

type PlanType = 'PGBL' | 'VGBL'
type TaxRegime = 'Progressivo' | 'Regressivo'

export default function PrevidenciaPage() {
  const [currentAge, setCurrentAge] = useState<number>(35)
  const [retirementAge, setRetirementAge] = useState<number>(65)
  const [monthlyContribution, setMonthlyContribution] = useState<number>(500)
  const [annualReturn, setAnnualReturn] = useState<number>(8)
  const [planType, setPlanType] = useState<PlanType>('PGBL')
  const [taxRegime, setTaxRegime] = useState<TaxRegime>('Progressivo')

  const { accumulatedValue, estimatedIncome } = useMemo(() => {
    const years = retirementAge - currentAge
    const months = years * 12
    const monthlyRate = Math.pow(1 + annualReturn / 100, 1 / 12) - 1
    
    // Fórmula de valor futuro de uma série de pagamentos
    let futureValue = monthlyContribution * 
      (Math.pow(1 + monthlyRate, months) - 1) / 
      monthlyRate
    
    // Ajustes baseados no tipo de plano e regime tributário
    if (planType === 'PGBL' && taxRegime === 'Progressivo') {
      futureValue *= 0.85 // Simulação de imposto progressivo
    } else if (planType === 'VGBL' && taxRegime === 'Regressivo') {
      futureValue *= 0.92 // Simulação de imposto regressivo
    }
    
    // Renda mensal estimada (4% do valor acumulado por ano / 12 meses)
    const monthlyIncome = futureValue * 0.04 / 12
    
    return {
      accumulatedValue: futureValue,
      estimatedIncome: monthlyIncome
    }
  }, [currentAge, retirementAge, monthlyContribution, annualReturn, planType, taxRegime])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleSimulation = () => {
    // Aqui você pode adicionar lógica para enviar os dados ou salvar a simulação
    // alert(`Simulação realizada com sucesso!\nValor acumulado: ${formatCurrency(accumulatedValue)}`)
  }

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
              Quer garantir seu futuro financeiro com previdência privada? Recomendamos explorar plataformas 
              confiáveis que oferecem planos flexíveis e personalizados, com benefícios fiscais e diversas opções
              de investimento para todos os perfis.
            </p>
            <h2 className="text-3xl font-bold tracking-tight">Potenciais opções:</h2>
            <p className="text-lg text-muted-foreground">PGBL, VGBL ou Plano empresarial</p>
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
            <Link href="/login">
            <Button className="w-fit">
              <ArrowRight className="mr-2 h-4 w-4" />
              Receber Dicas</Button >
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/previdencia-privada.jpg"
              alt="Previdência Privada"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Planos previdenciários:</h2>
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
                <Button className="w-full">Consultar</Button>
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
                <Button className="w-full">Consultar</Button>
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
                    <input 
                      type="number" 
                      className="w-full mt-1 p-2 border rounded-md" 
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      min={18}
                      max={70}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Idade de aposentadoria</label>
                    <input 
                      type="number" 
                      className="w-full mt-1 p-2 border rounded-md" 
                      value={retirementAge}
                      onChange={(e) => setRetirementAge(Number(e.target.value))}
                      min={currentAge + 1}
                      max={85}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contribuição mensal (R$)</label>
                    <input 
                      type="number" 
                      className="w-full mt-1 p-2 border rounded-md" 
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      min={100}
                      step={100}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Rentabilidade anual estimada (%)</label>
                    <input 
                      type="number" 
                      className="w-full mt-1 p-2 border rounded-md" 
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      min={0}
                      max={20}
                      step={0.5}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tipo de plano</label>
                    <select 
                      className="w-full mt-1 p-2 border rounded-md"
                      value={planType}
                      onChange={(e) => setPlanType(e.target.value as PlanType)}
                    >
                      <option value="PGBL">PGBL</option>
                      <option value="VGBL">VGBL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Regime de tributação</label>
                    <select 
                      className="w-full mt-1 p-2 border rounded-md"
                      value={taxRegime}
                      onChange={(e) => setTaxRegime(e.target.value as TaxRegime)}
                    >
                      <option value="Progressivo">Progressivo</option>
                      <option value="Regressivo">Regressivo</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full" onClick={handleSimulation}>Calcular</Button>
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-medium mb-2">Resultado da simulação:</h3>
                <div className="grid gap-2 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Valor acumulado:</p>
                    <p className="font-bold">{formatCurrency(accumulatedValue)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Renda mensal estimada:</p>
                    <p className="font-bold">{formatCurrency(estimatedIncome)}</p>
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