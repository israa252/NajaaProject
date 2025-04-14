import Link from "next/link"
// import { Button } from "@/components/ui/Button"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">404 - الصفحة غير موجودة</h2>
      <p className="mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
      {/* <Button asChild>
        <Link href="/">العودة للصفحة الرئيسية</Link>
      </Button> */}
    </div>
  )
}
