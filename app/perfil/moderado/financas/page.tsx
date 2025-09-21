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
import { useAuth } from "@/contexts/auth-context"
import { LampContainer } from "@/components/ui/lamp"
import { motion } from "framer-motion"

export default function FinancePage() {
  const { user, isLoading: authLoading } = useAuth()
  const financeService = useFinanceService()
  const { fetchWithAuth } = useInvestment()
  const { toast } = useToast()

  const [mounted, setMounted] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [summary, setSummary] = useState<any>({})
  const [investments, setInvestments] = useState<any[]>([])
  const [expenses, setExpenses] = useState<any[]>([])
  const [expenseCategories, setExpenseCategories] = useState<any[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => setMounted(true), [])

  const reloadData = async () => {
    if (!user?.token) return
    setLoading(true)
    setError(null)
    try {
      const data = await fetchWithAuth(async () => {
        const [sum, inv, exp, categories] = await Promise.all([
          financeService.getFinancialSummary(),
          financeService.getInvestments(),
          financeService.getExpenses(),
          financeService.getExpenseCategories()
        ])
        return {
          sum: sum?.data ?? {},
          inv: inv?.data ?? [],
          exp: exp?.data ?? [],
          categories: categories?.data ?? []
        }
      })

      if (data) {
        setSummary(data.sum)
        setInvestments(data.inv)
        setExpenses(data.exp)
        setExpenseCategories(data.categories)
      }
    } catch (err: any) {
      console.error("Erro ao carregar dados financeiros:", err)
      setError(err?.message || "Erro ao carregar dados financeiros")
      toast({
        title: "Erro",
        description: err?.message || "Erro ao carregar dados financeiros",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!mounted || authLoading || !user?.token) return
    reloadData()
  }, [refreshKey, mounted, authLoading, user?.token])

  const handleInvestmentUpdated = () => setRefreshKey(prev => prev + 1)
  const handleExpenseUpdated = () => setRefreshKey(prev => prev + 1)

  const total = (summary?.totalInvestimentos ?? 0) + (summary?.totalGastos ?? 0) + (summary?.saldo ?? 0)
  const chartData = total > 0 ? [
    { label: "Investimentos", value: Math.round(((summary?.totalInvestimentos ?? 0) / total) * 100), color: "#3b82f6" },
    { label: "Gastos", value: Math.round(((summary?.totalGastos ?? 0) / total) * 100), color: "#ef4444" },
    { label: "Liquidez", value: Math.round(((summary?.saldo ?? 0) / total) * 100), color: "#22c55e" },
  ] : []

  if (!mounted || authLoading) return (
    <PageLayout>
      <AuthRedirect>
        <p className="text-center text-foreground mt-12">Carregando...</p>
      </AuthRedirect>
    </PageLayout>
  )

  return (
    <PageLayout>
      <AuthRedirect>
        {error && <p className="text-center text-destructive">{error}</p>}
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Gestão <br />Financeira
          </motion.h1>
        </LampContainer>

        <div className="min-h-screen bg-background px-4 py-12 space-y-12">

          {/* Gráfico de Performance */}
          {loading && <p className="text-center text-foreground">Carregando dados financeiros...</p>}
          <EnhancedPerformanceChart
            title="Resumo da Carteira"
            description="Distribuição entre investimentos, gastos e liquidez."
            data={chartData}
          />

          {/* Resumo Financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Shield className="h-6 w-6 text-primary mx-auto mb-2" />, label: "INVESTIMENTOS", value: summary?.totalInvestimentos ?? 0 },
              { icon: <ArrowRight className="h-6 w-6 text-primary mx-auto mb-2" />, label: "GASTOS", value: summary?.totalGastos ?? 0 },
              { icon: <Target className="h-6 w-6 text-primary mx-auto mb-2" />, label: "LIQUIDEZ", value: summary?.saldo ?? 0 },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
                  <CardContent className="text-center">
                    {item.icon}
                    <p className="text-sm font-semibold text-primary/60 uppercase">{item.label}</p>
                    <p className="text-2xl font-bold">{item.value.toLocaleString("pt-BR")} R$</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Formulários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <InvestmentForm
              onInvestmentUpdated={handleInvestmentUpdated}
              fetchWithAuth={fetchWithAuth}
              financeService={{
                ...financeService,
                updateInvestment: (id: string, payload: any) =>
                  financeService.updateInvestment(Number(id), payload),
              }}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card>
                <InvestmentSummary />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <ExpenseSummary
                  financeService={financeService}
                  fetchWithAuth={fetchWithAuth}
                />
              </Card>
            </motion.div>
          </div>

          {/* Botão voltar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
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
          </motion.div>

        </div>
      </AuthRedirect>
    </PageLayout>
  )
}
