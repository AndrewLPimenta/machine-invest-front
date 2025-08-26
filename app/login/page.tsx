"use client"

import { LoginForm }from "@/components/login-form" // caminho correto do seu SignIn
import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"
export default function LoginPage() {
  return (
    <PageLayout>
       <div className="flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <LoginForm />
        </motion.div>
      </div>
    </div>
    </PageLayout>
  )
}
