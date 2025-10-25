'use client'

import { motion } from 'framer-motion'
import { FiCheckCircle, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'

export default function AboutPage() {
  const features = [
    {
      icon: FiAward,
      title: '豊富な実績',
      description: '年間100件以上の施工実績。確かな技術力で理想の空間を実現します。',
    },
    {
      icon: FiUsers,
      title: '経験豊富なスタッフ',
      description: '一級建築士をはじめとする専門スタッフが、丁寧にサポートします。',
    },
    {
      icon: FiTrendingUp,
      title: 'ワンストップサービス',
      description: '設計から施工、アフターフォローまで一貫してお任せいただけます。',
    },
    {
      icon: FiCheckCircle,
      title: '安心の保証制度',
      description: '充実した保証制度で、施工後も安心してお住まいいただけます。',
    },
  ]

  const companyInfo = [
    { label: '会社名', value: '株式会社 Craft Renovate' },
    { label: '設立', value: '2010年4月' },
    { label: '代表者', value: '代表取締役 山田 太郎' },
    { label: '資本金', value: '3,000万円' },
    { label: '従業員数', value: '25名' },
    { label: '事業内容', value: 'リノベーション・リフォーム事業、不動産仲介事業' },
    { label: '許可・登録', value: '建設業許可 東京都知事許可(般-○○)第○○○○○号\n一級建築士事務所 東京都知事登録 第○○○○○号' },
    { label: '所在地', value: '〒150-0000 東京都○○区○○1-2-3' },
    { label: '電話番号', value: '0120-000-000' },
    { label: 'FAX', value: '03-0000-0000' },
    { label: 'メール', value: 'info@example.com' },
    { label: '営業時間', value: '9:00〜18:00（定休日：水曜日）' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              理想の空間を
              <br className="md:hidden" />
              カタチにする
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Craft Renovateは、お客様の「理想の暮らし」を実現するリノベーション・リフォーム専門会社です。
              一人ひとりのライフスタイルに合わせた空間づくりを、確かな技術力でサポートします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">選ばれる理由</h2>
            <p className="text-neutral-600">
              Craft Renovateが多くのお客様に選ばれる4つの理由
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">会社概要</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="divide-y">
              {companyInfo.map((info) => (
                <div
                  key={info.label}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 hover:bg-neutral-50 transition-colors"
                >
                  <div className="font-bold text-neutral-700">{info.label}</div>
                  <div className="md:col-span-2 text-neutral-600 whitespace-pre-line">
                    {info.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">アクセス</h2>
            <p className="text-neutral-600">お気軽にショールームへお越しください</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-neutral-200 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              <p className="text-neutral-500">Google Maps（後で埋め込み）</p>
            </div>
            <div className="mt-6 text-center">
              <p className="text-neutral-700 mb-2">
                〒150-0000 東京都○○区○○1-2-3
              </p>
              <p className="text-sm text-neutral-600">
                ○○駅より徒歩5分 / 駐車場あり
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
