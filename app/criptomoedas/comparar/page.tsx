"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Plus, X, ArrowDownToLine } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { EnhancedCryptoChart } from "@/components/enhanced-crypto-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 245876.32,
    change: 2.45,
    marketCap: "4.7T",
    volume: "127.8B",
    high24h: 248000.5,
    low24h: 242500.75,
    image: "/placeholder.svg?height=64&width=64",
    description: "Bitcoin é a primeira criptomoeda descentralizada do mundo, criada em 2009.",
    allTimeHigh: 350000,
    allTimeLow: 1000,
    launchDate: "03/01/2009",
    algorithm: "SHA-256",
    website: "https://bitcoin.org",
  },
  {
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
      "Ethereum é uma plataforma descentralizada que permite a criação de contratos inteligentes e aplicativos descentralizados.",
    allTimeHigh: 20000,
    allTimeLow: 100,
    launchDate: "30/07/2015",
    algorithm: "Ethash",
    website: "https://ethereum.org",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: 1876.54,
    change: 0.87,
    marketCap: "287.6B",
    volume: "12.4B",
    high24h: 1890.25,
    low24h: 1850.5,
    image: "/placeholder.svg?height=64&width=64",
    description: "Binance Coin (BNB) é a criptomoeda nativa da exchange Binance e da Binance Smart Chain.",
    allTimeHigh: 3000,
    allTimeLow: 10,
    launchDate: "08/07/2017",
    algorithm: "BEP-2",
    website: "https://binance.com",
  },
  {
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
      "Solana é uma blockchain de alto desempenho que suporta contratos inteligentes e criação de aplicativos descentralizados.",
    allTimeHigh: 800,
    allTimeLow: 0.5,
    launchDate: "16/03/2020",
    algorithm: "Proof of History",
    website: "https://solana.com",
  },
  {
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
      "Cardano é uma plataforma blockchain de código aberto que visa fornecer uma infraestrutura mais equilibrada e sustentável para sistemas financeiros.",
    allTimeHigh: 5,
    allTimeLow: 0.01,
    launchDate: "29/09/2017",
    algorithm: "Ouroboros",
    website: "https://cardano.org",
  },
  {
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
      "XRP é a criptomoeda nativa da Ripple, uma tecnologia que atua como um sistema de liquidação bruta em tempo real.",
    allTimeHigh: 5.5,
    allTimeLow: 0.003,
    launchDate: "01/01/2013",
    algorithm: "RPCA",
    website: "https://ripple.com",
  },
]

