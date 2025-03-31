"use client"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle, Lock, Shield, ShieldAlert } from "lucide-react"
import Image from "next/image"

export default function SegurancaPage() {
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
            <SectionHeading
              title="Segurança e Proteção"
              description="Conheça as medidas que implementamos para proteger seus dados e investimentos."
              centered
            />
          </motion.div>

          <motion.div
            className="mt-12 grid gap-8 md:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Lock className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Criptografia Avançada</CardTitle>
                <CardDescription>Proteção de ponta a ponta para seus dados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos criptografia de nível bancário (AES-256) para proteger todas as suas informações pessoais e
                  financeiras, tanto em trânsito quanto em repouso.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Autenticação em Dois Fatores</CardTitle>
                <CardDescription>Camada extra de proteção para sua conta</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Recomendamos fortemente que você ative a autenticação em dois fatores (2FA) para adicionar uma camada
                  extra de segurança ao seu login e transações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <ShieldAlert className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Monitoramento Contínuo</CardTitle>
                <CardDescription>Vigilância 24/7 contra atividades suspeitas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa equipe de segurança monitora continuamente a plataforma para detectar e prevenir atividades
                  fraudulentas e tentativas de invasão.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Tabs defaultValue="protecao" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="protecao">Proteção de Dados</TabsTrigger>
                <TabsTrigger value="investimentos">Segurança dos Investimentos</TabsTrigger>
                <TabsTrigger value="dicas">Dicas de Segurança</TabsTrigger>
              </TabsList>

              <TabsContent value="protecao" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Como protegemos seus dados</h3>
                    <p className="text-muted-foreground mb-4">
                      A Machine Invest implementa as mais avançadas tecnologias e práticas de segurança para garantir
                      que seus dados pessoais e financeiros estejam sempre protegidos. Nossas medidas incluem:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Criptografia de dados em trânsito e em repouso</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Firewalls e sistemas de detecção de intrusão</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Controles rigorosos de acesso a dados</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Auditorias de segurança regulares</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Conformidade com padrões internacionais de segurança</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Segurança de dados"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Certificações e Conformidade</CardTitle>
                    <CardDescription>
                      Nosso compromisso com a segurança é validado por certificações reconhecidas internacionalmente
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-16 w-16 mb-2 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold">ISO</span>
                      </div>
                      <h4 className="font-medium">ISO 27001</h4>
                      <p className="text-sm text-muted-foreground">Certificação em Gestão de Segurança da Informação</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-16 w-16 mb-2 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold">PCI</span>
                      </div>
                      <h4 className="font-medium">PCI DSS</h4>
                      <p className="text-sm text-muted-foreground">
                        Padrão de Segurança de Dados da Indústria de Cartões de Pagamento
                      </p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-16 w-16 mb-2 bg-muted rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold">LGPD</span>
                      </div>
                      <h4 className="font-medium">LGPD Compliant</h4>
                      <p className="text-sm text-muted-foreground">
                        Em conformidade com a Lei Geral de Proteção de Dados
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="investimentos" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Proteção dos seus investimentos</h3>
                    <p className="text-muted-foreground mb-4">
                      Além de proteger seus dados, implementamos medidas robustas para garantir a segurança dos seus
                      ativos financeiros:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Armazenamento Cold Storage</h4>
                          <p className="text-sm text-muted-foreground">
                            Mantemos a maior parte das criptomoedas em carteiras offline (cold storage), inacessíveis a
                            hackers.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Fundo de Reserva</h4>
                          <p className="text-sm text-muted-foreground">
                            Mantemos um fundo de reserva para proteger os investimentos dos clientes em caso de eventos
                            adversos.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <Shield className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">Confirmações Múltiplas</h4>
                          <p className="text-sm text-muted-foreground">
                            Transações de alto valor exigem múltiplas confirmações e verificações de segurança.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Segurança de investimentos"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Parceiros de Custódia</CardTitle>
                    <CardDescription>
                      Trabalhamos com os mais respeitados parceiros de custódia para garantir a segurança dos seus
                      ativos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-4">
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-12 w-12 mb-2 bg-muted rounded-full"></div>
                      <h4 className="font-medium">BitGo</h4>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-12 w-12 mb-2 bg-muted rounded-full"></div>
                      <h4 className="font-medium">Fireblocks</h4>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-12 w-12 mb-2 bg-muted rounded-full"></div>
                      <h4 className="font-medium">Ledger Vault</h4>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 border rounded-lg">
                      <div className="h-12 w-12 mb-2 bg-muted rounded-full"></div>
                      <h4 className="font-medium">Coinbase Custody</h4>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="dicas" className="space-y-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Dicas para proteger sua conta</h3>
                    <p className="text-muted-foreground mb-4">
                      Siga estas recomendações para manter sua conta e seus investimentos seguros:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Use senhas fortes e únicas</h4>
                          <p className="text-sm text-muted-foreground">
                            Crie senhas complexas com pelo menos 12 caracteres, incluindo letras, números e símbolos.
                            Nunca reutilize senhas.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Ative a autenticação em dois fatores (2FA)</h4>
                          <p className="text-sm text-muted-foreground">
                            Esta camada adicional de segurança é essencial para proteger sua conta contra acessos não
                            autorizados.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Verifique os e-mails e links</h4>
                          <p className="text-sm text-muted-foreground">
                            Desconfie de e-mails solicitando informações pessoais. Nunca clique em links suspeitos.
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                        <div>
                          <h4 className="font-medium">Mantenha seu dispositivo seguro</h4>
                          <p className="text-sm text-muted-foreground">
                            Mantenha seu sistema operacional e antivírus atualizados. Não acesse sua conta em redes
                            Wi-Fi públicas.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Como identificar tentativas de fraude</h3>
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border border-red-200 dark:border-red-800 mb-4">
                      <h4 className="font-medium text-red-700 dark:text-red-400 flex items-center">
                        <AlertTriangle className="h-5 w-5 mr-2" />
                        Atenção a sinais de phishing
                      </h4>
                      <p className="text-sm text-red-600 dark:text-red-300 mt-1">
                        A Machine Invest nunca solicitará sua senha, chaves privadas ou códigos de autenticação por
                        e-mail, telefone ou mensagem.
                      </p>
                    </div>
                    <p className="text-muted-foreground mb-4">Fique atento a estes sinais de tentativas de fraude:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>E-mails com erros gramaticais ou de formatação</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Solicitações urgentes para atualizar informações</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>URLs suspeitos ou diferentes do oficial (machineinvest.com)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span>Ofertas de investimentos com retornos extraordinários</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Reportar Problemas de Segurança</CardTitle>
                    <CardDescription>
                      Se você identificar qualquer atividade suspeita, entre em contato imediatamente
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">E-mail de Segurança</h4>
                      <p className="text-sm text-muted-foreground">seguranca@machineinvest.com</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Telefone de Emergência</h4>
                      <p className="text-sm text-muted-foreground">0800 123 4567 (24/7)</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Programa Bug Bounty</h4>
                      <p className="text-sm text-muted-foreground">
                        Recompensas para quem identificar vulnerabilidades
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild className="mr-4">
              <Link href="/privacidade">Política de Privacidade</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contato">Fale com Nossa Equipe de Segurança</Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

