"use client";
import Hijab from "@/componenets/Hijab ";
import HomeCardLayout from "@/componenets/HomeCardLayout";
import Loader from "@/componenets/Loader";
import NewTahririn from "@/componenets/NewTahririn";
import KhasoosiTahriren from "@/componenets/Special";
import TechPark from "@/componenets/TechPark";
import { categoriesApi } from "@/lib/api/category";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const leftPromise = categoriesApi.BooksFilterByTag(21);
    const rightPromise = categoriesApi.BooksFilterByTag(20);

    Promise.all([leftPromise, rightPromise])
      .then(([leftRes, rightRes]) => {
        setData({
          left: leftRes.data,
          right: rightRes.data,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching books:", err);
        setLoading(false);
      });
  }, []);

  const componentMap = {
    "خصوصی تحریریں": KhasoosiTahriren,
    "گلشن تبسم": KhasoosiTahriren,
    "بزم ادب": KhasoosiTahriren,
    "جام صحت": KhasoosiTahriren,
    "چمکتے تارے": KhasoosiTahriren,
    "سیر و تفریح": KhasoosiTahriren,
    "فن پارے": KhasoosiTahriren,
    "نئی تحریریں": NewTahririn,
    "حجاب و حیا": Hijab,
    "نئی سوچ نیا سفر": HomeCardLayout,
    "ہنر کدہ": NewTahririn,
  };

  const layoutMap = {
    left: ["خصوصی تحریریں", "گلشن تبسم", "بزم ادب", "جام صحت", "چمکتے تارے", "سیر و تفریح", "فن پارے"],
    right: ["نئی تحریریں", "حجاب و حیا", "نئی سوچ نیا سفر", "ہنر کدہ"],
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-10">
        {loading ? (
          <Loader />
        ) : (
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="w-full lg:w-2/5 order-2 lg:order-1">
              {layoutMap.left.map((key, index) => {
                const Component = componentMap[key];
                return (
                  Component &&
                  data.left?.[key] && (
                    <Component
                      key={index}
                      books={Array.isArray(data.left[key]) ? data.left[key].slice(0, 30) : []}
                      title={key}
                    />
                  )
                );
              })}

              <div className="lg:hidden mt-8">
                <TechPark />
              </div>
            </div>

            {/* Right Column */}
           <div className="w-full lg:w-3/4 order-1 lg:order-2">
  <div className="space-y-10"> {/* Vertical spacing between components */}
    {layoutMap.right.map((key, index) => {
      const Component = componentMap[key];
      return (
        Component &&
        data.right?.[key] && (
          <Component
            key={index}
            books={data.right[key]}
            title={key}
            className="grid gap-10" // <-- ye ensure karega cards ke beech spacing
          />
        )
      );
    })}
  </div>

  <div className="hidden lg:block mt-10">
    <TechPark />
  </div>
</div>

          </div>
        )}
      </div>
    </div>
  );
}
