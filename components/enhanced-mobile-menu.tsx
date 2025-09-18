"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { ArrowDownToLine, LogOut, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/auth-context"
import { EnhancedButton } from "./enhanced-button"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function EnhancedMobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { isAuthenticated, user, logout } = useAuth()

  const handleLogout = async () => {
    await logout()
    setIsOpen(false)
    window.location.href = "/"
  }

  const getPerfilPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}` : "/"
  const getFinancasPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/financas` : "/financas"
  const getChatIAPage = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/chatbot` : "/chatbot"
  const getConteudosPath = () => user ? `/perfil/${user.perfil?.toLowerCase() || user.id}/conteudos` : "/conteudos"

  const menuItems = isAuthenticated ? [
    { title: "Dashboard", href: getPerfilPath() },
    { title: "Finanças", href: getFinancasPath() },
    { title: "Chatbot", href: getChatIAPage() },
    { title: "Conteúdos", href: getConteudosPath() },
    {
      title: "Investimentos",
      subItems: [
        { title: "Simulação Personalizada", href: "/simulacao" },
        { title: "Renda Fixa", href: "/investimentos/renda-fixa" },
        { title: "Renda Variável", href: "/investimentos/renda-variavel" },
        { title: "Criptomoedas", href: "/investimentos/criptomoedas" },
      ]
    },
    {
      title: "Serviços",
      subItems: [
        { title: "Conta Digital", href: "/servicos/conta-digital" },
        { title: "Machine IA", href: "/servicos/ia" },
        { title: "Seguros", href: "/servicos/seguros" },
        { title: "Previdência", href: "/servicos/previdencia" },
      ]
    }
  ] : [
    { title: "Home", href: "/" },
    { title: "Criptomoedas", href: "/criptomoedas" },
    {
      title: "Investimentos",
      subItems: [
        { title: "Simulação Personalizada", href: "/simulacao" },
        { title: "Renda Fixa", href: "/investimentos/renda-fixa" },
        { title: "Renda Variável", href: "/investimentos/renda-variavel" },
        { title: "Criptomoedas", href: "/investimentos/criptomoedas" },
      ]
    },
    {
      title: "Serviços",
      subItems: [
        { title: "Conta Digital", href: "/servicos/conta-digital" },
        { title: "Machine IA", href: "/servicos/ia" },
        { title: "Seguros", href: "/servicos/seguros" },
        { title: "Previdência", href: "/servicos/previdencia" },
      ]
    },
    { title: "Blog", href: "/blog" },
  ]

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } }, exit: { opacity: 0 } }
  const item = { hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -20 } }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[85vw] max-w-[350px] p-0 overflow-y-auto z-[100]">
        <motion.div className="flex flex-col h-full" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 50, opacity: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
          
          {/* Header */}
           <SheetHeader className="relative p-4 sm:p-6 border-b flex flex-col justify-center items-center h-32">
      {/* X único */}
    

      {/* Logo centralizado verticalmente */}
      <div className="flex items-center justify-center gap-2">
        <Image
          src="/machine-logo.png"
          alt="Machine Invest Logo"
          width={50}
          height={50}
          className="h-12 w-12 sm:h-14 sm:w-14"
        />
        <span className="font-bold text-lg sm:text-xl">Machine Invest</span>
      </div>
    </SheetHeader>

          {/* Menu */}
          <div className="flex-1 overflow-auto py-4 sm:py-6 px-4 sm:px-6">
            <motion.nav className="flex flex-col space-y-2" variants={container} initial="hidden" animate="show">
              {menuItems.map((link, idx) => (
                <motion.div key={idx} variants={item}>
                  {!link.subItems ? (
                    <Link href={link.href} onClick={() => setIsOpen(false)} className="text-base sm:text-lg font-medium text-foreground">
                      {link.title}
                    </Link>
                  ) : (
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg font-medium text-foreground mb-1">{link.title}</span>
                      <div className="ml-4 flex flex-col space-y-1">
                        {link.subItems.map((sub, subIdx) => (
                          <Link key={subIdx} href={sub.href} onClick={() => setIsOpen(false)} className="text-sm sm:text-base text-muted-foreground hover:text-foreground">
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Ações do usuário */}
          <div className="p-4 sm:p-6 border-t mt-auto space-y-3 sm:space-y-4">
            {isAuthenticated ? (
              <>
                <EnhancedButton className="w-full text-base sm:text-lg" variant="gradient" href="/download">
                  Download App <ArrowDownToLine className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </EnhancedButton>
                <EnhancedButton variant="outline" className="w-full text-base sm:text-lg" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Sair
                </EnhancedButton>
              </>
            ) : (
              <>
                <EnhancedButton className="w-full text-base sm:text-lg" variant="gradient" href="/login">Login</EnhancedButton>
                <EnhancedButton className="w-full text-base sm:text-lg" variant="outline" href="/cadastro">Cadastre-se</EnhancedButton>
              </>
            )}
          </div>

        </motion.div>
      </SheetContent>
    </Sheet>
  )
}

export default EnhancedMobileMenu
