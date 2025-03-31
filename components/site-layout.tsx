import { EnhancedHeader } from "@/components/enhanced-header"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import type React from "react"

interface SiteLayoutProps {
  children: React.ReactNode
  hideFooter?: boolean
}

export function SiteLayout({ children, hideFooter = false }: SiteLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <EnhancedHeader />
      <main className="flex-1">{children}</main>
      {!hideFooter && <EnhancedFooter />}
      <ScrollToTop />
    </div>
  )
}

