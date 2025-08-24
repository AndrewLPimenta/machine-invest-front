"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { LoadingSkeleton } from "./loading-skeleton"

interface AuthRedirectProps {
  children: React.ReactNode
  redirectTo?: string
}

export function AuthRedirect({ children, redirectTo = "/login" }: AuthRedirectProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push(redirectTo)
    }
  }, [isAuthenticated, isLoading, router, redirectTo])

  // Mostra loading enquanto verifica autenticação
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSkeleton />
      </div>
    )
  }

  // Se não estiver autenticado, não renderiza nada (será redirecionado)
  if (!isAuthenticated) {
    return null
  }

  // Se estiver autenticado, renderiza os children
  return <>{children}</>
}

