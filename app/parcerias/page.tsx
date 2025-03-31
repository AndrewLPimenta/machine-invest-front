import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Users, Building, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function ParceriasPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Parcerias"
          description="Cresça conosco e ofereça soluções financeiras inovadoras aos seus clientes."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Seja nosso parceiro</h2>
            <p className="text-lg text-muted-foreground">
              A Machine Invest oferece programas de parceria para empresas e profissionais que desejam expandir seus
              negócios com soluções financeiras inovadoras e tecnologia de ponta.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Comissões atrativas</h3>
                  <p className="text-sm text-muted-foreground">Ganhos recorrentes e bonificações por performance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Suporte dedicado</h3>
                  <p className="text-sm text-muted-foreground">Equipe especializada para auxiliar em todas as etapas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 p-1">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Tecnologia de ponta</h3>
                  <p className="text-sm text-muted-foreground">Plataforma intuitiva e APIs para integração</p>
                </div>
              </div>
            </div>
            <Button className="w-fit">Tornar-se parceiro</Button>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Parcerias Machine Invest"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Programas de Parceria</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Programa de Afiliados</CardTitle>
                <CardDescription>Para influenciadores e criadores de conteúdo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Ideal para influenciadores digitais, criadores de conteúdo e profissionais com audiência interessada
                  em investimentos e finanças. Ganhe comissões por cada cliente indicado.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comissões por indicação</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Links e códigos personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Dashboard de acompanhamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Materiais de marketing</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Seja um afiliado</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Building className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Parceiros Corporativos</CardTitle>
                <CardDescription>Para empresas e instituições</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Programa voltado para empresas que desejam oferecer soluções financeiras aos seus clientes ou
                  colaboradores. Integre nossos produtos à sua oferta de serviços.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">White label e co-branding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">APIs para integração</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Condições especiais para clientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Gerente de contas dedicado</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Seja um parceiro corporativo</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="mb-4 rounded-full bg-primary/10 p-3 w-fit">
                  <Handshake className="h-10 w-10 text-primary" />
                </div>
                <CardTitle>Consultores Financeiros</CardTitle>
                <CardDescription>Para profissionais do mercado financeiro</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Programa exclusivo para consultores financeiros, planejadores e assessores de investimentos que
                  desejam oferecer soluções diferenciadas aos seus clientes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Comissões recorrentes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Plataforma de gestão de clientes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Treinamentos exclusivos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">Suporte técnico prioritário</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Seja um consultor parceiro</Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Nossos Parceiros</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div key={i} className="flex items-center justify-center p-4">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Partner ${i}`}
                  alt={`Parceiro ${i}`}
                  width={120}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Card>
            <CardHeader>
              <CardTitle>Depoimentos de Parceiros</CardTitle>
              <CardDescription>O que nossos parceiros dizem sobre trabalhar conosco</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic text-muted-foreground mb-4">
                      "A parceria com a Machine Invest transformou nossa oferta de serviços financeiros. A plataforma é
                      intuitiva, o suporte é excelente e nossos clientes estão extremamente satisfeitos."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gray-200 w-12 h-12 overflow-hidden">
                        <Image src="/placeholder.svg?height=48&width=48" alt="Avatar" width={48} height={48} />
                      </div>
                      <div>
                        <p className="font-medium">Ana Silva</p>
                        <p className="text-sm text-muted-foreground">CEO, Finanças Digitais</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <p className="italic text-muted-foreground mb-4">
                      "Como consultor financeiro, a parceria com a Machine Invest me permitiu oferecer soluções
                      inovadoras aos meus clientes. As comissões são atrativas e o suporte é de primeira linha."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-gray-200 w-12 h-12 overflow-hidden">
                        <Image src="/placeholder.svg?height=48&width=48" alt="Avatar" width={48} height={48} />
                      </div>
                      <div>
                        <p className="font-medium">Carlos Mendes</p>
                        <p className="text-sm text-muted-foreground">Consultor Financeiro Independente</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24">
          <Card>
            <CardHeader>
              <CardTitle>Entre em contato</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para saber mais sobre nossos programas de parceria
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <input type="text" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Empresa</label>
                    <input type="text" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium">E-mail</label>
                    <input type="email" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Telefone</label>
                    <input type="tel" className="w-full mt-1 p-2 border rounded-md" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Programa de interesse</label>
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>Programa de Afiliados</option>
                    <option>Parceiros Corporativos</option>
                    <option>Consultores Financeiros</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">Mensagem</label>
                  <textarea className="w-full mt-1 p-2 border rounded-md h-32"></textarea>
                </div>
                <Button>Enviar</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </PageLayout>
  )
}

