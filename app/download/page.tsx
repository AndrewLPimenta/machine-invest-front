import type { Metadata } from "next"
import Image from "next/image"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { ResponsiveContainer } from "@/components/responsive-container"
import { AppStoreButton } from "@/components/app-store-button"
import { GooglePlayButton } from "@/components/google-play-button"

export const metadata: Metadata = {
  title: "Download do Aplicativo | Machine Invest",
  description:
    "Baixe o aplicativo da Machine Invest para iOS e Android e tenha acesso a todas as funcionalidades em qualquer lugar.",
}

export default function DownloadPage() {
  return (
    <PageLayout>
      <Section className="py-16 md:py-24">
        <ResponsiveContainer>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Baixe nosso aplicativo"
                subtitle="Tenha a Machine Invest sempre com você"
                className="text-left"
              />
              <p className="mt-6 text-lg text-muted-foreground">
                Com o aplicativo da Machine Invest, você tem acesso a todas as funcionalidades da plataforma diretamente
                do seu smartphone. Acompanhe seus investimentos, faça simulações e muito mais, onde quer que esteja.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Acompanhe seus investimentos</h3>
                    <p className="mt-2 text-muted-foreground">
                      Monitore o desempenho de seus investimentos em tempo real, com gráficos e análises detalhadas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Faça simulações</h3>
                    <p className="mt-2 text-muted-foreground">
                      Simule investimentos e empréstimos diretamente do seu smartphone, com resultados instantâneos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Configurações personalizadas</h3>
                    <p className="mt-2 text-muted-foreground">
                      Personalize suas notificações, temas e preferências para uma experiência única.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <AppStoreButton href="#" />
                <GooglePlayButton href="#" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
              <div className="relative z-10 flex justify-center">
                <div className="relative w-64 h-[500px] md:w-72 md:h-[580px] rounded-[40px] border-8 border-gray-800 dark:border-gray-700 overflow-hidden shadow-xl">
                  <div className="absolute top-0 w-32 h-6 bg-gray-800 dark:bg-gray-700 left-1/2 -translate-x-1/2 rounded-b-lg"></div>
                  <Image
                    src="/placeholder.svg?height=580&width=300"
                    alt="Machine Invest App"
                    width={300}
                    height={580}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </Section>

      <Section className="py-16 bg-muted/30">
        <ResponsiveContainer>
          <SectionHeading
            title="Recursos exclusivos do aplicativo"
            subtitle="Aproveite ao máximo sua experiência mobile"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Notificações em tempo real</h3>
              <p className="text-muted-foreground">
                Receba alertas sobre movimentações importantes no mercado e atualizações sobre seus investimentos.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download de relatórios</h3>
              <p className="text-muted-foreground">
                Baixe relatórios detalhados sobre seus investimentos e compartilhe com quem desejar.
              </p>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Autenticação biométrica</h3>
              <p className="text-muted-foreground">
                Acesse sua conta de forma rápida e segura usando sua impressão digital ou reconhecimento facial.
              </p>
            </div>
          </div>
        </ResponsiveContainer>
      </Section>
    </PageLayout>
  )
}

