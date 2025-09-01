// service/investmentService.ts
import { useAuth } from "@/contexts/auth-context";

const API_BASE_URL = 'http://localhost:3001/api/finance';

export const useFinanceService = () => {
  const { user } = useAuth();

  const authFetch = async (url: string, options: RequestInit = {}) => {
    const token = user?.token;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    };

    const response = await fetch(`${API_BASE_URL}${url}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  };

  return {
    // INVESTIMENTOS
    createInvestment: (investmentData: any) =>
      authFetch('/investimentos', { method: 'POST', body: JSON.stringify(investmentData) }),
    updateInvestment: (id: number, investmentData: any) =>
      authFetch(`/investimentos/${id}`, { method: 'PUT', body: JSON.stringify(investmentData) }),
    deleteInvestment: (id: number) =>
      authFetch(`/investimentos/${id}`, { method: 'DELETE' }),
    getInvestments: (filters: Record<string, any> = {}) =>
      authFetch(`/investimentos?${new URLSearchParams(filters).toString()}`),

    // TIPOS DE INVESTIMENTO
    getInvestmentTypes: () => authFetch('/tipos-investimento'),
    createInvestmentType: (typeData: any) =>
      authFetch('/tipos-investimento', { method: 'POST', body: JSON.stringify(typeData) }),
    updateInvestmentType: (id: number, typeData: any) =>
      authFetch(`/tipos-investimento/${id}`, { method: 'PUT', body: JSON.stringify(typeData) }),
    deleteInvestmentType: (id: number) =>
      authFetch(`/tipos-investimento/${id}`, { method: 'DELETE' }),

    // RESUMO FINANCEIRO
    getFinancialSummary: (filters: Record<string, any> = {}) =>
      authFetch(`/resumo?${new URLSearchParams(filters).toString()}`),

    // GASTOS
    createExpense: (expenseData: any) =>
      authFetch('/gastos', { method: 'POST', body: JSON.stringify(expenseData) }),
    getExpenses: (filters: Record<string, any> = {}) =>
      authFetch(`/gastos?${new URLSearchParams(filters).toString()}`),
    updateExpense: (id: number, expenseData: any) =>
      authFetch(`/gastos/${id}`, { method: 'PUT', body: JSON.stringify(expenseData) }),
    deleteExpense: (id: number) =>
      authFetch(`/gastos/${id}`, { method: 'DELETE' }),

    // CATEGORIAS DE GASTOS
    createExpenseCategory: (categoryData: any) =>
      authFetch('/categorias', { method: 'POST', body: JSON.stringify(categoryData) }),
    getExpenseCategories: () =>
      authFetch('/categorias'),
    updateExpenseCategory: (id: number, categoryData: any) =>
      authFetch(`/categorias/${id}`, { method: 'PUT', body: JSON.stringify(categoryData) }),
    deleteExpenseCategory: (id: number) =>
      authFetch(`/categorias/${id}`, { method: 'DELETE' }),
  };
};
