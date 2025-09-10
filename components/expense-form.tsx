"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, DollarSign } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useFinanceService } from "@/service/investmentService"

interface ExpenseFormProps {
  onExpenseUpdated: () => void   // unifica criação/edição
  fetchWithAuth: (callback: () => Promise<any>) => Promise<any>
  financeService: ReturnType<typeof useFinanceService>
  expenseCategories: any[]
  editingExpense?: any
}

export function ExpenseForm({
  onExpenseUpdated,
  fetchWithAuth,
  financeService,
  expenseCategories,
  editingExpense
}: ExpenseFormProps) {
  const { toast } = useToast()

  const [expenseData, setExpenseData] = useState({
    valor: "",
    descricao: "",
    dataGasto: new Date().toISOString().split("T")[0],
    idCategoria: ""
  })
  const [showCustomCategory, setShowCustomCategory] = useState(false)
  const [customCategoryName, setCustomCategoryName] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (editingExpense) {
      setExpenseData({
        valor: editingExpense.valor?.toString() || "",
        descricao: editingExpense.descricao || "",
        dataGasto: editingExpense.dataGasto ? new Date(editingExpense.dataGasto).toISOString().split("T")[0] : new Date().toISOString().split("T")[0],
        idCategoria: editingExpense.idCategoria || ""
      })
    } else {
      setExpenseData({
        valor: "",
        descricao: "",
        dataGasto: new Date().toISOString().split("T")[0],
        idCategoria: ""
      })
    }
  }, [editingExpense])

  const handleAddCustomCategory = async () => {
    if (!customCategoryName.trim()) return
    try {
      await fetchWithAuth(() => financeService.createExpenseCategory({ nome: customCategoryName }))
      toast({ title: "Sucesso", description: "Categoria criada." })
      setCustomCategoryName("")
      setShowCustomCategory(false)
      onExpenseUpdated()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Falha ao criar categoria.", variant: "destructive" })
    }
  }

  const handleSaveExpense = async () => {
    if (!expenseData.valor || !expenseData.descricao) return
    setLoading(true)
    try {
      if (editingExpense) {
        await fetchWithAuth(() =>
          financeService.updateExpense(editingExpense.id, {
            valor: parseFloat(expenseData.valor),
            descricao: expenseData.descricao,
            dataGasto: expenseData.dataGasto,
            idCategoria: expenseData.idCategoria || null
          })
        )
      } else {
        await fetchWithAuth(() =>
          financeService.createExpense({
            valor: parseFloat(expenseData.valor),
            descricao: expenseData.descricao,
            dataGasto: expenseData.dataGasto,
            idCategoria: expenseData.idCategoria || null
          })
        )
      }
      setExpenseData({ valor: "", descricao: "", dataGasto: new Date().toISOString().split("T")[0], idCategoria: "" })
      onExpenseUpdated()
    } catch (err: any) {
      toast({ title: "Erro", description: err.message || "Falha ao salvar gasto.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{editingExpense ? "Editar Gasto" : "Adicionar Gasto"}</CardTitle>
        <CardDescription>Registre suas despesas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              value={expenseData.valor}
              onChange={e => setExpenseData(prev => ({ ...prev, valor: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Data</label>
            <input
              type="date"
              value={expenseData.dataGasto}
              onChange={e => setExpenseData(prev => ({ ...prev, dataGasto: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição</label>
          <input
            type="text"
            value={expenseData.descricao}
            onChange={e => setExpenseData(prev => ({ ...prev, descricao: e.target.value }))}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Categoria</label>
            <button
              type="button"
              onClick={() => setShowCustomCategory(!showCustomCategory)}
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <Plus className="h-3 w-3" />Adicionar categoria
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
              <button type="button" onClick={handleAddCustomCategory} className="px-4 py-3 bg-primary/50 rounded-lg">Adicionar</button>
              <button type="button" onClick={() => setShowCustomCategory(false)} className="px-4 py-3 bg-300 border border-primary rounded-lg">Cancelar</button>
            </div>
          ) : (
            <select
              value={expenseData.idCategoria}
              onChange={e => setExpenseData(prev => ({ ...prev, idCategoria: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Selecione uma categoria</option>
              {expenseCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nome}</option>
              ))}
            </select>
          )}
        </div>

        <Button onClick={handleSaveExpense} className="w-full bg-primary hover:bg-primary/30 active:bg-primary-700">
          <DollarSign className="h-4 w-4 mr-2" />
          {editingExpense ? "Atualizar Gasto" : "Adicionar Gasto"}
        </Button>
      </CardContent>
    </Card>
  )
}
