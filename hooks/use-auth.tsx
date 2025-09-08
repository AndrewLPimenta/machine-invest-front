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
  login: (
    email: string,
    password: string,
  ) => Promise<{ success: boolean; message: string; user?: User; perfil?: string; respondeu?: boolean }>
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

  // 🔒 Carrega usuário do localStorage com validação de token
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser)

        // se não tiver token válido, não mantém o usuário
        if (parsedUser?.token) {
          setUser(parsedUser)
        } else {
          localStorage.removeItem("user")
        }
      }
    } catch (err) {
      console.error("Erro ao recuperar usuário do localStorage:", err)
      localStorage.removeItem("user")
    } finally {
      setIsLoading(false)
    }
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha: password }),
      })

      const data = await response.json()

      if (!response.ok) {
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

      return {
        success: true,
        message: data.message,
        user: userData,
        perfil: data.data.perfil,
        respondeu: data.data.respondeu,
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error)
      return { success: false, message: "Ocorreu um erro ao fazer login. Tente novamente." }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
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

      if (!response.ok) {
        return { success: false, message: data.message || "Erro no cadastro" }
      }

      const userData: User = {
        id: data.userId,
        name,
        email,
        resultados: [],
        token: data.token,
      }

      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)

      return { success: true, message: data.message }
    } catch (error) {
      console.error("Erro ao fazer cadastro:", error)
      return { success: false, message: "Ocorreu um erro ao fazer cadastro. Tente novamente." }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      if (user?.token) {
        await fetch("http://localhost:3001/api/auth/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        }).catch(() => {
          console.warn("Erro ao fazer logout no backend, mas continuando...")
        })
      }
    } catch (error) {
      console.warn("Erro ao fazer logout no backend:", error)
    } finally {
      localStorage.removeItem("user")
      setUser(null)
    }
  }

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
