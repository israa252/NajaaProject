"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Header from "../components/layout/Header"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Footer from "../components/layout/Footer"

interface StoryCardProps {
  title: string
  image: string
  category: string
  onClick: () => void
}

const StoryCard = ({ title, image, category, onClick }: StoryCardProps) => (
  
  <div
    className="relative group w-full h-[689px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={image || "/placeholder.svg"}
      alt={title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#365F36]/90 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
      <h3 className="font-amiri text-4xl text-white mb-4">{title}</h3>
      <div className="mx-auto w-48 h-0.5 bg-white/80 shadow-md" />
    </div>
  </div>
)

export default function StoriesPage() {
  const router = useRouter()

  const categories = ["عودة الأمل", "رسائل لم تُرسل", "حكايات من الغربة", "ذكراهم حية في قلوبنا"]

  const [activeIndex, setActiveIndex] = useState(0)

  // بيانات القصص لكل فئة
  const storiesData: Record<string, { title: string; image: string; slug?: string }[]> = {
    "عودة الأمل": [
      { title: "أحمد حجازي", image: "/images/story1.png", slug: "ahmed-hijazi" },
      { title: "الصحفي أيمن", image: "/images/story2.png", slug: "journalist-ayman" },
      { title: "ما قبل النزوح", image: "/images/story3.jpg", slug: "before-displacement" },
    ],
    "رسائل لم تُرسل": [
      { title: "رسالة من مجهول", image: "/images/story4.jpg", slug: "anonymous-letter" },
      { title: "كلمات لم تصل", image: "/images/story5.jpg", slug: "undelivered-words" },
      { title: "حروف عالقة", image: "/images/story6.jpg", slug: "stuck-letters" },
    ],
    "حكايات من الغربة": [
      { title: "الطريق إلى المجهول", image: "/images/story7.jpg", slug: "road-to-unknown" },
      { title: "ليلة في الغربة", image: "/images/story8.jpg", slug: "night-in-exile" },
      { title: "وجوه جديدة", image: "/images/story9.jpg", slug: "new-faces" },
    ],
    "ذكراهم حية في قلوبنا": [
      { title: "لن ننساكم", image: "/images/story10.jpg", slug: "we-wont-forget-you" },
      { title: "ذكريات لا تموت", image: "/images/story11.jpg", slug: "immortal-memories" },
      { title: "أرواح باقية", image: "/images/story12.jpg", slug: "remaining-souls" },
    ],
  }

  const activeCategory = categories[activeIndex]

  // الانتقال للفئة التالية
  const nextCategory = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % categories.length)
  }

  // الانتقال للفئة السابقة
  const prevCategory = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1))
  }

  // الانتقال إلى صفحة تفاصيل القصة
  const navigateToStoryDetail = (storySlug: string) => {
    // تحويل اسم الفئة إلى slug مناسب للرابط
    const categorySlug = encodeURIComponent(activeCategory)
    router.push(`/stories/${categorySlug}/${storySlug}`)
  }

  return (
    <>
      <Header />

      <div className="container mx-auto px-4 py-10 text-right">
        <h1 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center font-amiri">قصصنا </h1>

        {/* التصنيفات مع أزرار التنقل */}
        <div className="relative mx-auto mt-10 w-full md:w-[1200px] h-[90px] bg-[#EBEBEB] border border-[#365F36] rounded-lg flex items-center">
          {/* زر الانتقال إلى الفئة السابقة */}
          <button
            onClick={prevCategory}
            className="w-[79px] h-full bg-[#365F36] rounded-r-lg flex items-center justify-center transition hover:bg-[#2d4d2d]"
          >
            <ChevronRight className="text-white w-8 h-8" />
          </button>

          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-[300px] h-full flex items-center justify-center cursor-pointer transition ${
                activeCategory === category
                  ? "bg-[#365F36] text-white"
                  : "bg-white border border-[#E0E0E0] text-[#0b2d0b]"
              }`}
            >
              <span className="font-amiri text-[20px] md:text-[30px]">{category}</span>
            </div>
          ))}

          {/* زر الانتقال إلى الفئة التالية */}
          <button
            onClick={nextCategory}
            className="w-[79px] h-full bg-[#365F36] rounded-l-lg flex items-center justify-center transition hover:bg-[#2d4d2d]"
          >
            <ChevronLeft className="text-white w-8 h-8" />
          </button>
        </div>

        {/* عرض القصص بناءً على الفئة النشطة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {storiesData[activeCategory].map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              image={story.image}
              category={activeCategory}
              onClick={() => navigateToStoryDetail(story.slug || encodeURIComponent(story.title))}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </>
  )
}

