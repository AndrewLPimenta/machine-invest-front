"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { useFinanceService } from "@/service/investmentService"
import { useToast } from "@/components/ui/use-toast"
import { Edit, Trash2, RefreshCw, AlertCircle } from "lucide-react"
import { ExpenseForm } from "./expense-form"

interface ExpenseSummaryProps {
  fetchWithAuth: <T>(fn: () => Promise<T>) => Promise<T | null>
  financeService: ReturnType<typeof useFinanceService>
}

export function ExpenseSummary({ fetchWithAuth, financeService }: ExpenseSummaryProps) {
  const { toast } = useToast()

  const [summary, setSummary] = useState<any>(null)
  const [expenses, setExpenses] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingExpense, setEditingExpense] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [loadingId, setLoadingId] = useState<number | null>(null)

  const loadData = async () => {
    try {
      setLoading(true)
      setError(null)
      const [summaryResponse, expensesResponse, categoriesResponse] = await Promise.all([
        financeService.getFinancialSummary(),
        financeService.getExpenses({ limit: 5 }),
        financeService.getExpenseCategories()
      ])
      setSummary(summaryResponse?.data ?? {})
      setExpenses(expensesResponse?.data ?? [])
      setCategories(Array.isArray(categoriesResponse?.data) ? categoriesResponse.data : [])
    } catch (err: any) {
      console.error("Erro ao carregar gastos:", err)
      setError(err?.message ?? "Erro ao carregar gastos")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDeleteExpense = async (id: number) => {
    if (!confirm("Tem certeza que deseja deletar este gasto?")) return
    try {
      setLoadingId(id)
      await fetchWithAuth(() => financeService.deleteExpense(id))
      toast({ title: "Sucesso", description: "Gasto deletado." })
      loadData()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Erro ao deletar gasto", variant: "destructive" })
    } finally {
      setLoadingId(null)
    }
  }

  const handleEditExpense = (expense: any) => {
    setEditingExpense(expense)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingExpense(null)
  }

  if (error) {
    return (
      <Card>
        <CardHeader><CardTitle>Resumo de Gastos</CardTitle></CardHeader>
        <CardContent>
          <div className="text-center p-6 border border-dashed border-red-300 rounded-lg bg-red-50">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-700 font-medium mb-2">Erro ao carregar dados</p>
            <p className="text-red-600 text-sm mb-4">{error}</p>
            <Button onClick={loadData} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" /> Tentar Novamente
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card>
        <CardHeader><CardTitle>Resumo de Gastos</CardTitle></CardHeader>
        <CardContent className="p-6 text-center">Carregando seus gastos...</CardContent>
      </Card>
    )
  }

  const totalGastos = summary?.totalGastos ?? 0

  return (
    <>
      {/* Card de Total de Gastos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Resumo de Gastos</span>
            <Button variant="outline" size="sm" onClick={loadData}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 bg-primary-50 border border rounded-xl text-center">
            <p className="text-sm text-primary-600">Total de Gastos</p>
            <p className="text-2xl font-bold text-red-600">
              {totalGastos.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </p>
          </div>

          {/* Últimos Gastos */}
          <div className="space-y-3">
            <h4 className="font-semibold">Últimos Gastos</h4>
            {expenses.length > 0 ? (
              expenses.map(exp => {
                const categoryName = categories.find(c => c.id === exp.idCategoria)?.nome || "Sem categoria"
                return (
                  <div key={exp.id} className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{exp.descricao}</p>
                      <p className="text-xs text-gray-400 mt-1">Categoria: {categoryName}</p>
                      {/* Removida a data do resumo */}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-red-600 w-24 text-right">
                        {exp.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </p>
                      <Button size="sm" onClick={() => handleEditExpense(exp)} variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" onClick={() => handleDeleteExpense(exp.id)} variant="destructive" disabled={loadingId === exp.id}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )
              })
            ) : (
              <p className="text-center text-gray-500 py-4">Nenhum gasto registrado ainda.</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Modal de edição */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <ExpenseForm
            financeService={financeService}
            fetchWithAuth={fetchWithAuth}
            expenseCategories={categories}
            editingExpense={editingExpense}
            onExpenseUpdated={() => {
              loadData()
              setIsModalOpen(false)
              setEditingExpense(null)
            }}
          />
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleCloseModal}>Cancelar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
