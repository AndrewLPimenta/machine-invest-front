import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Section } from "@/components/section";
import { PageLayout } from "@/components/page-layout"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AuthRedirect } from "@/components/auth-redirect"
import VideoSection from "@/components/ui/video-section"

export default function ConteudoPage() {
    return (
        <AuthRedirect>
            <PageLayout>
                <Section>
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold">Conteúdo</h2>
                        {/* Videos */}
                    </div>
                </Section>
            </PageLayout>
        </AuthRedirect>
    )
}