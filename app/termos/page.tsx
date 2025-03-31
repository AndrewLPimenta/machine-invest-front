"use client"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermosPage() {
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
              title="Termos de Uso"
              description="Leia atentamente os termos e condições que regem o uso da nossa plataforma."
              centered
            />
          </motion.div>

          <motion.div
            className="mt-12 prose prose-lg dark:prose-invert max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar a plataforma Machine Invest, você concorda em cumprir e ficar vinculado a estes
              Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá acessar ou utilizar
              nossos serviços.
            </p>

            <h2>2. Descrição dos Serviços</h2>
            <p>
              A Machine Invest é uma plataforma de investimentos que oferece serviços relacionados a criptomoedas,
              ativos digitais e produtos financeiros tradicionais. Nossos serviços incluem, mas não se limitam a:
            </p>
            <ul>
              <li>Simulação de investimentos em diferentes classes de ativos</li>
              <li>Informações e análises sobre criptomoedas e mercados financeiros</li>
              <li>Ferramentas para acompanhamento de carteiras de investimentos</li>
              <li>Serviços de intermediação para compra e venda de ativos financeiros</li>
            </ul>

            <h2>3. Elegibilidade</h2>
            <p>Para utilizar nossos serviços, você deve:</p>
            <ul>
              <li>Ter pelo menos 18 anos de idade</li>
              <li>Possuir capacidade legal para celebrar contratos</li>
              <li>Não ter sido previamente suspenso ou removido da nossa plataforma</li>
              <li>Cumprir todas as leis e regulamentos aplicáveis em sua jurisdição</li>
            </ul>

            <h2>4. Cadastro e Segurança da Conta</h2>
            <p>Ao criar uma conta na Machine Invest, você concorda em:</p>
            <ul>
              <li>Fornecer informações precisas, atuais e completas</li>
              <li>Manter e atualizar prontamente suas informações</li>
              <li>Manter a confidencialidade de sua senha e restringir o acesso à sua conta</li>
              <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
              <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
            </ul>

            <h2>5. Riscos de Investimento</h2>
            <p>
              Investimentos em ativos financeiros, especialmente criptomoedas, envolvem riscos significativos. Ao
              utilizar nossa plataforma, você reconhece e aceita que:
            </p>
            <ul>
              <li>O valor dos investimentos pode flutuar e você pode perder parte ou todo o seu capital investido</li>
              <li>Rendimentos passados não são garantia de resultados futuros</li>
              <li>
                Criptomoedas e outros ativos digitais são altamente voláteis e podem estar sujeitos a mudanças
                regulatórias
              </li>
              <li>
                Você é o único responsável por suas decisões de investimento e deve buscar aconselhamento profissional
                independente quando necessário
              </li>
            </ul>

            <h2>6. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo disponível em nossa plataforma, incluindo, mas não se limitando a textos, gráficos,
              logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é
              propriedade da Machine Invest ou de seus fornecedores de conteúdo e está protegido por leis de direitos
              autorais.
            </p>
            <p>
              Você não pode modificar, reproduzir, distribuir, criar trabalhos derivados, exibir publicamente ou
              explorar comercialmente qualquer conteúdo da plataforma sem nossa autorização prévia por escrito.
            </p>

            <Accordion type="single" collapsible className="w-full mt-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>7. Limitações de Responsabilidade</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Na extensão máxima permitida pela lei aplicável, a Machine Invest e seus diretores, funcionários,
                    agentes e afiliados não serão responsáveis por quaisquer danos indiretos, incidentais, especiais,
                    consequenciais ou punitivos, incluindo, mas não se limitando a, perda de lucros, dados, uso, boa
                    vontade ou outras perdas intangíveis, resultantes de:
                  </p>
                  <ul>
                    <li>Seu acesso ou uso ou incapacidade de acessar ou usar a plataforma</li>
                    <li>Qualquer conduta ou conteúdo de terceiros na plataforma</li>
                    <li>Conteúdo obtido da plataforma</li>
                    <li>Acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo</li>
                  </ul>
                  <p>
                    Nossa responsabilidade será limitada ao valor máximo pago por você à Machine Invest pelos serviços
                    durante os 12 meses anteriores ao evento que deu origem à responsabilidade.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>8. Indenização</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Você concorda em defender, indenizar e isentar a Machine Invest e seus diretores, funcionários,
                    agentes e afiliados de e contra quaisquer reclamações, responsabilidades, danos, perdas e despesas,
                    incluindo, sem limitação, custos legais e contábeis razoáveis, decorrentes de ou de alguma forma
                    relacionados com:
                  </p>
                  <ul>
                    <li>Seu acesso ou uso da plataforma</li>
                    <li>Sua violação destes Termos de Uso</li>
                    <li>
                      Sua violação de quaisquer direitos de terceiros, incluindo, mas não se limitando a, direitos de
                      propriedade intelectual, privacidade ou direitos de personalidade
                    </li>
                    <li>Qualquer conteúdo ou informação que você enviar, postar ou transmitir através da plataforma</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>9. Modificações dos Termos</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão
                    em vigor imediatamente após a publicação dos termos atualizados em nossa plataforma. Seu uso
                    continuado da plataforma após tais alterações constitui sua aceitação dos novos termos.
                  </p>
                  <p>
                    Recomendamos que você revise periodicamente estes Termos de Uso para estar ciente de quaisquer
                    alterações. Alterações significativas serão notificadas através de um aviso proeminente em nossa
                    plataforma ou por e-mail.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>10. Lei Aplicável e Resolução de Disputas</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Estes Termos de Uso serão regidos e interpretados de acordo com as leis do Brasil, sem considerar
                    suas disposições sobre conflitos de leis.
                  </p>
                  <p>
                    Qualquer disputa, controvérsia ou reclamação decorrente ou relacionada a estes Termos de Uso ou à
                    plataforma será resolvida por arbitragem, de acordo com as regras da [Nome da Câmara de Arbitragem],
                    por um ou mais árbitros nomeados de acordo com as referidas regras.
                  </p>
                  <p>
                    Antes de iniciar um processo de arbitragem, você concorda em tentar resolver a disputa informalmente
                    entrando em contato conosco. Se a disputa não for resolvida dentro de 30 dias após o contato, você
                    ou a Machine Invest poderão iniciar o processo de arbitragem.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>11. Disposições Gerais</AccordionTrigger>
                <AccordionContent>
                  <p>
                    <strong>Acordo Integral:</strong> Estes Termos de Uso constituem o acordo integral entre você e a
                    Machine Invest em relação ao uso da plataforma e substituem todos os acordos anteriores ou
                    contemporâneos.
                  </p>
                  <p>
                    <strong>Renúncia e Separabilidade:</strong> A falha da Machine Invest em exercer ou fazer cumprir
                    qualquer direito ou disposição destes Termos de Uso não constituirá uma renúncia a tal direito ou
                    disposição. Se qualquer disposição destes Termos de Uso for considerada inválida ou inexequível por
                    um tribunal, as demais disposições permanecerão em vigor.
                  </p>
                  <p>
                    <strong>Cessão:</strong> Você não pode ceder ou transferir estes Termos de Uso, por força de lei ou
                    de outra forma, sem o consentimento prévio por escrito da Machine Invest. A Machine Invest pode
                    ceder estes Termos de Uso sem restrições.
                  </p>
                  <p>
                    <strong>Notificações:</strong> Podemos fornecer notificações a você por e-mail, postagem na
                    plataforma ou outros meios razoáveis.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <h2 className="mt-8">12. Contato</h2>
            <p>
              Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail{" "}
              <a href="mailto:termos@machineinvest.com">termos@machineinvest.com</a> ou pelo telefone 0800 123 4567.
            </p>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">Última atualização: 15 de março de 2025</p>
            </div>
          </motion.div>

          <div className="mt-12 text-center">
            <Button asChild className="mr-4">
              <Link href="/privacidade">Política de Privacidade</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/cookies">Política de Cookies</Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

