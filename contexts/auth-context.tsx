"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipo para o usuário
interface User {
  id: string
  name: string
  email: string
}

// Tipo para o contexto de autenticação
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => void
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personalizado para usar o contexto
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}

// Provedor do contexto
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  // Função de login
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simular uma requisição de login
      // TODO: Substituir por uma requisição real para o servidor
      // const response = await fetch('https://seu-servidor-api.com/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password })
      // });
      // const data = await response.json();

      // Simulação de resposta
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulação de validação
      if (email === "demo@machineinvest.com" && password === "senha123") {
        const userData = {
          id: "1",
          name: "Usuário Demo",
          email: email,
        }

        // Salvar usuário no localStorage
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData)

        setIsLoading(false)
        return { success: true, message: "Login realizado com sucesso!" }
      } else {
        setIsLoading(false)
        return { success: false, message: "Email ou senha incorretos." }
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setIsLoading(false)
      return { success: false, message: "Ocorreu um erro ao fazer login. Tente novamente." }
    }
  }

  // Função de registro
  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simular uma requisição de registro
      // TODO: Substituir por uma requisição real para o servidor
      // const response = await fetch('https://seu-servidor-api.com/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ name, email, password })
      // });
      // const data = await response.json();

      // Simulação de resposta
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulação de validação
      if (email === "demo@machineinvest.com") {
        setIsLoading(false)
        return { success: false, message: "Este email já está em uso." }
      } else {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          name: name,
          email: email,
        }

        // Salvar usuário no localStorage
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData)

        setIsLoading(false)
        return { success: true, message: "Cadastro realizado com sucesso!" }
      }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error)
      setIsLoading(false)
      return { success: false, message: "Ocorreu um erro ao fazer cadastro. Tente novamente." }
    }
  }

  // Função de logout
  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  // Valor do contexto
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

