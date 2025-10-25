'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiTool, FiBriefcase, FiShoppingBag } from 'react-icons/fi'

const services = [
  {
    icon: FiHome,
    title: 'マンションリノベーション',
    description: '築年数の経ったマンションを現代的で機能的な空間に。間取り変更から水回りの全面改修まで対応します。',
    features: ['間取り変更', '水回り改修', '内装デザイン'],
  },
  {
    icon: FiTool,
    title: '戸建てリフォーム',
    description: '木造・RC・鉄骨造まで幅広く対応。耐震補強や断熱性能向上など、住まいの性能向上も実現します。',
    features: ['耐震補強', '断熱改修', '外装リフォーム'],
  },
  {
    icon: FiBriefcase,
    title: 'オフィスリノベーション',
    description: '働きやすさと生産性を向上させるオフィス空間を設計。フリーアドレスやコミュニケーションスペースの提案も。',
    features: ['レイアウト設計', '照明計画', 'OA床工事'],
  },
  {
    icon: FiShoppingBag,
    title: '店舗デザイン',
    description: 'ブランドの世界観を表現する店舗づくり。集客力を高める動線設計と魅力的な空間デザインを提供します。',
    features: ['ブランディング', '什器デザイン', '照明演出'],
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            マンション・戸建て・オフィス・店舗まで、幅広いリノベーション・リフォームに対応しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group h-full bg-neutral-50 rounded-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-neutral-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1"
                >
                  詳しく見る
                  <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            すべてのサービスを見る
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
