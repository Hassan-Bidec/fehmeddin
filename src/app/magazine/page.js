// // import CountrySection from '@/componenets/CountrySection'
// // import DawatEFikrSwiper from '@/componenets/DawatEFikrSection'
// // import UrduMonthSelector from '@/componenets/UrduMonthSelector'
// // import React from 'react'


// // const page = () => {
// //   return (
// //     <div className='p-10'>
// //         <UrduMonthSelector/>
// //           {/* <CountrySection key={index} sub={sub} /> */}
// //  {subCategories.length > 0 ? (
// //         subCategories.map((sub, index) =>
// //           index % 2 === 0 ? (
// //             <CountrySection key={index} sub={sub} />
// //           ) : (
// //             <DawatEFikrSwiper key={index} sub={sub} />
// //           )
// //         )
// //       ) : (
// //         <p className="text-center">No year  found</p>
// //       )}

// //     </div>
// //   )
// // }

// // export default page

// "use client";
// import React, { useEffect, useState } from "react";
// import { categoriesApi } from "@/lib/api/category";
// // import CountrySection from "@/components/CountrySection";
// // import DawatEFikrSwiper from "@/components/DawatEFikrSwiper";
// // import UrduMonthSelector from "@/components/UrduMonthSelector";
// import CountrySection from "@/componenets/CountrySection";
// import DawatEFikrSwiper from "@/componenets/DawatEFikrSection";
// import UrduMonthSelector from "@/componenets/UrduMonthSelector";

// const Page = () => {
//   const [yearWiseData, setYearWiseData] = useState({});

//   useEffect(() => {
//     categoriesApi.yearWise().then((res) => {
//       if (res?.data) {
//         setYearWiseData(res.data); // yaha se API ka "data" milega
//         console.log("API Data:", res.data);
//       }
//     });
//   }, []);

//   return (
//     <div className="p-10">
//       <UrduMonthSelector/>

//       {/* {Object.keys(yearWiseData).length > 0 ? (
//         Object.entries(yearWiseData).map(([year, books], yearIndex) => (
//           <div key={year} className="mb-10">
//             <h2 className="text-2xl font-bold mb-4 text-center">{year}</h2>

//             {books.length > 0 ? (
//               books.map((book, index) =>
                
//                 index % 2 === 0 ? (
//                   <CountrySection key={book.id} sub={book} />
//                 ) : (
//                   <DawatEFikrSwiper key={book.id} sub={book} />
//                 )
//               )
//             ) : (
//               <p className="text-center text-gray-500">
//                 No books found for {year}
//               </p>
//             )}
//           </div>
//         ))
//       ) : (
//         <p className="text-center">No year found</p>
//       )} */}
//       {Object.keys(yearWiseData).length > 0 ? (
//   Object.entries(yearWiseData).map(([year, books], yearIndex) => (
//     <div key={year} className="mb-10">
//       {/* <h2 className="text-2xl font-bold mb-4 text-center">{year}</h2> */}

//       {books.length > 0 ? (
//         books.map((book, index) => {
//           console.log("Book:", book);   // 👈 yahan aayega console
//           console.log("Year:", year);   // 👈 saath hi year ka bhi

//           return index % 2 === 0 ? (
//             <CountrySection key={book.id} sub={book} />
//           ) : (
//             <DawatEFikrSwiper key={book.id} sub={book} />
//           );
//         })
//       ) : (
//         // <p className="text-center text-gray-500">
//         //   No books found for {year}
//         // </p>
//         <></>
//       )}
//     </div>
//   ))
// ) : (
//   <p className="text-center">No year found</p>
// )}

//     </div>
//   );
// };

// export default Page;
// Page.jsx

// "use client";
// import React, { useEffect, useState } from "react";
// import { categoriesApi } from "@/lib/api/category";
// import CountrySection from "@/componenets/CountrySection";
// import DawatEFikrSwiper from "@/componenets/DawatEFikrSection";
// import UrduMonthSelector from "@/componenets/UrduMonthSelector";

// const Page = () => {
//   const [yearWiseData, setYearWiseData] = useState({});

//   useEffect(() => {
//     categoriesApi.yearWise().then((res) => {
//       // handle both shapes: res.data.data or res.data
//       const payload = res?.data?.data ?? res?.data ?? {};
//       setYearWiseData(payload);
//       console.log("YearWiseData:", payload);
//     });
//   }, []);

