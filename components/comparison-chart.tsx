"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

interface ComparisonData {
  label: string
  machineInvest: number
  traditional: number
  color: string
}

interface ComparisonChartProps {
  title: string
  description: string
  data: ComparisonData[]
}

export function ComparisonChart({ title, description, data }: ComparisonChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
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
    const barWidth = width / (data.length * 2 + 1)
    const spacing = barWidth / 2

    // Find max value for scaling
    const maxValue = Math.max(...data.map((item) => Math.max(item.machineInvest, item.traditional))) * 1.1

    // Draw bars
    data.forEach((item, index) => {
      const x1 = index * (barWidth * 2 + spacing) + spacing
      const x2 = x1 + barWidth

      const machineHeight = (item.machineInvest / maxValue) * height
      const traditionalHeight = (item.traditional / maxValue) * height

      // Machine Invest bar
      ctx.fillStyle = item.color
      ctx.fillRect(x1, height - machineHeight, barWidth, machineHeight)

      // Traditional bank bar
      ctx.fillStyle = theme === "dark" ? "#374151" : "#e5e7eb"
      ctx.fillRect(x2, height - traditionalHeight, barWidth, traditionalHeight)

      // Labels
      ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x1 + barWidth / 2, height - 5)
    })

    // Legend
    const legendY = 20

    // Machine Invest
    ctx.fillStyle = "#10b981"
    ctx.fillRect(width - 120, legendY, 10, 10)
    ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
    ctx.textAlign = "left"
    ctx.fillText("Machine Invest", width - 105, legendY + 8)

    // Traditional
    ctx.fillStyle = theme === "dark" ? "#374151" : "#e5e7eb"
    ctx.fillRect(width - 120, legendY + 15, 10, 10)
    ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
    ctx.fillText("Bancos Tradicionais", width - 105, legendY + 23)
  }, [data, theme])

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <canvas ref={canvasRef} width={500} height={300} className="w-full h-full" />
        </div>
      </CardContent>
    </Card>
  )
}

