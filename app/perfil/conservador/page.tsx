// app/perfil/conservador/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Target } from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { PageLayout } from "@/components/page-layout"
import { InvestmentForm } from "@/components/investment-form"
import { ExpenseForm } from "@/components/expense-form"
import { ExpenseSummary } from "@/components/expense-summary"
import { useFinanceService } from "@/service/investmentService"
import { useInvestment } from "@/hooks/useInvestment"
import { EnhancedPerformanceChart } from "@/components/enhanced-performance-chart"

export default function ConservadorPage() {
  const financeService = useFinanceService()
  const { fetchWithAuth, loading: authLoading, error: authError } = useInvestment()

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

  const handleInvestmentAdded = () => setRefreshKey(prev => prev + 1)
  const handleExpenseAdded = () => setRefreshKey(prev => prev + 1)

  const total =
    (summary?.totalInvestimentos ?? 0) +
    (summary?.totalGastos ?? 0) +
    (summary?.saldo ?? 0)

  const chartData = total > 0 ? [
    {
      label: "Investimentos",
      value: Math.round(((summary?.totalInvestimentos ?? 0) / total) * 100),
      color: "#3b82f6", // azul
    },
    {
      label: "Gastos",
      value: Math.round(((summary?.totalGastos ?? 0) / total) * 100),
      color: "#ef4444", // vermelho
    },
    {
      label: "Liquidez",
      value: Math.round(((summary?.saldo ?? 0) / total) * 100),
      color: "#22c55e", // verde
    },
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

        <div className="min-h-screen bg-background px-4 py-12">

          {/* 🔹 Gráfico de Performance */}
          <div className="mb-12">
            <EnhancedPerformanceChart
              title="Resumo da Carteira"
              description="Distribuição entre investimentos, gastos e liquidez."
              data={chartData}
            />
          </div>

          {/* Resumo Financeiro em Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 ">
            <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
              <CardContent className="text-center">
                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary/60 uppercase">INVESTIMENTOS</p>
                <p className="text-2xl font-bold">
                  {(summary?.totalInvestimentos ?? 0).toLocaleString("pt-BR")} R$
                </p>
              </CardContent>
            </Card>

            <ExpenseSummary
              expenses={expenses}
              totalExpenses={summary?.totalGastos ?? 0}
            />

            <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
              <CardContent className="text-center">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-primary/60 uppercase">lIQUIDEZ</p>
                <p className="text-2xl font-bold">
                  {(summary?.saldo ?? 0).toLocaleString("pt-BR")} R$
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Formulários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <InvestmentForm
              onInvestmentAdded={handleInvestmentAdded}
              fetchWithAuth={fetchWithAuth}
              financeService={financeService}
            />

            <ExpenseForm
              onExpenseAdded={handleExpenseAdded}
              fetchWithAuth={fetchWithAuth}
              financeService={financeService}
              expenseCategories={expenseCategories}
            />
          </div>

          {/* Listas de Investimentos e Gastos */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader><CardTitle>Investimentos</CardTitle></CardHeader>
              <CardContent>
                {investments.map(inv => (
                  <div key={inv.id} className="flex justify-between py-2 border-b border-white/20">
                    <span>{inv.tipoInvestimento?.nome}</span>
                    <span>{inv.valor.toLocaleString("pt-BR")} R$</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader><CardTitle>Gastos</CardTitle></CardHeader>
              <CardContent>
                {expenses.map(exp => (
                  <div key={exp.id} className="flex justify-between py-2 border-b border-white/20">
                    <span>{exp.categoria?.nome || "Sem categoria"} - {exp.descricao}</span>
                    <span>{exp.valor.toLocaleString("pt-BR")} R$</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </AuthRedirect>
    </PageLayout>
  )
}