//   return (
//     <div className="p-10">
//       <UrduMonthSelector />

//       {Object.keys(yearWiseData).length > 0 ? (
//         Object.entries(yearWiseData).map(([year, books], yearIndex) => (
//           <section key={year} className="mb-10">
//             {/* Show year heading ONCE */}
//             {/* <h2 className="text-2xl font-bold mb-4 text-center">{year}</h2> */}

//             {books && books.length > 0 ? (
//               // Alternate per YEAR: even yearIndex -> CountrySection, odd -> DawatEFikrSwiper
//               yearIndex % 2 === 0 ? (
//                 <CountrySection sub={{ name: year, books }} />
//               ) : (
//                 <DawatEFikrSwiper sub={{ name: year, books }} />
//               )
//             ) : (
//             //   <p className="text-center text-gray-500">No books for {year}</p>
//             <></>
//             )}
//           </section>
//         ))
//       ) : (
//         <p className="text-center">No year found</p>
//       )}
//     </div>
//   );
// };

// export default Page;

// "use client";
// import React, { useEffect, useState } from "react";
// import { categoriesApi } from "@/lib/api/category";
// import CountrySection from "@/componenets/CountrySection";
// import DawatEFikrSwiper from "@/componenets/DawatEFikrSection";
// import UrduMonthSelector from "@/componenets/UrduMonthSelector";

// const Page = () => {
//   const [yearWiseData, setYearWiseData] = useState({});
//   const [filters, setFilters] = useState({ year: null, month: null });

//   useEffect(() => {
//     categoriesApi.yearWise().then((res) => {
//       const payload = res?.data?.data ?? res?.data ?? {};
//       setYearWiseData(payload);
//       console.log("YearWiseData:", payload);
//     });
//   }, []);

//   return (
//     <div className="p-10">
//       <UrduMonthSelector  />
// <div className="mt-10">
//       {Object.keys(yearWiseData).length > 0 ? (
//         Object.entries(yearWiseData)
//          .reverse() 
//         .map(([year, books], yearIndex) => (
//           <section key={year} className="mb-10">
//             {yearIndex % 2 === 0 ? (
//               <CountrySection sub={{ name: year, books: books ?? [] }} />
//             ) : (
//               <DawatEFikrSwiper sub={{ name: year, books: books ?? [] }} />
//             )}
//           </section>
//         ))
//       ) : (
//         <p className="text-center">No year found</p>
//       )}
//       </div>
//     </div>
//   );
// };

// export default Page;


"use client";
import React, { useEffect, useState } from "react";
import { categoriesApi } from "@/lib/api/category";
import CountrySection from "@/componenets/CountrySection";
import DawatEFikrSwiper from "@/componenets/DawatEFikrSection";
import UrduMonthSelector from "@/componenets/UrduMonthSelector";
import Loader from "@/componenets/Loader";

const Page = () => {
  const [yearWiseData, setYearWiseData] = useState({});
  const [filters, setFilters] = useState({ year: null, month: null });
  const [loading, setLoading] = useState(false); // 👈 loader state

  // 🔹 API Call handler
  const fetchData = (year, month) => {
        setLoading(true); // start loader

    categoriesApi.yearWise(year, month).then((res) => {
      const payload = res?.data?.data ?? res?.data ?? {};
      setYearWiseData(payload);
            setLoading(false); // stop loader

      console.log("YearWiseData:", payload);
    });
  };

  // 🔹 By default load latest
  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Handle filter change
  const handleFilterChange = (year, month) => {
    setFilters({ year, month });
    fetchData(year, month);
  };

  return (
 <div className="p-4 2xl:container 2xl:mx-auto 2xl:px-10">
  <UrduMonthSelector onFilterChange={handleFilterChange} />

  <div className="mt-10">
    {loading ? (
      <Loader />
    ) : Object.keys(yearWiseData).length > 0 ? (
      Object.entries(yearWiseData)
        .reverse()
        .map(([year, books], yearIndex) => (
          <section key={year} className="mb-10">
            {yearIndex % 2 === 0 ? (
              <CountrySection sub={{ name: year, books: books ?? [] }} />
            ) : (
              <DawatEFikrSwiper sub={{ name: year, books: books ?? [] }} />
            )}
          </section>
        ))
    ) : (
      <p className="text-center">No year found</p>
    )}
  </div>
</div>


  );
};

export default Page;
