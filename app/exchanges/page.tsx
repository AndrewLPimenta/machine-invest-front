import { PageLayout } from "@/components/page-layout"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ExchangesPage() {
  const exchanges = [
    {
      name: "Binance",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$23.4B",
      markets: 1289,
      coins: 387,
      rank: 1,
      url: "https://binance.com",
    },
    {
      name: "Coinbase",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$5.7B",
      markets: 564,
      coins: 230,
      rank: 2,
      url: "https://coinbase.com",
    },
    {
      name: "Kraken",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$2.1B",
      markets: 423,
      coins: 185,
      rank: 3,
      url: "https://kraken.com",
    },
    {
      name: "KuCoin",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$1.8B",
      markets: 687,
      coins: 210,
      rank: 4,
      url: "https://kucoin.com",
    },
    {
      name: "Huobi",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$1.5B",
      markets: 512,
      coins: 195,
      rank: 5,
      url: "https://huobi.com",
    },
    {
      name: "Mercado Bitcoin",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$120M",
      markets: 87,
      coins: 65,
      rank: 6,
      url: "https://mercadobitcoin.com.br",
    },
    {
      name: "NovaDAX",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$85M",
      markets: 65,
      coins: 45,
      rank: 7,
      url: "https://novadax.com",
    },
    {
      name: "BitcoinTrade",
      logo: "/placeholder.svg?height=40&width=40",
      volume24h: "$42M",
      markets: 32,
      coins: 28,
      rank: 8,
      url: "https://bitcointrade.com.br",
    },
  ]

  return (
    <PageLayout>
      <Section>
        <SectionHeading
          title="Exchanges"
          description="Conheça as principais exchanges de criptomoedas do mercado."
          centered
        />

        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Exchanges Populares</CardTitle>
              <CardDescription>Classificadas por volume de negociação em 24h</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Exchange</TableHead>
                    <TableHead className="text-right">Volume 24h</TableHead>
                    <TableHead className="text-right">Mercados</TableHead>
                    <TableHead className="text-right">Moedas</TableHead>
                    <TableHead className="text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exchanges.map((exchange, index) => (
                    <TableRow key={index}>
                      <TableCell>{exchange.rank}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Image
                            src={exchange.logo || "/placeholder.svg"}
                            alt={exchange.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="font-medium">{exchange.name}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">{exchange.volume24h}</TableCell>
                      <TableCell className="text-right">{exchange.markets}</TableCell>
                      <TableCell className="text-right">{exchange.coins}</TableCell>
                      <TableCell className="text-right">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={exchange.url} target="_blank">
                            Visitar <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Como Escolher uma Exchange</CardTitle>
                <CardDescription>Fatores importantes a considerar</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Segurança:</strong> Verifique as medidas de segurança implementadas, como autenticação de
                      dois fatores e armazenamento offline de fundos.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Taxas:</strong> Compare as taxas de negociação, depósito e saque entre diferentes
                      exchanges.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Liquidez:</strong> Maior volume de negociação geralmente significa melhor liquidez e
                      preços mais justos.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Variedade de criptomoedas:</strong> Verifique se a exchange oferece as criptomoedas que
                      você deseja negociar.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Interface e usabilidade:</strong> Uma plataforma intuitiva facilita suas operações,
                      especialmente para iniciantes.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Suporte ao cliente:</strong> Um bom suporte pode ser crucial em momentos de dificuldade ou
                      dúvidas.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dicas de Segurança</CardTitle>
                <CardDescription>Proteja seus investimentos em criptomoedas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Use carteiras seguras:</strong> Para grandes quantias, considere carteiras hardware ou
                      cold wallets.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Ative 2FA:</strong> Sempre use autenticação de dois fatores em todas as suas contas.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Verifique endereços:</strong> Sempre confirme os endereços de carteira antes de enviar
                      criptomoedas.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Cuidado com phishing:</strong> Acesse exchanges apenas por URLs oficiais, não por links em
                      emails.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Mantenha-se informado:</strong> Acompanhe notícias sobre segurança e atualizações das
                      exchanges que você usa.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <p>
                      <strong>Diversifique:</strong> Não mantenha todos os seus ativos em uma única exchange ou
                      carteira.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

