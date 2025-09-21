"use client"

import { PageLayout } from "@/components/page-layout"
import { AuthRedirect } from "@/components/auth-redirect"
import { InvestmentSimulator, SimulationItem } from "@/components/ui/simulador-geral"

export default function SimulacaoConservadorPage() {
  // Exemplo de dados que você teria do contexto de login
  const isLoggedIn = true // ou false
  const simulationsCount = 0
  const MAX_FREE_SIMULATIONS = 3

  // Função de simulação (exemplo simples)
  const handleSimulate = ({
    investmentAmount,
    monthlyContribution,
    investmentPeriod,
    riskProfile,
    selectedTab,
  }: {
    investmentAmount: number
    monthlyContribution: number
    investmentPeriod: number
    riskProfile: number
    selectedTab: string
  }): SimulationItem[] => {
    // Retorna um array de resultados simulados
    return [
      {
        name: selectedTab === "renda-fixa" ? "CDB" : "Ação",
        rate: riskProfile * 1.2,
        final: investmentAmount + monthlyContribution * investmentPeriod * (1 + riskProfile * 0.01),
        profitPct: riskProfile * 2.5,
      },
    ]
  }

  return (
    <AuthRedirect>
      <PageLayout>
        <h1 className="text-3xl font-bold mb-6">Área de Simulação - Perfil Conservador</h1>
        <InvestmentSimulator
          isLoggedIn={isLoggedIn}
          simulationsCount={simulationsCount}
          MAX_FREE_SIMULATIONS={MAX_FREE_SIMULATIONS}
          handleSimulate={handleSimulate}
        />
      </PageLayout>
    </AuthRedirect>
  )
}
