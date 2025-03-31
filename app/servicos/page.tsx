"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, CreditCard, DollarSign, Home, Shield, Umbrella } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function ServicosPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <SiteLayout>
      <Section className="py-20">
        <ResponsiveContainer>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Serviços e <span className="text-primary">Produtos Bancários</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Conheça nossa linha completa de produtos financeiros para atender todas as suas necessidades.
            </p>
          </motion.div>
          <div className="mt-16">
            <Tabs defaultValue="conta" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
                <TabsTrigger value="conta">Conta Digital</TabsTrigger>
                <TabsTrigger value="emprestimos">Empréstimos</TabsTrigger>
                <TabsTrigger value="seguros">Seguros</TabsTrigger>
                <TabsTrigger value="previdencia">Previdência</TabsTrigger>
              </TabsList>
              <TabsContent value="conta" className="space-y-4">
                <motion.div
                  className="grid gap-8 lg:grid-cols-2"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  ref={ref}
                >
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <CreditCard className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Conta Digital Machine</CardTitle>
                        <CardDescription>
                          Conta digital completa, sem taxas e com cartão virtual e físico.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Transferências gratuitas e ilimitadas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Cartão de débito e crédito sem anuidade</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Saques gratuitos em rede conveniada</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Atendimento 24h via chat no aplicativo</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Rendimento automático do saldo</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Abrir Conta <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Conta Digital Machine"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white">Conta Digital Machine</h3>
                        <p className="mt-2 text-white/80">
                          Abra sua conta em minutos e comece a investir com facilidade.
                        </p>
                        <Button className="mt-4 w-fit" variant="secondary" asChild>
                          <Link href="/#download">
                            Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="emprestimos" className="space-y-4">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <DollarSign className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Empréstimo Pessoal</CardTitle>
                        <CardDescription>Crédito rápido e fácil para realizar seus projetos.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Taxa a partir de</span>
                            <span className="font-medium">1,99% a.m.</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Prazo</span>
                            <span className="font-medium">Até 60 meses</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Valor</span>
                            <span className="font-medium">Até R$ 50.000</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Simular Agora <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <Home className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Financiamento Imobiliário</CardTitle>
                        <CardDescription>Realize o sonho da casa própria com as melhores condições.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Taxa a partir de</span>
                            <span className="font-medium">8,99% a.a. + TR</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Prazo</span>
                            <span className="font-medium">Até 35 anos</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Financiamento</span>
                            <span className="font-medium">Até 80% do imóvel</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Simular Agora <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <CreditCard className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Crédito com Garantia</CardTitle>
                        <CardDescription>Use seus investimentos como garantia e obtenha taxas menores.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Taxa a partir de</span>
                            <span className="font-medium">0,99% a.m.</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Prazo</span>
                            <span className="font-medium">Até 36 meses</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Garantia</span>
                            <span className="font-medium">Investimentos ou criptomoedas</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Simular Agora <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="seguros" className="space-y-4">
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <Shield className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Seguro de Vida</CardTitle>
                        <CardDescription>
                          Proteção financeira para você e sua família em momentos difíceis.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Cobertura</span>
                            <span className="font-medium">Até R$ 1.000.000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Assistências</span>
                            <span className="font-medium">Funeral, médica e jurídica</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Pagamento</span>
                            <span className="font-medium">Mensal ou anual</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Contratar <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <Home className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Seguro Residencial</CardTitle>
                        <CardDescription>Proteção completa para sua casa contra imprevistos.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Cobertura</span>
                            <span className="font-medium">Incêndio, roubo, danos elétricos</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Assistências</span>
                            <span className="font-medium">Encanador, eletricista, chaveiro</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Pagamento</span>
                            <span className="font-medium">Mensal ou anual</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Contratar <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <Umbrella className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Seguro de Investimentos</CardTitle>
                        <CardDescription>Proteção para seus investimentos contra fraudes e golpes.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Cobertura</span>
                            <span className="font-medium">Até R$ 500.000</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Proteção</span>
                            <span className="font-medium">Fraudes, golpes, invasões</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Pagamento</span>
                            <span className="font-medium">Mensal ou anual</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Contratar <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </motion.div>
              </TabsContent>
              <TabsContent value="previdencia" className="space-y-4">
                <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                  <motion.div variants={item}>
                    <Card className="h-full">
                      <CardHeader>
                        <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                          <Shield className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle>Previdência Privada</CardTitle>
                        <CardDescription>Planeje sua aposentadoria com segurança e rentabilidade.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>PGBL e VGBL com as melhores taxas do mercado</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Portabilidade gratuita de outras instituições</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Diferentes perfis de investimento</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Benefícios fiscais (PGBL)</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                            <span>Aporte inicial a partir de R$ 100</span>
                          </li>
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <Link href="/#download">
                            Simular Plano <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                  <motion.div variants={item}>
                    <div className="relative h-full overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Previdência Privada"
                        width={800}
                        height={600}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                        <h3 className="text-2xl font-bold text-white">Previdência Privada</h3>
                        <p className="mt-2 text-white/80">
                          Comece a planejar hoje o seu futuro com tranquilidade financeira.
                        </p>
                        <Button className="mt-4 w-fit" variant="secondary" asChild>
                          <Link href="/#download">
                            Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/#download">
                Baixar App para Acesso Completo <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

