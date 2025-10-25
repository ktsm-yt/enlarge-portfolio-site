import Link from 'next/link'
import { FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pure Creation</h3>
            <p className="text-neutral-400 mb-4">
              東京のリノベーション・リフォーム専門会社
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <FiInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/cases" className="text-neutral-400 hover:text-white transition-colors">
                  施工事例
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">サービス</h4>
            <ul className="space-y-2">
              <li className="text-neutral-400">マンションリノベーション</li>
              <li className="text-neutral-400">戸建てリフォーム</li>
              <li className="text-neutral-400">オフィスリノベーション</li>
              <li className="text-neutral-400">店舗デザイン</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">お問い合わせ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-400">
                <FiPhone className="mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:0120000000" className="hover:text-white transition-colors">
                    0120-000-000
                  </a>
                  <p className="text-sm">営業時間: 9:00-18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-2 text-neutral-400">
                <FiMail className="mt-1 flex-shrink-0" />
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                  info@example.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-400">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>東京都○○区○○1-2-3</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pure Creation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
