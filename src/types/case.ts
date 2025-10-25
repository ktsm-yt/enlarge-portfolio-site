export interface Case {
  id: string
  title: string
  category: 'mansion' | 'house' | 'office' | 'shop'
  area: string
  budget: string
  thumbnail: string
  images: string[]
  description: string
  tags: string[]
}

export const categoryLabels: Record<Case['category'], string> = {
  mansion: 'マンション',
  house: '戸建て',
  office: 'オフィス',
  shop: '店舗',
}
