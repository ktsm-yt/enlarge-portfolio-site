# サイト比較分析: Enlarge vs CRAFT

## サイト概要比較

### Enlarge Tokyo
- **URL**: https://www.enlarge.tokyo/
- **対象地域**: 八王子市・日野市周辺（地域密着型）
- **規模感**: 中小規模のリノベーション会社
- **ターゲット**: 一般家庭、地域住民

### CRAFT Design Tokyo
- **URL**: https://craftdesign.tokyo/
- **対象地域**: 東京都心（港区南青山）
- **規模感**: 高級・デザイン重視のリノベーション専門会社
- **ターゲット**: 高所得層、デザイン志向の顧客
- **設立**: 1982年（歴史ある企業）

---

## デザイン・UI比較

### Enlarge Tokyo の特徴
```
デザインタイプ: 親しみやすい・カジュアル
- カラー: 明るいブルー、ホワイト
- 写真: 施工事例を多数掲載
- レイアウト: 標準的なグリッドレイアウト
- ナビゲーション: シンプルなメニュー構造
- アニメーション: 控えめなスクロール効果
```

### CRAFT Design Tokyo の特徴
```
デザインタイプ: 洗練・高級感
- カラー: モノトーン、ミニマル（推測）
- 写真: 高品質な施工写真、VR・CGプレゼン
- レイアウト: WordPress Gutenberg（ブロックベース）
- ナビゲーション: 複雑な階層構造
- アニメーション: より洗練されたインタラクション（推測）
```

---

## 技術スタック比較

### Enlarge Tokyo
```
バックエンド:
- WordPress (標準実装)

フロントエンド:
- jQuery
- 標準的なカルーセルライブラリ
- Bootstrap系のレスポンシブ対応

特徴:
- 従来型のWordPress実装
- 管理しやすいが、パフォーマンスは標準的
```

### CRAFT Design Tokyo
```
バックエンド:
- WordPress (Gutenberg/Block Editor)
- より高度なカスタマイズ

フロントエンド:
- ブロックベースのモダンなCSS
- より細かいレスポンシブ対応
- メディアクエリの詳細な設定

特徴:
- WordPress新世代の実装
- カスタムブロックの活用
- より柔軟なコンテンツ管理
```

---

## 機能面での比較

### 共通機能
1. ✅ 施工事例ギャラリー
2. ✅ お問い合わせフォーム
3. ✅ レスポンシブデザイン
4. ✅ ブログ/お知らせ
5. ✅ Instagram連携（推測）

### Enlarge Tokyo 独自
- シンプルな事例紹介
- 地域情報の強調
- アットホームな雰囲気

### CRAFT Design Tokyo 独自
- **VR・CGプレゼンテーション**: 完成イメージの可視化
- **構造別の詳細情報**: 木造・RC・鉄骨別のページ
- **不動産仲介サービス**: 物件探しから一貫サポート
- より詳細なサービス分類
- 高級感のある事例紹介

---

## ターゲット層の違い

### Enlarge Tokyo
```
ターゲット:
- 30-50代の家族層
- 地域住民
- 初めてのリフォーム検討者

価格帯:
- 中価格帯
- アクセスしやすい

訴求ポイント:
- 地域密着
- 親しみやすさ
- わかりやすさ
```

### CRAFT Design Tokyo
```
ター�ネット:
- 40-60代の高所得層
- デザイン志向の顧客
- マンション・高級住宅所有者

価格帯:
- 高価格帯
- ハイエンド

訴求ポイント:
- デザイン性
- 技術力（VR/CG）
- 一貫サービス
- 高級感
```

---

## どちらを参考にすべきか？

### あなたのプロジェクトの目的による

#### Enlarge Tokyo タイプが向いているケース
```
✅ 地域密着型のビジネス
✅ 親しみやすさを重視
✅ シンプルな構成で十分
✅ 開発期間・コストを抑えたい
✅ WordPress の標準的な使い方で良い

推奨技術:
- WordPress + シンプルなカスタムテーマ
- または Next.js + microCMS（シンプル構成）
- 開発期間: 4-6週間
```

#### CRAFT Tokyo タイプが向いているケース
```
✅ 高級感・洗練されたデザインが必要
✅ 複雑なサービス分類がある
✅ VR/3D表示など高度な機能が必要
✅ ブランディングを重視
✅ より細かいコンテンツ管理が必要

推奨技術:
- Next.js + Headless CMS + 3D/VR ライブラリ
- または WordPress Gutenberg + カスタムブロック
- 開発期間: 8-12週間
```

---

## 両サイトの良いところを組み合わせる

### 推奨ハイブリッドアプローチ

```
デザイン面:
✅ Enlargeの親しみやすさ
✅ CRAFTの洗練されたビジュアル
→ バランスの取れた高品質デザイン

機能面:
✅ Enlargeのシンプルな導線
✅ CRAFTの詳細な情報提供
→ ユーザビリティと情報量の両立

技術面:
✅ モダンなNext.js実装
✅ 管理しやすいCMS
✅ 高速なパフォーマンス
→ ベストプラクティスの実装
```

