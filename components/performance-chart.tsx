"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

interface PerformanceData {
  label: string
  value: number
  color: string
}

interface PerformanceChartProps {
  title: string
  description: string
  data: PerformanceData[]
}

export function PerformanceChart({ title, description, data }: PerformanceChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [chartType, setChartType] = useState<"pie" | "bar">("pie")
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const width = canvas.width
    const height = canvas.height

    if (chartType === "pie") {
      // Draw pie chart
      const total = data.reduce((sum, item) => sum + item.value, 0)
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) * 0.8

      let startAngle = 0

      // Draw slices
      data.forEach((item) => {
        const sliceAngle = (item.value / total) * 2 * Math.PI

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
        ctx.closePath()

        ctx.fillStyle = item.color
        ctx.fill()

        // Draw labels
        const midAngle = startAngle + sliceAngle / 2
        const labelRadius = radius * 0.7
        const labelX = centerX + Math.cos(midAngle) * labelRadius
        const labelY = centerY + Math.sin(midAngle) * labelRadius

        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`${Math.round((item.value / total) * 100)}%`, labelX, labelY)

        startAngle += sliceAngle
      })

      // Draw legend
      const legendX = width - 150
      let legendY = 30

      data.forEach((item) => {
        ctx.fillStyle = item.color
        ctx.fillRect(legendX, legendY, 15, 15)

        ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "left"
        ctx.textBaseline = "middle"
        ctx.fillText(item.label, legendX + 20, legendY + 7.5)

        legendY += 25
      })
    } else {
      // Draw bar chart
      const barWidth = width / (data.length * 2)
      const maxValue = Math.max(...data.map((item) => item.value)) * 1.1

      // Draw bars
      data.forEach((item, index) => {
        const x = index * barWidth * 2 + barWidth / 2
        const barHeight = (item.value / maxValue) * (height - 50)

        ctx.fillStyle = item.color
        ctx.fillRect(x, height - barHeight - 30, barWidth, barHeight)

        // Labels
        ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "top"
        ctx.fillText(item.label, x + barWidth / 2, height - 20)

        ctx.fillStyle = "#ffffff"
        ctx.font = "bold 12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        ctx.fillText(`${item.value}%`, x + barWidth / 2, height - barHeight - 35)
      })
    }
  }, [data, chartType, theme])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="pie"
          value={chartType}
          onValueChange={(value) => setChartType(value as "pie" | "bar")}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="pie">Gráfico de Pizza</TabsTrigger>
            <TabsTrigger value="bar">Gráfico de Barras</TabsTrigger>
          </TabsList>
          <TabsContent value={chartType} className="h-[300px] mt-4">
            <canvas ref={canvasRef} width={500} height={300} className="w-full h-full" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

