// components/investment-form.tsx
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DollarSign, Plus } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { useFinanceService } from "@/service/investmentService"

export interface InvestmentFormProps {
  onInvestmentAdded: () => void
  financeService: ReturnType<typeof useFinanceService>
  fetchWithAuth: <T>(fn: () => Promise<T>) => Promise<T | null>
}

export function InvestmentForm({ onInvestmentAdded, financeService, fetchWithAuth }: InvestmentFormProps) {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()

  const [investmentTypes, setInvestmentTypes] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [showCustomType, setShowCustomType] = useState(false)
  const [customTypeName, setCustomTypeName] = useState("")
  const [formData, setFormData] = useState({
    valor: "",
    descricao: "",
    idTipoInvestimento: "",
    dataInvestimento: new Date().toISOString().split("T")[0]
  })

  useEffect(() => {
    loadInvestmentTypes()
  }, [])

  const loadInvestmentTypes = async () => {
    if (!user?.token) return
    try {
      const response = await financeService.getInvestmentTypes()
      setInvestmentTypes(Array.isArray(response.data) ? response.data : [])
    } catch (error: any) {
      console.error(error)
      if (error.message.includes("401")) {
        toast({
          title: "Sessão expirada",
          description: "Faça login novamente.",
          variant: "destructive",
        })
        router.push("/login")
      }
    }
  }

  const handleAddCustomType = async () => {
    if (!customTypeName.trim()) return
    try {
      await fetchWithAuth(() =>
        financeService.createInvestmentType({
          nome: customTypeName,
          descricao: "Tipo de investimento personalizado",
        })
      )
      toast({ title: "Tipo adicionado!", description: "Novo tipo de investimento criado." })
      setCustomTypeName("")
      setShowCustomType(false)
      loadInvestmentTypes()
    } catch (error: any) {
      toast({ title: "Erro", description: error.message || "Não foi possível criar o tipo.", variant: "destructive" })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user?.token) return router.push("/login")
    setLoading(true)
    try {
      await fetchWithAuth(() =>
        financeService.createInvestment({
          ...formData,
          valor: parseFloat(formData.valor),
          idTipoInvestimento: formData.idTipoInvestimento || null,
        })
      )
      toast({ title: "Sucesso!", description: "Investimento registrado com sucesso." })
      setFormData({ valor: "", descricao: "", idTipoInvestimento: "", dataInvestimento: new Date().toISOString().split("T")[0] })
      onInvestmentAdded()
    } catch (error: any) {
      toast({ title: "Erro", description: error.message || "Falha ao registrar investimento.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label>Valor (R$)</label>
          <input type="number" step="0.01" value={formData.valor} onChange={e => setFormData({ ...formData, valor: e.target.value })} required className="w-full p-3 border rounded-lg" />
        </div>
        <div className="space-y-2">
          <label>Data</label>
          <input type="date" value={formData.dataInvestimento} onChange={e => setFormData({ ...formData, dataInvestimento: e.target.value })} required className="w-full p-3 border rounded-lg" />
        </div>
      </div>

      <div className="space-y-2">
        <label>Descrição</label>
        <input type="text" value={formData.descricao} onChange={e => setFormData({ ...formData, descricao: e.target.value })} required className="w-full p-3 border rounded-lg" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label>Tipo de Investimento</label>
          <button type="button" onClick={() => setShowCustomType(!showCustomType)} className="text-sm text-blue-600 flex items-center gap-1"><Plus className="h-3 w-3" />Adicionar tipo</button>
        </div>
        {showCustomType ? (
          <div className="flex gap-2">
            <input type="text" value={customTypeName} onChange={e => setCustomTypeName(e.target.value)} placeholder="Nome do novo tipo" className="flex-1 p-3 border rounded-lg" />
            <button type="button" onClick={handleAddCustomType} className="px-4 py-3 bg-blue-600 text-white rounded-lg">Adicionar</button>
            <button type="button" onClick={() => setShowCustomType(false)} className="px-4 py-3 bg-gray-300 rounded-lg">Cancelar</button>
          </div>
        ) : (
          <select value={formData.idTipoInvestimento} onChange={e => setFormData({ ...formData, idTipoInvestimento: e.target.value })} className="w-full p-3 border rounded-lg">
            <option value="">Selecione um tipo</option>
            {investmentTypes.map(type => <option key={type.id} value={type.id}>{type.nome}</option>)}
          </select>
        )}
      </div>

      <Button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700">
        <DollarSign className="h-4 w-4 mr-2" />
        {loading ? "Registrando..." : "Registrar Investimento"}
      </Button>
    </form>
  )
}
