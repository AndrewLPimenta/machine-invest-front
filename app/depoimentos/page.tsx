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
      "Sou estudante de Administração e sempre tive interesse em investir, mas não sabia por onde começar. Com os conteúdos educativos e as simulações da Machine Invest, finalmente consegui dar meus primeiros passos com segurança.",
    author: "Lucas Martins",
    role: "Estudante Universitário",
    avatar: "https://i.pinimg.com/736x/88/ce/bd/88cebd9a8f29b8b30c36f2d8cdb0f1a1.jpg",
    company: "Universidade Estadual",
    rating: 5,
    category: "educacao",
  },
  {
    content:
      "Sempre cuidei das finanças da minha casa, mas tinha dificuldade em organizar tudo. A Machine Invest me ajudou a visualizar meus gastos e investimentos de forma simples. Agora consigo planejar melhor o futuro da minha família.",
    author: "Maria Fernandes",
    role: "Dona de Casa",
    avatar: "https://i.pinimg.com/736x/ed/73/7c/ed737c1633f2293f02a75d4f0b7989f1.jpg",
    company: "Família Fernandes",
    rating: 5,
    category: "financas_pessoais",
  },
  {
    content:
      "Como servidor público, sempre busquei estabilidade. A Machine Invest me mostrou formas seguras de diversificar minha renda e aumentar meus ganhos sem abrir mão da segurança. Hoje tenho uma carteira equilibrada e mais tranquilidade.",
    author: "André Souza",
    role: "Servidor Público Concursado",
    avatar: "https://i.pinimg.com/736x/33/12/43/331243947bdc37dc43781e351743b65d.jpg",
    company: "Tribunal Regional",
    rating: 5,
    category: "investimentos",
  },
  {
    content:
      "Sou pai de duas crianças e sempre me preocupei com a educação delas. Com a Machine Invest, consegui planejar um fundo de longo prazo para garantir os estudos da minha família. Me sinto muito mais seguro com o futuro deles.",
    author: "Ricardo Lima",
    role: "Pai de Família",
    avatar: "https://i.pinimg.com/736x/6a/b8/4f/6ab84f6d92e58e74f19d8a3e1a5e0e07.jpg",
    company: "Setor Comercial",
    rating: 5,
    category: "planejamento_familiar",
  },
  {
    content:
      "Tenho 65 anos e nunca pensei que aprenderia sobre investimentos nessa idade. A plataforma é simples, clara e me ajudou a organizar minha aposentadoria. Agora acompanho meus rendimentos sem depender de ninguém.",
    author: "João Batista",
    role: "Aposentado",
    avatar: "https://i.pinimg.com/736x/0a/f8/3d/0af83d5f8f8f728ef8ad21e0a6a99b69.jpg",
    company: "Aposentado do INSS",
    rating: 5,
    category: "aposentadoria",
  },
  {
    content:
      "Como empresário, preciso ter tudo sob controle. A Machine Invest centraliza todos os meus investimentos em um só painel, me dando clareza e agilidade para tomar decisões rápidas. É uma ferramenta essencial no meu dia a dia.",
    author: "Marcelo Andrade",
    role: "Empresário",
    avatar: "https://i.pinimg.com/736x/6b/4d/09/6b4d09c29b6ad8a7619cb5a4c17f51b1.jpg",
    company: "Fundador da AndradeTech",
    rating: 5,
    category: "investimentos",
  }
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
              <TabsList className="flex overflow-x-auto gap-5 px-2 mb-8 max-w-full scrollbar-hide ">
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

