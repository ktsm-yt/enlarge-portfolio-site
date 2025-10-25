'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { FiMail, FiUser, FiMessageSquare, FiPhone } from 'react-icons/fi'
import { useState } from 'react'

const contactSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  phone: z.string().min(10, '電話番号を入力してください'),
  subject: z.string().min(1, '件名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上入力してください'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // TODO: 実際のAPI送信処理
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form data:', data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="pt-20 min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-4">お問い合わせ</h1>
          <p className="text-center text-neutral-600 mb-12">
            リノベーション・リフォームに関するご相談やご質問など、お気軽にお問い合わせください
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FiPhone className="text-primary" />
                </div>
                <h3 className="font-bold">電話</h3>
              </div>
              <p className="text-neutral-600 text-sm mb-2">営業時間: 9:00-18:00</p>
              <a href="tel:0120000000" className="text-primary font-bold text-lg">
                0120-000-000
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FiMail className="text-primary" />
                </div>
                <h3 className="font-bold">メール</h3>
              </div>
              <p className="text-neutral-600 text-sm mb-2">24時間受付</p>
              <a href="mailto:info@example.com" className="text-primary font-bold">
                info@example.com
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FiMessageSquare className="text-primary" />
                </div>
                <h3 className="font-bold">フォーム</h3>
              </div>
              <p className="text-neutral-600 text-sm mb-2">24時間受付</p>
              <p className="text-neutral-800 font-bold">下記フォームより</p>
            </div>
          </div>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg mb-8"
            >
              お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡させていただきます。
            </motion.div>
          )}

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    {...register('name')}
                    type="text"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="山田 太郎"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  電話番号 <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="090-1234-5678"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  {...register('email')}
                  type="email"
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                  placeholder="example@email.com"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                件名 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('subject')}
                type="text"
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                placeholder="リノベーションの相談"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <FiMessageSquare className="absolute left-3 top-3 text-neutral-400" />
                <textarea
                  {...register('message')}
                  rows={6}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors disabled:bg-neutral-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '送信中...' : '送信する'}
            </button>

            <p className="text-center text-sm text-neutral-500 mt-4">
              個人情報の取り扱いについては
              <a href="/privacy" className="text-primary hover:underline">
                プライバシーポリシー
              </a>
              をご確認ください
            </p>
          </motion.form>
        </motion.div>
      </div>
    </div>
  )
}
