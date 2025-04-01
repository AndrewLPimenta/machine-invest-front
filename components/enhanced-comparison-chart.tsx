"use client"

import { useTheme } from "next-themes"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  type TooltipProps,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ComparisonData {
  label: string
  machineInvest: number
  traditional: number
  color: string
}

interface EnhancedComparisonChartProps {
  title: string
  description: string
  data: ComparisonData[]
  valuePrefix?: string
  valueSuffix?: string
  machineInvestLabel?: string
  traditionalLabel?: string
}

export function EnhancedComparisonChart({
  title,
  description,
  data,
  valuePrefix = "",
  valueSuffix = "%",
  machineInvestLabel = "Machine Invest",
  traditionalLabel = "Bancos Tradicionais",
}: EnhancedComparisonChartProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-md shadow-md p-3">
          <p className="font-medium">{label}</p>
          <div className="mt-2 space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <p className="text-sm">
                {machineInvestLabel}: {valuePrefix}
                {payload[0].value}
                {valueSuffix}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-muted" />
              <p className="text-sm">
                {traditionalLabel}: {valuePrefix}
                {payload[1].value}
                {valueSuffix}
              </p>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 70 }} barGap={8}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="label" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 12 }} />
                <YAxis tickFormatter={(value) => `${valuePrefix}${value}${valueSuffix}`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} wrapperStyle={{ paddingTop: "10px" }} />
                <Bar dataKey="machineInvest" name={machineInvestLabel} radius={[4, 4, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
                <Bar
                  dataKey="traditional"
                  name={traditionalLabel}
                  fill={isDark ? "#374151" : "#e5e7eb"}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

