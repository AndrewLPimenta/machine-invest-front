"use client"

import type React from "react"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"

export default function CadastroPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const { register } = useAuth()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simular um atraso de rede
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Validações
      if (!name || !email || !password || !confirmPassword) {
        throw new Error("Por favor, preencha todos os campos.")
      }

      if (password.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres.")
      }

      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem.")
      }

      if (!acceptTerms) {
        throw new Error("Você precisa aceitar os termos de uso e política de privacidade.")
      }

      // Simular registro
      await register(name, email, password)
      router.push("/")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ocorreu um erro ao criar sua conta.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SiteLayout hideFooter>
      <Section className="flex items-center justify-center min-h-screen py-0">
        <ResponsiveContainer className="max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Criar Conta</CardTitle>
                <CardDescription className="text-center">Preencha os dados abaixo para criar sua conta</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar senha</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={acceptTerms}
                      onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Eu aceito os{" "}
                      <Link href="/termos" className="text-primary hover:underline">
                        termos de uso
                      </Link>{" "}
                      e{" "}
                      <Link href="/privacidade" className="text-primary hover:underline">
                        política de privacidade
                      </Link>
                    </label>
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Criando conta..." : "Criar conta"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link href="/login" className="text-primary hover:underline">
                    Faça login
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}

