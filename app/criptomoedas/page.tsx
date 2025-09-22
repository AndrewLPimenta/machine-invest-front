"use client"

import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"
import { ArrowRight, ChevronDown, ChevronUp, Search, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { useInView } from "react-intersection-observer"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { SiteLayout } from "@/components/site-layout" 
import { ResponsiveContainer } from "@/components/responsive-container"
import FloatingPaths from "@/components/background-paths"
import { io } from "socket.io-client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CryptoData {
  name: string
  symbol: string
  image: string
  USD: number
  BRL: number
  EUR: number
  change: number
  marketCap: string
  volume: string
}

const logos: Record<string, string> = {
  BTC: "/bitcoin.png",
  ETH: "/ethereum.png",
  ADA: "/cardano.png",
  XRP: "/xrp.png",
  XLM: "/stellar.png",
  TRX: "/tron.png",
  ETC: "/etc.png",
  SHIB: "/shiba-inu.png",
  LINK: "/chainlink.png",
  DOGE: "/dodge.png",
  SOL: "/solana.png",
  DOT: "/dot.png",
  UNI: "/uniswap.png",
  AVAX: "/avalanche.png",
  BNB: "/bnb.png",
  APT: "/aptos.png",
  LTC: "/litecoin.png",
  NEAR: "/near.png",
  ATOM: "/atom.png",
}

export default function CriptoPage() {
  const { user, isAuthenticated } = useAuth()

  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [cryptos, setCryptos] = useState<CryptoData[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortDirection, setSortDirection] = useState("desc")
  const [favorites, setFavorites] = useState<string[]>([])
  const [moeda, setMoeda] = useState<"USD" | "BRL" | "EUR">("BRL")

  useEffect(() => {
    const socket = io("http://localhost:3002/")

    socket.on("precoAtualizado", (data: Partial<CryptoData>) => {
      setCryptos((prev) => {
        const updated = [...prev]
        const index = updated.findIndex((c) => c.symbol === data.symbol)

        if (index >= 0) {
          const prevPrice = updated[index][moeda] ?? 0
          const newPrice = data[moeda] ?? prevPrice
          const change = prevPrice ? ((newPrice - prevPrice) / prevPrice) * 100 : 0
          updated[index] = { ...updated[index], ...data, change }
        } else {
          updated.push({
            name: data.symbol!,
            symbol: data.symbol!,
            image: logos[data.symbol!] || "/placeholder.svg",
            USD: data.USD ?? 0,
            BRL: data.BRL ?? 0,
            EUR: data.EUR ?? 0,
            change: 0,
            marketCap: data.marketCap ?? "0",
            volume: data.volume ?? "0",
          })
        }
        return updated
      })
    })

    return () => socket.disconnect()
  }, [moeda])

  const filteredCryptos = cryptos
    .filter(
      (crypto) =>
        crypto.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let aValue: any = a[moeda] ?? 0
      let bValue: any = b[moeda] ?? 0

      if (sortBy === "name") {
        aValue = a.name
        bValue = b.name
      }

      return sortDirection === "asc" ? (aValue > bValue ? 1 : -1) : (aValue < bValue ? 1 : -1)
    })

  const toggleFavorite = (symbol: string) => {
    setFavorites((favs) =>
      favs.includes(symbol) ? favs.filter((f) => f !== symbol) : [...favs, symbol]
    )
  }

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortBy(column)
      setSortDirection("desc")
    }
  }

  return (
    <SiteLayout>
      <FloatingPaths title="Criptomoedas em Destaque" targetRef={sectionRef} />
      <Section className="py-12">
        <ResponsiveContainer>
          <SectionHeading 
            title="Principais nomes do mercado"
            description="Acompanhe as principais criptomoedas do mercado e suas variações em tempo real."
            centered
          />

          {!isAuthenticated && (
            <div className="w-full max-w-xl mx-auto mt-4 p-4 bg-background text-800 rounded-md text-center border border-primary-300">
              Para visualizar os detalhes das criptomoedas, faça{" "}
              <Link href="/login" className="underline-primary font-medium">login</Link> ou{" "}
              <Link href="/register" className="underline-primary font-medium">cadastro</Link>.
            </div>
          )}

          {/* Tabela de criptos */}
          <Table className="mt-10">
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                <TableHead>#</TableHead>
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">Nome</TableHead>
                <TableHead onClick={() => handleSort("price")} className="cursor-pointer text-right">Preço</TableHead>
                <TableHead className="text-right">Variação</TableHead>
                <TableHead className="text-right">Market Cap</TableHead>
                <TableHead className="text-right">Volume</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCryptos.map((crypto, index) => (
                <TableRow key={index} className="group hover:bg-muted/50">
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => toggleFavorite(crypto.symbol)}
                    >
                      <Star
                        className={`h-4 w-4 ${
                          favorites.includes(crypto.symbol)
                            ? "fill-yellow-400 text-yellow-400"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </Button>
                  </TableCell>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <Link
                      href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}
                      className="flex items-center gap-2 hover:underline"
                    >
                      <Image
                        src={crypto.image || "/placeholder.svg"}
                        alt={crypto.name}
                        width={24}
                        height={24}
                        className={`rounded-full transition-all ${
                        !isAuthenticated && !["BTC", "ETH"].includes(crypto.symbol) ? "blur-sm grayscale" : ""
                      }`}
                      />
                      <span>{crypto.name}</span>
                      <span className="text-muted-foreground">{crypto.symbol}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {moeda === "BRL" ? "R$ " : moeda === "USD" ? "$ " : "€ "}
                    <span className={`${
                    !isAuthenticated && !["BTC", "ETH"].includes(crypto.symbol) ? "blur-sm" : ""
                    }`}>
                    {(crypto[moeda] ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </span>
                  </TableCell>
                  <TableCell className={`text-right ${crypto.change > 0 ? "text-primary" : "text-600"}`}>
                    <div className="flex items-center justify-end gap-1">
                      {crypto.change > 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      {(Math.abs(crypto.change) < 1
                        ? Math.abs(crypto.change * 100)
                        : Math.abs(crypto.change)
                      ).toFixed(2)}%
                    </div>
                  </TableCell>
                  <TableCell className="text-right">R$ {crypto.marketCap}</TableCell>
                  <TableCell className="text-right">R$ {crypto.volume}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" asChild>
                      <Link href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}>Detalhes</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}
