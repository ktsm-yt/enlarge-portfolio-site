'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cases } from '@/data/cases'
import { categoryLabels } from '@/types/case'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export function CasesSection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">施工事例</h2>
          <p className="text-neutral-600">
            これまでに手がけた多様なリノベーション・リフォーム事例をご紹介します
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {cases.map((caseItem) => (
              <SwiperSlide key={caseItem.id}>
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
                      <div className="flex gap-4 text-sm text-neutral-500">
                        <span>面積: {caseItem.area}</span>
                        <span>予算: {caseItem.budget}</span>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {caseItem.tags.slice(0, 3).map((tag) => (
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
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/cases"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            すべての施工事例を見る
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
