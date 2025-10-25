import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cases } from '@/data/cases'
import { categoryLabels } from '@/types/case'
import { FiArrowLeft, FiMapPin, FiDollarSign, FiCalendar } from 'react-icons/fi'
import { CaseDetailClient } from '@/components/cases/CaseDetailClient'

export function generateStaticParams() {
  return cases.map((c) => ({
    id: c.id,
  }))
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const caseItem = cases.find((c) => c.id === id)

  if (!caseItem) {
    notFound()
  }

  const relatedCases = cases
    .filter((c) => c.category === caseItem.category && c.id !== caseItem.id)
    .slice(0, 3)

  return <CaseDetailClient caseItem={caseItem} relatedCases={relatedCases} />
}
