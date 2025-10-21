"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import Link from "next/link";

const DawatEFikrSwiper = ({ sub }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [progress, setProgress] = useState(0);
  const swiperRef = useRef(null);
  const [activeBtn, setActiveBtn] = useState(null);
  const [windowWidth, setWindowWidth] = useState(0);

  // ✅ Track window width
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // ✅ Fix hydration issue
  useEffect(() => {
    const timer = setTimeout(() => {
      if (swiperRef.current) swiperRef.current.update();
    }, 400);
    return () => clearTimeout(timer);
  }, [windowWidth]);

  const cards = sub?.books || [];

  return (
    <div className="mx-auto mt-5 bg-white w-full px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 2xl:px-40 font-urdu max-w-[2200px]">
      {/* --- Title and Arrows --- */}
      <div className="flex flex-col md:flex-row items-center justify-center relative mb-4 gap-3">
        <div
          className={`bg-gradient-to-r from-[#8E2C62] to-[#5D1F42]
            text-white font-bold 
            w-[220px] h-[50px] flex items-center justify-center 
            rounded-full text-center px-2 shadow-md text-[18px] md:text-[20px]`}
        >
          <span className="truncate">{sub?.name}</span>
        </div>

        {/* --- Navigation Buttons --- */}
        <div
          className={`flex gap-2 transition-all duration-300 ${windowWidth < 768
              ? "justify-center mt-3 w-full"
              : "absolute right-0 top-1/2 -translate-y-1/2"
            }`}
        >
          <button
            onClick={() => {
              swiperRef.current?.slidePrev();
              setActiveBtn("left");
            }}
            className={`px-4 py-2 rounded-full flex items-center justify-center border transition-all duration-300
              ${activeBtn === "left"
                ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
                : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
              }`}
          >
            <FaArrowLeft size={14} />
          </button>

          <button
            onClick={() => {
              swiperRef.current?.slideNext();
              setActiveBtn("right");
            }}
            className={`px-4 py-2 rounded-full flex items-center justify-center border transition-all duration-300
              ${activeBtn === "right"
                ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
                : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
              }`}
          >
            <FaArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* --- Progress Bar --- */}
      <div className="w-full h-[5px] mt-10 bg-gray-300 rounded-md overflow-hidden mb-4">
        <div
          className="h-full bg-[#72253e] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* --- Swiper Cards --- */}
      <Swiper
        dir="rtl"
        className="m-auto"
        spaceBetween={20}
        slidesPerView={2}
        centeredSlides={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          const totalSlides = swiper.slides.length - swiper.params.slidesPerView;
          const current = swiper.activeIndex;
          const percent = (current / totalSlides) * 100;
          setProgress(Math.min(percent, 100));
        }}
        breakpoints={{
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 3, spaceBetween: 15 },
          768: { slidesPerView: 4, spaceBetween: 18 },
          1024: { slidesPerView: 5, spaceBetween: 18 },
          1280: { slidesPerView: 6, spaceBetween: 20 },
          1536: { slidesPerView: 7, spaceBetween: 22 },
          1920: { slidesPerView: 8, spaceBetween: 24 },
          2560: { slidesPerView: 10, spaceBetween: 26 },
        }}
      >
        {cards.map((post, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-center overflow-visible p-1"
          >
            <Link
              href={`/book/${post.slug}`}
            
              rel="noopener noreferrer"
              className="flex flex-col items-center text-right w-full max-w-[240px] mx-auto md:mx-0 md:mr-5"
            >
              <div
                className="w-full p-2 h-[310px] rounded-2xl bg-white 
                  shadow-[0.8px_0.8px_10px_0px_#00000012]
                  flex flex-col transition-transform duration-300 hover:scale-[1.02]"
              >
                {/* Image */}
                <img
                  src={`${BASE_URL}${post.image}`}
                  alt={post.name}
                  className="rounded-xl w-full max-w-[220px] h-[180px] object-cover mx-auto"
                />

                {/* Text */}
                <div className="px-2 py-2 flex-1 flex flex-col">
                  <h3 className="text-[16px] text-gray-800 font-semibold line-clamp-2">
                    {post.name}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 font-[400] line-clamp-4">
                    {post.description}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DawatEFikrSwiper;
