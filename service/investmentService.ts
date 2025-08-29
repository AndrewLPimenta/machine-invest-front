// frontend/src/services/investmentService.ts
"use client"

import { useAuth } from "@/contexts/auth-context"

const API_BASE_URL = 'http://localhost:3001/api/finance'

export const useInvestmentService = () => {
  const { user } = useAuth()

  // Função para requisições autenticadas
  const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = user?.token
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    }

    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return response.json()
  }

  return {
    // Criar investimento
    createInvestment: (investmentData: any) =>
      authFetch('/investimentos', {
        method: 'POST',
        body: JSON.stringify(investmentData),
      }),

    // Obter investimentos
    getInvestments: (filters: Record<string, any> = {}) => {
      const params = new URLSearchParams(filters).toString()
      return authFetch(`/investimentos?${params}`)
    },

    // Obter tipos de investimento
    getInvestmentTypes: () => authFetch('/tipos-investimento'),

    // Obter resumo financeiro
    getFinancialSummary: (filters: Record<string, any> = {}) => {
      const params = new URLSearchParams(filters).toString()
      return authFetch(`/resumo?${params}`)
    },

    // Criar tipo de investimento
    createInvestmentType: (typeData: any) =>
      authFetch('/tipos-investimento', {
        method: 'POST',
        body: JSON.stringify(typeData),
      }),
  }
}
