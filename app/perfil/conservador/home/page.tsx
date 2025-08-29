"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield, TrendingUp, Target } from "lucide-react"
import { AuthRedirect } from "@/components/auth-redirect"
import { HeroSection } from "@/components/hero-section"
import { Section } from "@/components/section"
import { ResponsiveContainer } from "@/components/responsive-container"


export default function ConservadorPageHome() {
    return (
        <AuthRedirect>
            <PageLayout>
                <HeroSection />
                <Section>
        <Card className="bg-background/50 backdrop-blur-lg shadow-lg">
            <CardHeader>
                
                <CardTitle className="flex items-center text-2xl">
                    <Shield className="mr-2 h-6 w-6 text-primary/90" />
                    Perfil Conservador
                </CardTitle>
                <CardDescription className="text-foreground/50">
                    Bem-vindo ao seu painel de investimentos conservadores. Aqui você pode monitorar e gerenciar seus investimentos com segurança e estabilidade.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
            </CardContent>
        </Card>
        
        </Section>
            </PageLayout>
        </AuthRedirect>
    )
}