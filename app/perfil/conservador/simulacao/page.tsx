"use client"

import { PageLayout } from "@/components/page-layout"
import { AuthRedirect } from "@/components/auth-redirect"
import { SimuladorRendaFixa } from "@/components/ui/simulador-renda-fixa"
import { Section } from "@/components/section"
export default function RendaFixaPage() {
  return (
    <AuthRedirect>
    <PageLayout>
      <Section>
                <h1 className="text-3xl font-bold mb-6 text-center">Área de Simulação - Perfil Conservador</h1>
        <SimuladorRendaFixa isLoggedIn={false} maxFreeSimulations={3} />
      </Section>
    </PageLayout>
    </AuthRedirect>
  )
}
