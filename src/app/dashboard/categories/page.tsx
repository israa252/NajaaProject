'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CategoriesPage() {
  const router = useRouter()
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login') // إعادة التوجيه لتسجيل الدخول إذا لم يوجد توكن
      return
    }

    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/categories', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        if (!res.ok) {
          setError('حدث خطأ أثناء جلب التصنيفات')
          return
        }

        const data = await res.json()
        setCategories(data)
      } catch (err) {
        setError('حدث خطأ أثناء الاتصال بالخادم')
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [router])

  if (loading) {
    return <p>جاري تحميل البيانات...</p>
  }

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">التصنيفات</h2>
      <ul>
        {categories.map((category) => (
          <li key={category._id} className="mb-4 p-4 border rounded">
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}
