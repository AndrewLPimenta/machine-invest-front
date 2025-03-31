"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { ArrowDownToLine, LogOut } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@/contexts/auth-context"
import { EnhancedButton } from "./enhanced-button"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function EnhancedMobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const { isAuthenticated, user, logout } = useAuth()

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Criptomoedas", href: "/criptomoedas" },
    { title: "Simulação", href: "/simulacao" },
    { title: "Serviços", href: "/servicos" },
    { title: "Blog", href: "/blog" },
    { title: "Sobre", href: "/sobre" },
    { title: "Contato", href: "/contato" },
    { title: "FAQ", href: "/faq" },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[85vw] max-w-[350px] p-0 overflow-y-auto z-[100]">
        <div className="flex flex-col h-full">
          <div className="p-4 sm:p-6 border-b">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Image
                  src="/images/machine-logo.png"
                  alt="Machine Invest Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9 sm:h-10 sm:w-10"
                />
              </motion.div>
              <motion.span
                className="font-bold text-lg sm:text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Machine Invest
              </motion.span>
            </div>

            {isAuthenticated ? (
              <motion.div
                className="mb-3 sm:mb-4 p-3 sm:p-4 bg-primary/5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-sm sm:text-base font-medium">Olá, {user?.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Bem-vindo de volta!</p>
              </motion.div>
            ) : null}
          </div>

          <div className="flex-1 overflow-auto py-4 sm:py-6 px-4 sm:px-6">
            <motion.nav
              className="flex flex-col space-y-4 sm:space-y-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {menuItems.map((menuItem, index) => (
                <motion.div key={index} variants={item} custom={index}>
                  <Link
                    href={menuItem.href}
                    className="flex items-center text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors relative overflow-hidden group"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{menuItem.title}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          <motion.div
            className="p-4 sm:p-6 border-t mt-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {isAuthenticated ? (
              <div className="space-y-3 sm:space-y-4">
                <EnhancedButton
                  className="w-full text-sm sm:text-base"
                  variant="gradient"
                  href="/download"
                  onClick={() => setIsOpen(false)}
                >
                  Download App <ArrowDownToLine className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="w-full text-sm sm:text-base"
                  onClick={() => {
                    logout()
                    setIsOpen(false)
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Sair
                </EnhancedButton>
              </div>
            ) : (
              <div className="space-y-3 sm:space-y-4">
                <EnhancedButton
                  className="w-full text-sm sm:text-base"
                  variant="gradient"
                  href="/login"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </EnhancedButton>
                <EnhancedButton
                  variant="outline"
                  className="w-full text-sm sm:text-base"
                  href="/cadastro"
                  onClick={() => setIsOpen(false)}
                >
                  Cadastre-se
                </EnhancedButton>
              </div>
            )}
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

