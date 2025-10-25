'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Case, categoryLabels } from '@/types/case'
import { FiArrowLeft, FiMapPin, FiDollarSign, FiCalendar } from 'react-icons/fi'

interface CaseDetailClientProps {
  caseItem: Case
  relatedCases: Case[]
}

export function CaseDetailClient({ caseItem, relatedCases }: CaseDetailClientProps) {
  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link
          href="/cases"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary transition-colors"
        >
          <FiArrowLeft />
          <span>施工事例一覧に戻る</span>
        </Link>
      </div>

      {/* Main Image */}
      <section className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-[60vh] rounded-lg overflow-hidden"
        >
          <Image
            src={caseItem.images[0]}
            alt={caseItem.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute top-6 left-6">
            <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
              {categoryLabels[caseItem.category]}
            </span>
          </div>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                {caseItem.title}
              </h1>

              <p className="text-neutral-600 leading-relaxed mb-8">
                {caseItem.description}
              </p>

              {/* Details */}
              <div className="bg-white rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">プロジェクト詳細</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <FiMapPin />
                      <span className="text-sm">面積</span>
                    </div>
                    <p className="font-bold text-lg">{caseItem.area}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <FiDollarSign />
                      <span className="text-sm">予算</span>
                    </div>
                    <p className="font-bold text-lg">{caseItem.budget}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-neutral-500 mb-2">
                      <FiCalendar />
                      <span className="text-sm">カテゴリ</span>
                    </div>
                    <p className="font-bold text-lg">
                      {categoryLabels[caseItem.category]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Images */}
              {caseItem.images.length > 1 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">その他の写真</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseItem.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="relative h-64 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${caseItem.title} - ${index + 2}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              <div>
                <h2 className="text-xl font-bold mb-4">特徴</h2>
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-lg p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
              <p className="text-neutral-600 text-sm mb-6">
                このような施工をご希望の方は、
                <br />
                お気軽にご相談ください
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full px-6 py-3 bg-primary text-white text-center rounded-lg hover:bg-primary/90 transition-colors font-bold"
                >
                  無料相談を申し込む
                </Link>
                <a
                  href="tel:0120000000"
                  className="block w-full px-6 py-3 bg-neutral-100 text-neutral-800 text-center rounded-lg hover:bg-neutral-200 transition-colors font-bold"
                >
                  0120-000-000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">関連する施工事例</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedCases.map((relatedCase, index) => (
                <motion.div
                  key={relatedCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link
                    href={`/cases/${relatedCase.id}`}
                    className="block group"
                  >
                    <div className="bg-neutral-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relatedCase.thumbnail}
                          alt={relatedCase.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedCase.title}
                        </h3>
                        <p className="text-sm text-neutral-600 line-clamp-2">
                          {relatedCase.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
