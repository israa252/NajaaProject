"use client";

import { useParams, useRouter } from "next/navigation";
// import Header from "@/src/components/Header";
import Image from "next/image";
import { ChevronLeft, Share2 } from "lucide-react";
import Link from "next/link";

// بيانات القصص (في التطبيق الحقيقي ستأتي من قاعدة البيانات)
const storiesData: Record<
  string,
  Record<
    string,
    {
      title: string;
      image: string;
      content: string;
      date?: string;
      author?: string;
      narrator?: string;
    }
  >
> = {
  "عودة الأمل": {
    "ahmed-hijazi": {
      title: "أحمد حجازي",
      image: "/stroy1.png",
      content:
        "هذه قصة أحمد حجازي، شاب في الثلاثينات من عمره، عاش تجربة فريدة في رحلة العودة إلى وطنه بعد سنوات من الغربة. كانت رحلته مليئة بالتحديات والصعوبات، لكنه استطاع التغلب عليها بفضل إصراره وعزيمته القوية. يروي أحمد قصته بكل تفاصيلها، ليكون مصدر إلهام للآخرين الذين يمرون بظروف مشابهة.\n\nبدأت رحلة أحمد عندما اضطر لمغادرة وطنه بسبب الظروف الصعبة، وعاش في الغربة لأكثر من عشر سنوات. خلال هذه الفترة، عمل في العديد من المهن، وتعلم الكثير من المهارات، وتعرف على ثقافات مختلفة.  وعزيمته القوية. يروي أحمد قصته بكل تفاصيلها، ليكون مصدر إلهام للآخرين الذين يمرون بظروف مشابهة.\n\nبدأت رحلة أحمد عندما اضطر لمغادرة وطنه بسبب الظروف الصعبة، وعاش في الغربة لأكثر من عشر سنوات. خلال هذه الفترة، عمل في العديد من المهن، وتعلم الكثير من المهارات، وتعرف على ثقافات مختلفة. وعزيمته القوية. يروي أحمد قصته بكل تفاصيلها، ليكون مصدر إلهام للآخرين الذين يمرون بظروف مشابهة.\n\nبدأت رحلة أحمد عندما اضطر لمغادرة وطنه بسبب الظروف الصعبة، وعاش في الغربة لأكثر من عشر سنوات. خلال هذه الفترة، عمل في العديد من المهن، وتعلم الكثير من المهارات، وتعرف على ثقافات مختلفة. لكنه ظل يحلم دائماً بالعودة إلى وطنه، وبناء مستقبل أفضل هناك.",
      date: "١٥ مارس ٢٠٢٣",
      author: "محمد الأحمد",
      narrator: "أحمد حجازي",
    },
    "journalist-ayman": {
      title: "الصحفي أيمن",
      image: "/images/story2.png",
      
      content:
        "قصة الصحفي أيمن هي قصة كفاح وإصرار. عمل أيمن في مجال الصحافة لأكثر من عشرين عاماً، وواجه العديد من المخاطر والتحديات في سبيل نقل الحقيقة. تعرض للاعتقال والتهديد أكثر من مرة، لكنه لم يستسلم أبداً. استطاع أيمن أن يكون صوتاً للمظلومين والمهمشين، ونجح في كشف العديد من قضايا الفساد والظلم.\n\nبدأ أيمن مسيرته المهنية كمراسل صحفي صغير في إحدى الصحف المحلية، وتدرج في المناصب حتى أصبح من أهم الصحفيين في البلاد. كان دائماً يؤمن بأن الصحافة هي سلطة رابعة، وأن دورها هو كشف الحقائق ومحاسبة المسؤولين.",
      date: "٢٠ أبريل ٢٠٢٣",
      author: "سارة العلي",
      narrator: "أيمن الخالدي",
    },
    "before-displacement": {
      title: "ما قبل النزوح",
      image: "/images/story3.jpg",
      content:
        "تحكي هذه القصة عن الحياة قبل النزوح، عن تلك الأيام الجميلة التي كانت مليئة بالأمل والفرح. تصف القصة الحياة اليومية للناس، وكيف كانوا يعيشون في سلام وأمان. ثم تتحول الأحداث بشكل دراماتيكي، لتصف لحظات الخوف والقلق التي سبقت النزوح، وكيف تغيرت حياة الناس في لحظات.\n\nكانت الحياة بسيطة وهادئة، الناس يذهبون إلى أعمالهم في الصباح، والأطفال يلعبون في الشوارع بعد المدرسة. كانت الأسواق مزدحمة، والمقاهي تعج بالرواد. كان الجميع يخطط للمستقبل، ويحلم بغد أفضل. لكن كل ذلك تغير في لحظة واحدة.",
      date: "٥ مايو ٢٠٢٣",
      author: "خالد المحمود",
      narrator: "سمير العبدالله",
    },
  },
};

