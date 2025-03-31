import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DepoimentosPage() {
  const testimonials = [
    {
      content:
        "A Machine Invest revolucionou minha forma de investir. As simulações são precisas e me ajudaram a tomar decisões mais inteligentes. Em apenas 6 meses, consegui aumentar meu patrimônio em 15%. O suporte ao cliente é excepcional, sempre respondendo minhas dúvidas com rapidez e clareza.",
      author: "Carlos Silva",
      role: "Investidor há 5 anos",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Engenheiro de Software",
      rating: 5,
      category: "investimentos",
    },
    {
      content:
        "Nunca foi tão fácil acompanhar meus investimentos em criptomoedas. A interface é intuitiva e as análises são completas. O suporte ao cliente é excepcional, sempre respondendo minhas dúvidas rapidamente. A ferramenta de comparação entre diferentes criptomoedas me ajuda a tomar decisões mais informadas.",
      author: "Ana Oliveira",
      role: "Trader de criptomoedas",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Analista de Dados",
      rating: 5,
      category: "criptomoedas",
    },
    {
      content:
        "O aplicativo da Machine Invest é simplesmente incrível. Consigo simular diferentes cenários e tomar decisões com mais segurança. A ferramenta de comparação com bancos tradicionais me mostrou quanto eu estava perdendo em taxas. Agora tenho muito mais controle sobre meus investimentos.",
      author: "Roberto Santos",
      role: "Empresário",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "CEO da TechSolutions",
      rating: 5,
      category: "aplicativo",
    },
    {
      content:
        "Comecei a investir há apenas 3 meses e já estou vendo resultados. A educação financeira disponibilizada pela Machine Invest foi fundamental para eu entender o mercado e fazer escolhas acertadas. Os tutoriais e artigos do blog são excelentes para iniciantes como eu.",
      author: "Juliana Costa",
      role: "Investidora iniciante",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Médica",
      rating: 4,
      category: "educacao",
    },
    {
      content:
        "A diversificação de carteira sugerida pela Machine Invest me ajudou a reduzir riscos e aumentar retornos. O dashboard personalizado me permite acompanhar tudo em um só lugar, de forma clara e objetiva. A plataforma é completa e atende todas as minhas necessidades como investidor experiente.",
      author: "Fernando Mendes",
      role: "Investidor experiente",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Professor Universitário",
      rating: 5,
      category: "investimentos",
    },
    {
      content:
        "Migrei todos os meus investimentos para a Machine Invest após comparar as taxas e rendimentos. A diferença é impressionante! Em um ano, economizei mais de R$ 3.000 só em taxas administrativas. Além disso, a rentabilidade dos investimentos sugeridos pela plataforma superou minhas expectativas.",
      author: "Patrícia Almeida",
      role: "Contadora",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Consultora Financeira",
      rating: 5,
      category: "investimentos",
    },
    {
      content:
        "A conta digital da Machine Invest é excelente! Sem taxas de manutenção e com rendimento automático do saldo. O cartão de crédito sem anuidade e com cashback em criptomoedas é um diferencial que não encontrei em nenhum outro banco digital.",
      author: "Marcelo Souza",
      role: "Cliente há 1 ano",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Designer Gráfico",
      rating: 5,
      category: "servicos",
    },
    {
      content:
        "O processo de obtenção de empréstimo foi rápido e sem burocracia. A taxa de juros oferecida foi muito menor que a dos bancos tradicionais. Consegui financiar a reforma da minha casa com condições excelentes. Recomendo a todos!",
      author: "Luciana Ferreira",
      role: "Cliente de empréstimo",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Professora",
      rating: 5,
      category: "servicos",
    },
    {
      content:
        "A Machine Invest transformou minha relação com criptomoedas. Antes eu tinha medo de investir nesse mercado, mas com as análises detalhadas e o acompanhamento em tempo real, me sinto seguro para diversificar minha carteira incluindo ativos digitais.",
      author: "Ricardo Oliveira",
      role: "Investidor em criptomoedas",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Advogado",
      rating: 4,
      category: "criptomoedas",
    },
    {
      content:
        "O aplicativo é muito intuitivo e fácil de usar. Consigo fazer tudo pelo celular, desde investimentos até pagamentos do dia a dia. A função de análise de gastos me ajudou a organizar melhor minhas finanças pessoais.",
      author: "Camila Santos",
      role: "Usuária do aplicativo",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Arquiteta",
      rating: 5,
      category: "aplicativo",
    },
    {
      content:
        "Os conteúdos educacionais da Machine Invest são excelentes. Aprendi muito sobre investimentos através dos webinars e artigos disponibilizados gratuitamente. É uma plataforma que se preocupa em educar seus usuários, não apenas vender produtos.",
      author: "Paulo Mendes",
      role: "Estudante de Economia",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Universidade Federal",
      rating: 5,
      category: "educacao",
    },
    {
      content:
        "A segurança da plataforma é impressionante. Com autenticação de dois fatores e notificações de login, me sinto tranquilo em relação aos meus investimentos. Além disso, o suporte técnico é rápido e eficiente quando preciso de ajuda.",
      author: "Renata Lima",
      role: "Especialista em TI",
      avatar: "/placeholder.svg?height=60&width=60",
      company: "Consultora de Segurança Digital",
      rating: 5,
      category: "seguranca",
    },
  ]

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Depoimentos de Clientes"
          description="Conheça as experiências reais de quem já utiliza a Machine Invest."
          centered
        />

        <div className="mt-16">
          <Tabs defaultValue="todos" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 sm:grid-cols-6 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="investimentos">Investimentos</TabsTrigger>
              <TabsTrigger value="criptomoedas">Criptomoedas</TabsTrigger>
              <TabsTrigger value="servicos">Serviços</TabsTrigger>
              <TabsTrigger value="aplicativo">Aplicativo</TabsTrigger>
              <TabsTrigger value="educacao">Educação</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="h-full relative">
                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2">
                      <Quote className="h-5 w-5" />
                    </div>
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <p className="text-lg">{testimonial.content}</p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback>
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {["investimentos", "criptomoedas", "servicos", "aplicativo", "educacao"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {testimonials
                    .filter((t) => t.category === category)
                    .map((testimonial, index) => (
                      <Card key={index} className="h-full relative">
                        <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-2">
                          <Quote className="h-5 w-5" />
                        </div>
                        <CardContent className="pt-6">
                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
                              />
                            ))}
                          </div>
                          <p className="text-lg">{testimonial.content}</p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                              <AvatarFallback>
                                {testimonial.author
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{testimonial.author}</p>
                              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                            </div>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                </div>

                {testimonials.filter((t) => t.category === category).length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">Nenhum depoimento encontrado para esta categoria.</p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Section>
    </PageLayout>
  )
}

