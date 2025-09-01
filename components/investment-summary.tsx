"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useFinanceService } from "@/service/investmentService"
import { useAuth } from "@/contexts/auth-context"
import { RefreshCw, AlertCircle, Edit, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export function InvestmentSummary() {
  const { user } = useAuth()
  const { getFinancialSummary, getInvestments, updateInvestment, deleteInvestment } = useFinanceService()
  const { toast } = useToast()

  const [summary, setSummary] = useState<any>(null)
  const [investments, setInvestments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [editingInvestment, setEditingInvestment] = useState<any>(null)
  const [editValue, setEditValue] = useState<any>({ descricao: "", valor: 0 })

  const loadData = async () => {
    if (!user?.token) return
    try {
      setLoading(true)
      setError(null)

      const [summaryResponse, investmentsResponse] = await Promise.all([
        getFinancialSummary(),
        getInvestments({ limit: 5 }),
      ])

      setSummary(summaryResponse?.data ?? {})
      setInvestments(investmentsResponse?.data ?? [])
    } catch (err: any) {
      console.error("Erro ao carregar dados:", err)
      setError(err?.message ?? "Erro ao carregar dados")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user?.token) {
      loadData()
    } else {
      setLoading(false)
      setError("Usuário não autenticado")
    }
  }, [user])

  const handleEditInvestment = (investment: any) => {
    setEditingInvestment(investment)
    setEditValue({ descricao: investment.descricao, valor: investment.valor })
  }

  const handleUpdateInvestment = async () => {
    try {
      await updateInvestment(editingInvestment.id, editValue)
      toast({ title: "Investimento atualizado!" })
      setEditingInvestment(null)
      loadData()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" })
    }
  }

  const handleDeleteInvestment = async (id: number) => {
    if (!confirm("Deseja realmente excluir este investimento?")) return
    try {
      await deleteInvestment(id)
      toast({ title: "Investimento excluído!" })
      loadData()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message, variant: "destructive" })
    }
  }

  if (!user) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          Faça login para ver seus investimentos
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resumo dos Investimentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-6 border border-dashed border-red-300 rounded-lg bg-red-50">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <p className="text-red-700 font-medium mb-2">Erro ao carregar dados</p>
            <p className="text-red-600 text-sm mb-4">{error}</p>
            <Button onClick={loadData} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Tentar Novamente
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resumo dos Investimentos</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          Carregando seus investimentos...
        </CardContent>
      </Card>
    )
  }

  const totalInvestimentos = summary?.totalInvestimentos ?? 0
  const saldo = summary?.saldo ?? 0
  const investimentosPorTipo = summary?.investimentosPorTipo ?? []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Resumo dos Investimentos</span>
          <Button variant="outline" size="sm" onClick={loadData}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Totais */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl text-center">
            <p className="text-sm text-blue-600">Total Investido</p>
            <p className="text-2xl font-bold text-blue-600">
              R$ {totalInvestimentos.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-xl text-center">
            <p className="text-sm text-green-600">Saldo Atual</p>
            <p className="text-2xl font-bold text-green-600">
              R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>
        </div>

        {/* Últimos investimentos */}
        <div className="space-y-3">
          <h4 className="font-semibold">Últimos Investimentos</h4>
          {investments.length > 0 ? (
            investments.map((investment) => (
              <div
                key={investment.id}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <div className="flex-1">
                  {editingInvestment?.id === investment.id ? (
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        value={editValue.descricao}
                        onChange={(e) => setEditValue({ ...editValue, descricao: e.target.value })}
                        className="border p-1 rounded flex-1"
                      />
                      <input
                        type="number"
                        value={editValue.valor}
                        onChange={(e) => setEditValue({ ...editValue, valor: parseFloat(e.target.value) })}
                        className="border p-1 rounded w-24"
                      />
                      <Button size="sm" onClick={handleUpdateInvestment}>Salvar</Button>
                      <Button size="sm" variant="outline" onClick={() => setEditingInvestment(null)}>Cancelar</Button>
                    </div>
                  ) : (
                    <>
                      <p className="font-medium">{investment.descricao.split(" - ")[0]}</p>
                      {investment.descricao.includes(" - ") && (
                        <p className="text-sm text-gray-500">{investment.descricao.split(" - ")[1]}</p>
                      )}
                    </>
                  )}
                </div>
                {editingInvestment?.id !== investment.id && (
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-green-600 w-24 text-right">
                      R$ {investment.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                    <Button size="sm" onClick={() => handleEditInvestment(investment)} variant="outline">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" onClick={() => handleDeleteInvestment(investment.id)} variant="destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              Nenhum investimento registrado ainda.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
