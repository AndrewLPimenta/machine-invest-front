"use client"

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
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [ref] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [cryptos, setCryptos] = useState<CryptoData[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortDirection, setSortDirection] = useState("desc")
  const [favorites, setFavorites] = useState<string[]>([])
  const [moeda, setMoeda] = useState<"USD" | "BRL" | "EUR">("BRL")

  // Socket.IO para atualizações de preço
 useEffect(() => {
  const socket = io("http://localhost:3001")

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
}, [])

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

          <div className="mt-8 flex flex-col gap-4 items-center justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar criptomoedas..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div ref={sectionRef} className="flex flex-wrap gap-2 justify-center">
              <Button variant={moeda === "BRL" ? "default" : "outline"} size="sm" onClick={() => setMoeda("BRL")}>BRL</Button>
              <Button variant={moeda === "USD" ? "default" : "outline"} size="sm" onClick={() => setMoeda("USD")}>USD</Button>
              <Button variant={moeda === "EUR" ? "default" : "outline"} size="sm" onClick={() => setMoeda("EUR")}>EUR</Button>
              <Button size="sm" asChild>
                <Link href="/download">
                  Negociar Agora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Cards - Apenas Mobile */}
          <div className="block md:hidden mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              {filteredCryptos.map((crypto, index) => (
                <Card key={index} className="overflow-hidden border border-border/50">
                  <CardHeader className="pb-2 pt-4 px-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Image src={crypto.image || "/placeholder.svg"} alt={crypto.name} width={36} height={36} className="rounded-full" />
                      <div>
                        <CardTitle className="text-base">{crypto.name}</CardTitle>
                        <CardDescription className="text-xs">{crypto.symbol}</CardDescription>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => toggleFavorite(crypto.symbol)}
                    >
                      <Star
                        className={`h-4 w-4 ${
                          favorites.includes(crypto.symbol) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                  </CardHeader>

                  <CardContent className="px-4 pb-2 pt-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-medium">
                        {moeda === "BRL" ? "R$ " : moeda === "USD" ? "$ " : "€ "}
                        {(crypto[moeda] ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                      </div>
                      <div
                        className={`flex items-center space-x-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                          crypto.change > 0 ? "bg-primary/10 text-primary" : "bg-primary-foreground/10 text-700"
                        }`}
                      >
                        {crypto.change > 0 ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        <span>
                          {(Math.abs(crypto.change) < 1 
                            ? Math.abs(crypto.change * 100) 
                            : Math.abs(crypto.change)
                          ).toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="px-4 py-3 flex justify-between border-t border-border/50 bg-muted/10">
                    <div className="text-xs text-muted-foreground">Cap: R$ {crypto.marketCap}</div>
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" asChild>
                      <Link href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}>
                        Detalhes <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          {/* Tabela - telas médias e grandes */}
          <Table className="mt-10 hidden sm:table md:table lg:none">
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
                        className="rounded-full"
                      />
                      <span>{crypto.name}</span>
                      <span className="text-muted-foreground">{crypto.symbol}</span>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {moeda === "BRL" ? "R$ " : moeda === "USD" ? "$ " : "€ "}
                    {(crypto[moeda] ?? 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
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


