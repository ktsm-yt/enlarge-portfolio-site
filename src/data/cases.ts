import { Case } from '@/types/case'

export const cases: Case[] = [
  {
    id: '1',
    title: '都心のモダンマンションリノベーション',
    category: 'mansion',
    area: '75㎡',
    budget: '800万円',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop',
    ],
    description: '築30年のマンションを最新のデザインで一新。開放的なLDKと機能的な収納を実現しました。',
    tags: ['LDK一体化', 'オープンキッチン', '無垢フローリング'],
  },
  {
    id: '2',
    title: '自然素材を活かした戸建てリフォーム',
    category: 'house',
    area: '120㎡',
    budget: '1,500万円',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200&h=800&fit=crop',
    ],
    description: '木の温もりを感じる空間に。家族が集まる心地よいリビングダイニングを実現。',
    tags: ['自然素材', '吹き抜け', '薪ストーブ'],
  },
  {
    id: '3',
    title: 'スタイリッシュなオフィスリノベーション',
    category: 'office',
    area: '200㎡',
    budget: '2,000万円',
    thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=800&fit=crop',
    ],
    description: '働きやすさとデザイン性を両立したオフィス空間。コミュニケーションが生まれる設計。',
    tags: ['フリーアドレス', 'ミーティングスペース', 'カフェスペース'],
  },
  {
    id: '4',
    title: '個性的なカフェの店舗デザイン',
    category: 'shop',
    area: '60㎡',
    budget: '1,200万円',
    thumbnail: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1200&h=800&fit=crop',
    ],
    description: 'ブランドの世界観を表現した店舗デザイン。居心地の良さと機能性を追求。',
    tags: ['ブランディング', 'インテリア', 'カウンター設計'],
  },
]
