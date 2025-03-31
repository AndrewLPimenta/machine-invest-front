"use client"

import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, User, LogOut, ArrowDownToLine } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ResponsiveContainer } from "./responsive-container"
import { EnhancedMobileMenu } from "@/components/enhanced-mobile-menu"
import { EnhancedButton } from "@/components/enhanced-button"
import { motion } from "framer-motion"
import { EnhancedMainNav } from "@/components/enhanced-main-nav"

export function EnhancedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300 dark:border-slate-800">
      <ResponsiveContainer className="px-4">
        <div className="flex h-16 sm:h-18 md:h-20 items-center justify-between">
          <div className="flex items-center gap-3 md:gap-4 lg:gap-6">
            <Link href="/" className="mr-6 flex items-center space-x-2 text-primary transition-colors duration-300">
              <Image
                src="/images/machine-logo.png"
                alt="Machine Invest Logo"
                width={36}
                height={36}
                className="h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11"
                priority
              />
              <span className="hidden font-bold text-base sm:text-lg md:text-xl sm:inline-block">Machine Invest</span>
            </Link>
            <div className="hidden md:flex">
              <EnhancedMainNav />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.button
                    className="relative h-9 w-9 sm:h-10 sm:w-10 rounded-full flex items-center justify-center bg-primary/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </motion.button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 sm:w-64">
                  <DropdownMenuLabel className="text-sm sm:text-base">Minha Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-sm sm:text-base">
                    <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Olá, {user?.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-sm sm:text-base">
                    <Link href="/download" className="flex items-center w-full">
                      <ArrowDownToLine className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Download do App</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-sm sm:text-base">
                    <LogOut className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Sair</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <EnhancedButton asChild variant="gradient" size="default" className="hidden sm:flex text-sm sm:text-base">
                <Link href="/login">Login</Link>
              </EnhancedButton>
            )}
            <ModeToggle />
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-md border border-input bg-background"
              onClick={() => setIsMobileMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle Menu</span>
            </motion.button>
            <EnhancedMobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
          </div>
        </div>
      </ResponsiveContainer>
    </header>
  )
}