---

## 具体的な技術提案（両サイトの分析を踏まえて）

### 推奨構成: Next.js 14 + Tailwind CSS + microCMS

#### フロントエンド
```javascript
// 技術スタック
Next.js 14 (App Router)
- Server Components
- Image Optimization
- SEO 最適化

Tailwind CSS
- ユーティリティファースト
- カスタムテーマ設定
- レスポンシブ対応

UI Components:
- Swiper.js (カルーセル) - Enlargeスタイル
- Framer Motion (アニメーション) - CRAFTスタイル
- Three.js / React Three Fiber (3D表示) - CRAFT風の高級感
```

#### バックエンド/CMS
```
microCMS (日本製 Headless CMS)

コンテンツモデル:
1. 施工事例 (Cases)
   - タイトル
   - カテゴリ（木造/RC/鉄骨） - CRAFT参考
   - Before/After画像
   - 詳細説明
   - タグ

2. スタッフ (Staff)
   - 名前、役職
   - プロフィール写真
   - 経歴

3. お知らせ (News)
   - タイトル、本文
   - カテゴリ
   - 公開日

4. サービス (Services)
   - サービス名
   - 説明、料金目安
   - 対応エリア
```

#### 特別な機能実装

```typescript
// 1. インタラクティブな施工事例表示（CRAFT風）
// Before/Afterスライダー
import { ReactCompareSlider } from 'react-compare-slider';

// 2. VR/3D ウォークスルー（CRAFT風の高級機能）
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

// 3. シンプルなカルーセル（Enlarge風）
import { Swiper, SwiperSlide } from 'swiper/react';

// 4. スクロールアニメーション
import { motion } from 'framer-motion';

// 5. お問い合わせフォーム
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
```

---

## プロジェクト構成（両サイトの良いとこ取り）

```
enlarge-craft-hybrid/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # トップ（Enlarge風のシンプルさ）
│   ├── cases/                      # 施工事例
│   │   ├── page.tsx                # 一覧（カテゴリフィルタ - CRAFT風）
│   │   └── [slug]/
│   │       └── page.tsx            # 詳細（Before/After - 両方）
│   ├── services/                   # サービス紹介（CRAFT風の詳細分類）
│   │   ├── page.tsx
│   │   ├── wood/                   # 木造
│   │   ├── rc/                     # RC造
│   │   └── steel/                  # 鉄骨造
│   ├── about/                      # 会社概要
│   ├── staff/                      # スタッフ紹介（Enlarge風）
│   ├── showroom/                   # ショールーム
│   ├── blog/                       # ブログ
│   ├── contact/                    # お問い合わせ（Enlarge風のシンプル）
│   └── api/
│       ├── contact/route.ts        # フォーム送信
│       └── instagram/route.ts      # Instagram連携
├── components/
│   ├── layout/
│   │   ├── Header.tsx              # 固定ヘッダー
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── home/
│   │   ├── Hero.tsx                # ヒーローセクション
│   │   ├── FeaturedCases.tsx       # おすすめ施工事例
│   │   ├── ServiceOverview.tsx     # サービス概要
│   │   └── CTASection.tsx          # お問い合わせ誘導
│   ├── cases/
│   │   ├── CaseCard.tsx            # 事例カード
│   │   ├── CaseSlider.tsx          # スライダー
│   │   ├── BeforeAfter.tsx         # Before/Afterスライダー
│   │   ├── CaseFilter.tsx          # カテゴリフィルタ
│   │   └── CaseGallery.tsx         # ギャラリー表示
│   ├── common/
│   │   ├── Button.tsx              # 再利用可能ボタン
│   │   ├── Card.tsx
│   │   ├── ScrollAnimation.tsx     # スクロール検知
│   │   └── ImageWithPlaceholder.tsx
│   └── forms/
│       ├── ContactForm.tsx         # お問い合わせフォーム
│       └── NewsletterForm.tsx      # メルマガ登録
├── lib/
│   ├── microcms.ts                 # microCMS SDK
│   ├── instagram.ts                # Instagram API
│   └── utils.ts
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── styles/
│   └── globals.css
├── tailwind.config.ts
├── next.config.js
├── .env.local                      # 環境変数
└── package.json
```

---

## 必要なnpmパッケージ

```bash
# Next.js プロジェクト作成
npx create-next-app@latest enlarge-craft-site --typescript --tailwind --app

cd enlarge-craft-site

# 必須パッケージ
npm install microcms-js-sdk                    # microCMS
npm install swiper                             # カルーセル
npm install framer-motion                      # アニメーション
npm install react-hook-form @hookform/resolvers zod  # フォーム
npm install react-compare-slider               # Before/After
npm install yet-another-react-lightbox         # ライトボックス

# 高級機能（CRAFT風）
npm install @react-three/fiber @react-three/drei three  # 3D表示
npm install gsap                               # 高度なアニメーション

# その他
npm install clsx tailwind-merge                # クラス名管理
npm install date-fns                           # 日付処理
npm install react-icons                        # アイコン
```

