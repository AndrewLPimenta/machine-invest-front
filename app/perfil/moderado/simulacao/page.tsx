"use client"

import { PageLayout } from "@/components/page-layout"
import { AuthRedirect } from "@/components/auth-redirect"
import { InvestmentSimulator, SimulationItem } from "@/components/ui/simulador-geral"

export default function SimulacaoModeradoPage() {
  const isLoggedIn = true
  const simulationsCount = 0
  const MAX_FREE_SIMULATIONS = 3

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
    return [
      {
        name: selectedTab === "renda-fixa" ? "CDB" : "Ação",
        rate: riskProfile * 1.5,  
        final: investmentAmount + monthlyContribution * investmentPeriod * (1 + riskProfile * 0.015), 
        profitPct: riskProfile * 3, 
      },
    ]
  }

  return (
    <AuthRedirect>
      <PageLayout>
        <div className="flex flex-col items-center justify-center py-12 px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Área de Simulação - Perfil Moderado
          </h1>

          <div className="w-full max-w-5xl">
            <InvestmentSimulator
              isLoggedIn={isLoggedIn}
              simulationsCount={simulationsCount}
              MAX_FREE_SIMULATIONS={MAX_FREE_SIMULATIONS}
              handleSimulate={handleSimulate}
            />
          </div>
        </div>
      </PageLayout>
    </AuthRedirect>
  )
}
