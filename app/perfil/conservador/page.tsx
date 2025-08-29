// app/perfil/conservador/page.tsx
"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, TrendingUp, Target } from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { PageLayout } from "@/components/page-layout"
import { InvestmentForm } from "@/components/investment-form"
import { useFinanceService } from "@/service/investmentService"
import { useInvestment } from "@/hooks/useInvestment"
import { Button } from "@/components/ui/button"

export default function ConservadorPage() {
  const financeService = useFinanceService()
  const { fetchWithAuth, loading: authLoading, error: authError } = useInvestment()

  const [mounted, setMounted] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [summary, setSummary] = useState<any>({})
  const [investments, setInvestments] = useState<any[]>([])
  const [expenses, setExpenses] = useState<any[]>([])
  const [expenseCategories, setExpenseCategories] = useState<any[]>([])

  const [newExpense, setNewExpense] = useState({
    valor: "",
    descricao: "",
    dataGasto: new Date().toISOString().split("T")[0],
    idCategoria: ""
  })

  // Estados para criar categoria nova
  const [showCustomCategory, setShowCustomCategory] = useState(false)
  const [customCategoryName, setCustomCategoryName] = useState("")

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

  const handleExpenseAdded = async () => {
    if (!newExpense.valor || !newExpense.descricao) return
    const result = await fetchWithAuth(() =>
      financeService.createExpense({
        valor: parseFloat(newExpense.valor),
        descricao: newExpense.descricao,
        dataGasto: newExpense.dataGasto,
        idCategoria: newExpense.idCategoria || null,
      })
    )
    if (result) {
      setNewExpense({
        valor: "",
        descricao: "",
        dataGasto: new Date().toISOString().split("T")[0],
        idCategoria: ""
      })
      setRefreshKey(prev => prev + 1)
    }
  }

  const handleAddCustomCategory = async () => {
    if (!customCategoryName.trim()) return
    const result = await fetchWithAuth(() =>
      financeService.createExpenseCategory({ nome: customCategoryName })
    )
    if (result) {
      setCustomCategoryName("")
      setShowCustomCategory(false)
      setRefreshKey(prev => prev + 1)
    }
  }

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
          {/* Resumo Financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white/10 backdrop-blur border-0 shadow-xl">
              <CardContent className="text-center">
                <Shield className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-blue-200 uppercase">INVESTIMENTOS</p>
                <p className="text-2xl font-bold text-white">{(summary?.totalInvestimentos ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-0 shadow-xl">
              <CardContent className="text-center">
                <TrendingUp className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-blue-200 uppercase">GASTOS</p>
                <p className="text-2xl font-bold text-white">{(summary?.totalGastos ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border-0 shadow-xl">
              <CardContent className="text-center">
                <Target className="h-6 w-6 text-blue-300 mx-auto mb-2" />
                <p className="text-sm font-semibold text-blue-200 uppercase">SALDO</p>
                <p className="text-2xl font-bold text-white">{(summary?.saldo ?? 0).toLocaleString("pt-BR")} R$</p>
              </CardContent>
            </Card>
          </div>

          {/* Formulários */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Formulário Investimento */}
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Investimento</CardTitle>
                <CardDescription>Registre seus aportes</CardDescription>
              </CardHeader>
              <CardContent>
                <InvestmentForm
                  onInvestmentAdded={handleInvestmentAdded}
                  fetchWithAuth={fetchWithAuth}
                  financeService={financeService}
                />
              </CardContent>
            </Card>

            {/* Formulário Gasto */}
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Gasto</CardTitle>
                <CardDescription>Registre suas despesas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label>Descrição</label>
                  <input
                    type="text"
                    placeholder="Ex: Aluguel"
                    value={newExpense.descricao}
                    onChange={e => setNewExpense(prev => ({ ...prev, descricao: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label>Valor (R$)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="1000,00"
                    value={newExpense.valor}
                    onChange={e => setNewExpense(prev => ({ ...prev, valor: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <label>Data</label>
                  <input
                    type="date"
                    value={newExpense.dataGasto}
                    onChange={e => setNewExpense(prev => ({ ...prev, dataGasto: e.target.value }))}
                    className="w-full p-3 border rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label>Categoria</label>
                    <button
                      type="button"
                      onClick={() => setShowCustomCategory(!showCustomCategory)}
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Adicionar categoria
                    </button>
                  </div>

                  {showCustomCategory ? (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Nome da nova categoria"
                        value={customCategoryName}
                        onChange={e => setCustomCategoryName(e.target.value)}
                        className="flex-1 p-3 border rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={handleAddCustomCategory}
                        className="px-4 py-3 bg-blue-600 text-white rounded-lg"
                      >
                        Adicionar
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCustomCategory(false)}
                        className="px-4 py-3 bg-gray-300 rounded-lg"
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <select
                      value={newExpense.idCategoria}
                      onChange={e => setNewExpense(prev => ({ ...prev, idCategoria: e.target.value }))}
                      className="w-full p-3 border rounded-lg"
                    >
                      <option value="">Selecione uma categoria</option>
                      {expenseCategories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.nome}</option>
                      ))}
                    </select>
                  )}
                </div>

                <Button
                  onClick={handleExpenseAdded}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Adicionar Gasto
                </Button>
              </CardContent>
            </Card>
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
