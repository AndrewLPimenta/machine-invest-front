import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Code, TrendingUp, Users, Heart, Coffee } from "lucide-react"
import Image from "next/image"

export default function CarreirasPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Carreiras"
          description="Junte-se à nossa equipe e faça parte da revolução financeira."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Trabalhe na Machine Invest</h2>
            <p className="text-lg text-muted-foreground">
              Estamos construindo o futuro dos investimentos e serviços financeiros. Procuramos pessoas talentosas e
              apaixonadas para nos ajudar nessa jornada.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Crescimento acelerado</h3>
                  <p className="text-sm text-muted-foreground">Oportunidades de desenvolvimento rápido</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Cultura inclusiva</h3>
                  <p className="text-sm text-muted-foreground">Valorizamos a diversidade e o bem-estar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Benefícios diferenciados</h3>
                  <p className="text-sm text-muted-foreground">Cuidamos de quem cuida do nosso negócio</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Ver vagas abertas</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Equipe Machine Invest"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Áreas de Atuação</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Code className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Tecnologia</CardTitle>
                <CardDescription>Desenvolvimento e infraestrutura</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe de tecnologia trabalha com as mais recentes ferramentas e metodologias para criar
                  produtos inovadores e escaláveis. Buscamos profissionais apaixonados por desafios técnicos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Produtos Financeiros</CardTitle>
                <CardDescription>Investimentos e serviços</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Desenvolvemos e gerenciamos produtos financeiros inovadores, desde investimentos tradicionais até
                  criptomoedas e soluções de crédito. Procuramos especialistas em finanças e mercado de capitais.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Marketing e Vendas</CardTitle>
                <CardDescription>Crescimento e aquisição</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe de marketing e vendas é responsável por levar nossos produtos ao mercado e construir
                  relacionamentos duradouros com os clientes. Buscamos profissionais criativos e orientados a
                  resultados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Vagas em Destaque</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Desenvolvedor Full Stack Senior</CardTitle>
                    <CardDescription>Tecnologia • Remoto • CLT</CardDescription>
                  </div>
                  <Button>Candidatar-se</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Estamos procurando um Desenvolvedor Full Stack Senior para se juntar à nossa equipe de tecnologia.
                  Você trabalhará no desenvolvimento de novas funcionalidades e na manutenção das nossas plataformas.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Requisitos:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Experiência com React, Node.js e TypeScript</li>
                    <li>Conhecimento em bancos de dados SQL e NoSQL</li>
                    <li>Experiência com arquitetura de microsserviços</li>
                    <li>Conhecimento em DevOps e CI/CD</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Analista de Investimentos</CardTitle>
                    <CardDescription>Produtos Financeiros • São Paulo • CLT</CardDescription>
                  </div>
                  <Button>Candidatar-se</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Buscamos um Analista de Investimentos para nossa equipe de produtos financeiros. Você será responsável
                  por analisar oportunidades de investimento e desenvolver recomendações para nossos clientes.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Requisitos:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Formação em Economia, Administração ou áreas relacionadas</li>
                    <li>Certificação CFA ou em andamento</li>
                    <li>Experiência com análise de ativos de renda variável</li>
                    <li>Conhecimento do mercado de criptomoedas é um diferencial</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Especialista em Marketing Digital</CardTitle>
                    <CardDescription>Marketing • Híbrido • CLT</CardDescription>
                  </div>
                  <Button>Candidatar-se</Button>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Procuramos um Especialista em Marketing Digital para liderar nossas campanhas online. Você será
                  responsável por desenvolver e implementar estratégias para aquisição de clientes.
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium">Requisitos:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    <li>Experiência com campanhas de performance e SEO</li>
                    <li>Conhecimento em ferramentas de análise e automação de marketing</li>
                    <li>Experiência com gestão de mídias sociais</li>
                    <li>Conhecimento do mercado financeiro é um diferencial</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">Ver todas as vagas</Button>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Benefícios</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Plano de carreira</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Desenvolvimento profissional estruturado com avaliações periódicas e oportunidades de crescimento.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Saúde e bem-estar</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Plano de saúde e odontológico, academia, apoio psicológico e programas de bem-estar.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <Coffee className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Ambiente flexível</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Horário flexível, trabalho remoto ou híbrido e ambiente descontraído e colaborativo.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Participação nos resultados</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  Programa de participação nos lucros e resultados e stock options para colaboradores.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

