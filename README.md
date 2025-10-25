# Craft Renovate - リノベーションサイト

Next.js 14 + TypeScript + Tailwind CSS で構築したリノベーション会社のポートフォリオサイトです。

## 🚀 セットアップ完了

プロジェクトは正常にセットアップされ、開発サーバーが起動しています。

**開発サーバー**: http://localhost:3000

## 📁 プロジェクト構成

```
enlarge_portfolio_site/
├── docs/                          # プロジェクト分析ドキュメント
│   ├── PROJECT_ANALYSIS.md        # Enlarge Tokyo 分析
│   └── COMPARISON_ANALYSIS.md     # Enlarge vs CRAFT 比較
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── layout.tsx             # ルートレイアウト
│   │   ├── page.tsx               # トップページ
│   │   └── globals.css            # グローバルスタイル
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx         # ヘッダー（固定ナビゲーション）
│   │   │   └── Footer.tsx         # フッター
│   │   ├── home/
│   │   │   └── Hero.tsx           # ヒーローセクション
│   │   └── common/                # 共通コンポーネント
│   └── lib/
│       └── utils.ts               # ユーティリティ関数
└── public/                        # 静的ファイル
```

## 🎨 実装済みの機能

### レイアウト
- ✅ レスポンシブヘッダー（固定ナビゲーション）
- ✅ ハンバーガーメニュー（モバイル対応）
- ✅ フッター（会社情報、SNSリンク）

### ホームページ
- ✅ ヒーローセクション
  - Framer Motionアニメーション
  - スクロールインジケーター
  - CTA ボタン

### スタイリング
- ✅ Tailwind CSS カスタムテーマ
  - プライマリカラー: ブルー系
  - セカンダリカラー: オレンジ系
- ✅ 日本語フォント（Noto Sans JP）
- ✅ スムーススクロール

## 🛠 技術スタック

- **フレームワーク**: Next.js 16.0.0
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **アニメーション**: Framer Motion
- **アイコン**: React Icons
- **フォーム**: React Hook Form + Zod
- **カルーセル**: Swiper.js（準備済み）

## 📦 インストール済みパッケージ

```json
{
  "dependencies": {
    "react": "^19.0.0",
    "next": "^16.0.0",
    "framer-motion": "^11.x",
    "swiper": "^11.x",
    "react-hook-form": "^7.x",
    "zod": "^3.x",
    "react-icons": "^5.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

## 🎯 次のステップ

### 短期（今週）
1. [ ] 施工事例セクションの実装
2. [ ] サービス紹介セクション
3. [ ] お問い合わせフォームページ
4. [ ] 実際の画像素材の配置

### 中期（来週）
5. [ ] microCMS 連携
6. [ ] 施工事例詳細ページ
7. [ ] Instagram連携
8. [ ] SEO最適化

### 長期
9. [ ] Before/Afterスライダー
10. [ ] VR/3D表示（オプション）
11. [ ] 予約システム
12. [ ] デプロイ（Vercel）

## 🎨 デザイントークン

```css
/* カラーパレット */
--primary: 217 91% 60%        /* ブルー */
--secondary: 38 92% 50%       /* オレンジ */
--muted: 0 0% 96%             /* グレー */
--foreground: 0 0% 9%         /* ダークグレー */
--background: 0 0% 100%       /* ホワイト */
```

## 📱 レスポンシブブレークポイント

```
sm:  640px   /* スマホ横 */
md:  768px   /* タブレット */
lg:  1024px  /* デスクトップ */
xl:  1280px  /* 大画面 */
2xl: 1536px  /* 超大画面 */
```

## 🚀 コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start

# Lint
npm run lint
```

## 📚 参考サイト

- Enlarge Tokyo: https://www.enlarge.tokyo/
- CRAFT Design: https://craftdesign.tokyo/

詳細な分析は `docs/` フォルダ内のMarkdownファイルを参照してください。

---

**作成日**: 2025-10-20
**フレームワーク**: Next.js 16.0.0
**開発者**: Claude Code