export default function CompararPage() {
  const [selectedCryptos, setSelectedCryptos] = useState<string[]>(["BTC", "ETH"])

  const addCrypto = () => {
    if (selectedCryptos.length < 4) {
      const availableCryptos = cryptos.filter((c) => !selectedCryptos.includes(c.symbol))
      if (availableCryptos.length > 0) {
        setSelectedCryptos([...selectedCryptos, availableCryptos[0].symbol])
      }
    }
  }

  const removeCrypto = (symbol: string) => {
    if (selectedCryptos.length > 2) {
      setSelectedCryptos(selectedCryptos.filter((s) => s !== symbol))
    }
  }

  const updateCrypto = (index: number, symbol: string) => {
    const newSelected = [...selectedCryptos]
    newSelected[index] = symbol
    setSelectedCryptos(newSelected)
  }

  const getSelectedCryptoData = () => {
    return selectedCryptos.map((symbol) => cryptos.find((c) => c.symbol === symbol))
  }

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Comparar Criptomoedas"
          description="Compare diferentes criptomoedas lado a lado para tomar decisões de investimento mais informadas."
          centered
        />

        <div className="mt-8 flex flex-wrap gap-4 items-center justify-center">
          {selectedCryptos.map((symbol, index) => (
            <div key={index} className="flex items-center gap-2">
              <Select value={symbol} onValueChange={(value) => updateCrypto(index, value)}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Selecione uma criptomoeda" />
                </SelectTrigger>
                <SelectContent>
                  {cryptos.map((crypto) => (
                    <SelectItem
                      key={crypto.symbol}
                      value={crypto.symbol}
                      disabled={selectedCryptos.includes(crypto.symbol) && crypto.symbol !== symbol}
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={crypto.image || "/placeholder.svg"}
                          alt={crypto.name}
                          width={16}
                          height={16}
                          className="rounded-full"
                        />
                        {crypto.name} ({crypto.symbol})
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedCryptos.length > 2 && (
                <Button variant="ghost" size="icon" onClick={() => removeCrypto(symbol)}>
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}

          {selectedCryptos.length < 4 && (
            <Button variant="outline" size="icon" onClick={addCrypto}>
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>

        <div className="mt-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-8">
              <TabsTrigger value="overview">Visão Geral</TabsTrigger>
              <TabsTrigger value="charts">Gráficos</TabsTrigger>
              <TabsTrigger value="details">Detalhes</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comparação Rápida</CardTitle>
                  <CardDescription>Principais métricas lado a lado</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Criptomoeda</TableHead>
                        <TableHead className="text-right">Preço (BRL)</TableHead>
                        <TableHead className="text-right">Variação 24h</TableHead>
                        <TableHead className="text-right">Cap. de Mercado</TableHead>
                        <TableHead className="text-right">Volume 24h</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getSelectedCryptoData().map(
                        (crypto, index) =>
                          crypto && (
                            <TableRow key={index}>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={crypto.image || "/placeholder.svg"}
                                    alt={crypto.name}
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                  />
                                  <span>{crypto.name}</span>
                                  <span className="text-muted-foreground">({crypto.symbol})</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-right font-medium">
                                R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                              <TableCell
                                className={`text-right ${crypto.change > 0 ? "text-green-500" : "text-red-500"}`}
                              >
                                {crypto.change > 0 ? "+" : ""}
                                {crypto.change}%
                              </TableCell>
                              <TableCell className="text-right">R$ {crypto.marketCap}</TableCell>
                              <TableCell className="text-right">R$ {crypto.volume}</TableCell>
                            </TableRow>
                          ),
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                {getSelectedCryptoData().map(
                  (crypto, index) =>
                    crypto && (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Image
                                src={crypto.image || "/placeholder.svg"}
                                alt={crypto.name}
                                width={32}
                                height={32}
                                className="rounded-full"
                              />
                              <CardTitle>
                                {crypto.name} ({crypto.symbol})
                              </CardTitle>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/criptomoedas/${crypto.symbol.toLowerCase()}`}>Detalhes</Link>
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-4">{crypto.description}</p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Preço Atual:</span>
                              <span className="font-medium">
                                R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Máxima Histórica:</span>
                              <span className="font-medium">
                                R$ {crypto.allTimeHigh.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Mínima Histórica:</span>
                              <span className="font-medium">
                                R$ {crypto.allTimeLow.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Data de Lançamento:</span>
                              <span className="font-medium">{crypto.launchDate}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-muted-foreground">Algoritmo:</span>
                              <span className="font-medium">{crypto.algorithm}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full" asChild>
                            <Link href={crypto.website} target="_blank">
                              Visitar Site Oficial <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ),
                )}
              </div>
            </TabsContent>

            <TabsContent value="charts" className="space-y-6">
              <div className="grid gap-6">
                {getSelectedCryptoData().map(
                  (crypto, index) =>
                    crypto && (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            <Image
                              src={crypto.image || "/placeholder.svg"}
                              alt={crypto.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <CardTitle>
                              {crypto.name} ({crypto.symbol})
                            </CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="h-[300px]">
                            <EnhancedCryptoChart
                              symbol={crypto.symbol}
                              name={crypto.name}
                              currentPrice={crypto.price}
                              change={crypto.change}
                              high24h={crypto.high24h}
                              low24h={crypto.low24h}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ),
                )}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Comparação de Desempenho</CardTitle>
                  <CardDescription>Desempenho relativo nos últimos 30 dias</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <div className="h-full flex items-center justify-center text-muted-foreground">
                    Gráfico de comparação de desempenho
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Comparação Detalhada</CardTitle>
                  <CardDescription>Análise técnica e fundamentalista</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Métrica</TableHead>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableHead key={index}>
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={crypto.image || "/placeholder.svg"}
                                    alt={crypto.name}
                                    width={16}
                                    height={16}
                                    className="rounded-full"
                                  />
                                  {crypto.symbol}
                                </div>
                              </TableHead>
                            ),
                        )}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Preço Atual (BRL)</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                R$ {crypto.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Variação 24h</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index} className={crypto.change > 0 ? "text-green-500" : "text-red-500"}>
                                {crypto.change > 0 ? "+" : ""}
                                {crypto.change}%
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Capitalização de Mercado</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) => crypto && <TableCell key={index}>R$ {crypto.marketCap}</TableCell>,
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Volume 24h</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) => crypto && <TableCell key={index}>R$ {crypto.volume}</TableCell>,
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Máxima 24h</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                R$ {crypto.high24h.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mínima 24h</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                R$ {crypto.low24h.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Máxima Histórica</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                R$ {crypto.allTimeHigh.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mínima Histórica</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                R$ {crypto.allTimeLow.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Data de Lançamento</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) => crypto && <TableCell key={index}>{crypto.launchDate}</TableCell>,
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Algoritmo</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) => crypto && <TableCell key={index}>{crypto.algorithm}</TableCell>,
                        )}
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Website</TableCell>
                        {getSelectedCryptoData().map(
                          (crypto, index) =>
                            crypto && (
                              <TableCell key={index}>
                                <Link href={crypto.website} className="text-primary hover:underline" target="_blank">
                                  {crypto.website.replace("https://", "")}
                                </Link>
                              </TableCell>
                            ),
                        )}
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button size="lg" asChild>
                  <Link href="/#download">
                    Baixar App para Análises Avançadas <ArrowDownToLine className="ml-2 h-4 w-4" />
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

