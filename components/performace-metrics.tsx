"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUp, ArrowDown, Minus, TrendingUp, TrendingDown, Activity } from "lucide-react"
import { motion } from "framer-motion"

interface MetricProps {
  title: string
  value: string | number
  change: number
  changeText?: string
  icon?: React.ReactNode
}

function Metric({ title, value, change, changeText, icon }: MetricProps) {
  return (
    <motion.div
      className="flex flex-col gap-1"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        {icon}
        <span>{title}</span>
      </div>
      <div className="text-2xl font-bold">{value}</div>
      <div className="flex items-center gap-1">
        {change > 0 ? (
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
            <ArrowUp className="h-3 w-3 mr-1" />
            {change}%
          </Badge>
        ) : change < 0 ? (
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            <ArrowDown className="h-3 w-3 mr-1" />
            {Math.abs(change)}%
          </Badge>
        ) : (
          <Badge variant="outline" className="bg-gray-50 text-gray-600 border-gray-200">
            <Minus className="h-3 w-3 mr-1" />
            0%
          </Badge>
        )}
        {changeText && <span className="text-xs text-muted-foreground">{changeText}</span>}
      </div>
    </motion.div>
  )
}

interface PerformanceMetricsProps {
  cryptos: Array<{
    name: string
    symbol: string
    price: number
    change: number
    marketCap: string
    volume: string
  }>
}

export function PerformanceMetrics({ cryptos }: PerformanceMetricsProps) {
  // Calcular métricas de desempenho
  const totalMarketCap = cryptos.reduce((sum, crypto) => {
    const numericValue = Number.parseFloat(crypto.marketCap.replace(/[^0-9.]/g, ""))
    const multiplier = crypto.marketCap.includes("T") ? 1000 : 1
    return sum + numericValue * multiplier
  }, 0)

  const avgChange = cryptos.reduce((sum, crypto) => sum + crypto.change, 0) / cryptos.length

  const bestPerformer = [...cryptos].sort((a, b) => b.change - a.change)[0]
  const worstPerformer = [...cryptos].sort((a, b) => a.change - b.change)[0]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Métricas de Desempenho</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Metric
            title="Cap. de Mercado Total"
            value={`R$ ${totalMarketCap.toFixed(1)}B`}
            change={avgChange}
            changeText="média"
            icon={<Activity className="h-4 w-4" />}
          />
          <Metric
            title="Variação Média"
            value={`${avgChange.toFixed(2)}%`}
            change={avgChange}
            icon={avgChange > 0 ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          />
          <Metric
            title="Melhor Desempenho"
            value={bestPerformer.symbol}
            change={bestPerformer.change}
            changeText="em 24h"
            icon={<TrendingUp className="h-4 w-4" />}
          />
          <Metric
            title="Pior Desempenho"
            value={worstPerformer.symbol}
            change={worstPerformer.change}
            changeText="em 24h"
            icon={<TrendingDown className="h-4 w-4" />}
          />
        </div>
      </CardContent>
    </Card>
  )
}

