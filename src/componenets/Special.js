// import Gulshan from "@/componenets/Gulshan ";
// import Literature from "@/componenets/Literature ";
// import Health from "@/componenets/Health ";

// import Ghomane from "@/componenets/Ghomane ";
// import Fanpare from "@/componenets/Fanpare";
// import Chamakte from "@/componenets/Chamakte ";


// export default function KhasoosiTahriren({ books = [], title }) {
//   const posts = [
//     {
//       date: "25-6-24",
//       img: "/Rectangle 651.png",
//       title: "بلا عنوان",
//       desc: "تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"

//     },
//     {
//       date: "25-6-24",
//       img: "/Rectangle 654.png",
//       title: "یقین کامل",
//       desc: "ڈیجیٹل دنیا میں خواتین کو درپیش چیلنجز اور ان سے نمٹنے کے طریقے۔"
//     },
//     {
//       date: "25-6-24",
//       img: "/Rectangle 650.png",
//       title: "دعا کی تعبیر",
//       desc: "علم اور ازدواجی زندگی میں توازن پر رہنمائی۔ تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"
//     },
//     {
//       date: "25-6-24",
//       img: "/Rectangle 653.png",
//       title: "فشار خون",
//       desc: "قرآن و سنت کی روشنی میں خواتین کے بنیادی حقوق۔تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"
//     },
//     {
//       date: "25-6-24",
//       img: "/Rectangle 366.png",
//       title: "فشار خون",
//       desc: "قرآن و سنت کی روشنی میں خواتین کے بنیادی حقوق۔تعلیم سے متعلق خواتین میں بیداری اور ترقی کی راہیں۔"
//     },





//   ];

//   return (

//     <div className="mt-10">
//       <div className="bg-gray-100 w-95 pl-5 p-15 h-auto rounded-xl ">
//         {/* Section Header */}
//         <h2 className="text-center text-2xl font-bold text-[#5D1F42] mb-6">
//           {title}        </h2>

//         <div className="space-y-6 w-85">
//           {books.map((post, i) => (
//             <div key={i} className="flex bg-white rounded-lg shadow p-3 items-start gap-4">

//               {/* Text Content */}
//               <div className="flex-1 text-right">
//                 {/* Date & Title Row */}
//                 <div className="flex justify-between items-center mb-1">
//                   {/* Date Badge (right side now) */}
//                   <div className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white px-3 py-1 rounded-[20px] h-[28px] text-xs font-semibold">
//                     {post.created_at}
//                   </div>

//                   {/* Title (now on left side) */}
//                   <h3 className="font-bold text-gray-800  text-[15px]">{post.name}</h3>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
//               </div>

//               {/* Image */}
//               <img
// src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.image}`}                alt={post.title}
//                 className="w-24 h-20 rounded-lg object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <div className="mt-35 ">
//         <Gulshan />
//       </div>
//       <div className="mt-30 ">
//         <Literature />

//       </div>
//       <div className="mt-30 ">
//         <Health />

//       </div>
//       <div className="mt-30 ">
//         <Chamakte />
//       </div>
//       <div className="mt-30 ">
//         <Ghomane />
//       </div>
//       <div className="mt-30 ">
//         <Fanpare />
//       </div> */}
//     </div>


//   );
// }

"use client";
import { useState } from "react";

export default function KhasoosiTahriren({ books = [], title }) {
  // Default visible count depending on title
  const [visibleCount, setVisibleCount] = useState(
    title === "خصوصی تحریریں"
      ? 15
      : title === "سیر و تفریح"
      ? 1
      : title === "چمکتے تارے"
      ? 5
      : title === "گلشن تبسم"
      ? 3
      : 2
  );

  const handleToggle = () => {
    if (visibleCount < books.length) {
      // Show all books
      setVisibleCount(books.length);
    } else {
      // Reset back depending on title
      setVisibleCount(
        title === "خصوصی تحریریں"
          ? 15
          : title === "سیر و تفریح"
          ? 1
          : title === "چمکتے تارے"
          ? 5
          : title === "گلشن تبسم"
          ? 3
          : 2
      );
    }
  };

  return (
    <div className="">
      <div
        className={`
          md:w-[full] lg:w-86 md:p-3 p-5 w-full h-auto rounded-xl
          ${title === "خصوصی تحریریں" ? "bg-[#F5F5F5]" : ""}
          [@media(min-width:1026px)_and_(max-width:1279px)]:w-72
        `}
      >
        {/* Section Header */}
        <h2 className="text-center mt-5 text-3xl text-[#5D1F42] mb-6">
          {title}
        </h2>

        {/* Books List */}
      <div
  className="
    space-y-5 lg:w-76 md:[700px]
    [@media(min-width:1026px)_and_(max-width:1279px)]:w-64
  "
>
  {books.slice(0, visibleCount).map((post, i) => (
    <a
      key={i}
      href={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.pdfLink}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex bg-white rounded-lg shadow-[0.8px_0.8px_10px_0px_#00000012] p-2.5 items-start gap-4 hover:shadow-md transition"
    >
      {/* Text Content */}
      <div className="flex-1 text-right">
        {/* Date & Title Row */}
        <div className="flex justify-between items-center mb-1">
          {/* Date Badge */}
          <div className="bg-gradient-to-r from-[#8E2C62] -ml-2 to-[#5D1F42] text-white px-2 py-[3px] rounded-r-[20px] text-[13px]">
            {post.created_at}
          </div>

          {/* Title */}
          <h3 className="mt-3 font-medium text-gray-800 text-[15.5px]">
            {post.name}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-1.5 text-[13.5px]">{post.description}</p>
      </div>

      <img
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${post.image}`}
        alt={post.title}
        className="w-21 h-22 rounded-[11px] object-cover"
      />
    </a>
  ))}
</div>


       {title !== "خصوصی تحریریں" &&
 books.length >
  (title === "سیر و تفریح"
    ? 1
    : title === "چمکتے تارے"
    ? 5
    : title === "گلشن تبسم"
    ? 3
    : 2) && (
    <div className="text-center mt-4">
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white rounded-[30.93px] shadow hover:bg-[#8E2C62] transition"
      >
        {visibleCount < books.length ? "مزید دیکھیں" : "کم دیکھیں"}
      </button>
    </div>
)}

      </div>
    </div>
  );
}
