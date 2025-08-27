"use client"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDownToLine, ArrowRight, ChevronDown, ChevronUp, Search, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { EnhancedCryptoChart } from "@/components/enhanced-crypto-chart"
import { SiteLayout } from "@/components/site-layout"
import { ResponsiveContainer } from "@/components/responsive-container"
import FloatingPaths from "@/components/background-paths"



const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 245876.32,
    change: 2.45,
    marketCap: "4.7T",
    volume: "127.9B",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 12543.87,
    change: -1.23,
    marketCap: "1.5T",
    volume: "58.3B",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/120px-Ethereum_logo_2014.svg.png",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: 1876.54,
    change: 0.87,
    marketCap: "287.6B",
    volume: "12.4B",
    image: "https://logospng.org/download/binance-coin/logo-binance-coin-2048.png",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 543.21,
    change: 5.67,
    marketCap: "187.2B",
    volume: "9.8B",
    image: "https://avatars.githubusercontent.com/u/58729655?s=200&v=4",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 2.87,
    change: -0.45,
    marketCap: "98.7B",
    volume: "4.3B",
    image: "https://s3.coinmarketcap.com/static-gravity/image/4aec70f6f1254e4f89650cc68ae49f3c.png",
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 3.21,
    change: 1.34,
    marketCap: "154.3B",
    volume: "7.6B",
    image: "https://brandlogos.net/wp-content/uploads/2021/12/ripple-brandlogo.net_.png",
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.52,
    change: 3.21,
    marketCap: "68.5B",
    volume: "3.2B",
    image: "https://upload.wikimedia.org/wikipedia/pt/d/d0/Dogecoin_Logo.png",

  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: 32.45,
    change: -0.78,
    marketCap: "32.1B",
    volume: "1.8B",
    image: "https://krypto.businessinsider.com.pl/wp-content/uploads/2023/06/dot.png",
  },
  {
    name: "Avalanche",
    symbol: "AVAX",
    price: 87.32,
    change: 4.56,
    marketCap: "28.7B",
    volume: "1.5B",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Avalanche_logo_without_text-1.png",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: 25.67,
    change: 1.23,
    marketCap: "12.3B",
    volume: "0.9B",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Chainlink_Logo.png",
  },
]

