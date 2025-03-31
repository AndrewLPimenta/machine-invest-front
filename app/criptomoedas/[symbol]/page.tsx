"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Clock,
  Globe,
  Share2,
  Star,
  Search,
  FileText,
  ArrowDown,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { EnhancedCryptoChart } from "@/components/enhanced-crypto-chart"
import { useInView } from "react-intersection-observer"
import { useParams } from "next/navigation"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Dados simulados para diferentes criptomoedas
const cryptoData = {
  btc: {
    name: "Bitcoin",
    symbol: "BTC",
    price: 245876.32,
    change: 2.45,
    marketCap: "4.7T",
    volume: "127.8B",
    high24h: 248000.5,
    low24h: 242500.75,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "Bitcoin é a primeira criptomoeda descentralizada do mundo, criada em 2009 por uma pessoa (ou grupo) usando o pseudônimo Satoshi Nakamoto. Funciona sem uma autoridade central ou banco, e o gerenciamento de transações e a emissão de bitcoins são realizados coletivamente pela rede.",
    website: "https://bitcoin.org",
    explorer: "https://blockchain.com/explorer",
    whitepaper: "https://bitcoin.org/bitcoin.pdf",
    maxSupply: "21.000.000",
    circulatingSupply: "19.456.000",
  },
  eth: {
    name: "Ethereum",
    symbol: "ETH",
    price: 12543.87,
    change: -1.23,
    marketCap: "1.5T",
    volume: "58.3B",
    high24h: 12800.25,
    low24h: 12350.5,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "Ethereum é uma plataforma descentralizada que permite a criação de contratos inteligentes e aplicativos descentralizados (dApps) sem interferência de terceiros, tempo de inatividade, fraude ou controle. Ethereum é não apenas uma plataforma, mas também uma linguagem de programação (Turing completa) que ajuda os desenvolvedores a criar e publicar aplicativos distribuídos.",
    website: "https://ethereum.org",
    explorer: "https://etherscan.io",
    whitepaper: "https://ethereum.org/whitepaper",
    maxSupply: "Ilimitado",
    circulatingSupply: "120.345.000",
  },
  sol: {
    name: "Solana",
    symbol: "SOL",
    price: 543.21,
    change: 5.67,
    marketCap: "187.2B",
    volume: "9.8B",
    high24h: 550.75,
    low24h: 520.3,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "Solana é uma blockchain de alto desempenho que suporta contratos inteligentes e criação de aplicativos descentralizados. Ela usa um mecanismo de consenso inovador chamado Proof of History (PoH) em combinação com Proof of Stake (PoS), permitindo processamento rápido de transações e baixas taxas.",
    website: "https://solana.com",
    explorer: "https://explorer.solana.com",
    whitepaper: "https://solana.com/solana-whitepaper.pdf",
    maxSupply: "489.000.000",
    circulatingSupply: "410.235.000",
  },
  bnb: {
    name: "Binance Coin",
    symbol: "BNB",
    price: 1876.54,
    change: 0.87,
    marketCap: "287.6B",
    volume: "12.4B",
    high24h: 1890.25,
    low24h: 1850.5,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "Binance Coin (BNB) é a criptomoeda nativa da exchange Binance e da Binance Smart Chain. Inicialmente criada como um token utilitário para descontos em taxas de negociação na Binance, o BNB expandiu seu uso para diversos casos, incluindo pagamentos por taxas na Binance Smart Chain, participação em vendas de tokens e muito mais.",
    website: "https://binance.com",
    explorer: "https://bscscan.com",
    whitepaper: "https://github.com/binance-chain/whitepaper",
    maxSupply: "200.000.000",
    circulatingSupply: "153.432.897",
  },
  ada: {
    name: "Cardano",
    symbol: "ADA",
    price: 2.87,
    change: -0.45,
    marketCap: "98.7B",
    volume: "4.3B",
    high24h: 2.95,
    low24h: 2.82,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "Cardano é uma plataforma blockchain de código aberto que visa fornecer uma infraestrutura mais equilibrada e sustentável para sistemas financeiros. É a primeira blockchain baseada em evidências científicas, desenvolvida através de metodologias orientadas por pesquisa acadêmica revisada por pares.",
    website: "https://cardano.org",
    explorer: "https://cardanoscan.io",
    whitepaper: "https://why.cardano.org/en/introduction/designing-in-layers",
    maxSupply: "45.000.000.000",
    circulatingSupply: "35.045.020.830",
  },
  xrp: {
    name: "XRP",
    symbol: "XRP",
    price: 3.21,
    change: 1.34,
    marketCap: "154.3B",
    volume: "7.6B",
    high24h: 3.3,
    low24h: 3.15,
    image: "/placeholder.svg?height=64&width=64",
    description:
      "XRP é a criptomoeda nativa da Ripple, uma tecnologia que atua como um sistema de liquidação bruta em tempo real, uma rede de câmbio e um sistema de remessa. XRP foi criado com o objetivo de ser uma forma mais rápida, menos custosa e mais escalável de ativos digitais para pagamentos transfronteiriços.",
    website: "https://ripple.com",
    explorer: "https://xrpscan.com",
    whitepaper: "https://ripple.com/files/ripple_consensus_whitepaper.pdf",
    maxSupply: "100.000.000.000",
    circulatingSupply: "46.312.443.615",
  },
}

