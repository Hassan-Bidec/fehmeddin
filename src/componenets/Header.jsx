"use client";

import axiosClient from "@/lib/api/axiosClient";
import useContactStore from "@/lib/store/useContactStore";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Header() {
  const [dateData, setDateData] = useState(null);
  const { contactInfo, fetchContactInfo } = useContactStore();

  // 🔹 Fetch date from API
  useEffect(() => {
    async function fetchDate() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}dates/current-dates`);
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
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-[#0093e0] text-white px-4 flex flex-col md:flex-row justify-between items-center rtl gap-3">
        <div className="text-center md:text-right leading-tight">
          <p className="text-[20px] mt-2 mb-1">
            زیر سرپرستی: حضرت مولانا عبد الستار حفظہ اللہ
          </p>

          <p
            className="text-[16px] flex items-center justify-end gap-2"
            dir="rtl"
          >
            <FaRegCalendarAlt className="text-white text-[16px]" />
            {dateData?.hijri && dateData?.gregorian
              ? `${dateData.hijri.date} ${dateData.hijri.month} ${dateData.hijri.year}, ${dateData.gregorian.date} ${dateData.gregorian.month} ${dateData.gregorian.year}`
              : "Loading..."}
          </p>
        </div>

        <div className="text-center md:text-right">
          {contactInfo?.logo && (
            <img
              src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${contactInfo.logo}`}
              alt="Logo"
              className="md:h-14 mt-2 object-contain mx-auto md:mx-0"
            />
          )}
        </div>
      </div>
    </div>
  );
}
