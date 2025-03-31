import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ExternalLink, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ImprensaPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Sala de Imprensa"
          description="Informações, notícias e recursos para jornalistas e veículos de comunicação."
          centered
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Machine Invest na Mídia</h2>
            <p className="text-lg text-muted-foreground">
              Bem-vindo à nossa sala de imprensa. Aqui você encontra os recursos necessários para cobrir a Machine
              Invest, incluindo comunicados à imprensa, kit de mídia e contatos para entrevistas.
            </p>
            <div className="space-y-4">
              <Button className="w-fit" asChild>
                <Link href="#contato">
                  <Mail className="mr-2 h-4 w-4" />
                  Contato de imprensa
                </Link>
              </Button>
              <Button variant="outline" className="w-fit" asChild>
                <Link href="#kit">
                  <Download className="mr-2 h-4 w-4" />
                  Download do kit de mídia
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Machine Invest na Mídia"
              width={500}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        <div className="mt-24" id="releases">
          <h2 className="mb-12 text-center text-3xl font-bold">Comunicados à Imprensa</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Machine Invest lança nova plataforma de simulação de investimentos</CardTitle>
                <CardDescription>15 de março de 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Machine Invest, fintech especializada em investimentos e serviços financeiros, anunciou hoje o
                  lançamento de sua nova plataforma de simulação de investimentos, que permite aos usuários comparar
                  diferentes estratégias e visualizar projeções de retorno.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-fit" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Ler comunicado completo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Invest atinge marca de 500 mil usuários</CardTitle>
                <CardDescription>28 de fevereiro de 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Machine Invest anunciou hoje que atingiu a marca de 500 mil usuários em sua plataforma, um
                  crescimento de 150% em relação ao ano anterior. A empresa atribui esse crescimento à expansão de seu
                  portfólio de produtos e à melhoria contínua da experiência do usuário.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-fit" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Ler comunicado completo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Machine Invest recebe aporte de R$ 50 milhões em rodada Series B</CardTitle>
                <CardDescription>10 de janeiro de 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Machine Invest anunciou hoje a conclusão de uma rodada de investimento Series B de R$ 50 milhões,
                  liderada pela XYZ Ventures com participação de investidores existentes. Os recursos serão utilizados
                  para expandir a equipe, desenvolver novos produtos e acelerar o crescimento da empresa no Brasil e na
                  América Latina.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-fit" asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    Ler comunicado completo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <Button variant="outline">Ver todos os comunicados</Button>
          </div>
        </div>

        <div className="mt-24" id="midia">
          <h2 className="mb-12 text-center text-3xl font-bold">Machine Invest na Mídia</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Notícia na Mídia"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg">Machine Invest é destaque em inovação financeira</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">
                  Revista Finanças & Tecnologia • 05 de março de 2025
                </p>
                <p className="text-muted-foreground">
                  A Machine Invest foi destacada como uma das empresas mais inovadoras do setor financeiro, com sua
                  plataforma de simulação de investimentos e serviços de criptomoedas.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-fit" asChild>
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ler matéria
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Notícia na Mídia"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg">
                  CEO da Machine Invest fala sobre o futuro das criptomoedas
                </CardTitle>
                <p className="text-muted-foreground text-sm mb-4">Portal Economia Digital • 20 de fevereiro de 2025</p>
                <p className="text-muted-foreground">
                  Em entrevista exclusiva, o CEO da Machine Invest discute o futuro das criptomoedas e como a empresa
                  está se posicionando nesse mercado em constante evolução.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-fit" asChild>
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ler matéria
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Notícia na Mídia"
                  width={400}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="mb-2 text-lg">Machine Invest entre as 10 fintechs mais promissoras</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">Jornal do Investidor • 15 de janeiro de 2025</p>
                <p className="text-muted-foreground">
                  A Machine Invest foi incluída na lista das 10 fintechs mais promissoras de 2025, destacando-se pela
                  inovação em produtos financeiros e experiência do usuário.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-fit" asChild>
                  <Link href="#">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ler matéria
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-24" id="kit">
          <Card>
            <CardHeader>
              <CardTitle>Kit de Mídia</CardTitle>
              <CardDescription>Recursos para jornalistas e veículos de comunicação</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Nosso kit de mídia contém logotipos, fotos, informações sobre a empresa e materiais de apoio para
                facilitar a cobertura da Machine Invest. Faça o download dos recursos abaixo:
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Logotipos e Identidade Visual</h3>
                      <p className="text-sm text-muted-foreground">Arquivos em PNG, SVG e PDF</p>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Fotos Institucionais</h3>
                      <p className="text-sm text-muted-foreground">Imagens em alta resolução</p>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Perfil da Empresa</h3>
                      <p className="text-sm text-muted-foreground">Informações institucionais e dados</p>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileText className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="font-medium">Biografias dos Executivos</h3>
                      <p className="text-sm text-muted-foreground">Perfis e fotos da liderança</p>
                    </div>
                  </div>
                  <Button size="sm" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24" id="contato">
          <h2 className="mb-12 text-center text-3xl font-bold">Contato para Imprensa</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">Assessoria de Imprensa</h3>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>imprensa@machineinvest.com.br</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
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
                      <span>(11) 4002-8922</span>
                    </p>
                  </div>
                  <div className="mt-6">
                    <p className="text-muted-foreground">
                      Para solicitações de entrevistas, informações adicionais ou inclusão na nossa lista de
                      distribuição de comunicados à imprensa, entre em contato com nossa equipe de assessoria.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Envie sua mensagem</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium">Nome</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Veículo</label>
                        <input type="text" className="w-full mt-1 p-2 border rounded-md" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">E-mail</label>
                      <input type="email" className="w-full mt-1 p-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Assunto</label>
                      <input type="text" className="w-full mt-1 p-2 border rounded-md" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Mensagem</label>
                      <textarea className="w-full mt-1 p-2 border rounded-md h-32"></textarea>
                    </div>
                    <Button>Enviar mensagem</Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </PageLayout>
  )
}

