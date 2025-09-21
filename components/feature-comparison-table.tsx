"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface Feature {
  name: string
  machineInvest: boolean
  traditional: boolean
  highlight?: boolean
}

interface FeatureCategory {
  category: string
  features: Feature[]
}

interface FeatureComparisonTableProps {
  categories: FeatureCategory[]
}

export function FeatureComparisonTable({ categories }: FeatureComparisonTableProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  }

  const renderIcon = (value: boolean) => (
    <div
      className={`flex justify-center ${
        value ? "bg-green-100 dark:bg-green-900/30" : "bg-red-100 dark:bg-red-900/30"
      } p-1 rounded-full`}
    >
      {value ? (
        <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
      ) : (
        <X className="h-4 w-4 text-red-600 dark:text-red-400" />
      )}
    </div>
  )

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="space-y-8"
    >
      {categories.map((category, index) => (
        <motion.div key={index} variants={item}>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <div className="h-1 w-6 bg-primary mr-2"></div>
            {category.category}
          </h3>
          <div className="rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-[50%]">Recurso</TableHead>
                  <TableHead className="text-center">Machine Invest</TableHead>
                  <TableHead className="text-center">Outros Softwares</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {category.features.map((feature, featureIndex) => (
                  <TableRow key={featureIndex} className={feature.highlight ? "bg-primary/5" : ""}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">{renderIcon(feature.machineInvest)}</TableCell>
                    <TableCell className="text-center">{renderIcon(feature.traditional)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}
