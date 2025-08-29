"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { useFinanceService } from "@/service/investmentService"
import { useAuth } from "@/contexts/auth-context"
import { RefreshCw, AlertCircle } from "lucide-react"

export function InvestmentSummary() {
  const { user } = useAuth()
  const { getFinancialSummary, getInvestments } = useFinanceService()

  const [summary, setSummary] = useState<any>(null)
  const [investments, setInvestments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadData = async () => {
    if (!user?.token) return
    try {
      setLoading(true)
      setError(null)

      const [summaryResponse, investmentsResponse] = await Promise.all([
        getFinancialSummary(),
        getInvestments({ limit: 5 }),
      ])

      // Garante que sempre será um objeto e array
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

        {/* Distribuição por tipo */}
        {investimentosPorTipo.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-semibold">Distribuição por Tipo</h4>
            {investimentosPorTipo.map((item: any, index: number) => {
              const valor = item._sum?.valor ?? 0
              const percentual = totalInvestimentos ? (valor / totalInvestimentos) * 100 : 0
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">
                      {item.idTipoInvestimento ?? "Sem tipo"}
                    </span>
                    <span className="text-sm font-bold">
                      R$ {valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <Progress value={percentual} className="h-2" />
                </div>
              )
            })}
          </div>
        )}

        {/* Últimos investimentos */}
        <div className="space-y-3">
          <h4 className="font-semibold">Últimos Investimentos</h4>
          {investments.length > 0 ? (
            investments.map((investment) => (
              <div
                key={investment.id}
                className="flex justify-between items-center p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{investment.descricao}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(investment.dataInvestimento).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <p className="font-bold text-green-600">
                  R$ {investment.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
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
