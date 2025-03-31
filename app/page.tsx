"use client"
// Importar o SiteLayout
import { SiteLayout } from "@/components/site-layout"
import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { SimulationSection } from "@/components/simulation-section"
import { CtaSection } from "@/components/cta-section"

// Atualizar a função da página para usar o SiteLayout
export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <SimulationSection />
      <CtaSection />
    </SiteLayout>
  )
}

