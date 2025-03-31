"use client"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PrivacidadePage() {
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
              title="Política de Privacidade"
              description="Saiba como coletamos, usamos e protegemos seus dados pessoais."
              centered
            />
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Tabs defaultValue="resumo" className="w-full">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
                <TabsTrigger value="resumo">Resumo</TabsTrigger>
                <TabsTrigger value="completa">Política Completa</TabsTrigger>
                <TabsTrigger value="direitos">Seus Direitos</TabsTrigger>
              </TabsList>

              <TabsContent value="resumo" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo da Política de Privacidade</CardTitle>
                    <CardDescription>
                      Versão simplificada dos principais pontos da nossa política de privacidade
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <h3 className="font-medium">Dados que coletamos</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Informações de cadastro (nome, e-mail, telefone)</li>
                          <li>Dados financeiros para processamento de transações</li>
                          <li>Informações de uso da plataforma</li>
                          <li>Dados de dispositivo e navegação</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Como usamos seus dados</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Fornecer e melhorar nossos serviços</li>
                          <li>Processar transações e investimentos</li>
                          <li>Enviar comunicações relevantes</li>
                          <li>Cumprir obrigações legais e regulatórias</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Compartilhamento de dados</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Parceiros de processamento de pagamentos</li>
                          <li>Prestadores de serviços essenciais</li>
                          <li>Autoridades reguladoras quando exigido por lei</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Seus direitos</h3>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          <li>Acessar e corrigir seus dados pessoais</li>
                          <li>Solicitar exclusão de dados</li>
                          <li>Revogar consentimentos</li>
                          <li>Obter informações sobre o uso de seus dados</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Este é apenas um resumo. Para informações completas, consulte nossa política de privacidade
                    completa.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="#" onClick={() => document.querySelector('[data-value="completa"]')?.click()}>
                      Ver Política Completa
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="completa" className="space-y-8">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>1. Introdução</h2>
                  <p>
                    A Machine Invest ("nós", "nosso" ou "nossa") está comprometida em proteger sua privacidade. Esta
                    Política de Privacidade explica como coletamos, usamos, divulgamos, transferimos e armazenamos seus
                    dados. Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com
                    esta política.
                  </p>

                  <h2>2. Informações que coletamos</h2>
                  <h3>2.1 Informações que você nos fornece</h3>
                  <p>Coletamos informações que você nos fornece diretamente, incluindo:</p>
                  <ul>
                    <li>
                      <strong>Informações de cadastro:</strong> nome completo, endereço de e-mail, número de telefone,
                      data de nascimento, endereço residencial, documentos de identificação (como CPF e RG).
                    </li>
                    <li>
                      <strong>Informações financeiras:</strong> dados bancários, informações de cartão de crédito
                      (quando aplicável), histórico de transações e investimentos.
                    </li>
                    <li>
                      <strong>Informações de perfil de investidor:</strong> objetivos financeiros, tolerância a risco,
                      horizonte de investimento e experiência prévia com investimentos.
                    </li>
                  </ul>

                  <h3>2.2 Informações coletadas automaticamente</h3>
                  <p>Quando você utiliza nossa plataforma, coletamos automaticamente:</p>
                  <ul>
                    <li>
                      <strong>Dados de uso:</strong> informações sobre como você interage com nossos serviços, incluindo
                      páginas visitadas, tempo gasto, ações realizadas e padrões de uso.
                    </li>
                    <li>
                      <strong>Informações do dispositivo:</strong> tipo de dispositivo, sistema operacional, navegador,
                      endereço IP, identificadores de dispositivo e informações de rede.
                    </li>
                    <li>
                      <strong>Cookies e tecnologias similares:</strong> utilizamos cookies e tecnologias semelhantes
                      para coletar informações sobre sua navegação. Para mais detalhes, consulte nossa{" "}
                      <Link href="/cookies">Política de Cookies</Link>.
                    </li>
                  </ul>

                  <h2>3. Como utilizamos suas informações</h2>
                  <p>Utilizamos suas informações para os seguintes fins:</p>
                  <ul>
                    <li>Fornecer, manter e melhorar nossos serviços;</li>
                    <li>Processar e gerenciar suas transações e investimentos;</li>
                    <li>Personalizar sua experiência na plataforma;</li>
                    <li>Enviar comunicações sobre sua conta, atualizações de serviço e informações relevantes;</li>
                    <li>
                      Enviar materiais de marketing, promoções e ofertas (com seu consentimento, quando exigido por
                      lei);
                    </li>
                    <li>Analisar tendências de uso e melhorar a funcionalidade da plataforma;</li>
                    <li>Detectar, prevenir e resolver problemas técnicos, fraudes e atividades ilegais;</li>
                    <li>Cumprir obrigações legais e regulatórias aplicáveis ao setor financeiro.</li>
                  </ul>

                  <h2>4. Compartilhamento de informações</h2>
                  <p>Podemos compartilhar suas informações com:</p>
                  <ul>
                    <li>
                      <strong>Prestadores de serviços:</strong> empresas que nos auxiliam na prestação de serviços, como
                      processamento de pagamentos, análise de dados, hospedagem de servidores e suporte ao cliente.
                    </li>
                    <li>
                      <strong>Parceiros de negócios:</strong> instituições financeiras e parceiros comerciais com os
                      quais trabalhamos para oferecer produtos e serviços.
                    </li>
                    <li>
                      <strong>Autoridades reguladoras:</strong> órgãos governamentais, reguladores financeiros e
                      autoridades fiscais, quando exigido por lei.
                    </li>
                    <li>
                      <strong>Em caso de reorganização empresarial:</strong> em caso de fusão, aquisição ou venda de
                      ativos, suas informações podem ser transferidas como parte da transação.
                    </li>
                  </ul>

                  <h2>5. Segurança das informações</h2>
                  <p>
                    Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra
                    acesso não autorizado, perda, alteração ou divulgação. Estas medidas incluem criptografia de dados,
                    firewalls, controles de acesso e auditorias regulares de segurança.
                  </p>

                  <h2>6. Retenção de dados</h2>
                  <p>
                    Mantemos suas informações pelo tempo necessário para cumprir os propósitos descritos nesta política,
                    a menos que um período de retenção mais longo seja exigido ou permitido por lei. Os critérios
                    utilizados para determinar nossos períodos de retenção incluem:
                  </p>
                  <ul>
                    <li>O período durante o qual temos um relacionamento contínuo com você;</li>
                    <li>Obrigações legais às quais estamos sujeitos;</li>
                    <li>Prazos de prescrição aplicáveis, litígios ou investigações regulatórias.</li>
                  </ul>

                  <h2>7. Transferências internacionais</h2>
                  <p>
                    Suas informações podem ser transferidas e processadas em países diferentes daquele em que você
                    reside. Esses países podem ter leis de proteção de dados diferentes das leis do seu país. Quando
                    transferimos suas informações para outros países, implementamos salvaguardas apropriadas para
                    garantir que seus dados permaneçam protegidos.
                  </p>

                  <h2>8. Seus direitos</h2>
                  <p>
                    Dependendo da legislação aplicável, você pode ter os seguintes direitos em relação aos seus dados
                    pessoais:
                  </p>
                  <ul>
                    <li>Direito de acesso aos seus dados pessoais;</li>
                    <li>Direito de retificação de dados incompletos, inexatos ou desatualizados;</li>
                    <li>Direito de exclusão de dados desnecessários ou excessivos;</li>
                    <li>Direito de portabilidade dos dados;</li>
                    <li>Direito de revogar o consentimento a qualquer momento;</li>
                    <li>Direito de se opor ao processamento em determinadas circunstâncias;</li>
                    <li>Direito de não estar sujeito a decisões automatizadas, incluindo criação de perfil.</li>
                  </ul>

                  <h2>9. Alterações nesta política</h2>
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações em nossas
                    práticas ou por outros motivos operacionais, legais ou regulatórios. Notificaremos você sobre
                    quaisquer alterações materiais através de um aviso em nosso site ou por e-mail.
                  </p>

                  <h2>10. Contato</h2>
                  <p>
                    Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou sobre o tratamento de
                    seus dados pessoais, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através do
                    e-mail <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a> ou pelo
                    telefone 0800 123 4567.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="direitos" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Seus Direitos de Privacidade</CardTitle>
                    <CardDescription>Conheça seus direitos em relação aos seus dados pessoais</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Direito de acesso</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Você tem o direito de obter confirmação sobre se seus dados pessoais estão sendo processados
                            e, em caso afirmativo, acessar esses dados e informações sobre como eles são processados.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Como exercer:</strong> Envie um e-mail para{" "}
                            <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a> com o
                            assunto "Solicitação de Acesso a Dados".
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-2">
                        <AccordionTrigger>Direito de retificação</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Você tem o direito de corrigir dados pessoais incompletos, inexatos ou desatualizados.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Como exercer:</strong> Você pode atualizar muitas de suas informações diretamente em
                            seu perfil na plataforma. Para outras correções, envie um e-mail para{" "}
                            <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a>.
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-3">
                        <AccordionTrigger>Direito de exclusão</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Você tem o direito de solicitar a exclusão de seus dados pessoais quando eles não são mais
                            necessários para os fins para os quais foram coletados, ou quando você revoga seu
                            consentimento.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Limitações:</strong> Em alguns casos, somos legalmente obrigados a manter certos
                            dados por períodos determinados, especialmente para fins regulatórios e fiscais.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Como exercer:</strong> Envie um e-mail para{" "}
                            <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a> com o
                            assunto "Solicitação de Exclusão de Dados".
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-4">
                        <AccordionTrigger>Direito de portabilidade</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Você tem o direito de receber seus dados pessoais em um formato estruturado, comumente usado
                            e legível por máquina, e tem o direito de transmitir esses dados para outro controlador.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Como exercer:</strong> Envie um e-mail para{" "}
                            <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a> com o
                            assunto "Solicitação de Portabilidade de Dados".
                          </p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="item-5">
                        <AccordionTrigger>Direito de revogação do consentimento</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground">
                            Você tem o direito de retirar seu consentimento a qualquer momento, quando o processamento
                            for baseado no consentimento.
                          </p>
                          <p className="text-muted-foreground mt-2">
                            <strong>Como exercer:</strong> Para comunicações de marketing, você pode usar o link
                            "cancelar inscrição" presente nos e-mails. Para outros tipos de consentimento, envie um
                            e-mail para <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a>
                            .
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Se você tiver dúvidas sobre como exercer seus direitos ou acredita que eles não foram respeitados,
                    entre em contato com nosso DPO.
                  </p>
                  <Button asChild>
                    <Link href="/contato">Falar com o DPO</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

