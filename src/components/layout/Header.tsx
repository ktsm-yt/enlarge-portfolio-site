'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Craft Renovate
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              ホーム
            </Link>
            <Link href="/cases" className="text-foreground hover:text-primary transition-colors">
              施工事例
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors">
              サービス
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              会社概要
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              お問い合わせ
            </Link>
          </nav>

          {/* Phone CTA (Desktop) */}
          <a
            href="tel:0120000000"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <FiPhone />
            <span>0120-000-000</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="メニュー"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                ホーム
              </Link>
              <Link
                href="/cases"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                施工事例
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                サービス
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                会社概要
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors py-2"
              >
                お問い合わせ
              </Link>
              <a
                href="tel:0120000000"
                className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                <FiPhone />
                <span>0120-000-000</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
