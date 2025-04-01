"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts"
import { motion } from "framer-motion"

// Dados simulados para os gráficos
const generateData = (cryptos: string[], days = 30) => {
  const data = []
  const today = new Date()

  for (let i = days; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    const entry: any = {
      date: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
      fullDate: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" }),
    }

    cryptos.forEach((crypto) => {
      // Valor base para cada cripto
      let baseValue = 0
      switch (crypto) {
        case "BTC":
          baseValue = 240000
          break
        case "ETH":
          baseValue = 12000
          break
        case "BNB":
          baseValue = 1800
          break
        case "SOL":
          baseValue = 540
          break
        case "ADA":
          baseValue = 2.8
          break
        case "XRP":
          baseValue = 3.2
          break
        default:
          baseValue = 1000
      }

      // Adiciona variação aleatória para simular movimento de preço
      const randomFactor = 0.98 + Math.random() * 0.04 // Variação de -2% a +2%
      const trendFactor = 1 + (i % 7 === 0 ? (Math.random() - 0.5) * 0.08 : 0) // Tendência maior a cada 7 dias

      entry[crypto] = Math.round(baseValue * randomFactor * trendFactor * 100) / 100

      // Adiciona volume
      entry[`${crypto}_volume`] = Math.round(baseValue * randomFactor * Math.random() * 10000)
    })

    data.push(entry)
  }

  return data
}

// Cores para cada criptomoeda
const cryptoColors: Record<string, string> = {
  BTC: "#F7931A",
  ETH: "#627EEA",
  BNB: "#F3BA2F",
  SOL: "#00FFA3",
  ADA: "#0033AD",
  XRP: "#23292F",
}

interface CryptoComparisonChartProps {
  selectedCryptos: string[]
  timeframe?: "7d" | "30d" | "90d" | "1y"
}

export function CryptoComparisonChart({ selectedCryptos, timeframe = "30d" }: CryptoComparisonChartProps) {
  const [chartType, setChartType] = useState<"line" | "area" | "bar">("line")

  // Determinar o número de dias com base no timeframe
  const days = timeframe === "7d" ? 7 : timeframe === "30d" ? 30 : timeframe === "90d" ? 90 : 365

  // Gerar dados para o gráfico
  const data = generateData(selectedCryptos, days)

  // Formatar valores para o tooltip
  const formatValue = (value: number) => {
    return value >= 1000
      ? `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`
      : `R$ ${value.toFixed(2)}`
  }

  // Componente personalizado para o tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3">
          <p className="font-medium mb-2">{payload[0]?.payload.fullDate}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
              <p className="text-sm">
                <span className="font-medium">{entry.name}:</span> {formatValue(entry.value)}
              </p>
            </div>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="w-full">
        <CardHeader className="pb-2">
          <CardTitle>Comparação de Desempenho</CardTitle>
          <Tabs
            defaultValue="line"
            value={chartType}
            onValueChange={(value) => setChartType(value as "line" | "area" | "bar")}
            className="w-full mt-2"
          >
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="line">Linha</TabsTrigger>
              <TabsTrigger value="area">Área</TabsTrigger>
              <TabsTrigger value="bar">Barras</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {chartType === "line" ? (
                <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `R$ ${value >= 1000 ? (value / 1000).toFixed(1) + "k" : value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {selectedCryptos.map((crypto, index) => (
                    <Line
                      key={crypto}
                      type="monotone"
                      dataKey={crypto}
                      name={crypto}
                      stroke={cryptoColors[crypto] || `hsl(${index * 60}, 70%, 50%)`}
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 6 }}
                      animationDuration={1500}
                    />
                  ))}
                </LineChart>
              ) : chartType === "area" ? (
                <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `R$ ${value >= 1000 ? (value / 1000).toFixed(1) + "k" : value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {selectedCryptos.map((crypto, index) => (
                    <Area
                      key={crypto}
                      type="monotone"
                      dataKey={crypto}
                      name={crypto}
                      stroke={cryptoColors[crypto] || `hsl(${index * 60}, 70%, 50%)`}
                      fill={cryptoColors[crypto] || `hsl(${index * 60}, 70%, 50%)`}
                      fillOpacity={0.2}
                      strokeWidth={2}
                      activeDot={{ r: 6 }}
                      animationDuration={1500}
                    />
                  ))}
                </AreaChart>
              ) : (
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="date" />
                  <YAxis tickFormatter={(value) => `R$ ${value >= 1000 ? (value / 1000).toFixed(1) + "k" : value}`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  {selectedCryptos.map((crypto, index) => (
                    <Bar
                      key={crypto}
                      dataKey={crypto}
                      name={crypto}
                      fill={cryptoColors[crypto] || `hsl(${index * 60}, 70%, 50%)`}
                      animationDuration={1500}
                    />
                  ))}
                </BarChart>
              )}
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

