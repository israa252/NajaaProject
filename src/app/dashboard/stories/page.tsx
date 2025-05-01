'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation' // تغيير الاستيراد هنا

const StoriesPage = () => {
  const [stories, setStories] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const router = useRouter() // استخدام useRouter من next/navigation بدلاً من next/router

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/dashboard/login') // إذا لم يوجد توكن، يجب التوجيه إلى صفحة الدخول
      return
    }

    const fetchStories = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/stories', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (!res.ok) {
          setError('حدث خطأ أثناء جلب القصص')
          return
        }

        const data = await res.json()
        setStories(data)
      } catch (err) {
        setError('حدث خطأ أثناء الاتصال بالخادم')
      } finally {
        setLoading(false)
      }
    }

    fetchStories()
  }, [router])

  if (loading) return <p>جاري تحميل البيانات...</p>
  if (error) return <p>{error}</p>

  return (
    <div>
      <h1>القصص</h1>
      {stories.map((story: any) => (
        <div key={story.id}>
          <h2>{story.title}</h2>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  )
}

export default StoriesPage
