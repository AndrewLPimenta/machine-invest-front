"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useAuth } from "@/contexts/auth-context"
import { AuthRedirect } from "@/components/auth-redirect"
import { SiteLayout } from "@/components/site-layout"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { motion, AnimatePresence } from "framer-motion"
import { Loader2, CheckCircle, ChevronLeft } from "lucide-react"

interface Opcao {
  id: number
  texto: string
}

interface Pergunta {
  id: number
  texto: string
  opcoes: Opcao[]
}

interface Resultado {
  idPerfil: 1 | 2 | 3
}

interface User {
  id: number
  name?: string
  email?: string
  resultados?: Resultado[]
}

export default function FormularioPage() {
  const { user, updateUser } = useAuth()
  const router = useRouter()

  const [perguntas, setPerguntas] = useState<Pergunta[]>([])
  const [respostas, setRespostas] = useState<{ [key: number]: number }>({})
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [perguntaAtual, setPerguntaAtual] = useState(0)

  useEffect(() => {
    if (!user) return

    const carregarFormulario = async () => {
      try {
        if (user.resultados?.length) {
          const perfilId = user.resultados[0]?.idPerfil
          if (perfilId) {
            const rota =
              perfilId === 1 ? "/perfil/conservador" : perfilId === 2 ? "/perfil/moderado" : "/perfil/agressivo"
            router.push(rota)
            return
          }
        }

        const res = await axios.get("http://localhost:3001/api/formulario/1")
        setPerguntas(res.data.perguntas || [])
      } catch (err) {
        console.error("Erro ao carregar formulário:", err)
        alert("Erro ao carregar formulário. Tente novamente.")
      } finally {
        setLoading(false)
      }
    }

    carregarFormulario()
  }, [user, router])

  const handleChange = (perguntaId: number, opcaoId: number) => {
    setRespostas((prev) => ({ ...prev, [perguntaId]: opcaoId }))

    if (perguntaAtual < perguntas.length - 1) {
      setTimeout(() => {
        setPerguntaAtual((prev) => prev + 1)
      }, 300) // Small delay for better UX
    }
  }

  const proximaPergunta = () => {
    if (perguntaAtual < perguntas.length - 1) {
      setPerguntaAtual((prev) => prev + 1)
    }
  }

  const perguntaAnterior = () => {
    if (perguntaAtual > 0) {
      setPerguntaAtual((prev) => prev - 1)
    }
  }

  const perguntaRespondida = perguntas[perguntaAtual] ? respostas[perguntas[perguntaAtual].id] !== undefined : false

  const progresso = perguntas.length > 0 ? ((perguntaAtual + 1) / perguntas.length) * 100 : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    if (Object.keys(respostas).length !== perguntas.length) {
      alert("Você precisa responder todas as perguntas antes de enviar.")
      setSubmitting(false)
      return
    }

    try {
      await axios.post("http://localhost:3001/api/respostas", {
        idUsuario: user?.id,
        respostas: Object.entries(respostas).map(([idPergunta, idOpcao]) => ({
          idPergunta: Number(idPergunta),
          idOpcao: Number(idOpcao),
        })),
      })

      await axios.post("http://localhost:3001/api/resultado/calcular", {
        idUsuario: user?.id,
      })

      const perfilRes = await axios.get(`http://localhost:3001/api/usuario/${user?.id}`)
      const usuarioAtualizado: User = {
        ...user,
        name: user?.name ?? perfilRes.data.name,
        email: user?.email ?? perfilRes.data.email,
        resultados: perfilRes.data ? [perfilRes.data] : [],
      }

      updateUser(usuarioAtualizado)

      const perfilId = usuarioAtualizado.resultados?.[0]?.idPerfil
      if (perfilId) {
        const rota = perfilId === 1 ? "/perfil/conservador" : perfilId === 2 ? "/perfil/moderado" : "/perfil/agressivo"
        router.push(rota)
      }
    } catch (err: any) {
      console.error("Erro ao enviar respostas:", err)
      alert(err.response?.data?.error || "Erro ao enviar respostas. Tente novamente.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AuthRedirect>
      <SiteLayout>
        <Section className="py-8 sm:py-12">
          <ResponsiveContainer>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <Card className="max-w-4xl mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl sm:text-3xl">Questionário de Perfil de Investidor</CardTitle>
                  <CardDescription>
                    Responda as perguntas abaixo para descobrir seu perfil de investidor ideal
                  </CardDescription>
                  {!loading && perguntas.length > 0 && (
                    <div className="mt-6 space-y-2">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>
                          Pergunta {perguntaAtual + 1} de {perguntas.length}
                        </span>
                        <span>{Math.round(progresso)}% concluído</span>
                      </div>
                      <Progress value={progresso} className="w-full" />
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  {loading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <span className="ml-2 text-muted-foreground">Carregando formulário...</span>
                    </div>
                  ) : !perguntas.length ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">Não há perguntas disponíveis no momento.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={perguntaAtual}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          {perguntas[perguntaAtual] && (
                            <div className="space-y-4">
                              <Label className="text-lg font-semibold block">
                                {perguntaAtual + 1}. {perguntas[perguntaAtual].texto}
                              </Label>
                              <RadioGroup
                                value={respostas[perguntas[perguntaAtual].id]?.toString() || ""}
                                onValueChange={(value) => handleChange(perguntas[perguntaAtual].id, Number(value))}
                                className="space-y-3"
                              >
                                {perguntas[perguntaAtual].opcoes.map((opcao) => (
                                  <div key={opcao.id} className="flex items-center space-x-2">
                                    <RadioGroupItem value={opcao.id.toString()} id={`opcao-${opcao.id}`} />
                                    <Label htmlFor={`opcao-${opcao.id}`} className="text-base cursor-pointer">
                                      {opcao.texto}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex justify-between items-center pt-6">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={perguntaAnterior}
                          disabled={perguntaAtual === 0}
                          className="flex items-center gap-2 bg-transparent"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>

                        <div className="flex gap-2">
                          {perguntas.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === perguntaAtual
                                  ? "bg-primary"
                                  : respostas[perguntas[index]?.id]
                                    ? "bg-green-500"
                                    : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>

                        {perguntaAtual === perguntas.length - 1 && (
                          <Button
                            type="submit"
                            disabled={submitting || Object.keys(respostas).length !== perguntas.length}
                            className="flex items-center gap-2"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Processando...
                              </>
                            ) : (
                              <>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Finalizar
                              </>
                            )}
                          </Button>
                        )}

                        {perguntaAtual < perguntas.length - 1 && <div />}
                      </div>

                      {!perguntaRespondida && (
                        <p className="text-sm text-muted-foreground text-center">
                          Selecione uma opção para avançar automaticamente
                        </p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </ResponsiveContainer>
        </Section>
      </SiteLayout>
    </AuthRedirect>
  )
}
