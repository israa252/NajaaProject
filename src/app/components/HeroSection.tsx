// import Link from "next/link";
import Button from "../components/Button"

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-100 w-full flex-col items-center justify-center bg-cover bg-center pb-[180px]"
     
    >
      {/* Subtitles */}
      <h2 className="mt-10 text-center font-amiri text-2xl leading-[30px] text-primary sm:mt-16">
        أهلا بك في منصة نجاة - منصة لمشاركة القصص
      </h2>

      {/* Main Title */}
      <h1 className="mt-4 max-w-[903px] text-center font-amiri text-[35px] leading-[50px] text-primary sm:mt-6 sm:text-[50px] sm:leading-[95px]">
        لا يمكن للكلمات أن تصف الحقيقة بأكملها، لكن الأصوات لا تموت أبدًا.
      </h1>

      {/* Action Buttons */}
      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <Button href="/add-story" variant="primary">
          أضف قصتك
        </Button>
        <Button href="/stories" variant="secondary">
          تصفح القصص
        </Button>
      </div>
    </section>
  );
}
 