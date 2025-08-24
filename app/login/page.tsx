"use client"

import type React from "react"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (!email || !password) {
        throw new Error("Por favor, preencha todos os campos.")
      }

      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        senha: password
      })

      const data = response.data

      if (response.status === 200 && data.data) {
        // Salvar token e userId
        localStorage.setItem("token", data.data.token)
        localStorage.setItem("userId", data.data.user.id)

        // Redirecionar baseado no login
        if (!data.data.respondeu) {
          router.push(`/formulario?usuario=${data.data.user.id}`)
        } else if (data.data.perfil) {
          const perfil = data.data.perfil.toLowerCase()
          router.push(`/perfil/${perfil}`)
        } else {
          router.push(`/formulario?usuario=${data.data.user.id}`)
        }
      } else {
        throw new Error(data.message || "Erro ao fazer login")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro de conexão com o servidor")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SiteLayout hideFooter>
      <Section className="flex items-center justify-center min-h-screen py-0 bg-gray-50">
        <ResponsiveContainer className="max-w-md">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card className="w-full">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
                <CardDescription className="text-center">
                  Entre com seu email e senha para acessar sua conta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}

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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <Link href="/recuperar-senha" className="text-xs text-primary hover:underline">
                        Esqueceu a senha?
                      </Link>
                    </div>

                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Entrando..." : "Entrar"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-muted-foreground">
                  Não tem uma conta?{" "}
                  <Link href="/cadastro" className="text-primary hover:underline">
                    Cadastre-se
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
