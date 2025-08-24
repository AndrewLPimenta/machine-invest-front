import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { EnhancedHeader } from "@/components/enhanced-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Machine Invest | Perfil Moderado",
  description: "Perfil de investidor moderado com equilíbrio entre risco e retorno",
  icons: {
    icon: "/machine-logo.png", 
  },
  generator: "v0.dev",
}

export default function PerfilLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <EnhancedHeader />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
            <ScrollToTop />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
