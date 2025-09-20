"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Interfaces
interface Resultado {
  idPerfil: 1 | 2 | 3
  pontuacao: number
  percentual: number
  dataClassificacao: string
}

interface User {
  id: number
  name: string
  email: string
  resultados?: Resultado[]
  perfil?: "conservador" | "moderado" | "arrojado"
  token?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; message: string; user?: User; perfil?: string; respondeu?: boolean }>
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; message: string }>
  logout: () => Promise<void>
  updateUser: (user: User) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Carrega usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("https://machine-back-server.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      })

      const data = await response.json()

      if (!response.ok) {
        setIsLoading(false)
        return { success: false, message: data.message || "Email ou senha incorretos." }
      }

      const userData: User = {
        id: data.data.user.id,
        name: data.data.user.nome,
        email: data.data.user.email,
        perfil: data.data.perfil as "conservador" | "moderado" | "arrojado" | undefined,
        token: data.data.token,
      }

      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)

      setIsLoading(false)
      return {
        success: true,
        message: data.message,
        user: userData,
        perfil: data.data.perfil,
        respondeu: data.data.respondeu
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      setIsLoading(false)
      return { success: false, message: "Ocorreu um erro ao fazer login. Tente novamente." }
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("https://machine-back-server.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: name,
          email,
          senha: password,
          confirmarSenha: password,
        }),
      })

      const data = await response.json()
      console.log('Resposta do registro:', data); // Para debug

      if (!response.ok) {
        setIsLoading(false)
        return { success: false, message: data.message || "Erro no cadastro" }
      }

      // CORREÇÃO: O registro retorna estrutura diferente do login
      const userData: User = {
        id: data.userId, // ← data.userId (não data.data.userId)
        name,
        email,
        resultados: [],
        token: data.token, // ← data.token (não data.data.token)
      }

      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)
      setIsLoading(false)
      return { success: true, message: data.message }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error)
      setIsLoading(false)
      return { success: false, message: "Ocorreu um erro ao fazer cadastro. Tente novamente." }
    }
  }

  const logout = async () => {
    try {
      // Se tiver token, tenta invalidar no backend
      if (user?.token) {
        await fetch("https://machine-back-server.onrender.com/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
          },
        }).catch(() => {
          // Ignora erros de logout no backend
          console.log("Erro ao fazer logout no backend, mas continuando...")
        })
      }
    } catch (error) {
      // Ignora erros de logout no backend
      console.log("Erro ao fazer logout no backend, mas continuando...")
    } finally {
      // Sempre limpa o estado local
      localStorage.removeItem("user")
      setUser(null)
    }
  }

  // Atualiza usuário completo, incluindo resultados e perfil
  const updateUser = (updatedUser: User) => {
    setUser(updatedUser)
    localStorage.setItem("user", JSON.stringify(updatedUser))
  }

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    updateUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}