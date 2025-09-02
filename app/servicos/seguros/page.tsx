import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Home, Car, Briefcase, Umbrella, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link" 
import { ArrowRight } from "lucide-react"

export default function SegurosPage() {
  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Seguros"
          description="O Seguro de Vida é um gesto de amor, de cuidado e de responsabilidade.
E o melhor: não é caro e pode ser totalmente adaptado à sua realidade."
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
                    Já pensou como sua família ficaria se algo te acontecesse?
                    Um Seguro de Vida não é só sobre você — é sobre quem fica. É garantir que, mesmo ausente, você continue protegendo quem ama.
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
                  <Link href="/login">
                  <Button className="w-fit">Receber Dicas
                  <ArrowRight className="mr-2 h-4 w-4" /></Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://www.mobills.com.br/blog/wp-content/uploads/2024/05/imagem-destaque-melhor-seguro-de-vida-mobills-1.jpg"
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
                  <Link href="/login">
                  <Button className="w-fit">Receber Dicas</Button>
                  </Link>
                </div>




                <div className="flex items-center justify-center">
                  <Image
                    src="https://www.tecsegcorretora.com.br/painel/img_noticias/b67a9088b1f29ecd6f5ec6253363b148.jpg"
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
                  <Button className="w-fit">Receber Dicas</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://www.seguroauto.org/wp-content/uploads/2019/06/seguro-auto-75.jpg"
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
                  <Button className="w-fit">Receber Dicas</Button>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="https://viajarpraonde.com.br/wp-content/uploads/2023/03/TESTE-FAIXA-1000-%C3%97-1000-px-1000-%C3%97-500-px-1000-%C3%97-1000-px-1000-%C3%97-600-px-1000-%C3%97-1000-px-1000-%C3%97-600-px-1000-%C3%97-700-px-1000-%C3%97-700-px-4-5.jpg"
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
                  Cada pessoa tem uma necessidade diferente.
                  Tenha proteção personalizada para o que realmente importa pra você — com opções flexíveis e cobertura em qualquer imprevisto.
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
                  Mesmo com um valor pequeno por mês, é possível garantir tranquilidade para o futuro da sua família.
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
                  Por isso, queremos ajudar você a refletir sobre a importância de estar preparado para garantir suporte e tranquilidade para quem você ama.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

