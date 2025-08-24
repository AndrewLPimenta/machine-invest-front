"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import Link from "next/link"

export default function CadastroPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Validações front-end
      if (!name || !email || !password || !confirmPassword) {
        throw new Error("Por favor, preencha todos os campos.")
      }

      if (password.length < 6) {
        throw new Error("A senha deve ter pelo menos 6 caracteres.")
      }

      if (password !== confirmPassword) {
        throw new Error("As senhas não coincidem.")
      }

      // Requisição para backend
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        nome: name,
        email,
        senha: password,
        confirmarSenha: confirmPassword
      })

      const data = response.data

      // Padroniza o acesso aos dados
      const userId = data?.userId || data?.data?.userId
      const token = data?.token || data?.data?.token

      if ((response.status === 201 || response.status === 200) && userId && token) {
        // Salva token e userId no localStorage
        localStorage.setItem("token", token)
        localStorage.setItem("userId", String(userId))

        // Redireciona para o formulário
        router.push(`/formulario?usuario=${userId}&form=1`)
      } else {
        throw new Error(data.message || "Erro ao cadastrar")
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
                <CardTitle className="text-2xl font-bold text-center">Cadastro</CardTitle>
                <CardDescription className="text-center">Preencha os dados abaixo para criar sua conta</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && <div className="p-3 text-sm text-white bg-red-500 rounded-md">{error}</div>}

                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" placeholder="Nome completo" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  <div className="space-y-2 relative">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-500">
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>

                  <div className="space-y-2 relative mt-4">
                    <Label htmlFor="confirmPassword">Confirmar senha</Label>
                    <Input id="confirmPassword" type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-9 text-gray-500">
                      <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Cadastrando..." : "Cadastrar"}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center text-muted-foreground">
                  Já possui uma conta?{" "}
                  <Link href="/login" className="text-primary hover:underline">Faça login</Link>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}
