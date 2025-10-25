'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiPhone, FiMail } from 'react-icons/fi'

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            理想の空間づくりを
            <br />
            一緒に始めませんか？
          </h2>
          <p className="text-lg mb-12 text-white/90">
            経験豊富なスタッフが、お客様の理想の空間づくりをサポートします。
            <br className="hidden md:block" />
            まずはお気軽にご相談ください。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <FiPhone className="text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">お電話でのご相談</h3>
              <p className="text-white/80 text-sm mb-4">
                営業時間: 9:00〜18:00
                <br />
                （定休日: 水曜日）
              </p>
              <a
                href="tel:0120000000"
                className="inline-block text-2xl font-bold hover:text-white/90 transition-colors"
              >
                0120-000-000
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <FiMail className="text-4xl mb-4 mx-auto" />
              <h3 className="font-bold text-xl mb-2">メールでのご相談</h3>
              <p className="text-white/80 text-sm mb-4">
                24時間受付
                <br />
                2営業日以内に返信
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-2 bg-white text-primary rounded-lg hover:bg-neutral-100 transition-colors font-bold"
              >
                お問い合わせフォーム
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/cases"
              className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-neutral-100 transition-colors font-bold"
            >
              施工事例を見る
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white/20 transition-colors font-bold"
            >
              サービス詳細
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
