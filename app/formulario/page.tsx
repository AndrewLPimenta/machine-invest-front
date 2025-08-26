'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useAuth } from '@/contexts/auth-context'
import { AuthRedirect } from '@/components/auth-redirect'
import { SiteLayout } from '@/components/site-layout'
import { Section } from '@/components/section'
import { ResponsiveContainer } from '@/components/responsive-container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, CheckCircle, ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'

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
  id: number // obrigatório
  name?: string
  email?: string
  resultados?: Resultado[]
  perfil?: "conservador" | "moderado" | "arrojado"
  token?: string
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
              perfilId === 1
                ? '/perfil/conservador'
                : perfilId === 2
                ? '/perfil/moderado'
                : '/perfil/agressivo'
            router.push(rota)
            return
          }
        }

        const res = await axios.get('http://localhost:3001/api/formulario/1')
        setPerguntas(res.data.perguntas || [])
      } catch (err) {
        console.error('Erro ao carregar formulário:', err)
        alert('Erro ao carregar formulário. Tente novamente.')
      } finally {
        setLoading(false)
      }
    }

    carregarFormulario()
  }, [user, router])

  const handleChange = (perguntaId: number, opcaoId: number) => {
    setRespostas((prev) => ({ ...prev, [perguntaId]: opcaoId }))
    if (perguntaAtual < perguntas.length - 1) setTimeout(() => setPerguntaAtual((prev) => prev + 1), 300)
  }

  const proximaPergunta = () => {
    if (perguntaAtual < perguntas.length - 1) setPerguntaAtual((prev) => prev + 1)
  }

  const perguntaAnterior = () => {
    if (perguntaAtual > 0) setPerguntaAtual((prev) => prev - 1)
  }

  const perguntaRespondida =
    perguntas[perguntaAtual] ? respostas[perguntas[perguntaAtual].id] !== undefined : false

  const progresso = perguntas.length > 0 ? ((perguntaAtual + 1) / perguntas.length) * 100 : 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    if (!user?.id) {
      alert('Usuário não autenticado.')
      setSubmitting(false)
      return
    }

    if (Object.keys(respostas).length !== perguntas.length) {
      alert('Você precisa responder todas as perguntas antes de enviar.')
      setSubmitting(false)
      return
    }

    try {
      await axios.post('http://localhost:3001/api/respostas', {
        idUsuario: user.id,
        respostas: Object.entries(respostas).map(([idPergunta, idOpcao]) => ({
          idPergunta: Number(idPergunta),
          idOpcao: Number(idOpcao),
        })),
      })

      const resCalculo = await axios.post('http://localhost:3001/api/resultado/calcular', {
        idUsuario: user.id,
      })
      const perfilId: 1 | 2 | 3 | null = resCalculo.data?.perfilId ?? null
      if (!perfilId) throw new Error('Não foi possível determinar o perfil.')

      // ✅ Garantindo que id existe
      const usuarioAtualizado: User = {
        ...user,
        id: user.id,
        resultados: [{ idPerfil: perfilId }],
      }
      updateUser(usuarioAtualizado)

      const rota =
        perfilId === 1 ? '/perfil/conservador' : perfilId === 2 ? '/perfil/moderado' : '/perfil/agressivo'
      router.push(rota)
    } catch (err: any) {
      console.error('Erro ao enviar respostas ou calcular perfil:', err)
      alert(err.response?.data?.error || err.message || 'Erro ao finalizar o formulário.')
    } finally {
      setSubmitting(false)
    }
  }

  if (!user) return null // evita renderizar antes do auth

  return (
    <AuthRedirect>
      <SiteLayout>
        <Section className="min-h-screen py-8 sm:py-16 flex items-center">
          <ResponsiveContainer className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="max-w-2xl mx-auto"
            >
              <Card className="rounded-2xl overflow-hidden">
                <CardHeader className="text-center py-6 sm:py-8">
                  <div className="flex justify-center mb-3">
                    <div className="p-2 rounded-full">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <CardTitle className="text-xl sm:text-3xl font-bold mb-2 leading-tight">
                    Descubra Seu Perfil de Investidor
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Responda algumas perguntas rápidas e descubra qual estratégia de investimento combina melhor com você
                  </CardDescription>
                  {!loading && perguntas.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium">
                          Pergunta {perguntaAtual + 1} de {perguntas.length}
                        </span>
                        <span className="font-medium">{Math.round(progresso)}% concluído</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${progresso}%` }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="p-4 sm:p-8">
                  {loading ? (
                    <div className="flex flex-col items-center justify-center py-12 space-y-4">
                      <Loader2 className="h-10 w-10 animate-spin" />
                      <span className="text-base font-medium">Carregando questionário...</span>
                    </div>
                  ) : !perguntas.length ? (
                    <div className="text-center py-12">
                      <p className="text-base">Não há perguntas disponíveis no momento.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={perguntaAtual}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.4, ease: 'easeOut' }}
                          className="space-y-6"
                        >
                          {perguntas[perguntaAtual] && (
                            <div className="space-y-4">
                              <div className="bg-muted p-4 rounded-xl border">
                                <Label className="text-lg sm:text-xl font-semibold leading-relaxed block">
                                  {perguntaAtual + 1}. {perguntas[perguntaAtual].texto}
                                </Label>
                              </div>
                              <RadioGroup
                                value={respostas[perguntas[perguntaAtual].id]?.toString() || ''}
                                onValueChange={(value) =>
                                  handleChange(perguntas[perguntaAtual].id, Number(value))
                                }
                                className="space-y-3"
                              >
                                {perguntas[perguntaAtual].opcoes.map((opcao, index) => (
                                  <motion.div
                                    key={opcao.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.3 }}
                                    className="group"
                                  >
                                    <div className="flex items-start space-x-3 p-3 rounded-lg border-2 hover:bg-muted/50 transition-all duration-200 cursor-pointer">
                                      <RadioGroupItem
                                        value={opcao.id.toString()}
                                        id={`opcao-${opcao.id}`}
                                        className="mt-1"
                                      />
                                      <Label
                                        htmlFor={`opcao-${opcao.id}`}
                                        className="text-sm sm:text-base cursor-pointer leading-relaxed flex-1 transition-colors"
                                      >
                                        {opcao.texto}
                                      </Label>
                                    </div>
                                  </motion.div>
                                ))}
                              </RadioGroup>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      <div className="flex flex-col sm:flex-row justify-between items-center pt-6 space-y-4 sm:space-y-0">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={perguntaAnterior}
                          disabled={perguntaAtual === 0}
                          className="flex items-center gap-2 px-4 py-2 text-sm font-medium order-2 sm:order-1 bg-transparent"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          Anterior
                        </Button>

                        <div className="flex gap-2 order-1 sm:order-2">
                          {perguntas.map((_, index) => (
                            <motion.div
                              key={index}
                              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                index === perguntaAtual
                                  ? 'bg-primary scale-125'
                                  : respostas[perguntas[index]?.id]
                                  ? 'bg-green-500'
                                  : 'bg-muted-foreground/30'
                              }`}
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                            />
                          ))}
                        </div>

                        {perguntaAtual < perguntas.length - 1 ? (
                          <Button
                            type="button"
                            onClick={proximaPergunta}
                            disabled={!perguntaRespondida}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium order-3"
                          >
                            Próxima Pergunta
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            disabled={submitting || Object.keys(respostas).length !== perguntas.length}
                            className="flex items-center gap-2 px-6 py-2 text-sm font-semibold order-3"
                          >
                            {submitting ? (
                              <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Processando...
                              </>
                            ) : (
                              <>
                                <CheckCircle className="h-4 w-4" />
                                Finalizar
                              </>
                            )}
                          </Button>
                        )}
                      </div>

                      {!perguntaRespondida && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-center bg-muted p-3 rounded-lg border"
                        >
                          💡 Selecione uma opção para avançar automaticamente ou clique em "Próxima Pergunta"
                        </motion.p>
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
