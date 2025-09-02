"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, User, Loader2 } from "lucide-react"

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
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/chat", {
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
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Desculpe, ocorreu um erro ao processar sua mensagem. Tente novamente.",
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

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl h-[85vh] flex flex-col border-0 shadow-xl bg-card/95 backdrop-blur-sm rounded-3xl overflow-hidden dark:bg-slate-800/90 dark:shadow-2xl">
        <CardHeader className="shrink-0 border-b border-border/50 bg-background/80 backdrop-blur-sm px-6 py-4 dark:bg-slate-700/60 dark:border-slate-600/40">
          <CardTitle className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-10 w-10 border-2 border-border/20 dark:border-slate-600/30">
                <AvatarImage src="/machine-logo.png" alt="Machine IA" />
                <AvatarFallback className="bg-muted text-muted-foreground dark:bg-slate-600 dark:text-slate-300">
                  <Bot className="h-5 w-5" />
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 rounded-full border-2 border-background dark:border-slate-800" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground dark:text-slate-100">Machine IA</span>
              <span className="text-sm text-muted-foreground font-normal dark:text-slate-400">
                Assistente de Investimentos
              </span>
            </div>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
          <ScrollArea ref={scrollAreaRef} className="flex-1 px-6 py-6">
            <div className="space-y-6 max-w-3xl mx-auto">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex gap-4 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  } animate-in fade-in-0 slide-in-from-bottom-2 duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {message.sender === "ai" && (
                    <Avatar className="h-8 w-8 mt-1 shrink-0">
                      <AvatarImage src="/machine-logo.png" alt="Machine IA" />
                      <AvatarFallback className="bg-muted text-muted-foreground text-xs dark:bg-slate-600 dark:text-slate-300">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}

                  <div
                    className={`max-w-[80%] ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-3xl rounded-br-lg dark:bg-primary-600 "
                        : "bg-muted/50 text-foreground rounded-3xl rounded-bl-lg border border-border/30 dark:bg-slate-700/60 dark:text-slate-100 dark:border-slate-600/40"
                    } px-5 py-3 shadow-sm dark:shadow-lg`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap text-pretty">{message.content}</p>
                    <span
                      className={`text-xs mt-2 block opacity-60 ${
                        message.sender === "user"
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
                    <AvatarImage src="/machine-logo.png" alt="Machine IA" />
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

          <div className="shrink-0 border-t border-border/50 bg-background/80 backdrop-blur-sm p-6 dark:bg-slate-700/60 dark:border-slate-600/40">
            <div className="max-w-3xl mx-auto">
              <div className="flex gap-3 items-end">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Converse comigo..."
                    disabled={isLoading}
                    className="min-h-[48px] pr-12 rounded-2xl border-border/50 bg-background/50 backdrop-blur-sm text-sm resize-none focus:ring-1 focus:ring-ring/20 focus:border-ring/30 transition-all duration-200 dark:bg-slate-800/60 "
                  />
                </div>
                <Button
                  onClick={sendMessage}
                  disabled={!inputMessage.trim() || isLoading}
                  size="lg"
                  className="h-12 w-12 rounded-2xl bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 hover:shadow-md disabled:opacity-50 "
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
