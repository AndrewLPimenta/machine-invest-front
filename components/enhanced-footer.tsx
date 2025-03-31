import Image from "next/image"
import Link from "next/link"
import { ResponsiveContainer } from "@/components/responsive-container"
import { AppStoreButton } from "@/components/app-store-button"
import { GooglePlayButton } from "@/components/google-play-button"

export function EnhancedFooter() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: "Produtos",
      links: [
        { label: "Criptomoedas", href: "/criptomoedas" },
        { label: "Simulação", href: "/simulacao" },
        { label: "Serviços", href: "/servicos" },
        { label: "Comparativo", href: "/comparativo" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre nós", href: "/sobre" },
        { label: "Blog", href: "/blog" },
        { label: "Contato", href: "/contato" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "/termos" },
        { label: "Privacidade", href: "/privacidade" },
        { label: "Cookies", href: "/cookies" },
        { label: "Segurança", href: "/seguranca" },
      ],
    },
  ]

  const socialLinks = [
    {
      label: "Instagram",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      label: "Twitter",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-twitter"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-linkedin"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-youtube"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <path d="m10 15 5-3-5-3z" />
        </svg>
      ),
    },
  ]

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-colors duration-300 dark:border-slate-800">
      <ResponsiveContainer className="py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/machine-logo.png"
                alt="Machine Invest Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold">Machine Invest</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Plataforma de simulação de investimentos e empréstimos com foco em criptomoedas e produtos financeiros.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Baixe nosso aplicativo:</p>
              <div className="flex flex-wrap gap-2">
                <AppStoreButton href="/download" />
                <GooglePlayButton href="/download" />
              </div>
            </div>
          </div>

          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-medium">{section.title}</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-sm text-muted-foreground">
              &copy; {currentYear} Machine Invest. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link href="/termos" className="hover:text-foreground transition-colors">
                Termos
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/privacidade" className="hover:text-foreground transition-colors">
                Privacidade
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/cookies" className="hover:text-foreground transition-colors">
                Cookies
              </Link>
              <span className="hidden md:inline">•</span>
              <Link href="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </footer>
  )
}

