"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, Clock, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"

export default function BlogPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      title: "Como começar a investir em criptomoedas em 2025",
      excerpt:
        "Um guia completo para iniciantes que desejam entrar no mundo das criptomoedas de forma segura e inteligente.",
      image: "/placeholder.svg?height=200&width=400",
      date: "15 de março de 2025",
      readTime: "8 min de leitura",
      category: "Criptomoedas",
      slug: "como-comecar-investir-criptomoedas-2025",
    },
    {
      title: "Os melhores investimentos de renda fixa para 2025",
      excerpt:
        "Descubra quais são as melhores opções de renda fixa para diversificar sua carteira e garantir rendimentos seguros.",
      image: "/placeholder.svg?height=200&width=400",
      date: "10 de março de 2025",
      readTime: "6 min de leitura",
      category: "Renda Fixa",
      slug: "melhores-investimentos-renda-fixa-2025",
    },
    {
      title: "Inteligência Artificial e o futuro dos investimentos",
      excerpt:
        "Como a IA está transformando o mercado financeiro e quais são as oportunidades para investidores atentos às novas tecnologias.",
      image: "/placeholder.svg?height=200&width=400",
      date: "5 de março de 2025",
      readTime: "10 min de leitura",
      category: "Tecnologia",
      slug: "inteligencia-artificial-futuro-investimentos",
    },
    {
      title: "Diversificação de carteira: por que é importante?",
      excerpt:
        "Entenda por que diversificar seus investimentos é uma estratégia essencial para reduzir riscos e maximizar retornos.",
      image: "/placeholder.svg?height=200&width=400",
      date: "28 de fevereiro de 2025",
      readTime: "7 min de leitura",
      category: "Estratégias",
      slug: "diversificacao-carteira-por-que-importante",
    },
    {
      title: "Bitcoin vs. Ethereum: qual é a melhor opção para investir?",
      excerpt:
        "Uma análise comparativa entre as duas principais criptomoedas do mercado e suas perspectivas para o futuro.",
      image: "/placeholder.svg?height=200&width=400",
      date: "20 de fevereiro de 2025",
      readTime: "9 min de leitura",
      category: "Criptomoedas",
      slug: "bitcoin-vs-ethereum-melhor-opcao-investir",
    },
    {
      title: "Como planejar sua aposentadoria com investimentos inteligentes",
      excerpt:
        "Estratégias e dicas para construir um patrimônio sólido e garantir uma aposentadoria tranquila e confortável.",
      image: "/placeholder.svg?height=200&width=400",
      date: "15 de fevereiro de 2025",
      readTime: "8 min de leitura",
      category: "Planejamento",
      slug: "planejar-aposentadoria-investimentos-inteligentes",
    },
  ]

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

  const categories = [
    "Criptomoedas",
    "Renda Fixa",
    "Renda Variável",
    "Estratégias",
    "Tecnologia",
    "Planejamento",
    "Economia",
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
              Blog & <span className="text-primary">Educação Financeira</span>
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Artigos, dicas e análises para ajudar você a tomar decisões financeiras mais inteligentes.
            </p>
          </motion.div>
          <div className="mt-8 flex flex-col gap-8 md:flex-row">
            <motion.div
              className="w-full md:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              ref={ref}
            >
              <div className="relative mb-8">
                <Input type="search" placeholder="Buscar artigos..." className="pl-10" />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              </div>
              <motion.div
                className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {blogPosts.map((post, index) => (
                  <motion.div key={index} variants={item}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                          {post.category}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="line-clamp-2 text-xl">{post.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" size="sm" className="w-full" asChild>
                          <Link href={`/blog/${post.slug}`}>
                            Ler Artigo <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-8 flex justify-center">
                <Button variant="outline">Carregar Mais Artigos</Button>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Categorias</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link
                          href={`/blog/categoria/${category.toLowerCase()}`}
                          className="flex items-center justify-between text-sm hover:text-primary"
                        >
                          <span>{category}</span>
                          <span className="rounded-full bg-muted px-2 py-0.5 text-xs">
                            {Math.floor(Math.random() * 20) + 1}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Newsletter</CardTitle>
                  <CardDescription>Receba as melhores dicas de investimentos diretamente no seu email.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Input placeholder="Seu melhor email" />
                    <Button className="w-full">Inscrever-se</Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Baixe Nosso App</CardTitle>
                  <CardDescription>Tenha acesso a conteúdos exclusivos e ferramentas de simulação.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" asChild>
                    <Link href="/download">Baixar Agora</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

