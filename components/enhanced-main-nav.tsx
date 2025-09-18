"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/auth-context"
import { usePathname } from "next/navigation"

export function EnhancedMainNav() {
  const { user } = useAuth()
  const pathname = usePathname() // pega a rota atual
  const [mounted, setMounted] = React.useState(false)

  // Habilita renderização apenas após a hidratação
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // evita hydration mismatch

  // Funções para criar caminhos seguros
    const getPerfilPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}` : "/"
  const getFinancasPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/financas` : "/"
  const getChatIAPage = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/chatbot` : "/chatbot"
  const getConteudosPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/conteudos` : "/conteudos"
  // Links públicos
  const publicLinks = (
    <>
      {/* Investimentos */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-sm sm:text-base md:text-lg px-3 py-2 h-auto">
          <motion.span className="relative" whileHover={{ color: "var(--primary)" }} transition={{ duration: 0.2 }}>
            Investimentos
            <motion.span className="absolute -bottom-1 left-0 h-[2px] bg-primary" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.2 }} />
          </motion.span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <motion.ul
            className="grid gap-3 p-4 w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] md:grid-cols-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <motion.a
                  href="/simulacao"
                  className={cn(
                    "flex h-full w-full select-none flex-col justify-end rounded-md p-4 md:p-6 no-underline outline-none focus:shadow-md",
                    "bg-[var(--card)] text-[var(--foreground)] dark:bg-[var(--card-dark)] dark:text-[var(--foreground-dark)]"
                  )}
                  whileHover={{ scale: 1.02, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="mb-2 mt-4 text-base md:text-lg lg:text-xl font-medium">Simulação Personalizada</div>
                  <p className="text-sm md:text-base leading-tight text-[var(--muted-foreground)] dark:text-[var(--muted-foreground-dark)]">
                    Calcule seus rendimentos e compare diferentes opções de investimento.
                  </p>
                </motion.a>
              </NavigationMenuLink>
            </li>

            <EnhancedListItem href="/investimentos/renda-fixa" title="Renda Fixa">CDBs, LCIs, LCAs e Tesouro Direto</EnhancedListItem>
            <EnhancedListItem href="/investimentos/renda-variavel" title="Renda Variável">Ações, ETFs e Fundos Imobiliários</EnhancedListItem>
            <EnhancedListItem href="/investimentos/criptomoedas" title="Criptomoedas">Bitcoin, Ethereum e outras altcoins</EnhancedListItem>
          </motion.ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Serviços */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent text-sm sm:text-base md:text-lg px-3 py-2 h-auto">
          <motion.span className="relative" whileHover={{ color: "var(--primary)" }} transition={{ duration: 0.2 }}>
            Serviços
            <motion.span className="absolute -bottom-1 left-0 h-[2px] bg-primary" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.2 }} />
          </motion.span>
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <motion.ul
            className="grid gap-3 p-4 w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] md:grid-cols-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <EnhancedListItem href="/servicos/conta-digital" title="Conta Digital">Conta sem taxas, cartão virtual e físico</EnhancedListItem>
            <EnhancedListItem href="/servicos/ia" title="Machine IA">Treinada pra te auxiliar em finanças</EnhancedListItem>
            <EnhancedListItem href="/servicos/seguros" title="Seguros">Vida, residencial e automóvel</EnhancedListItem>
            <EnhancedListItem href="/servicos/previdencia" title="Previdência">Planos de previdência privada</EnhancedListItem>
          </motion.ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/criptomoedas" legacyBehavior passHref>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm sm:text-base md:text-lg px-3 py-2 h-auto")}>Criptomoedas</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <Link href="/blog" legacyBehavior passHref>
          <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm sm:text-base md:text-lg px-3 py-2 h-auto")}>Blog</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )

  // Links privados
  const privateLinks = (
    <>
            {/* Início */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href="/" className="text-sm sm:text-base md:text-lg px-3 py-2 h-auto">Início</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Dashboard */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href={getPerfilPath()} className="text-sm sm:text-base md:text-lg px-3 py-2 h-auto">Dashboard</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>

      {/* Menu Dropdown */}
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-sm sm:text-base md:text-lg px-3 py-2 h-auto">
          <motion.span className="relative" whileHover={{ color: "var(--primary)" }} transition={{ duration: 0.2 }}>
            Menu
            <motion.span className="absolute -bottom-1 left-0 h-[2px] bg-primary" initial={{ width: 0 }} whileHover={{ width: "100%" }} transition={{ duration: 0.2 }} />
          </motion.span>
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <motion.ul
            className="grid gap-3 p-4 w-[240px] xs:w-[280px] sm:w-[320px] md:w-[400px] lg:w-[500px] md:grid-cols-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <EnhancedListItem href={getFinancasPath()} title="Finanças" />
            <EnhancedListItem href={getChatIAPage()} title="Chatbot" />
            <EnhancedListItem href={getConteudosPath()} title="Conteúdos" />
          </motion.ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      {/* Ajustes */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link href={getFinancasPath()} className="text-sm sm:text-base md:text-lg px-3 py-2 h-auto">Ajustes</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </>
  )

  // decide qual lista mostrar baseado na rota
  const showPrivate = pathname.startsWith("/perfil") && user

  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="flex-wrap gap-2 sm:gap-3">
        {showPrivate ? privateLinks : publicLinks}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

// -----------------------------
const EnhancedListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link href={props.href!} passHref>
            <motion.div
              ref={ref as any} // evita conflito de tipos
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                "bg-[var(--card)] text-[var(--foreground)] hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]",
                "dark:bg-[var(--card-dark)] dark:text-[var(--foreground-dark)] dark:hover:bg-[var(--accent-dark)] dark:hover:text-[var(--accent-foreground-dark)]",
                className
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="text-sm sm:text-base font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs sm:text-sm leading-snug text-[var(--muted-foreground)] dark:text-[var(--muted-foreground-dark)]">{children}</p>
            </motion.div>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
EnhancedListItem.displayName