// Dados de mercados e pares de negociação
const tradingPairs = [
  { pair: "BTC/BRL", price: 245876.32, change: 2.45, volume: "1.2B", exchange: "Binance" },
  { pair: "BTC/USDT", price: 49876.54, change: 2.35, volume: "5.7B", exchange: "Binance" },
  { pair: "BTC/BRL", price: 245900.12, change: 2.5, volume: "0.8B", exchange: "Mercado Bitcoin" },
  { pair: "BTC/EUR", price: 45678.9, change: 2.4, volume: "1.5B", exchange: "Binance" },
  { pair: "BTC/BRL", price: 245850.75, change: 2.42, volume: "0.5B", exchange: "NovaDAX" },
]

// Notícias simuladas
const news = [
  {
    title: "Bitcoin atinge nova máxima histórica após aprovação de ETF",
    date: "Hoje",
    source: "CriptoNotícias",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    title: "Grandes empresas aumentam investimentos em Bitcoin",
    date: "Ontem",
    source: "Exame",
    image: "/placeholder.svg?height=100&width=150",
  },
  {
    title: "Análise técnica: Bitcoin pode chegar a $100.000 até o final do ano",
    date: "2 dias atrás",
    source: "Análise Cripto",
    image: "/placeholder.svg?height=100&width=150",
  },
]

