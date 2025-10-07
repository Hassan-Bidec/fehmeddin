"use client";

import React, { useState, useRef, useMemo, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "swiper/css";
import { Archivo_Black } from "next/font/google";

// const archivoBlack = Archivo_Black({
//   subsets: ["latin"],
//   weight: "400",
// });

const CountrySection = ({ sub }) => {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeBtn, setActiveBtn] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  // Window resize listener
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cards = sub?.books || [];

  // Group cards based on screen size
  const groupedCards = useMemo(() => {
    const size = windowWidth < 768 ? 4 : 8;
    const groups = [];
    for (let i = 0; i < cards.length; i += size) {
      groups.push(cards.slice(i, i + size));
    }
    return groups;
  }, [cards, windowWidth]);

  const urduMonths = [
    "جنوری", "فروری", "مارچ", "اپریل",
    "مئی", "جون", "جولائی", "اگست",
    "ستمبر", "اکتوبر", "نومبر", "دسمبر"
  ];

  const formatYearMonth = (value) => {
    if (!value) return { monthName: "", year: "" };
    const [year, month] = value.split("-");
    const monthIndex = parseInt(month, 10) - 1;
    return { monthName: urduMonths[monthIndex] || "", year };
  };

  // console.log('sub?.name', sub?.name)
  console.log('sub?.name - func', formatYearMonth(sub?.name))

  const { monthName, year } = formatYearMonth(sub?.name);

  return (
 <div dir="rtl" className="bg-white px-4 mt-5 md:px-6 font-urdu" id="Country">

  
  <div
    className={`flex flex-col md:flex-row items-center justify-center md:justify-center mb-4  relative`}
  >
    
    <div
      className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] 
      border-[#7a2f5a] text-white text-2xl font-bold 
      w-[220px] h-[50px] flex items-center justify-center 
      rounded-full text-center z-10 px-2"
    >
      <span className="mx-1 truncate">{monthName ? monthName : year}</span>
    </div>

    {/* Navigation Buttons */}
    <div
      className={`flex gap-2 ${
        windowWidth < 768
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
          ${
            activeBtn === "left"
              ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
              : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
          }`}
      >
        <FaArrowRight size={14} />
      </button>

      {/* Right Button */}
      <button
        onClick={() => {
          swiperRef.current?.slideNext();
          setActiveBtn("right");
        }}
        className={`px-4 py-2 rounded-full flex items-center justify-center border transition
          ${
            activeBtn === "right"
              ? "bg-[#7a2f5a] text-white border-[#7a2f5a]"
              : "border-[#72253e] text-[#72253e] hover:bg-[#7a2f5a] hover:text-white"
          }`}
      >
        <FaArrowLeft size={14} />
      </button>
    </div>
  </div>

  {/* Progress bar */}
  <div className="w-full h-[5px] mt-10 bg-gray-300 rounded-md overflow-hidden mb-4">
    <div
      className="h-full bg-[#72253e] transition-all duration-300"
      style={{ width: `${progress}%` }}
    ></div>
  </div>

  {/* Swiper Slides */}
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
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
      320: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      1024: { slidesPerView: 1 },
    }}
    className="w-full flex flex-col"
  >
    {groupedCards.map((group, index) => (
      <SwiperSlide key={index}>
       <div
  dir="rtl"
  className={`grid gap-3 ${
    sub?.name === "بلاگ"
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6"
      : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-24 pt-2 pb-2"
  }`}
>

          {group.map((card, i) => (
           <a
  key={i}
  href={`${process.env.NEXT_PUBLIC_API_BASE_URL}${card.pdfLink}`}
  dir="ltr"
  className={`rounded-xl transition duration-200 overflow-hidden 
    ${
      sub?.name === "بلاگ"
        ? "flex flex-row items-center justify-between bg-gray-50 w-full h-[190px] p-4 pt-2  mx-auto hover:shadow-md"
        : "flex flex-row items-center justify-between bg-white px-3 py-1 w-full md:w-[240px] shadow-[0.8px_0.8px_10px_0px_#00000012]"
    }`}
>
  {sub?.name === "بلاگ" ? (
    <>
      {/* BLOG TEXT LEFT */}
      <div className="text-right pr-3 -mt-5 flex-[0.45] overflow-hidden">
        <h4 className="font-medium text-[15px] sm:text-[16px] line-clamp-2 text-gray-800">
          {card.name}
        </h4>
        <p className="text-xs sm:text-sm text-right line-clamp-5 mt-2 text-gray-600">
          {card.description}
        </p>
      </div>

      {/* BLOG IMAGE RIGHT */}
      <div className="flex-[0.80] h-[150px] flex justify-center items-center overflow-hidden rounded-lg">
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${card.image}`}
          alt={card.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </>
  ) : (
    <>
      {/* DEFAULT IMAGE */}
      <div className="w-[80px] h-[92px] flex-shrink-0 ml-2 order-2">
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${card.image}`}
          alt={card.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* DEFAULT TEXT */}
      <div className="text-right pr-2 flex-1 order-1">
        <h4 className="font-medium text-[16px] mb-1 text-gray-800">
          {card.name}
        </h4>
        <p className="text-sm text-gray-600">{card.description}</p>
      </div>
    </>
  )}
</a>

          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


  );
};

export default CountrySection;
