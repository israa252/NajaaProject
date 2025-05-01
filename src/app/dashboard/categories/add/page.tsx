'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddCategoryPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    if (!token) {
      setError('يجب أن تكون مسجلاً للدخول لإضافة تصنيف')
      return
    }

    const res = await fetch('http://localhost:5000/api/v1/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ name })
    })

    if (!res.ok) {
      setError('حدث خطأ أثناء إضافة التصنيف')
      return
    }

    router.push('/dashboard/categories') // العودة إلى صفحة التصنيفات بعد الإضافة
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">إضافة تصنيف جديد</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">اسم التصنيف</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          إضافة التصنيف
        </button>
      </form>
    </div>
  )
}
