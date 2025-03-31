"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"

interface EnhancedCryptoChartProps {
  symbol: string
  name: string
  currentPrice: number
  change: number
}

export function EnhancedCryptoChart({ symbol, name, currentPrice, change }: EnhancedCryptoChartProps) {
  const [timeframe, setTimeframe] = useState("1d")
  const [chartData, setChartData] = useState<any[]>([])
  const [hoveredData, setHoveredData] = useState<any | null>(null)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Generate random price data for demo purposes
  const generatePriceData = (days: number, volatility: number, trend: number) => {
    const data = []
    let price = currentPrice
    const now = new Date()

    for (let i = days; i >= 0; i--) {
      // Random walk with trend
      const change = (Math.random() - 0.5) * volatility + trend
      price = price * (1 + change / 100)

      const date = new Date(now)

      if (timeframe === "1d") {
        date.setHours(now.getHours() - i)
        data.push({
          time: date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
          price: price,
          fullDate: date.toISOString(),
        })
      } else if (timeframe === "1w") {
        date.setDate(now.getDate() - i)
        data.push({
          time: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
          price: price,
          fullDate: date.toISOString(),
        })
      } else if (timeframe === "1m") {
        date.setDate(now.getDate() - i)
        data.push({
          time: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
          price: price,
          fullDate: date.toISOString(),
        })
      } else if (timeframe === "1y") {
        date.setDate(now.getDate() - i)
        data.push({
          time: date.toLocaleDateString("pt-BR", { month: "2-digit", year: "2-digit" }),
          price: price,
          fullDate: date.toISOString(),
        })
      }
    }

    return data
  }

  useEffect(() => {
    let dataPoints
    switch (timeframe) {
      case "1d":
        dataPoints = 24
        break
      case "1w":
        dataPoints = 7
        break
      case "1m":
        dataPoints = 30
        break
      case "1y":
        dataPoints = 365
        break
      default:
        dataPoints = 24
    }

    const data = generatePriceData(
      dataPoints,
      timeframe === "1d" ? 0.5 : timeframe === "1w" ? 1 : timeframe === "1m" ? 2 : 3,
      change / dataPoints,
    )
    setChartData(data)
  }, [timeframe, currentPrice, change])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3">
          <p className="font-medium">
            {new Date(payload[0].payload.fullDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
              hour: timeframe === "1d" ? "2-digit" : undefined,
              minute: timeframe === "1d" ? "2-digit" : undefined,
            })}
          </p>
          <p className="text-sm font-bold">
            R$ {payload[0].value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      )
    }
    return null
  }

  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`
    }
    return value
  }

  // Calculate stats
  const minPrice = Math.min(...chartData.map((d) => d.price))
  const maxPrice = Math.max(...chartData.map((d) => d.price))
  const avgPrice = chartData.reduce((sum, d) => sum + d.price, 0) / chartData.length
  const volatility =
    (Math.sqrt(chartData.reduce((sum, d) => sum + Math.pow(d.price - avgPrice, 2), 0) / chartData.length) / avgPrice) *
    100

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>
                {name} ({symbol})
              </CardTitle>
              <CardDescription>
                Preço atual: R${" "}
                {currentPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </CardDescription>
            </div>
            <motion.div
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                change >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {change >= 0 ? "+" : ""}
              {change}%
            </motion.div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="1d" value={timeframe} onValueChange={setTimeframe} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="1d">1D</TabsTrigger>
              <TabsTrigger value="1w">1S</TabsTrigger>
              <TabsTrigger value="1m">1M</TabsTrigger>
              <TabsTrigger value="1y">1A</TabsTrigger>
            </TabsList>
            <AnimatePresence mode="wait">
              <motion.div
                key={timeframe}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value={timeframe} className="h-[250px] mt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      onMouseMove={(e) => {
                        if (e.activePayload) {
                          setHoveredData(e.activePayload[0].payload)
                        }
                      }}
                      onMouseLeave={() => setHoveredData(null)}
                    >
                      <defs>
                        <linearGradient id={`colorPrice${symbol}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={change >= 0 ? "#10b981" : "#ef4444"} stopOpacity={0.8} />
                          <stop offset="95%" stopColor={change >= 0 ? "#10b981" : "#ef4444"} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis
                        dataKey="time"
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => {
                          if (timeframe === "1y" && chartData.length > 30) {
                            // Only show every other month for yearly view
                            const index = chartData.findIndex((d) => d.time === value)
                            return index % 2 === 0 ? value : ""
                          }
                          return value
                        }}
                      />
                      <YAxis domain={["auto", "auto"]} tickFormatter={formatYAxis} tick={{ fontSize: 12 }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke={change >= 0 ? "#10b981" : "#ef4444"}
                        fillOpacity={1}
                        fill={`url(#colorPrice${symbol})`}
                        strokeWidth={2}
                        activeDot={{ r: 6 }}
                        animationDuration={1000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </Tabs>

          {/* Stats section */}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Mínimo</span>
              <span className="text-sm font-bold">
                R$ {minPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Máximo</span>
              <span className="text-sm font-bold">
                R$ {maxPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Média</span>
              <span className="text-sm font-bold">
                R$ {avgPrice.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Volatilidade</span>
              <span className="text-sm font-bold">{volatility.toFixed(2)}%</span>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

