"use client";

import useContactStore from "@/lib/store/useContactStore";
import { useEffect, useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";


export default function Header() {
  const [gregorianDate, setGregorianDate] = useState("");
    const { contactInfo, fetchContactInfo } = useContactStore();


  const urduMonths = [
    "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
    "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"
  ];

  // ہجری مہینوں کے اردو نام
  const hijriMonthsUrdu = {
    "محرم": "محرم",
    "صفر": "صفر",
    "ربيع الأول": "ربیع الاول",
    "ربيع الآخر": "ربیع الآخر",
    "جمادى الأولى": "جمادی الاول",
    "جمادى الآخرة": "جمادی الآخر",
    "رجب": "رجب",
    "شعبان": "شعبان",
    "رمضان": "رمضان",
    "شوال": "شوال",
    "ذو القعدة": "ذوالقعدہ",
    "ذو الحجة": "ذوالحجہ"
  };

  useEffect(() => {
    const today = new Date();

    // عیسوی تاریخ
    const gDay = today.getDate();
    const gMonth = urduMonths[today.getMonth()];
    const gYear = today.getFullYear();
    const gDate = `${gDay} ${gMonth} ${gYear}ء`;

    // ہجری تاریخ
    const hijriFormatter = new Intl.DateTimeFormat("ar-TN-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });

    const parts = hijriFormatter.formatToParts(today);
    const hDay = parts.find(p => p.type === "day")?.value;
    const hMonthAr = parts.find(p => p.type === "month")?.value;
    const hYear = parts.find(p => p.type === "year")?.value;

    // اردو مہینہ replace کریں
    const hMonth = hijriMonthsUrdu[hMonthAr] || hMonthAr;

    // Format: دن + مہینہ + سال
    const hDate = `${hDay} ${hMonth} ${hYear}ھ`;

    setGregorianDate(`${hDate}، ${gDate}`);
  }, []);
 useEffect(() => {
    // صرف پہلی بار API کال
    if (!contactInfo) fetchContactInfo();
  }, [contactInfo, fetchContactInfo]);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="bg-[#0093e0] text-white px-4 flex flex-col md:flex-row justify-between items-center rtl gap-3">
        <div className="text-center md:text-right leading-tight">
          <p className="text-[20px] mt-2 mb-1">
            زیر سرپرستی: حضرت مولانا عبد الرحمن حفظہ اللہ
          </p>

          <p className="text-[16px] flex items-center justify-end gap-2" dir="rtl">
            <FaRegCalendarAlt className="text-white text-[16px]" />
            {gregorianDate}
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

