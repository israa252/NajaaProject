"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SLIDER_IMAGES = [
  { src: "/img/Pic1.PNG", alt: "إسماعيل الغول-fit-300" },
  { src: "/img/Pic2.PNG", alt: "يارا محمد عزات عبداللطيف-fit-300" },
  { src: "/img/Pic3.PNG", alt: "لقطة شاشة" },
  { src: "/img/Pic4.PNG", alt: "عليا ابو طاقية-fit-300" },
  { src: "/img/Pic5.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
  { src: "/img/Pic6.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
  { src: "/img/Pic7.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
  { src: "/img/Pic8.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
  { src: "/img/Pic9.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
  { src: "/img/Pic10.PNG", alt: "إسلام مفيد أبو سعدة-fit-300" },
];

const SWIPER_CONFIG = {
  slidesPerView:5, // تحديد عدد ثابت للشرائح
  spaceBetween: 0,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  centeredSlides: false, // إزالة المركزة
};

export default function FullWidthSlider() {
  return (
    <div className="absolute inset-x-0 top-[616px] h-[250px] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        className="h-full w-full"
        {...SWIPER_CONFIG}
      >
        {SLIDER_IMAGES.map((image, index) => (
          <SwiperSlide 
            key={`${image.alt}-${index}`}
        
          >
            <SlideContent image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

type SlideContentProps = {
  image: typeof SLIDER_IMAGES[number];
};

function SlideContent({ image }: SlideContentProps) {
  return (
    <div 
      className="relative h-full w-full  bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${image.src})`,
        aspectRatio: "1/1" // تحديد نسبة أبعاد ثابتة
      }}
    >
      <div className="absolute inset-0 bg-green-900/50" />
    </div>
  );
}