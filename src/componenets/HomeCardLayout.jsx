import Link from 'next/link';
import React from 'react'

const HomeCardLayout = ({ books = [], title }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  return (
    <div className="">
      {/* Section Header */}
      <div className="flex w-full justify-end">
        <h2
          className="bg-gradient-to-r from-[#8E2C62] to-[#5D1F42] text-white
      px-6 py-3 rounded-l-full text-xl sm:text-2xl mt-10 mb-2 font-bold inline-block whitespace-nowrap mr-2 md:mr-4"
        >
          {title}
        </h2>
      </div>


      <div
        dir="rtl"
        className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 
                   justify-items-center md:justify-items-start"
      >
        {books.slice(0, 15).map((post, i) => (
          <Link
            href={`/book/${post.slug}`}
            key={i}
            className="flex flex-col items-center text-right w-full max-w-[240px] 
               mx-auto md:mx-0 md:mr-5"
          >
            <div className="w-full p-1 h-[310px] rounded-lg shadow-[1.32px_1.32px_19.78px_0px_#00000012] flex flex-col">
              {/* Image */}
              <img
                src={`${BASE_URL}${post.image}`}
                alt={post.title}
                className="rounded-xl w-full max-w-[220px] h-[180px] object-cover mx-auto"
              />

              {/* Text Content */}
              <div className="px-2 py-2 flex-1 flex flex-col">
                <h3 className="text-[16px] text-gray-800">{post.name}</h3>
                <p className="text-gray-600 text-sm mt-2 font-[400] line-clamp-4">
                  {post.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomeCardLayout
