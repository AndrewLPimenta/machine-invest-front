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

export default function CookiesPage() {
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
              title="Política de Cookies"
              description="Saiba como utilizamos cookies para melhorar sua experiência em nossa plataforma."
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
              <CardHeader>
                <CardTitle>O que são cookies?</CardTitle>
                <CardDescription>Entenda o básico sobre cookies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita um
                  site. Eles servem para lembrar informações sobre sua visita, como seu idioma preferido e outras
                  configurações.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Por que usamos cookies?</CardTitle>
                <CardDescription>Finalidades dos nossos cookies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilizamos cookies para melhorar sua experiência de navegação, personalizar conteúdo e anúncios,
                  fornecer recursos de mídia social e analisar o tráfego do nosso site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seus direitos</CardTitle>
                <CardDescription>Controle sobre seus dados</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você tem o direito de aceitar ou recusar cookies. A maioria dos navegadores aceita cookies
                  automaticamente, mas você pode modificar as configurações do seu navegador para recusar cookies se
                  preferir.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="mt-12 prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2>Tipos de cookies que utilizamos</h2>
            <p>
              A Machine Invest utiliza diferentes tipos de cookies para diferentes finalidades. Abaixo, explicamos cada
              um deles:
            </p>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Cookies Essenciais</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Estes cookies são necessários para o funcionamento básico do site. Eles permitem que você navegue
                    pelo site e use recursos essenciais, como áreas seguras, carrinhos de compras e faturamento
                    eletrônico. Esses cookies não coletam informações sobre você que poderiam ser usadas para marketing
                    ou lembrar onde você esteve na internet.
                  </p>
                  <p>
                    <strong>Exemplos:</strong> cookies de sessão, cookies de autenticação, cookies de segurança.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Cookies de Preferências</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Estes cookies permitem que o site lembre de escolhas que você faz (como seu nome de usuário, idioma
                    ou região em que você está) e fornecem recursos aprimorados e mais personalizados. Esses cookies
                    podem também ser usados para lembrar alterações que você fez no tamanho do texto, fontes e outras
                    partes das páginas da web que você pode personalizar.
                  </p>
                  <p>
                    <strong>Exemplos:</strong> cookies de idioma, cookies de tema (modo claro/escuro).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Cookies Estatísticos</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Estes cookies coletam informações sobre como você usa um site, como quais páginas você visitou e em
                    quais links clicou. Nenhuma dessas informações pode ser usada para identificá-lo. Seu único
                    propósito é melhorar as funções do site. Isso inclui cookies de terceiros de serviços de análise,
                    desde que os cookies sejam apenas para uso exclusivo do proprietário do site visitado.
                  </p>
                  <p>
                    <strong>Exemplos:</strong> Google Analytics, Hotjar, Mixpanel.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Cookies de Marketing</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Estes cookies são usados para rastrear visitantes em sites. A intenção é exibir anúncios que sejam
                    relevantes e envolventes para o usuário individual e, portanto, mais valiosos para editores e
                    anunciantes terceirizados.
                  </p>
                  <p>
                    <strong>Exemplos:</strong> cookies de redes sociais, cookies de publicidade direcionada.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="mt-8">Como gerenciar cookies</h2>
            <p>
              Você pode gerenciar os cookies através das configurações do seu navegador. Abaixo, explicamos como fazer
              isso nos navegadores mais populares:
            </p>

            <ul>
              <li>
                <strong>Google Chrome:</strong> Menu {"->"} Configurações {"->"} Privacidade e segurança {"->"} Cookies
                e outros dados do site
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Menu {"->"} Opções {"->"} Privacidade e Segurança {"->"} Cookies e
                dados do site
              </li>
              <li>
                <strong>Safari:</strong> Preferências {"->"} Privacidade {"->"} Cookies e dados de sites
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Menu {"->"} Configurações {"->"} Cookies e permissões do site {"->"}{" "}
                Cookies
              </li>
            </ul>

            <h2 className="mt-8">Atualizações na política de cookies</h2>
            <p>
              Podemos atualizar nossa Política de Cookies periodicamente. Recomendamos que você revise esta página
              regularmente para se manter informado sobre quaisquer alterações. Alterações significativas serão
              notificadas através de um aviso proeminente em nosso site.
            </p>

            <h2 className="mt-8">Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre nossa Política de Cookies, entre em contato conosco através do e-mail{" "}
              <a href="mailto:privacidade@machineinvest.com">privacidade@machineinvest.com</a> ou pelo telefone 0800 123
              4567.
            </p>
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/privacidade">Ver Política de Privacidade</Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

