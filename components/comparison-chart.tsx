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

    const width = canvas.width
    const height = canvas.height
    const barWidth = width / (data.length * 2 + 1)
    const spacing = barWidth / 2

    // Limpar canvas
    ctx.clearRect(0, 0, width, height)

    // Valor máximo para escala
    const maxValue = Math.max(...data.map((item) => Math.max(item.machineInvest, item.traditional))) * 1.1

    // Desenhar barras
    data.forEach((item, index) => {
      const x1 = index * (barWidth * 2 + spacing) + spacing
      const x2 = x1 + barWidth

      const machineHeight = (item.machineInvest / maxValue) * (height - 40) // espaço para labels
      const traditionalHeight = (item.traditional / maxValue) * (height - 40)

      // Barra Machine Invest
      ctx.fillStyle = item.color
      ctx.fillRect(x1, height - machineHeight - 20, barWidth, machineHeight)

      // Barra Outros Softwares
      ctx.fillStyle = theme === "dark" ? "#374151" : "#e5e7eb"
      ctx.fillRect(x2, height - traditionalHeight - 20, barWidth, traditionalHeight)

      // Labels
      ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(item.label, x1 + barWidth / 2, height - 5)
    })

    // Legenda
    const legendX = width - 120
    const legendY = 20
    const legendGap = 20

    // Machine Invest
    ctx.fillStyle = "#10b981"
    ctx.fillRect(legendX, legendY, 10, 10)
    ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
    ctx.textAlign = "left"
    ctx.fillText("Machine Invest", legendX + 15, legendY + 10)

    // Outros Softwares
    ctx.fillStyle = theme === "dark" ? "#374151" : "#e5e7eb"
    ctx.fillRect(legendX, legendY + legendGap, 10, 10)
    ctx.fillStyle = theme === "dark" ? "#e5e7eb" : "#374151"
    ctx.fillText("Outros Softwares", legendX + 15, legendY + legendGap + 10)
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
