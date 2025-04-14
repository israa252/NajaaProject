import Link from "next/link"; // استيراد Link

interface StoryCardProps {
  title: string;
  image: string;
  storyId: string; // إضافة معرف القصة لتمريره في الرابط
}

const StoryCard = ({ title, image, storyId }: StoryCardProps) => (
  <div className="relative group w-full h-[689px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
    <Link href={`/stories/${storyId}`}> {/* إضافة الرابط */}
      <a>
        <Image
          src={image}
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
      </a>
    </Link>
  </div>
);
