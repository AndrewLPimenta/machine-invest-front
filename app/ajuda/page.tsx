"use client"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"

export default function AjudaPage() {
  const faqCategories = [
    {
      id: "geral",
      title: "Geral",
      questions: [
        {
          question: "O que é a Machine Invest?",
          answer:
            "A Machine Invest é uma plataforma de investimentos com foco em criptomoedas e ativos digitais. Oferecemos ferramentas de simulação, análise e investimento para ajudar nossos usuários a tomar decisões financeiras mais inteligentes.",
        },
        {
          question: "Como começar a investir na plataforma?",
          answer:
            "Para começar a investir, você precisa criar uma conta, completar seu cadastro com os dados pessoais e bancários, fazer um depósito inicial e então poderá escolher os investimentos que deseja realizar.",
        },
        {
          question: "A Machine Invest é regulamentada?",
          answer:
            "Sim, a Machine Invest opera de acordo com todas as regulamentações financeiras aplicáveis e é supervisionada pelos órgãos reguladores competentes.",
        },
      ],
    },
    {
      id: "conta",
      title: "Conta e Cadastro",
      questions: [
        {
          question: "Como criar uma conta na Machine Invest?",
          answer:
            "Para criar uma conta, clique no botão 'Cadastre-se' no canto superior direito do site, preencha o formulário com seus dados pessoais e siga as instruções para verificar seu e-mail e completar o cadastro.",
        },
        {
          question: "Quais documentos são necessários para abrir uma conta?",
          answer:
            "Para abrir uma conta, você precisará de um documento de identidade válido (RG ou CNH), CPF, comprovante de residência recente e, em alguns casos, comprovante de renda.",
        },
        {
          question: "Como recuperar minha senha?",
          answer:
            "Para recuperar sua senha, clique em 'Esqueceu a senha?' na página de login, informe o e-mail cadastrado e siga as instruções enviadas para redefinir sua senha.",
        },
      ],
    },
    {
      id: "investimentos",
      title: "Investimentos",
      questions: [
        {
          question: "Quais tipos de investimentos a plataforma oferece?",
          answer:
            "Oferecemos uma variedade de opções de investimento, incluindo criptomoedas, renda fixa, renda variável, fundos imobiliários e produtos estruturados.",
        },
        {
          question: "Qual é o valor mínimo para começar a investir?",
          answer:
            "O valor mínimo varia de acordo com o tipo de investimento, mas geralmente você pode começar com valores a partir de R$ 100,00 em algumas modalidades.",
        },
        {
          question: "Como funciona a tributação dos investimentos?",
          answer:
            "A tributação varia de acordo com o tipo de investimento e o prazo de aplicação. Criptomoedas, por exemplo, têm alíquota de 15% sobre o ganho de capital para operações acima de R$ 35.000,00 mensais.",
        },
      ],
    },
    {
      id: "criptomoedas",
      title: "Criptomoedas",
      questions: [
        {
          question: "O que são criptomoedas?",
          answer:
            "Criptomoedas são ativos digitais descentralizados que utilizam criptografia para garantir segurança nas transações e controlar a criação de novas unidades.",
        },
        {
          question: "Como comprar criptomoedas na plataforma?",
          answer:
            "Para comprar criptomoedas, acesse a seção 'Criptomoedas' no menu principal, escolha a moeda desejada, informe o valor que deseja investir e confirme a operação.",
        },
        {
          question: "É seguro investir em criptomoedas?",
          answer:
            "Investir em criptomoedas envolve riscos devido à volatilidade do mercado. Recomendamos estudar bem antes de investir e diversificar sua carteira para mitigar riscos.",
        },
      ],
    },
    {
      id: "seguranca",
      title: "Segurança",
      questions: [
        {
          question: "Como a Machine Invest protege meus dados?",
          answer:
            "Utilizamos criptografia de ponta a ponta, autenticação em dois fatores e seguimos rigorosos protocolos de segurança para proteger seus dados pessoais e financeiros.",
        },
        {
          question: "O que fazer se identificar atividades suspeitas na minha conta?",
          answer:
            "Se identificar atividades suspeitas, entre em contato imediatamente com nosso suporte através do e-mail seguranca@machineinvest.com ou pelo telefone 0800-123-4567.",
        },
        {
          question: "Como funciona a autenticação em dois fatores?",
          answer:
            "A autenticação em dois fatores adiciona uma camada extra de segurança, exigindo, além da senha, um código temporário enviado para seu celular ou gerado por um aplicativo autenticador.",
        },
      ],
    },
  ]

  const popularQuestions = [
    "Como começar a investir em criptomoedas?",
    "Qual é o valor mínimo para investir?",
    "Como sacar meu dinheiro?",
    "A plataforma é segura?",
    "Quais são as taxas cobradas?",
  ]

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
            <SectionHeading
              title="Central de Ajuda"
              description="Encontre respostas para suas dúvidas e aprenda mais sobre nossa plataforma."
              centered
            />
          </motion.div>

          <div className="mt-8 flex flex-col gap-8 md:flex-row">
            <motion.div
              className="w-full md:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative mb-8">
                <Input type="search" placeholder="Buscar perguntas..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>

              <Tabs defaultValue="geral" className="w-full">
                <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 md:grid-cols-5 mb-8">
                  {faqCategories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {faqCategories.map((category) => (
                  <TabsContent key={category.id} value={category.id} className="space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            <motion.div
              className="w-full md:w-1/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Populares</CardTitle>
                  <CardDescription>As dúvidas mais frequentes dos nossos usuários</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {popularQuestions.map((question, index) => (
                      <li key={index}>
                        <Link href="#" className="text-sm hover:text-primary">
                          {question}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Ainda com dúvidas?</CardTitle>
                  <CardDescription>Entre em contato com nossa equipe de suporte</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Telefone</p>
                      <p className="text-sm text-muted-foreground">0800 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">suporte@machineinvest.com</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contato">
                      Falar com Suporte <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

