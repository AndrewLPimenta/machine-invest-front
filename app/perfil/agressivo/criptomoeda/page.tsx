"use client";

import { AuthRedirect } from "@/components/auth-redirect";
import { PageLayout } from "@/components/page-layout";
import { BeamsBackground } from "@/components/ui/beams-background";
import CriptoPage from "@/components/table-crypto";

export default function CriptoAgressivo() {
  return (
    <AuthRedirect>
      <PageLayout>
        <BeamsBackground>
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-6 text-center">Principais do mercado</h1>
            <CriptoPage />
          </div>
        </BeamsBackground>
      </PageLayout>
    </AuthRedirect>
  );
}
