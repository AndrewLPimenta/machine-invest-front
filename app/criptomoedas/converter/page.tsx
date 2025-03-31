"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowRight, RefreshCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { motion } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const cryptos = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 245876.32,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 12543.87,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    price: 1876.54,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: 543.21,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: 2.87,
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "XRP",
    symbol: "XRP",
    price: 3.21,
    image: "/placeholder.svg?height=32&width=32",
  },
]

const fiatCurrencies = [
  { name: "Real Brasileiro", symbol: "BRL", price: 1 },
  { name: "Dólar Americano", symbol: "USD", price: 5.05 },
  { name: "Euro", symbol: "EUR", price: 5.5 },
  { name: "Libra Esterlina", symbol: "GBP", price: 6.4 },
]

const allCurrencies = [...cryptos, ...fiatCurrencies]

export default function ConverterPage() {
  const [fromCurrency, setFromCurrency] = useState("BTC")
  const [toCurrency, setToCurrency] = useState("BRL")
  const [fromAmount, setFromAmount] = useState("1")
  const [toAmount, setToAmount] = useState("")
  const [recentConversions, setRecentConversions] = useState<any[]>([])

  const getPrice = (symbol: string) => {
    const currency = allCurrencies.find((c) => c.symbol === symbol)
    return currency ? currency.price : 0
  }

  const handleConvert = () => {
    const fromPrice = getPrice(fromCurrency)
    const toPrice = getPrice(toCurrency)

    if (fromPrice && toPrice) {
      const result = (Number.parseFloat(fromAmount) * fromPrice) / toPrice
      setToAmount(result.toFixed(8))

      // Add to recent conversions
      const newConversion = {
        id: Date.now(),
        fromAmount,
        fromCurrency,
        toAmount: result.toFixed(8),
        toCurrency,
        timestamp: new Date().toISOString(),
      }

      setRecentConversions((prev) => [newConversion, ...prev.slice(0, 4)])
    }
  }

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Conversor de Criptomoedas"
          description="Converta facilmente entre criptomoedas e moedas fiduciárias com taxas de câmbio em tempo real."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Card>
              <CardHeader>
                <CardTitle>Conversor</CardTitle>
                <CardDescription>Converta entre criptomoedas e moedas fiduciárias</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="from-amount">De</Label>
                    <div className="flex gap-2">
                      <Input
                        id="from-amount"
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="flex-1"
                      />
                      <Select value={fromCurrency} onValueChange={setFromCurrency}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <div className="max-h-[300px] overflow-y-auto">
                            {cryptos.map((crypto) => (
                              <SelectItem key={crypto.symbol} value={crypto.symbol}>
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
                            <div className="py-2 px-2 text-xs font-medium text-muted-foreground">
                              Moedas Fiduciárias
                            </div>
                            {fiatCurrencies.map((fiat) => (
                              <SelectItem key={fiat.symbol} value={fiat.symbol}>
                                {fiat.name} ({fiat.symbol})
                              </SelectItem>
                            ))}
                          </div>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" size="icon" onClick={handleSwap}>
                      <ArrowDown className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="to-amount">Para</Label>
                    <div className="flex gap-2">
                      <Input id="to-amount" type="text" value={toAmount} readOnly className="flex-1" />
                      <Select value={toCurrency} onValueChange={setToCurrency}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Selecione" />
                        </SelectTrigger>
                        <SelectContent>
                          <div className="max-h-[300px] overflow-y-auto">
                            {fiatCurrencies.map((fiat) => (
                              <SelectItem key={fiat.symbol} value={fiat.symbol}>
                                {fiat.name} ({fiat.symbol})
                              </SelectItem>
                            ))}
                            <div className="py-2 px-2 text-xs font-medium text-muted-foreground">Criptomoedas</div>
                            {cryptos.map((crypto) => (
                              <SelectItem key={crypto.symbol} value={crypto.symbol}>
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
                          </div>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Taxa de câmbio:</span>
                  <span>
                    1 {fromCurrency} = {(getPrice(fromCurrency) / getPrice(toCurrency)).toFixed(8)} {toCurrency}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" onClick={handleConvert}>
                  Converter <RefreshCw className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Os valores são atualizados a cada 60 segundos. Última atualização: {new Date().toLocaleTimeString()}
                </p>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Conversões Recentes</CardTitle>
                <CardDescription>Histórico das suas últimas conversões</CardDescription>
              </CardHeader>
              <CardContent>
                {recentConversions.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>De</TableHead>
                        <TableHead>Para</TableHead>
                        <TableHead className="text-right">Hora</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentConversions.map((conversion) => (
                        <TableRow key={conversion.id}>
                          <TableCell>
                            {conversion.fromAmount} {conversion.fromCurrency}
                          </TableCell>
                          <TableCell>
                            {conversion.toAmount} {conversion.toCurrency}
                          </TableCell>
                          <TableCell className="text-right">
                            {new Date(conversion.timestamp).toLocaleTimeString()}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <p className="text-muted-foreground">Nenhuma conversão recente</p>
                    <p className="text-sm text-muted-foreground mt-2">Suas conversões aparecerão aqui</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <div className="space-y-4 w-full">
                  <div className="rounded-lg bg-muted p-4">
                    <h3 className="font-medium mb-2">Taxas Populares</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>1 BTC =</span>
                        <span>R$ {getPrice("BTC").toLocaleString("pt-BR")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>1 ETH =</span>
                        <span>R$ {getPrice("ETH").toLocaleString("pt-BR")}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>1 USD =</span>
                        <span>R$ {getPrice("USD").toLocaleString("pt-BR")}</span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/criptomoedas">
                      Ver Todas as Criptomoedas <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  )
}

