"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"

interface Dica {
  texto: string
}

interface DicaResponse {
  data?: Dica
  message?: string
}

export function FinanceDicas() {
  const { user } = useAuth()
  const [dica, setDica] = useState<Dica | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDica = async () => {
      if (!user?.token) {
        setError("Usuário não autenticado. Faça login novamente.")
        setLoading(false)
        return
      }

      try {
        const response = await fetch("https://machine-back-server.onrender.com/api/dicas/dica", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`,
          },
        })

        let data: DicaResponse = {}
        try {
          data = await response.json()
        } catch {
          // Caso o backend retorne vazio ou HTML em erro
          data = {}
        }

        if (response.status === 401) {
          setError("Sessão expirada. Faça login novamente.")
          return
        }

        if (!response.ok) {
          setError(data.message || "Erro ao buscar dica")
          return
        }

        if (data.data) {
          setDica(data.data)
        } else {
          setError("Nenhuma dica disponível no momento.")
        }
      } catch (err) {
        console.error("Erro ao buscar dica:", err)
        setError("Erro de conexão com o servidor.")
      } finally {
        setLoading(false)
      }
    }

    fetchDica()
  }, [user?.token])

  if (loading) return <p>Carregando dica...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (!dica) return <p>Nenhuma dica disponível</p>

  return (
    <div className="p-3 rounded-md bg-muted">
      <p className="text-sm">{dica.texto}</p>
    </div>
  )
}
