"use client"

import { PageLayout } from "@/components/page-layout"
import { useState, useMemo } from "react"
import { MachineIAChatbot } from "@/components/machine-ia-chatbot"

type LoanType = 'pessoal' | 'consignado' | 'garantia'

interface LoanTerms {
  minAmount: number
  maxAmount: number
  minTerm: number
  maxTerm: number
  interestRate: number
  step: number
}

const loanTerms: Record<LoanType, LoanTerms> = {
  pessoal: {
    minAmount: 1000,
    maxAmount: 50000,
    minTerm: 6,
    maxTerm: 60,
    interestRate: 1.99,
    step: 1000
  },
  consignado: {
    minAmount: 2000,
    maxAmount: 100000,
    minTerm: 12,
    maxTerm: 84,
    interestRate: 1.2,
    step: 1000
  },
  garantia: {
    minAmount: 5000,
    maxAmount: 200000,
    minTerm: 12,
    maxTerm: 120,
    interestRate: 0.99,
    step: 5000
  }
}

export default function IaPage() {
  const [activeTab, setActiveTab] = useState<LoanType>('pessoal')
  const [loanAmount, setLoanAmount] = useState(loanTerms[activeTab].minAmount)
  const [loanTerm, setLoanTerm] = useState(loanTerms[activeTab].minTerm)

  const handleTabChange = (value: string) => {
    const newTab = value as LoanType
    setActiveTab(newTab)
    // Reset values to new tab's minimums
    setLoanAmount(loanTerms[newTab].minAmount)
    setLoanTerm(loanTerms[newTab].minTerm)
  }

  const { monthlyPayment, totalAmount } = useMemo(() => {
    const rate = loanTerms[activeTab].interestRate / 100
    const numerator = loanAmount * rate * Math.pow(1 + rate, loanTerm)
    const denominator = Math.pow(1 + rate, loanTerm) - 1
    const monthly = numerator / denominator
    const total = monthly * loanTerm

    return {
      monthlyPayment: monthly,
      totalAmount: total
    }
  }, [loanAmount, loanTerm, activeTab])

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }


  return (
    <PageLayout>
      <MachineIAChatbot />
      
    </PageLayout>
  )
}