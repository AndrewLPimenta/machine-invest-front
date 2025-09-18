"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, DollarSign } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface InvestmentType {
  id: string
  nome: string
  descricao?: string
}

interface Investment {
  id: string
  valor: number
  descricao: string
  idTipoInvestimento?: string
  dataInvestimento: string
}

interface InvestmentFormProps {
  onInvestmentUpdated: (newInvestment?: Investment) => void
  fetchWithAuth: <T>(fn: () => Promise<T>) => Promise<T | null>
  financeService: {
    getInvestmentTypes: () => Promise<{ data: InvestmentType[] }>
    createInvestmentType: (payload: { nome: string; descricao?: string }) => Promise<{ data: InvestmentType }>
    createInvestment: (payload: Omit<Investment, "id">) => Promise<{ data: Investment }>
    updateInvestment: (id: string, payload: Partial<Investment>) => Promise<{ data: Investment }>
  }
  editingInvestment?: Investment
}

interface InvestmentFormProps {
  onInvestmentUpdated: (newInvestment?: Investment) => void
  fetchWithAuth: <T>(fn: () => Promise<T>) => Promise<T | null>
  financeService: {
    getInvestmentTypes: () => Promise<{ data: InvestmentType[] }>
    createInvestmentType: (payload: { nome: string; descricao?: string }) => Promise<{ data: InvestmentType }>
    createInvestment: (payload: Omit<Investment, "id">) => Promise<{ data: Investment }>
    updateInvestment: (id: string, payload: Partial<Investment>) => Promise<{ data: Investment }>
  }
  editingInvestment?: Investment
}

export function InvestmentForm({
  onInvestmentUpdated,
  fetchWithAuth,
  financeService,
  editingInvestment
}: InvestmentFormProps) {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    valor: "",
    descricao: "",
    idTipoInvestimento: "",
    dataInvestimento: new Date().toISOString().split("T")[0]
  })
  const [investmentTypes, setInvestmentTypes] = useState<InvestmentType[]>([])
  const [showCustomType, setShowCustomType] = useState(false)
  const [customTypeName, setCustomTypeName] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => { loadInvestmentTypes() }, [])
  useEffect(() => {
    if (editingInvestment) {
      setFormData({
        valor: editingInvestment.valor?.toString() || "",
        descricao: editingInvestment.descricao || "",
        dataInvestimento: editingInvestment.dataInvestimento || new Date().toISOString().split("T")[0],
        idTipoInvestimento: editingInvestment.idTipoInvestimento || ""
      })
    }
  }, [editingInvestment])

  const loadInvestmentTypes = async () => {
    try {
      const res = await financeService.getInvestmentTypes()
      setInvestmentTypes(res?.data ?? [])
    } catch (err: any) {
      toast({ title: "Erro", description: err?.message || "Não foi possível carregar tipos.", variant: "destructive" })
    }
  }

  const handleAddCustomType = async () => {
    if (!customTypeName.trim()) return
    try {
      const newType = await fetchWithAuth(() =>
        financeService.createInvestmentType({ nome: customTypeName, descricao: "Tipo personalizado" })
      )
      toast({ title: "Sucesso", description: "Tipo de investimento criado.", variant: "default" })
      setCustomTypeName("")
      setShowCustomType(false)
      loadInvestmentTypes()
    } catch (err: any) {
      toast({ title: "Erro", description: err?.message || "Não foi possível criar tipo.", variant: "destructive" })
    }
  }

  const handleSaveInvestment = async () => {
    if (!formData.valor || !formData.descricao) return
    setLoading(true)
    try {
      let savedInvestment
      const payload = {
        valor: parseFloat(formData.valor),
        descricao: formData.descricao,
        dataInvestimento: formData.dataInvestimento,
        idTipoInvestimento: formData.idTipoInvestimento || undefined
      }

      if (editingInvestment) {
        savedInvestment = await fetchWithAuth(() =>
          financeService.updateInvestment(editingInvestment.id, payload)
        )
      } else {
        savedInvestment = await fetchWithAuth(() =>
          financeService.createInvestment(payload)
        )
      }

      if (savedInvestment?.data) {
        setFormData({ valor: "", descricao: "", idTipoInvestimento: "", dataInvestimento: new Date().toISOString().split("T")[0] })
        onInvestmentUpdated(savedInvestment.data)
        toast({ 
          title: "Sucesso", 
          description: `Investimento ${editingInvestment ? "atualizado" : "adicionado"} com sucesso.`, 
          variant: "default" 
        })
      }
    } catch (err: any) {
      toast({ title: "Erro", description: err?.message || "Falha ao salvar investimento.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{editingInvestment ? "Editar Investimento" : "Adicionar Investimento"}</CardTitle>
        <CardDescription>Registre seus aportes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Valor (R$)</label>
          <input
            type="number"
            step="0.01"
            value={formData.valor}
            onChange={e => setFormData(prev => ({ ...prev, valor: e.target.value }))}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição</label>
          <input
            type="text"
            value={formData.descricao}
            onChange={e => setFormData(prev => ({ ...prev, descricao: e.target.value }))}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Tipo de Investimento</label>
            <button type="button" onClick={() => setShowCustomType(!showCustomType)} className="flex items-center gap-1 text-sm text-primary hover:underline">
              <Plus className="h-3 w-3" />Adicionar tipo
            </button>
          </div>

          {showCustomType ? (
            <div className="flex gap-2">
              <input
                type="text"
                value={customTypeName}
                onChange={e => setCustomTypeName(e.target.value)}
                placeholder="Nome do tipo"
                className="flex-1 p-3 border rounded-lg"
              />
              <button type="button" onClick={handleAddCustomType} className="px-4 py-3 bg-primary/50 rounded-lg">Adicionar</button>
              <button type="button" onClick={() => setShowCustomType(false)} className="px-4 py-3 bg-gray-300 border border-primary rounded-lg">Cancelar</button>
            </div>
          ) : (
            <select
              value={formData.idTipoInvestimento}
              onChange={e => setFormData(prev => ({ ...prev, idTipoInvestimento: e.target.value }))}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Selecione um tipo</option>
              {investmentTypes.map(type => <option key={type.id} value={type.id}>{type.nome}</option>)}
            </select>
          )}
        </div>

        <Button 
          onClick={handleSaveInvestment} 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/30 active:bg-primary-700"
        >
          <DollarSign className="h-4 w-4 mr-2" />
          {loading ? "Salvando..." : editingInvestment ? "Atualizar Investimento" : "Adicionar Investimento"}
        </Button>
      </CardContent>
    </Card>
  )
}