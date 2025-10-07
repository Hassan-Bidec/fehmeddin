"use client";
import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import { Archivo_Black } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
});

const DawatEFikrSwiper = ({ sub }) => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const cards = sub?.books || [];

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mx-auto mt-5 bg-white w-full px-4 md:px-6 font-urdu">
      {/* Title and Arrows */}
      <div className="flex flex-col md:flex-row items-center justify-center relative mb-4 gap-3">
        {/* Month/Year */}
        <div
          className={`bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] 
    text-white font-bold 
    w-[220px] h-[50px] flex items-center justify-center 
    rounded-full text-center px-2
    ${!isNaN(Number(sub.name))
              ? `${archivoBlack.className} text-[20px]`
              : "text-[18px] md:text-[20px] font-urdu"
            }`}
        >
          <span className="truncate">{sub.name}</span>
        </div>



        {/* Navigation Buttons */}
        <div
          className={`flex gap-2 ${windowWidth < 768
            ? "justify-center mt-3 w-full"
            : "absolute right-0 top-1/2 -translate-y-1/2"
            }`}
        >
          {/* Left Button */}
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setActiveBtn("left");
            }}
            className={`px-4 py-2 rounded-full flex items-center justify-center border transition
              ${activeBtn === "left"
                ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
                : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
              }`}
          >
            <FaArrowLeft size={14} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setActiveBtn("right");
            }}
            className={`px-4 py-2 rounded-full flex items-center justify-center border transition
              ${activeBtn === "right"
                ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
                : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
              }`}
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-[5px] bg-gray-300 rounded-md overflow-hidden mt-10 mb-4">
        <div
          className="h-full bg-[#72253e] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Swiper */}
      <Swiper
        dir="rtl"
        className="m-auto"
        spaceBetween={10}
        slidesPerView={1.2}
        centeredSlides={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const totalSlides =
            swiper.slides.length - swiper.params.slidesPerView;
          const current = swiper.activeIndex;
          const percent = (current / totalSlides) * 100;
          setProgress(Math.min(percent, 100));
        }}
        breakpoints={{
          640: { slidesPerView: 2, centeredSlides: false },
          768: { slidesPerView: 3, centeredSlides: false },
          1024: { slidesPerView: 7, centeredSlides: false },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <a
              dir="rtl"
              href={`${BASE_URL}${card.pdfLink}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                dir="rtl"
                className="bg-white rounded-[19.57px] mt-10 mb-20 shadow-[0.8px_0.8px_10px_0px_#00000012] hover:shadow-md transition duration-300 h-[380.93px] flex flex-col md:w-[160px] mx-auto"
              >
                <img
                  src={`${BASE_URL}${card.image}`}
                  alt={card.name}
                  className="w-full p-2 h-[220px] object-cover rounded-[15.65px]"
                />
                <div className="p-2 text-right text-black flex-1 flex flex-col">
                  <h4 className="text-[20.91px] mb-1 line-clamp-1">
                    {card.name}
                  </h4>
                  <p className="text-[20.91px] line-clamp-3 ">{card.description}</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DawatEFikrSwiper;
