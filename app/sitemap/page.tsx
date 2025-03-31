import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import Link from "next/link"

export default function SitemapPage() {
  const siteMap = [
    {
      category: "Páginas Principais",
      links: [
        { title: "Home", url: "/" },
        { title: "Criptomoedas", url: "/criptomoedas" },
        { title: "Simulação", url: "/simulacao" },
        { title: "Serviços", url: "/servicos" },
        { title: "Blog", url: "/blog" },
        { title: "Sobre", url: "/sobre" },
        { title: "Contato", url: "/contato" },
        { title: "FAQ", url: "/faq" },
      ],
    },
    {
      category: "Criptomoedas",
      links: [
        { title: "Lista de Criptomoedas", url: "/criptomoedas" },
        { title: "Bitcoin (BTC)", url: "/criptomoedas/btc" },
        { title: "Ethereum (ETH)", url: "/criptomoedas/eth" },
        { title: "Binance Coin (BNB)", url: "/criptomoedas/bnb" },
        { title: "Solana (SOL)", url: "/criptomoedas/sol" },
        { title: "Cardano (ADA)", url: "/criptomoedas/ada" },
        { title: "XRP", url: "/criptomoedas/xrp" },
        { title: "Comparar Criptomoedas", url: "/criptomoedas/comparar" },
        { title: "Conversor de Criptomoedas", url: "/criptomoedas/converter" },
      ],
    },
    {
      category: "Serviços",
      links: [
        { title: "Conta Digital", url: "/servicos/conta-digital" },
        { title: "Empréstimos", url: "/servicos/emprestimos" },
        { title: "Seguros", url: "/servicos/seguros" },
        { title: "Previdência", url: "/servicos/previdencia" },
      ],
    },
    {
      category: "Investimentos",
      links: [
        { title: "Renda Fixa", url: "/investimentos/renda-fixa" },
        { title: "Renda Variável", url: "/investimentos/renda-variavel" },
        { title: "Criptomoedas", url: "/investimentos/criptomoedas" },
        { title: "Simulação Personalizada", url: "/simulacao" },
      ],
    },
    {
      category: "Empresa",
      links: [
        { title: "Sobre Nós", url: "/sobre" },
        { title: "Carreiras", url: "/carreiras" },
        { title: "Imprensa", url: "/imprensa" },
        { title: "Parcerias", url: "/parcerias" },
      ],
    },
    {
      category: "Suporte",
      links: [
        { title: "FAQ", url: "/faq" },
        { title: "Contato", url: "/contato" },
        { title: "Central de Ajuda", url: "/ajuda" },
      ],
    },
    {
      category: "Legal",
      links: [
        { title: "Termos de Uso", url: "/termos" },
        { title: "Política de Privacidade", url: "/privacidade" },
        { title: "Política de Cookies", url: "/cookies" },
        { title: "Segurança", url: "/seguranca" },
      ],
    },
  ]

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Mapa do Site"
          description="Navegue facilmente por todas as páginas do Machine Invest."
          centered
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {siteMap.map((category, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-xl font-bold">{category.category}</h2>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.url} className="text-muted-foreground hover:text-primary transition-colors">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </PageLayout>
  )
}

