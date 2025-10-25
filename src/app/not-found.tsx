import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-bold text-neutral-800 mb-4">
          ページが見つかりません
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          お探しのページは移動または削除された可能性があります。
          <br />
          URLをご確認いただくか、トップページからお探しください。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-bold"
          >
            トップページへ
          </Link>
          <Link
            href="/cases"
            className="px-8 py-3 bg-neutral-200 text-neutral-800 rounded-lg hover:bg-neutral-300 transition-colors font-bold"
          >
            施工事例を見る
          </Link>
        </div>
      </div>
    </div>
  )
}
