// components/expense-summary.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ExpenseSummaryProps {
  expenses: any[]
  totalExpenses: number
}

export function ExpenseSummary({ expenses, totalExpenses }: ExpenseSummaryProps) {
  return (
    <>
      {/* Card de Gastos no Resumo Financeiro */}
      <Card className="bg-background border border-primary/30 backdrop-blur shadow-xl">
        <CardContent className="text-center">
          <div className="h-6 w-6 text-primary mx-auto mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-primary/60 uppercas">GASTOS</p>
          <p className="text-2xl font-bold ">{totalExpenses.toLocaleString("pt-BR")} R$</p>
        </CardContent>
      </Card>

      {/* Lista de Gastos */}
      {/* <Card>
        <CardHeader>
          <CardTitle>Gastos</CardTitle>
        </CardHeader>
        <CardContent>
          {expenses.length === 0 ? (
            <p className="text-gray-500 text-center py-4">Nenhum gasto registrado</p>
          ) : (
            expenses.map(exp => (
              <div key={exp.id} className="flex justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <p className="font-medium">{exp.descricao}</p>
                  <p className="text-sm text-gray-500">
                    {exp.categoria?.nome || "Sem categoria"} • {new Date(exp.dataGasto).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <span className="text-red-600 font-semibold">
                  {exp.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                </span>
              </div>
            ))
          )}
        </CardContent>
      </Card> */}
    </>
  )
}

