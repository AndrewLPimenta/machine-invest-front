"use client"

import { useState, FormEvent } from "react"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"

import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignInPage() {
  const router = useRouter()
  const { login } = useAuth()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      if (!email || !password) throw new Error("Por favor, preencha todos os campos.")

      const result = await login(email, password)

      if (result.success && result.user) {
        if (!result.respondeu) {
          router.push(`/formulario?usuario=${result.user.id}`)
        } else if (result.perfil) {
          router.push(`/perfil/${result.perfil.toLowerCase()}`)
        } else {
          router.push(`/formulario?usuario=${result.user.id}`)
        }
      } else {
        setError(result.message || "Erro ao fazer login")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro de conexão com o servidor")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SiteLayout>
      <Section>
        <ResponsiveContainer className="max-w-md mx-auto py-12">
          <Card>
            <CardHeader>
              <CardTitle>Bem-vindo de volta</CardTitle>
              <CardDescription>Entre com seu email e senha para continuar</CardDescription>
            </CardHeader>

            <CardContent>
              {error && (
                <div className="mb-4 p-2 bg-red-500 text-white rounded">{error}</div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <span>Lembrar de mim</span>
                  </label>
                  <Button variant="link" type="button">Esqueceu a senha?</Button>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </form>
            </CardContent>

            <CardFooter className="flex justify-center">
              <Button variant="outline" onClick={() => console.log("Google SignIn")}>
                Continue com Google
              </Button>
            </CardFooter>
          </Card>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}
