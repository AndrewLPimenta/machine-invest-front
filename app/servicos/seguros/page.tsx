import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Car, Briefcase, Umbrella, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function SegurosPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Seguros"
          description="Proteção completa para você, sua família e seu patrimônio."
          centered
        />

        <div className="mt-12">
          <Tabs defaultValue="vida" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="vida">Vida</TabsTrigger>
              <TabsTrigger value="residencial">Residencial</TabsTrigger>
              <TabsTrigger value="auto">Auto</TabsTrigger>
              <TabsTrigger value="viagem">Viagem</TabsTrigger>
            </TabsList>
            <TabsContent value="vida">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Seguro de Vida</h2>
                  <p className="text-lg text-muted-foreground">
                    Proteja o futuro da sua família com um seguro de vida completo e personalizado para suas
                    necessidades.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cobertura por morte e invalidez</h3>
                        <p className="text-sm text-muted-foreground">Proteção financeira para sua família</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Assistência funeral</h3>
                        <p className="text-sm text-muted-foreground">Suporte em momentos difíceis</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Umbrella className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Coberturas adicionais</h3>
                        <p className="text-sm text-muted-foreground">Doenças graves, diárias hospitalares e mais</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Fazer cotação</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Seguro de Vida"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="residencial">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Seguro Residencial</h2>
                  <p className="text-lg text-muted-foreground">
                    Proteja seu lar contra incêndios, roubos, danos elétricos e muito mais com nosso seguro residencial
                    completo.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Home className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cobertura para estrutura e conteúdo</h3>
                        <p className="text-sm text-muted-foreground">Proteção para sua casa e seus bens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Assistência 24h</h3>
                        <p className="text-sm text-muted-foreground">Encanador, eletricista, chaveiro e mais</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Fazer cotação</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Seguro Residencial"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="auto">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Seguro Auto</h2>
                  <p className="text-lg text-muted-foreground">
                    Proteção completa para seu veículo com as melhores coberturas e assistência 24h em todo o Brasil.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Car className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cobertura contra roubo, furto e colisão</h3>
                        <p className="text-sm text-muted-foreground">Proteção completa para seu veículo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Assistência 24h</h3>
                        <p className="text-sm text-muted-foreground">Guincho, chaveiro, troca de pneus e mais</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Fazer cotação</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Seguro Auto"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="viagem">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col justify-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">Seguro Viagem</h2>
                  <p className="text-lg text-muted-foreground">
                    Viaje com tranquilidade sabendo que está protegido contra imprevistos médicos, extravio de bagagem e
                    muito mais.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Briefcase className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Cobertura médica internacional</h3>
                        <p className="text-sm text-muted-foreground">Atendimento em qualquer parte do mundo</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Proteção para bagagem</h3>
                        <p className="text-sm text-muted-foreground">Indenização em caso de extravio</p>
                      </div>
                    </div>
                  </div>
                  <Button className="w-fit">Fazer cotação</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Seguro Viagem"
                    width={500}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-24">
          <h2 className="mb-12 text-center text-3xl font-bold">Por que escolher nossos seguros?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Coberturas completas</CardTitle>
                <CardDescription>Proteção para todas as situações</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossos seguros oferecem coberturas abrangentes para garantir que você esteja protegido em qualquer
                  situação, com opções personalizáveis para suas necessidades específicas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Umbrella className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Preços competitivos</CardTitle>
                <CardDescription>Proteção que cabe no seu bolso</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trabalhamos com as melhores seguradoras do mercado para oferecer preços competitivos sem comprometer a
                  qualidade da cobertura e do atendimento.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Atendimento humanizado</CardTitle>
                <CardDescription>Suporte quando você mais precisa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe está preparada para oferecer um atendimento humanizado e eficiente, especialmente nos
                  momentos mais difíceis, quando você realmente precisa acionar seu seguro.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

