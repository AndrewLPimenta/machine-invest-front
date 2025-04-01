"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { motion } from "framer-motion"
import { ArrowRight, Calculator } from "lucide-react"
import Link from "next/link"

export function SavingsCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(50000)
  const [monthlyFee, setMonthlyFee] = useState(30)
  const [transfersPerMonth, setTransfersPerMonth] = useState(5)
  const [creditCardFee, setCreditCardFee] = useState(400)

  // Calculate savings
  const annualMaintenanceSavings = monthlyFee * 12
  const annualTransferSavings = transfersPerMonth * 12 * 15 // Assuming R$15 per transfer
  const annualAdminSavings = investmentAmount * 0.015 // 1.5% difference in admin fee
  const annualCreditCardSavings = creditCardFee
  const totalAnnualSavings =
    annualMaintenanceSavings + annualTransferSavings + annualAdminSavings + annualCreditCardSavings

  // Calculate 5-year savings with compound interest (assuming 10% annual return)
  const fiveYearSavings = Array(5)
    .fill(0)
    .reduce((acc, _, index) => {
      return acc * 1.1 + totalAnnualSavings
    }, 0)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <CardHeader className="pb-2 bg-primary/5">
          <CardTitle className="flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Calculadora de Economia
          </CardTitle>
          <CardDescription>Descubra quanto você pode economizar ao migrar para a Machine Invest</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-2">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="investment">Valor investido (R$)</Label>
                <span className="text-sm font-medium">R$ {investmentAmount.toLocaleString("pt-BR")}</span>
              </div>
              <Slider
                id="investment"
                min={1000}
                max={1000000}
                step={1000}
                value={[investmentAmount]}
                onValueChange={(value) => setInvestmentAmount(value[0])}
                className="py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="monthlyFee">Taxa mensal de manutenção (R$)</Label>
                <span className="text-sm font-medium">R$ {monthlyFee.toFixed(2)}</span>
              </div>
              <Slider
                id="monthlyFee"
                min={0}
                max={100}
                step={5}
                value={[monthlyFee]}
                onValueChange={(value) => setMonthlyFee(value[0])}
                className="py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="transfers">Transferências por mês</Label>
                <span className="text-sm font-medium">{transfersPerMonth}</span>
              </div>
              <Slider
                id="transfers"
                min={0}
                max={20}
                step={1}
                value={[transfersPerMonth]}
                onValueChange={(value) => setTransfersPerMonth(value[0])}
                className="py-2"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="creditCard">Anuidade cartão de crédito (R$)</Label>
                <span className="text-sm font-medium">R$ {creditCardFee.toFixed(2)}</span>
              </div>
              <Slider
                id="creditCard"
                min={0}
                max={1000}
                step={50}
                value={[creditCardFee]}
                onValueChange={(value) => setCreditCardFee(value[0])}
                className="py-2"
              />
            </div>
          </div>
        </CardContent>

        <div className="border-t my-4"></div>

        <CardContent className="pt-2">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Taxa de manutenção de conta (anual)</span>
              <span className="font-medium text-green-500">R$ {annualMaintenanceSavings.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Taxas de transferência (estimativa anual)</span>
              <span className="font-medium text-green-500">R$ {annualTransferSavings.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Economia em taxa de administração</span>
              <span className="font-medium text-green-500">R$ {annualAdminSavings.toLocaleString("pt-BR")}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Anuidade de cartão de crédito</span>
              <span className="font-medium text-green-500">R$ {annualCreditCardSavings.toLocaleString("pt-BR")}</span>
            </div>
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="font-bold">Economia total anual</span>
              <span className="font-bold text-green-500">R$ {totalAnnualSavings.toLocaleString("pt-BR")}</span>
            </div>
            <div className="pt-2 flex justify-between items-center bg-primary/5 p-3 rounded-lg">
              <span className="font-bold">Economia em 5 anos</span>
              <span className="font-bold text-green-500">R$ {Math.round(fiveYearSavings).toLocaleString("pt-BR")}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href="/cadastro">
              Comece a economizar agora <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

