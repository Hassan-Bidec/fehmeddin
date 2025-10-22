"use client";

import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { useEffect, useState } from "react";
import { categoriesApi } from "@/lib/api/category";
import { usePathname } from "next/navigation";
import useCategoryStore from "@/lib/store/categoryStore";

// ✅ Loader Component
const LoaderBar = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[3px] overflow-hidden">
      <div className="h-full w-1/3 bg-gradient-to-r from-[#1CAAF6] via-[#8E2C62] to-[#5D1F42] animate-loader" />
      <style jsx>{`
        @keyframes loader {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(300%);
          }
        }
        .animate-loader {
          animation: loader 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const decodedPath = decodeURIComponent(pathname);

  const { categories, fetchCategories } = useCategoryStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      await fetchCategories();
      setLoading(false);
    };
    loadCategories();
  }, [fetchCategories]);

  // ✅ Sort categories by ID (Highest → Lowest)
  const sortedCategories = [...categories].sort((a, b) => b.id - a.id);

  const handleCategoryClick = (id) => {
    // console.log("Selected Category ID:", id);
    setIsOpen(false);
  };

  return (
    <div className="relative">
  {/* ✅ Loader shown while categories are loading */}
  {loading && <LoaderBar />}

    <div className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white px-2 md:px-4 py-3 flex items-center justify-between rtl text-[18px]">
    {/* ✅ Left Section (Categories) */}
    <div className="hidden md:flex flex-wrap justify-start rtl divide-x divide-white/60 text-center space-x-reverse">
      {sortedCategories.slice(0, 10).map((item, idx) => {
        const isActive = decodedPath === item.href;
        return (
          <Link
            onClick={() => handleCategoryClick(item.id)}
            key={idx}
            href={`${item.href}?slug=${item.slug}`}
          >
            <span className="relative px-2 md:px-3 cursor-pointer inline-block">
              {item.name}
              {isActive && (
                <span className="absolute left-0 right-10 top-[38px] -bottom-1 mx-auto h-[3px] w-full bg-[#1CAAF6] rounded-full"></span>
              )}
            </span>
          </Link>
        );
      })}
    </div>

    {/* ✅ Right Section (Home Link) */}
    <Link href="/">
      <div className="relative flex items-center gap-1 md:gap-2 px-2 cursor-pointer">
        <span className="text-[20px]">ہوم پیج</span>
        <FaHome className="text-lg md:text-xl" />
        {pathname === "/" && (
          <span className="absolute left-0 right-10 top-[38px] -bottom-1 mx-auto h-[3px] w-full bg-[#1CAAF6] rounded-full"></span>
        )}
      </div>
    </Link>

    {/* ✅ Mobile Menu Icon (Right Side) */}
    <button
      className="md:hidden text-3xl"
      onClick={() => setIsOpen(true)}
    >
      <HiMenu />
    </button>
  </div>


  {/* ✅ Mobile Sidebar Drawer */}
  {isOpen && (
    <div className="fixed inset-0 z-50 flex md:hidden">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className="relative bg-[#72253e] w-64 p-5 space-y-6 text-white animate-slide-in">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          <HiX />
        </button>

        {/* Home link */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className={`block text-lg ${
            pathname === "/" ? "text-[#1CAAF6]" : ""
          }`}
        >
          ہوم پیج
        </Link>

        {sortedCategories.slice(0, 8).map((item) => {
          const isActive = decodedPath === item.href;
          return (
            <Link
              key={item.id}
              href={`${item.href}?slug=${item.slug}`}
              onClick={() => handleCategoryClick(item.id)}
              className={`block text-lg ${
                isActive ? "text-[#1CAAF6]" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  )}
</div>

  );
};

export default function PageWithNavbarAndBanner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    categoriesApi.Banner().then((res) => {
      if (res?.data) {
        const sorted = res.data.sort((a, b) => a.order - b.order);
        setBanners(sorted);
      }
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Banner Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-4 mt-6 md:mt-8 px-4">
        {banners.length > 0 ? (
          <>
            {banners[0] && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${banners[1]?.url}`}
                alt={banners[0]?.title || "Banner 2"}
                className="rounded-[24px] w-full md:w-1/3 aspect-[16/9] object-cover cursor-pointer"
              />
            )}

            {banners[1] && (
              <img
                src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${banners[0]?.url}`}
                alt={banners[1]?.title || "Banner 1"}
                className="rounded-[24px] w-full md:w-2/3 aspect-[16/9] object-cover cursor-pointer"
              />
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
