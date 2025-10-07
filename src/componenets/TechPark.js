"use client";

import { categoriesApi } from "@/lib/api/category";
import { useEffect, useState } from "react";

export default function TechPark() {
    const [gallery, setGallery] = useState([]);

  useEffect(() => {
  categoriesApi.Banner().then((res) => {
    console.log("API Response 👉", res.data);

    if (Array.isArray(res.data)) {
      console.log("Gallery Data 👉", res.data);
      setGallery(res.data);
    }
  });
}, []);



 const images = gallery.filter((item) => item.subType === "Image");
  // videos filter
  const videos = gallery.filter((item) => item.subType === "Embedded");
  return (
    // <div className="w-full px-2 md:px-0 md:w-[830px] mx-auto -mt-4">
    //   {/* Top Section with Images */}
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-full">
    //     {/* Left column */}
    //     <div className="w-full flex flex-col gap-3">
    //       <img
    //         src="/banner.png"
    //         alt="Banner"
    //         className="rounded-lg w-full h-40 md:h-1/2 object-cover"
    //       />
    //       <div className="grid grid-cols-2 gap-2 w-full">
    //         <img
    //           src="/building1.png"
    //           alt="Building 1"
    //           className="rounded-lg w-full h-32 md:h-full object-cover"
    //         />
    //         <img
    //           src="/building2.png"
    //           alt="Building 2"
    //           className="rounded-lg w-full h-32 md:h-full object-cover"
    //         />
    //       </div>
    //     </div>

    //     {/* Center main image */}
    //     <div className="col-span-1 h-full">
    //       <img
    //         src="/building.png"
    //         alt="Main Building"
    //         className="rounded-lg w-full h-48 md:h-full object-cover"
    //       />
    //     </div>

    //     {/* Right column - Videos */}
    //     <div className="flex flex-col gap-3">
    //       <iframe
    //         className="rounded-lg w-full h-32 md:h-40"
    //         src="https://www.youtube.com/embed/VIDEO_ID_1"
    //         title="Baitussalam Documentary 1"
    //         frameBorder="0"
    //         allowFullScreen
    //       ></iframe>
    //       <iframe
    //         className="rounded-lg w-full h-32 md:h-40"
    //         src="https://www.youtube.com/embed/VIDEO_ID_2"
    //         title="Baitussalam Documentary 2"
    //         frameBorder="0"
    //         allowFullScreen
    //       ></iframe>
    //     </div>
    //   </div>

    //   {/* Bottom Banner */}
    //   <div className="w-full mt-4">
    //     <img
    //       src="/Tech.png"
    //       alt="Tech Park"
    //       className="w-full h-20 md:h-[100px] object-cover rounded-lg"
    //     />
    //   </div>
    // </div>
   <div className="w-full md:mt-5 mx-auto lg:-mt-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full h-full">
    {/* Left column */}
    <div className="w-full flex flex-col gap-3">
      {images[0] && (
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${images[0].url}`}
          alt={images[0].title}
          className="rounded-lg w-full h-[160px] md:h-[160px] object-cover"
        />
      )}

      <div className="grid grid-cols-2 gap-2 w-full">
        {images[1] && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${images[1].url}`}
            alt={images[1].title}
            className="rounded-lg w-full h-[120px] md:h-[130px] object-cover"
          />
        )}
        {images[2] && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${images[2].url}`}
            alt={images[2].title}
            className="rounded-lg w-full h-[120px] md:h-[130px] object-cover"
          />
        )}
      </div>
    </div>

    {/* Center main image */}
    <div className="col-span-1">
      {images[3] && (
        <img
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${images[3].url}`}
          alt={images[3].title}
          className="rounded-lg w-full h-[280px] md:h-[300px] object-cover"
        />
      )}
    </div>

    {/* Right column - Videos */}
    <div className="flex flex-col gap-3">
      {videos.map((video, idx) => (
       <iframe
  key={idx}
  className="rounded-lg w-full h-[120px] md:h-[142px]"
  src={video.url.replace("youtu.be/", "www.youtube.com/embed/")}
  title={video.title}
  frameBorder="0"
  allowFullScreen
></iframe>


      ))}
    </div>
  </div>

  {/* Bottom Banner */}
 <div className="w-full mt-4">
  {images[4] && (
    <img
      src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${images[4].url}`}
      alt={images[4].title}
      className="w-full h-[90px] md:h-[100px] object-fill rounded-lg"
    />
  )}
</div>

</div>


  );
}
