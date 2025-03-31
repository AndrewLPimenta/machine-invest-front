"use client"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { SimulationSection } from "@/components/simulation-section"
import { SectionHeading } from "@/components/section-heading"

export default function SimulacaoPage() {
  return (
    <SiteLayout>
      <Section>
        <ResponsiveContainer>
          <SectionHeading
            title="Simulação de Investimentos"
            description="Simule seus investimentos e veja como seu dinheiro pode crescer ao longo do tempo."
            centered
          />
          <SimulationSection />
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

