'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { cases } from '@/data/cases'
import { categoryLabels, type Case } from '@/types/case'

export default function CasesPage() {
  const [selectedCategory, setSelectedCategory] = useState<Case['category'] | 'all'>('all')

  const filteredCases = selectedCategory === 'all'
    ? cases
    : cases.filter(c => c.category === selectedCategory)

  const categories = [
    { value: 'all' as const, label: 'すべて' },
    { value: 'mansion' as const, label: categoryLabels.mansion },
    { value: 'house' as const, label: categoryLabels.house },
    { value: 'office' as const, label: categoryLabels.office },
    { value: 'shop' as const, label: categoryLabels.shop },
  ]

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">施工事例</h1>
          <p className="text-neutral-600">
            これまでに手がけた多様なリノベーション・リフォーム事例をご紹介します
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.value
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredCases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                href={`/cases/${caseItem.id}`}
                className="block group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={caseItem.thumbnail}
                      alt={caseItem.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                        {categoryLabels[caseItem.category]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                      {caseItem.description}
                    </p>
                    <div className="flex gap-4 text-sm text-neutral-500 mb-4">
                      <span>面積: {caseItem.area}</span>
                      <span>予算: {caseItem.budget}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {caseItem.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-neutral-100 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filteredCases.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-neutral-500 text-lg">該当する施工事例がありません</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
