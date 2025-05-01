'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddStoryPage() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const token = localStorage.getItem('token')
    if (!token) {
      setError('يجب أن تكون مسجلاً للدخول لإضافة قصة')
      return
    }

    const res = await fetch('http://localhost:5000/api/v1/stories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    })

    if (!res.ok) {
      setError('حدث خطأ أثناء إضافة القصة')
      return
    }

    router.push('/dashboard/stories') // العودة إلى صفحة القصص بعد الإضافة
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">إضافة قصة جديدة</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">عنوان القصة</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">محتوى القصة</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          إضافة القصة
        </button>
      </form>
    </div>
  )
}
