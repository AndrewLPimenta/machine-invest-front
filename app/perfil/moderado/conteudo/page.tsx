"use client"

import { Section } from "@/components/section";
import { PageLayout } from "@/components/page-layout";
import { AuthRedirect } from "@/components/auth-redirect";
import VideoSection from "@/components/ui/video-section";

export default function ConteudoPage() {
  return (
    <AuthRedirect>
      <PageLayout>
        <Section>
          {/* Header da página */}
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2">Conteúdos Introdutórios</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Assista às aulas abaixo e avance no seu aprendizado sobre investimentos conservadores.
            </p>
          </div>

         
        </Section>
      </PageLayout>
    </AuthRedirect>
  )
}