export default function StoryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const category = decodeURIComponent(params.category as string);
  const slug = params.slug as string;

  // الحصول على بيانات القصة
  const storyData = storiesData[category]?.[slug];

  // وظيفة مشاركة القصة
  const shareStory = () => {
    if (navigator.share) {
      navigator
        .share({
          title: storyData?.title,
          text: `اقرأ قصة ${storyData?.title} من ${category}`,
          url: window.location.href,
        })
        .then(() => console.log("تمت المشاركة بنجاح"))
        .catch((error) => console.log("خطأ في المشاركة:", error));
    } else {
      // نسخ الرابط إلى الحافظة إذا كانت ميزة المشاركة غير متوفرة
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("تم نسخ الرابط إلى الحافظة"))
        .catch((error) => console.log("خطأ في نسخ الرابط:", error));
    }
  };

  // إذا لم يتم العثور على القصة، عرض رسالة خطأ أو إعادة التوجيه
  if (!storyData) {
    return (
      <>
        {/* <Header /> */}
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4 font-amiri">
            لم يتم العثور على القصة
          </h1>
          <button
            onClick={() => router.push("/stories")}
            className="bg-[#365F36] text-white px-6 py-2 rounded-lg hover:bg-[#2d4d2d] transition"
          >
            العودة إلى القصص
          </button>
        </div>
      </>
    );
  }

  // تقسيم المحتوى إلى فقرات
  const contentParagraphs = storyData.content.split("\n\n");

  return (
    <>
      <div className="w-full   py-3">
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link
            href="/"
            className="shrink-0 transition-opacity hover:opacity-80"
          >
            <Image
              src="/logo.svg"
              alt="نجاة Logo"
              width={100}
              height={100}
              className="h-auto w-24 object-contain"
              priority
            />
          </Link>

          <button
            onClick={() => router.push("/stories")}
            className="flex items-center text-[#365F36] mb-6 hover:underline"
          >
            <span className="font-amiri">العودة إلى القصص</span>
            <ChevronLeft className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* زر العودة */}

        {/* عنوان التصنيف */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#5a685a] font-amiri border-b border-[#A3D3A3] pb-2 inline-block">
            {category}
          </h2>
        </div>

        {/* عنوان القصة */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#365F36] mb-10 text-center font-amiri">
          {storyData.title}
        </h1>

        {/* معلومات القصة */}

        <div className="flex flex-col md:flex-row-reverse gap-8 mb-10 ">
          {/* النص على اليمين */}
          <div className="md:w-3/4">
            <div
              className="flex flex-col md:flex-row-reverse gap-8 mb-10 p-10"
              style={{
                backgroundImage: `url("/Mask group.svg")`, // إضافة صورة خلفية من بيانات القصة
                // backgroundSize: "cover",
                // backgroundPosition: "center",
                // backgroundAttachment: "fixed",
                // color: "white", // تغيير لون النص ليكون مناسبًا مع الخلفية
              }}
            >
              <div className="font-amiri leading-relaxed ">
                {contentParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-xl mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mt-10 mb-6">
              {/* الراوي */}
              {storyData.narrator && (
                <div className="rounded-lg w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-[#365F36] mb-3 font-amiri">
                    الراوي:
                  </h3>
                  <p className="text-xl font-amiri">{storyData.narrator}</p>
                  {storyData.date && (
                    <span className="font-amiri">
                      تاريخ النشر: {storyData.date}
                    </span>
                  )}
                </div>
              )}

              {/* زر المشاركة */}
              <div className="w-full md:w-auto flex justify-center mt-6 md:mt-0">
                <button
                  onClick={shareStory}
                  className="flex items-center gap-2  border-2 text-[#365F36] px-8 py-4 rounded-lg hover:bg-[#2d4d2d] transition w-full md:w-auto hover:text-white border-[#365F36]"
                >
                  <Share2 className="w-6 h-6" />
                  <span className="font-amiri text-xl">مشاركة القصة</span>
                </button>
              </div>
            </div>
          </div>

          {/* الصورة على اليسار */}
          <div className="md:w-1/4">
            <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src={storyData.image || "/placeholder.svg"}
                alt={storyData.title}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 50vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
