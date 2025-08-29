// components/expense-form.tsx
"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useFinanceService } from "@/service/investmentService"
import { Plus } from "lucide-react"
import { DollarSign } from "lucide-react"

interface ExpenseFormProps {
  onExpenseAdded: () => void
  fetchWithAuth: (callback: () => Promise<any>) => Promise<any>
  financeService: ReturnType<typeof useFinanceService>
  expenseCategories: any[]
}

export function ExpenseForm({ 
  onExpenseAdded, 
  fetchWithAuth, 
  financeService, 
  expenseCategories 
}: ExpenseFormProps) {
  const [newExpense, setNewExpense] = useState({
    valor: "",
    descricao: "",
    dataGasto: new Date().toISOString().split("T")[0],
    idCategoria: ""
  })

  const [showCustomCategory, setShowCustomCategory] = useState(false)
  const [customCategoryName, setCustomCategoryName] = useState("")

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
      onExpenseAdded()
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
      onExpenseAdded()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Gasto</CardTitle>
        <CardDescription>Registre suas despesas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              value={newExpense.valor}
              onChange={e => setNewExpense(prev => ({ ...prev, valor: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Data</label>
            <input
              type="date"
              value={newExpense.dataGasto}
              onChange={e => setNewExpense(prev => ({ ...prev, dataGasto: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição</label>
          <input
            type="text"
            value={newExpense.descricao}
            onChange={e => setNewExpense(prev => ({ ...prev, descricao: e.target.value }))}
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
              <Plus className="h-3 w-3" />
              Adicionar tipo
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
                className="px-4 py-3 bg-primary/50 rounded-lg"
              >
                Adicionar
              </button>
              <button
                type="button"
                onClick={() => setShowCustomCategory(false)}
                className="px-4 py-3 bg-300 border border-primary rounded-lg"
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
              <option value="">Selecione um tipo</option>
              {expenseCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.nome}</option>
              ))}
            </select>
          )}
        </div>

        <Button
          onClick={handleExpenseAdded}
          className="w-full bg-primary hover:bg-primary/30 active:bg-primary-700"
        >
            <DollarSign className="h-4 w-4 mr-2" />
          Adicionar Gasto
        </Button>
      </CardContent>
    </Card>
  )
}