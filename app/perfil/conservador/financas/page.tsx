"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, ArrowRight, Target, ArrowLeft } from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { PageLayout } from "@/components/page-layout"
import { InvestmentForm } from "@/components/investment-form"
import { ExpenseForm } from "@/components/expense-form"
import { ExpenseSummary } from "@/components/expense-summary"
import { useFinanceService } from "@/service/investmentService"
import { useInvestment } from "@/hooks/useInvestment"
import { EnhancedPerformanceChart } from "@/components/enhanced-performance-chart"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { useAuth } from "@/contexts/auth-context"
import { Edit, Trash2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
export default function ConservadorPage() {
    const financeService = useFinanceService()
    const { fetchWithAuth, loading: authLoading, error: authError } = useInvestment()
    const { toast } = useToast()

    const [mounted, setMounted] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0)
    const [summary, setSummary] = useState<any>({})
    const [investments, setInvestments] = useState<any[]>([])
    const [expenses, setExpenses] = useState<any[]>([])
    const [expenseCategories, setExpenseCategories] = useState<any[]>([])
    const [loadingId, setLoadingId] = useState<number | null>(null)

    useEffect(() => setMounted(true), [])

    const reloadData = async () => {
        const data = await fetchWithAuth(async () => {
            const [sum, inv, exp, categories] = await Promise.all([
                financeService.getFinancialSummary(),
                financeService.getInvestments(),
                financeService.getExpenses(),
                financeService.getExpenseCategories()
            ])
            return { sum: sum?.data, inv: inv?.data, exp: exp?.data, categories: categories?.data }
        })
        if (data) {
            setSummary(data.sum ?? {})
            setInvestments(data.inv ?? [])
            setExpenses(data.exp ?? [])
            setExpenseCategories(data.categories ?? [])
        }
    }

    useEffect(() => { if (mounted) reloadData() }, [refreshKey, mounted])

    const handleInvestmentAdded = () => setRefreshKey(prev => prev + 1)
    const handleExpenseAdded = () => setRefreshKey(prev => prev + 1)

    const handleDeleteExpense = async (id: number) => {
        if (!confirm("Tem certeza que deseja deletar este gasto?")) return
        try {
            setLoadingId(id)
            await fetchWithAuth(() => financeService.deleteExpense(id))
            toast({ title: "Sucesso", description: "Gasto deletado." })
            handleExpenseAdded()
        } catch (error: any) {
            toast({ title: "Erro", description: error.message || "Falha ao deletar gasto.", variant: "destructive" })
        } finally {
            setLoadingId(null)
        }
    }

    const handleDeleteInvestment = async (id: number) => {
        if (!confirm("Tem certeza que deseja deletar este investimento?")) return
        try {
            setLoadingId(id)
            await fetchWithAuth(() => financeService.deleteInvestment(id))
            toast({ title: "Sucesso", description: "Investimento deletado." })
            handleInvestmentAdded()
        } catch (error: any) {
            toast({ title: "Erro", description: error.message || "Falha ao deletar investimento.", variant: "destructive" })
        } finally {
            setLoadingId(null)
        }
    }

    const handleEditExpense = (expense: any) => {
        toast({ title: "Funcionalidade", description: `Editar gasto: ${expense.descricao}` })
    }

    const handleEditInvestment = (investment: any) => {
        toast({ title: "Funcionalidade", description: `Editar investimento: ${investment.descricao}` })
    }

    const total =
        (summary?.totalInvestimentos ?? 0) +
        (summary?.totalGastos ?? 0) +
        (summary?.saldo ?? 0)

    const chartData = total > 0 ? [
        {
            label: "Investimentos",
            value: Math.round(((summary?.totalInvestimentos ?? 0) / total) * 100),
            color: "#3b82f6",
        },
        {
            label: "Gastos",
            value: Math.round(((summary?.totalGastos ?? 0) / total) * 100),
            color: "#ef4444",
        },
        {
            label: "Liquidez",
            value: Math.round(((summary?.saldo ?? 0) / total) * 100),
            color: "#22c55e",
        },
    ] : []

    if (!mounted) return (
        <PageLayout>
            <AuthRedirect>
                <p className="text-center text-gray-500 mt-12">Carregando...</p>
            </AuthRedirect>
        </PageLayout>
    )

    return (
        <PageLayout>
            <AuthRedirect>
                {authLoading && <p className="text-center text-gray-500">Carregando...</p>}
                {authError && <p className="text-center text-red-500">{authError}</p>}

                <div className="min-h-screen bg-background px-4 py-12">

                    {/* Gráfico de Performance */}
                    <div className="mb-12">
                        <EnhancedPerformanceChart
                            title="Resumo da Carteira"
                            description="Distribuição entre investimentos, gastos e liquidez."
                            data={chartData}
                        />
                    </div>

                    {/* Resumo Financeiro */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
                            <CardContent className="text-center">
                                <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-sm font-semibold text-primary/60 uppercase">INVESTIMENTOS</p>
                                <p className="text-2xl font-bold">
                                    {(summary?.totalInvestimentos ?? 0).toLocaleString("pt-BR")} R$
                                </p>
                            </CardContent>
                        </Card>

                        <ExpenseSummary
                            expenses={expenses}
                            totalExpenses={summary?.totalGastos ?? 0}
                            onExpenseDeleted={handleExpenseAdded}
                            onExpenseUpdated={() => { }}
                            financeService={financeService}
                            fetchWithAuth={fetchWithAuth}
                        />

                        <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
                            <CardContent className="text-center">
                                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                                <p className="text-sm font-semibold text-primary/60 uppercase">LIQUIDEZ</p>
                                <p className="text-2xl font-bold">
                                    {(summary?.saldo ?? 0).toLocaleString("pt-BR")} R$
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Formulários */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        <InvestmentForm
                            onInvestmentAdded={handleInvestmentAdded}
                            fetchWithAuth={fetchWithAuth}
                            financeService={financeService}
                        />

                        <ExpenseForm
                            onExpenseAdded={handleExpenseAdded}
                            fetchWithAuth={fetchWithAuth}
                            financeService={financeService}
                            expenseCategories={expenseCategories}
                        />
                    </div>

                    {/* Listas com Edit/Delete */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Investimentos */}
                        <Card>
                            <CardHeader><CardTitle>Investimentos</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                {investments.length === 0 ? (
                                    <p className="text-gray-500 text-center py-4">Nenhum investimento registrado</p>
                                ) : (
                                    investments.map(inv => (
                                        <div key={inv.id} className="flex justify-between items-center p-2 border-b border-white/20">
                                            <div className="flex-1">
                                                <p>{inv.tipoInvestimento?.nome} - {inv.descricao}</p>
                                            </div>
                                            <span>{inv.valor.toLocaleString("pt-BR")} R$</span>
                                            <div className="flex gap-2 ml-2">
                                                <Button size="sm" variant="outline" onClick={() => handleEditInvestment(inv)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button size="sm" variant="destructive" onClick={() => handleDeleteInvestment(inv.id)} disabled={loadingId === inv.id}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </CardContent>
                        </Card>

                        {/* Gastos */}
                        <Card>
                            <CardHeader><CardTitle>Gastos</CardTitle></CardHeader>
                            <CardContent className="space-y-2">
                                {expenses.length === 0 ? (
                                    <p className="text-gray-500 text-center py-4">Nenhum gasto registrado</p>
                                ) : (
                                    expenses.map(exp => (
                                        <div key={exp.id} className="flex justify-between items-center p-2 border-b border-white/20">
                                            <div className="flex-1">
                                                <p>{exp.categoria?.nome || "Sem categoria"} - {exp.descricao}</p>
                                            </div>
                                            <span>{exp.valor.toLocaleString("pt-BR")} R$</span>
                                            <div className="flex gap-2 ml-2">
                                                <Button size="sm" variant="outline" onClick={() => handleEditExpense(exp)}>
                                                    <Edit className="h-4 w-4" />
                                                </Button>
                                                <Button size="sm" variant="destructive" onClick={() => handleDeleteExpense(exp.id)} disabled={loadingId === exp.id}>
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <Card className="mt-12 mx-4 mb-12 bg-background border border-primary/30 backdrop-blur shadow-xl flex justify-center items-center">
                    <CardContent className="w-full py-6">
                        <div className="flex justify-center ">
                            <Link href="/perfil/conservador" passHref>
                                <Button size="lg" className="group" asChild>
                                    <span>
                                         <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        Voltar ao Início
                                       
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>

            </AuthRedirect>
        </PageLayout>
    )
}
