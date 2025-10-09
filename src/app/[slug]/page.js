"use client";
import DawatEFikrSwiper from "@/componenets/DawatEFikrSection";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CountrySection from "@/componenets/CountrySection";
import Loader from "@/componenets/Loader";
import useCategoryStore from "@/lib/store/categoryStore";


const DawatEFikr = ({ params }) => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  const { categories, fetchCategories, getCategoryBySlug} = useCategoryStore();
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (id) {
  //     setLoading(true);

  //     categoriesApi.getCategoriesById(id).then((res) => {
  //       console.log("Category Data by ID:", res.data);
  //       console.log("Direct Subcategories:", res.data.subcategories);
  //       setSubCategories(res.data?.subcategories || []);
  //       setLoading(false);

  //     });
  //   }
  // }, [id]);
  useEffect(() => {

    if (categories.length === 0) {
      fetchCategories().then(() => setLoading(false));
    } else {
      setLoading(false);
    }
console.log("Category:", categories);

  }, [categories, fetchCategories]);

  useEffect(() => {
    if (!loading && slug) {
      const category = getCategoryBySlug(slug);
      
        console.log('detail',getCategoryBySlug(slug))
      if (category) {
        setSubCategories(category.subcategories || []);
      }
    }
    
  }, [slug, loading, categories, getCategoryBySlug]);

  const limits = {
    "دعوت ِ فکر": 14,
    "ملک و ملت": 10,
    "سیادت و قیادت": 14,
    "رہ نمائی و بصیرت": 10,
    "جذبہ اخوت": 14,
    "متفرق": 10,
    "فہم ِقرآن ": 14,
    "فہم ِحدیث": 10,
    "آئینہ ء زندگی": 14,
    "دعا و مُناجات": 14,
    "تعلیم و تربیت": 14,
    "مسائل کا جواب": 10,
    "جہانِ صحت": 14,
    
    "سیر و سیاحت": 14,
    "تاریخ  وجغرافیہ": 10,
    "سیرت و سوانح ": 14,
    "بلاگ": 3,
    "ستاروں پہ کمند": 14,
    "تعمیرِ وطن": 10,
    "سائنس و ٹیکنا لوجی": 14,
    "خدمت ِخلق": 10,
    "ہنر اور فن ": 14,
    "جیت کا جنون ": 10,
    "روشن قندیلیں ": 14,
    "فقہی رہ نمائی": 10,
    "گھر/گھرانہ ": 14,
    "قرینہ و سلیقہ": 10,
    "رفیق سفر": 14,
    "بناؤ سنگھار": 10,
    "ذائقے": 14,
    "کہانیاں": 14,
    "بڑوں  کا بچپن": 10,
    "میرا باغچہ": 14,
    "آؤ بچو جان بنائیں": 10,
    "کھیل کھلاڑی": 14,
    "ننھے لکھاری": 10,
    "فن پارے": 14,
    "افسانے و کہانیاں ": 14,
    "گلشن ِتبسم": 10,
    "قلم پارے": 10,
    "شاعری": 10,
    "زبان و بیان": 14,
    "تعلیم و تربیت": 14,
    "کمیونٹی سروس": 10,
    "علاج ": 14,
    "فراہمی روزگار": 10,
    "خوراک و غذا": 14,
    "بیت السلام یوتھ سوسائٹی": 10,
    "قدرتی آفات": 14,
    "سائبان ": 10
  };

  return (
  <div className="w-full bg-white overflow-visible">
  <div
    className="
      mx-auto w-full
      px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
      py-10 mt-10 mb-[150px]
    "
    style={{
      maxWidth: "1920px",
      margin: "0 auto",
      overflowX: "hidden",
    }}
  >
    {loading ? (
      <Loader />
    ) : subCategories.length > 0 ? (
      <div className="flex flex-col gap-16 lg:gap-20 ">
        {subCategories.map((sub, index) => {
          const limit = limits[sub.name] || 14;
          const limitedBooks = sub.books ? sub.books.slice(0, limit) : [];
          const subWithLimit = { ...sub, books: limitedBooks };

          return (
            <div key={index} className="w-full">
              {index % 2 === 0 ? (
                <DawatEFikrSwiper sub={subWithLimit} />
              ) : (
                <CountrySection sub={subWithLimit} />
                
              )}
            </div>
          );
        })}
      </div>
    ) : (
      <p className="text-center text-gray-600 text-lg py-10">
        No Subcategories found
      </p>
    )}
  </div>
</div>




  );


};

export default DawatEFikr;