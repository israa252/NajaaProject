"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const SLIDER_IMAGES = [
  { src: "/img/Pic1.PNG", alt: "إسماعيل الغول" },
  { src: "/img/Pic2.PNG", alt: "يارا محمد عزات عبداللطيف" },
  { src: "/img/Pic3.PNG", alt: "لقطة شاشة" },
  { src: "/img/Pic4.PNG", alt: "عليا أبو طاقية" },
  { src: "/img/Pic5.PNG", alt: "إسلام مفيد أبو سعدة" },
  { src: "/img/Pic6.PNG", alt: "صورة إضافية" },
  { src: "/img/Pic7.PNG", alt: "صورة إضافية" },
  { src: "/img/Pic8.PNG", alt: "صورة إضافية" },
  { src: "/img/Pic9.PNG", alt: "صورة إضافية" },
  { src: "/img/Pic10.PNG", alt: "صورة إضافية" },
];

const SWIPER_CONFIG = {
  modules: [Autoplay],
  slidesPerView: 5,
  spaceBetween: 0,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 6 },
  },
};

export default function FullWidthSlider() {
  return (
    <div className="absolute inset-x-0 top-[616px] w-full overflow-hidden">
      <Swiper {...SWIPER_CONFIG} className="h-[250px] w-full">
        {SLIDER_IMAGES.map((image, index) => (
          <SwiperSlide key={index}>
            <SliderImage src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

type SliderImageProps = {
  src: string;
  alt: string;
};

function SliderImage({ src, alt }: SliderImageProps) {
  return (
    <div
      className="relative h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${src})` }}
      aria-label={alt}
    >
      <div className="absolute inset-0 bg-green-900/40" />
    </div>
  );
}
