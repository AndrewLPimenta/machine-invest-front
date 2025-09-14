"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowRight, Target, ArrowLeft } from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { PageLayout } from "@/components/page-layout"
import { InvestmentForm } from "@/components/investment-form"
import { ExpenseForm } from "@/components/expense-form"
import { useFinanceService } from "@/service/investmentService"
import { useInvestment } from "@/hooks/useInvestment"
import { EnhancedPerformanceChart } from "@/components/enhanced-performance-chart"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { ExpenseSummary } from "@/components/expense-summary"
import { InvestmentSummary } from "@/components/investment-summary"
import Link from "next/link"

export default function FinancePage() {
  const financeService = useFinanceService()
  const { fetchWithAuth, loading: authLoading, error: authError } = useInvestment()
  const { toast } = useToast()
  const [mounted, setMounted] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [summary, setSummary] = useState<any>({})
  const [investments, setInvestments] = useState<any[]>([])
  const [expenses, setExpenses] = useState<any[]>([])
  const [expenseCategories, setExpenseCategories] = useState<any[]>([])

  useEffect(() => setMounted(true), [])

  const reloadData = async () => {
    const data = await fetchWithAuth(async () => {
      const [sum, inv, exp, categories] = await Promise.all([
        financeService.getFinancialSummary(),
        financeService.getInvestments(),
        financeService.getExpenses(),
        financeService.getExpenseCategories()
      ])
      return { sum: sum?.data, inv: inv?.data, exp: exp?.data, categories: categories?.data }
    })
    if (data) {
      setSummary(data.sum ?? {})
      setInvestments(data.inv ?? [])
      setExpenses(data.exp ?? [])
      setExpenseCategories(data.categories ?? [])
    }
  }

  useEffect(() => { if (mounted) reloadData() }, [refreshKey, mounted])

  const handleInvestmentUpdated = () => setRefreshKey(prev => prev + 1)
  const handleExpenseUpdated = () => setRefreshKey(prev => prev + 1)

  const total = (summary?.totalInvestimentos ?? 0) + (summary?.totalGastos ?? 0) + (summary?.saldo ?? 0)

  const chartData = total > 0 ? [
    { label: "Investimentos", value: Math.round(((summary?.totalInvestimentos ?? 0) / total) * 100), color: "#3b82f6" },
    { label: "Gastos", value: Math.round(((summary?.totalGastos ?? 0) / total) * 100), color: "#ef4444" },
    { label: "Liquidez", value: Math.round(((summary?.saldo ?? 0) / total) * 100), color: "#22c55e" },
  ] : []

  if (!mounted) return (
    <PageLayout>
      <AuthRedirect>
        <p className="text-center text-gray-500 mt-12">Carregando...</p>
      </AuthRedirect>
    </PageLayout>
  )

  return (
    <PageLayout>
      <AuthRedirect>
        {authLoading && <p className="text-center text-gray-500">Carregando...</p>}
        {authError && <p className="text-center text-red-500">{authError}</p>}

        <div className="min-h-screen bg-background px-4 py-12 space-y-12">

          {/* Gráfico de Performance */}
          <EnhancedPerformanceChart
            title="Resumo da Carteira"
            description="Distribuição entre investimentos, gastos e liquidez."
            data={chartData}
          />

          {/* Resumo Financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
              <CardContent className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary/60 uppercase">INVESTIMENTOS</p>
                <p className="text-2xl font-bold">{(summary?.totalInvestimentos ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
              <CardContent className="text-center">
                <ArrowRight className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary/60 uppercase">GASTOS</p>
                <p className="text-2xl font-bold">{(summary?.totalGastos ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>

            <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
              <CardContent className="text-center">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary/60 uppercase">LIQUIDEZ</p>
                <p className="text-2xl font-bold">{(summary?.saldo ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InvestmentForm
              onInvestmentUpdated={handleInvestmentUpdated}
              fetchWithAuth={fetchWithAuth}
              financeService={financeService}
            />

            <ExpenseForm
              onExpenseUpdated={handleExpenseUpdated}
              fetchWithAuth={fetchWithAuth}
              financeService={financeService}
              expenseCategories={expenseCategories}
            />
          </div>

          {/* Listas com Edit/Delete */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <InvestmentSummary />
            </Card>
            <Card>
                <ExpenseSummary
                  financeService={financeService}
                  fetchWithAuth={fetchWithAuth}
                />
            </Card>
          </div>

          {/* Botão voltar */}
          <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl flex justify-center items-center">
            <CardContent className="w-full py-6">
              <div className="flex justify-center">
                <Link href="/perfil/conservador" passHref>
                  <Button size="lg" className="group" asChild>
                    <span>
                      <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Voltar ao Início
                    </span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

        </div>

      </AuthRedirect>
    </PageLayout>
  )
}
