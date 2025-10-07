"use client";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Alumni_Sans_SC } from "next/font/google";

const alumniSans = Alumni_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function UrduMonthSelector({ onFilterChange }) {
  const months = [
    "جنوری","فروری","مارچ","اپریل","مئی","جون",
    "جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"
  ];

  const years = [2025, 2024, 2023, 2022, 2021]; // aap required years yahan dal sakte ho

  const [selectedYear, setSelectedYear] = useState(2025); // default 2025
  const [selectedMonth, setSelectedMonth] = useState("اگست"); // default اگست

  // month ka index (1-12)
  const monthIndex = (month) => months.indexOf(month) + 1;

  const handleYearChange = (e) => {
    const year = Number(e.target.value);
    setSelectedYear(year);
    onFilterChange(year, monthIndex(selectedMonth));
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
    onFilterChange(selectedYear, monthIndex(month));
  };

  // Page load par parent component ko default values bhej do
  useEffect(() => {
    onFilterChange(selectedYear, monthIndex(selectedMonth));
  }, []);

  return (
    <div className="flex flex-col gap-4 items-end mt-10 w-full">
      <div className="relative inline-block">
  <select
  className={`${alumniSans.className} text-center appearance-none rounded-full bg-[#8E2C62] text-white px-10 py-2 pr-14 text-[40px] font-normal leading-[100%] tracking-[0%]`}
  style={{ fontStyle: "normal" }}
  value={selectedYear}
  onChange={handleYearChange}
>
  {years.map((year) => (
    <option key={year} value={year} className={`${alumniSans.className}`} style={{ fontStyle: "normal", textAlign: "center" }}>
      {year}
    </option>
  ))}
</select>



        <span className="absolute inset-y-1 right-3 mt-1 text-white flex items-center pointer-events-none">
          <RiArrowDropDownLine size={40}/>
        </span>
      </div>

      <div dir="rtl" className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 justify-items-center w-full">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => handleMonthChange(month)}
            className={`px-6 py-3 md:px-18 md:py-3 rounded-[20px] font-bold w-full sm:w-auto
              ${selectedMonth === month
                ? "bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white text-[24px]"
                : "bg-[#CDCDCD] text-white text-[24px]"}`}
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  );
}
