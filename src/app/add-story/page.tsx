"use client"
import Link from "next/link"
import type React from "react"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FaUpload, FaLink } from "react-icons/fa"

export default function StepperForm() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState<string | null>(null)
  const [videoLink, setVideoLink] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [publishWithName, setPublishWithName] = useState(true)
  const [authorName, setAuthorName] = useState("")
  const [showSuccess, setShowSuccess] = useState(false)
  const [storyId, setStoryId] = useState<string | null>(null)

  const handleNext = () => {
    const newErrors = validateCurrentStep()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      if (step === 3) {
        // Submit the story and get a unique ID
        const newStoryId = `story_${Date.now()}`
        setStoryId(newStoryId)

        // Here you would normally send the data to your API
        // For now we're just simulating a successful submission
        setTimeout(() => {
          setShowSuccess(true)
        }, 500)
      } else {
        setStep(step + 1)
      }
    }
  }

  const validateCurrentStep = () => {
    const newErrors: { [key: string]: string } = {}

    if (step === 1) {
      validateStep1(newErrors)
    } else if (step === 3) {
      validateStep3(newErrors)
    }

    return newErrors
  }

  const validateStep1 = (errors: {
    title?: string
    content?: string
    category?: string
  }) => {
    if (!title.trim()) errors.title = "هذا الحقل مطلوب"
    if (!content.trim()) errors.content = "هذا الحقل مطلوب"
    if (!category) errors.category = "يجب اختيار تصنيف القصة"
  }

  const validateStep3 = (errors: { authorName?: string }) => {
    if (publishWithName && !authorName.trim()) {
      errors.authorName = "يرجى إدخال اسمك"
    }
  }

  const handlePrev = () => setStep(step - 1)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(URL.createObjectURL(file))
    }
  }

  const handleReturnHome = () => {
    setStep(1)
    setTitle("")
    setContent("")
    setCategory("")
    setImage(null)
    setVideoLink("")
    setPublishWithName(true)
    setAuthorName("")
    setShowSuccess(false)
    router.push("/")
  }

  // Instead of directly navigating to dashboard, we'll generate a secure token
  const handleGoToDashboard = () => {
    // Generate a secure token with the story ID
    const token = btoa(`${storyId}_${Date.now()}`)

    // Store the token in localStorage or sessionStorage
    sessionStorage.setItem("storyAccessToken", token)

    // Navigate to the auth page that will verify the token before redirecting to dashboard
    router.push(`/dashboard/auth?token=${token}&storyId=${storyId}`)
  }

  return (
    <div>
      <div className="w-full py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
            <Image
              src="/logo.svg"
              alt="نجاة Logo"
              width={100}
              height={100}
              className="h-auto w-24 object-contain"
              priority
            />
          </Link>

          <button className="text-green-900 text-2xl font-amiri font-bold" onClick={handleReturnHome}>
            رجوع
          </button>
        </div>
      </div>

      <div className="relative w-[500px] mx-auto mt-10 rtl">
        {!showSuccess && (
          <div className="flex items-center justify-between relative">
            <div className="flex items-center justify-center relative">
              <div
                className={`w-10 h-10 flex items-center justify-center text-white text-lg font-amiri rounded-full ${
                  step >= 1 ? "bg-green-900" : "border border-green-900 text-green-900"
                }`}
              >
                1
              </div>
            </div>

            <div className="flex-grow h-[1px] bg-green-800"></div>

            <div className="flex items-center justify-center relative">
              <div
                className={`w-10 h-10 flex items-center justify-center text-lg font-amiri rounded-full ${
                  step >= 2 ? "bg-green-900 text-white" : "border border-green-900 text-green-900"
                }`}
              >
                2
              </div>
            </div>

            <div className="flex-grow h-[1px] bg-green-800"></div>

            <div className="flex items-center justify-center relative">
              <div
                className={`w-10 h-10 flex items-center justify-center text-lg font-amiri rounded-full ${
                  step === 3 ? "bg-green-900 text-white" : "border border-green-900 text-green-900"
                }`}
              >
                3
              </div>
            </div>
          </div>
        )}

        {!showSuccess && (
          <div className="flex justify-between text-center mt-3 text-lg font-amiri">
            <span className={`${step === 1 ? "text-green-900" : "text-gray-500"}`}>القصة</span>
            <span className={`${step === 2 ? "text-green-900" : "text-gray-500"}`}>الوسائط</span>
            <span className={`${step === 3 ? "text-green-900" : "text-gray-500"}`}>النشر</span>
          </div>
        )}

        {!showSuccess && step === 1 && (
          <div className="mt-6 space-y-4">
            <div>
              <label className="block text-right text-lg font-amiri text-green-700">
                عنوان القصة <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-right"
                placeholder="أدخل عنوان القصة..."
              />
              {errors.title && <p className="text-red-500 text-right text-sm mt-1">{errors.title}</p>}
            </div>
            <div>
              <label className="block text-right text-lg font-amiri text-green-900">
                محتوى القصة <span className="text-red-500">*</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-right h-32"
                placeholder="اكتب قصتك هنا..."
              ></textarea>
              {errors.content && <p className="text-red-500 text-right text-sm mt-1">{errors.content}</p>}
            </div>
            <div>
              <label className="block text-right text-lg font-amiri text-green-700">
                تصنيف القصة <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-right"
              >
                <option value="" disabled>
                  اختر تصنيف القصة...
                </option>
                <option value="عودة الأمل"> عودة الأمل</option>
                <option value=" رسائل من الغربة"> رسائل من الغربة</option>
                <option value="ذكراهم حية بيننا">ذكراهم حية بيننا</option>
              </select>
              {errors.category && <p className="text-red-500 text-right text-sm mt-1">{errors.category}</p>}
            </div>
          </div>
        )}

        {!showSuccess && step === 2 && (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-amiri text-black text-right">
              رفع صورة القصة <span className="text-red-500">*</span>
            </h2>
            <label className="w-full h-32 border border-green-900 rounded-lg flex flex-col items-center justify-center cursor-pointer">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              <FaUpload className="w-10 h-10 text-green-900" />
              <p className="text-green-900 mt-2 text-sm">اضغط هنا لرفع الصورة</p>
            </label>
            {image && (
              <div className="mt-3 rounded-lg border border-gray-300 overflow-hidden">
                <img src={image || "/placeholder.svg"} alt="صورة القصة" className="w-full h-auto" />
              </div>
            )}

            <h2 className="text-lg font-amiri text-black text-right mt-4">إضافة رابط فيديو (اختياري)</h2>
            <div className="flex items-center border border-gray-300 rounded-lg p-2">
              <FaLink className="text-gray-600 mr-2" />
              <input
                type="text"
                value={videoLink}
                onChange={(e) => setVideoLink(e.target.value)}
                className="w-full p-2 outline-none"
                placeholder="أدخل رابط فيديو..."
              />
            </div>
          </div>
        )}

        {!showSuccess && step === 3 && (
          <div className="mt-6 space-y-4">
            <h2 className="text-lg font-amiri text-black text-right">هل تريد نشر القصة باسمك؟</h2>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publishWithName"
                  checked={publishWithName}
                  onChange={() => setPublishWithName(true)}
                  className="form-radio text-green-900"
                />
                <span>نعم</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="publishWithName"
                  checked={!publishWithName}
                  onChange={() => setPublishWithName(false)}
                  className="form-radio text-green-900"
                />
                <span>مجهول</span>
              </label>
            </div>

            {publishWithName && (
              <div>
                <label className="block text-right text-lg font-amiri text-green-700">
                  اسمك <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-right"
                  placeholder="أدخل اسمك..."
                />
                {errors.authorName && <p className="text-red-500 text-right text-sm mt-1">{errors.authorName}</p>}
              </div>
            )}
          </div>
        )}

        {showSuccess && (
          <div className="mt-6 flex flex-col items-center justify-center">
            <img src="/comp.svg" alt="نجاح" className="w-50 h-50" />
            <p className="text-green-900 text-lg font-amiri mt-4">تم نشر القصة بنجاح!</p>
            <button onClick={handleGoToDashboard} className="mt-6 px-6 py-2 bg-green-900 text-white rounded-lg mb-20">
            العودة للصفحة الرئيسية
            </button>
          </div>
        )}

        {!showSuccess && (
          <div className="flex justify-end mt-6 gap-2">
            {step > 1 && (
              <button
                onClick={handlePrev}
                className="px-6 py-2 border border-green-900 text-green-900 rounded-lg mb-20"
              >
                السابق
              </button>
            )}
            <button onClick={handleNext} className="px-6 py-2 bg-green-900 text-white rounded-lg mb-20">
              {step === 3 ? "نشر" : "التالي"}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

