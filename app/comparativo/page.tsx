"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { EnhancedComparisonChart } from "@/components/enhanced-comparison-chart"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { FeatureComparisonTable } from "@/components/feature-comparison-table"
import { SavingsCalculator } from "@/components/savings-calculator"
import { TestimonialCard } from "@/components/testimonial-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ComparativoPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Dados de comparação fictícios
  const featureComparisonData = [
    { label: "Gestão de Finanças", machineInvest: true, otherPlatform: false },
    { label: "Simulação de Investimentos", machineInvest: true, otherPlatform: false },
    { label: "Agente de IA para recomendações", machineInvest: true, otherPlatform: false },
    { label: "Dicas personalizadas", machineInvest: true, otherPlatform: false },
  ]

  const comparisonFeatures = [
    {
      category: "Gestão Financeira",
      features: [
        { name: "Painel completo de finanças", machineInvest: true, otherPlatform: false, highlight: true },
        { name: "Gráficos de receitas e despesas", machineInvest: true, otherPlatform: false },
        { name: "Planejamento financeiro personalizado", machineInvest: true, otherPlatform: false },
      ],
    },
    {
      category: "Investimentos",
      features: [
        { name: "Simulador de investimentos", machineInvest: true, otherPlatform: false, highlight: true },
        { name: "Acompanhamento do rendimento histórico", machineInvest: true, otherPlatform: false },
      ],
    },
    {
      category: "Inteligência e Dicas",
      features: [
        { name: "Agente de IA com recomendações inteligentes", machineInvest: true, otherPlatform: false, highlight: true },
        { name: "Alertas e dicas personalizadas", machineInvest: true, otherPlatform: false },
        { name: "Conteúdos educativos sobre finanças", machineInvest: true, otherPlatform: false },
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "A Machine Invest me ajudou a organizar minhas finanças e entender onde posso investir de forma inteligente.",
      author: "Ana Rodrigues",
      role: "Usuária da plataforma",
    },
    {
      quote:
        "O simulador de investimentos é incrível. Posso planejar meus objetivos sem depender de bancos.",
      author: "Carlos Silva",
      role: "Investidor iniciante",
    },
    {
      quote:
        "As recomendações da IA realmente fazem diferença no meu dia a dia financeiro. Mais controle e segurança.",
      author: "Fernanda Lima",
      role: "Investidora experiente",
    },
  ]

  return (
    <PageLayout>
      <Section className="pt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHeading
            title="Machine Invest"
            description="Nossa plataforma ajuda você a gerenciar suas finanças, simular investimentos, receber dicas e contar com um agente de IA que te orienta de forma personalizada."
            centered
          />
        </motion.div>


        {/* Comparativo detalhado */}
        <div className="mt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <LineChart className="h-6 w-6 text-primary" />
                  Comparativo Detalhado
                </CardTitle>
                <CardDescription>
                  Descubra todas as funcionalidades que tornam a Machine Invest única no mercado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FeatureComparisonTable categories={comparisonFeatures} />
              </CardContent>
            </Card>
          </motion.div>
        </div>

       

        {/* Call to Action final */}
        <motion.div className="mt-16 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <div className="max-w-2xl mx-auto bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Comece a gerenciar suas finanças de forma inteligente</h3>
            <p className="mb-6 text-muted-foreground">
              Junte-se a milhares de usuários que já simulam investimentos, recebem dicas personalizadas e organizam suas finanças com a Machine Invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/cadastro">Comece agora gratuitamente</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/download">
                  <ArrowDownToLine className="mr-2 h-4 w-4" />
                  Baixar Aplicativo
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Section>
    </PageLayout>
  )
}
