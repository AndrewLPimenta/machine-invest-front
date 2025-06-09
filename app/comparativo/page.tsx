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

  const feeComparisonData = [
    { label: "Taxa de Manutenção", machineInvest: 0, traditional: 30, color: "#10b981" },
    { label: "Taxa de Transferência", machineInvest: 0, traditional: 15, color: "#10b981" },
    { label: "Taxa de Administração", machineInvest: 0.5, traditional: 2, color: "#10b981" },
    { label: "Taxa de Custódia", machineInvest: 0, traditional: 0.3, color: "#10b981" },
  ]

  const returnComparisonData = [
    { label: "Renda Fixa", machineInvest: 12, traditional: 9, color: "#06b6d4" },
    { label: "Renda Variável", machineInvest: 18, traditional: 14, color: "#06b6d4" },
    { label: "Criptomoedas", machineInvest: 25, traditional: 0, color: "#06b6d4" },
    { label: "Tesouro Direto", machineInvest: 11, traditional: 10, color: "#06b6d4" },
  ]

  const comparisonFeatures = [
    {
      category: "Conta Digital",
      features: [
        { name: "Conta sem taxas de manutenção", machineInvest: true, traditional: false, highlight: true },
        { name: "Transferências gratuitas e ilimitadas", machineInvest: true, traditional: false, highlight: true },
        { name: "Cartão de débito e crédito sem anuidade", machineInvest: true, traditional: false },
        { name: "Rendimento automático do saldo", machineInvest: true, traditional: true },
        { name: "Atendimento 24h via chat", machineInvest: true, traditional: false },
        { name: "Aplicativo intuitivo e moderno", machineInvest: true, traditional: false },
        { name: "Pagamentos por aproximação e QR Code", machineInvest: true, traditional: true },
      ],
    },
    {
      category: "Investimentos",
      features: [
        { name: "Renda Fixa", machineInvest: true, traditional: true },
        { name: "Renda Variável", machineInvest: true, traditional: true },
        { name: "Criptomoedas", machineInvest: true, traditional: false, highlight: true },
        { name: "Simulador de investimentos", machineInvest: true, traditional: false },
        { name: "Recomendações personalizadas por IA", machineInvest: true, traditional: false, highlight: true },
        { name: "Taxa de administração reduzida", machineInvest: true, traditional: false, highlight: true },
        { name: "Investimentos internacionais", machineInvest: true, traditional: false },
      ],
    },
    {
      category: "Serviços",
      features: [
        { name: "Empréstimos com taxas reduzidas", machineInvest: true, traditional: false, highlight: true },
        { name: "Financiamento imobiliário", machineInvest: true, traditional: true },
        { name: "Seguros", machineInvest: true, traditional: true },
        { name: "Previdência privada", machineInvest: true, traditional: true },
        { name: "Educação financeira gratuita", machineInvest: true, traditional: false },
        { name: "Cashback em compras", machineInvest: true, traditional: false },
        { name: "Programa de fidelidade", machineInvest: true, traditional: true },
      ],
    },
  ]

  const testimonials = [
    {
      quote:
        "Depois de migrar para a Machine Invest, economizo mais de R$ 2.000 por ano em taxas e ainda tenho rendimentos superiores nos meus investimentos.",
      author: "Ricardo Almeida",
      role: "Ex-cliente de banco tradicional",
    },
    {
      quote:
        "A diferença na experiência do usuário é impressionante. Tudo é mais simples, rápido e transparente na Machine Invest.",
      author: "Mariana Santos",
      role: "Investidora há 2 anos",
    },
    {
      quote:
        "A possibilidade de investir em criptomoedas de forma segura e integrada com meus outros investimentos foi o que me fez escolher a Machine Invest.",
      author: "Paulo Mendes",
      role: "Entusiasta de tecnologia",
    },
    {
      quote:
        "O atendimento é excepcional. Sempre que tenho dúvidas, recebo respostas rápidas e claras, algo que nunca tive no meu banco anterior.",
      author: "Fernanda Lima",
      role: "Empreendedora",
    },
  ]

  return (
    <PageLayout>
      <Section className="pt-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionHeading
            title="Machine Invest vs <span class='text-primary'>Bancos Tradicionais</span>"
            description="Compare e descubra por que a Machine Invest é a escolha inteligente para seus investimentos e serviços financeiros."
            centered
          />
        </motion.div>

        <div className="mt-10">
          <Tabs defaultValue="fees" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="fees" className="text-sm sm:text-base">
                <BarChart3 className="h-4 w-4 mr-2" />
                Comparativo de Taxas
              </TabsTrigger>
              <TabsTrigger value="returns" className="text-sm sm:text-base">
                <TrendingUp className="h-4 w-4 mr-2" />
                Comparativo de Rendimentos
              </TabsTrigger>
            </TabsList>
            <TabsContent value="fees" className="mt-0">
              <EnhancedComparisonChart
                title="Comparativo de Taxas"
                description="Taxas cobradas pela Machine Invest vs Bancos Tradicionais"
                data={feeComparisonData}
                valuePrefix=""
                valueSuffix="%"
              />
            </TabsContent>
            <TabsContent value="returns" className="mt-0">
              <EnhancedComparisonChart
                title="Comparativo de Rendimentos"
                description="Rendimento médio anual por tipo de investimento"
                data={returnComparisonData}
                valuePrefix=""
                valueSuffix="% a.a."
              />
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <LineChart className="h-6 w-6 text-primary" />
                  Comparativo Detalhado
                </CardTitle>
                <CardDescription>
                  Veja as principais diferenças entre a Machine Invest e os bancos tradicionais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FeatureComparisonTable categories={comparisonFeatures} />
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <SavingsCalculator />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  Depoimentos de Clientes
                </CardTitle>
                <CardDescription>O que nossos clientes dizem sobre a mudança para a Machine Invest.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {testimonials.map((testimonial, index) => (
                    <TestimonialCard
                      key={index}
                      quote={testimonial.quote}
                      author={testimonial.author}
                      role={testimonial.role}
                      delay={0.1 * index}
                    />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" asChild>
                    <Link href="/depoimentos">
                      Ver Mais Depoimentos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="max-w-2xl mx-auto bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Pronto para fazer a mudança?</h3>
            <p className="mb-6 text-muted-foreground">
              Junte-se a milhares de clientes satisfeitos que já economizam dinheiro e maximizam seus investimentos com
              a Machine Invest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/cadastro">Abra sua conta grátis</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/download"
                id="download">
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

