"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function FaqPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "Conta e Cadastro",
      questions: [
        {
          question: "Como faço para abrir uma conta na Machine Invest?",
          answer:
            "Para abrir uma conta, basta baixar nosso aplicativo, disponível para iOS e Android, e seguir o processo de cadastro. Você precisará de um documento de identidade com foto e um comprovante de residência. O processo é 100% digital e leva apenas alguns minutos.",
        },
        {
          question: "Quais documentos são necessários para abrir uma conta?",
          answer:
            "Para abrir uma conta na Machine Invest, você precisará de um documento de identidade com foto (RG, CNH ou Passaporte), CPF e um comprovante de residência recente (conta de luz, água, telefone ou internet emitida nos últimos 3 meses).",
        },
        {
          question: "A Machine Invest é segura?",
          answer:
            "Sim, a Machine Invest utiliza tecnologia de ponta para garantir a segurança dos dados e investimentos dos clientes. Somos regulamentados pelos órgãos competentes, como o Banco Central do Brasil e a CVM, e seguimos rigorosos protocolos de segurança da informação, incluindo criptografia de ponta a ponta e autenticação de dois fatores.",
        },
        {
          question: "Posso ter mais de uma conta na Machine Invest?",
          answer:
            "Cada CPF pode ter apenas uma conta na Machine Invest. No entanto, você pode criar diferentes carteiras de investimento dentro da mesma conta para organizar seus objetivos financeiros.",
        },
      ],
    },
    {
      title: "Investimentos",
      questions: [
        {
          question: "Quais são as taxas cobradas pela Machine Invest?",
          answer:
            "A Machine Invest não cobra taxas de manutenção de conta ou transferências. Para investimentos, as taxas variam de acordo com o produto escolhido e são sempre apresentadas de forma transparente antes da confirmação da operação. Nossa taxa de administração é significativamente menor que a média do mercado, variando de 0% a 0,5%, dependendo do produto.",
        },
        {
          question: "Como funciona o processo de investimento em criptomoedas?",
          answer:
            "Após criar sua conta e realizar um depósito, você pode acessar a seção de criptomoedas no aplicativo, escolher a moeda desejada e definir o valor a ser investido. A operação é processada instantaneamente e você pode acompanhar seu investimento em tempo real. Oferecemos mais de 50 criptomoedas diferentes, com informações detalhadas sobre cada uma delas.",
        },
        {
          question: "Qual é o valor mínimo para começar a investir?",
          answer:
            "O valor mínimo para começar a investir na Machine Invest varia de acordo com o produto escolhido. Para a maioria dos produtos de renda fixa, o valor mínimo é de R$ 100. Para renda variável e criptomoedas, você pode começar com valores a partir de R$ 1, permitindo que você construa sua carteira gradualmente.",
        },
        {
          question: "Posso transferir meus investimentos de outra instituição para a Machine Invest?",
          answer:
            "Sim, oferecemos um processo simplificado de portabilidade para a maioria dos investimentos. Entre em contato com nosso suporte para avaliarmos seu caso específico e orientarmos sobre o processo. A portabilidade é gratuita e, em muitos casos, pode ser realizada diretamente pelo aplicativo.",
        },
        {
          question: "Como são calculados os rendimentos dos investimentos?",
          answer:
            "Os rendimentos variam de acordo com o tipo de investimento. Para produtos de renda fixa, o cálculo é baseado na taxa contratada. Para renda variável e criptomoedas, o rendimento depende da valorização dos ativos no mercado. Todos os detalhes sobre o cálculo de rendimentos são apresentados de forma transparente na descrição de cada produto.",
        },
      ],
    },
    {
      title: "Serviços Bancários",
      questions: [
        {
          question: "Como funciona a conta digital da Machine Invest?",
          answer:
            "A conta digital da Machine Invest é uma conta completa, sem taxas de manutenção, que permite realizar transferências, pagamentos de boletos, recarga de celular e muito mais. O saldo da conta rende automaticamente 100% do CDI, e você tem acesso a um cartão virtual e físico sem anuidade.",
        },
        {
          question: "Quais são as modalidades de empréstimo disponíveis?",
          answer:
            "Oferecemos diversas modalidades de empréstimo, incluindo empréstimo pessoal, financiamento imobiliário e crédito com garantia de investimentos. As taxas são personalizadas de acordo com o seu perfil e histórico financeiro, sempre com condições mais vantajosas que os bancos tradicionais.",
        },
        {
          question: "Como funciona o cartão de crédito da Machine Invest?",
          answer:
            "O cartão de crédito da Machine Invest não possui anuidade e oferece um programa de pontos que não expiram. Você pode gerenciar seu cartão diretamente pelo aplicativo, definindo limites, bloqueando temporariamente, recebendo notificações em tempo real e muito mais.",
        },
        {
          question: "É possível realizar saques com o cartão da Machine Invest?",
          answer:
            "Sim, você pode realizar saques em caixas eletrônicos da rede conveniada em todo o Brasil. Oferecemos até 4 saques gratuitos por mês, e a partir do quinto saque é cobrada uma taxa de R$ 6,50 por operação.",
        },
      ],
    },
    {
      title: "Suporte e Atendimento",
      questions: [
        {
          question: "Quais são os canais de atendimento disponíveis?",
          answer:
            "Oferecemos diversos canais de atendimento: chat no aplicativo disponível 24/7, central de atendimento telefônico (0800 123 4567) de segunda a sexta das 8h às 20h, e-mail (contato@machineinvest.com.br) e redes sociais. Nosso tempo médio de resposta é de menos de 5 minutos no chat e 24 horas úteis para e-mails.",
        },
        {
          question: "Como posso recuperar minha senha?",
          answer:
            "Para recuperar sua senha, acesse a tela de login do aplicativo e clique em 'Esqueci minha senha'. Você receberá um link de recuperação no e-mail cadastrado. Por segurança, o link expira em 30 minutos. Se precisar de ajuda adicional, entre em contato com nosso suporte.",
        },
        {
          question: "O que fazer em caso de perda ou roubo do cartão?",
          answer:
            "Em caso de perda ou roubo do seu cartão, bloqueie-o imediatamente pelo aplicativo na seção 'Cartões' > 'Meus Cartões' > 'Bloquear Cartão'. Você também pode solicitar um novo cartão pelo mesmo caminho. Para situações de emergência, entre em contato com nossa central de atendimento 24h.",
        },
      ],
    },
  ]

  // Filter questions based on search query
  const filteredFaqs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (q) =>
              q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.questions.length > 0)
    : faqCategories

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
              Perguntas <span className="text-primary">Frequentes</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Encontre respostas para as dúvidas mais comuns sobre a Machine Invest, nossos produtos e serviços.
            </p>
          </motion.div>
          <motion.div
            className="mt-8 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar perguntas..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
          <motion.div
            className="mt-16 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            ref={ref}
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map(
                (category, index) =>
                  category.questions.length > 0 && (
                    <div key={index} className="mb-10">
                      <h2 className="text-2xl font-bold mb-4">{category.title}</h2>
                      <Accordion type="single" collapsible className="space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <AccordionItem
                            key={faqIndex}
                            value={`${index}-${faqIndex}`}
                            className="border rounded-lg px-6"
                          >
                            <AccordionTrigger className="text-left hover:no-underline py-4">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-4 text-muted-foreground">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  ),
              )
            ) : (
              <div className="text-center py-10">
                <p className="text-muted-foreground">Nenhuma pergunta encontrada para "{searchQuery}".</p>
                <Button variant="link" onClick={() => setSearchQuery("")}>
                  Limpar busca
                </Button>
              </div>
            )}
          </motion.div>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="max-w-3xl mx-auto bg-primary/5">
              <CardHeader>
                <CardTitle>Não encontrou o que procurava?</CardTitle>
                <CardDescription>
                  Entre em contato com nossa equipe de suporte para obter ajuda personalizada.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1" asChild>
                  <Link href="/contato">
                    Falar com Suporte <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1" asChild>
                  <Link href="/#download">
                    Baixar Aplicativo <ArrowDownToLine className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

