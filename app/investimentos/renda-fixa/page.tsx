import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Shield, TrendingUp, Clock, DollarSign } from "lucide-react"

export default function RendaFixaPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Renda Fixa"
          description="Investimentos com previsibilidade e segurança para seu patrimônio."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
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
            <Button className="w-fit">Começar a investir</Button>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Simulador de Renda Fixa</CardTitle>
              <CardDescription>Calcule o rendimento do seu investimento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Valor inicial (R$)</label>
                  <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="1000" />
                </div>
                <div>
                  <label className="text-sm font-medium">Prazo (meses)</label>
                  <input type="number" className="w-full mt-1 p-2 border rounded-md" placeholder="12" />
                </div>
                <div>
                  <label className="text-sm font-medium">Tipo de investimento</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>CDB (110% CDI)</option>
                    <option>Tesouro Selic</option>
                    <option>LCI/LCA (90% CDI)</option>
                  </select>
                </div>
                <Button className="w-full">Calcular</Button>
                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Valor bruto:</span>
                    <span className="font-medium">R$ 1.110,00</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Rendimento:</span>
                    <span className="font-medium">R$ 110,00 (11%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Valor líquido:</span>
                    <span className="font-medium">R$ 1.088,00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
                  Os investimentos em renda fixa são considerados de baixo risco, especialmente aqueles com garantia do
                  FGC ou do Governo Federal, oferecendo maior segurança para seu patrimônio.
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
                  Na renda fixa, você sabe exatamente quanto vai receber ao final do período de investimento, o que
                  facilita o planejamento financeiro e o estabelecimento de metas.
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
                  A renda fixa é essencial para uma carteira de investimentos bem diversificada, ajudando a equilibrar o
                  risco de investimentos mais voláteis como ações e criptomoedas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

