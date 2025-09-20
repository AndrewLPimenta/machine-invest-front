"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/contexts/auth-context"

interface Dica {
  texto: string
}

interface DicaResponse {
  data: Dica
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
        setError("Usuário não autenticado")
        setLoading(false)
        return
      }

      try {
        const response = await fetch("https://machine-back-server.onrender.com/api/dicas/dica", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
          },
        })

        const data: DicaResponse = await response.json()
        console.log("Resposta do backend:", data)

        if (!response.ok) {
          setError(data.message || "Erro ao buscar dica")
        } else {
          setDica(data.data || null)
        }
      } catch (err) {
        console.error("Erro ao buscar dica:", err)
        setError("Erro ao buscar dica")
      } finally {
        setLoading(false)
      }
    }

    fetchDica()
  }, [user?.token])

  if (loading) return <p>Carregando dica...</p>
  if (error) return <p>Erro: {error}</p>
  if (!dica) return <p>Nenhuma dica disponível</p>

  return <div>{dica.texto}</div>
}
