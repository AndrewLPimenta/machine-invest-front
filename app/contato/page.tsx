"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowDownToLine, ArrowRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function ContatoPage() {
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

  const offices = [
    {
      city: "São Paulo",
      address: "Av. Paulista, 1000, Bela Vista",
      phone: "+55 (11) 3000-0000",
      email: "contato.sp@machineinvest.com.br",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      city: "Rio de Janeiro",
      address: "Av. Rio Branco, 500, Centro",
      phone: "+55 (21) 3000-0000",
      email: "contato.rj@machineinvest.com.br",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      city: "Belo Horizonte",
      address: "Av. do Contorno, 200, Funcionários",
      phone: "+55 (31) 3000-0000",
      email: "contato.bh@machineinvest.com.br",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  const faqs = [
    {
      question: "Como faço para abrir uma conta na Machine Invest?",
      answer:
        "Para abrir uma conta, basta baixar nosso aplicativo, disponível para iOS e Android, e seguir o processo de cadastro. Você precisará de um documento de identidade com foto e um comprovante de residência.",
    },
    {
      question: "Quais são as taxas cobradas pela Machine Invest?",
      answer:
        "A Machine Invest não cobra taxas de manutenção de conta ou transferências. Para investimentos, as taxas variam de acordo com o produto escolhido e são sempre apresentadas de forma transparente antes da confirmação da operação.",
    },
    {
      question: "Como funciona o processo de investimento em criptomoedas?",
      answer:
        "Após criar sua conta e realizar um depósito, você pode acessar a seção de criptomoedas no aplicativo, escolher a moeda desejada e definir o valor a ser investido. A operação é processada instantaneamente e você pode acompanhar seu investimento em tempo real.",
    },
    {
      question: "É seguro investir pela Machine Invest?",
      answer:
        "Sim, a Machine Invest utiliza tecnologia de ponta para garantir a segurança dos dados e investimentos dos clientes. Somos regulamentados pelos órgãos competentes e seguimos rigorosos protocolos de segurança da informação.",
    },
    {
      question: "Posso transferir meus investimentos de outra instituição para a Machine Invest?",
      answer:
        "Sim, oferecemos um processo simplificado de portabilidade para a maioria dos investimentos. Entre em contato com nosso suporte para avaliarmos seu caso específico e orientarmos sobre o processo.",
    },
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Estamos aqui para ajudar. Entre em contato conosco para tirar dúvidas, fazer sugestões ou conhecer mais
              sobre nossos serviços.
            </p>
          </motion.div>
          <motion.div
            className="mt-16 grid gap-8 lg:grid-cols-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            ref={ref}
          >
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Envie uma Mensagem</CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato o mais breve possível.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nome</Label>
                      <Input id="first-name" placeholder="Seu nome" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Sobrenome</Label>
                      <Input id="last-name" placeholder="Seu sobrenome" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(00) 00000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um assunto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suporte">Suporte Técnico</SelectItem>
                        <SelectItem value="investimentos">Dúvidas sobre Investimentos</SelectItem>
                        <SelectItem value="conta">Conta Digital</SelectItem>
                        <SelectItem value="emprestimos">Empréstimos</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea id="message" placeholder="Digite sua mensagem aqui..." rows={5} />
                  </div>
                  <div className="space-y-2">
                    <Label>Como prefere ser contatado?</Label>
                    <RadioGroup defaultValue="email" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">Telefone</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                        <Label htmlFor="contact-whatsapp">WhatsApp</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Enviar Mensagem</Button>
                </CardFooter>
              </Card>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Canais de Atendimento</CardTitle>
                  <CardDescription>Escolha a melhor forma de entrar em contato conosco.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Central de Atendimento</h3>
                      <p className="text-sm text-muted-foreground">0800 123 4567</p>
                      <p className="text-sm text-muted-foreground">Segunda a sexta, das 8h às 20h</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Chat no App</h3>
                      <p className="text-sm text-muted-foreground">Atendimento 24h, todos os dias</p>
                      <p className="text-sm text-muted-foreground">Disponível para clientes Machine Invest</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-muted-foreground">contato@machineinvest.com.br</p>
                      <p className="text-sm text-muted-foreground">Resposta em até 24h úteis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Perguntas Frequentes</CardTitle>
                  <CardDescription>Encontre respostas rápidas para as dúvidas mais comuns.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="font-medium">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                  <div className="pt-2">
                    <Link href="/faq" className="inline-flex items-center text-primary hover:underline">
                      Ver todas as perguntas frequentes <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-center">Nossos Escritórios</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {offices.map((office, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={office.image || "/placeholder.svg"}
                      alt={`Escritório ${office.city}`}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{office.address}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{office.phone}</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <p className="text-sm">{office.email}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`https://maps.google.com/?q=${office.address}, ${office.city}`} target="_blank">
                        Ver no Mapa <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/#download">
                Baixar App para Suporte Direto <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

