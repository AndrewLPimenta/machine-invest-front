"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/section"

interface Resultado {
  bruto: number
  rendimento: number
  liquido: number
}

interface SimuladorRendaFixaProps {
  isLoggedIn?: boolean
  maxFreeSimulations?: number
}

export function SimuladorRendaFixa({ isLoggedIn = false, maxFreeSimulations = 3 }: SimuladorRendaFixaProps) {
  const [valorInicial, setValorInicial] = useState<number>(0)
  const [prazo, setPrazo] = useState<number>(0)
  const [tipo, setTipo] = useState("cdb")
  const [resultado, setResultado] = useState<Resultado | null>(null)
  const [simulated, setSimulated] = useState(false)
  const [simulationsCount, setSimulationsCount] = useState(0)

  const calcular = () => {
    if (!isLoggedIn && simulationsCount >= maxFreeSimulations) return

    const taxa = tipo === "cdb" ? 0.011 : tipo === "selic" ? 0.01 : tipo === "lci" ? 0.009 : 0.01
    const bruto = valorInicial * Math.pow(1 + taxa, prazo)
    const rendimento = bruto - valorInicial
    const ir = tipo === "lci" ? 0 : rendimento * 0.15
    const liquido = bruto - ir

    setResultado({ bruto, rendimento, liquido })
    setSimulated(true)

    if (!isLoggedIn) setSimulationsCount(prev => prev + 1)
  }

  return (
    <Section>
    <Card>
      <CardHeader>
        <CardTitle>Simulador de Renda Fixa</CardTitle>
        <CardDescription>Calcule o rendimento do seu investimento</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium">Valor inicial (R$)</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="1000"
            onChange={(e) => setValorInicial(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Prazo (meses)</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded-md"
            placeholder="12"
            onChange={(e) => setPrazo(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Tipo de investimento</label>
          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="cdb">CDB (110% CDI)</option>
            <option value="selic">Tesouro Selic</option>
            <option value="lci">LCI/LCA (90% CDI)</option>
          </select>
        </div>

        {!isLoggedIn && simulationsCount >= maxFreeSimulations ? (
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login">Faça login para simular mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        ) : (
          <Button className="w-full" onClick={calcular}>Calcular</Button>
        )}
      </CardContent>

      {simulated && resultado && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-muted rounded-b-lg"
        >
          <div className="flex justify-between mb-2">
            <span className="text-sm">Valor bruto:</span>
            <span className="font-medium">R$ {resultado.bruto.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-sm">Rendimento:</span>
            <span className="font-medium">
              R$ {resultado.rendimento.toFixed(2)} ({((resultado.rendimento / valorInicial) * 100).toFixed(1)}%)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Valor líquido:</span>
            <span className="font-medium">R$ {resultado.liquido.toFixed(2)}</span>
          </div>
        </motion.div>
      )}
    </Card>
    </Section>
  )
}
