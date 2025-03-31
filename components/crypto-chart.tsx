"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface CryptoChartProps {
  symbol: string
  name: string
  currentPrice: number
  change: number
}

export function CryptoChart({ symbol, name, currentPrice, change }: CryptoChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [timeframe, setTimeframe] = useState("1d")
  const { theme } = useTheme()

  // Generate random price data for demo purposes
  const generatePriceData = (days: number, volatility: number, trend: number) => {
    const data = []
    let price = currentPrice

    for (let i = 0; i < days; i++) {
      // Random walk with trend
      const change = (Math.random() - 0.5) * volatility + trend
      price = price * (1 + change / 100)
      data.push(price)
    }

    return data
  }

  const getTimeframeData = () => {
    switch (timeframe) {
      case "1d":
        return generatePriceData(24, 0.5, change / 24)
      case "1w":
        return generatePriceData(7, 1, change / 7)
      case "1m":
        return generatePriceData(30, 2, change / 30)
      case "1y":
        return generatePriceData(365, 3, change / 365)
      default:
        return generatePriceData(24, 0.5, change / 24)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Get data for selected timeframe
    const priceData = getTimeframeData()

    // Find min and max for scaling
    const min = Math.min(...priceData) * 0.99
    const max = Math.max(...priceData) * 1.01

    // Draw chart
    const drawChart = () => {
      const width = canvas.width
      const height = canvas.height
      const dataPoints = priceData.length
      const stepX = width / (dataPoints - 1)

      // Draw line
      ctx.beginPath()
      ctx.moveTo(0, height - ((priceData[0] - min) / (max - min)) * height)

      for (let i = 1; i < dataPoints; i++) {
        const x = i * stepX
        const y = height - ((priceData[i] - min) / (max - min)) * height
        ctx.lineTo(x, y)
      }

      // Line style
      ctx.strokeStyle = change >= 0 ? "#10b981" : "#ef4444"
      ctx.lineWidth = 2
      ctx.stroke()

      // Fill area under the line
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()

      // Gradient fill
      const gradient = ctx.createLinearGradient(0, 0, 0, height)
      if (change >= 0) {
        gradient.addColorStop(0, "rgba(16, 185, 129, 0.2)")
        gradient.addColorStop(1, "rgba(16, 185, 129, 0)")
      } else {
        gradient.addColorStop(0, "rgba(239, 68, 68, 0.2)")
        gradient.addColorStop(1, "rgba(239, 68, 68, 0)")
      }

      ctx.fillStyle = gradient
      ctx.fill()
    }

    drawChart()
  }, [timeframe, currentPrice, change, theme])

  return (
    <Card>
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
          <TabsContent value={timeframe} className="h-[200px] mt-4">
            <canvas ref={canvasRef} width={500} height={200} className="w-full h-full" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

