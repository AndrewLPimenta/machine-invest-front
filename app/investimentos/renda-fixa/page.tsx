"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, TrendingUp, Clock, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RendaFixaPage() {
  const [valorInicial, setValorInicial] = useState<number>(0)
  const [prazo, setPrazo] = useState<number>(0)
  const [tipo, setTipo] = useState("cdb")
  const [resultado, setResultado] = useState<{ bruto: number; rendimento: number; liquido: number } | null>(null)
  const [simulated, setSimulated] = useState(false)
  const [simulationsCount, setSimulationsCount] = useState(0)
  const MAX_FREE_SIMULATIONS = 3
  const isLoggedIn = false // Substituir pela lógica real de autenticação

  const calcular = () => {
    if (!isLoggedIn && simulationsCount >= MAX_FREE_SIMULATIONS) return
    const taxa = tipo === "cdb" ? 0.011 : tipo === "selic" ? 0.01 : tipo === "lci" ? 0.009 : 0.01

    const bruto = valorInicial * Math.pow(1 + taxa, prazo)
    const rendimento = bruto - valorInicial
    const ir = tipo === "lci" ? 0 : rendimento * 0.15
    const liquido = bruto - ir

    setResultado({ bruto, rendimento, liquido })
    setSimulated(true)

    if (!isLoggedIn) setSimulationsCount(prev => prev + 1)
  }

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Renda Fixa"
          description="Investimentos com previsibilidade e segurança para seu patrimônio."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Texto e benefícios */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Segurança e previsibilidade para seu dinheiro</h2>
            <p className="text-lg text-muted-foreground">
              Os investimentos em renda fixa são ideais para quem busca segurança e previsibilidade. Conheça nossas
              opções e encontre a melhor alternativa para seus objetivos financeiros.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Segurança</h3>
                  <p className="text-sm text-muted-foreground">Investimentos com baixo risco</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Rentabilidade previsível</h3>
                  <p className="text-sm text-muted-foreground">Saiba exatamente quanto vai receber</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Diversas opções de prazos</h3>
                  <p className="text-sm text-muted-foreground">De curto a longo prazo</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Começar a simular</Button>
          </div>

          {/* Simulador */}
          <Card>
            <CardHeader>
              <CardTitle>Simulador de Renda Fixa</CardTitle>
              <CardDescription>Calcule o rendimento do seu investimento</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Valor inicial (R$)</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="1000"
                  onChange={(e) => setValorInicial(parseFloat(e.target.value))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Prazo (meses)</label>
                <input
                  type="number"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="12"
                  onChange={(e) => setPrazo(parseInt(e.target.value))}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Tipo de investimento</label>
                <select
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md"
                >
                  <option value="cdb">CDB (110% CDI)</option>
                  <option value="selic">Tesouro Selic</option>
                  <option value="lci">LCI/LCA (90% CDI)</option>
                </select>
              </div>

              {!isLoggedIn && simulationsCount >= MAX_FREE_SIMULATIONS ? (
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/login">Faça login para simular mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              ) : (
                <Button className="w-full" onClick={calcular}>Calcular</Button>
              )}
            </CardContent>

            {/* Resultado com animação */}
            {simulated && resultado && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-4 bg-muted rounded-b-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Valor bruto:</span>
                  <span className="font-medium">R$ {resultado.bruto.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Rendimento:</span>
                  <span className="font-medium">
                    R$ {resultado.rendimento.toFixed(2)} ({((resultado.rendimento / valorInicial) * 100).toFixed(1)}%)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Valor líquido:</span>
                  <span className="font-medium">R$ {resultado.liquido.toFixed(2)}</span>
                </div>
              </motion.div>
            )}
          </Card>
        </div>

        {/* Tabela e cards informativos */}
        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Opções de Investimentos</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead>Rentabilidade</TableHead>
                <TableHead>Prazo mínimo</TableHead>
                <TableHead>Liquidez</TableHead>
                <TableHead>Garantia</TableHead>
                <TableHead>IR</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">CDB</TableCell>
                <TableCell>100% a 120% do CDI</TableCell>
                <TableCell>1 dia</TableCell>
                <TableCell>Diária após carência</TableCell>
                <TableCell>FGC até R$ 250 mil</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">LCI/LCA</TableCell>
                <TableCell>85% a 95% do CDI</TableCell>
                <TableCell>90 dias</TableCell>
                <TableCell>Após vencimento</TableCell>
                <TableCell>FGC até R$ 250 mil</TableCell>
                <TableCell>Isento</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tesouro Selic</TableCell>
                <TableCell>Taxa Selic</TableCell>
                <TableCell>Não há</TableCell>
                <TableCell>Diária</TableCell>
                <TableCell>Governo Federal</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Tesouro IPCA+</TableCell>
                <TableCell>IPCA + taxa prefixada</TableCell>
                <TableCell>Não há</TableCell>
                <TableCell>Diária</TableCell>
                <TableCell>Governo Federal</TableCell>
                <TableCell>Sim</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Debêntures</TableCell>
                <TableCell>CDI + spread ou IPCA + taxa</TableCell>
                <TableCell>Variável</TableCell>
                <TableCell>Variável</TableCell>
                <TableCell>Empresa emissora</TableCell>
                <TableCell>Variável</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Por que investir em Renda Fixa?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Segurança</CardTitle>
                <CardDescription>Baixo risco para seu patrimônio</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Investimentos de baixo risco com garantia do FGC ou Governo Federal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Previsibilidade</CardTitle>
                <CardDescription>Saiba quanto vai receber</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você sabe exatamente quanto receberá ao final do período.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Diversificação</CardTitle>
                <CardDescription>Equilibre sua carteira</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Essencial para equilibrar riscos de ativos mais voláteis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}
