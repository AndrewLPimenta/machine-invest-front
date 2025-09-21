"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Send, Bot, User, Loader2 } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/auth-context" // Ajuste o caminho conforme necessário

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
}

export function MachineIAChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Olá! Eu sou a Machine IA. Como posso ajudá-lo hoje?",
      sender: "ai",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const { isAuthenticated } = useAuth()
  const pathname = usePathname()

  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Verifica se está em uma página privada (dentro de /perfil)
  const isPrivatePage = pathname?.startsWith("/perfil")

  // Contador de perguntas para usuários não autenticados
  const [questionCount, setQuestionCount] = useState(() => {
    // Recupera o contador do localStorage se existir
    if (typeof window !== 'undefined') {
      const savedCount = localStorage.getItem('aiQuestionCount')
      return savedCount ? parseInt(savedCount) : 0
    }
    return 0
  })

  // Salva o contador no localStorage sempre que mudar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('aiQuestionCount', questionCount.toString())
    }
  }, [questionCount])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    // Se não estiver autenticado e não estiver em página privada, verifica o limite
    if (!isAuthenticated && !isPrivatePage && questionCount >= 3) {
      setShowLoginDialog(true)
      return
    }

    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")

    // Incrementa o contador de perguntas para usuários não autenticados fora de páginas privadas
    if (!isAuthenticated && !isPrivatePage) {
      setQuestionCount(prev => prev + 1)
    }

    setIsLoading(true)

    try {
      const response = await fetch("https://machine-back-server.onrender.com/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: inputMessage }),
      })

      const data = await response.json()

      if (response.ok && data.reply) {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.reply,
          sender: "ai",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiMessage])
      } else {
        throw new Error("Erro na resposta da API")
      }
    } catch {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.",
        sender: "ai",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleFocus = () => {
    // Garante que o campo fique visível ao abrir o teclado
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
      scrollToBottom()
    }, 100)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <>
      <Card
        className="
    w-full max-w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl
    h-[80vh] sm:h-[75vh] md:h-[calc(90dvh-2rem)]
    flex flex-col overflow-hidden
    rounded-xl sm:rounded-2xl md:rounded-3xl
    border border-white/20 dark:border-slate-500/20
    bg-white/10 dark:bg-slate-900/20
    backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.25)]
  "
      >
        <CardHeader
          className="
            shrink-0 px-4 sm:px-6 py-3 sm:py-4
            border-b border-white/20 dark:border-slate-500/20
           bg-background/50 dark:bg-slate-800/50
          "
        >
          <CardTitle className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-border/20 dark:border-slate-600/30">
                <AvatarImage src="/ia-logo.png" alt="Machine IA" />
                <AvatarFallback className="bg-muted text-muted-foreground dark:bg-slate-600 dark:text-slate-300">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-background dark:border-slate-800" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-semibold text-foreground dark:text-slate-100">
                Machine IA
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground font-normal dark:text-slate-400">
                Assistente de Investimentos
              </span>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          <ScrollArea
            ref={scrollAreaRef}
            className="flex-1 px-4 sm:px-6 py-4 sm:py-6"
          >
            <div className="space-y-6 max-w-3xl mx-auto">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                    } animate-in fade-in-0 slide-in-from-bottom-2 duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {message.sender === "ai" && (
                    <Avatar className="h-8 w-8 mt-1 shrink-0">
                      <AvatarImage src="/ia-logo.png" alt="Machine IA" />
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs dark:bg-slate-600 dark:text-slate-300">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] ${message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-3xl rounded-br-lg dark:bg-primary-600"
                      : "bg-muted/50 text-foreground rounded-3xl rounded-bl-lg border border-border/30 dark:bg-slate-700/60 dark:text-slate-100 dark:border-slate-600/40"
                      } px-4 sm:px-5 py-3 shadow-sm dark:shadow-lg`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap text-pretty">
                      {message.content}
                    </p>
                    <span
                      className={`text-xs mt-2 block opacity-60 ${message.sender === "user"
                        ? "text-primary-foreground dark:text-blue-100"
                        : "text-muted-foreground dark:text-slate-400"
                        }`}
                    >
                      {formatTime(message.timestamp)}
                    </span>
                  </div>

                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 mt-1 shrink-0">
                      <AvatarFallback className="bg-secondary text-secondary-foreground text-xs dark:bg-slate-600 dark:text-slate-300">
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-4 justify-start animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                  <Avatar className="h-8 w-8 mt-1 shrink-0">
                    <AvatarImage src="/ia-logo.png" alt="Machine IA" />
                    <AvatarFallback className="bg-muted text-muted-foreground text-xs dark:bg-slate-600 dark:text-slate-300">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-muted/50 border border-border/30 rounded-3xl rounded-bl-lg px-5 py-3 shadow-sm dark:bg-slate-700/60 dark:border-slate-600/40 dark:shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce dark:bg-slate-400"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce dark:bg-slate-400"
                          style={{ animationDelay: "150ms" }}
                        />
                        <div
                          className="w-2 h-2 bg-muted-foreground/60 rounded-full animate-bounce dark:bg-slate-400"
                          style={{ animationDelay: "300ms" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          <div
            className="
              shrink-0 border-t border-white/20 dark:border-slate-500/20
              bg-white/5 dark:bg-slate-800/10 backdrop-blur-xl
              p-3 sm:p-6
            "
          >
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onFocus={handleFocus}
                    placeholder={
                      !isAuthenticated && !isPrivatePage && questionCount >= 3
                        ? "Faça login para continuar usando o assistente"
                        : "Converse comigo..."
                    }
                    disabled={isLoading || (!isAuthenticated && !isPrivatePage && questionCount >= 3)}
                    className="
    min-h-[40px] sm:min-h-[48px]
    pr-10 sm:pr-12 rounded-xl sm:rounded-2xl
    border-border/50 bg-background/50 backdrop-blur-sm
    text-sm sm:text-base resize-none
    focus:ring-1 focus:ring-ring/20 focus:border-ring/30
    transition-all duration-200
    dark:bg-slate-800/60
  "
                  />


                </div>
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading || (!isAuthenticated && !isPrivatePage && questionCount >= 3)}
                  size="lg"
                  className="
                    h-10 w-10 sm:h-12 sm:w-12
                    rounded-2xl bg-primary hover:bg-primary/90
                    shadow-sm transition-all duration-200 hover:shadow-md
                    disabled:opacity-50
                  "
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </div>
              {!isAuthenticated && !isPrivatePage && questionCount > 0 && (
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  {questionCount >= 3
                    ? "Limite de perguntas atingido. Faça login para continuar."
                    : `Perguntas restantes: ${3 - questionCount}`}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Faça login para continuar</DialogTitle>
            <DialogDescription>
              Faça login ou crie uma conta para continuar usando nosso assistente de IA.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <Button asChild className="w-full">
              <Link href="/login" onClick={() => setShowLoginDialog(false)}>
                Fazer Login
              </Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}