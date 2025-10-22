"use client";

import { useEffect, useState, use } from "react";
import TechPark from "@/componenets/TechPark";
import { useSearchParams } from "next/navigation";

export default function InnerLayout({ children, params }) {
  // ✅ unwrap params Promise
  const resolvedParams = use(params);
  const searchParams = useSearchParams();
  const [decodedSlug, setDecodedSlug] = useState("");

  useEffect(() => {
    if (resolvedParams?.slug) {
      const decoded = decodeURIComponent(resolvedParams.slug);
      setDecodedSlug(decoded);
    }
  }, [resolvedParams]);

  const subcategory = searchParams.get("subcategory");

  return (
    <>
      {children}
      {decodedSlug === "اخبار السلام" && (
        <div className="mt-5 text-center text-lg px-4 py-2 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-48 max-w-[1600px] mx-auto">
          <TechPark />
        </div>
      )}
    </>
  );
}
