import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, CreditCard, Smartphone, Shield, Clock, Zap } from "lucide-react"
import Image from "next/image"

export default function ContaDigitalPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Conta Digital"
          description="Simples, sem taxas e com todos os recursos que você precisa."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Sua conta completa e sem complicações</h2>
            <p className="text-lg text-muted-foreground">
              A Conta Digital da Machine Invest foi desenvolvida para simplificar sua vida financeira. Sem taxas de
              manutenção, transferências gratuitas e um aplicativo intuitivo para gerenciar tudo.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Sem taxas mensais</h3>
                  <p className="text-sm text-muted-foreground">Economize com uma conta totalmente gratuita</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Cartão de débito e crédito</h3>
                  <p className="text-sm text-muted-foreground">Sem anuidade e com programa de pontos</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Pix instantâneo</h3>
                  <p className="text-sm text-muted-foreground">Transferências gratuitas 24/7</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Abrir minha conta</Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[400px] w-[300px]">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Aplicativo da Conta Digital"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Recursos da Conta Digital</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Smartphone className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Aplicativo Intuitivo</CardTitle>
                <CardDescription>Gerencie sua conta de qualquer lugar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nosso aplicativo foi desenvolvido pensando na melhor experiência do usuário. Acesse sua conta, faça
                  transferências, pague contas e muito mais com apenas alguns toques.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Segurança Avançada</CardTitle>
                <CardDescription>Proteção em todas as operações</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos as mais avançadas tecnologias de segurança para proteger suas informações e transações.
                  Autenticação de dois fatores, notificações em tempo real e monitoramento constante.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Atendimento 24/7</CardTitle>
                <CardDescription>Suporte quando você precisar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe de atendimento está disponível 24 horas por dia, 7 dias por semana, para ajudar com
                  qualquer dúvida ou problema que você possa ter com sua conta.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

