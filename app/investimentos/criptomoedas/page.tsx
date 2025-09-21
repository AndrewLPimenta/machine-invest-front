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
              src="https://neofeed.com.br/wp-content/uploads/2022/08/Criptomoedas2.jpg"
              alt="Criptomoedas"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
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

