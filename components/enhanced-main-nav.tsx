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

export function EnhancedMainNav() {
  return (
    <NavigationMenu className="max-w-full">
      <NavigationMenuList className="flex-wrap gap-1 sm:gap-2">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm sm:text-base md:text-lg px-3 py-2 h-auto">
            <motion.span
              className="relative"
              whileHover={{ color: "hsl(var(--primary))" }}
              transition={{ duration: 0.2 }}
            >
              Investimentos
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              className="grid gap-3 p-4 w-[280px] md:w-[400px] lg:w-[500px] md:grid-cols-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <motion.a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 md:p-6 no-underline outline-none focus:shadow-md"
                    href="/simulacao"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="mb-2 mt-4 text-base md:text-lg lg:text-xl font-medium">Simulação Personalizada</div>
                    <p className="text-sm md:text-base leading-tight text-muted-foreground">
                      Calcule seus rendimentos e compare diferentes opções de investimento.
                    </p>
                  </motion.a>
                </NavigationMenuLink>
              </li>
              <EnhancedListItem href="/investimentos/renda-fixa" title="Renda Fixa">
                CDBs, LCIs, LCAs e Tesouro Direto
              </EnhancedListItem>
              <EnhancedListItem href="/investimentos/renda-variavel" title="Renda Variável">
                Ações, ETFs e Fundos Imobiliários
              </EnhancedListItem>
              <EnhancedListItem href="/investimentos/criptomoedas" title="Criptomoedas">
                Bitcoin, Ethereum e outras altcoins
              </EnhancedListItem>
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-sm sm:text-base md:text-lg px-3 py-2 h-auto">
            <motion.span
              className="relative"
              whileHover={{ color: "hsl(var(--primary))" }}
              transition={{ duration: 0.2 }}
            >
              Serviços
              <motion.span
                className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
            </motion.span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <motion.ul
              className="grid gap-3 p-4 w-[280px] md:w-[400px] lg:w-[500px] md:grid-cols-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <EnhancedListItem href="/servicos/conta-digital" title="Conta Digital">
                Conta sem taxas, cartão virtual e físico
              </EnhancedListItem>
              <EnhancedListItem href="/servicos/emprestimos" title="Empréstimos">
                Crédito pessoal e financiamentos
              </EnhancedListItem>
              <EnhancedListItem href="/servicos/seguros" title="Seguros">
                Vida, residencial e automóvel
              </EnhancedListItem>
              <EnhancedListItem href="/servicos/previdencia" title="Previdência">
                Planos de previdência privada
              </EnhancedListItem>
            </motion.ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/criptomoedas" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-sm sm:text-base md:text-lg px-3 py-2 h-auto")}
            >
              <motion.span
                className="relative"
                whileHover={{ color: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                Criptomoedas
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "text-sm sm:text-base md:text-lg px-3 py-2 h-auto")}
            >
              <motion.span
                className="relative"
                whileHover={{ color: "hsl(var(--primary))" }}
                transition={{ duration: 0.2 }}
              >
                Blog
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const EnhancedListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <motion.a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            whileHover={{ scale: 1.02, backgroundColor: "hsl(var(--accent))" }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
          >
            <div className="text-sm sm:text-base font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-xs sm:text-sm leading-snug text-muted-foreground">{children}</p>
          </motion.a>
        </NavigationMenuLink>
      </li>
    )
  },
)
EnhancedListItem.displayName = "EnhancedListItem"

