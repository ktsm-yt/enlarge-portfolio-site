'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiHome, FiTool, FiBriefcase, FiShoppingBag, FiCheckCircle } from 'react-icons/fi'

const services = [
  {
    id: 'mansion',
    icon: FiHome,
    title: 'マンションリノベーション',
    description: '築年数の経ったマンションを、最新のデザインと機能性を備えた快適な空間に生まれ変わらせます。',
    features: [
      '間取り変更・LDK一体化',
      '水回り全面改修',
      '内装デザイン',
      'スケルトンリノベーション',
      '収納計画',
      '照明計画',
    ],
    process: [
      'ご相談・ヒアリング',
      '現地調査',
      'プラン提案・お見積もり',
      '詳細設計',
      '施工',
      '完成・お引き渡し',
    ],
    price: '500万円〜',
    period: '2〜4ヶ月',
  },
  {
    id: 'house',
    icon: FiTool,
    title: '戸建てリフォーム',
    description: '木造・RC・鉄骨造まで幅広く対応。構造から見直し、住まいの性能を大幅に向上させます。',
    features: [
      '耐震補強',
      '断熱改修',
      '外装リフォーム',
      '間取り変更',
      '水回り改修',
      'バリアフリー化',
    ],
    process: [
      'ご相談・ヒアリング',
      '建物診断',
      'プラン提案・お見積もり',
      '詳細設計',
      '施工',
      '完成・お引き渡し',
    ],
    price: '800万円〜',
    period: '3〜6ヶ月',
  },
  {
    id: 'office',
    icon: FiBriefcase,
    title: 'オフィスリノベーション',
    description: '働きやすさと生産性を向上させるオフィス空間を設計。企業のブランディングも考慮します。',
    features: [
      'レイアウト設計',
      'フリーアドレス化',
      'ミーティングスペース',
      'リフレッシュスペース',
      '照明・音響計画',
      'OA床工事',
    ],
    process: [
      'ヒアリング',
      '現地調査',
      'レイアウト提案',
      '詳細設計',
      '施工',
      '完成・検査',
    ],
    price: '1,000万円〜',
    period: '2〜5ヶ月',
  },
  {
    id: 'shop',
    icon: FiShoppingBag,
    title: '店舗デザイン',
    description: 'ブランドの世界観を表現し、集客力を高める店舗空間をデザインします。',
    features: [
      'ブランディング',
      '動線設計',
      '什器デザイン',
      '照明演出',
      'サイン計画',
      '素材選定',
    ],
    process: [
      'コンセプトヒアリング',
      '現地調査',
      'デザイン提案',
      '詳細設計',
      '施工',
      '完成・オープン',
    ],
    price: '600万円〜',
    period: '2〜4ヶ月',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">サービス</h1>
            <p className="text-lg text-neutral-700">
              マンション・戸建て・オフィス・店舗まで、
              <br className="hidden md:block" />
              幅広いリノベーション・リフォームに対応しています
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="text-primary text-2xl" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-neutral-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {/* Features */}
                    <div>
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <FiCheckCircle className="text-primary" />
                        対応内容
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="text-sm text-neutral-600 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Process */}
                    <div>
                      <h3 className="font-bold mb-4 flex items-center gap-2">
                        <FiCheckCircle className="text-primary" />
                        施工の流れ
                      </h3>
                      <ol className="space-y-2">
                        {service.process.map((step, i) => (
                          <li key={step} className="text-sm text-neutral-600 flex items-start gap-2">
                            <span className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-6 text-sm">
                    <div>
                      <span className="text-neutral-500">目安予算</span>
                      <p className="font-bold text-lg">{service.price}</p>
                    </div>
                    <div>
                      <span className="text-neutral-500">工期目安</span>
                      <p className="font-bold text-lg">{service.period}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="flex-1">
                  <div className="bg-neutral-200 rounded-lg aspect-video flex items-center justify-center">
                    <p className="text-neutral-500">施工イメージ画像</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              まずはお気軽にご相談ください
            </h2>
            <p className="mb-8 text-white/90">
              経験豊富なスタッフが、お客様の理想の空間づくりをサポートします
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-lg hover:bg-neutral-100 transition-colors font-bold"
              >
                無料相談を申し込む
              </Link>
              <a
                href="tel:0120000000"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors font-bold"
              >
                0120-000-000
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
