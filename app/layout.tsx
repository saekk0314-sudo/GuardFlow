import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'GuardFlow Cloud',
  description: 'Security ERP Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-100">
        <div className="flex min-h-screen">

          <aside className="w-64 bg-slate-900 text-white hidden md:block">
            <div className="p-6 text-xl font-bold border-b border-slate-700">
              GuardFlow Cloud
            </div>

            <nav className="p-4 space-y-2">

              <Link
                href="/"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                📊 ダッシュボード
              </Link>

              <Link
                href="/assignments"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                📋 配置ボード
              </Link>

              <Link
                href="/staffs"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                👷 隊員管理
              </Link>

              <Link
                href="/sites"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                🏗 現場管理
              </Link>

              <Link
                href="/pending"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                ⚠ 未了解管理
              </Link>

              <Link
                href="/calls"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                ☎ 架電管理
              </Link>

              <Link
                href="/analytics"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                📈 分析
              </Link>

              <Link
                href="/profits"
                className="block rounded-lg p-3 hover:bg-slate-800"
              >
                💰 利益管理
              </Link>

            </nav>
          </aside>

          <main className="flex-1">
            {children}
          </main>

        </div>
      </body>
    </html>
  )
}