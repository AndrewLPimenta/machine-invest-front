"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownToLine, ArrowRight, Award, Building, Clock, Heart, LightbulbIcon, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ResponsiveGrid } from "@/components/responsive-grid"

export default function SobrePage() {
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

  const timeline = [
    {
      year: "2018",
      title: "Fundação",
      description:
        "A Machine Invest foi fundada por um grupo de especialistas em tecnologia e finanças com o objetivo de democratizar o acesso a investimentos.",
    },
    {
      year: "2019",
      title: "Primeira Rodada de Investimentos",
      description: "Captação de R$ 5 milhões em rodada seed para desenvolvimento da plataforma inicial.",
    },
    {
      year: "2020",
      title: "Lançamento do App Beta",
      description: "Lançamento da versão beta do aplicativo com foco em simulações de investimentos.",
    },
    {
      year: "2021",
      title: "Expansão para Criptomoedas",
      description: "Integração de criptomoedas à plataforma e crescimento de 300% na base de usuários.",
    },
    {
      year: "2022",
      title: "Série A",
      description: "Captação de R$ 50 milhões em rodada Série A liderada por grandes fundos de venture capital.",
    },
    {
      year: "2023",
      title: "Lançamento de Produtos Bancários",
      description: "Expansão para serviços bancários completos, incluindo conta digital e empréstimos.",
    },
    {
      year: "2024",
      title: "1 Milhão de Usuários",
      description: "Marco de 1 milhão de usuários ativos e expansão para outros países da América Latina.",
    },
    {
      year: "2025",
      title: "Presente e Futuro",
      description:
        "Consolidação como uma das principais fintechs do Brasil, com foco em inovação contínua e experiência do usuário.",
    },
  ]

  const team = [
    {
      name: "Andrew Pimenta",
      role: "CEO & Co-fundador",
      bio: "Front-End",
      image: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/461058361_3827116340842688_8151525124417538585_n.jpg?ccb=11-4&oh=01_Q5Aa1wE_fO51xb7CloE2CrUoeinw01dfgugg5ARM7fRua27zsg&oe=6855AC0A&_nc_sid=5e03e0&_nc_cat=100",
    },
    {
      name: "Gabriel Amiti",
      role: "COO",
      bio: "Design",
      image: "https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/484572383_1414192096602040_6788945405665217376_n.jpg?ccb=11-4&oh=01_Q5Aa1wEm6emi8VRryRi6uZgTdjOpTdEvR3V43NBNWKea-NAi2g&oe=6855A42D&_nc_sid=5e03e0&_nc_cat=104",
    },
    {
      name: "Alisson Alves",
      role: "CFO",
      bio: "Design",
      image: "/alisson-foto.jpeg",
    },
    {
      name: "Kevvyn Alves",
      role: "CTO & Co-fundador",
      bio: "Front-End",
      image: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/473403593_494791260093113_6306886407737024776_n.jpg?ccb=11-4&oh=01_Q5Aa1wGEuB6em-r12eG11hRdawWXMCEKITTi0s_A92QrBGiScA&oe=68561049&_nc_sid=5e03e0&_nc_cat=103",
    },
    {
      name: "Pedro Teixeira",
      role: "CTO & Co-fundador",
      bio: "Front-End",
      image: "https://media-gig4-1.cdn.whatsapp.net/v/t61.24694-24/491840962_4199937216995980_1706799340449286598_n.jpg?ccb=11-4&oh=01_Q5Aa1wGDbnp8S2yEx8ylN2Ph4HYlezHdO_t__wSzc8ZIR1jPfA&oe=68561264&_nc_sid=5e03e0&_nc_cat=106",
    },
  ]

  const values = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Inovação Constante",
      description:
        "Buscamos sempre as soluções mais inovadoras para transformar a experiência financeira dos nossos clientes.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Cliente no Centro",
      description: "Todas as nossas decisões são tomadas pensando na melhor experiência para nossos usuários.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Excelência",
      description:
        "Buscamos a excelência em tudo o que fazemos, desde o desenvolvimento de produtos até o atendimento ao cliente.",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Impacto Social",
      description:
        "Acreditamos que a educação financeira e o acesso a investimentos podem transformar vidas e comunidades.",
    },
    {
      icon: <LightbulbIcon className="h-10 w-10 text-primary" />,
      title: "Transparência",
      description: "Somos transparentes em nossas operações, taxas e comunicação com clientes e parceiros.",
    },
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Sustentabilidade",
      description: "Promovemos práticas sustentáveis em nossas operações e incentivamos investimentos ESG.",
    },
  ]

  const awards = [
    {
      year: "2024",
      title: "Melhor Fintech do Ano",
      organization: "Prêmio Fintech Brasil",
      image: "https://img.freepik.com/fotos-premium/um-trofeu-com-as-palavras-trofeu_997657-32122.jpg",
    },
    {
      year: "2023",
      title: "Aplicativo Financeiro Mais Inovador",
      organization: "Tech Innovation Awards",
      image: "https://www.proteste.org.br/-/media/proteste/images/home/eletronicos/celular/apps-inovadores.jpg?rev=66007ff6-e213-430e-ba14-19be4b541744&hash=D10E0AD3B02211E4D6E8F3A961263291",
    },
    {
      year: "2023",
      title: "Top 10 Startups para Ficar de Olho",
      organization: "Forbes Brasil",
      image: "https://www.totvs.com/wp-content/uploads/2024/09/startups-exemplos.jpg",
    },
    {
      year: "2022",
      title: "Melhor Experiência do Usuário",
      organization: "UX Design Awards",
      image: "https://faiston.com/wp-content/uploads/2024/01/Artigos-Faiston-JAN-UX-724x407.jpg",
    },
  ]

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Sobre a Machine Invest"
          description="Conheça nossa história, cultura e a equipe por trás da revolução nos investimentos digitais."
          centered
          highlightedWord="Machine Invest"
        />

        <div className="mt-16">
          <Tabs defaultValue="historia" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 sm:grid-cols-4 mb-8">
              <TabsTrigger value="historia">História</TabsTrigger>
              <TabsTrigger value="cultura">Cultura</TabsTrigger>
              <TabsTrigger value="equipe">Equipe</TabsTrigger>
              <TabsTrigger value="premios">Prêmios</TabsTrigger>
            </TabsList>

            <TabsContent value="historia" className="space-y-8">
              <motion.div
                className="grid gap-8 lg:grid-cols-2"
                variants={container}
                initial="hidden"
                animate="show"
                ref={ref}
              >
                <motion.div variants={item}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Nossa Jornada</h2>
                    <p className="text-muted-foreground">
                      A Machine Invest nasceu da visão de um grupo de especialistas em tecnologia e finanças que
                      acreditavam que o mercado financeiro poderia ser mais acessível, transparente e eficiente.
                    </p>
                    <p className="text-muted-foreground">
                      Fundada em 2018, nossa missão sempre foi democratizar o acesso a investimentos e educação
                      financeira, utilizando tecnologia de ponta para simplificar processos complexos e oferecer uma
                      experiência excepcional aos usuários.
                    </p>
                    <p className="text-muted-foreground">
                      Ao longo dos anos, evoluímos de uma simples plataforma de simulação de investimentos para um
                      ecossistema financeiro completo, sempre mantendo nosso compromisso com a inovação e a satisfação
                      do cliente.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold">Nossos Números</h3>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-3xl font-bold text-primary">1M+</p>
                          <p className="text-sm text-muted-foreground">Usuários Ativos</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-3xl font-bold text-primary">R$5B+</p>
                          <p className="text-sm text-muted-foreground">Ativos sob Gestão</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-3xl font-bold text-primary">250+</p>
                          <p className="text-sm text-muted-foreground">Colaboradores</p>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-3xl font-bold text-primary">5</p>
                          <p className="text-sm text-muted-foreground">Países</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={item}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Nossa Linha do Tempo</h3>
                    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent">
                      {timeline.map((item, index) => (
                        <div key={index} className="relative flex items-start">
                          <div className="absolute left-0 mt-1.5 h-10 w-10 rounded-full border bg-background flex items-center justify-center">
                            <Clock className="h-5 w-5 text-primary" />
                          </div>
                          <div className="ml-14">
                            <div className="font-bold text-primary">{item.year}</div>
                            <div className="font-semibold">{item.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="cultura" className="space-y-8">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Nossa Cultura</h2>
                    <p className="text-muted-foreground">
                      Na Machine Invest, acreditamos que a cultura organizacional é o coração de tudo o que fazemos.
                      Nossos valores não são apenas palavras em uma parede, mas princípios que guiam nossas decisões
                      diárias e moldam nossa identidade como empresa.
                    </p>
                    <p className="text-muted-foreground">
                      Promovemos um ambiente de trabalho colaborativo, diverso e inclusivo, onde cada membro da equipe é
                      incentivado a contribuir com ideias inovadoras e a desafiar o status quo. Acreditamos que as
                      melhores soluções surgem quando diferentes perspectivas se encontram.
                    </p>
                    <p className="text-muted-foreground">
                      Nossa abordagem de "aprendizado contínuo" incentiva todos os colaboradores a expandir
                      constantemente seus conhecimentos e habilidades, seja através de programas internos de
                      desenvolvimento, participação em conferências ou cursos especializados.
                    </p>
                  </div>
                  <div className="mt-8 relative overflow-hidden rounded-lg">
                    <Image
                      src="https://www.ceara.gov.br/wp-content/uploads/2022/11/unnamed-3-4.jpg"
                      alt="Cultura Machine Invest"
                      width={600}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                      <p className="text-lg font-medium">Nosso time em um dos nossos eventos de integração</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={item}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Nossos Valores</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {values.map((value, index) => (
                        <Card key={index} className="overflow-hidden">
                          <CardHeader className="pb-2">
                            <div className="mb-2 rounded-full bg-primary/10 p-2 w-fit">{value.icon}</div>
                            <CardTitle>{value.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">{value.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Responsabilidade Social</h3>
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <p className="text-muted-foreground">
                            Acreditamos que empresas de sucesso têm a responsabilidade de contribuir positivamente para
                            a sociedade. Por isso, desenvolvemos diversas iniciativas:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>
                                <span className="font-medium">Programa de Educação Financeira:</span> Workshops
                                gratuitos em escolas públicas e comunidades carentes.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>
                                <span className="font-medium">Fundo Machine Social:</span> 1% de nosso lucro é destinado
                                a projetos sociais escolhidos por nossos usuários.
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>
                                <span className="font-medium">Carbono Neutro:</span> Compensamos 100% de nossa pegada de
                                carbono através de projetos de reflorestamento.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="equipe" className="space-y-8">
              <motion.div className="space-y-8" variants={container} initial="hidden" animate="show">
                <motion.div variants={item} className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold">Conheça Nosso Time</h2>
                  <p className="mt-4 text-muted-foreground">
                    Nossa equipe é formada por especialistas apaixonados por tecnologia e finanças, unidos pela missão
                    de transformar a relação das pessoas com o dinheiro. Conheça os líderes que estão à frente da
                    Machine Invest.
                  </p>
                </motion.div>
                <motion.div variants={item}>
                  <ResponsiveGrid cols={{ default: 1, sm: 2, lg: 4 }}>
                    {team.map((member, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={300}
                            height={300}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle>{member.name}</CardTitle>
                          <CardDescription>{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{member.bio}</p>
                        </CardContent>
                        <CardFooter>
                          <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
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
                                className="lucide lucide-linkedin"
                              >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                              </svg>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
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
                                className="lucide lucide-twitter"
                              >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                              </svg>
                            </Link>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </ResponsiveGrid>
                </motion.div>
                <motion.div variants={item} className="text-center">
                  <Link href="/carreiras" className="inline-flex items-center text-primary hover:underline">
                    Ver todas as vagas disponíveis <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="premios" className="space-y-8">
              <motion.div className="grid gap-8 lg:grid-cols-2" variants={container} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Reconhecimentos</h2>
                    <p className="text-muted-foreground">
                      Ao longo de nossa jornada, temos sido reconhecidos por nossa inovação, excelência e impacto no
                      mercado financeiro. Esses reconhecimentos são um testemunho do trabalho árduo e dedicação de toda
                      a nossa equipe.
                    </p>
                    <p className="text-muted-foreground">
                      Mais do que troféus em nossa estante, esses prêmios representam a confiança que nossos usuários,
                      parceiros e o mercado depositam em nós, e nos motivam a continuar inovando e aprimorando nossos
                      serviços.
                    </p>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4">Prêmios e Reconhecimentos</h3>
                    <div className="space-y-4">
                      {awards.map((award, index) => (
                        <Card key={index}>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="flex-shrink-0">
                                <Image
                                  src={award.image || "/placeholder.svg"}
                                  alt={award.title}
                                  width={60}
                                  height={60}
                                  className="rounded-full"
                                />
                              </div>
                              <div>
                                <h4 className="font-bold">{award.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {award.organization} • {award.year}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={item}>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Na Mídia</h3>
                    <div className="space-y-4">
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Image
                                src="https://c7fc8402.delivery.rocketcdn.me/wp-content/uploads/2023/12/mercado-digital.jpg"
                                alt="Forbes"
                                width={60}
                                height={60}
                                className="rounded"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold">
                                "Machine Invest revoluciona o mercado de investimentos com tecnologia de ponta"
                              </h4>
                              <p className="text-sm text-muted-foreground">Forbes Brasil • Março 2024</p>
                              <Link
                                href="#"
                                className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                              >
                                Ler matéria completa <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Image
                                src="https://media.licdn.com/dms/image/v2/D4D12AQGN_yg9yFl4Vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1688336062432?e=2147483647&v=beta&t=5oGyiRGuT2RwWjNz4jtlkqt0bh1IVf_AJLiSvrWh0lA"
                                alt="Exame"
                                width={60}
                                height={60}
                                className="rounded"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold">
                                "Como a Machine Invest está democratizando o acesso a investimentos no Brasil"
                              </h4>
                              <p className="text-sm text-muted-foreground">Exame • Janeiro 2024</p>
                              <Link
                                href="#"
                                className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                              >
                                Ler matéria completa <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <Image
                                src="https://admin.ecommercebrasil.com.br/wp-content/uploads/2023/03/51-marketing-internacional.jpg.webp"
                                alt="Valor Econômico"
                                width={60}
                                height={60}
                                className="rounded"
                              />
                            </div>
                            <div>
                              <h4 className="font-bold">
                                "Machine Invest  atinge marca de 1 milhão de usuários e prepara expansão internacional"
                              </h4>
                              <p className="text-sm text-muted-foreground">Valor Econômico • Novembro 2023</p>
                              <Link
                                href="#"
                                className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                              >
                                Ler matéria completa <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                 
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link  href="/download"
                id="download">
              Baixar App para Conhecer Mais <ArrowDownToLine className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </PageLayout>
  )
}

