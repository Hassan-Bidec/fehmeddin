"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import useContactStore from "@/lib/store/useContactStore";
import logo from '../../public/logo.png'
export default function Header() {
  const [dateData, setDateData] = useState(null);
  const { contactInfo, fetchContactInfo } = useContactStore();

  // 🔹 Fetch date from API
  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}dates/current-dates`
        );
        setDateData(response.data);
      } catch (error) {
        console.log("Error fetching date:", error);
      }
    }
    fetchDate();
  }, []);

  // 🔹 Fetch contact info
  useEffect(() => {
    if (!contactInfo) fetchContactInfo();
  }, [contactInfo, fetchContactInfo]);

  return (
    <header className="w-full bg-[#0093e0] text-white px-4 py-3">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-6">
        {/* 🔹 Left Section (Name + Date) */}
        <div className="text-center md:text-left leading-tight">
          <p className="text-[18px] md:text-[20px] font-semibold">
            زیر سرپرستی: حضرت مولانا عبد الستار حفظہ اللہ
          </p>

          <p className="text-[15px] md:text-[16px] flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaRegCalendarAlt className="text-white text-[16px]" />
            {dateData?.hijri && dateData?.gregorian ? (
              `${dateData.hijri.date} ${dateData.hijri.month} ${dateData.hijri.year}, 
              ${dateData.gregorian.date} ${dateData.gregorian.month} ${dateData.gregorian.year}`
            ) : (
              "Loading..."
            )}
          </p>
        </div>

        {/* 🔹 Right Section (Logo) */}
        {/* {contactInfo?.logo && ( */}
        <div className="flex justify-center md:justify-end w-full md:w-auto">
          <img
            src={logo}
            alt="logo"
            className="h-8 md:h-12 object-contain"
          />
        </div>

        {/* )} */}
      </div>
    </header>
  );
}
