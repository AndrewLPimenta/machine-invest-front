"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog"
import { useFinanceService } from "@/service/investmentService"
import { useAuth } from "@/contexts/auth-context"
import { RefreshCw, AlertCircle, Edit, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { InvestmentForm } from "./investment-form"

interface Investment {
  id: number
  descricao: string
  valor: number
  idTipoInvestimento: number
}

interface InvestmentType {
  id: number
  nome: string
  descricao?: string
}

interface Summary {
  totalInvestimentos: number
  saldo: number
  [key: string]: any
}

export function InvestmentSummary() {
  const { user } = useAuth()
  const financeService = useFinanceService()
  const { toast } = useToast()

  const [summary, setSummary] = useState<Summary>({ totalInvestimentos: 0, saldo: 0 })
  const [investments, setInvestments] = useState<Investment[]>([])
  const [investmentTypes, setInvestmentTypes] = useState<InvestmentType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [editingInvestment, setEditingInvestment] = useState<Investment | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Adapter para compatibilidade com InvestmentForm
  const investmentFormService = {
    getInvestmentTypes: async () => {
      const result = await financeService.getInvestmentTypes()
      return { data: result.data || [] }
    },
    createInvestmentType: async (payload: { nome: string; descricao?: string }) => {
      const result = await financeService.createInvestmentType(payload)
      return { data: result.data }
    },
    createInvestment: async (payload: any) => {
      const result = await financeService.createInvestment(payload)
      return { data: result.data }
    },
    updateInvestment: async (id: string, payload: any) => {
      const numericId = parseInt(id, 10)
      const result = await financeService.updateInvestment(numericId, payload)
      return { data: result.data }
    }
  }

  const loadData = async () => {
    if (!user?.token) return
    try {
      setLoading(true)
      setError(null)
      const [summaryResponse, investmentsResponse, typesResponse] = await Promise.all([
        financeService.getFinancialSummary(),
        financeService.getInvestments({ limit: 5 }),
        financeService.getInvestmentTypes()
      ])
      setSummary(summaryResponse?.data ?? { totalInvestimentos: 0, saldo: 0 })
      setInvestments(investmentsResponse?.data ?? [])
      setInvestmentTypes(Array.isArray(typesResponse.data) ? typesResponse.data : [])
    } catch (err: any) {
      console.error("Erro ao carregar dados:", err)
      setError(err?.message ?? "Erro ao carregar dados")
      toast({ title: "Erro", description: err?.message ?? "Erro ao carregar dados", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (user?.token) loadData()
    else setLoading(false)
  }, [user])

  const handleDeleteInvestment = async (id: number) => {
    try {
      await financeService.deleteInvestment(id)
      toast({ title: "Sucesso!", description: "Investimento deletado com sucesso!" })
      setInvestments(prev => prev.filter(inv => inv.id !== id))
      loadData()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Erro ao deletar investimento", variant: "destructive" })
    }
  }

  const handleEditInvestment = (investment: Investment) => {
    setEditingInvestment(investment)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingInvestment(null)
  }

  const handleInvestmentUpdated = async (newInvestment?: Investment) => {
    if (!newInvestment) return

    if (editingInvestment) {
      setInvestments(prev => prev.map(inv => inv.id === editingInvestment.id ? newInvestment : inv))
      setSummary(prev => ({
        ...prev,
        totalInvestimentos: (prev.totalInvestimentos - editingInvestment.valor) + newInvestment.valor
      }))
    } else {
      setInvestments(prev => [newInvestment, ...prev])
      setSummary(prev => ({
        ...prev,
        totalInvestimentos: (prev.totalInvestimentos ?? 0) + newInvestment.valor
      }))
    }

    try {
      const summaryResponse = await financeService.getFinancialSummary()
      setSummary(summaryResponse?.data ?? { totalInvestimentos: 0, saldo: 0 })
    } catch (err) {
      console.error("Erro ao atualizar resumo", err)
    }

    setIsModalOpen(false)
    setEditingInvestment(null)
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
        <CardHeader>
          <CardTitle>Resumo dos Investimentos</CardTitle>
        </CardHeader>
        <CardContent className="p-6 text-center">
          Carregando seus investimentos...
        </CardContent>
      </Card>
    )
  }

  return (
    <>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl text-center">
              <p className="text-sm text-blue-600">Total Investido</p>
              <p className="text-2xl font-bold text-blue-600">
                R$ {summary.totalInvestimentos.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-xl text-center">
              <p className="text-sm text-green-600">Saldo Atual</p>
              <p className="text-2xl font-bold text-green-600">
                R$ {summary.saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold">Últimos Investimentos</h4>
            {investments.length > 0 ? (
              investments.map((investment) => {
                const typeName = investmentTypes.find(t => t.id === investment.idTipoInvestimento)?.nome || "Sem tipo"
                return (
                  <div key={investment.id} className="flex justify-between items-center p-3 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{investment.descricao.split(" - ")[0]}</p>
                      {investment.descricao.includes(" - ") && (
                        <p className="text-sm text-gray-500">{investment.descricao.split(" - ")[1]}</p>
                      )}
                      <p className="text-xs text-gray-400 mt-1">Tipo: {typeName}</p>
                    </div>
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
                  </div>
                )
              })
            ) : (
              <p className="text-center text-gray-500 py-4">Nenhum investimento registrado ainda.</p>
            )}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <InvestmentForm
            financeService={investmentFormService} // Adapter
            fetchWithAuth={(fn) => fn().catch(() => null)}
            editingInvestment={editingInvestment}
            onInvestmentUpdated={handleInvestmentUpdated}
          />
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={handleCloseModal}>
              Cancelar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
