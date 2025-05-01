import React from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <nav className="w-60 bg-gray-800 text-white p-4">
        <h2 className="text-2xl font-bold mb-4">لوحة التحكم</h2>
        <ul>
          <li>
            <Link href="/dashboard/stories" className="block py-2">القصص</Link>
          </li>
          <li>
            <Link href="/dashboard/categories" className="block py-2">التصنيفات</Link>
          </li>
        </ul>
      </nav>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
