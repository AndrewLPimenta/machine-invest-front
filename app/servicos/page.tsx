"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, Cpu, Lightbulb, Shield, Umbrella } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function ServicosPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <SiteLayout>
      <Section className="py-20">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Serviços e <span className="text-primary">Insights</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Descubra como a Machine pode ajudar você a gerenciar suas finanças e investimentos.
            </motion.p>
          </div>

          <Tabs defaultValue="conta" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
              <TabsTrigger value="conta">Conta Digital</TabsTrigger>
              <TabsTrigger value="IA">Machine IA</TabsTrigger>
              <TabsTrigger value="seguros">Seguros</TabsTrigger>
              <TabsTrigger value="previdencia">Previdência</TabsTrigger>
            </TabsList>

            {/* Conta Digital */}
            <TabsContent value="conta" className="space-y-4">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                {/* Conteúdo */}
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Cpu className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle>Conta Digital Machine</CardTitle>
                      <CardDescription>Conta digital completa.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Dicas financeiras personalizadas para você</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Gestão completa do seu dinheiro em um só lugar</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Agente de IA para insights e recomendações inteligentes</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span>Simulador de investimentos para planejar seu futuro</span>
                        </li>
                      </ul>

                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/#download">Abrir Conta <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                {/* Imagem */}
                <motion.div variants={item}>
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <Image src="/machine-logo.png" alt="Conta Digital Machine" width={800} height={600} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white">Conta Digital Machine</h3>
                      <p className="mt-2 text-white/80">Abra sua conta em minutos e comece a investir com facilidade.</p>
                      <Button className="mt-4 w-fit" variant="secondary" asChild>
                        <Link href="/#download">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Machine IA */}
            <TabsContent value="IA" className="space-y-4">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                {/* Conteúdo */}
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Lightbulb className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle>Insights Inteligentes</CardTitle>
                      <CardDescription>Receba recomendações personalizadas para seus investimentos com base no seu perfil de risco.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Análises detalhadas de mercado</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Dicas de investimentos personalizadas</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Alertas de oportunidades e riscos</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/#download">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>

                {/* Imagem */}
                <motion.div variants={item}>
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <Image src="/ia-logo.png" alt="Machine IA" width={800} height={600} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                      <h3 className="text-2xl font-bold text-white">Machine IA</h3>
                      <p className="mt-2 text-white/80">Inteligência artificial para analisar seu portfólio e otimizar seus resultados.</p>
                      <Button className="mt-4 w-fit" variant="secondary" asChild>
                        <Link href="/#download">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Seguros */}
            <TabsContent value="seguros" className="space-y-4">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                {/* Conteúdo */}
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Shield className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle>Dicas de Seguros</CardTitle>
                      <CardDescription>Informações para ajudá-lo a entender e planejar proteções financeiras.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Entenda diferentes tipos de cobertura</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Como planejar a proteção de sua família</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Dicas para equilibrar segurança e custo</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Imagem */}
                <motion.div variants={item}>
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <Image src="https://blog.juntoseguros.com/wp-content/uploads/2020/02/blog-contrato-seguro-garantia.jpg" alt="Dicas de Seguros" width={800} height={600} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white">Seguros Inteligentes</h3>
                      <p className="mt-2 text-white/80">Aprenda a proteger seu patrimônio e sua família com escolhas informadas.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            {/* Previdência */}
            <TabsContent value="previdencia" className="space-y-4">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                {/* Conteúdo */}
                <motion.div variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                        <Umbrella className="h-10 w-10 text-primary" />
                      </div>
                      <CardTitle>Dicas de Previdência</CardTitle>
                      <CardDescription>Informações para ajudá-lo a planejar sua aposentadoria de forma segura e eficiente.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Como escolher entre PGBL e VGBL</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Dicas de portabilidade e contribuições estratégicas</li>
                        <li className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary" />Planejamento financeiro para aposentadoria confortável</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Imagem */}
                <motion.div variants={item}>
                  <div className="relative h-full overflow-hidden rounded-lg">
                    <Image src="https://universodoseguro.com.br/wp-content/uploads/2024/10/unnamed-2024-10-31T084625.644-800x533.jpg" alt="Dicas de Previdência" width={800} height={600} className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold text-white">Previdência Planejada</h3>
                      <p className="mt-2 text-white/80">Aprenda a preparar seu futuro financeiro de forma consciente e segura.</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/download" id="download">
                Baixar App para Acesso Completo <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}
