"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DollarSign, Plus } from "lucide-react"
import { useInvestmentService } from "@/service/investmentService"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

interface InvestmentFormProps {
  onInvestmentAdded: () => void
}

export function InvestmentForm({ onInvestmentAdded }: InvestmentFormProps) {
  const { user } = useAuth()
  const { toast } = useToast()
  const router = useRouter()
  const { getInvestmentTypes, createInvestmentType, createInvestment } = useInvestmentService()

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

  // Carrega tipos de investimento
  useEffect(() => {
    loadInvestmentTypes()
  }, [])

  const loadInvestmentTypes = async () => {
    if (!user?.token) return
    try {
      const response = await getInvestmentTypes()
      // Supondo que response = { data: [...] }
      setInvestmentTypes(Array.isArray(response.data) ? response.data : [])
    } catch (error: any) {
      console.error("Erro ao carregar tipos de investimento:", error)
      setInvestmentTypes([]) // garante que seja sempre um array
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
      await createInvestmentType({
        nome: customTypeName,
        descricao: "Tipo de investimento personalizado",
      })
      toast({
        title: "Tipo adicionado!",
        description: "Novo tipo de investimento criado com sucesso.",
      })
      setCustomTypeName("")
      setShowCustomType(false)
      loadInvestmentTypes()
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Não foi possível criar o tipo de investimento.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user?.token) {
      toast({
        title: "Erro",
        description: "Usuário não autenticado",
        variant: "destructive",
      })
      router.push("/login")
      return
    }

    setLoading(true)
    try {
      await createInvestment({
        ...formData,
        valor: parseFloat(formData.valor),
        idTipoInvestimento: formData.idTipoInvestimento || null,
      })

      toast({
        title: "Sucesso!",
        description: "Investimento registrado com sucesso.",
      })

      setFormData({
        valor: "",
        descricao: "",
        idTipoInvestimento: "",
        dataInvestimento: new Date().toISOString().split("T")[0],
      })

      onInvestmentAdded()
    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message || "Não foi possível registrar o investimento.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Registrar Novo Investimento</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Valor e Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Valor (R$)</label>
            <input
              type="number"
              step="0.01"
              placeholder="1000,00"
              className="w-full p-3 border rounded-lg"
              value={formData.valor}
              onChange={(e) => setFormData({ ...formData, valor: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Data</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              value={formData.dataInvestimento}
              onChange={(e) => setFormData({ ...formData, dataInvestimento: e.target.value })}
              required
            />
          </div>
        </div>

        {/* Descrição */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Descrição</label>
          <input
            type="text"
            placeholder="Ex: Tesouro Direto IPCA+ 2035"
            className="w-full p-3 border rounded-lg"
            value={formData.descricao}
            onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            required
          />
        </div>

        {/* Tipo de investimento */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Tipo de Investimento</label>
            <button
              type="button"
              onClick={() => setShowCustomType(!showCustomType)}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
            >
              <Plus className="h-3 w-3" />
              Adicionar tipo
            </button>
          </div>

          {showCustomType ? (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Nome do novo tipo"
                className="flex-1 p-3 border rounded-lg"
                value={customTypeName}
                onChange={(e) => setCustomTypeName(e.target.value)}
              />
              <button
                type="button"
                onClick={handleAddCustomType}
                className="px-4 py-3 bg-blue-600 text-white rounded-lg"
              >
                Adicionar
              </button>
              <button
                type="button"
                onClick={() => setShowCustomType(false)}
                className="px-4 py-3 bg-gray-300 rounded-lg"
              >
                Cancelar
              </button>
            </div>
          ) : (
            <select
              className="w-full p-3 border rounded-lg"
              value={formData.idTipoInvestimento}
              onChange={(e) =>
                setFormData({ ...formData, idTipoInvestimento: e.target.value })
              }
            >
              <option value="">Selecione um tipo</option>
              {investmentTypes.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.nome}
                </option>
              ))}
            </select>
          )}
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={loading}
        >
          <DollarSign className="h-4 w-4 mr-2" />
          {loading ? "Registrando..." : "Registrar Investimento"}
        </Button>
      </form>
    </div>
  )
}