---

## デザイン要素の詳細

### カラーパレット（ハイブリッド提案）

```css
/* Enlarge風の親しみやすさ + CRAFT風の洗練 */
:root {
  /* プライマリカラー（信頼感のあるブルー） */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-700: #1d4ed8;

  /* セカンダリ（温かみのあるアクセント） */
  --secondary-500: #f59e0b;

  /* ニュートラル（洗練された背景） */
  --neutral-50: #fafafa;
  --neutral-100: #f5f5f5;
  --neutral-800: #262626;
  --neutral-900: #171717;
}
```

### タイポグラフィ

```css
/* 日本語に最適化 */
font-family:
  "Noto Sans JP",        /* メイン */
  "M PLUS Rounded 1c",   /* 見出し用（優しい印象） */
  sans-serif;

/* サイズスケール */
h1: 2.5rem / 3rem (mobile / desktop)
h2: 2rem / 2.5rem
h3: 1.5rem / 2rem
body: 1rem / 1.125rem
```

### レイアウトグリッド

```
デスクトップ: 12カラムグリッド
タブレット: 8カラムグリッド
モバイル: 4カラムグリッド

最大幅: 1280px (コンテナ)
パディング: 1rem (mobile) / 2rem (desktop)
```

---

## アニメーション仕様

### スクロールアニメーション（両サイトの良いとこ取り）

```typescript
// シンプルなフェードイン（Enlarge風）
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

// より洗練されたスタガー（CRAFT風）
const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// ホバーエフェクト（両方のエッセンス）
const cardHover = {
  scale: 1.02,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
}
```

---

## SEO対策（両サイト共通の重要事項）

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: {
    default: 'サイト名 | リノベーション・リフォーム専門',
    template: '%s | サイト名'
  },
  description: '東京のリノベーション・リフォーム専門会社...',
  keywords: ['リノベーション', 'リフォーム', '東京', ...],
  openGraph: {
    title: 'サイト名',
    description: '...',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  }
}

// 構造化データ（LocalBusiness）
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "会社名",
  "image": "...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "東京都",
    "postalCode": "...",
    "streetAddress": "..."
  },
  "telephone": "...",
  "priceRange": "$$-$$$"
}
```

---

## 開発スケジュール（ハイブリッド版）

### Phase 1: セットアップ（1週間）
- Next.js + Tailwind プロジェクト作成
- microCMS設定
- デザインシステム構築
- 基本コンポーネント作成

### Phase 2: コアページ実装（3週間）
- トップページ（Enlarge風のシンプルさ）
- 施工事例一覧・詳細（CRAFT風の分類）
- サービスページ（両方の良さ）
- ナビゲーション・ヘッダー・フッター

### Phase 3: 機能実装（2週間）
- お問い合わせフォーム
- Instagram連携
- Before/Afterスライダー
- スクロールアニメーション
- 画像最適化

### Phase 4: コンテンツページ（1週間）
- 会社概要
- スタッフ紹介
- ブログ
- ショールーム情報

### Phase 5: 高度な機能（オプション、1-2週間）
- VR/3D表示（CRAFT風）
- 高度なフィルタリング
- 予約システム
- 多言語対応

### Phase 6: 最適化・テスト（1週間）
- パフォーマンス最適化
- SEO対策
- クロスブラウザテスト
- モバイル実機テスト
- アクセシビリティチェック

**合計開発期間**: 8-10週間（基本機能）〜 12週間（フル機能）

---

## まとめ: どちらを参考にすべきか？

### 推奨アプローチ: **両方の良いところを取る**

```
デザイン:
  Enlargeの親しみやすさ ✓
  + CRAFTの洗練された高級感 ✓
  = バランスの取れた魅力的なデザイン

機能:
  Enlargeのシンプルな導線 ✓
  + CRAFTの詳細な情報提供 ✓
  = ユーザビリティと情報量の両立

技術:
  Next.js 14 (最新技術)
  + microCMS (管理しやすさ)
  + Tailwind CSS (柔軟性)
  = モダンで保守性の高い実装
```

### 次のステップ
1. ✅ どちらの方向性にするか決定
2. デザインモックアップ作成（Figma等）
3. microCMSのコンテンツモデル設計
4. プロジェクトセットアップ
5. 段階的な実装開始

---

**作成日**: 2025-10-20
**比較サイト**:
- https://www.enlarge.tokyo/ (親しみやすい・地域密着)
- https://craftdesign.tokyo/ (高級・洗練)

**最終推奨**: Next.js + Tailwind + microCMS でハイブリッド実装