export default function CryptoDetailPage() {
  const params = useParams()
  const symbol = typeof params.symbol === "string" ? params.symbol.toLowerCase() : "btc"
  const crypto = cryptoData[symbol as keyof typeof cryptoData] || cryptoData.btc

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeTab, setActiveTab] = useState("visao-geral")
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <PageLayout>
      <Section>
        <div className="flex flex-col gap-6">
          {/* Cabeçalho da criptomoeda */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={crypto.image || "/placeholder.svg"}
                alt={crypto.name}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold flex items-center gap-2">
                  {crypto.name}
                  <span className="text-xl text-muted-foreground">({crypto.symbol})</span>
                  <Button variant="ghost" size="icon" onClick={() => setIsFavorite(!isFavorite)} className="ml-1">
                    <Star className={`h-5 w-5 ${isFavorite ? "fill-yellow-400 text-yellow-400" : ""}`} />
                  </Button>
                </h1>
                <div className="flex items-center gap-4 mt-1">
                  <span className="text-2xl font-bold">
                    R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </span>
                  <span
                    className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm font-medium ${
                      crypto.change > 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {crypto.change > 0 ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    {crypto.change > 0 ? "+" : ""}
                    {crypto.change}%
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link href={crypto.website} target="_blank">
                  <Globe className="mr-1 h-4 w-4" /> Site Oficial
                </Link>
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-1 h-4 w-4" /> Compartilhar
              </Button>
              <Button size="sm" asChild>
                <Link href="/#download">
                  Comprar <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Tabs de navegação */}
          <Tabs defaultValue="visao-geral" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full max-w-md grid grid-cols-3">
              <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
              <TabsTrigger value="mercados">Mercados</TabsTrigger>
              <TabsTrigger value="noticias">Notícias</TabsTrigger>
            </TabsList>

            <TabsContent value="visao-geral" className="mt-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="md:col-span-2">
                  <EnhancedCryptoChart
                    symbol={crypto.symbol}
                    name={crypto.name}
                    currentPrice={crypto.price}
                    change={crypto.change}
                    high24h={crypto.high24h}
                    low24h={crypto.low24h}
                    volume24h={Number.parseFloat(crypto.volume.replace("B", "")) * 1000000000}
                    marketCap={Number.parseFloat(crypto.marketCap.replace("T", "")) * 1000000000000}
                  />

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Sobre {crypto.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{crypto.description}</p>

                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div>
                          <h3 className="font-medium mb-2">Links Oficiais</h3>
                          <ul className="space-y-2">
                            <li>
                              <Link
                                href={crypto.website}
                                className="text-primary hover:underline flex items-center"
                                target="_blank"
                              >
                                <Globe className="mr-2 h-4 w-4" /> Website Oficial
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={crypto.explorer}
                                className="text-primary hover:underline flex items-center"
                                target="_blank"
                              >
                                <Search className="mr-2 h-4 w-4" /> Explorador Blockchain
                              </Link>
                            </li>
                            <li>
                              <Link
                                href={crypto.whitepaper}
                                className="text-primary hover:underline flex items-center"
                                target="_blank"
                              >
                                <FileText className="mr-2 h-4 w-4" /> Whitepaper
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Estatísticas</h3>
                          <ul className="space-y-2">
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Capitalização de Mercado:</span>
                              <span>R$ {crypto.marketCap}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Volume (24h):</span>
                              <span>R$ {crypto.volume}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Fornecimento Máximo:</span>
                              <span>{crypto.maxSupply}</span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-muted-foreground">Fornecimento Circulante:</span>
                              <span>{crypto.circulatingSupply}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Converter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="from-amount">De</Label>
                          <div className="flex gap-2">
                            <Input id="from-amount" type="number" defaultValue="1" className="flex-1" />
                            <Select defaultValue={crypto.symbol}>
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={crypto.symbol}>{crypto.symbol}</SelectItem>
                                <SelectItem value="BRL">BRL</SelectItem>
                                <SelectItem value="USD">USD</SelectItem>
                                <SelectItem value="EUR">EUR</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="flex justify-center">
                          <Button variant="ghost" size="icon">
                            <ArrowDown className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="to-amount">Para</Label>
                          <div className="flex gap-2">
                            <Input id="to-amount" type="number" defaultValue={crypto.price} className="flex-1" />
                            <Select defaultValue="BRL">
                              <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Selecione" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={crypto.symbol}>{crypto.symbol}</SelectItem>
                                <SelectItem value="BRL">BRL</SelectItem>
                                <SelectItem value="USD">USD</SelectItem>
                                <SelectItem value="EUR">EUR</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Button className="w-full">Converter</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="mt-6">
                    <CardHeader>
                      <CardTitle>Histórico de Preços</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Máxima (24h):</span>
                          <span className="text-green-500">
                            R$ {crypto.high24h.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mínima (24h):</span>
                          <span className="text-red-500">
                            R$ {crypto.low24h.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Máxima (7d):</span>
                          <span>
                            R$ {(crypto.high24h * 1.05).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mínima (7d):</span>
                          <span>R$ {(crypto.low24h * 0.95).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Máxima (Histórica):</span>
                          <span>R$ {(crypto.price * 1.2).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Mínima (Histórica):</span>
                          <span>R$ {(crypto.price * 0.1).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mercados" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pares de Negociação</CardTitle>
                  <CardDescription>Principais mercados onde você pode negociar {crypto.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Par</TableHead>
                        <TableHead>Preço</TableHead>
                        <TableHead>Variação 24h</TableHead>
                        <TableHead>Volume 24h</TableHead>
                        <TableHead>Exchange</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tradingPairs.map((pair, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{pair.pair}</TableCell>
                          <TableCell>R$ {pair.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</TableCell>
                          <TableCell className={pair.change > 0 ? "text-green-500" : "text-red-500"}>
                            {pair.change > 0 ? "+" : ""}
                            {pair.change}%
                          </TableCell>
                          <TableCell>R$ {pair.volume}</TableCell>
                          <TableCell>{pair.exchange}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/exchanges">
                      Ver Todas as Exchanges <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Liquidez Global</CardTitle>
                  <CardDescription>Distribuição do volume de negociação por exchange</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  {/* Aqui poderia ser inserido um gráfico de pizza mostrando a distribuição do volume */}
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    Gráfico de distribuição de volume por exchange
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="noticias" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {news.map((item, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          width={150}
                          height={100}
                          className="rounded-md object-cover"
                        />
                        <div className="flex flex-col">
                          <h3 className="font-bold">{item.title}</h3>
                          <div className="mt-2 flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            <span>{item.date}</span>
                            <span className="mx-2">•</span>
                            <span>{item.source}</span>
                          </div>
                          <Button variant="link" className="mt-auto p-0 h-auto justify-start" asChild>
                            <Link href="/blog">
                              Ler mais <ArrowRight className="ml-1 h-3 w-3" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Button variant="outline" asChild>
                  <Link href="/blog">
                    Ver Todas as Notícias <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Section>
    </PageLayout>
  )
}

