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
  BTC: "https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg",
  ETH: "https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg",
  BNB: "https://logospng.org/download/binance-coin/logo-binance-coin-2048.png",
  SOL: "https://avatars.githubusercontent.com/u/58729655?s=200&v=4",
  ADA: "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png",
  XRP: "https://brandlogos.net/wp-content/uploads/2021/12/ripple-brandlogo.net_.png",
  DOGE: "https://upload.wikimedia.org/wikipedia/pt/d/d0/Dogecoin_Logo.png",
  DOT: "https://krypto.businessinsider.com.pl/wp-content/uploads/2023/06/dot.png",
  AVAX: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Avalanche_logo_without_text-1.png",
  LINK: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Chainlink_Logo.png",
}

export default function CriptoPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [cryptos, setCryptos] = useState<CryptoData[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortDirection, setSortDirection] = useState("desc")
  const [favorites, setFavorites] = useState<string[]>([])
  const [moeda, setMoeda] = useState<"USD" | "BRL" | "EUR">("BRL")

  // Conectar ao backend Socket.IO e calcular variação
  useEffect(() => {
    const socket = io("http://localhost:3001")

    socket.on("precoAtualizado", (data: any) => {
      setCryptos((prev) => {
        const updated = [...prev]
        const index = updated.findIndex((c) => c.symbol === data.symbol)

        if (index >= 0) {
          const prevPrice = updated[index][moeda] || 0
          const newPrice = data[moeda] || prevPrice
          const change = prevPrice ? ((newPrice - prevPrice) / prevPrice) * 100 : 0

          updated[index] = { ...updated[index], ...data, change }
        } else {
          updated.push({
            name: data.symbol,
            symbol: data.symbol,
            image: logos[data.symbol] || "/placeholder.svg",
            USD: data.USD,
            BRL: data.BRL,
            EUR: data.EUR,
            change: 0,
            marketCap: "0",
            volume: "0",
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
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      let aValue: any, bValue: any
      switch (sortBy) {
        case "name":
          aValue = a.name
          bValue = b.name
          break
        case "price":
          aValue = a[moeda]
          bValue = b[moeda]
          break
        default:
          aValue = a[moeda]
          bValue = b[moeda]
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
          {/* <div ref={sectionRef} className="max-w-3xl mx-auto text-center"> */}
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
              <div className="flex flex-wrap gap-2 justify-center">
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
                          className="rounded-full"
                        />
                        <span>{crypto.name}</span>
                        <span className="text-muted-foreground">{crypto.symbol}</span>
                      </Link>
                    </TableCell>

                    <TableCell className="text-right font-medium">
                      {moeda === "BRL" ? "R$ " : moeda === "USD" ? "$ " : "€ "}
                      {crypto[moeda].toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </TableCell>

                    <TableCell className={`text-right ${crypto.change > 0 ? "text-primary" : "text-500"}`}>
                      <div className="flex items-center justify-end gap-1">
                        {crypto.change > 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        {Math.abs(crypto.change).toFixed(2)}%
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
