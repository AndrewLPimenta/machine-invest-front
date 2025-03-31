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

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Investimentos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/simulacao"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Simulação Personalizada</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Calcule seus rendimentos e compare diferentes opções de investimento.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/investimentos/renda-fixa" title="Renda Fixa">
                CDBs, LCIs, LCAs e Tesouro Direto
              </ListItem>
              <ListItem href="/investimentos/renda-variavel" title="Renda Variável">
                Ações, ETFs e Fundos Imobiliários
              </ListItem>
              <ListItem href="/investimentos/criptomoedas" title="Criptomoedas">
                Bitcoin, Ethereum e outras altcoins
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Serviços</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/servicos/conta-digital" title="Conta Digital">
                Conta sem taxas, cartão virtual e físico
              </ListItem>
              <ListItem href="/servicos/emprestimos" title="Empréstimos">
                Crédito pessoal e financiamentos
              </ListItem>
              <ListItem href="/servicos/seguros" title="Seguros">
                Vida, residencial e automóvel
              </ListItem>
              <ListItem href="/servicos/previdencia" title="Previdência">
                Planos de previdência privada
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/criptomoedas" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Criptomoedas</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

