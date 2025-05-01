import Image from "next/image";

interface StoryCardProps {
  title: string;
  description: string;
  bgImage: string;
  overlayImage: string;
  imagePosition?: "left" | "right";
  overlayTop?: string;
  overlayLeft?: string;
}

const StoryCard = ({
  title,
  description,
  bgImage,
  overlayImage,
  imagePosition = "left",
  overlayTop = "30%",
  overlayLeft = "50%",
}: StoryCardProps) => (
  <div
    className={`relative mt-20 flex flex-col lg:flex-row ${
      imagePosition === "right" ? "lg:flex-row-reverse" : ""
    } items-center lg:items-start min-h-96`}
  >
    {/* Text Content */}
    <div className="max-w-[700px] text-right lg:flex-1 lg:pr-8">
      <h3 className="text-4xl font-amiri text-primary-dark">{title}</h3>
      <p className="mt-4 text-2xl font-amiri text-primary-dark leading-9 max-w-[600px]">
        {description}
      </p>
      <button className="mt-6 w-[109px] h-[55px] bg-[#2a4a2a] text-white text-2xl font-amiri rounded-lg hover:bg-[#2a4a2a] transition-colors">
        رؤية
      </button>
    </div>

    {/* Image Container */}
    <div
      className={`relative mt-8 lg:mt-0 lg:w-[600px] lg:flex-shrink-0 ${
        imagePosition === "right" ? "lg:mr-[-75px]" : "lg:ml-[-75px]"
      }`}
    >
      <Image
        src={bgImage}
        alt={title}
        width={600}
        height={650}
        className="w-full h-auto"
      />
      {/* Overlay Image */}
      <Image
        src={overlayImage}
        alt="Overlay"
        width={290}
        height={300}
        className="absolute w-[300px] h-[403px] "
        style={{
          top: overlayTop,
          left: overlayLeft,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  </div>
);

const StoriesSection = () => (
  <section className="relative w-full px-4 sm:px-8 lg:px-20">
    <h2 className="text-3xl sm:text-4xl font-amiri font-bold text-primary-green text-center mb-16">
      أقسام القصص
    </h2>

    <StoryCard
      title="عودة الأمل"
      description= "قصص تحكي عن شجاعة البدايات الجديدة بعد الألم. حكايات لأشخاص وجدوا النور بعد الظلام، واستطاعوا بناء حياة مليئة بالأمل رغم كل الصعاب. اقرأ كيف يمكن للقوة والإيمان أن ينهضا من بين الركام"
      bgImage="/back.png"
      overlayImage="/girl1.png"
      overlayTop="37%"
      overlayLeft="50%"
    />

    <StoryCard
      title="رسائل لم تُرسل"
      description= "كلمات بقيت حبيسة القلوب، وأسرار لم تجد طريقها لمن رحلوا قبل أن يسمعوها. بحب لم يُعترف به، وبشوق لا ينطفئ. رسائل لأمهات وأحبة غادروا دون وداع، لكنها تصل إليهم بصدق المشاعر وعمق الفقدان"
      bgImage="/back2.png"
      overlayImage="/girl2.png"
      imagePosition="right"
      overlayTop="62%"
      overlayLeft="60%"
    />

    <StoryCard
      title="حكايات من الغربة"
      description= "في عالم بعيد عن الوطن، تتشابك المشاعر بين الحنين والاكتشاف. هناك، حيث تختلف الوجوه وتتنوع اللغات، يعيش المغترب حكايات لا تشبه غيرها. بين دفء الذكريات وصخب الواقع، تتراقص لحظات الفرح مع دموع الشوق." 
      bgImage="/back.png"
      overlayImage="/garab.png"
      overlayTop="31%"
      overlayLeft="48%"
      
    />
  </section>
);

export default StoriesSection;
