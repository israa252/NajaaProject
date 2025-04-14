"use client";

import Image from "next/image";

interface StoryCardProps {
  title: string;
  image: string;
}

const StoryCard = ({ title, image }: StoryCardProps) => (
  <div className="relative group w-full h-[689px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105">
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
  </div>
);

export default function UpdatedStories() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-amiri text-4xl text-[#365F36] text-center mb-20">
          أحدث القصص في نجاة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard title="أحمد حجازي" image="/stroy1.png" />
          <StoryCard title="الصحفي أيمن" image="/story2.png" />
          <StoryCard title="ما قبل النزوح" image="/story3.png" />
        </div>
      </div>
    </section>
  );
}