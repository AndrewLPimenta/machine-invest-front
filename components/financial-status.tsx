"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useFinanceService } from "@/service/investmentService"
import { useAuth } from "@/contexts/auth-context"

interface FinancialSummary {
  totalInvestimentos: number
  totalGastos: number
}

export function FinancialStatus() {
  const { user } = useAuth()
  const financeService = useFinanceService()

  const [summary, setSummary] = useState<FinancialSummary>({
    totalInvestimentos: 0,
    totalGastos: 0
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!user?.token) {
      setLoading(false)
      return
    }

    const loadSummary = async () => {
      try {
        const response = await financeService.getFinancialSummary()
        const data = response?.data ?? response
        setSummary({
          totalInvestimentos: Number(data?.totalInvestimentos ?? 0),
          totalGastos: Number(data?.totalGastos ?? 0)
        })
      } catch (err: any) {
        console.error(err)
        setError(err?.message ?? "Erro ao buscar resumo financeiro")
      } finally {
        setLoading(false)
      }
    }

    loadSummary()
  }, [user?.token, financeService])

  return (
    <Card className="max-w-lg w-full border-none  shadow-lg mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Status Financeiro</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6">
        {/* Investimentos */}
        <div className="text-center flex-1 py-2">
          <p className="text-sm font-medium text-primary/50">Investimentos</p>
          <p className="text-xl font-bold text-primary">
            {loading ? "Carregando..." : `R$ ${summary.totalInvestimentos.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          </p>
        </div>

        {/* Gastos */}
        <div className="text-center flex-1 rounded-lg py-4">
          <p className="text-sm font-medium text-red-700">Gastos</p>
          <p className="text-xl font-bold text-red-600">
            {loading ? "Carregando..." : `R$ ${summary.totalGastos.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          </p>
        </div>
      </CardContent>
      {error && <p className="text-center text-red-600 py-2">{error}</p>}
    </Card>
  )
}
