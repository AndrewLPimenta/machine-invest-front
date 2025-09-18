// app/perfil/chat-ia/page.tsx
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { MachineIAChatbot } from "@/components/machine-ia-chatbot"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, ArrowLeft, Shield } from "lucide-react"
import Link from "next/link"
import { AuthRedirect } from "@/components/auth-redirect"
import { PageLayout } from "@/components/page-layout"
export default function ChatIAPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth()
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Redireciona se não estiver autenticado
  useEffect(() => {
    if (!authLoading && !isAuthenticated && isClient) {
      router.push("/login?redirect=/perfil/chat-ia")
    }
  }, [isAuthenticated, authLoading, router, isClient])

  // Mostra loading enquanto verifica autenticação
  if (authLoading || !isClient) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-lg text-muted-foreground">Verificando autenticação...</p>
        </div>
      </div>
    )
  }

  // Se não estiver autenticado, não renderiza o conteúdo
  if (!isAuthenticated) {
    return null
  }

  return (
    
    <AuthRedirect>
    <PageLayout>
    <div className="container max-w-6xl py-6">
      <div className="flex flex-col gap-6">      
            <MachineIAChatbot />
        <Button variant="outline" size="icon" asChild>
            <Link href="/perfil/conservador">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
      </div>
    </div>
    </PageLayout>
    </AuthRedirect>
  )
}