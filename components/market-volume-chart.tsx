"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface MarketVolumeChartProps {
  title: string
  description: string
}

export function MarketVolumeChart({ title, description }: MarketVolumeChartProps) {
  const [timeframe, setTimeframe] = useState("1w")
  const [chartData, setChartData] = useState<any[]>([])
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Generate random volume data for demo purposes
  const generateVolumeData = (days: number) => {
    const data = []
    const now = new Date()
    const baseVolume = 5000000000 // 5 billion base volume

    for (let i = days; i >= 0; i--) {
      const date = new Date(now)
      date.setDate(now.getDate() - i)

      // Random volume with some patterns (higher on weekdays, lower on weekends)
      const dayOfWeek = date.getDay()
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
      const volumeMultiplier = isWeekend ? 0.7 : 1 + Math.random() * 0.5
      const volume = baseVolume * volumeMultiplier

      // Random market sentiment
      const sentiment = Math.random()
      const isBullish = sentiment > 0.4

      data.push({
        date: date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" }),
        volume: volume,
        fullDate: date.toISOString(),
        isBullish: isBullish,
      })
    }

    return data
  }

  useEffect(() => {
    let dataPoints
    switch (timeframe) {
      case "1w":
        dataPoints = 7
        break
      case "1m":
        dataPoints = 30
        break
      case "3m":
        dataPoints = 90
        break
      default:
        dataPoints = 7
    }

    const data = generateVolumeData(dataPoints)
    setChartData(data)
  }, [timeframe])

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3">
          <p className="font-medium">
            {new Date(payload[0].payload.fullDate).toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "2-digit",
            })}
          </p>
          <p className="text-sm font-bold">Volume: R$ {(payload[0].value / 1000000000).toFixed(2)} bi</p>
          <p className="text-xs text-muted-foreground">
            {payload[0].payload.isBullish ? "Tendência de Alta" : "Tendência de Baixa"}
          </p>
        </div>
      )
    }
    return null
  }

  const formatYAxis = (value: number) => {
    return `${(value / 1000000000).toFixed(1)}B`
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="1w" value={timeframe} onValueChange={setTimeframe} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="1w">1 Semana</TabsTrigger>
              <TabsTrigger value="1m">1 Mês</TabsTrigger>
              <TabsTrigger value="3m">3 Meses</TabsTrigger>
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
                    <BarChart
                      data={chartData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 12 }}
                        tickFormatter={(value) => {
                          if (timeframe === "3m" && chartData.length > 30) {
                            // Only show every 5th day for 3-month view
                            const index = chartData.findIndex((d) => d.date === value)
                            return index % 5 === 0 ? value : ""
                          }
                          return value
                        }}
                      />
                      <YAxis tickFormatter={formatYAxis} tick={{ fontSize: 12 }} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="volume" name="Volume de Negociação" animationDuration={1000}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.isBullish ? "#10b981" : "#ef4444"} />
                        ))}
                      </Bar>
                    </BarChart>
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
              <span className="text-xs text-muted-foreground">Volume Total</span>
              <span className="text-sm font-bold">
                R$ {(chartData.reduce((sum, d) => sum + d.volume, 0) / 1000000000).toFixed(2)} bi
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Média Diária</span>
              <span className="text-sm font-bold">
                R$ {(chartData.reduce((sum, d) => sum + d.volume, 0) / chartData.length / 1000000000).toFixed(2)} bi
              </span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Dias de Alta</span>
              <span className="text-sm font-bold">{chartData.filter((d) => d.isBullish).length} dias</span>
            </motion.div>
            <motion.div
              className="flex flex-col rounded-lg border p-2"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-xs text-muted-foreground">Dias de Baixa</span>
              <span className="text-sm font-bold">{chartData.filter((d) => !d.isBullish).length} dias</span>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