export default function CriptoPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortDirection, setSortDirection] = useState("desc")
  const [favorites, setFavorites] = useState<string[]>([])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Filtrar e ordenar criptomoedas
  const filteredCryptos = cryptos
    .filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      let aValue, bValue

      switch (sortBy) {
        case "name":
          aValue = a.name
          bValue = b.name
          break
        case "price":
          aValue = a.price
          bValue = b.price
          break
        case "change":
          aValue = a.change
          bValue = b.change
          break
        case "marketCap":
          aValue = Number.parseFloat(a.marketCap.replace("T", "000").replace("B", ""))
          bValue = Number.parseFloat(b.marketCap.replace("T", "000").replace("B", ""))
          break
        case "volume":
          aValue = Number.parseFloat(a.volume.replace("T", "000").replace("B", ""))
          bValue = Number.parseFloat(b.volume.replace("T", "000").replace("B", ""))
          break
        default:
          aValue = Number.parseFloat(a.marketCap.replace("T", "000").replace("B", ""))
          bValue = Number.parseFloat(b.marketCap.replace("T", "000").replace("B", ""))
      }

      if (sortDirection === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

  const toggleFavorite = (symbol: string) => {
    if (favorites.includes(symbol)) {
      setFavorites(favorites.filter((fav) => fav !== symbol))
    } else {
      setFavorites([...favorites, symbol])
    }
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
      <  FloatingPaths
      title="Criptomoedas em Destaque"
      targetRef={sectionRef}/>
      <Section className="py-12">
         
        <ResponsiveContainer>
         
          <div ref={sectionRef} className="max-w-3xl mx-auto text-center">
            <SectionHeading
              title="Principais nomes do mercado"
              description="Acompanhe as principais criptomoedas do mercado e suas variações em tempo real."
              centered
            />

            <div className="mt-8 flex flex-col gap-4 items-center justify-center" >
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
              <div  className="flex flex-wrap gap-2 justify-center" >
                <Button variant="outline" size="sm" asChild>
                  <Link href="/criptomoedas/comparar">Comparar Criptomoedas</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/criptomoedas/converter">Conversor</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/download">
                    Negociar Agora <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12" >
            <Tabs defaultValue="tabela" className="w-full">
              <TabsList className="w-full max-w-xs mx-auto grid grid-cols-2 mb-8">
                <TabsTrigger value="tabela">Mostrar em Tabela</TabsTrigger>
                <TabsTrigger value="cards">Mostrar em Cards</TabsTrigger>
              </TabsList>

              <TabsContent value="tabela" className="space-y-4">
                <Card>
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]"></TableHead>
                            <TableHead className="w-[50px]">#</TableHead>
                            <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                              Nome{" "}
                              {sortBy === "name" &&
                                (sortDirection === "asc" ? (
                                  <ChevronUp className="inline h-4 w-4" />
                                ) : (
                                  <ChevronDown className="inline h-4 w-4" />
                                ))}
                            </TableHead>
                            <TableHead className="cursor-pointer text-right" onClick={() => handleSort("price")}>
                              Preço{" "}
                              {sortBy === "price" &&
                                (sortDirection === "asc" ? (
                                  <ChevronUp className="inline h-4 w-4" />
                                ) : (
                                  <ChevronDown className="inline h-4 w-4" />
                                ))}
                            </TableHead>
                            <TableHead className="cursor-pointer text-right" onClick={() => handleSort("change")}>
                              24h{" "}
                              {sortBy === "change" &&
                                (sortDirection === "asc" ? (
                                  <ChevronUp className="inline h-4 w-4" />
                                ) : (
                                  <ChevronDown className="inline h-4 w-4" />
                                ))}
                            </TableHead>
                            <TableHead className="cursor-pointer text-right" onClick={() => handleSort("marketCap")}>
                              Cap. de Mercado{" "}
                              {sortBy === "marketCap" &&
                                (sortDirection === "asc" ? (
                                  <ChevronUp className="inline h-4 w-4" />
                                ) : (
                                  <ChevronDown className="inline h-4 w-4" />
                                ))}
                            </TableHead>
                            <TableHead className="cursor-pointer text-right" onClick={() => handleSort("volume")}>
                              Volume (24h){" "}
                              {sortBy === "volume" &&
                                (sortDirection === "asc" ? (
                                  <ChevronUp className="inline h-4 w-4" />
                                ) : (
                                  <ChevronDown className="inline h-4 w-4" />
                                ))}
                            </TableHead>
                            <TableHead className="text-right">Ação</TableHead>
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
                                    className={`h-4 w-4 ${favorites.includes(crypto.symbol) ? "fill-yellow-400 text-yellow-400" : "opacity-0 group-hover:opacity-100"}`}
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
                                R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                              <TableCell
                                className={`text-right ${crypto.change > 0 ? "text-green-500" : "text-red-500"}`}
                              >
                                <div className="flex items-center justify-end gap-1">
                                  {crypto.change > 0 ? (
                                    <ChevronUp className="h-4 w-4" />
                                  ) : (
                                    <ChevronDown className="h-4 w-4" />
                                  )}
                                  {Math.abs(crypto.change)}%
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
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cards" className="space-y-4">
                <motion.div
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  ref={ref}
                >
                  {filteredCryptos.map((crypto, index) => (
                    <motion.div key={index} variants={item}>
                      <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border border-border/50">
                        <CardHeader className="pb-2 pt-4 px-4">
                          <div className="flex items-center justify-between">
                            <Link
                              href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}
                              className="flex items-center gap-3 group"
                            >
                              <Image
                                src={crypto.image || "/placeholder.svg"}
                                alt={crypto.name}
                                width={36}
                                height={36}
                                className="rounded-full"
                              />
                              <div>
                                <CardTitle className="text-base group-hover:text-primary transition-colors">
                                  {crypto.name}
                                </CardTitle>
                                <CardDescription className="text-xs">{crypto.symbol}</CardDescription>
                              </div>
                            </Link>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                              onClick={(e) => {
                                e.preventDefault()
                                toggleFavorite(crypto.symbol)
                              }}
                            >
                              <Star
                                className={`h-4 w-4 ${
                                  favorites.includes(crypto.symbol)
                                    ? "fill-yellow-400 text-yellow-400"
                                    : "text-muted-foreground"
                                }`}
                              />
                            </Button>
                          </div>
                        </CardHeader>

                        <CardContent className="px-4 pb-2 pt-0">
                          <div className="flex items-center justify-between mb-3">
                            <div className="font-medium">
                              R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                            </div>
                            <div
                              className={`flex items-center space-x-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                                crypto.change > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                              }`}
                            >
                              {crypto.change > 0 ? (
                                <ChevronUp className="h-3 w-3" />
                              ) : (
                                <ChevronDown className="h-3 w-3" />
                              )}
                              <span>{Math.abs(crypto.change)}%</span>
                            </div>
                          </div>

                          {/* Gráfico Simplificado */}
                          <div className="h-[30px] -mx-4 -mb-2">
                            {/* <EnhancedCryptoChart
                              symbol={crypto.symbol}
                              name={crypto.name}
                              currentPrice={crypto.price}
                              change={crypto.change}
                              simplified={true}
                            /> */}
                          </div>
                        </CardContent>

                        <CardFooter className="px-4 py-3 flex justify-between border-t border-border/50 bg-muted/10">
                          <div className="text-xs text-muted-foreground">
                            <span>Cap: R$ {crypto.marketCap}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="h-7 px-2 text-xs" asChild>
                            <Link href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}>
                              Detalhes <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild>
              <Link href="/download" id="download">
                Baixar App para Acesso Completo <ArrowDownToLine className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ResponsiveContainer>
      </Section>
    </SiteLayout>
  )
}
