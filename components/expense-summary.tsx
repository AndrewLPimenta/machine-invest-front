"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useFinanceService } from "@/service/investmentService"

interface ExpenseSummaryProps {
  expenses: any[]
  totalExpenses: number
  onExpenseUpdated: () => void
  onExpenseDeleted: () => void
  financeService: ReturnType<typeof useFinanceService>
  fetchWithAuth: <T>(fn: () => Promise<T>) => Promise<T | null>
}

export function ExpenseSummary({
  expenses,
  totalExpenses,
  onExpenseUpdated,
  onExpenseDeleted,
  financeService,
  fetchWithAuth,
}: ExpenseSummaryProps) {
  const { toast } = useToast()
  const [loadingId, setLoadingId] = useState<number | null>(null)

  const handleDelete = async (id: number) => {
    if (!confirm("Tem certeza que deseja deletar este gasto?")) return
    try {
      setLoadingId(id)
      await fetchWithAuth(() => financeService.deleteExpense(id))
      toast({ title: "Sucesso", description: "Gasto deletado." })
      onExpenseDeleted()
    } catch (error: any) {
      toast({ title: "Erro", description: error.message || "Falha ao deletar gasto.", variant: "destructive" })
    } finally {
      setLoadingId(null)
    }
  }

  const handleEdit = (expense: any) => {
    // Aqui você pode abrir um modal ou preencher o form com os dados do gasto para edição
    toast({ title: "Funcionalidade", description: `Editar gasto: ${expense.descricao}` })
    onExpenseUpdated()
  }

  return (
    <>
      {/* Card de Total de Gastos */}
      <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
        <CardContent className="text-center">
          <div className="h-6 w-6 text-primary mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-primary/60 uppercase">GASTOS</p>
          <p className="text-2xl font-bold ">
            {totalExpenses.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
        </CardContent>
      </Card>

      {/* Lista de Gastos */}
      {/* <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Gastos Recentes</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {expenses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Nenhum gasto registrado</p>
          ) : (
            expenses.map((exp) => (
              <div
                key={exp.id}
                className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex-1">
                  <p className="font-medium">{exp.categoria?.nome} - {exp.descricao}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(exp.dataGasto).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <span className="text-red-600 font-semibold mr-4">
                  {exp.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(exp)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(exp.id)}
                    disabled={loadingId === exp.id}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card> */}
    </>
  )
}
