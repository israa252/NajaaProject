import Link from "next/link";

export default function Martyrs() {
  return (
    <div className="relative w-full bg-cover bg-center py-16 sm:py-24 lg:py-32">
      {/* العنوان الرئيسي */}
      <h1 className="mx-auto w-[90%] sm:w-[320px] text-[32px] sm:text-[40px] lg:text-[45px] leading-[30px] sm:leading-[35px] lg:leading-[46px] text-center font-normal text-[#365F36]">
        ذكراهم حية في قلوبنا
      </h1>

      {/* الوصف النصي */}
      <p className="mx-auto w-[90%] sm:w-[90%] md:w-[780px] text-[18px] sm:text-[22px] lg:text-[28px] leading-[30px] sm:leading-[40px] lg:leading-[50px] text-center font-bold tracking-[0.01em] text-[#0F2212] mt-4 sm:mt-6">
        شارك قصة شخص عزيز عليك، واجعل أثره حيًا في قلوب الجميع لأن بعض القصص لا
        تُنسى، وأصحابها يظلون في قلوبنا دائمًا...
      </p>

      {/* زر "أضف قصتك" */}
      <div className="flex justify-center mt-6 sm:mt-8">
        <Link
          href="/add-memory"
          className="w-[150px] sm:w-[180px] lg:w-[200px] h-[50px] sm:h-[55px] lg:h-[60px] bg-[#365F36] rounded-[12px] sm:rounded-[16px] flex items-center justify-center"
        >
          <span className="text-[20px] sm:text-[24px] lg:text-[28px] leading-[20px] text-white font-normal">
            أضف ذكراه
          </span>
        </Link>
      </div>
    </div>
  );
}